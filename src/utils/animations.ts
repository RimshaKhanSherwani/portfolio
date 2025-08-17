import * as animeJs from 'animejs';

const { animate, stagger } = animeJs;

export const animateFloatingShape = (element: HTMLElement, options = {}) => {
  const defaults = {
    translateX: [-15, 15],
    translateY: [-15, 15],
    rotateX: [-10, 10],
    rotateY: [-10, 10],
    duration: 6000,
    easing: 'easeInOutSine',
    loop: true,
    direction: 'alternate',
    delay: stagger(300)
  };

  const config = { ...defaults, ...options };
  return animate(element, config);
};

export const animateStaggerGrid = (elements: HTMLElement[], options = {}) => {
  const defaults = {
    scale: [0.8, 1.2],
    opacity: [0.4, 0.8],
    duration: 3000,
    easing: 'easeInOutQuad',
    loop: true,
    direction: 'alternate',
    delay: stagger(100, { grid: [3, 3], from: 'center' })
  };

  const config = { ...defaults, ...options };
  return animate(elements, config);
};

export const animateCircuitPath = (pathElement: HTMLElement, options = {}) => {
  const defaults = {
    strokeDashoffset: ['0%', '100%'],
    easing: 'easeInOutSine',
    duration: 2000,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  };

  const config = { ...defaults, ...options };
  return animate(pathElement, config);
};

export const animateTextReveal = (elements: HTMLElement[], options = {}) => {
  const defaults = {
    opacity: [0, 1],
    translateY: [20, 0],
    easing: 'easeOutExpo',
    duration: 1200,
    delay: stagger(100)
  };

  const config = { ...defaults, ...options };
  return animate(elements, config);
};

export const animateTechStack = (elements: HTMLElement[], options = {}) => {
  const defaults = {
    translateY: [-30, 0],
    opacity: [0, 1],
    scale: [0.8, 1],
    rotateZ: [-10, 0],
    easing: 'spring(1, 80, 10, 0)',
    duration: 1500,
    delay: stagger(80)
  };

  const config = { ...defaults, ...options };
  return animate(elements, config);
};

export const animateParallaxScroll = (elements: HTMLElement[], options = {}) => {
  const defaults = {
    translateY: function(el, i) {
      return -50 + (i * 10);
    },
    easing: 'linear',
    duration: 1000
  };

  const config = { ...defaults, ...options };
  return animate(elements, config);
};

// 3D shape generators
export const createTechShape = (type: 'cube' | 'pyramid' | 'prism' | 'sphere' = 'cube', size = 60) => {
  const div = document.createElement('div');
  div.className = `tech-shape tech-shape-${type}`;
  div.style.width = `${size}px`;
  div.style.height = `${size}px`;
  
  if (type === 'cube') {
    for (let i = 0; i < 6; i++) {
      const face = document.createElement('div');
      face.className = 'tech-shape-face';
      div.appendChild(face);
    }
  } else if (type === 'pyramid') {
    for (let i = 0; i < 4; i++) {
      const face = document.createElement('div');
      face.className = 'tech-shape-face';
      div.appendChild(face);
    }
  } else if (type === 'prism') {
    for (let i = 0; i < 5; i++) {
      const face = document.createElement('div');
      face.className = 'tech-shape-face';
      div.appendChild(face);
    }
  } else if (type === 'sphere') {
    const core = document.createElement('div');
    core.className = 'tech-shape-core';
    div.appendChild(core);
    
    for (let i = 0; i < 3; i++) {
      const ring = document.createElement('div');
      ring.className = 'tech-shape-ring';
      ring.style.transform = `rotateX(${i * 60}deg)`;
      div.appendChild(ring);
    }
  }
  
  return div;
};

// Scroll-based animations
export const initScrollAnimations = () => {
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.scroll-animate');
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  };
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Initial check
  
  return () => window.removeEventListener('scroll', animateOnScroll);
};

// Particle system
export const createParticleSystem = (container: HTMLElement, count = 50) => {
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'tech-particle';
    
    // Random position
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    // Random size
    const size = Math.random() * 5 + 1;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random animation delay
    particle.style.animationDelay = `${Math.random() * 5}s`;
    
    container.appendChild(particle);
  }
};
