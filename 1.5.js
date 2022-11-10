let kohde = document.querySelector('#kohde')
let y = parseInt(prompt('Anna vuosi: '))
console.log(y)
if ((y % 4 == 0 && y % 100 != 0) || (y % 400 == 0))
{
    kohde.innerHTML = 'Vuosi on karkausvuosi'
}
else {
    kohde.innerHTML = 'Vuosi ei ole karkausvuosi'
}