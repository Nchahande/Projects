var headerStat = 0;
var pensionPlanFor = 0;
var accountType = 0;

$(document).ready(function () {
    $('header').load('header.html')
    
    $('.loader__container').animate({
        opacity: 0
    }, 500, function () {
        $(this).css('display', 'none');
    });

    /* $(".datepicker-field").datepicker({
        changeMonth: true,
        changeYear: true,
        showAnim: 'slideDown',
        yearRange: '1945:' + (new Date).getFullYear(),
        dateFormat: 'dd/mm/yy',
        beforeShow: function (input, inst) {
            $(document).off('focusin.bs.modal');
        },
        onClose: function () {
            $(document).on('focusin.bs.modal');
        }
    }).on('change', function () {
        var age = getAge(this);
        $('.selected-years').html(age + ' years');
    }); */

    $('.calendar-icon').click(function () {
        event.preventDefault();
        $(this).prev().focus();
    });

    $('.datepicker_container input').on('focus', function () {
        $(this).trigger('blur');
    })


    $('#emailQuote').submit(function () {
        $.ajax({
            type: "POST",
            url: "actions/emailQuote.php",
            data: $(this).serialize(),
            success: function (response) {
                htmlTemplate = '';
                if (response == 1) {
                    htmlTemplate = '<img src="img/common/tick-green-circle.svg" class="img-fluid mx-auto d-block mb-3"><h5>Email Sent</h5><p>Your quote has been emailed to you.</p>';
                } else {
                    htmlTemplate = '<img src="img/common/error-red-circle.svg" class="img-fluid mx-auto d-block mb-3"><h5>Email Sent Failed</h5><p>Something went wrong.</p>';
                }
                $('#mail_message').html(htmlTemplate);
                $('.email_quote_container').css('display', 'none');
                $('#mail_message').css('display', 'block');
            }
        });
        return false;
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

function getAge(dateVal) {
    var
        birthday = new Date(dateVal.value.replace(/(\d{2})[-/](\d{2})[-/](\d+)/, "$2/$1/$3")),
        today = new Date(),
        ageInMilliseconds = new Date(today - birthday),
        years = ageInMilliseconds / (24 * 60 * 60 * 1000 * 365.25),
        months = 12 * (years % 1),
        days = Math.floor(30 * (months % 1));
    return Math.floor(years);
}