# Registre de Comprovacions - Sueca en Joc

## Setmana 1: Dades i Consola

### 1. Carrega de Mòduls i Taula de Dades
- S'ha verificat que el mòdul `js/dades.js` s'importa correctament des de `js/main.js` mitjançant l'atribut `type="module"`.
- S'han representat els 8 reptes amb els seus atributs (`id`, `nom`, `categoria`, `image`, `descripcio`, `minuts`, `punts`, `dificultat`, `lat`, `lng`).
- `console.table(reptes)` mostra correctament la graella amb 8 files i identificadors únics.

### 2. Càlculs i Resultats
- **Suma de minuts totals:** 245 minuts.
- **Proves de categoria "fotografia":** 2 proves.

### 3. Verificació de Tipus (`typeof`)
- `typeof 20` -> `number`
- `typeof "20"` -> `string`

## Setmana 2: Les regles de l'itinerari i validacions

- **Fitxer creat**: `js/regles.js` amb les funcions `resumir(seleccio)` i `validarItinerari(seleccio)` separades del DOM.
- **Proves realitzades a la consola (`js/main.js`)**:
    - **Itinerari vàlid (`r1, r2, r3`)**: Retorna correctament el resum (75 minuts, 310 punts) i un array d'errors buit `[]`.
    - **Selecció buida (`[]`)**: Retorna els errors esperats de quantitat ("Tria entre 3 i 5 reptes") i categories ("Tria almenys 2 categories.").
    - **Límit de minuts**: Comprovat el límit màxim de 180 minuts amb un itinerari de 5 reptes vàlid.
    - **Pasar de minuts**: Fem la prova sense modificar el cataleg la prova amb més de 180 minuts retornant els errors (""No pots superar els 180 minuts")
- **Micropràctica (`sumarPunts`)**:
    - Implementada amb l'operador **Rest (`...punts`)** per acceptar un nombre indefinit de paràmetres de manera neta i generant un array real.
    - Comparada amb la funció tradicional utilitzant l'objecte intern **`arguments`**, concloent que `rest` és molt més explícit i permet usar mètodes moderns d'arrays.

## Setmana 3: Gestió del DOM i Renderitzat Dinàmic

Aquest document recull les comprovacions i proves realitzades durant la Setmana 3 del projecte "Sueca en Joc", centrades en la manipulació del DOM i la generació dinàmica del catàleg de reptes.

### 1. Renderitzat Dinàmic del Catàleg (`vista.js`)
  - **Creació de nodes**: Ús de `document.createElement("article")`, `h2`, `p`, `img`, i `button` per construir estructures HTML des de JavaScript.
  - **Assignació de contingut segur**: Utilització correctament de `.textContent` per injectar text pla i evitar vulnerabilitats XSS.
  - **Atributs personalitzats**: Implementació de `dataset.id` i `dataset.accio` per identificar elements i gestionar futures interaccions.
  - **Neteja i prevenció de duplicats**: Ús de `contenidor.replaceChildren()` al començament de la funció `pintarCataleg` per assegurar que el catàleg es buida abans de pintar de nou (comprovat executant la funció múltiples vegades sense acumular fitxes).
  - **Gestió de llistes buides**: Condicional comprovant `llista.length === 0` per mostrar un missatge alternatiu quan no hi ha resultats.

### 2. Gestió d'Actius i Rutes
  -  **Imatges**: Estandardització de la propietat `imatge` (en català) al fitxer `dades.js` i correcció de rutes relatives per carregar correctament els fitxers de la carpeta d'imatges sense errors `undefined`.

### 3. Verificacions pràctiques per la Consola del Navegador
 - **`children` vs `childNodes`**:
    - S'ha comprovat que `cataleg.children` retorna exclusivament els elements HTML fills (`HTMLCollection` de 8 articles), mentre que `childNodes` analitza tots els nodes. Al generar-se dinàmicament sense espais en blanc intermedis a l'HTML, ambdues col·leccions mostren 8 elements.
 - **Col·leccions dinàmiques vs estàtiques**:
    - Comparació entre `getElementsByTagName` (col·lecció viva/dinàmica que s'actualitza automàticament en afegir un nou element al DOM) i `querySelectorAll` (col·lecció estàtica o "fotografia fixa" del moment de la crida).
 - **Manipulació d'atributs (`setAttribute`, `getAttribute`, `removeAttribute`)**:
    - Proves realitzades amb un node temporal de tipus `div` per comprovar la creació, lectura i eliminació d'atributs de manera dinàmica.