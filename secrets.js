function sendMail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "saniyakhanjlp@gmail.com",
        Password : "FFCAA469E9D1DA79F7CE954FB5D93250179F",
        To : 'saniyakhanjlp@gmail.com',
        From : "saniyakhanjlp@gmail.com",
        Subject : document.getElementById('Subject'),
        Body : "Name: " + document.getElementById('Name') + "Email: " + document.getElementById('Email') + "Message: " + document.getElementById('Message')
    }).then(
      message => {
        if(message == "OK")
        {
        alert(message) } 
    else console.log(message);}
    );
}