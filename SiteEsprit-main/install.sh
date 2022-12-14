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