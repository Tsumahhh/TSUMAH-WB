const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="solotsuma@outlook.com"
global.location="Nairobi,Kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nigeria/Osun,Oshogbo";
global.github=process.env.GITHUB|| "https://github.com/Tsumahhh/TSUMAH-WB";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Vah3XPC6rsQtIcfTX342";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Vah3XPC6rsQtIcfTX342" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/75fab4da4ca60e4a651d0.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Empire_Md" 


global.devs = "2348078582627" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254743399594";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/75fab4da4ca60e4a651d0.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_06_04_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyOCxcbiAgICAgICAgNTksXG4gICAgICAgIDYxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTEwLFxuICAgICAgICA0MixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA1MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTE3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMzLFxuICAgICAgICA1MSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDksXG4gICAgICAgIDYyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ2LFxuICAgICAgICA0MixcbiAgICAgICAgNjAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTM4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMzksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjcsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDMwLFxuICAgICAgICA5OCxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0LFxuICAgICAgICA5MixcbiAgICAgICAgMTA1LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyLFxuICAgICAgICAxODQsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA0MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMixcbiAgICAgICAgMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyLFxuICAgICAgICA2NixcbiAgICAgICAgMjQ3LFxuICAgICAgICA2NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgODIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5Myxcb AgICAgICAgMjM3LFxuICAgICAgICAzOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDcxLFxuICAgICAgICAyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQyLFxuICAgICAgICA0MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODgsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NixcbiAgICAgICAgMzgsXG4gICAgICAgIDUyLFxuICAgICAgICA2MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTcyLFxuICAgICAgICA2OSxcbiAgICAgICAgNTEsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExOSxcbiAgICAgICAgNixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMyxcbiAgICAgICAgMzksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDksXG4gICAgICAgIDQzLFxuICAgICAgICAxMTksXG4gICAgICAgIDg3LFxuICAgICAgICAxNixcbiAgICAgICAgOTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc5LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYzF5OTBvd3N3RVNCNGVraWVNVGFkOGFQTmNpbWgvUlBxVTBVc0NDMVZJQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDM0LFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDM0LFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMjlMNHB4NS1ScTZ6SHZ0aWU5NF9Kd1wiLFxuICBcInBob25lSWRcIjogXCJjM2NhYjhjZi1jZGEyLTQ2ZTgtYmFmZC1lMWYyNzIxOTJjMjNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIyLFxuICAgICAgMzAsXG4gICAgICAxOTEsXG4gICAgICAxNTYsXG4gICAgICA0NixcbiAgICAgIDExMyxcbiAgICAgIDU0LFxuICAgICAgOTEsXG4gICAgICAxODEsXG4gICAgICAyNTIsXG4gICAgICAxMDUsXG4gICAgICAyNSxcbiAgICAgIDIzNCxcbiAgICAgIDE0NCxcbiAgICAgIDI0MSxcbiAgICAgIDE5MSxcbiAgICAgIDI1NSxcbiAgICAgIDUzLFxuICAgICAgMTkyLFxuICAgICAgMT 1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxNixcbiAgICAgIDg5LFxuICAgICAgMTYzLFxuICAgICAgMjMsXG4gICAgICAxMzUsXG4gICAgICAxMDIsXG4gICAgICAxNjUsXG4gICAgICA0OSxcbiAgICAgIDI3LFxuICAgICAgMTU5LFxuICAgICAgNjgsXG4gICAgICAyNDIsXG4gICAgICAyMjksXG4gICAgICA2NyxcbiAgICAgIDE3MSxcbiAgICAgIDQ3LFxuICAgICAgMjM5LFxuICAgICAgMTAxLFxuICAgICAgOTgsXG4gICAgICAxNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRk5LOFNHUERcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc0MzM5OTU5NDoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjAwNTQ0OTkxODQ2NTgzOjIwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ091MDA1UUJFTTJjaWNBR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTmkvVzVDelFnNmlndmVvSzNjdEFtQ2dDQWxEZWRwVDRwek40T2JIcGlqST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIvSzdtZFNtZHV5MURkTCtOTUdyaUhhZVJqV1orNS9SWUFxUVR4aWpNajM2S3Z5c243SnllRnk4K0NGd1REalo5QkdXQWRZRWhrWXBUK0RpdXBibStCZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5dGZhV0o5SW5hbzZHb1pidVpIQWhoRmtKNnE2V0czSGk2U1I2MHQ3VTM3MG1zcGpLS1B2eVJhcExlZ3VGdFBsMm9vMnBTZmM1MDNkQ01HR0NUL2tEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3NDMzOTk1OTQ6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA1MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ0OTgxNTg1LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSlRMXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKVEwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJXK1Q3Nk1zajVENVlpdjVpUGRtZWw5cDkrZGt4TlFOSnZIbmtrNDhkT1l3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjMxMTc0NTEzMCxcImN1cnJlbnRJbmRleFwiOjYsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTc0NDk4MTM3ODk3NlwifSIKfQ=="
module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "★彡[ᴏɴʟʏ_ᴏɴᴇ_🥇ᴇᴍᴘɪʀᴇ]彡★",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "Empire_Md",
  ownername:process.env.OWNER_NAME|| "★彡[ᴏɴʟʏ_ᴏɴᴇ_🥇ᴇᴍᴘɪʀᴇ]彡★",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
