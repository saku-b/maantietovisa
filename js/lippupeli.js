// Hyödynnetty tutoriaalia https://www.jamesqquick.com/blog/build-a-javascript-memory-match-game/

// Liput https://flagcdn.com/

const countries = [
    { name: "Afganistan", flag: "https://flagcdn.com/w320/af.png" },
    { name: "Albania", flag: "https://flagcdn.com/w320/al.png" },
    { name: "Algeria", flag: "https://flagcdn.com/w320/dz.png" },
    { name: "Andorra", flag: "https://flagcdn.com/w320/ad.png" },
    { name: "Angola", flag: "https://flagcdn.com/w320/ao.png" },
    { name: "Antigua ja Barbuda", flag: "https://flagcdn.com/w320/ag.png" },
    { name: "Argentiina", flag: "https://flagcdn.com/w320/ar.png" },
    { name: "Armenia", flag: "https://flagcdn.com/w320/am.png" },
    { name: "Australia", flag: "https://flagcdn.com/w320/au.png" },
    { name: "Itävalta", flag: "https://flagcdn.com/w320/at.png" },
    { name: "Azerbaidžan", flag: "https://flagcdn.com/w320/az.png" },
    { name: "Bahama", flag: "https://flagcdn.com/w320/bs.png" },
    { name: "Bahrain", flag: "https://flagcdn.com/w320/bh.png" },
    { name: "Bangladesh", flag: "https://flagcdn.com/w320/bd.png" },
    { name: "Barbados", flag: "https://flagcdn.com/w320/bb.png" },
    { name: "Valko-Venäjä", flag: "https://flagcdn.com/w320/by.png" },
    { name: "Belgia", flag: "https://flagcdn.com/w320/be.png" },
    { name: "Belize", flag: "https://flagcdn.com/w320/bz.png" },
    { name: "Benin", flag: "https://flagcdn.com/w320/bj.png" },
    { name: "Bhutan", flag: "https://flagcdn.com/w320/bt.png" },
    { name: "Bolivia", flag: "https://flagcdn.com/w320/bo.png" },
    { name: "Bosnia ja Hertsegovina", flag: "https://flagcdn.com/w320/ba.png" },
    { name: "Botswana", flag: "https://flagcdn.com/w320/bw.png" },
    { name: "Brasilia", flag: "https://flagcdn.com/w320/br.png" },
    { name: "Brunei", flag: "https://flagcdn.com/w320/bn.png" },
    { name: "Bulgaria", flag: "https://flagcdn.com/w320/bg.png" },
    { name: "Burkina Faso", flag: "https://flagcdn.com/w320/bf.png" },
    { name: "Burundi", flag: "https://flagcdn.com/w320/bi.png" },
    { name: "Kap Verde", flag: "https://flagcdn.com/w320/cv.png" },
    { name: "Kambodža", flag: "https://flagcdn.com/w320/kh.png" },
    { name: "Kamerun", flag: "https://flagcdn.com/w320/cm.png" },
    { name: "Kanada", flag: "https://flagcdn.com/w320/ca.png" },
    { name: "Keski-Afrikan tasavalta", flag: "https://flagcdn.com/w320/cf.png" },
    { name: "Tšad", flag: "https://flagcdn.com/w320/td.png" },
    { name: "Chile", flag: "https://flagcdn.com/w320/cl.png" },
    { name: "Kiina", flag: "https://flagcdn.com/w320/cn.png" },
    { name: "Kolumbia", flag: "https://flagcdn.com/w320/co.png" },
    { name: "Komorit", flag: "https://flagcdn.com/w320/km.png" },
    { name: "Kongon demokraattinen tasavalta", flag: "https://flagcdn.com/w320/cd.png" },
    { name: "Kongon tasavalta", flag: "https://flagcdn.com/w320/cg.png" },
    { name: "Costa Rica", flag: "https://flagcdn.com/w320/cr.png" },
    { name: "Kroatia", flag: "https://flagcdn.com/w320/hr.png" },
    { name: "Kuuba", flag: "https://flagcdn.com/w320/cu.png" },
    { name: "Kypros", flag: "https://flagcdn.com/w320/cy.png" },
    { name: "Tšekki", flag: "https://flagcdn.com/w320/cz.png" },
    { name: "Tanska", flag: "https://flagcdn.com/w320/dk.png" },
    { name: "Djibouti", flag: "https://flagcdn.com/w320/dj.png" },
    { name: "Dominica", flag: "https://flagcdn.com/w320/dm.png" },
    { name: "Dominikaaninen tasavalta", flag: "https://flagcdn.com/w320/do.png" },
    { name: "Ecuador", flag: "https://flagcdn.com/w320/ec.png" },
    { name: "Egypti", flag: "https://flagcdn.com/w320/eg.png" },
    { name: "El Salvador", flag: "https://flagcdn.com/w320/sv.png" },
    { name: "Guinea", flag: "https://flagcdn.com/w320/gn.png" },
    { name: "Guyana", flag: "https://flagcdn.com/w320/gy.png" },
    { name: "Honduras", flag: "https://flagcdn.com/w320/hn.png" },
    { name: "Unkari", flag: "https://flagcdn.com/w320/hu.png" },
    { name: "Islanti", flag: "https://flagcdn.com/w320/is.png" },
    { name: "Intia", flag: "https://flagcdn.com/w320/in.png" },
    { name: "Indonesia", flag: "https://flagcdn.com/w320/id.png" },
    { name: "Iran", flag: "https://flagcdn.com/w320/ir.png" },
    { name: "Irlanti", flag: "https://flagcdn.com/w320/ie.png" },
    { name: "Israel", flag: "https://flagcdn.com/w320/il.png" },
    { name: "Italia", flag: "https://flagcdn.com/w320/it.png" },
    { name: "Jamaika", flag: "https://flagcdn.com/w320/jm.png" },
    { name: "Japani", flag: "https://flagcdn.com/w320/jp.png" },
    { name: "Jordan", flag: "https://flagcdn.com/w320/jo.png" },
    { name: "Kazakhstan", flag: "https://flagcdn.com/w320/kz.png" },
    { name: "Kenia", flag: "https://flagcdn.com/w320/ke.png" },
    { name: "Etelä-Korea", flag: "https://flagcdn.com/w320/kr.png" },
    { name: "Kuwait", flag: "https://flagcdn.com/w320/kw.png" },
    { name: "Kirgisia", flag: "https://flagcdn.com/w320/kg.png" },
    { name: "Laos", flag: "https://flagcdn.com/w320/la.png" },
    { name: "Latvia", flag: "https://flagcdn.com/w320/lv.png" },
    { name: "Libanon", flag: "https://flagcdn.com/w320/lb.png" },
    { name: "Lesotho", flag: "https://flagcdn.com/w320/ls.png" },
    { name: "Liberia", flag: "https://flagcdn.com/w320/lr.png" },
    { name: "Libya", flag: "https://flagcdn.com/w320/ly.png" },
    { name: "Liechtenstein", flag: "https://flagcdn.com/w320/li.png" },
    { name: "Liettua", flag: "https://flagcdn.com/w320/lt.png" },
    { name: "Luxemburg", flag: "https://flagcdn.com/w320/lu.png" },
    { name: "Madagaskar", flag: "https://flagcdn.com/w320/mg.png" },
    { name: "Malawi", flag: "https://flagcdn.com/w320/mw.png" },
    { name: "Malesia", flag: "https://flagcdn.com/w320/my.png" },
    { name: "Malediivit", flag: "https://flagcdn.com/w320/mv.png" },
    { name: "Mali", flag: "https://flagcdn.com/w320/ml.png" },
    { name: "Malta", flag: "https://flagcdn.com/w320/mt.png" },
    { name: "Marshallinsaaret", flag: "https://flagcdn.com/w320/mh.png" },
    { name: "Mauritania", flag: "https://flagcdn.com/w320/mr.png" },
    { name: "Mauritius", flag: "https://flagcdn.com/w320/mu.png" },
    { name: "Meksiko", flag: "https://flagcdn.com/w320/mx.png" },
    { name: "Mikronesia", flag: "https://flagcdn.com/w320/fm.png" },
    { name: "Moldova", flag: "https://flagcdn.com/w320/md.png" },
    { name: "Monaco", flag: "https://flagcdn.com/w320/mc.png" },
    { name: "Mongolia", flag: "https://flagcdn.com/w320/mn.png" },
    { name: "Montenegro", flag: "https://flagcdn.com/w320/me.png" },
    { name: "Marokko", flag: "https://flagcdn.com/w320/ma.png" },
    { name: "Mosambik", flag: "https://flagcdn.com/w320/mz.png" },
    { name: "Myanmar", flag: "https://flagcdn.com/w320/mm.png" },
    { name: "Namibia", flag: "https://flagcdn.com/w320/na.png" },
    { name: "Nauru", flag: "https://flagcdn.com/w320/nr.png" },
    { name: "Nepal", flag: "https://flagcdn.com/w320/np.png" },
    { name: "Alankomaat", flag: "https://flagcdn.com/w320/nl.png" },
    { name: "Uusi-Seelanti", flag: "https://flagcdn.com/w320/nz.png" },
    { name: "Nicaragua", flag: "https://flagcdn.com/w320/ni.png" },
    { name: "Niger", flag: "https://flagcdn.com/w320/ne.png" },
    { name: "Nigeria", flag: "https://flagcdn.com/w320/ng.png" },
    { name: "Pohjois-Makedonia", flag: "https://flagcdn.com/w320/mk.png" },
    { name: "Norja", flag: "https://flagcdn.com/w320/no.png" },
    { name: "Oman", flag: "https://flagcdn.com/w320/om.png" },
    { name: "Pakistan", flag: "https://flagcdn.com/w320/pk.png" },
    { name: "Palau", flag: "https://flagcdn.com/w320/pw.png" },
    { name: "Palestiina", flag: "https://flagcdn.com/w320/ps.png" },
    { name: "Panama", flag: "https://flagcdn.com/w320/pa.png" },
    { name: "Papua-Uusi-Guinea", flag: "https://flagcdn.com/w320/pg.png" },
    { name: "Paraguay", flag: "https://flagcdn.com/w320/py.png" },
    { name: "Peru", flag: "https://flagcdn.com/w320/pe.png" },
    { name: "Filippiinit", flag: "https://flagcdn.com/w320/ph.png" },
    { name: "Puola", flag: "https://flagcdn.com/w320/pl.png" },
    { name: "Portugali", flag: "https://flagcdn.com/w320/pt.png" },
    { name: "Qatar", flag: "https://flagcdn.com/w320/qa.png" },
    { name: "Romania", flag: "https://flagcdn.com/w320/ro.png" },
    { name: "Venäjä", flag: "https://flagcdn.com/w320/ru.png" },
    { name: "Ruanda", flag: "https://flagcdn.com/w320/rw.png" },
    { name: "Saint Kitts ja Nevis", flag: "https://flagcdn.com/w320/kn.png" },
    { name: "Saint Lucia", flag: "https://flagcdn.com/w320/lc.png" },
    { name: "Saint Vincent ja Grenadiinit", flag: "https://flagcdn.com/w320/vc.png" },
    { name: "Samoa", flag: "https://flagcdn.com/w320/ws.png" },
    { name: "San Marino", flag: "https://flagcdn.com/w320/sm.png" },
    { name: "Sao Tome ja Principe", flag: "https://flagcdn.com/w320/st.png" },
    { name: "Saudi-Arabia", flag: "https://flagcdn.com/w320/sa.png" },
    { name: "Senegal", flag: "https://flagcdn.com/w320/sn.png" },
    { name: "Serbia", flag: "https://flagcdn.com/w320/rs.png" },
    { name: "Seychellit", flag: "https://flagcdn.com/w320/sc.png" },
    { name: "Sierra Leone", flag: "https://flagcdn.com/w320/sl.png" },
    { name: "Singapore", flag: "https://flagcdn.com/w320/sg.png" },
    { name: "Slovakia", flag: "https://flagcdn.com/w320/sk.png" },
    { name: "Slovenia", flag: "https://flagcdn.com/w320/si.png" },
    { name: "Salomonsaaret", flag: "https://flagcdn.com/w320/sb.png" },
    { name: "Somalia", flag: "https://flagcdn.com/w320/so.png" },
    { name: "Etelä-Afrikka", flag: "https://flagcdn.com/w320/za.png" },
    { name: "Etelä-Sudan", flag: "https://flagcdn.com/w320/ss.png" },
    { name: "Espanja", flag: "https://flagcdn.com/w320/es.png" },
    { name: "Sri Lanka", flag: "https://flagcdn.com/w320/lk.png" },
    { name: "Sudan", flag: "https://flagcdn.com/w320/sd.png" },
    { name: "Suriname", flag: "https://flagcdn.com/w320/sr.png" },
    { name: "Ruotsi", flag: "https://flagcdn.com/w320/se.png" },
    { name: "Sveitsi", flag: "https://flagcdn.com/w320/ch.png" },
    { name: "Syyria", flag: "https://flagcdn.com/w320/sy.png" },
    { name: "Tadžikistan", flag: "https://flagcdn.com/w320/tj.png" },
    { name: "Tansania", flag: "https://flagcdn.com/w320/tz.png" },
    { name: "Thaimaa", flag: "https://flagcdn.com/w320/th.png" },
    { name: "Itä-Timor", flag: "https://flagcdn.com/w320/tl.png" },
    { name: "Togo", flag: "https://flagcdn.com/w320/tg.png" },
    { name: "Tonga", flag: "https://flagcdn.com/w320/to.png" },
    { name: "Trinidad ja Tobago", flag: "https://flagcdn.com/w320/tt.png" },
    { name: "Tunisia", flag: "https://flagcdn.com/w320/tn.png" },
    { name: "Turkki", flag: "https://flagcdn.com/w320/tr.png" },
    { name: "Turkmenistan", flag: "https://flagcdn.com/w320/tm.png" },
    { name: "Tuvalu", flag: "https://flagcdn.com/w320/tv.png" },
    { name: "Uganda", flag: "https://flagcdn.com/w320/ug.png" },
    { name: "Ukraina", flag: "https://flagcdn.com/w320/ua.png" },
    { name: "Arabiemiirikunnat", flag: "https://flagcdn.com/w320/ae.png" },
    { name: "Yhdistynyt kuningaskunta", flag: "https://flagcdn.com/w320/gb.png" },
    { name: "Yhdysvallat", flag: "https://flagcdn.com/w320/us.png" },
    { name: "Uruguay", flag: "https://flagcdn.com/w320/uy.png" },
    { name: "Uzbekistan", flag: "https://flagcdn.com/w320/uz.png" },
    { name: "Vanuatu", flag: "https://flagcdn.com/w320/vu.png" },
    { name: "Vatikaani", flag: "https://flagcdn.com/w320/va.png" },
    { name: "Venezuela", flag: "https://flagcdn.com/w320/ve.png" },
    { name: "Vietnam", flag: "https://flagcdn.com/w320/vn.png" },
    { name: "Jemen", flag: "https://flagcdn.com/w320/ye.png" },
    { name: "Sambia", flag: "https://flagcdn.com/w320/zm.png" },
    { name: "Zimbabwe", flag: "https://flagcdn.com/w320/zw.png" }
];

let firstPick = null;
let isPaused = true;
let matches = 0;

const loadGame = () => {
    matches = 0;
    document.getElementById("score").textContent = `Pisteet: ${matches}/8`;
    const shuffled = [...countries]
        .sort(() => Math.random() - 0.5)
        .slice(0, 8);

    const gameCards = [...shuffled, ...shuffled]
        .sort(() => Math.random() - 0.5)
        .map(country => `
            <div class="card" onclick="clickCard(event)" data-countryname="${country.name}">
              <div class="front"></div>
              <div class="back rotated">
                <img src="${country.flag}" alt="${country.name}" />
                <h2>${country.name}</h2>
              </div>
            </div>
        `).join('');

    document.getElementById("game").innerHTML = gameCards;
    isPaused = false;
};

// Handle clicks, check if is card rotated or is game paused, rotate card
// If second card clicked, check for match, if match ++ matches, update score display and check if all matched
// If not match, rotate cards
const clickCard = (e) => {
    const card = e.currentTarget;
    const front = card.querySelector(".front");
    const back = card.querySelector(".back");

    if (front.classList.contains("rotated") || isPaused) return;

    isPaused = true;
    [front, back].forEach(el => el.classList.toggle('rotated'));

    if (!firstPick) {
        firstPick = card;
        isPaused = false;
        return;
    }

    if (firstPick.dataset.countryname === card.dataset.countryname) {
        matches++;
        sessionStorage.setItem('lippupeli', matches)
        document.getElementById("score").textContent = `Pisteet: ${matches}/8`;
        if (matches === 8) alert("Onnittelut! Voitit pelin!");
        firstPick = null;
        isPaused = false;
    } else {
        setTimeout(() => {
            const [firstFront, firstBack] = [
                firstPick.querySelector(".front"),
                firstPick.querySelector(".back")
            ];
            [front, back, firstFront, firstBack].forEach(el => el.classList.toggle('rotated'));
            firstPick = null;
            isPaused = false;
        }, 500);
    }
};

loadGame();