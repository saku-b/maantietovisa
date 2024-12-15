let tunnista = number(sessionStorage.getItem('tunnista-maa'));
let kaupungit = number(sessionStorage.getItem('kaupungit'));
let lippupeli = number(sessionStorage.getItem('lippupeli'));
let nahtavyydet = number(sessionStorage.getItem('nahtavyydet'));



let pisteet = tunnista + kaupungit + lippupeli + nahtavyydet;

let pointElem = document.getElementById('points');

pointElem.textContent = 'Yhteispisteet:' + pisteet;
