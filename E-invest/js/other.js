$(document).ready(function() {
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
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
             $input.val(parseInt($input.val()) + 1); 
        }
       
        
        $input.change();
        return false;
    });

     
    
});