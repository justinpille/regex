$(document).ready(function() {

  ! function keyups() { //https://sarfraznawaz.wordpress.com/2012/01/26/javascript-self-invoking-functions/
    $('#pattern').keyup(update);
    $('#flags').keyup(update);
    $('#string').keyup(update);
  }();

  function update() {
    var pattern = $('#pattern').val();
    var flags = $('#flags').val();
    var string = $('#string').val();
    if (flags === "Flags") {
      flags = undefined;
    }
    var re = new RegExp(pattern, flags);
    eval(re, string);
  }

  function eval(regex, string) {
    var eval = regex.test(string);
    show(eval);
  }

  function show(t) {
    $('#eval').html('=' + t);
  }

});
