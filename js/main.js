document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('red').onclick = partyRed
const bodyStyle = document.querySelector('body')

function partyPurple() {
  bodyStyle.style.backgroundColor = 'rgba(241,63,247,1)'
  bodyStyle.style.color = 'green'
}

function partyGreen() {
  bodyStyle.style.backgroundColor = 'rgba(0,253,81,1)'
  bodyStyle.style.color = 'yellow'
}

function partyBlue() {
  bodyStyle.style.backgroundColor = 'rgba(0,254,255)'
  bodyStyle.style.color = 'orange'
}
function partyRed()  {
  bodyStyle.style.backgroundColor = 'rgba(255,0,0)'
  bodyStyle.style.color = 'blue'
}
