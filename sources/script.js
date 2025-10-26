




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



function closeCarousel(){


document.addEventListener('DOMContentLoaded', () => {
  const modalEl = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const bsModal = new bootstrap.Modal(modalEl);

  document.querySelectorAll('.brand-carousel-track img').forEach(img => {
    img.addEventListener('click', () => {
      modalImage.src = img.dataset.full || img.src;
      bsModal.show();
    });
  });

  modalEl.addEventListener('hidden.bs.modal', () => {
    modalImage.src = '';
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const modalEl = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const closeBtn = modalEl.querySelector('.btn-close-custom');
  const bsModal = new bootstrap.Modal(modalEl);

  document.querySelectorAll('.brand-carousel-track img').forEach(img => {
    img.addEventListener('click', () => {
      modalImage.src = img.src;
      bsModal.show();

      // Cargar la imagen para detectar brillo promedio
      const tempImg = new Image();
      tempImg.crossOrigin = 'anonymous';
      tempImg.src = img.src;
      tempImg.onload = function () {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = this.width;
        canvas.height = this.height;
        ctx.drawImage(this, 0, 0);
        const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        let sum = 0;
        for (let i = 0; i < data.length; i += 4) {
          sum += (data[i] + data[i + 1] + data[i + 2]) / 3;
        }
        const brightness = sum / (data.length / 4);
        if (brightness > 128) {
          closeBtn.classList.add('light-bg');
        } else {
          closeBtn.classList.remove('light-bg');
        }
      };
    });
  });

  modalEl.addEventListener('hidden.bs.modal', () => {
    modalImage.src = '';
  });
});

}