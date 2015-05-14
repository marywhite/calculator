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
        numID = numID == 'dot' ? '.' : numID;
        switch (lastClick){
            case "equals":
                reset();
            case "start":
               if (numID == 0){ break;}
            case "decimal":
                if (numID == '.'){ break;}
            default:
                current += numID;
                $('.numDisplay').text(current);
                lastClick = numID == '.' ? 'decimal' : 'number';
       }
    });


    function postData() {
    var dataObject = {};
        $.ajax({
            url: '/assignments/' + id,
            type: 'POST',
            data: JSON.stringify(dataObject),
            contentType: 'application/json',
            success: function (result) {
                console.log(result);
            }
        });
    }

    function getData() {
        $.ajax({
            url: '/operations',
            dataType: "json",
            success: function (res) {
                //display res
            }
        });
    }

});