import * as puppeteer from 'puppeteer';

// https://hackernoon.com/tips-and-tricks-for-web-scraping-with-puppeteer-ed391a63d952
// Dont download all resources, we just need the HTML
// Also, this is huge performance/response time boost
const blockedResourceTypes = ['image', 'media', 'font', 'texttrack', 'object', 'beacon', 'csp_report', 'imageset'];
const whitelist = ['document', 'script', 'xhr', 'fetch'];
const skippedResources = [
  'quantserve',
  'adzerk',
  'doubleclick',
  'adition',
  'exelator',
  'sharethrough',
  'cdn.api.twitter',
  'google-analytics',
  'googletagmanager',
  'google',
  'fontawesome',
  'facebook',
  'analytics',
  'optimizely',
  'clicktale',
  'mixpanel',
  'zedo',
  'clicksor',
  'tiqcdn'
];

const RENDER_CACHE = new Map();

/**
 * https://developers.google.com/web/tools/puppeteer/articles/ssr#reuseinstance
 * @param {string} url URL to prerender.
 */
async function ssr(url) {
  if (RENDER_CACHE.has(url)) {
    const cached = RENDER_CACHE.get(url);
    return { html: cached.html, status: 200, content: cached.content, title: cached.title };
  }
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--single-process', '--no-zygote', '--no-sandbox']
  });
  // browserWSEndpoint = await browserT.wsEndpoint();
  // const browser = await puppeteer.connect({ browserWSEndpoint });
  const stylesheetContents = {};

  try {
    const page = await browser.newPage();
    await page.setUserAgent(
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36'
    );
    await page.setRequestInterception(true);
    page.on('request', request => {
      const requestUrl = request._url.split('?')[0].split('#')[0];
      if (
        blockedResourceTypes.indexOf(request.resourceType()) !== -1 ||
        skippedResources.some(resource => requestUrl.indexOf(resource) !== -1)
      ) {
        request.abort();
      } else {
        request.continue();
      }
    });

    page.on('response', async resp => {
      const responseUrl = resp.url();
      const sameOrigin = new URL(responseUrl).origin === new URL(url).origin;
      const isStylesheet = resp.request().resourceType() === 'stylesheet';
      if (sameOrigin && isStylesheet) {
        stylesheetContents[responseUrl] = await resp.text();
      }
    });

    const response = await page.goto(url, {
      timeout: 25000,
      waitUntil: 'networkidle0'
    });

    // Inject <base> on page to relative resources load properly.
    await page.evaluate(url => {
      const base = document.createElement('base');
      base.href = url;
      // Add to top of head, before all other resources.
      document.head.prepend(base);
    }, url);

    // Remove scripts and html imports. They've already executed.
    await page.evaluate(() => {
      const elements = document.querySelectorAll('script, link[rel="import"]');
      elements.forEach(e => {
        e.remove();
      });
    });

    const indexContent = await page.evaluate(() => {
      const mainContent = document.getElementsByClassName('extract')[0];
      const subTitle = document.getElementsByTagName('h1')[1];
      return { content: (mainContent as HTMLElement).innerText, title: subTitle.innerText };
    });

    // Replace stylesheets in the page with their equivalent <style>.
    await page.$$eval(
      'link[rel="stylesheet"]',
      (links, content) => {
        links.forEach(link => {
          const cssText = content[link.href];
          if (cssText) {
            const style = document.createElement('style');
            style.textContent = cssText;
            link.replaceWith(style);
          }
        });
      },
      stylesheetContents
    );

    const html = await page.content();

    // Close the page we opened here (not the browser).
    await page.close();
    RENDER_CACHE.set(url, { html, content: indexContent.content, title: indexContent.title });
    return { html, status: response.status(), content: indexContent.content, title: indexContent.title };
  } catch (e) {
    const html = e.toString();
    console.warn({ message: `URL: ${url} Failed with message: ${html}` });
    return { html, status: 500 };
  } finally {
    await browser.close();
  }
}

function clearCache() {
  RENDER_CACHE.clear();
}
export { ssr, clearCache };
