"use strict"
    const introText = document.querySelector('.History h2, .projet_Texte');
    const text = introText.textContent;
    introText.textContent = "";
    let i = 0;

    function typeWriter() {

       
       
        if (i < text.length) {
            introText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    /*
       else
        {
            setTimeout(() =>
            {
                i = 0;
            introText.textContent = "";
            setTimeout(typeWriter, 500);
            },1000);
            

        }
     */
       
    }
    typeWriter()
   
// Formulaire de contact

function envoyer()
{
    if(form.nom.value == "" || form.prenom.value == "" || form.email.value == "" || form.entreprise.value == "")
    alert("Veuillez renseigner les informations des champs vides!")


        if(form.email.value.search('@') < 0 || form.email.value.search('.') < 0)
        alert("Adresse email invalide!")
}





    