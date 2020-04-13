var wordCards = ['ALICE', 'TEATIME', 'CARD', 'CHESHIRECAT', 'CATERPILLAR', 'WATCH', 'MADHATTER', 'MUSHROOM', 'QUEEN', 'RABBIT'];
let countCard = 0;
$('.card').click(function () {
    let card = $(this).attr('data-card');
    let wordDiv = $('div[data-word ="' + card + '"]');
    wordDiv.show();
    checkWord(card, wordDiv);
})

function checkWord(card, wordDiv) {
    let word = '';
    $(wordDiv).find('input').on('mouseover', function () {
        $(wordDiv).find('input:first').focus();
    });
    $(wordDiv).find('input').on("keyup", function () {
        $(this).next().focus();
    });
    $(wordDiv).find('button').click(function () {
        $(wordDiv).find('input').each(function () {
            word += $(this).val();
        });
        word = word.toUpperCase();
        if (word == wordCards[card]) {
            $('.card[data-card ="' + card + '"]').find('.front').prepend('<img class="bow" src="img/bow.png" alt="bow">');
            $('.card[data-card ="' + card + '"]').off();
            countCard++;
            if (countCard == 10) {
                finFirst();
            }
        }
        else {
            $(wordDiv).find('input').each(function () {
                $(this).val('');
            });
        }
        wordDiv.hide();
        word = '';
    });
}

function finFirst() {
    $('#fin-cat').addClass('animated');
    $('#fin-cat').css('transform', 'scale(1)');
    $('#fin-cat').css('opacity', '0.9');

    setTimeout(() => document.querySelector('#fin-cat').style.opacity = '0', 3000);
    $('.fin-screen').addClass('animated');
    setTimeout(() => document.querySelector('.fin-screen').style.transform = 'scale(1)', 5000);
    $('#bottle').attr('href', 'alice_3.html');
    $('#cake').attr('href', 'index.html');
}

document.querySelector('#test').onclick = finFirst;



