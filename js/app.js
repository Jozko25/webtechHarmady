const form = document.getElementById('contact-form');

form.addEventListener("submit",(event) => {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim;
    const informationRequest = document.getElementById("request-information")
    const otherRequest = document.getElementById("request-other")
    const checkbox = document.getElementById("checkbox")
    let hasError = false; 
z

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
        alert("vyberte si jednu z moznosti typu poziadavky, informacie alebo ine.")
        hasError = true;
    }
    if(!checkbox.checked){
        alert("pre pokracovanie musite suhlasit s obchodnymi podmienkami")
        hasError = true;
    }
    if (hasError === false){
        alert("Formular bol uspesne odoslany!")
        form.reset()
    }

});


