// function doubleCount (){
//     let zahlinput = document.getElementById ("doublebtn");
//     let double = parseInt(zahlInput.value) * 2;
//     document.write = double;
// }
function doubleNumber() {
    let input = document.getElementById('zahlinput').value;

    let doubled = parseInt(input) * 2;

    document.getElementById('output').innerText = doubled;
}

