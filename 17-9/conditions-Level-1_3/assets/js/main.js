function shischa(){
    event.preventDefault(); 
    const ageinput = parseInt(document.querySelector("#ageinput").value)
    const antwort = document.getElementById("antwort");

    if (age >= 18){
        result.textContent = "Ja du darfst rauchen."; 
    } else if (age <18 && age >=0) {
        result.textContent = "Nein auf KEINEN FALL"
    };
}