document.getElementById('manipulateButton').addEventListener('click', function() {
  const videoStyle = document.querySelector('video').style;
  videoStyle.transform = videoStyle.transform ? '' : 'rotate(180deg)';
  videoStyle.filter = videoStyle.filter ? '' : 'invert(1)';
});
