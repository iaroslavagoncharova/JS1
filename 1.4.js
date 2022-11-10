let kohde = document.querySelector('#kohde');
let name = prompt('Give your name: ');
let result = Math.floor(Math.random()*4+1);
kohde.innerHTML = name + ', you are ' + result
if (result == 1) {
    result = 'Gryffindor';
}
else if (result == 2) {
    result = 'Slytherin';
}
else if (result == 3) {
    result = 'Hufflepuff';
}
else {
    result = 'Ravenclaw';
}
kohde.innerHTML = name + ', you are ' + result

