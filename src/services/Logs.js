const fs=require("fs");
const registerLog=new console.Console( fs.createWriteStream("./logs.txt"));

function logs(theLog)
{
    registerLog.log(theLog);
}

module.exports={
    logs
}