const fs = require('fs')
const chalk = require('chalk')

// ganti info bot dibawah ini
global.botName = "𝐌𝐚𝐥𝐯𝐢𝐧-𝐯𝟑"
global.ownerName = "╚»★𝗞𝗜𝗡𝗡𝗚-𝗠𝗔𝗟𝗩𝗜𝗡★«╝"
global.botNumber = "263780934873"
global.devNumber = ["263780934873"]

global.Auto_Typing = true // auto typing
global.Auto_Recording = false // auto recording
global.Auto_ReadPesan = false // auto read messages
global.Type_Menu = "v1" // TypeMenu v1:IMAGE v2:TEXT V3:TEXT+QSTATUS

global.domain = "https://example.id" // Ganti Domain Lu
global.key_plta = "-" // Isi Apikey Plta Lu
global.key_pltc = "-" // Isi Apikey Pltc Lu
global.nama_host = "OwensDev" // Ganti Nama Store Atau nama Host Lu

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})