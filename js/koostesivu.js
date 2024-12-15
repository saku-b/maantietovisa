const displayTotalScore = () => {

    const tunnista = parseInt(sessionStorage.getItem('tunnista-maa')) || 0;
    const kaupungit = parseInt(sessionStorage.getItem('kaupungit')) || 0;
    const lippupeli = parseInt(sessionStorage.getItem('lippupeli')) || 0;
    const nahtavyydet = parseInt(sessionStorage.getItem('nahtavyydet')) || 0;

    const pisteet = tunnista + kaupungit + lippupeli + nahtavyydet;

    document.getElementById("points").textContent = `Yhteispisteet: ${pisteet}`;
}

displayTotalScore();
