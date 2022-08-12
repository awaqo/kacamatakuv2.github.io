// COUNTDOWN
do {
    var tgl = new Date().getDate();
    var tglCd = tgl + 1;

    var bln = new Date().getMonth() + 1;
    var blnCd = bln;
    if(bln % 2 == 1) {
        if(tglCd > 31) {
            blnCd = bln + 1;
        };
    } else {
        if(tglCd > 30) {
            blnCd = bln + 1;
        }
    };
    
    var thn = new Date().getFullYear();
    var thnCd = thn;
    if(blnCd > 12){
        thnCd = thn + 1;
    }

    var countDate = new Date(blnCd+" "+tglCd+", "+thnCd+" 00:00:00").getTime();
    var gap;

    var hitung = setInterval(function() {
        var now = new Date().getTime();
        gap = countDate - now;

        var second = 1000;
        var minute = second * 60;
        var hour = minute * 60;
        var day = hour * 24;

        var textHour = Math.floor((gap % day) / hour);
        var textMinute = Math.floor((gap % hour) / minute);
        var textSecond = Math.floor((gap % minute) / second);

        document.querySelector(".jam").innerText = textHour;
        document.querySelector(".menit").innerText = textMinute;
        document.querySelector(".detik").innerText = textSecond;
    }, 1000);
} while (gap == 0);

AOS.init();

$(document).ready(function () {
    $('.multiple-items').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.prev-lg'),
        nextArrow: $('.next-lg')
      });

    $('.single-item').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });  
});

// drowpdown mobile menu
function openDropdown(event,dropdownID){
    let element = event.target;
    while(element.nodeName !== "BUTTON"){
      element = element.parentNode;
    }
    var popper = Popper.createPopper(element, document.getElementById(dropdownID), {
      placement: 'bottom-start'
    });
    document.getElementById(dropdownID).classList.toggle("hidden");
    document.getElementById(dropdownID).classList.toggle("block");
  }

// popup
var popupMessages = ["Kylian Mbappé sedang membeli", "Halaand Bakery sedang membeli", "Ronaldo sedang membeli", "Lionel Messi sedang membeli"];

$(function() { 
    setInterval(function() {
        if (popupMessages.length > 0) {
            document.querySelector(".mbappe").innerText = popupMessages.shift();
            popupMessages.push("Harry Maguire sedang membeli", "Haji Salah sedang membeli", "Sadio Mane sedang membeli", "Kylian Mbappé sedang membeli", "Halaand Bakery sedang membeli", "Ronaldo sedang membeli", "Lionel Messi sedang membeli");
        }
        $("#popup").fadeIn().delay(10000).fadeOut();
    }, 20000);
})

function closeAlert(){
    var x = document.getElementById("popup");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  }

// SCROLL TO TOP
$(document).ready(function () {
    var elScroll = document.getElementById("scroll");
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            elScroll.classList.add("d-flex");
            $('.scrollToTop').fadeIn();
        } else {
            elScroll.classList.remove("d-flex");
            $('.scrollToTop').fadeOut();
        }
    });
    $('.scrollToTop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 0);
    })
});