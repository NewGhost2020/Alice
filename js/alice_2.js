let auButton;
let count = 0;
// ----------------------------button---------------------------
jQuery('.btn').click(function () {
    let a = this.dataset.btn;
    jQuery(`.a${a}`).html(function () {
        this.play();
    });
    auButton = a;
})

// -------------------------------card--------------------
jQuery('.card').click(function () {
    let cards = this.dataset.card;
    if (auButton == cards) {
        $(this).addClass('show');
        count++;
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
    $('.fin-screen').addClass('animated');
    setTimeout(() => document.querySelector('.fin-screen').style.transform = 'scale(1)', 1000);
    $('#bottle').attr('href', 'index.html');
    $('#cake').attr('href', 'alice_3.html');
}




document.querySelector('#test').onclick = finFirst;






