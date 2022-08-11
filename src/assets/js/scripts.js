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

$(document).ready(function () {
    var main_url ="https://api.whatsapp.com/send?phone=6289677464708&text=Hallo%20saya%20ingin%20membeli%20kacamata%20dengan%20tipe%20";
    var second_url = "%20dan%20warna%20frame%20"
    var tipe_kacamata = "";
    var frame_kacamata = "";

    $(".tipe_kacamata").click(function () {
        tipe_kacamata = $(this).val();
        if (tipe_kacamata == "Photocromic") {
            // $("#review").text("-- Reviews");
            $("#harga_satuan").text("Rp 99.000");
            // $('#star_review').html("<li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star-half-stroke'></i></li>")
            $("#tipe_kacamata_1").removeClass("btn-outline-dark");
            $("#tipe_kacamata_1").addClass("btn-dark");

            $("#tipe_kacamata_2").addClass("btn-outline-dark");
            $("#tipe_kacamata_2").removeClass("btn-dark");

            $("#tipe_kacamata_3").addClass("btn-outline-dark");
            $("#tipe_kacamata_3").removeClass("btn-dark");

            $("#tipe_kacamata_4").addClass("btn-outline-dark");
            $("#tipe_kacamata_4").removeClass("btn-dark");
            
        } else if (tipe_kacamata == "Radiasi") {
            // $("#review").text("-- Reviews");
            $("#harga_satuan").text("Rp 99.000");              
            // $("#star_review").html("<li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star-half-stroke'></i></li>")
            $("#tipe_kacamata_1").addClass("btn-outline-dark");
            $("#tipe_kacamata_1").removeClass("btn-dark");
            
            $("#tipe_kacamata_2").removeClass("btn-outline-dark");
            $("#tipe_kacamata_2").addClass("btn-dark");
            
            $("#tipe_kacamata_3").addClass("btn-outline-dark");
            $("#tipe_kacamata_3").removeClass("btn-dark");
            
            $("#tipe_kacamata_4").addClass("btn-outline-dark");
            $("#tipe_kacamata_4").removeClass("btn-dark");
            
        } else if (tipe_kacamata == "Minus") {
            $("#harga_satuan").text("Rp 175.000");
            // $("#review").text("525 Reviews");                
            // $("#star_review").html("<li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star-half-stroke'></i></li>")
            $("#tipe_kacamata_1").addClass("btn-outline-dark");
            $("#tipe_kacamata_1").removeClass("btn-dark");
            
            $("#tipe_kacamata_2").addClass("btn-outline-dark");
            $("#tipe_kacamata_2").removeClass("btn-dark");

            $("#tipe_kacamata_3").removeClass("btn-outline-dark");
            $("#tipe_kacamata_3").addClass("btn-dark");

            $("#tipe_kacamata_4").addClass("btn-outline-dark");
            $("#tipe_kacamata_4").removeClass("btn-dark");

        } else if (tipe_kacamata == "PhotocromicnRadiasi") {
            $("#harga_satuan").text("Rp 110.000");
            // $("#review").text("741 Reviews");              
            // $("#star_review").html("<li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star-half-stroke'></i></li>")
            $("#tipe_kacamata_1").addClass("btn-outline-dark");
            $("#tipe_kacamata_1").removeClass("btn-dark");

            $("#tipe_kacamata_2").addClass("btn-outline-dark");
            $("#tipe_kacamata_2").removeClass("btn-dark");
            
            $("#tipe_kacamata_3").addClass("btn-outline-dark");
            $("#tipe_kacamata_3").removeClass("btn-dark");
            
            $("#tipe_kacamata_4").removeClass("btn-outline-dark");
            $("#tipe_kacamata_4").addClass("btn-dark");
        }
        
        var temp_tipe_kacamata = tipe_kacamata;
        var temp_frame_kacamata = frame_kacamata;

        // review berbeda tiap tipe & warna
        // photocromic
        if (temp_tipe_kacamata == "Photocromic" && temp_frame_kacamata == "Black Silver") {
            $("#review").text("514 Reviews");
            $('#star_review').html("<li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star-half-stroke'></i></li>")
        } 
        else if (temp_tipe_kacamata == "Photocromic" && temp_frame_kacamata == "Black") {
            $("#review").text("976 Reviews");
            $('#star_review').html("<li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li>")
        }
        else if (temp_tipe_kacamata == "Photocromic" && temp_frame_kacamata == "Black Gold") {
            $("#review").text("721 Reviews");
            $('#star_review').html("<li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star-half-stroke'></i></li>")
        }

        // radiasi
        if (temp_tipe_kacamata == "Radiasi" && temp_frame_kacamata == "Black Silver") {
            $("#review").text("915 Reviews");
            $('#star_review').html("<li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li>")
        } 
        else if (temp_tipe_kacamata == "Radiasi" && temp_frame_kacamata == "Black") {
            $("#review").text("502 Reviews");
            $('#star_review').html("<li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star-half-stroke'></i></li>")
        }
        else if (temp_tipe_kacamata == "Radiasi" && temp_frame_kacamata == "Black Gold") {
            $("#review").text("694 Reviews");
            $('#star_review').html("<li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star-half-stroke'></i></li>")
        }

        // minus
        if (temp_tipe_kacamata == "Minus" && temp_frame_kacamata == "Black Silver") {
            $("#review").text("190 Reviews");
            $('#star_review').html("<li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-regular fa-star'></i></li>")
        } 
        else if (temp_tipe_kacamata == "Minus" && temp_frame_kacamata == "Black") {
            $("#review").text("312 Reviews");
            $('#star_review').html("<li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star-half-stroke'></i></li>")
        }
        else if (temp_tipe_kacamata == "Minus" && temp_frame_kacamata == "Black Gold") {
            $("#review").text("211 Reviews");
            $('#star_review').html("<li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li>")
        }

        // 2in1
        if (temp_tipe_kacamata == "PhotocromicnRadiasi" && temp_frame_kacamata == "Black Silver") {
            $("#review").text("811 Reviews");
            $('#star_review').html("<li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star-half-stroke'></i></li>")
        } 
        else if (temp_tipe_kacamata == "PhotocromicnRadiasi" && temp_frame_kacamata == "Black") {
            $("#review").text("781 Reviews");
            $('#star_review').html("<li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star-half-stroke'></i></li>")
        }
        else if (temp_tipe_kacamata == "PhotocromicnRadiasi" && temp_frame_kacamata == "Black Gold") {
            $("#review").text("981 Reviews");
            $('#star_review').html("<li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li>")
        }
        
        if (tipe_kacamata != "" && frame_kacamata != "") {
            $("#order_link").addClass("btn-success");
            $("#order_link").removeClass("disabled");
            $("#order_link").removeClass("text-muted");
            $("#order_link").removeClass("btn-secondary");
        }
        
        $("#order_link").attr("href", main_url + temp_tipe_kacamata + second_url + temp_frame_kacamata);
    });

    $(".frame_kacamata").click(function () {
        frame_kacamata = $(this).val();
        if (frame_kacamata == "Black Silver") {
            $("#frame_kacamata_1").removeClass("btn-outline-dark");
            $("#frame_kacamata_1").addClass("btn-dark");
            
            $("#frame_kacamata_2").addClass("btn-outline-dark");
            $("#frame_kacamata_2").removeClass("btn-dark");
            
            $("#frame_kacamata_3").addClass("btn-outline-dark");
            $("#frame_kacamata_3").removeClass("btn-dark");
        } else if (frame_kacamata == "Black") {
            $("#frame_kacamata_1").addClass("btn-outline-dark");
            $("#frame_kacamata_1").removeClass("btn-dark");
            
            $("#frame_kacamata_2").removeClass("btn-outline-dark");
            $("#frame_kacamata_2").addClass("btn-dark");
            
            $("#frame_kacamata_3").addClass("btn-outline-dark");
            $("#frame_kacamata_3").removeClass("btn-dark");
        } else if (frame_kacamata == "Black Gold") {
            $("#frame_kacamata_1").addClass("btn-outline-dark");
            $("#frame_kacamata_1").removeClass("btn-dark");
            
            $("#frame_kacamata_2").addClass("btn-outline-dark");
            $("#frame_kacamata_2").removeClass("btn-dark");
            
            $("#frame_kacamata_3").removeClass("btn-outline-dark");
            $("#frame_kacamata_3").addClass("btn-dark");
        }
        if (frame_kacamata == "Black Silver") {
            $("#produk_image").attr("src", "assets/img/produk/kacamata_silver.png");
        } else if (frame_kacamata == "Black Gold") {
            $("#produk_image").attr("src", "assets/img/produk/kacamata_gold.png");
        } else if (frame_kacamata == "Black") {
            $("#produk_image").attr("src", "assets/img/produk/kacamata_black.png");
        }
        
        var temp_tipe_kacamata = tipe_kacamata;
        var temp_frame_kacamata = frame_kacamata;

        // review berbeda tiap tipe & warna
        // photocromic
        if (temp_tipe_kacamata == "Photocromic" && temp_frame_kacamata == "Black Silver") {
            $("#review").text("514 Reviews");
            $('#star_review').html("<li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star-half-stroke'></i></li>")
        } 
        else if (temp_tipe_kacamata == "Photocromic" && temp_frame_kacamata == "Black") {
            $("#review").text("976 Reviews");
            $('#star_review').html("<li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li>")
        }
        else if (temp_tipe_kacamata == "Photocromic" && temp_frame_kacamata == "Black Gold") {
            $("#review").text("721 Reviews");
            $('#star_review').html("<li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star-half-stroke'></i></li>")
        }

        // radiasi
        if (temp_tipe_kacamata == "Radiasi" && temp_frame_kacamata == "Black Silver") {
            $("#review").text("915 Reviews");
            $('#star_review').html("<li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li>")
        } 
        else if (temp_tipe_kacamata == "Radiasi" && temp_frame_kacamata == "Black") {
            $("#review").text("502 Reviews");
            $('#star_review').html("<li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star-half-stroke'></i></li>")
        }
        else if (temp_tipe_kacamata == "Radiasi" && temp_frame_kacamata == "Black Gold") {
            $("#review").text("694 Reviews");
            $('#star_review').html("<li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star-half-stroke'></i></li>")
        }

        // minus
        if (temp_tipe_kacamata == "Minus" && temp_frame_kacamata == "Black Silver") {
            $("#review").text("190 Reviews");
            $('#star_review').html("<li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-regular fa-star'></i></li>")
        } 
        else if (temp_tipe_kacamata == "Minus" && temp_frame_kacamata == "Black") {
            $("#review").text("312 Reviews");
            $('#star_review').html("<li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star-half-stroke'></i></li>")
        }
        else if (temp_tipe_kacamata == "Minus" && temp_frame_kacamata == "Black Gold") {
            $("#review").text("211 Reviews");
            $('#star_review').html("<li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li>")
        }

        // 2in1
        if (temp_tipe_kacamata == "PhotocromicnRadiasi" && temp_frame_kacamata == "Black Silver") {
            $("#review").text("811 Reviews");
            $('#star_review').html("<li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star-half-stroke'></i></li>")
        } 
        else if (temp_tipe_kacamata == "PhotocromicnRadiasi" && temp_frame_kacamata == "Black") {
            $("#review").text("781 Reviews");
            $('#star_review').html("<li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star-half-stroke'></i></li>")
        }
        else if (temp_tipe_kacamata == "PhotocromicnRadiasi" && temp_frame_kacamata == "Black Gold") {
            $("#review").text("981 Reviews");
            $('#star_review').html("<li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li><li class='list-inline-item text-success'><i class='fa-solid fa-star'></i></li>")
        }
        
        if (tipe_kacamata != "" && frame_kacamata != "") {
            $("#order_link").addClass("btn-success");
            $("#order_link").removeClass("disabled");
            $("#order_link").removeClass("text-muted");
            $("#order_link").removeClass("btn-secondary");
        }
        
        $("#order_link").attr("href", main_url + temp_tipe_kacamata + second_url + temp_frame_kacamata);
    });
});

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