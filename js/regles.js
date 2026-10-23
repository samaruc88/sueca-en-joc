export function resumir(seleccio = []){
    const categories =[];
    let minuts = 0;
    let punts = 0;
    for (const repte of seleccio){
        minuts += repte.minuts;
        punts += repte.punts;
        if (!categories.includes(repte.categoria)){
            categories.push(repte.categoria);
        }
    }
    return {quantitat:seleccio.length, minuts, punts, categories};
}

export function validarItinerari(seleccio =[]){
    const resum = resumir(seleccio);
    const error = [];
    if (resum.quantitat<3 || resum.quantitat>5) error.push("Tria entre 3 i 5 reptes");
    if (resum.categories.length<2) error.push("Tria almenys 2 categories.");
    if (resum.minuts>180) error.push("No pots superar els 180 minuts");
    const ids = seleccio.map(repte => repte.id); //explicar açò no ho entenc
    if (ids.some((id, index) => ids.indexOf(id) !== index)) {
        error.push("No pots repetir reptes.")
    }
    return error;
}

export function sumarPunts(...punts) {
    let total = 0;
    for (const punt of punts) {
        total += punt;
    }
    return total;
}
export function sumarPuntsTradicional() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}