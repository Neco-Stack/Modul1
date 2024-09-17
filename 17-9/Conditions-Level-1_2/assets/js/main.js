// function weather(){
//     let grad = parseInt(document.querySelector("grad").value);
//     let response = document.querySelector("p");

//     if (grad >= 8){
//         response.innerText = "Das Wetter ist SUPER"}
//     else if (grad >= 6){
//         response.innerText = "Das Wetter ist GUT"}
//     else if (grad >= 3){
//         response.innerText = "Das Wetter ist SCHLECHT"
//     }
//     }
function weather() {
    const degree = parseInt(document.querySelector("#degree").value);
    const response = document.querySelector("p");

    if(degree >= 8) {
        response.innerText = "Die Wetter Qualität ist: super"
    } else if (degree >= 6) {
        response.innerText = "Die Wetter Qualität ist: gut"
    } else if (degree >= 3) {
        response.innerText = "Die Wetter Qualität ist: ok"
    } else {
        response.innerText = "Die Wetter Qualität ist: schlecht"
    }
}





// funktion weather erstellt
// variable grad erstellt mit .value 
// variable response definiert und als p getagged
// 