
var dado1 = Math.floor (Math.random()*6 ) +1;
document.getElementById('player1').innerHTML = dado1;
var dado2 = Math.floor (Math.random()*6 ) +1;
document.getElementById('player2').innerHTML = dado2;
if (dado1>dado2) {
  document.getElementById('the_winner_is').innerHTML = 'player1-winner';
} else if (dado1==dado2){
  document.getElementById('the_winner_is').innerHTML = 'DRAW';
} else {
  document.getElementById('the_winner_is').innerHTML = 'player2-winner';
}
