# COMANDOS PARA INSTALAR NA VPS LINUX

sudo apt update && sudo apt upgrade

sudo apt install git

sudo apt install npm

curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -

sudo apt-get install -y nodejs

sudo apt install apt-transport-https ca-certificates 

sudo apt-get install -y libgbm-dev wget unzip fontconfig locales gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils

wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo apt install ./google-chrome-stable_current_amd64.deb

git clone https://github.com/gestorvip/GestorBot3.0-md.git && cd GestorBot3.0-md

sh start.sh


Após escanear o qr code pare o bot digitando ctrl+C e faça esses comandos 

sudo npm install -g pm2

pm2 start index.js

