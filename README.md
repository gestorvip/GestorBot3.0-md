# COMANDOS PARA INSTALAR PELO TERMUX

Download do termux apk , o da play store não presta

https://drive.google.com/file/d/1vmyqpMuvnHeXwPUbFzgBOIqQ12bf2Jg4/view?usp=sharing

Comandos , digite os comandos de 1 por um para não haver erros

pkg update -y && pkg upgrade -y

pkg install git -y

pkg install nodejs -y

termux-setup-storage

cd /sdcard && git clone https://github.com/gestorvip/GestorBot3.0-md.git && cd GestorBot3.0-md

npm install

sh start.sh

ESSE COMANDO É PARA LIGAR, AE VAI GERAR O QRCODE, VOCÊ PRECISARÁ DE UM SEGUNDO CELULAR PARA TIRAR FOTO DO QRCODE, LÓGO DEPOIS, ESCANEAR A FOTO QUE TIROU COM UM WHATSAPP SECUNDÁRIO QUE CONTENHA UM NÚMERO CLARO.., PARA ELE SERVIR DE BOT..
QUALQUER PROBLEMA QUE CONTER, ENTRA NO GRUPO DO COMENTÁRIO FIXADO, DO VIDEO MAIS ATUALIZADO, IREI ATUALIZAR SEMPRE QUE EU PODER..


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



Após escanear o qr code pare o bot e faça esses comandos 


pm2 start index.js

sudo npm install -g pm2
