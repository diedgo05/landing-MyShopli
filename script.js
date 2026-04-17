// =============================================
// HERO SLIDER — Auto Switching
// =============================================
function bannerSwitcher() {
    var next = $('.sec-1-input').filter(':checked').next('.sec-1-input');
    if (next.length) {
      next.prop('checked', true);
    } else {
      $('.sec-1-input').first().prop('checked', true);
    }
  }
  
  var bannerTimer = setInterval(bannerSwitcher, 5000);
  
  $('nav .controls label').click(function () {
    clearInterval(bannerTimer);
    bannerTimer = setInterval(bannerSwitcher, 5000);
  });
  
  // =============================================
  // SMOOTH SCROLL
  // =============================================
  $('.main-menu a, .learn-more-button a').click(function (e) {
    var href = $(this).attr('href');
    if (href && href.startsWith('#') && $(href).length) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $(href).offset().top }, 900);
    }
  });
  
  // =============================================
  // HEADER — Cambia fondo al hacer scroll
  // =============================================
  $(window).scroll(function () {
    if ($(this).scrollTop() > 80) {
      $('.main-header').css({
        'background': 'rgba(45, 55, 72, 0.97)',
        'position': 'fixed',
        'box-shadow': '0 2px 12px rgba(0,0,0,0.2)'
      });
    } else {
      $('.main-header').css({
        'background': 'transparent',
        'position': 'absolute',
        'box-shadow': 'none'
      });
    }
  });
  
  // =============================================
  // FADE-IN ON SCROLL (Intersection Observer)
  // =============================================
  const fadeEls = document.querySelectorAll(
    '.service-item, .work-step, .blog-post, .testimonial, .stat-counter, .team-member, .stat-item'
  );
  
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  
  fadeEls.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });