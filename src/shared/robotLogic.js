
const templateWhatsapp=require("./templateWhatsapp.js");

const APICloudWhatsapp=require("../APICloud/APICloudWhatsapp");
const OsTiket=require("./OSTicket");

const logs=require("../services/Logs");
var users=[];

function logic(textUser, number,nameUser,typeMessage)
{
    textUser=textUser.toLowerCase();
   
    

      if(isTheUser(number)==false)
      {
       
        
        //Fisrt message . Main menu.
        loadUser(number,true);
        
        setTimeout(() => {
            APICloudWhatsapp.sendMessageWhatsapp(templateWhatsapp.helpTopic(number));
          }, 2000);
       
        APICloudWhatsapp.sendMessageWhatsapp(templateWhatsapp.greetings(number,nameUser));
        
        
      }
      else
      {  
            var userCurrent= searchUser(number);
            //subMenu HelpTopic
            if(textUser.localeCompare("a")==0 && searchUser(number).softwareProblem==false  )
            {
                APICloudWhatsapp.sendMessageWhatsapp(templateWhatsapp.softwareProblem(number)); 
                searchUser(number).softwareProblem=true;
                var user=searchUser(number);
                disableHardware(user);
                disableNet(user);


                
            }
            else if(textUser.localeCompare("b")==0   && searchUser(number).hardwareProblem==false )
            {   
                APICloudWhatsapp.sendMessageWhatsapp(templateWhatsapp.hardwareProblem(number)); 
                searchUser(number).hardwareProblem=true;
                var user=searchUser(number);
                disableSoftware(user);
                disableNet(user);
                
            }
            else if(textUser.localeCompare("c")==0   && searchUser(number).netProblem==false)
            {    
                APICloudWhatsapp.sendMessageWhatsapp(templateWhatsapp.netProblem(number)); 
                searchUser(number).netProblem=true;
                var user=searchUser(number);
                disableSoftware(user);
                disableHardware(user);


            }
            
            //SubMenu Software
            else if(textUser.localeCompare("a")==0 && searchUser(number).softwareProblemGeclisa==false)
            {
                setTimeout(() => {
                    APICloudWhatsapp.sendMessageWhatsapp(templateWhatsapp.downloadGuideOsTicket(number)) ;
                  }, 1000);
                APICloudWhatsapp.sendMessageWhatsapp(templateWhatsapp.softwareProblemGeclisa(number));
               
               
               

              searchUser(number).softwareProblemGeclisa=true;
               

            }
            else if(textUser.localeCompare("b")==0  && searchUser(number).softwareProblemML==false)
            { 
                setTimeout(() => {
                    APICloudWhatsapp.sendMessageWhatsapp(templateWhatsapp.downloadGuideOsTicket(number)) ;
                  }, 1000);
                APICloudWhatsapp.sendMessageWhatsapp(templateWhatsapp.softwareProblemML(number));
               
                searchUser(number).softwareProblemML=true;
               
              
            }
            else if(textUser.localeCompare("c")==0  && searchUser(number).softwareProblemBejerman==false  )
            { 
                setTimeout(() => {
                    APICloudWhatsapp.sendMessageWhatsapp(templateWhatsapp.downloadGuideOsTicket(number)) ;
                  }, 1000);
                APICloudWhatsapp.sendMessageWhatsapp(templateWhatsapp.softwareProblemBejerman(number));
               
                searchUser(number).softwareProblemBejerman=true;
               
            }
            //SubMenu Hardware
            else if(textUser.localeCompare("a")==0 && searchUser(number).hardwareProblemNotBootPC==false)
            { 
                setTimeout(() => {
                    APICloudWhatsapp.sendMessageWhatsapp(templateWhatsapp.downloadGuideOsTicket(number)) ;
                  }, 1000);
               
                APICloudWhatsapp.sendMessageWhatsapp(templateWhatsapp.hardwareProblemNotBootPC(number));
               
                searchUser(number).hardwareProblemNotBootPC=true;
              
            }
            else if(textUser.localeCompare("b")==0  && searchUser(number).hardwareProblemDoesNotShowImageOnMonitor==false )
            { 
                
                setTimeout(() => {
                    APICloudWhatsapp.sendMessageWhatsapp(templateWhatsapp.downloadGuideOsTicket(number)) ;
                  }, 1000);
                
                APICloudWhatsapp.sendMessageWhatsapp(templateWhatsapp.hardwareProblemDoesNotShowImageOnMonitor(number));
               
                searchUser(number).hardwareProblemDoesNotShowImageOnMonitor=true;
               
            }
            else if(textUser.localeCompare("c")==0  && searchUser(number).hardwareProblemMouseTeclado==false )
            { 
                setTimeout(() => {
                    APICloudWhatsapp.sendMessageWhatsapp(templateWhatsapp.downloadGuideOsTicket(number) );
                  }, 1000);
              
             
                APICloudWhatsapp.sendMessageWhatsapp(templateWhatsapp.hardwareProblemMouseTeclado(number));
               
                searchUser(number).hardwareProblemMouseTeclado=true;
               
            }
            //SubMenu Net
            else if(textUser.localeCompare("a")==0 && searchUser(number).netProblemInternet==false  )
            { 
                setTimeout(() => {
                    APICloudWhatsapp.sendMessageWhatsapp(templateWhatsapp.downloadGuideOsTicket(number)) ;
                  }, 1000);
              
                APICloudWhatsapp.sendMessageWhatsapp(templateWhatsapp.netProblemInternet(number));
               
                searchUser(number).netProblemInternet=true;
                

            }
            else if(textUser.localeCompare("b")==0 && searchUser(number).netProblemOpenVPN==false)
            {  
                setTimeout(() => {
                    APICloudWhatsapp.sendMessageWhatsapp(templateWhatsapp.downloadGuideOsTicket(number)) ;
                  }, 2000);

                setTimeout(() => {
                    APICloudWhatsapp.sendMessageWhatsapp(templateWhatsapp.sendDocumentOpenVPNConnect(number)) ;
                  }, 1000);
               
                APICloudWhatsapp.sendMessageWhatsapp(templateWhatsapp.netProblemOpenVPN(number));
              
                searchUser(number).netProblemOpenVPN=true;
                
            }
            else if(textUser.localeCompare("c")==0  && searchUser(number).netProblemRemoteDesktop==false )
            {
                setTimeout(() => {
                    APICloudWhatsapp.sendMessageWhatsapp(templateWhatsapp.downloadGuideOsTicket(number)) ;
                  }, 2000);

                setTimeout(() => {
                    APICloudWhatsapp.sendMessageWhatsapp(templateWhatsapp.sendDocumentRDP(number) );
                  }, 1000);
             
                APICloudWhatsapp.sendMessageWhatsapp(templateWhatsapp.netProblemRemoteDesktop(number));
                
                searchUser(number).netProblemRemoteDesktop=true;
                
            }
            
            
            //Opcion download Guide OsTiket
            else if(textUser.localeCompare("descargar")==0){
                APICloudWhatsapp.sendMessageWhatsapp(templateWhatsapp.sendDocumentOsTicket(number));
                deleteUser(number);
                setTimeout(() => {
                    APICloudWhatsapp.sendMessageWhatsapp(templateWhatsapp.queryDone(number));
                  }, 5000);
            }
            else if( userCurrent.netProblemRemoteDesktop 
                     || userCurrent.softwareProblemGeclisa 
                     || userCurrent.softwareProblemML
                     || userCurrent.softwareProblemBejerman
                     ||userCurrent.hardwareProblemNotBootPC
                     ||userCurrent.hardwareProblemDoesNotShowImageOnMonitor 
                     ||userCurrent.hardwareProblemMouseTeclado
                     ||userCurrent.netProblemInternet
                     ||userCurrent.netProblemOpenVPN)
            {
                 
                    deleteUser(number);
                    setTimeout(() => {
                        APICloudWhatsapp.sendMessageWhatsapp(templateWhatsapp.queryDone(number));
                      }, 5000);
                  
            }
            else
            {
                APICloudWhatsapp.sendMessageWhatsapp(templateWhatsapp.iDontUnderstand(number)); 
            }
             
      } 
    
      
    
  
}


function loadUser(number)
{
     
    users.push({
        inputNumber:number,
        inputTime:"time",
        softwareProblem:false,
        hardwareProblem:false,
        softwareProblemGeclisa:false,
        softwareProblem:false,
        netProblem:false,
        softwareProblemML:false,
        softwareProblemBejerman:false,
        hardwareProblemNotBootPC:false,
        hardwareProblemDoesNotShowImageOnMonitor:false,
        hardwareProblemMouseTeclado:false,
        netProblemRemoteDesktop:false,
        netProblemInternet:false,
        netProblemOpenVPN:false,
    });
 
}

function disableSoftware(user)
{
    user.softwareProblemGeclisa=true,
    user.softwareProblem=true,
    user.softwareProblemML=true;
    user.softwareProblemBejerman=true
   
}

function disableHardware(user)
{
    user.hardwareProblem=true;
    user.hardwareProblemNotBootPC=true,
    user.hardwareProblemDoesNotShowImageOnMonitor=true,
    user.hardwareProblemMouseTeclado=true
   
}

function disableNet(user)
{
    user.netProblem=true;
    user.netProblemInternet=true,
    user.netProblemOpenVPN=true,
    user.netProblemRemoteDesktop=true

} 
  

 
function isTheUser(number)
{
   
    return !!users.find(f=>f.inputNumber==number);

}

function searchUser(number)
{
    return users[users.map(m=> { return m.inputNumber; }).indexOf(number)];
    
}


function deleteUser(number)
{
     
    user = users.find( u => u.inputNumber == number);

    if (undefined != user) {
       
        const indexUser = users.indexOf(user);
        users.splice(indexUser, 1);
        
    }
     
        

}




module.exports={
    logic
}