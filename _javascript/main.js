// Universal variables
var viewWidth = document.querySelector('body').offsetWidth;

// Video

// Animation slika naslov on scroll
gsap.from('#anim__print__head',{
  scrollTrigger: {
      trigger: '#anim__print__head',
      start: 'top 80%'
  },
  scale: 0,
  duration: 2,
  ease:"elastic.out(1, 0.75)"
})

gsap.from('#anim__traper__slika h2',{
  scrollTrigger: {
      trigger: '#anim__traper__slika',
      start: 'top 70%'
  },
  x: -viewWidth,
  opacity: 0,
  duration: 2,
  ease:"power2.out"
})

gsap.from('#anim__traper__head',{
  scrollTrigger: {
      trigger: '#anim__traper__head',
      start: 'top 80%'
  },
  scale: 0,
  duration: 2,
  ease:"elastic.out(1, 0.75)"
})

gsap.from('#anim__detalji__slika h2',{
  scrollTrigger: {
      trigger: '#anim__detalji__slika',
      start: 'top 70%'
  },
  x: -viewWidth,
  opacity: 0,
  duration: 2,
  ease:"power2.out"
})

gsap.from('#anim__detalji__head',{
  scrollTrigger: {
      trigger: '#anim__detalji__head',
      start: 'top 80%'
  },
  scale: 0,
  duration: 2,
  ease:"elastic.out(1, 0.75)"
})

gsap.from('#anim__overdressed__slika h2',{
  scrollTrigger: {
      trigger: '#anim__overdressed__slika',
      start: 'top 70%'
  },
  x: -viewWidth,
  opacity: 0,
  duration: 2,
  ease:"power2.out"
})

gsap.from('#anim__overdressed__head',{
  scrollTrigger: {
      trigger: '#anim__overdressed__head',
      start: 'top 80%'
  },
  scale: 0,
  duration: 2,
  ease:"elastic.out(1, 0.75)"
})

gsap.from('#logo__video',{
  scrollTrigger: {
      trigger: '#logo__video',
      start: 'top 80%'
  },
  scale: 0,
  duration: 2,
  ease:"elastic.out(1, 0.75)"
})


// Animation naslov on scroll
// gsap.from('#rendeli',{
//   scrollTrigger: {
//       trigger: '#rendeli',
//       start: 'top 90%'
//   },
//   x: viewWidth,
//   opacity: 0,
//   duration: 1,
//   ease:"none"
// })