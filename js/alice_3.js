let auButton;
let count = 0;
let a = 0;
let au = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// ----------------------------button---------------------------
jQuery('#try-cake').click(function () {
    a = au[0];
    if (typeof (a) == "number") {
        jQuery(`.a${a}`).html(function () {
            this.play();
        });
        auButton = a;
    }
})
// -------------------------------card--------------------
jQuery('.card').click(function () {
    let cards = this.dataset.card;
    if (auButton == cards) {
        $(this).addClass('show');
        count++;
        au.shift();
        if (count == 10) {
            setTimeout(finFirst, 3000);
        }
    }
    else {
        document.querySelector('.try-again').play();
        auButton = 20;
    }
})

function finFirst() {
    $('#fin-cat').addClass('animated');
    $('#fin-cat').css('transform', 'scale(1)');
    $('#fin-cat').css('opacity', '0.9');

    setTimeout(() => document.querySelector('#fin-cat').style.opacity = '0', 3000);
    $('.fin-screen').addClass('animated');
    setTimeout(() => document.querySelector('.fin-screen').style.transform = 'scale(1)', 5000);
    $('#bottle').attr('href', 'alice_2.html');
    $('#cake').attr('href', 'index.html');
}




document.querySelector('#test').onclick = finFirst;






