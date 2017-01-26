
;(function () {
    const nyan = document.getElementsByClassName('nyan')[0];
    const song = new Audio('/music/original.ogg');

    // loop the song
    song.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);

    nyan.addEventListener('click', function () {
        if (song.paused) {
            song.play();
        } else {
            audio.pause();
        }
    })
})();
