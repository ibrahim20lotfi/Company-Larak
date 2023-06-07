 const introVideo = document.getElementById('intro');

     introVideo.addEventListener('ended', () => {
       introVideo.style.display='none';
       document.body.style.overflow='visible';
     });