document.getElementById("registationform")
        .addEventListener("submit",
            function registerUser(event)
        {
            event.preventDefault();

            let name=document.getElementById("name").value;
            let email=document.getElementById("email").value;
            let password=document.getElementById("password").value;
            let mobile=document.getElementById("mobile").value;
            let confirmpassword=document.getElementById("confirmpassword").value;

            if(name==='' ||
                email==='' ||
                password==='' ||
                mobile==='' ||
                confirmpassword===''
            )
            {
                document.getElementById("message")
                .innerText="all field must be filled";
                return;
            }
            if(password.length<6){
                document.getElementById("message")
                .innerText="password must be 6 characters";
                return;
            }
            if(password!==confirmpassword){
                document.getElementById("message")
                .innerText="password and confirmpassword must be same43";
                return;
            }
            let emailpattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if(emailpattern.test(email))
            {
                document.getElementById("message")
                .innerText="email format is wrong";
                return;
            }
            let mobilepattern=/^[0-9]{10}$/;
            if(!mobilepattern.test(mobile))
            {
                document.getElementById("message")
                .innerText="mobile number must be 10 digits";
                return;
            }
            let user={
                name:name,
                email:email,
                password:password,
                mobile:mobile
            }
            let userjson=JSON.stringify(user);
            console.log(userjson);

            console.log("registration successful");
        });