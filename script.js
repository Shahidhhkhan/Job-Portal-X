// Scroll to jobs section
function scrollToJobs(){
  document.getElementById('jobs').scrollIntoView({behavior:'smooth'});
}

// Toggle save job
function toggleSave(el){
  el.classList.toggle('saved');
  el.textContent = el.classList.contains('saved') ? '❤️' : '♡';
}

// Live search filter
document.getElementById('searchInput').addEventListener('input', e=>{
  const value = e.target.value.toLowerCase();
  document.querySelectorAll('.job-card').forEach(card=>{
    card.style.display = card.innerText.toLowerCase().includes(value) ? 'flex' : 'none';
  });
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', e=>{
  e.preventDefault();
  alert('Message sent successfully!');
  e.target.reset();
});
