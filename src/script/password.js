function isGood(password) {
    var password_strength = document.getElementById("password-text");

    //TextBox left blank.
    if (password.length == 0) {
      password_strength.innerHTML = "";
      return;
    }

    //Regular Expressions.
    var regex = new Array();
    regex.push("[A-Z]"); //Uppercase Alphabet.
    regex.push("[a-z]"); //Lowercase Alphabet.
    regex.push("[0-9]"); //Digit.
    regex.push("[$@$!%*#?&]"); //Special Character.

    var passed = 0;

    //Validate for each Regular Expression.
    for (var i = 0; i < regex.length; i++) {
      if (new RegExp(regex[i]).test(password)) {
        passed++;
      }
    }

    //Display status.
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