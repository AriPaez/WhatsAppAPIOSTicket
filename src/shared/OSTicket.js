const logs=require("../services/Logs");
const osTicketAPI = require('osticket-nodejs-api-wrapper');

function crateTicket(nameUser, mailUser,subjectUser,messageUser,topicIdUser,topic ){


    var formData = {
        name : 'Ariel Páez',
        email : 'a.paez@sanatoriodeloeste.com',
        subject: 'Soporte Ticket',
        message: 'Probando API WhatsApp',
        topicId : 'General Questions'
    };
    
    osTicketAPI({
       
        API_KEY : 'E863990D0CD22C31A79310A58863D576', 
        INSTALL_URL_PATH : 'http://sanatoriodeloeste.dyndns.org:8090',
        ALERT : true, 
        AUTO_RESPOND : true
    }, formData, function(err, osTicketId)
    {
        if(!err)
        {
             console.log("Your osTicket Support Ticket ID #", osTicketId);
        }
        else
        {
             console.log("Error creating support ticket! ", err);
        }
           
    });

}


module.exports={
    crateTicket
}