//user interface
function player(a,b) {
  this.player1=a;
  this.player2=b;
}
var player2=('');
var player1=('');
var player3=new player
var turn=true
var totalScore=a++
var a=(Math.floor(Math.random()*6)+1)

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
  $("#2h").text('');
  var a=(Math.floor(Math.random()*6)+1)
$("#2h").append(a);
if (a===1)
{
  alert("Stop! Let the other player play");
}

});
$("#sp").click(function() {
  alert("next!")
  $("#hh").append(totalScore);

});
});
