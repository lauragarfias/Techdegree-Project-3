//Show cursor inside Name field
$('#name').focus();
//Hide the input box for the Other option
$('#other-title').hide();
//Hide "Select Theme" option
$('#design option:eq(0)').hide();
//Color field updated to say "Please select a T-shirt theme"
$('#color').prepend('<option>Please select a T-shirt theme</option>');
