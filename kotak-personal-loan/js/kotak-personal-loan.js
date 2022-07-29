$(function () {
    $('.dob').datepicker({
        changeMonth: true,
        changeYear: true,
        showAnim: 'slideDown',
        yearRange: '1945:' + (new Date).getFullYear(),
        dateFormat: 'dd/mm/yy',
        maxDate: 0,
        beforeShow: function (input, inst) {
            $(document).off('focusin.bs.modal');
        },
        onClose: function () {
            $(document).on('focusin.bs.modal');
        }
    }).on('change', function () {
        /* var age = getAge(this);
        $(this).parent().next('.selected-years').html(age + ' years'); */
    });

});

function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}