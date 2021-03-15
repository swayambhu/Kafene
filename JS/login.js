$(document).ready(function(){
    


    //Login Function
    const logIn = () => {

        // Checking If any input box is Empty
        if ($("#username").val() === "" || $("#password").val() === "") {
          alert("Enter username or password.");
          return
        }else{
            $.ajax({
              url: "https://604de6a22a808e00177845bb.mockapi.io/api/v1/login",
              type: "get",
              success: function (data) {
                let logged = false;
                for(let i = 0; i < data.length; i++) {
                    if(data[i].username === $("#username").val() && data[i].password === $("#password").val()) {
                        localStorage.setItem("loggedIn", true);
                        alert("logged in successfully");
                        location.replace("../HTML/orders.html")
                        return;
                    }
                    console.log(i)
                }
                return alert("Invalid Credentials");
              },
            });
        }
    }

    //Sign In 
    //=> Key press
    $("#password").keypress(function(event){
      // => 13 is keycode for "ENTER" key
      if(event.keyCode === 13){
        logIn();
      }
    });

    // => Onclick
    $("#signIn-btn").click(function () {
      logIn();
    });

    
})