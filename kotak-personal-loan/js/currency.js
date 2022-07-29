$('.amount-value').on("focusout, keyup",function(){
    var x = $(this).val().split(",").join("");
    x=x.toString();
    var lastThree = x.substring(x.length-3);
    var otherNumbers = x.substring(0,x.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    $(this).val(res);
    var resetVal = $(this).val(res);
    $('.amount-value').on("focusout",function(){
        $(this).val();
    })
    $('.amount-value').on('keyup', function(){
        var x = $(this).val().split(",").join("");
        $(x).val();
    })
})