const tl = gsap.timeline({defaults: {duration: 0.7}})
const fastf = document.querySelector('.playff')
const play = document.querySelector('.play')
const pause = document.querySelector('.pause')
const reverse = document.querySelector('.reverseff')

const fadeOut = {opacity: 0}
const fadeIn = {opacity: 1}

tl  
    // Text Entry
    .from('.nums', {opacity: 0, y: '-100%', stagger: 0.2, ease:'bounce'})
    .from('.gap__size', {opacity: 0, y: '-100%'})
    
    // Box appear
    .from('.box', {opacity: 0, y:'-100%', stagger:0.1})
    //appear
    .to('.b1-3', {opacity: 1})
    .to('.b2-2', {opacity: 1})
    .to('.b3-12', {opacity: 1})
    .to('.b4-34', {opacity: 1})
    .to('.b5-54', {opacity: 1})

    .to('.temp', {x: '-8em', ease: 'elastic'})

    // move value to tempBox
    .to('.b2-2', {opacity: 0})
    .to('.t2', {opacity: 1})
    
    .to('.temp', {x: '-16em', ease: 'elastic'})

    .to('.b1-3', {opacity: 0})
    .to('.b2-3', {opacity: 1})
    .to('.t2', {opacity: 0})
    .to('.b1-2', {opacity: 1})

    .to('.temp', {x: '0em', ease: 'elastic'})

    .to('.b3-12', {opacity: 0})
    .to('.t12', {opacity: 1})

    .to('.temp', {x: '-8em', ease: 'elastic'})
    .to('.temp', {x: '0em', ease: 'elastic'})

    .to('.t12', {opacity: 0})
    .to('.b3-12', {opacity: 1})

    .to('.temp', {x: '8em', ease: 'elastic'})

    .to('.b4-34', {opacity: 0})
    .to('.t34', {opacity: 1})

    .to('.temp', {x: '0em', ease: 'elastic'})
    .to('.temp', {x: '8em', ease: 'elastic'})

    .to('.t34', {opacity: 0})
    .to('.b4-34', {opacity: 1})

    .to('.temp', {x: '16em', ease: 'elastic'})

    .to('.b5-54', {opacity: 0})
    .to('.t54', {opacity: 1})

    .to('.temp', {x: '8em', ease: 'elastic'})
    .to('.temp', {x: '16em', ease: 'elastic'})

    .to('.t54', {opacity: 0})
    .to('.b5-54', {opacity: 1})
    .from('.para', {opacity: 0, y:'-100%', ease: 'bounce'})
    
    
fastf.addEventListener('click', ()=>{
    tl.timeScale(2)
})
play.addEventListener('click', ()=>{
    tl.timeScale(1)
    tl.resume()
})
pause.addEventListener('click', ()=>{
    tl.pause();
})
reverse.addEventListener('click', ()=>{
    tl.timeScale(2)
    tl.reverse();
})