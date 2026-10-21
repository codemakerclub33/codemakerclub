# LECȚIA 7 — Pagina de contact cu verificare
**Modulul 5 · Site complet: HTML + CSS + JavaScript · 2 ore**  
**Code Maker Club · Web Builder**

> Azi facem pagina `contact.html`: un formular în care vizitatorul scrie o poreclă, alege un animal și lasă un mesaj. JavaScript **verifică** ce a scris și arată mesaje clare dacă ceva nu este bine. Mai mult: formularul **oprește datele personale** (adresă de email sau număr de telefon). Formularul nu trimite nimic nicăieri: este un exercițiu.  
> Proiect: **„Formularul meu”** · folder: `Prenume_Nume_W5` (continuăm în același folder)

---

## Obiectiv
La finalul orei, formularul verifică cele 3 câmpuri, arată erori în dreptul fiecărui câmp, numără literele din mesaj și, dacă totul este bine, arată un mesaj de mulțumire și se golește.  
**Minim:** un formular cu 3 câmpuri, cu `label` pentru fiecare, și o verificare în JavaScript care arată un mesaj dacă porecla sau mesajul sunt prea scurte.  
**Ținta orei (Complet):** + `<select>` verificat, mesaje de eroare sub fiecare câmp, câmp colorat cu `.invalid`, numărător de caractere, oprirea emailului și a numerelor de telefon, `preventDefault`, `reset`, mesaj de mulțumire cu `textContent`.

## De ce contează
Un formular care spune clar ce este greșit nu enervează oamenii. Iar un formular pentru copii **nu trebuie să adune date personale**: cu cât știm mai puține lucruri despre cei care scriu, cu atât sunt mai în siguranță.

---

## Siguranță înainte de toate
- Formularul **nu trimite nimic**: nu are `action`, iar JavaScript oprește trimiterea (`preventDefault`). Ce scrie omul rămâne în browser și dispare.  
- Cerem doar o **poreclă** (nu numele real), un animal și un mesaj. **Nu cerem** nume, adresă, telefon, școală sau email.  
- Programul **respinge** mesajele care conțin `@` sau un șir de 6 cifre la rând.  
- Textul scris de vizitator se afișează cu `textContent`, **niciodată** cu `innerHTML`.  
- Un site real care primește mesaje are nevoie de un server, de acordul părinților și de reguli de protecție a datelor. De aceea noi **nu trimitem nimic**.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare: `input`, `label`, evenimente |
| 10–35 | HTML-ul formularului (**Exemplul 1**) |
| 35–50 | CSS-ul formularului (**Exemplul 2**) |
| 50–70 | Numărătorul de caractere (**Exemplul 3**) |
| 70–100 | Verificarea la trimitere (**Exemplul 4**) |
| 100–115 | Testele (**Exemplul 5**) |
| 115–120 | Recap și temă |

---

## 1. HTML-ul formularului

### Exemplul 1 — Câmpuri cu etichetă

În `contact.html`, în `<main>`, pune:

```html
<section class="container sectiune">
  <h1>Scrie un mesaj clubului</h1>
  <p>Spune clubului care este animalul tău preferat. <strong>Nu scrie date personale</strong> (nume complet, adresă, telefon, email).</p>

  <form class="formular" id="formular" novalidate>
    <div class="camp">
      <label for="porecla">Porecla ta (nu numele real)</label>
      <input type="text" id="porecla" name="porecla" maxlength="20" autocomplete="off">
      <p class="eroare" id="eroarePorecla" aria-live="polite"></p>
    </div>

    <div class="camp">
      <label for="animal">Animalul preferat</label>
      <select id="animal" name="animal">
        <option value="">Alege un animal</option>
        <option value="pisica">Pisica</option>
        <option value="catelul">Cățelul</option>
        <option value="delfinul">Delfinul</option>
        <option value="papagalul">Papagalul</option>
        <option value="calul">Calul</option>
        <option value="broasca">Broasca</option>
      </select>
      <p class="eroare" id="eroareAnimal" aria-live="polite"></p>
    </div>

    <div class="camp">
      <label for="mesaj">Mesajul tău</label>
      <textarea id="mesaj" name="mesaj" rows="4" maxlength="300"></textarea>
      <p class="numarator" id="numarator">0 / 300</p>
      <p class="eroare" id="eroareMesaj" aria-live="polite"></p>
    </div>

    <button class="buton-cta" type="submit">Trimite mesajul</button>
    <p class="rezultat" id="rezultat" role="status"></p>
  </form>
</section>
```

Ce este important:
- `<label for="porecla">` legat de `<input id="porecla">`: apăsarea pe text pune cursorul în câmp, iar cititorul de ecran spune ce se cere. Fiecare câmp are o etichetă.  
- `novalidate`: oprește verificarea standard a browserului, ca să facem noi verificarea, cu mesajele noastre.  
- `maxlength`: limitează lungimea.  
- `<option value="">Alege un animal</option>`: prima opțiune are valoarea **goală**, ca să putem vedea dacă omul nu a ales nimic.  
- `aria-live="polite"` pe paragraful de eroare: cititorul de ecran anunță mesajul când apare. `role="status"` face la fel pentru mesajul de mulțumire.  
- Paragrafele goale (`eroare`, `rezultat`) vor fi completate de JavaScript.

Pune animalele **tale** în listă (subiectul tău).

**Încearcă tu (20 min)**  
- [ ] Scrie formularul cu opțiunile subiectului tău  
- [ ] Apasă pe textul „Porecla ta”: cursorul intră în câmp?  
- [ ] Apasă „Trimite mesajul”: pagina se reîncarcă? (încă nu am oprit trimiterea, e normal)

---

## 2. CSS-ul formularului

### Exemplul 2 — Câmpuri și erori

În `stil.css`:

```css
/* ===== Formular ===== */
.formular {
  max-width: 500px;
}

.camp {
  margin-bottom: 1rem;
}

.camp label {
  display: block;
  margin-bottom: 4px;
  font-weight: bold;
}

.camp input,
.camp select,
.camp textarea {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  font-family: inherit;
  color: var(--text);
  background-color: var(--card);
  border: 2px solid var(--linie);
  border-radius: 8px;
}

.camp input.invalid,
.camp select.invalid,
.camp textarea.invalid {
  border-color: var(--accent);
}

.eroare {
  min-height: 1.4em;
  margin: 4px 0 0;
  color: var(--accent);
  font-weight: bold;
}

.numarator {
  margin: 4px 0 0;
  font-size: 0.9rem;
  text-align: right;
}

.rezultat {
  margin-top: 1rem;
  font-weight: bold;
}
```

- `font-family: inherit` face câmpurile să folosească același font ca restul paginii.  
- `.invalid` este o clasă pe care o va adăuga JavaScript la câmpul greșit: chenar de culoarea accentului.  
- `min-height: 1.4em` pe `.eroare`: păstrează loc pentru mesaj, ca formularul să nu „sară” când apare o eroare.  
- Nu ne bazăm doar pe culoare: eroarea are și **text** care spune ce este greșit.

**Încearcă tu (10 min)**  
- [ ] Adaugă regulile  
- [ ] Verifică: câmpurile sunt late, cu chenar rotunjit  
- [ ] Adaugă temporar clasa `invalid` unui câmp în HTML ca să vezi culoarea, apoi șterge clasa

---

## 3. Numărătorul de caractere

### Exemplul 3 — Evenimentul `input`

În `script.js`, **la sfârșit**, adaugă începutul codului pentru formular:

```javascript
// ===== Formularul de contact =====
const formular = document.querySelector("#formular");

function arataEroare(camp, elementEroare, mesaj) {
  elementEroare.textContent = mesaj;
  camp.classList.toggle("invalid", mesaj !== "");
}

if (formular !== null) {
  const porecla = document.querySelector("#porecla");
  const animal = document.querySelector("#animal");
  const mesaj = document.querySelector("#mesaj");
  const numarator = document.querySelector("#numarator");
  const rezultat = document.querySelector("#rezultat");

  const eroarePorecla = document.querySelector("#eroarePorecla");
  const eroareAnimal = document.querySelector("#eroareAnimal");
  const eroareMesaj = document.querySelector("#eroareMesaj");

  mesaj.addEventListener("input", function () {
    numarator.textContent = `${mesaj.value.length} / 300`;
  });

  // Aici vine funcția din Exemplul 4 și evenimentul "submit"
}
```

- `arataEroare(camp, elementEroare, mesaj)` este o funcție care **scrie mesajul** sub câmp și **adaugă sau scoate** clasa `invalid`. Dacă `mesaj` este un text gol (`""`), eroarea dispare (`mesaj !== ""` este `false`, deci clasa se scoate). O scriem **o singură dată** și o folosim de mai multe ori.  
- Evenimentul `input` se declanșează la **fiecare literă** scrisă.  
- `` `${mesaj.value.length} / 300` ``: un text cu o valoare în mijloc (între caractere backtick, ca în lecțiile despre text).  
- Tot codul este în `if (formular !== null)`: pe celelalte pagini nu există formular.

**Încearcă tu (15 min)**  
- [ ] Scrie codul și scrie în câmpul de mesaj: se schimbă numărul?  
- [ ] Verifică în consolă: nicio eroare roșie, nici pe celelalte pagini

---

## 4. Verificarea la trimitere

### Exemplul 4 — Eveniment `submit` și reguli

În locul comentariului „Aici vine funcția...”, scrie:

```javascript
  function arePosibileDatePersonale(text) {
    return text.includes("@") || /\d{6,}/.test(text);
  }

  formular.addEventListener("submit", function (eveniment) {
    eveniment.preventDefault();
    rezultat.textContent = "";

    const textPorecla = porecla.value.trim();
    const textMesaj = mesaj.value.trim();
    let erori = 0;

    // Porecla
    if (textPorecla.length < 3) {
      arataEroare(porecla, eroarePorecla, "Porecla trebuie să aibă cel puțin 3 caractere.");
      erori = erori + 1;
    } else if (arePosibileDatePersonale(textPorecla)) {
      arataEroare(porecla, eroarePorecla, "Nu scrie email sau număr de telefon.");
      erori = erori + 1;
    } else {
      arataEroare(porecla, eroarePorecla, "");
    }

    // Animalul
    if (animal.value === "") {
      arataEroare(animal, eroareAnimal, "Alege un animal din listă.");
      erori = erori + 1;
    } else {
      arataEroare(animal, eroareAnimal, "");
    }

    // Mesajul
    if (textMesaj.length < 10) {
      arataEroare(mesaj, eroareMesaj, "Mesajul trebuie să aibă cel puțin 10 caractere.");
      erori = erori + 1;
    } else if (arePosibileDatePersonale(textMesaj)) {
      arataEroare(mesaj, eroareMesaj, "Nu scrie email sau număr de telefon în mesaj.");
      erori = erori + 1;
    } else {
      arataEroare(mesaj, eroareMesaj, "");
    }

    if (erori === 0) {
      rezultat.textContent = `Mulțumim, ${textPorecla}! Mesajul tău a fost verificat. (Este un exercițiu: nu se trimite nimic nicăieri.)`;
      formular.reset();
      numarator.textContent = "0 / 300";
    }
  });
```

Pe bucăți:
1. `submit` este evenimentul de la apăsarea butonului „Trimite” (sau Enter într-un câmp). `eveniment.preventDefault()` **oprește** trimiterea și reîncărcarea paginii.  
2. `.trim()` taie spațiile de la început și de la sfârșit: „   ” (doar spații) nu mai trece drept text.  
3. `let erori = 0;` este un **contor**: la fiecare problemă găsită, îl mărim cu 1. La final, `erori === 0` înseamnă că totul este bine.  
4. `text.includes("@")` este `true` dacă textul conține semnul `@` (adresă de email).  
5. `/\d{6,}/.test(text)`: o **expresie regulată**, un fel de „model de căutat”. `\d` înseamnă o cifră, `{6,}` înseamnă „de cel puțin 6 ori la rând”. Deci `.test(text)` este `true` dacă în text sunt 6 cifre una după alta (ca într-un număr de telefon). Nu trebuie să știi expresii regulate: copiază această linie.  
6. `||` înseamnă „sau”: este date personale dacă are `@` **sau** are 6 cifre la rând.  
7. Ordinea contează: întâi verificăm dacă este prea scurt, apoi dacă are date personale.  
8. Dacă totul este bine: afișăm mulțumirea cu `textContent` (porecla este afișată ca text, nu ca HTML), golim formularul cu `reset()` și punem numărătorul la `0 / 300`.

**Încearcă tu (30 min)**  
- [ ] Scrie codul  
- [ ] Apasă „Trimite” cu câmpurile goale: apar 3 erori, cu chenar roșu?  
- [ ] Scrie `ana@x.ro` în mesaj, apoi `Sunt la 0712345678`: apare mesajul de siguranță?  
- [ ] Completează totul corect: apare mulțumirea, iar formularul se golește?  
- [ ] Dacă nu merge, citește mesajul roșu din consolă

---

## 5. Testele

### Exemplul 5 — Lista de verificare a formularului

```text
□ Fiecare câmp are label legat prin for și id
□ Formularul nu se trimite și pagina nu se reîncarcă
□ Câmpuri goale → 3 mesaje de eroare, în dreptul câmpurilor
□ Porecla de 2 litere → eroare; de 3 litere → bine
□ „Alege un animal” rămas neales → eroare
□ Mesaj cu @ sau 6 cifre la rând → mesaj de siguranță
□ Un mesaj corect → mulțumire și formular golit
□ Numărătorul arată 0 / 300 după golire
□ Eroarea dispare când este corectată și se apasă din nou „Trimite”
□ Cu tastatura: Tab trece prin câmpuri, Enter trimite
□ Nu apar erori în consolă, nici pe celelalte pagini
```

**Gata când:**  
- [ ] Toate punctele sunt bifate  
- [ ] Ai făcut o copie de siguranță a folderului

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Formularul meu” (obligatoriu)
`contact.html` are formularul din lecție, adaptat subiectului tău, și toate punctele din Exemplul 5 sunt bifate.

### Exercițiul B — Îl faci al tău
Schimbă: lista de opțiuni, numărul minim de litere pentru mesaj (de exemplu 15), textele mesajelor de eroare și mesajul de mulțumire. Notează ce ai schimbat.

### Exercițiul C — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```javascript
formular.addEventListener("click", function (eveniment) {
  const textMesaj = mesaj.value.trim;
  if (textMesaj.length < 10) {
    eroareMesaj.innerHTML = "Prea scurt: " + textMesaj;
  }
});
```

### Exercițiul D — Explică cu cuvintele tale
Pe foaie: ce face `preventDefault`? De ce nu cerem numele, telefonul sau emailul? De ce folosim `textContent` și nu `innerHTML` pentru textul scris de vizitator?

**Gata când:**  
- [ ] Formularul merge și nu cere date personale  
- [ ] Ai răspuns la exercițiile B–D

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Șterge eroarea unui câmp imediat ce omul începe să îl corecteze (eveniment `input` pe câmp)  
- [ ] Mută cursorul (`focus()`) pe primul câmp greșit după trimitere  
- [ ] Adaugă un câmp cu bifă („Am citit regula: nu scriu date personale”) și cere să fie bifat  
- [ ] Arată într-un paragraf ce animal a ales vizitatorul, în mesajul de mulțumire

---

## Greșeli frecvente
1. **Uitat `preventDefault()`**: pagina se reîncarcă și totul dispare.  
2. **`mesaj.value.trim`** fără paranteze: `trim` este o **funcție**, trebuie `trim()`.  
3. **`addEventListener("click", ...)` pe formular** în loc de `"submit"` pe formular (sau `click` pe buton).  
4. **`innerHTML`** cu text de la vizitator: poate introduce cod în pagină. Folosește `textContent`.  
5. **Câmp fără `label`**: cititorul de ecran nu știe ce se cere.  
6. **Opțiunea goală cu `value` diferit de `""`**: verificarea nu mai merge.

## Recapitulare pe scurt
1. Fiecare câmp are `label`; `novalidate` ne lasă să facem verificarea.  
2. `submit` + `preventDefault` opresc trimiterea.  
3. O funcție (`arataEroare`) scrie eroarea și marchează câmpul.  
4. Un contor de erori arată dacă totul este bine.  
5. Nu cerem și nu acceptăm date personale; afișăm textul cu `textContent`.

## Quiz scurt
1. Ce face `.trim()`?  
2. Ce înseamnă `/\d{6,}/`?  
3. Ce face `preventDefault()`?  
4. De ce are prima opțiune din listă valoarea goală?

## Temă
Cere unui adult să încerce să strice formularul (câmpuri goale, spații, un email). Notează ce a încercat și dacă formularul a rezistat. Salvează varianta în `Prenume_Nume_W5_L7`.

## Ce urmează — Lecția 8
Adăugăm detalii care fac diferența: **modul întunecat** care se ține minte și un buton „înapoi sus”.

---

## Răspunsuri
- **Quiz scurt:** (1) taie spațiile de la începutul și de la sfârșitul textului; (2) un șir de cel puțin 6 cifre una după alta (ca într-un număr de telefon); (3) oprește trimiterea formularului și reîncărcarea paginii; (4) ca să putem vedea dacă omul nu a ales nimic.  
- **Dacă ritmul clasei este lent:** numărătorul de caractere este bonus; regexul se dă gata, fără explicații.  
- **Exercițiul A:** pentru evaluare folosiți lista din Exemplul 5.  
- **Exercițiul B:** nu are răspuns unic; verificați că formularul rămâne corect.  
- **Exercițiul C:** (1) `addEventListener("click", ...)` pe formular; trebuie `"submit"` și `eveniment.preventDefault()`; (2) `trim` fără paranteze (trebuie `trim()`); (3) `innerHTML` cu text de la vizitator (trebuie `textContent`). Observație: lipsește și `preventDefault()`.  
- **Exercițiul D:** `preventDefault` oprește trimiterea și reîncărcarea paginii; datele personale nu trebuie cerute copiilor; `textContent` tratează totul ca text, iar `innerHTML` poate executa cod introdus de vizitator.  
- **Notă pentru profesor:** expresia regulată `/\d{6,}/` se oferă „gata făcută”; nu cereți elevilor să o rețină. Subliniați că un site care trimite mesaje are nevoie de un server și de reguli legale de protecție a datelor, ceea ce nu facem în curs. Dacă un elev vrea să adauge câmp de email, explicați de ce nu: copiii nu trebuie să ofere date personale pe site-uri.
