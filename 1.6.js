let kohde = document.querySelector('#kohde')
answer = confirm('Should I calculate the square root?')
if (answer == true) {
    answer = prompt('Give the number: ');
    if (answer >= 0) {
        result = Math.sqrt(answer);
        kohde.innerHTML = 'The square root is ' + result;
    }
    else {
        result = 'The square root of a negative number is not defined'
        kohde.innerHTML = result
    }
}
else {
    result = 'The square root is not calculated'
    kohde.innerHTML = result
}
