// Universal variables
var viewWidth = document.querySelector('body').offsetWidth;

// Video
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('headerVideo', {
    width: '100%',
    height: '100%',
    videoId: 'U0muqHbaggg',
    playerVars: { 'autoplay': 1, 'playsinline': 1 },
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
    event.target.mute();
  event.target.playVideo();
}

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

gsap.from('#logoVideo',{
  scrollTrigger: {
      trigger: '#logoVideo',
      start: 'top 80%'
  },
  scale: 0,
  duration: 2,
  ease:"elastic.out(1, 0.75)"
})
