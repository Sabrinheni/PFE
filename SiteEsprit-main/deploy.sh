whoami
pwd
cd
pwd
cd /home/ftp-esprit/Esprit/SiteEsprit
pwd
echo "--------------------------- Starting Deployment ----------------------------"
git branch
echo "--------------------------- Starting checkout prod branch ----------------------------"
git checkout production
echo "--------------------------- Starting git pull ----------------------------"
git pull
echo "--------------------------- Starting npm install root ----------------------------"
npm install
echo "--------------------------- Starting npm install frontoffice ----------------------------"
cd frontend-client
npm install
echo "--------------------------- Starting npm build frontoffice ----------------------------"
npm run build
npm run precompress
echo "--------------------------- Starting npm install backoffice ----------------------------"
cd ..
cd backend-client
npm install
echo "--------------------------- Starting npm build backoffice ----------------------------"
npm run build
npm run precompress
echo "--------------------------- Starting npm install backend ----------------------------"
cd ..
cd esprit-backend
npm install
echo "--------------------------- Starting npm build backend  ----------------------------"
npm run build
echo "--------------------------- Restarting pm2 service backend  ----------------------------"
pm2 restart esprit_website
cd ..
cd sitemap-generator
echo "Waiting for server to start ..."
sleep 15
echo "Starting Sitemap And Caching Pages ..."
npm run start
echo "Finished Sitemap And Caching Pages ..."
exit 0
