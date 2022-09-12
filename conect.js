const { makeInMemoryStore, DisconnectReason, delay 
} = require('@adiwajshing/baileys');

const { hx, fs, qrterminal, exec, spawn, execSync, moment, color, time, hora, date, createExif, wait, getRandom, banner2, start2, banner3, infopd, success, start, close, temporizador, kyun, state, SaveState, P, Boom } = require('./consts-func.js')

async function conpdate () {

module.exports = conn = async (conn, update) => {
  
const { startAle } = require("./index.js")  
 
try {
const { connection, lastDisconnect, qr, isNewLogin, receivedPendingNotifications } = update

if(qr) {
console.log(color("VOCÊ PRECISARÁ DE UM SEGUNDO CELULAR, PARA TIRAR FOTO DO QRCODE, PRA DEPOIS ESCANEAR A FOTO QUE TIROU"))
}

if(connection === 'close') {
  
const RECONECTAR_ = new Boom(lastDisconnect?.error)?.output?.statusCode

cntin = String(lastDisconnect?.error)

if(RECONECTAR_ == DisconnectReason.connectionReplaced) {
console.log(color("< OUTRA SESSÃO ESTÁ ABERTA E LIGADO_ DESLIGUE ESTA PARA PERMANECER EM QUAL ATIVOU POR ÚLTIMO.. >", "yellow"))
process.exit()
} else if(cntin.includes("Connection Failure")) {
exec("rm -rf GESTOR-QR.json && rm dados_store.json")  
console.log(color("QRCODE ESTÁ MORTO, NÃO ESCANEOU CORRETAMENTE OU ELE DESCONECTOU DO WHATSAPP, IREI APAGAR ELE E GERAR UM NOVO QRCODE, BOA SORTE..", "red"))
process.exit() 
} else if(RECONECTAR_) {
startAle("index.js")
} else {
console.log('Conexão fechada devido a ', lastDisconnect.error, ', Reconectar ')
}
} else if(connection === "open") {
console.log(banner3.string)   
console.log(banner2.string)  
console.log(color(
`𝑬𝑸𝑼𝑰𝑷𝑬 𝑽𝑰𝑷 𝑩𝑶𝑻 - 𝑪𝑶𝑵𝑬𝑿𝑨̃𝑶 𝑩𝑬𝑴 𝑺𝑼𝑪𝑬𝑫𝑰𝑫𝑨 ✔`))
}
} catch (e) {
console.log(color(e, "red"))  
}
}
} 

conpdate()