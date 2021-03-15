$(document).ready(function(){
    //Checking if logged In 
    // console.log("working");
    // console.log(localStorage.getItem("loggedIn"));
    if(localStorage.getItem("loggedIn") === "true"){
        $(".right-menu").add('<h4 class="nav-links" id="logout">logout</h4>');
        if (location.pathname === "/html/login") {
          location.replace("/html/orders");
        }
        $(".nav-links").click(function () {
          $(".nav-links").removeClass("active");
          $(this).addClass("active");
        });
        // ;
    // }
    }else if (localStorage.getItem("loggedIn") === "false" || localStorage.getItem("loggedIn")==="null") {
      // location.replace("../HTML/login.html");
      console.log("not logged")
      $(".nav-links").css("cursor", "not-allowed");
      // $("main").hide();
      if (location.pathname != "/html/login") {
        location.replace("/html/login");
        console.log("logged out in")
      }

      $("#logout").remove();
    }

    

    

    const logout = () => {
        localStorage.setItem("loggedIn", false);
        location.replace("../HTML/login.html");
    };

    $("#logout").click(function () {
      logout();
    });

    
})