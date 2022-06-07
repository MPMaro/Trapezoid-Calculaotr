// Trapezoid Calc by Manush & Mr. V

document.body.style.backgroundColor = '#ffddd2' // Sets the document body colour.

// Event Listener
document.getElementById('calc').addEventListener('click', area) 

// Outoput
function area () {

  let A = +document.getElementById('abase').value;
  let B = +document.getElementById('bbase').value;
  let H = +document.getElementById('height').value;
 document.getElementById('number').innerHTML = output(A,B,H);
}
// Input
 function output (A, B, h) {
 return (A + B) / 2 * h
   
 }