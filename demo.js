
const MainHeading=document.getElementById('main-heading')
MainHeading.textContent='Fruit World'

const header=document.getElementById('header')
header.style.backgroundColor='green'
header.style.color='orange'
header.style.borderBottom='3px solid orange'

const basketHeading=document.getElementById('basket-heading')
basketHeading.style.color='green'

const thanks=document.getElementById('thanks')
thanks.innerHTML='<p>Please visit us again</p>'

const fruit=document.getElementsByClassName('fruit')
fruit[2].style.backgroundColor='yellow'
for(let i=0;i<fruit.length;i++){
  fruit[i].style.fontWeight='bold'
}
const fruittag=document.getElementsByTagName('li')
fruittag[4].style.color='blue'
for(let i=0; i<fruittag.length;i++){
  fruittag[i].style.fontStyle='italic'
}