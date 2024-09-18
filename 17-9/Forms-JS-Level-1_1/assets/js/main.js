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

// Variable "input" wird definiert und es 
// wird möglich eine Value einzugeben
// let doubled, zweite Variable die definiert wird
// was im doubled dargestellt wird bestimmst du mit parseInt (input)
// *2, du bestimmst was die zweite Variable anzeigen soll
// document.getElementbyID= Zugriff auf H1
// mit .innerText erlaubst du dieser Funktion 
// HTML zu schreiben
// =doubled= bestimmung output