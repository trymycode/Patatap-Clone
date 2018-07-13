var showText = function (target, message, index, interval) {   
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () { showText(target, message, index, interval); }, interval);
  }
}
$(function () {

  showText("#msg", "PATATAP-CLONE", 0, 180);   
var sound = new Howl({
  src: ['sounds/bubbles.mp3']
});
sound.play();
});