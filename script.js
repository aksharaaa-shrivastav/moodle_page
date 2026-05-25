function toggleAnnouncements() {
  var body = document.getElementById('announcements-body');
  var btn = document.querySelector('.toggle-btn');
  if (body.style.display === 'none') {
    body.style.display = 'block';
    btn.textContent = 'Hide';
  } else {
    body.style.display = 'none';
    btn.textContent = 'Show';
  }
}

function setActive(link) {
  var links = document.querySelectorAll('.nav-link');
  links.forEach(function(l) {
    l.classList.remove('active');
  });
  link.classList.add('active');
}

function downloadAlert() {
  alert('Download will start shortly. Please check your downloads folder.');
}