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

# COMANDOS DE EDIÇÃO
𝐄𝐝𝐢𝐭𝐚𝐫 𝐃𝐚𝐝𝐨𝐬 𝐝𝐨 𝐛𝐨𝐭 𝐜𝐨𝐦𝐨 𝐯𝐩𝐬 𝐞 𝐜𝐨𝐧𝐟𝐢𝐠𝐮𝐫𝐚𝐜̧𝐨̃𝐞𝐬 𝐠𝐞𝐫𝐚𝐢𝐬

cd nano index.js

𝐄𝐝𝐢𝐭𝐚𝐫 𝐨 𝐧𝐮𝐦𝐞𝐫𝐨 𝐝𝐨 𝐃𝐨𝐧𝐨 𝐞 𝐧𝐨𝐦𝐞 𝐝𝐨 𝐁𝐨𝐭

cd dono && nano settings.json



pra finalizar insira este comando na vps que esta a script ssh-manger (isso é para permitir a api a criar os logins dentro da vps)

wget api.gestorvip.com/criarusuario.sh && chmod +x criarusuario.sh


