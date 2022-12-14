#!/bin/bash
cd ~/Esprit
cd sitemap-generator
echo "Waiting for server to start ..."
sleep 20
echo "Starting Sitemap And Caching Pages ..."
npm run start
echo "Finished Sitemap And Caching Pages ..."
exit 0
