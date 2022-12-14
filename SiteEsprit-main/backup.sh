#!/bin/bash
cd ~/
cd backup
mongodump --db esprit2 --gzip --archive > database_`date "+%Y-%m-%d"`.gz
tar -zcvf uploads_`date "+%Y-%m-%d"`.gz ~/Esprit/esprit-backend/uploads
cd ..
/usr/sbin/gdrive upload --parent 1jQjT03ioGPs4wwTaKdbCZ5A_H9Yb5wQY backup/database_`date "+%Y-%m-%d"`.gz
/usr/sbin/gdrive upload --parent 1jQjT03ioGPs4wwTaKdbCZ5A_H9Yb5wQY backup/uploads_`date "+%Y-%m-%d"`.gz
exit 0
