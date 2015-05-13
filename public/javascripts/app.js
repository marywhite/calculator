var total
    , current = ''
    , operator
    , lastType;

$(document).ready(function(){
    $('.num').click(function(){
        current += $(this).attr('id');
        console.log(current);
    })

});