
            const countNumber = document.getElementById('count-number');
let count = 0;

const options = {
rootMargin: '0px',
threshold: 0.5
}

const observer = new IntersectionObserver(function(entries, observer) {
entries.forEach(entry => {
   if(entry.isIntersecting) {
      const interval = setInterval(() => {
   if(count < 159) {
      count++;
         countNumber.innerHTML = count;
      } else {
         clearInterval(interval);
      }
      }, 10);
   }
});
}, options);

observer.observe(countNumber);
       