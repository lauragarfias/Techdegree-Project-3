/*
Basic Info
*/

//Show cursor inside Name field
$('#name').focus();

//Hide the input box for the Other option
$('#other-title').hide();

/*
T-Shirt Info
*/

//Hide "Select Theme" option
$('#design option:eq(0)').hide();

//Color field updated to say "Please select a T-shirt theme" & hide colors
const $color = $('#color');
$color.prepend('<option value="" disabled selected hidden>Please select a T-shirt theme</option>');
$color.children().hide();

//Show appropriate colors depending on which theme is selected

/*
Try 1
$('#design').val('js puns').on('click', function(){
    $color.val('tomato', 'steelblue', 'dimgrey').hide();
});

Try 2
$('#design').val('js puns').on('click', function(){
    $color.val('cornflowerblue', 'darkslategrey', 'go').show();
});

Try 3
const $value = $('#design').val('js puns');
if($value){
    $color.show();
    $color.val('tomato', 'steelblue', 'dimgrey').hide();
}  

Try 4
const $design = $('#design');
if($design.val('js puns')){
    $('#color option:eq(1)').show;
    $('#color option:eq(2)').show;
    $('#color option:eq(3)').show;
} else {
    $('#color option:eq(4)').show;
    $('#color option:eq(5)').show;
    $('#color option:eq(6)').show;
}

Try 5
const $jsPuns = $('#design option:eq(1)').select;
if($jsPuns){
    $('#color option:eq(1)').show();
    $('#color option:eq(2)').show();
    $('#color option:eq(3)').show();
} else {
    $('#color option:eq(4)').show();
    $('#color option:eq(5)').show();
    $('#color option:eq(6)').show();
}

Try 6
const $jsPuns = $('#design option:eq(1)');
const $heartJs = $('#design option:eq(2)');
if($jsPuns){
    $('#color option:eq(1)').show();
    $('#color option:eq(2)').show();
    $('#color option:eq(3)').show();
} else if($heartJs) {
    $('#color option:eq(4)').show();
    $('#color option:eq(5)').show();
    $('#color option:eq(6)').show();
} else {
    $color.children().hide();
}

Try 7
if($('#design option:eq(1):selected)){
    $('#color option:eq(1)').show();
    $('#color option:eq(2)').show();
    $('#color option:eq(3)').show();
} else {
    $('#color option:eq(4)').show();
    $('#color option:eq(5)').show();
    $('#color option:eq(6)').show();
}

Try 8
$('#design option').each(function() {
    if($(this).is(':selected')){
        $('#color option:eq(1)').show();
        $('#color option:eq(2)').show();
        $('#color option:eq(3)').show();
    } else {
        $('#color option:eq(4)').show();
        $('#color option:eq(5)').show();
        $('#color option:eq(6)').show();
    }
});
*/
