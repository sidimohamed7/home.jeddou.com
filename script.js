
function sendMail(){
    let senderCountry = document.getElementById("sendercountry").value;
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        Individual: document.getElementById("Checkbox1").checked ? "Yes" : "No",
        Company: document.getElementById("Checkbox2").checked ? "Yes" : "No",
        sendercountry: document.getElementById("sendercountry").value,
        subject : document.getElementById("subject").value,
        comment : document.getElementById("comment").value,
        
    }
        
    let message="ok"
    if (message =="ok"){
        let note= 
        Swal.fire({
            title: "Succuss!",
            text: "Message sent successfully",
            icon: "success"
        });
    }            
        
        
    emailjs.send("service_goq26wd","template_n8ciqd6",parms).then(alert(note));

}
    
        