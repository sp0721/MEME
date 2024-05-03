$(document).ready(function(){
    $('#top-text').keyup(function(){
        $('#top-caption').html($(this).val());
    });

    $('#bottom-text').keyup(function(){
        $('#bottom-caption').html($(this).val());
    });

    $('#image-url').keyup(function(){
        $('#img1').attr('src', $(this).val());
    });

    $(document).keyup(function(event){
        var meme3 = $('div#meme3');
        switch(event.which) {
            case 37: // left arrow
                meme3.animate({
                    left: '-=100px'
                });
                break;
            case 38: // up arrow
                meme3.animate({
                    top: '-=100px'
                });
                break;
            case 39: // right arrow
                meme3.animate({
                    left: '+=100px'
                });
                break;
            case 40: // down arrow
                meme3.animate({
                    top: '+=100px'
                });
                break;
        }
    });
});
