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