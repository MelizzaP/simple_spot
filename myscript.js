function createSpotDomElements () {
  var spotLight = document.createElement('div');
  spotLight.setAttribute('class','spotlight');
  document.body.appendChild(spotLight);

  var darkness = document.createElement('div');
  darkness.setAttribute('class','darkness');
  document.body.appendChild(darkness);
}

function trackMouse () {
  $(document).on('mousemove', function (e) {
    $('.spotlight').css({
      left: e.pageX - 50,
      top: e.pageY - 50
    });
  });
}
sayHi();
$(document).ready(function () {
  createSpotDomElements()
  trackMouse();
});
