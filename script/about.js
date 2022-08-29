// about start
document.querySelector('.about__text-circle').innerHTML =
    "нажми сюда чтобы посмотреть видео студии".split('')
    .map((e, i) => 
    `<span class = "about__circle-content" style="--rot:${i*7}deg">${e}</span>`).join('');

const windowWidth = window.innerWidth;

if(windowWidth<= 1350){
    document.querySelector('.about__text-circle').innerHTML =
    "нажми сюда чтобы посмотреть видео студии".split('')
    .map((e, i) => 
    `<span class = "about__circle-content" style="--rot:${i*8.75}deg">${e}</span>`).join('');
}
    // about end