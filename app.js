var salys = [
    {pavadinimas: "Vokietija", plotas: 357022, gyventojai: 83190556},
    {pavadinimas: "Prancūzija", plotas: 551695, gyventojai: 67874000},
    {pavadinimas: "Ispanija", plotas: 505990, gyventojai: 47450795},
    {pavadinimas: "Portugalija", plotas: 92212, gyventojai: 10344802},
    {pavadinimas: "Italija", plotas: 301230, gyventojai: 60317116},
    {pavadinimas: "Lietuva", plotas: 65300, gyventojai:2795680}
];
for(var x of salys)
    {reiksmes(x.pavadinimas, x.plotas, x.gyventojai)}

function reiksmes(pavadinimas, plotas, gyventojai){
var tenkantisPlotas = ((x.plotas / x.gyventojai) * Number(1000000));
var gyventojai2 = (x.gyventojai / Number(1000000));

console.log("Šalis: " + pavadinimas + ", joje gyvena " + gyventojai2.toFixed(2) + " mln. gyventojų.")
console.log("Valstybės plotas: " + plotas + " km2. " + "Plotas tenkantis vienam gyventojui: " + tenkantisPlotas.toFixed(2) + " m2")
console.log("==========================================")
}
