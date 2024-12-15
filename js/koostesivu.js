let tunnista = number(sessionStorage.getItem('tunnista-maa'));
let kaupungit = number(sessionStorage.getItem('kaupungit'));
let lippupeli = number(sessionStorage.getItem('lippupeli'));
let nahtavyydet = number(sessionStorage.getItem('score'));



let pisteet = tunnista + kaupungit + lippupeli + score;

let pointElem = document.getElementById('points');

pointElem.textContent = 'Yhteispisteet:' + pisteet;
