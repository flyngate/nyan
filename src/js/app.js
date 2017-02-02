
;(function () {
    const button = document.getElementsByClassName('audio')[0];
    const playIcon = document.getElementsByClassName('audio__play')[0];
    const pauseIcon = document.getElementsByClassName('audio__pause')[0];
    const song = new Audio('/music/original.ogg');

    song.volume = 0.2;

    // loop the song
    song.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);

    button.addEventListener('click', function () {
        if (song.paused) {
            song.play();
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'block';
        } else {
            song.pause();
            playIcon.style.display = 'block';
            pauseIcon.style.display = 'none';
        }
    });
})();
