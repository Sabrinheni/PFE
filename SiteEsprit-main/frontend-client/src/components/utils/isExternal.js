var checkDomain = function (url) {
  if (url.indexOf("//") === 0) {
    url = window.location.protocol + url
  }
  return url
    .toLowerCase()
    .replace(/([a-z])?:\/\//, "$1")
    .split("/")[0]
}

export function isExternal(url) {
  return (
    url && (url.indexOf(":") > -1 || url.indexOf("//") > -1) && checkDomain(window.location.href) !== checkDomain(url)
  )
}
