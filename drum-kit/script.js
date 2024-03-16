const keys = Array.from(document.querySelectorAll('.key'))
keys.forEach(key => key.addEventListener('transitionend', e => {
    if (e.propertyName !== 'transform' || !e.target.classList.contains('playing')) return;
    e.target.classList.remove('playing');
}));

document.addEventListener("keydown", e => {
    if (e.repeat) return

    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if (!audio) return;

    key.classList.add('playing')
    audio.currentTime = 0;
    audio.play()
})