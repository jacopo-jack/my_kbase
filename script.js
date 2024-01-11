// qui la funzione per far comparire il menu dopo tot secondi
// Modulo per la gestione del timeout
const allert= function allert(){
    alert("La pagina si aprirà tra 10 secondi.Un po' di pazienza...");
    alert("The page will open in 10 seconds. A little patience...");
    alert("La página se abrirá en 10 segundos. Un poco de paciencia...");
}
var timeoutModule = (function() {
    // Funzione per mostrare il corpo dopo 10 secondi di inattività
    function mostraDopoInattivita() {
        // Mostra il corpo cambiando lo stile
        document.body.style.display = 'block';
    }

    // Imposta il timeout per chiamare la funzione dopo 10 secondi di inattività
    var timeoutID = setTimeout(mostraDopoInattivita, 10000);

    // Aggiungi un ascoltatore di evento per ripristinare il timeout quando l'utente interagisce con la pagina
    document.addEventListener('mousemove', function() {
        // Resetta il timeout
        clearTimeout(timeoutID);
        // Imposta nuovamente il timeout
        timeoutID = setTimeout(mostraDopoInattivita, 10000);
    });

    return {
        // Esponi la funzione mostraDopoInattivita se necessario all'esterno del modulo
        mostraDopoInattivita: mostraDopoInattivita
    };
})();

// Modulo per la gestione del click sul bottone
var bottoneModule = (function() {
    // Aggiungi un ascoltatore di evento al bottone
    document.getElementById('bottoneMostra').addEventListener('click', function() {
        // Chiama la funzione mostraDopoInattivita del modulo timeoutModule
        timeoutModule.mostraDopoInattivita();
    });
})();

function show_page(){
    const website= document.getElementById("my_page");
    const navbar= document.getElementById("english_site")
    const italian_button=document.getElementById("button_area");
    website.style.display="block";
    navbar.style.display="none";
    italian_button.style.display="none";
   }
//CTRL+C CTRL+V per ogni lingua del sito
   function my_site(){
   const wp= document.getElementById("my-wp-site");
   wp.style.display="block";
   const italian_button=document.getElementById("italian");
   italian_button.style.display="none";
}
function My_kbase(){
    const body= document.getElementById("my_kbase");
    body.style.display="block";
}

// corpo principale della versione inglese  english version main body
function english_version(){
    const italian_button= document.getElementById("italian");
    italian_button.style.display="none";
    const spanish_button= document.getElementById("spanish");
    spanish_button.style.display="none";
    const english_button= document.getElementById("english");
    english_button.style.display="none";
    const show_eglish_page= document.getElementById("english_site");
    show_eglish_page.style.display="block";
    const english_html= document.getElementById("english_site");
    english_html.style.display="block";
    const english_html_header= document.getElementById("my_english_page");
    english_html_header.style.display="block";

}

function my_english_site(){
   const wp= document.getElementById("my-wp-site_ev");
   wp.style.display="block";
   const italian_button=document.getElementById("italian");
   italian_button.style.display="none";
    
 }
 function my_english_kbase(){
    const body= document.getElementById("my_kbase_ev");
    body.style.display="block";
}
function back_home_ev(){
      const body=document.getElementById("my_kbase_ev");
      const home = document.getElementById("guides_ev");
      const wp= document.getElementById("my-wp-site_ev");
      body.style.display="none";
      home.style.display="none";
      wp.style.display="none";
}
function my_english_guides(){
      const english_guides_div = document.getElementById("guides_ev");
      english_guides_div.style.display = "block";   
}

function spanish_version(){
    const italian_button= document.getElementById("italian");
    italian_button.style.display="none";
    const english_button= document.getElementById("english");
    english_button.style.display="none";
    const spanish_button= document.getElementById("spanish");
    spanish_button.style.display="block";

} 

 function My_guide() {
        const guidediv = document.getElementById("guide");

        // Richiesta fetch corretta
        fetch('https://jacopo-jack.github.io/guide/')
            .then(response => response.text())
            .then(html => {
                guidediv.innerHTML = html;
                guidediv.style.display = "block";
            })
            .catch(error => {
                console.error('Errore nel fetch del file Markdown:', error);
            });
    }
    function back_home(){
      const body=document.getElementById("my_kbase");
      const home = document.getElementById("guide");
      const wp= document.getElementById("my-wp-site");
      body.style.display="none";
      home.style.display="none";
      wp.style.display="none";
    
    }

