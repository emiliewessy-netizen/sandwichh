let sandwich = [];

function ajouter(ingredient) {
    sandwich.push(ingredient);
    console.log(sandwich);
}

function servir() {
    let commande = ["pain", "fromage", "jambon"];

    if (JSON.stringify(sandwich) === JSON.stringify(commande)) {
        document.getElementById("resultat").innerText = "✅ Bravo !";
    } else {
        document.getElementById("resultat").innerText = "❌ Raté !";
    }

    sandwich = [];
}

