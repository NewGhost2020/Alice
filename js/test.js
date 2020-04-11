let wordQueen = 'QUEEN';
let word = '';
$('input').on('mouseover', function () {
    $('input:first').focus();
});
$('input').keyup(function () {
    $(this).next().focus();
});

$('button.queen').click(function () {
    $('input.queen').each(function () {
        word += $(this).val();
    });
    word = word.toUpperCase();
    if (word == wordQueen) {
        alert('Si!!!');
    }
    else {
        alert('No!!!');
        word = ' ';
        $('input.queen').each(function () {
            $(this).val(' ');
        });
    }
});
