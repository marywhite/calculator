var total
    , current = ''
    , operator;

$(document).ready(function(){

    $('.equals').click(function(){
        current = parseInt(current);
        switch (operator) {
            case "divide":
                total /= current;
                break;
            case "times":
                total *= current;
                break;
            case "minus":
                total -= current;
                break;
            case "add":
                total += current;
        }
        $('.numDisplay').text(total);
    });

    $('.operator').click(function(){
        total = parseInt(current);
        current = '';
        operator = $(this).attr('id');
        console.log(total, current);
    });

    $('.num').click(function(){
        current += $(this).attr('id');
        $('.numDisplay').text(current);
    })

});