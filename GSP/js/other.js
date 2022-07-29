$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val().replace(/,/g,'') ) - 1;
        count = count < 1 ? 1 : count;
        count = count.toString();
        count1 = (count.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,"));
        
        $input.val(count1);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        var valuInput = $input.val();
        // console.log(valuInput);
        if (valuInput == '') {
            $input.val(1);
        }
        // if (isNaN(valuInput)) {
        //     $input.val(1);
        // }
        else{
            var count = parseInt($input.val().replace(/,/g,'') ) + 1;
            count = count.toString();
            count1 = (count.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,"));
             $input.val(count1); 
        }
       
        
        $input.change();
        return false;
    });  

    $('.minus-large').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val().replace(/,/g,'') ) - 100000;
        count = count < 1 ? 1 : count;
        if (count == 1) {
            count = 100000;
        }
        count = count.toString();
        count1 = (count.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,"));
        
        $input.val(count1);
        $input.change();
        return false;
    });
    $('.plus-large').click(function () {
        var $input = $(this).parent().find('input');
        var valuInput = $input.val();
        // console.log(valuInput);
        if (valuInput == '') {
            $input.val(100000);
        }
        // if (isNaN(valuInput)) {
        //     $input.val(1);
        // }
        else{
            var count = parseInt($input.val().replace(/,/g,'') ) + 100000;
            count = count.toString();
            count1 = (count.replace(/(\d)(?=(\d\d)+\d$)/g, "$1,"));
             $input.val(count1); 
        }
       
        
        $input.change();
        return false;
    });  

});