const getConnected = document.getElementById('get-connected');
const formWrapper = document.getElementById('form-wrapper');
const queryString = window.location.search;
const iframeList = document.querySelectorAll('#iframe');
const buttonList = document.getElementsByClassName('button');

for (let button of buttonList) {
  button.href = button.href + queryString;
}

const lazyIframes = document.querySelectorAll('#lazy-iframe');

for (let iframe of lazyIframes) {
  iframe.setAttribute(
    'data-src',
    'https://forms.office.com/Pages/ResponsePage.aspx?id=Gj7b2sRsPE2khHBWXI7rOn8h9Xr2iUdJtps5FM1aggNUNVFDUUkzRTZCQTZKNjlJQTMzODlTR1c1QS4u'
  );
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const iframe = entry.target;
      iframe.src = iframe.dataset.src;
      observer.unobserve(iframe);
    }
  });
});

lazyIframes.forEach((iframe) => {
  observer.observe(iframe);
});
