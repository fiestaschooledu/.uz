
function showToast(message){
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(()=>{
    toast.classList.remove("show");
  }, 2500);
}



const form = document.getElementById('leadForm');

if(form){
  form.addEventListener('submit', async e => {
    e.preventDefault();

    showToast("Yuborilyapti...");

    const data = {
      name: form.name.value,
      phone: form.phone.value,
      course: form.course.value
    };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbx54oaJfb_9QAGH71m8QF-nAsNsCZ-X_vErWY5d5ZX3-IemCgfhqxLBYml8OOS_JQ3gCw/exec", {
        method: "POST",
        body: JSON.stringify(data)
      });

      showToast("Yuborildi! Biz siz bilan tez orada bog‘lanamiz.");
      form.reset();

    } catch(err){
      showToast("Xatolik yuz berdi");
    }
  });
}

// simple scroll effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if(window.scrollY > 50){
    nav.style.background = 'rgba(0,0,0,0.7)';
  } else {
    nav.style.background = 'rgba(0,0,0,0.4)';
  }
});

const track = document.getElementById("slidesTrack");

if(track){
  const speed = window.innerWidth < 768 ? 2.5 : 1.5;

function autoScroll(){
  track.scrollTo({
    left: track.scrollLeft + speed,
    behavior: "auto"
  });

  if(track.scrollLeft >= track.scrollWidth / 2){
    track.scrollLeft = 0;
  }

  requestAnimationFrame(autoScroll);
}


  autoScroll();
}


const faqButtons = document.querySelectorAll(".faq-item");

faqButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    const icon = btn.querySelector(".faq-icon");

    if(answer.style.display === "block"){
      answer.style.display = "none";
      icon.textContent = "+";
    } else {
      document.querySelectorAll(".faq-answer").forEach(a => a.style.display = "none");
      document.querySelectorAll(".faq-icon").forEach(i => i.textContent = "+");

      answer.style.display = "block";
      icon.textContent = "−";
    }
  });
});

const items = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('show');
    }
  });
},{threshold:.15});

items.forEach(el=>observer.observe(el));


const btn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  btn.style.display = window.scrollY > 400 ? "block" : "none";
});

btn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};



const logoTrack = document.getElementById("logoTrack");

if(logoTrack){
  function scrollLogos(){
    logoTrack.scrollLeft += 1;
    if(logoTrack.scrollLeft >= logoTrack.scrollWidth/2){
      logoTrack.scrollLeft = 0;
    }
    requestAnimationFrame(scrollLogos);
  }
  scrollLogos();
}

const counters = document.querySelectorAll('.counter');

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = +el.dataset.target;
      let count = 0;

      const update = () => {
        count += Math.ceil(target / 120);
        if (count >= target) {
          el.textContent = target + "+";
        } else {
          el.textContent = count;
          requestAnimationFrame(update);
        }
      };

      update();
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

counters.forEach(c => counterObserver.observe(c));


function toggleMenu(){
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('show');
}

document.querySelectorAll('#navLinks a').forEach(link=>{
  link.addEventListener('click',()=>{
    document.getElementById('navLinks').classList.remove('show');
  });
});








