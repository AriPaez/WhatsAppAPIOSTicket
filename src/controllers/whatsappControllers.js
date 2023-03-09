
const  whatsappService=require("../APICloud/APICloudWhatsapp");
const processMessage=require("../shared/robotLogic");

const logs=require("../services/Logs");

const verifyToken=(req, res)=>{

    
    try 
    {
        var accessToken="uF3xm1s4pWU0GkILg3AGKlOSfWSl4n7Q6a0cdlWV";
       
        var token =req.query["hub.verify_token"];

        
        var challange =req.query["hub.challenge"];
 
        if(challange!=null && token!=null && token==accessToken)
        {
            res.send(challange);
        }
        else
        {
            res.status(400).send();
        }
    } 
    catch (error) {
        res.status(400).send();
    }

}


const reciveMessage =(req,res)=>{
    
    
    try {
         
            var entry=(req.body["entry"])[0];
        
            var changes=(entry["changes"])[0];
        
            var value=changes["value"];
            
            var messageObject=value["messages"];

            if(typeof messageObject != "undefined")
            {
                 
                var nameUser=(value["contacts"][0].profile.name);
              
                var messages=messageObject[0];

                var number=formatNumberToArgentina(messages);
             
                var text=getTextUser(messages);
              
                
                processMessage.logic(text,number,nameUser,typeMessage(messages));
              
                if(text!="")
                {
                   
                }
                
            }
           
        
         
        res.send("EVENT_RECEIVED");

    } catch (error) {
        
        res.send("EVENT_RECEIVED"); 

    }
}


function getTextUser(messages)
{
    var text="";
    var typeMessage=messages["type"];
    
    if(typeMessage=="text")
    {
        text=(messages["text"])["body"];
    } 
    else if(typeMessage="interactive"){

        var interactiveObject=messages["interactive"];
        var typeInteractive=interactiveObject["type"];

        if(typeInteractive=="button_reply"){

          
            text=(interactiveObject["button_reply"])["title"];
            //text=interactiveObject.button_reply.id;
          
        }
        else if(typeInteractive=="list_reply")
        {
            text=(interactiveObject["list_reply"])["title"];
        }
         


    }
    else
    {
       logs.logs("Error!!");
    }

    return text;

}

function formatNumberToArgentina(messages)
{
    return messages["from"].replace('9','');
}

function typeMessage(messages)
{
    var text="";
    var tMessage=messages["type"];
    
    if(tMessage=="text")
    {
        return  "text";
    } 
    else if(tMessage="interactive")
    {
        return  "interactive";
    }
}

function captureName(value)
{
    var value=changes["value"];
}
 

module.exports={
    verifyToken,
    reciveMessage,
    
}