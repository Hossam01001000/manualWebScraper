function scrollTo(element, to, duration) {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;
  
    const animateScroll = function() {
      currentTime += increment;
      const val = Math.easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if(currentTime < duration) {
        requestAnimationFrame(animateScroll);
      }
    };
  
    Math.easeInOutQuad = function(t, b, c, d) {
      t /= d/2;
      if (t < 1) {
        return c/2*t*t + b;
      }
      t--;
      return -c/2 * (t*(t-2) - 1) + b;
    };
  
    requestAnimationFrame(animateScroll);
  }
  

  const myElement = document.getElementById('myElement');
scrollTo(myElement, 1000, 1000);
