// Adicione isto ao seu arquivo password.js
document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("password");
    const repeatPasswordInput = document.getElementById("repeat_password");
    const matchText = document.getElementById("match-text");

    passwordInput.addEventListener("input", function() {
        isGood(passwordInput.value);
    });

    repeatPasswordInput.addEventListener("input", function() {
        checkPasswordMatch();
    });

    function isGood(password) {
        var password_strength = document.getElementById("password-text");

        if (password.length == 0) {
            password_strength.innerHTML = "";
            return;
        }

        var regex = new Array();
        regex.push("[A-Z]"); 
        regex.push("[a-z]"); 
        regex.push("[0-9]"); 
        regex.push("[$@$!%*#?&]"); 

        var passed = 0;

        if (password.length >= 8) {
            passed++;
        }

        for (var i = 0; i < regex.length; i++) {
            if (new RegExp(regex[i]).test(password)) {
                passed++;
            }
        }

        var strength = "";
        switch (passed) {
            case 0:
            case 1:
            case 2:
            case 3:
                strength = "<small class='progress-bar bg-danger' style='width: 40%'>Fraca</small>";
                break;
            case 4:
                strength = "<small class='progress-bar bg-warning' style='width: 60%'>Média</small>";
                break;
            case 5:
                strength = "<small class='progress-bar bg-success' style='width: 100%'>Forte</small>";
                break;
        }

        var strength = "";
        switch (passed) {
          case 0:
          case 1:
          case 2:
              strength = "<small class='progress-bar bg-danger' >Fraca</small>";
              break;
          case 3:
              strength = "<small class='progress-bar bg-warning' >Média</small>";
              break;
          case 4:
              strength = "<small class='progress-bar bg-success' >Forte</small>";
              break;
          default:
              break;
      }

        password_strength.innerHTML = strength;
    }

    password_strength.innerHTML = strength;
    
    function checkPasswordMatch() {
      var password = passwordInput.value;
      var repeatPassword = repeatPasswordInput.value;
  
      if (password !== repeatPassword) {
          matchText.innerHTML = "<small class='progress-bar bg-danger' style='width: 100%'>As senhas não coincidem</small>";
          return false;
      } else {
          matchText.innerHTML = "<small class='progress-bar bg-success' style='width: 100%'></small>";
          return true;
      }
  }

})
