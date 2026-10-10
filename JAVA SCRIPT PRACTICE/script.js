document.getElementById("login").addEventListener("click",function(){
    let username=document.getElementById("username").value;
    let password=document.getElementById("password").value;
    if(username==="admin"&&password==="1234")
    {
        document.getElementById("message").ineerText="Login success";
    }
    else{
        document.getElementById("message").innerText="Login is not success";
    }

});