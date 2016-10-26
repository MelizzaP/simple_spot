function createSpotDomElements () {
  var spotLight = document.createElement('div');
  spotLight.setAttribute('class','spotlight');
  document.body.appendChild(spotLight);
}

function trackMouse () {
  $(document).on('mousemove', function (e) {
    $('.spotlight').css({
      left: e.pageX - 50,
      top: e.pageY - 50
    });
  });
}

$(document).ready(function () {
  createSpotDomElements()
  trackMouse();
});
