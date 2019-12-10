let heart1 = document.getElementById('_x3C_Heart1_x3E_');
let heart2 = document.getElementById('_x3C_Heart2_x3E_');
let niet = document.getElementById('_x3C_e_x3E__1_');

function beweegAnders(){
    gsap.to('.st4', {duration: 2, rotation:'+=360'});
}

const mijnTimeLine = new TimelineMax({});
const breekHetHart = () => {
    mijnTimeLine.to(niet, 1,{scale: .1,})
    mijnTimeLine.to(heart1, 2,{x: "-=100", rotation: -5, color: "#000000", ease: "back", yoyo: true, repeat: 1, });
    mijnTimeLine.to(heart2, 2,{x: "+=100", rotation: 5, color: "#000000", ease: "back", yoyo: true, repeat: 1, });
};

heart1.addEventListener('click', breekHetHart);
heart2.addEventListener('click', breekHetHart);


