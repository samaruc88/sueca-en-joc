import {reptes} from "./dades.js";

console.table(reptes);
let minutsTotals = 0;
let repFoto = 0;
    for (const repte of reptes) {
        minutsTotals += repte.minuts;
        if (repte.categoria === "fotografia"){
            repFoto++;
        }

    }
console.log("Minuts totals de tots els reptes",minutsTotals);
console.log("Reptes de fotografia",repFoto);

console.log("Tipus de 20 (número):", typeof 20);
console.log("Tipus de '20' (text):", typeof "20");