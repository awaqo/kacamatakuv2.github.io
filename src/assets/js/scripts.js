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
function closeAlert(){
    var x = document.getElementById("popup");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  }

var popupTime = ["1 jam yang lalu", "32 menit yang lalu", "1 jam yang lalu", "21 menit yang lalu"];
var popupMessages = ["Irma Rahmawati sudah membeli", "Rizki Agung Permadana sudah membeli", "Ismanto sudah membeli", "Rahadian sudah membeli"];
var popupLoc = ["Semarang, Jawa Tengah", "Purwakarta, Jawa Barat", "Surabaya, Jawa Timur", "Tegal, Jawa Tengah"];

function showPopup() { 
    setInterval(function() {
        if (popupMessages.length > 0) {
            document.querySelector(".popupTime").innerText = popupTime.shift();
            document.querySelector(".popupMessage").innerText = popupMessages.shift();
            document.querySelector(".popupLoc").innerText = popupLoc.shift();
            popupTime.push("2 jam yang lalu", "12 menit yang lalu", "1 jam yang lalu", "22 menit yang lalu", "47 menit yang lalu", "52 menit yang lalu", "1 jam yang lalu");
            popupMessages.push("Yunida Ayu sudah membeli", "Wahyu Pratama sudah membeli", "Zidan Nugroho sudah membeli", "Rian sudah membeli", "Alifian Akmal sudah membeli", "Septianingrum sudah membeli", "Sandy Gustyanto sudah membeli");
            popupLoc.push("Bantul, Yogyakarta", "Medan, Sumatera Utara", "Garut, Jawa Barat", "Jakarta Utara, Jakarta", "Bekasi, Jawa Barat", "Jakarta Timur, Jakarta", "Banyuwangi, Jawa Timur");
        }
        $("#popup").fadeIn().delay(5000).fadeOut();
    }, 20000);
}
$(function() {
    showPopup();
}) 