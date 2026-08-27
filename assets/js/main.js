// Rahali Corporation — shared site behaviour
document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // Highlight current page in nav
  var here = (window.location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === here || (here === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Footer current year
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Mailto-based forms: build a pre-filled email instead of posting anywhere.
  // Any <form data-mailto="address@domain"> on the site gets this behaviour.
  document.querySelectorAll('form[data-mailto]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var get = function (name) {
        var field = form.elements[name];
        return field ? field.value.trim() : '';
      };
      var name = get('name');
      var email = get('email');
      var phone = get('phone');
      var nature = get('nature');
      var details = get('details');
      var isComplaint = form.id === 'complaint-form';

      var to = form.getAttribute('data-mailto') || 'ranjit@rahali.com';
      var subject = (isComplaint ? 'Complaint — ' : 'Enquiry — ') + (nature || 'General') + ' — ' + (name || 'Website visitor');
      var bodyLines = [
        'Name: ' + name,
        'Email: ' + email,
        'Phone: ' + phone,
        (isComplaint ? 'Nature of complaint: ' : 'Interested in: ') + nature,
        '',
        'Details:',
        details,
        '',
        '(Sent via the ' + (isComplaint ? 'Raise a Complaint' : 'Contact') + ' form at rahali.com)'
      ];
      var mailtoUrl = 'mailto:' + encodeURIComponent(to) +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(bodyLines.join('\n'));

      window.location.href = mailtoUrl;
    });
  });
});
