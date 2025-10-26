




function CarouselIMG(){

  document.querySelectorAll('.brand-carousel img').forEach(img => {
           img.addEventListener('click', () => {
             document.getElementById('modalImage').src = img.src;
           });
         });

}


function menu(){

  document.querySelectorAll('.navbar-nav a').forEach(link => {
    link.addEventListener('click', () => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
      bsCollapse.hide();
    });
  });
}


//WHATSAPP
function Wbutton(){

  document.addEventListener("DOMContentLoaded", function() {
  const btnWhatsapp = document.getElementById('btnWhatsapp');
  const trabajosSection = document.getElementById('trabajos');

  if (!btnWhatsapp || !trabajosSection) {
    console.warn("No se encontró el botón WhatsApp o la sección #trabajos.");
    return;
  }

  window.addEventListener('scroll', () => {
    const sectionTop = trabajosSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 150) {
      btnWhatsapp.classList.add('visible');
    } else {
      btnWhatsapp.classList.remove('visible');
    }
  });
});

}