$(function () {
  $(".loader__container").animate(
    {
      opacity: 0,
    },
    500,
    function () {
      $(this).css("display", "none");
    }
  );

  $("header").load("header.html");

  $(".date-field-dob")
    .datepicker({
      changeMonth: true,
      changeYear: true,
      showAnim: "slideDown",
      yearRange: "1945:" + new Date().getFullYear(),
      dateFormat: "dd/mm/yy",
      showOn: "focus",
      altFormat: "mm/dd/yy",
      maxDate: 0,

      beforeShow: function (input, inst) {
        $(document).off("focusin.bs.modal");
      },
      onClose: function () {
        $(document).on("focusin.bs.modal");
      },
    })
    .on("change", function () {
      var age = getAge(this);
      // console.log(isNaN(parseFloat(age)));
      if (Math.sign(age) == -1) {
        var error = $(this).siblings("p.error-msg");
        $(this).addClass("errorInput");
        error.css("display", "block");
        age = 0;
        $(this).parent().next(".selected-years").css("display", "none");
      } else {
        var correct = $(this).siblings("p.error-msg");
        $(this).removeClass("errorInput");
        correct.css("display", "none");
        $(this).parent().next(".selected-years").css("display", "block");
      }

      if (isNaN(parseFloat(age)) == true) {
        // console.log("not a number");
        var error = $(this).siblings("p.error-msg");
        $(this).addClass("errorInput");
        error.css("display", "block");
        age = 0;
        $(this).parent().next(".selected-years").css("display", "none");
      } else {
        // $(this).next('.selected-years').css('display','block');
      }

      if (age == 1) {
        $(this)
          .parent()
          .next(".selected-years")
          .html(age + " year");
      } else {
        $(this)
          .parent()
          .next(".selected-years")
          .html(age + " years");
      }
    })
   

  $(".date-field").datepicker({
    showAnim: "slideDown",
    showOn: "focus",
    altFormat: "mm/dd/yy",
    dateFormat: "dd/mm/yy",
    minDate: 0,
    beforeShow: function (input, inst) {
      $(document).off("focusin.bs.modal");
    },
    onClose: function () {
      $(document).on("focusin.bs.modal");
    },
  })

  $(".last3-date-field")
    .datepicker({
      showAnim: "slideDown",
      showOn: "focus",
      altFormat: "mm/dd/yy",
      dateFormat: "dd/mm/yy",
      maxDate: 0,
      minDate: "-3m",
      beforeShow: function (input, inst) {
        $(document).off("focusin.bs.modal");
      },
      onClose: function () {
        $(document).on("focusin.bs.modal");
      },
    })
  $(".next6-date-field")
    .datepicker({
      showAnim: "slideDown",
      showOn: "focus",
      altFormat: "mm/dd/yy",
      dateFormat: "dd/mm/yy",
      maxDate: "+6m",
      minDate: 0,
      beforeShow: function (input, inst) {
        $(document).off("focusin.bs.modal");
      },
      onClose: function () {
        $(document).on("focusin.bs.modal");
      },
    })
    

  var dateTravel = new Date();
  var currentMonth = dateTravel.getMonth();
  var currentDate = dateTravel.getDate();
  var currentYear = dateTravel.getFullYear();
  $(".last3").datepicker({
    changeMonth: true,
    changeYear: true,
    showAnim: "slideDown",
    dateFormat: "dd/mm/yy",
    minDate: new Date(currentYear, currentMonth - 3, currentDate),
    maxDate: 0,
    beforeShow: function (input, inst) {
      $(document).off("focusin.bs.modal");
    },
    onClose: function () {
      $(document).on("focusin.bs.modal");
    },
  });

  $(".next6").datepicker({
    changeMonth: true,
    changeYear: true,
    showAnim: "slideDown",
    dateFormat: "dd/mm/yy",
    minDate: 0,
    maxDate: new Date(currentYear, currentMonth + 6, currentDate),
    beforeShow: function (input, inst) {
      $(document).off("focusin.bs.modal");
    },
    onClose: function () {
      $(document).on("focusin.bs.modal");
    },
  });

  $(".gender").click(function () {
    $(".gender").removeClass("active");
    $(this).addClass("active");
  });
  $(".occupation").click(function () {
    $(".occupation").removeClass("active");
    $(this).addClass("active");
  });
  $(".objective").click(function () {
    // $('.objective').removeClass('active');
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
    }
  });
  $(".risk").click(function () {
    $(".risk").removeClass("active");
    $(this).addClass("active");
  });
  $(".investment_h").click(function () {
    $(".investment_h").removeClass("active");
    $(this).addClass("active");
  });

  $(".feedback_blocks ul li").click(function () {
    var value = $(this).text();
    $(".feedback_blocks ul li")
      .removeClass("active")
      .css("backgroundColor", "#f4f6fa");
    if (value <= 6) {
      $(this).addClass("active").css("backgroundColor", "#ed962c");
    } else if (value == 7) {
      $(this).addClass("active").css("backgroundColor", "#00336c");
    } else if (value == 8) {
      $(this).addClass("active").css("backgroundColor", "#c9d95f");
    } else if ((value = 9 && 10)) {
      $(this).addClass("active").css("backgroundColor", "#079952");
    }
    $(".thank-you").css("display", "flex");
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
  var birthday = new Date(
      dateVal.value.replace(/(\d{2})[-/](\d{2})[-/](\d+)/, "$2/$1/$3")
    ),
    today = new Date(),
    ageInMilliseconds = new Date(today - birthday),
    years = ageInMilliseconds / (24 * 60 * 60 * 1000 * 365.25),
    months = 12 * (years % 1),
    days = Math.floor(30 * (months % 1));
  return Math.floor(years);
}

function getAmount(e) {
  valueofinput = parseInt(e.replace(/,/g, ""));
  console.log(valueofinput);
  val1 = (valueofinput / 100000).toFixed(2);
  console.log(val1);
  if (true) {
    if (isNaN(parseFloat(val1)) == true) {
      val1 = 0;
    }
  }
  if (val1 == 1) {
    $("#annualIncome").html("₹ " + val1 + " lakh");
  } else $("#annualIncome").html("₹ " + val1 + " lakhs");
}

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  // alert("You have entered an invalid email address!")
  return false;
}

function validatePhone(phone) {
  // console.log("in phone validation function");
  if ((re = /^\d{10}$/.test(phone))) {
    return true;
  }
  // alert("You have entered an invalid phone number!")
  return false;
}
function validateName(nameval) {
  var values = nameval.split(" ").filter(function (v) {
    return v !== "";
  });
  if (values.length > 1) {
    // var correct=$(this).siblings('p.error-msg');
    // correct.css('display', 'none');
    return true;
  } else {
    // var error=$(this).siblings('p.error-msg');
    // error.css('display', 'block');
    return false;
  }
}

function validatePancard(pannumber) {
  //      if (/[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pannumber))
  // {
  //   return (true)
  // }
  //   // alert("You have entered an invalid email address!")
  //   return (false)

  var regpan = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/;

  if (regpan.test(pannumber)) {
    return true;
    // valid pan card number
  } else {
    return false;
    // invalid pan card number
  }
}

function validatePincode(pincode) {
  if ((re = /^\d{6}$/.test(pincode))) {
    return true;
  }
  // alert("You have entered an invalid phone number!")
  return false;
}

// function applyComma(){
//     // $('input.number').keyup(function(event) {

//       // skip for arrow keys
//       if(event.which >= 37 && event.which <= 40) return;

//       // format number
//       $(this).val(function(index, value) {
//         return value
//         .replace(/\D/g, "")
//         .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
//         ;
//       });
//     // });
// }
function checkMaxLength(event){
  alert()
}