$(document).ready(function() {
    $("#SuccessMsg").hide();

    AOS.init({
        duration: 1300,
    })



    //   $(window).scroll(function(){
    //     var scrollTop = $(window).scrollTop();
    //     if (scrollTop > 249) {
    //         $('.sticky-navbar').addClass('fadeInDown');
    //         $('.sticky-navbar').removeClass('fadeOutUp');
    //         $('.sticky-navbar').addClass('animated');      
    //     } else {
    //         $('.sticky-navbar').addClass('fadeOutUp');
    //         $('.sticky-navbar').removeClass('fadeInUp');

    //     }
    //   });
    //  $('.sticky-navbar').css("visibility", "hidden");
    //  $('.mobile-navbar').css("display", "none");
    //  $(window).scroll(function(){
    //   var scrollTop = $(window).scrollTop();

    //   if (scrollTop > 550) {
    //       $('.sticky-navbar').css("visibility", "visible");
    //   } else {
    //       $('.sticky-navbar').css("visibility", "hidden");

    //   } 
    // });

    $('.sticky-navbar').hide();
    $('.mobile-navbar').css("display", "none");
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > 550) {
            $('.sticky-navbar').show();
        } else {
            $('.sticky-navbar').hide();

        }
    });



    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > 350) {
            $('.mobile-navbar').css("display", "block");
        } else {
            $('.mobile-navbar').css("display", "none");

        }
    });

    $('.mobile-modalbutton').click(function() {
        $('.modal')
            .prop('class', 'modal fade') // revert to default
            .addClass($(this).data('direction'));
        $('.modal').modal('show').delay(6000);
    });



});




$("#email").keyup(function() {
    var email = $("#email").val();
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email)) {
        console.log("wrong")
        $("#error_email").text(" is not a valid email");
        email.focus;
        //return false;
    } else {
        console.log("right")
        $("#error_email").text("");
    }
});
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

function mailValidation(email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (!emailReg.test(email))
        return false;
    else
        return true;
}

$(document).on('click', '#btn_contact_us', function(e) {

    setTimeout(function() {
        $("#errorMessage").removeClass("show");
    }, 5000);
    e.preventDefault();
    var validContctForm = true;
    var errMsg = "";

    var contact_name = $.trim($("#name").val());
    var contact_company = $.trim($("#lastname").val());
    var contact_email = $.trim($("#email").val());
    var contact_phone = $.trim($("#phone").val());
    var message = $.trim($("#message").val());
    var captcha = $.trim($("#captcha").val());
    if (contact_name == "") {
        validContctForm = false;
        errMsg += "Please enter First Name. ";
    }
    if (contact_company == "") {
        validContctForm = false;
        errMsg += "Please enter Last Name. ";
    }
    if (contact_phone == "") {
        validContctForm = false;
        errMsg += "Please enter Phone Number ";
    }
    if (contact_email == "") {
        validContctForm = false;
        errMsg += "Please enter Email. ";
    } else {
        if (!mailValidation(contact_email)) {
            validContctForm = false;
            errMsg += "Please enter Valid Email. ";
        }
    }
    if (message == "") {
        validContctForm = false;
        errMsg += "Please enter Message. ";
    }
    if (grecaptcha.getResponse() == "") {
        validContctForm = false;
        errMsg += "Please check Captcha. ";
    }
    if ($.trim(errMsg) == "") {
        $("#btn_contact_us").prop('disabled', true);
        var formData = new FormData($("#contactForm")[0]);
        //formData.append("op_command", "SUBMIT_CONTACT");
        $.ajax({
            type: "POST",
            url: "./sendemail.php",
            data: formData,
            success: function(ajaxResponse) {
                var contactResponse = ($.trim(ajaxResponse));
                $("#SuccessMsg").show();
                $("input").on('keyup, keydown', function(e) {
                    $("#SuccessMsg").hide();
                });
                if (contactResponse == "success") {
                    resetForm("contactForm");

                    $("#btn_contact_us").prop('disabled', false);

                } else if (contactResponse == "failure") {

                    $("#errorMessage").text('Something went wrong while sending contact information. Please try again!').addClass('showme')
                }
            },
            cache: false,
            contentType: false,
            processData: false
        });
    } else {

        $("div#errorMessage").text(errMsg).addClass('show');

    }

});

function resetForm() {
    $(':input', '#contactForm')
        .not(':button, :submit, :hidden')
        .val('');
}
$(document).on('click', '.modal a', function() {
    $(this).closest(".modal").modal("hide");
});

// $('.highlight-link a').click(function() {
//     $(this).addClass("active");
//     $(this).siblings().removeClass('active');
//     console.log("Hey ");
// });

$(document).on('click', '.highlight-link a', function() {
    $(this).addClass("active");
    $(this).siblings().removeClass('active');
    console.log("Hey ");
});


$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('#menu-center a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('#menu-center a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu-center a').each(function () {
        var currLink = $(this);
        console.log(currLink);
        var refElement = $(currLink.attr("href"));
        if ((refElement.position().top-20) <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#menu-center a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}


function check(e,value)
{
    //Check Charater
    var unicode=e.charCode? e.charCode : e.keyCode;
    if (value.indexOf(".") != -1)if( unicode == 46 )return false;
    if (unicode!=8)if((unicode<48||unicode>57)&&unicode!=46)return false;
}
function checkLength()
{
    var fieldLength = document.getElementById('phone').value.length;
    //Suppose u want 4 number of character
    if(fieldLength <= 10){
        return true;
    }
    else
    {
        var str = document.getElementById('phone').value;
        str = str.substring(0, str.length - 1);
        document.getElementById('phone').value = str;
    }
}