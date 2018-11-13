$(document).ready(function(){

  $('#first_form').submit(function(e) {
      // prevent the action
      e.preventDefault(); 

      var first_name = $('#first_name').val();
      var last_name = $('#last_name').val();
      var phone = $('#phone').val();
      var cell = $('#cell').val();
      var email = $('#email').val();
      var address = $('#address').val();
      var city = $('#city').val();
      var state = $('#state').val();
      var zip = $('#zip').val();
      
   
      //phone number
      // [(]([0-9]{3})[)]([0-9]{3})-([0-9]{4})
      // or
      // /^\d{3}-\d{3}-\d{4}$/
      //removes our error class
      $(".error").remove();
   
      if (first_name.length < 1) {
        $('#first_name').after('<span class="error">This field is required</span>');
      }
      if (last_name.length < 1) {
        $('#last_name').after('<span class="error">This field is required</span>');
      }
      if (phone.length < 1) {
        $('#phone').after('<span class="error">Phone number is required</span>');
      } else {
        var regEx = /^[0-9]{3}+\-[0-9]{3}+\-[0-9]{3}$/;
      }
      if (cell.length < 1) {
        $('#cell').after('<span class="error">This field is required</span>');
      } else {
        var regEx = /^[0-9]{3}+\-[0-9]{3}+\-[0-9]{3}$/;
      }

      if (email.length < 1) {
        $('#email').after('<span class="error">This field is required</span>');
        
      } else {
        var regEx = /^[a-zA-Z0-9.-]+\@[A-Za-z0-9.-]+\.[a-zA-Z]{2,4}$/;
        var validEmail = regEx.test(email);
        if (!validEmail) {
          $('#email').after('<span class="error">Enter a valid email</span>');
        }
      }
      if (address.length < 1) {
        $('#address').after('<span class="error">This field is required</span>');
      }
      if (city.length < 1) {
        $('#city').after('<span class="error">This field is required</span>');
      }
      if (state.length < 2) {
        $('#state').after('<span class="error">State must be at least 2 characters long</span>');
      }
      if (zip.length < 6) {
        $('#zip').after('<span class="error">Zip code must be at least 6 numbers long</span>');
      } else {
        var regEx = /^[0-9]$/;
        var validZip = regEx.test(zip);
        if (!validZip) {
          $('#zip').after('<span class="error">Enter a valid zip code</span>');
        }
      }

      if (password.length < 8) {
        $('#password').after('<span class="error">Password must be at least 8 characters long</span>');
      }
    });
   



});