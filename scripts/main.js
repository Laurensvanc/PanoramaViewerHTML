function leftSlider_start() {
  window.scrollBy(-50, 0);
  scrolldelay_left = setTimeout("leftSlider_start()", 100);
}

function leftSlider_stop() {
  window.scrollBy(0, 0);
  clearTimeout(scrolldelay_left);
}

function rightSlider_start() {
  window.scrollBy(50, 0);
  scrolldelay_right = setTimeout("rightSlider_start()", 100);
}

function rightSlider_stop() {
  window.scrollBy(0, 0);
  clearTimeout(scrolldelay_right);
}