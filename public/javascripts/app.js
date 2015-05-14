var total
    , current = ''
    , operator
    , numID
    , decimal = 'false'
    , lastClick = 'start';


//handle zeros
//display zeros

$(document).ready(function(){

    reset();

    $('.equals').click(function(){
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
        current = total;
        lastClick = 'equals';
    });

    $('.operator').click(function(){
        operator = $(this).attr('id');
        if (lastClick != 'operator' && lastClick != 'start') {
            total = parseFloat(current);
            current = '';
            operator = $(this).attr('id');
            lastClick = "operator";
        }
    });

    $('.clear').click(reset);

    function reset(){
        total = 0;
        current = '';
        $('.numDisplay').text(0);
    }

    //change this to switchcase
    $('.num').click(function(){
        numID = $(this).attr('id');
        if ((numID == 0) && (lastClick == 'start')) {
            console.log('hi');
        } else {
            if (lastClick == 'equals') {
                reset();
            }
            if (numID == 'dot') {
                numID = '.';
                if (!decimal) {
                    current += numID;
                    decimal = true;
                }
            } else {
                current += numID;
                decimal = false;
            }

            $('.numDisplay').text(current);
            lastClick = "number";
        }
    })



});