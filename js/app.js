const form = document.getElementById('contact-form');

form.addEventListener("submit",(event) => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const informationRequest = document.getElementById("request-information")
    const otherRequest = document.getElementById("request-other")
    const checkbox = document.getElementById("checkbox")
    let hasError = false; 


    event.preventDefault()
    if (name == "" || name.length < 3){
        alert("Meno musi mat aspon 3 znaky.")
        hasError = true;
    }
    const specialEmailSigns = ["@", "."];
    if (!specialEmailSigns.every(sign => email.includes(sign))) {
        alert("Zadajte spravny email.");
        hasError = true;
    }
    const messageLength = message.trim().length
    if (messageLength == 0){
        alert("sprava nemoze byt prazdna")
        hasError = true;
    }

    if (!informationRequest.checked && !otherRequest.checked){
        alert("vyberte si jednu z moznosti, informacie alebo ine.")
        hasError = true;
    }
    if(!checkbox.checked){
        alert("pre pokracovanie musite suhlasit")
        hasError = true;
    }
    if (hasError === false){
        alert("Formular bol uspesne odoslany!")
        form.reset()
    }

});



//json fetching


