var users = [
    {
        username: "davidrnogueira",
        pass: "david"
    },
    {
        username: "admin",
        pass:"admin"
    }
]


var submitBtn = document.getElementById("submitbtn")

submitBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    var usernameInput = document.getElementById("userinput").value
    var passwordInput = document.getElementById("passinput").value
    searchForUser(usernameInput,passwordInput);
   
   
})

var searchForUser = (username, password) =>{
    for (i=0;i<users.length;i++){
        if (users[i].username === username){
            if(users[i].pass === password){
                document.getElementById("errormessage").innerHTML="Access Granted!"
                document.getElementById("errormessage").style.color="green"
            }
        }
        else {document.getElementById("errormessage").style.color="red"}

    }

}