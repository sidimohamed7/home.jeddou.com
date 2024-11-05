
function sendMail(){
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        Individual : document.getElementById("Checkbox1").value,
        Company : document.getElementById("Checkbox2").value,
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

    emailjs.send("service_goq26wd","template_n8ciqd6",parms).then(alert(note))

}


