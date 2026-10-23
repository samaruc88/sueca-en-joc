import {reptes} from "./dades.js";
import{resumir,validarItinerari} from "./regles.js";

console.table(reptes);
let minutsTotals = 0;
let repFoto = 0;
    for (const repte of reptes) {
        minutsTotals += repte.minuts;
        if (repte.categoria === "fotografia"){
            repFoto++;
        }

    }
//COMPROVACIÓ SEMANA1
/*
console.log("Minuts totals de tots els reptes",minutsTotals);
console.log("Reptes de fotografia",repFoto);

console.log("Tipus de 20 (número):", typeof 20);
console.log("Tipus de '20' (text):", typeof "20");
 */

//COMPROVACIÓ SEMANA2
// --- PROVA 1: Itinerari valid (r1, r2, r3) ---
const seleccio1 = [reptes[0], reptes[1], reptes[2]];
console.log("--- PROVA 1: r1, r2, r3 ---");
console.log("Resum:", resumir(seleccio1)); // Hauria de donar 75 minuts i 310 punts
console.log("Errors (hauria de ser buit []):", validarItinerari(seleccio1));

// --- PROVA 2: Selecció buida ---
console.log("--- PROVA 2: Selecció buida ---");
console.log("Errors:", validarItinerari([])); // Hauria de mostrar errors


// --- PROVA 3: Itinerari límit de 180 minuts (r2, r4, r5, r7, r8) ---
const seleccio2 = [reptes[1], reptes[3], reptes[4], reptes[6], reptes[7]];
console.log("--- PROVA 3: Itinerari de 5 reptes (180 min) ---");
console.log("Resum minuts:", resumir(seleccio2).minuts);
console.log("Errors:", validarItinerari(seleccio2)); // Hauria de ser vàlid ([])

// ---PROVA 4: Més de 180 min

const seleccio3= [reptes[1], reptes[3], reptes[4], reptes[6], reptes[7]];
reptes[3].minuts = 200;
console.log("--- PROVA 4: Error més de 180 min ---");
console.log("Resum minuts:", resumir(seleccio3).minuts);
console.log("Errors:", validarItinerari(seleccio3));

// --- MICROPRACTICA RESOLTA ---
import { sumarPunts } from "./regles.js";

console.log("--- MICROPRÀCTICA: sumarPunts ---");
console.log(sumarPunts(100, 120, 90)); // Hauria de retornar 310

import { sumarPuntsTradicional } from "./regles.js";

console.log("--- MICROPRÀCTICA: sumarPunts (tradicional) ---");
console.log(sumarPuntsTradicional(100, 120, 90)); // Hauria de retornar 310