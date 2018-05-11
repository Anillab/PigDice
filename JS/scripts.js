//user interface
var player2=('');
$(document).ready(function() {
  $("#fm").submit(function(event) {
    event.preventDefault();
    var player1=($("#nm1").val());
      $("#3h").append("<h3>"+player1+"</h3>");
  });
  $("#fr").submit(function(event) {
    event.preventDefault();
    var player2=($("#nm2").val());
    $("#hh3").append("<h3>"+player2+"</h3>");

  });

// business
$("#st").click(function() {
  var a=(Math.floor(Math.random()*6)+1)
$("#2h").text(a);
if (a===1) {
  alert("Stop! Let the other player play!")
}

})
});
