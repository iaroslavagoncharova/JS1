let kohde = document.querySelector('#kohde')
let alku = parseInt(prompt('Anna alkuvuosi: '))
let loppu = parseInt(prompt('Anna loppuvuosi: '))
let html = '<ul>';
for (let y = alku; y <= loppu; y ++)
{
    if ((y % 4 == 0 && y % 100 != 0) || (y % 400 == 0)) {
        html += '<li>';
        html += y;
        html += '</li>';
    }
}
html += '</ul>'
kohde.innerHTML = html