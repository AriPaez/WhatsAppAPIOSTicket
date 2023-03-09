function greetings(number,nameUser)
{
   
    const data= JSON.stringify({
 
        "messaging_product": "whatsapp",    
        "to": number,
        "type": "text",
        "text": {
        "body": `*Hola😁👋${nameUser}* le saluda el equipo de Sistemas. Muchas gracias por contactarnos.\n`
                +"\n"
                +"\n"
                +"Estimado/a: \n"
                +"Le recordamos que las llamadas son por urgencias, en horario de 8:00 hs a 17:00 hs de lunes a viernes a los siguientes contactos:\n\n"
                +"Ituzaingó: 115068-9100 Int. 1255\n"
                +"Merlo: 0220-486-3419 Int. 2116\n\n"
                +"También podrá ingresar a nuestro Portal del Sanatorio para " 
                +"ver todos los servicios en línea que"
                +"se utilizan en la institución: sanatoriodeloeste.dyndns.org:8080\n\n"
        }

    });
    return data;

}

function helpTopic(number)
{
 

        const data= JSON.stringify({
 
            "messaging_product": "whatsapp",    
            "to": number,
            "type": "text",
            "text": {
            "body":"Para poder brindarle una rápida asistencia, por favor escriba la letra de la opción seleccionada\n\n"
            +"Temas de ayuda:\n"
            +"A 👉 Soporte Software\n"
            +"          ➡️GeClisa\n"
            +"          ➡️ML\n"
            +"          ➡️Bejerman\n\n"
            +"B 👉 Soporte Hardware\n"
            +"          ➡️No arranca PC\n"
            +"          ➡️No muestra imagen el monitor\n"
            +"          ➡️Mouse / Teclado\n\n"
            +"C 👉 Soporte Red\n"
            +"          ➡️ Sin Servicio de Internet\n"
            +"          ➡️ Sin servicio de OpenVPN\n"
            +"          ➡️ Escritorio Remoto\n"
            }
    
        });
        return data;

    


}

function softwareProblem(number)
{
   
    const data= JSON.stringify({
 
        "messaging_product": "whatsapp",    
        "to": number,
        "type": "text",
        "text": {
        "body":  "Perfecto, ha seleccionado *Soporte Software* \n\n"
                 +"Por favor escriba la letra de la opción seleccionada\n"
                 +"A👉 GeClisa\n"
                 +"B👉 ML\n"
                 +"C👉 Bejerman\n"
        }

    });
    return data;

}

function softwareProblemGeclisa(number)
{
   
    const data= JSON.stringify({
 
        "messaging_product": "whatsapp",    
        "to": number,
        "type": "text",
        "text": {
        "body":  "Perfecto, ha seleccionado *GeClisa* \n\n"
                    +"Si usted tiene alguno de los siguientes casos, por favor generar ticket en el siguiente link:"
                    +"http://sanatoriodeloeste.dyndns.org:8090/login.php\n\n" 
                    +"➡️ Instalación de Geclisa\n"
                    +"➡️ Creación de usuario\n"
                    +"➡️ Solicitud de permisos de usuario\n"
                    
        }
        
    });
    return data;

}


function softwareProblemML(number)
{
   
    const data= JSON.stringify({
 
        "messaging_product": "whatsapp",    
        "to": number,
        "type": "text",
        "text": {
        "body":  "Perfecto, ha seleccionado *ML* \n\n"
                  +"Si usted tiene alguno de los siguientes casos, por favor generar ticket en el siguiente link:"
                  +"http://sanatoriodeloeste.dyndns.org:8090/login.php\n\n" 
                  +"➡️ Instalación de ML\n"
                  +"➡️ Creación de usuario\n"
                  +"➡️ Solicitud de permisos de usuario\n\n"
                
        }

    });
    return data;

}
 
function softwareProblemBejerman(number)
{
   
    const data= JSON.stringify({
 
        "messaging_product": "whatsapp",    
        "to": number,
        "type": "text",
        "text": {
        "body":  "Perfecto, ha seleccionado *Bejerman* \n\n"
                +"Si usted tiene alguno de los siguientes casos, por favor generar ticket en el siguiente link:"
                +"http://sanatoriodeloeste.dyndns.org:8090/login.php\n\n" 
                +"➡️ Instalación de Bejerman\n"
                +"➡️ Actualización en su versión instalada\n"
                
                
        }

    });
    return data;

}

 
function hardwareProblem(number)
{
   
    const data= JSON.stringify({
 
        "messaging_product": "whatsapp",    
        "to": number,
        "type": "text",
        "text": {
        "body":  "Perfecto, ha seleccionado *Soporte Hardware* \n\n"
                 +"Por favor escriba la letra de la opción seleccionada\n"
                 +"A👉 No arranca PC\n"
                 +"B👉 No muestra imagen el monitor\n"
                 +"C👉 Mouse / Teclado\n\n"
                
        }

    });
    return data;

}


function hardwareProblemNotBootPC(number)
{
   
    const data= JSON.stringify({
 
        "messaging_product": "whatsapp",    
        "to": number,
        "type": "text",
        "text": {
        "body":  "Perfecto, ha seleccionado *No arranca PC* \n\n"
                 +"Por favor verifica los siguientes puntos:\n\n"
                 +"➡️Revisar que la PC esté conectado correctamente al tomacorriente\n"
                 +"➡️Revisar que el monitor esté conectado correctamente al tomacorriente\n"
                 +"➡️Verificar que esté conectado correctamente el monitor a la PC\n"
                 +"Si ha realizado la verificación y no funciona, por favor generer ticket en el siguiente link:"
                 +"http://sanatoriodeloeste.dyndns.org:8090/login.php"
                
        }

    });
    return data;

}


function hardwareProblemDoesNotShowImageOnMonitor(number)
{
   
    const data= JSON.stringify({
 
        "messaging_product": "whatsapp",    
        "to": number,
        "type": "text",
        "text": {
        "body":  "Perfecto, ha seleccionado *No muestra imagen Monitor* \n\n"
                  +"Por favor verifica los siguientes puntos:\n\n"
                  +"➡️Revisar que esté conectado correctamente al tomacorriente el monitor\n"
                  +"➡️Verificar que esté conectado correctamente el monitor a la PC\n"
                  +"Si ha realizado la verificación y no funciona, por favor generer ticket en el siguiente link:"
                  +"http://sanatoriodeloeste.dyndns.org:8090/login.php"
        }

    });
    return data;

}

function hardwareProblemMouseTeclado(number)
{
   
    const data= JSON.stringify({
 
        "messaging_product": "whatsapp",    
        "to": number,
        "type": "text",
        "text": {
        "body":  "Perfecto, ha seleccionado *Mouse / Teclado* \n\n"
                +"Por favor verifica los siguientes puntos en caso de no funcionar el mouse o teclado:\n\n"
                +"➡️Revisar que esté conectado correctamente a la CPU\n"
                +"➡️Cambiar a otro puerto de la CPU\n"
                +"➡️Reinciar la PC\n"
                +"Si ha realizado la verificación y no funciona, por favor generer ticket en el siguiente link:"
                +"http://sanatoriodeloeste.dyndns.org:8090/login.php"
                
        }

    });
    return data;

}

function netProblem(number)
{
   
    const data= JSON.stringify({
 
        "messaging_product": "whatsapp",    
        "to": number,
        "type": "text",
        "text": {
        "body":  "Perfecto, ha seleccionado *Soporte Red* \n\n"
                 +"Por favor escriba la letra de la opción seleccionada\n"
                 +"A👉 Sin Servicio de Internet\n"
                 +"B👉 Sin servicio de OpenVPN\n"
                 +"C👉 Escritorio Remoto\n"
                
        }

    });
    return data;

}


function netProblemInternet(number)
{
   
    const data= JSON.stringify({
 
        "messaging_product": "whatsapp",    
        "to": number,
        "type": "text",
        "text": {
        "body":  "Perfecto, ha seleccionado *Internet* \n\n"
                +"Por favor verifica los siguientes puntos:\n\n"
                +"➡️Revisar que esté conectado correctamente el cable de red a la PC\n"
                +"➡️Reinciar la PC\n"
                +"Si ha realizado la verificación y no funciona, por favor generer ticket en el siguiente link:"
                +"http://sanatoriodeloeste.dyndns.org:8090/login.php"
                
        }

    });
    return data;

}


function netProblemOpenVPN(number)
{
   
    const data= JSON.stringify({
 
        "messaging_product": "whatsapp",    
        "to": number,
        "type": "text",
        "text": {
        "body":   "Perfecto, ha seleccionado *OpenVPN* \n\n"
                +"Por favor verifica los siguientes puntos:\n\n"
                +"➡️Revisar que esté activo el servicio\n"
                +"➡️Verificar que tenga conexión a internet \n"
                +"➡️Reinciar la PC \n"
                +"Si ha realizado la verificación y no funciona, por favor generer ticket en el siguiente link:"
                +"http://sanatoriodeloeste.dyndns.org:8090/login.php"
                
        }

    });
    return data;

}

function netProblemRemoteDesktop(number)
{
   
    const data= JSON.stringify({
 
        "messaging_product": "whatsapp",    
        "to": number,
        "type": "text",
        "text": {
        "body":   "Perfecto, ha seleccionado *Escritorio Remoto* \n\n"
                +"Por favor verifica los siguientes puntos:\n\n"
                +"➡️Revisar que esté activo el servicio VPN\n"
                +"➡️Verificar que tenga conexión a internet \n"
                +"➡️Reinciar la PC \n"
                +"Si ha realizado la verificación y no funciona, por favor generer ticket en el siguiente link:"
                +"http://sanatoriodeloeste.dyndns.org:8090/login.php" 
        }

    });
    return data;

}


 

function developing(number)
{
   
    const data= JSON.stringify({
 
        "messaging_product": "whatsapp",    
        "to": number,
        "type": "text",
        "text": {
        "body":  "En proceso..."
                
        }

    });
    return data;

}

function iDontUnderstand(number)
{
   
    const data= JSON.stringify({
 
        "messaging_product": "whatsapp",    
        "to": number,
        "type": "text",
        "text": {
        "body":  "No comprendo, por favor vuelva a ingresar la opción correcta."
                
        }

    });
    return data;

}

function downloadGuideOsTicket(number)
{

    const data= JSON.stringify({
 
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": "Si nunca ha utilizado nuestro sistema de ticket, por favor descargar guía de registro. "
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "downloadButton",
                            "title": "Descargar"
                        }
                    } 
                ]
            }
        }

    });

    return data;


}

function sendDocumentOsTicket(number)
{
    const data= JSON.stringify({
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": number,
            "type": "document",
            "document": {
                "link": "https://drive.google.com/uc?export=download&id=1HgznwsfcnRDuajq_Tqwc36qO5LdLELdI",
                "caption":"Registro de OsTicket"
            }
    });

    return data;
}


function sendDocumentOpenVPNConnect(number)
{
    const data= JSON.stringify({
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": number,
            "type": "document",
            "document": {
                "link": "https://drive.google.com/uc?export=download&id=1o_Jb8cYW-vJjvriq2qSSY_d4JDc_sSF-",
                "caption":"Intructivo OpenVPNConnect"
            }
    });

    return data;
}

function sendDocumentRDP(number)
{
    const data= JSON.stringify({
            "messaging_product": "whatsapp",
            "recipient_type": "individual",
            "to": number,
            "type": "document",
            "document": {
                "link": "https://drive.google.com/uc?export=download&id=1dd9w9rnUBtU4nVDh18quxKhPOIjkms9f",
                "caption":"Intructivo Escritorio Remoto con OpenVPNConnect"
            }
    });

    return data;
}
 
 


function queryDone(number)
{
    const data= JSON.stringify({
 
        "messaging_product": "whatsapp",    
        "to": number,
        "type": "text",
        "text": {
        "body":  "Usted ya ha realizado la consulta, por favor si requiere, vuelva a iniciar otro."
                
        }

    });

    return data;
}
 



module.exports={
    greetings,
    softwareProblem,
    developing,
    iDontUnderstand,
    hardwareProblem,
    netProblem,
    softwareProblemGeclisa,
    softwareProblemML,
    softwareProblemBejerman,
    hardwareProblemDoesNotShowImageOnMonitor,
    hardwareProblemMouseTeclado,
    hardwareProblemNotBootPC,
    netProblemInternet,
    netProblemOpenVPN,
    netProblemRemoteDesktop,
    downloadGuideOsTicket,
    sendDocumentOsTicket,
    queryDone,
    sendDocumentOpenVPNConnect,
    sendDocumentRDP,
    helpTopic
}