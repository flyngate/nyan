
;(function () {
    const nyan = document.getElementsByClassName('nyan')[0];
    const audio = new Audio('/music/original.ogg');
    let playing = false;

    nyan.addEventListener('click', function () {
        console.log('click');
        if (playing) {
            audio.pause();
        } else {
            audio.play();
        }
        playing = ! playing;
    })
})();
