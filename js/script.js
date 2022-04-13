function buttonClicked(){
  // varibles for height, base, and a, from user's input 
  let base = parseFloat(document.getElementById("base").value)
  let height = parseFloat(document.getElementById("height").value)
  let sideA = parseFloat(document.getElementById("side-a").value)

  // calculates the volume of a right angle triangular pyramid
  let volume = (1 / 6 * base * height * sideA)

  // displays the answer
  document.getElementById('answer').innerHTML = "The volume is: " + volume
}