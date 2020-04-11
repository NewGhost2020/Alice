// -----------------------------Cards--------------------------
let flags = [false, false, false, false, false, false, false, false, false, false];
let card;
let countCard = 0;
document.querySelectorAll('.card').forEach(function (element) {
    element.onclick = showCard;
})

function showCard() {
    let i = this.dataset.card;
    flags[i] = !flags[i];
    if (flags[i]) {
        closeCard();
        this.classList.add('show');
    } else {
        this.classList.remove('show');
    }
    card = i;
    return i;
}
// ----------------------------button---------------------------
document.querySelectorAll('.btn').forEach(function (element) {
    element.onclick = buttonAudio;
})

function buttonAudio() {
    let a = this.dataset.btn;
    if (a == card) {
        document.querySelector(`.a${a}`).play();
        document.querySelector('.card[data-card = "' + a + '"]').classList.add('show-fix');
        countCard++;
        if (countCard == 10) {
            setTimeout(finFirst, 3000);
        }
    }
    else {
        document.querySelector('.try-again').play();
        closeCard();
    }
    return a;
}

function closeCard() {
    document.querySelectorAll('.card').forEach(function (element) {
        element.classList.remove('show');
    })
}
document.querySelector('#test').onclick = finFirst;

function finFirst() {
    document.querySelector('#fin-cat').classList.add('animated');
    document.querySelector('#fin-cat').style.transform = 'scale(1)';
    document.querySelector('#fin-cat').style.opacity = '0.9';
    setTimeout(() => document.querySelector('#fin-cat').style.opacity = '0', 3000);
    document.querySelector('.fin-screen').classList.add('animated');
    setTimeout(() => document.querySelector('.fin-screen').style.transform = 'scale(1)', 5000);
    document.querySelector('#return').onclick = function () {
        location.reload();
    }
    jQuery('#cake').attr('href', 'alice_2.html');
}




