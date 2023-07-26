
function coBa(){
  var pemainSatu = 0;
var pemainDua = 0;

pemainSatu = (Math.floor(Math.random()*6))+1;
pemainDua = (Math.floor(Math.random()*6))+1;

document.querySelector('.img1').setAttribute('src','./images/dice'+ pemainSatu +'.png')
document.querySelector('.img2').setAttribute('src','./images/dice'+ pemainDua +'.png')
if (pemainSatu === pemainDua){
  document.querySelector('h1').innerHTML = 'SERI!! 🏴‍☠️';
} else if (pemainSatu > pemainDua){
  document.querySelector('h1').innerHTML = '🚩 PEMAIN 1 MENANG!!';
} else {
  document.querySelector('h1').innerHTML = 'PEMAIN 2 MENANG!! 🚩';
}
}
