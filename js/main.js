// Shoelace - drawer more infomation
const drawer = document.querySelector('.drawer-overview');
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('sl-button[variant="primary"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());

  drawer.addEventListener('sl-request-close', event => {
    if (event.detail.source === 'overlay') {
      event.preventDefault();
    }
  });

//================================= SVG animation =================================


const icon = document.querySelector('.icon');  // Animation front page, SVG animation of car accident. 

  lottie.loadAnimation({
    container: icon,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'icon-menu.json'
  });

  icon.addEventListener('mouseenter', () => { //addevent listner
    lottie.setDirection('1')
    lottie.play()
  })

  icon.addEventListener('mouseleave', () => {
    lottie.setDirection('-1')
    lottie.play()
  })

//================================= scrollTrigger =================================
gsap.registerPlugin(ScrollTrigger);


let sectionCause = gsap.timeline({ //timeline for scroll trigger
  scrollTrigger: {
    trigger: ".section-causes",   // select whole section for triggering 
    start: "20% top",            // start position on when is active
    end: "50%",                 // end position on finished
    scrub: 1,     
  }
});

sectionCause.to(".character-img",{y:1000, opacity: 0})  //Home page causes, .to -> to ease out and exit section
  .to(".col-one-cause", {x:-1000, opacity: 0})
  .to(".col-two-cause", {x:1000,  opacity: 0})
  .to(".shadow", {y:1000, opacity: 0});


let sectionImpact = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-impact",
    start: "20% top",
    end: "50%",
    scrub: 1,
  }
});

sectionImpact.to(".character-img2",{y:1000, x:-800, opacity: 0})
  .to(".col-one", {x:-1000, opacity: 0})
  .to(".col-two", {x:1000,  opacity: 0})
  .to(".shadow2", {y:1000, opacity: 0});


//================================= SECTION INJURIES =================================
  let sectionInj = gsap.timeline({ 
    scrollTrigger: {
      trigger: ".section-injuries",
      pin: true,                        //pining for when section is not finish scrolling it stays inplace
      start: "top top",
      end: "+=400",
      scrub: 1,
    }
  });

  sectionInj.from(".character-img-impact", {x: -500, duration:20}) //.from -> to ease in the section
    .from(".card-common", {x: 2000, duration: 12}, '-=1')
    .from(".card-minor", {x: 2000, duration:8}, '-=2')
    .from(".card-major", {x: 2000, duration:8}, '-=3');

//================================= SECTION STATISTICS =================================
  let sectionStat = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-statistics", 
      pin: true,            
      start: "top top",
      end: "+=500",
      scrub: 1,
    } 
  });

  sectionStat
  .from(".top", {y:1000, opacity: 0, duration: 20}, '-=1')
  .from(".mid", {y:1000, opacity: 0, duration: 20}, '-=2')
  .from(".bottom", {y:1000, opacity: 0, duration: 20}, '-=3')
  .from(".more-info-btn",{y:1000, opacity: 0, duration: 20});
 
  
//================================= SECTION PREVENTIONS =================================

let sectionPrev = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-preventions",
    pin: true,
    start: "top top",
    end: "+=500",
    scrub: 1,
    
  }
});

  sectionPrev.from(".awareness", {x:2000, opacity: 1, duration: 20}, '-=5')
  .from(".DUI", {x:2000, opacity: 1, duration: 20}, '-=5')
  .from(".monitoring", {x:2000, opacity: 1, duration: 20}, '-=5');