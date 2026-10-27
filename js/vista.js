export function pintarCataleg(llista, contenidor){
    contenidor.replaceChildren();
    // -> *replaceChildren()* s'utilitza ací per buidar tot el que hi havia
    // al contenidor abans de pintar de nou, evitant que es dupliquen les fitxes.
    if(llista.length ===0){
        contenidor.textContent ="No hi ha reptes amb aquest filtres.";
        // -> *textContent* injecta text pla de manera segura si no hi ha reptes.
        return;
    }
    for (const repte of llista){
        const article=document.createElement("article");
        // -> *createElement("article")* crea un element HTML nou a la memòria.
        article.dataset.id = repte.id;
        // -> *dataset.id* crea un atribut personalitzat (data-id="r1")
        // per identificar exactament quin repte és en el futur.
        const titol = document.createElement("h2");
        titol.textContent= repte.nom;

        const resum = document.createElement("p");
        resum.textContent = `${repte.minuts} minuts · ${repte.punts} punts`;

        const imatge = document.createElement("img");
        imatge.src = repte.imatge;
        imatge.alt = repte.nom;

        const descripcio= document.createElement("p");
        descripcio.textContent = repte.descripcio;
        // Juntem tots els elements dins de l'article
        article.append(titol,imatge,resum,descripcio);
        // -> *append()* ens permet afegir molts elements fills de cop a l'article separats per comes.

        for (const [accio,text] of [["detall","Detall"], ["afegir","Afegir"]]){
            const boto =document.createElement("button");
            boto.type="button";
            boto.dataset.accio = accio; //data-accio="detall" o "afegir"
            boto.textContent = text;
            article.append(boto); //agegim el botó a l'article
        }
        // 5. Afegir la fitxa completa al contenidor principal de la pàgina
        contenidor.append(article);
    }
}