$(document).ready(function(){
    var owl = $(".owl-carousel"),
        ask = $(".trading .ask-price"),
        bid = $(".trading .bid-price"),
        price1 = $(".content .price-1"),
        price2 = $(".content .price-2"),
        price3 = $(".content .price-3"),
        price4 = $(".content .price-4"),
        but = $(".content .button"),
        closePopup = $(".close-popup"),
        popup = $('.popup');


    owl.owlCarousel({
        items: 7,
        margin: 40,
        stagePadding: 10,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2600,
        autoplayTimeout: 2600,
        autoplayHoverPause: true,
        responsive: {
            320: {items: 1},
            576: {items: 2},
            850: {items: 3},
            1100:{items: 4},
            1350:{items: 5},
            1600:{items: 6},
            1900:{items: 7},

        }
    });


    function randomPrice(item, min, max) {
        let timerId = setTimeout(function tick() {
            let num = (Math.random() * (max - min) + min);
            item.html(Math.floor(num * 100) / 100).prepend(' €');
            timerId = setTimeout(tick, 15000);
        }, 15000);
    }

    randomPrice(ask,1500.00, 3499.99);
    randomPrice(bid,1500.00, 3499.99);

    function randomWin(item, min, max) {
        let num = (Math.random() * (max - min) + min);
        item.text(Math.floor(num)).prepend('$');
    }
    function randomWinn(item, min, max) {
        let num = (Math.random() * (max - min) + min);
        item.text(Math.floor(num * 100) / 100).prepend('$');
    }

    randomWin(price1,4500.00, 9000);
    randomWin(price2,1500.00, 3500);
    randomWin(price3,150.00, 500);
    randomWinn(price4,1.00, 9.99);

    but.click(function() {
        $('.overlay').fadeIn();
    });

    closePopup.click(function() {
        $('.overlay').fadeOut();
    });

    $(document).mouseup(function (e) {
        if (e.target!=popup[0]&&popup.has(e.target).length === 0){
            $('.overlay').fadeOut();
        }
    });

});

var idate = $(".item .date"),
    money1 = $(".item1 .money"),
    money2 = $(".item2 .money"),
    money3 = $(".item3 .money"),
    money4 = $(".item4 .money"),
    money5 = $(".item5 .money");

function randomMoney(item, min, max) {
    let num = (Math.random() * (2999.99 - 500.99) + 500.99);
    item.text(Math.floor(num * 100) / 100).prepend('$');
}
randomMoney(money1);
randomMoney(money2);
randomMoney(money3);
randomMoney(money4);
randomMoney(money5);

function date () {
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth() + 1;
    var year = d.getFullYear();
    idate.text(day + "." + month + "." + year);
};
date();