
const https=require("https");


function sendMessageWhatsapp(data)
{

   
    const options={
        host:"graph.facebook.com",
        path:"/v15.0/100215886340876/messages",
        method:"POST",
        body:data,
        headers:
        {
            
            "Content-Type":"application/json",
            Authorization: "Bearer EAAMzIvCZCxrQBAEaZCQl1af1bZBMZCScbJyZAXf7gNn2hcztGLAapyIVvThdzlh9nNav9WeKCx1gvN1jKYck08iQIjW53I3qcNQNvBjhioBND6N9N6tZAFtHwDDtP8lf0ckCVt1QUToa1ujD0gWGIJroTwAjSBQl5GtPi9BdLbEtaDGSywmFqH"
        }
    };

   
    const req=https.request(options,res=>{
      
        res.on("data",d=>{
            process.stdout.write(d);
        });
    });

  
    req.on("error",error=>{
        console.error(error)
    });

 
    req.write(data);


    req.end();


}


module.exports={
sendMessageWhatsapp 
};