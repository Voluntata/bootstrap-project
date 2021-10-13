
 $(function () {
  $("#form").validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      password: {
        required: true,
        strong_password: true,

      },
      passRepeat: {
        required: true,
        equalTo: "#password"
      }
    },
    messages: {
      password: {
        required: "Este campo es obligatorio"
      },
      passRepeat: {
        required: "Este campo es obligatorio",
        equalTo:"Contraseña tiene que estar igual"},

      email: {
        required: "Este campo es obligatorio",
        email: "Por favor, escriba un correo electrónico válido"
      },
    },

    submitHandler: function (form) {
    form.submit();
    }
    
  });

});


$.validator.addMethod("strong_password", function (value, element) {
  let password = value;
  if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(.{8,20}$)/.test(password))) {
    return false;
  }
  return true;
}, function (value, element) {
  let password = $(element).val();
  if (!(/^(.{8,20}$)/.test(password))) {
    return 'Contraseña debe tener como minimo 8 caracteres';
  }
  else if (!(/^(?=.*[A-Z])/.test(password))) {
    return 'Contraseña debe tener como minimo una mayuscula';
  }
  else if (!(/^(?=.*[a-z])/.test(password))) {
    return 'Contraseña debe tener como minimo una minuscula';
  }
  else if (!(/^(?=.*[0-9])/.test(password))) {
    return 'Contraseña debe tener como minimo un numero';
  }
  return false;
});

let closeBtn = document.getElementById("close");
closeBtn.addEventListener("click", function(){
var validator = $( "#form" ).validate();
validator.resetForm();
} );