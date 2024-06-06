do {
    var taille = Number(prompt("Donne moi ta taille en cm"));
    var poid = Number(prompt("Donne moi ton poids en kg "));
} while (isNaN(poid) || (isNaN(taille) && poid == "") || taille == "");

function imc(poid, taille) {
    let resultat = poid / Math.pow(taille / 100, 2);
    return resultat;
}
alert(imc(poid, taille));
