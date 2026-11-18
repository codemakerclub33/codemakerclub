# LECȚIA 1 — Fișa în consolă
### Primul script: `console.log`
**Modulul 4 · JavaScript pentru începători · 2 ore**  
**Code Maker Club · JavaScript Starter**

> Până acum ai învățat HTML (ce este în pagină) și CSS (cum arată pagina). Acum învățăm **JavaScript**: ce **face** pagina. Cu JavaScript, o pagină calculează, ia decizii și răspunde când apeși pe ea. Azi scrii primul tău program și îl privești rulând în **consola** browserului.  
> Proiect: **„Fișa în consolă”** · folder: `Prenume_Nume_W4_L1` (ex. `Ana_Pop_W4_L1`)

---

## Ce facem azi
La final ai un program, `script.js`, legat de pagina `tema.html`, care scrie în consolă o **fișă** cu datele din articolul tău de pe Wikipedia: text, numere și câteva calcule. Știi să legi un script de o pagină, să deschizi consola, să afișezi text și numere cu `console.log`, să scrii comentarii și să citești un mesaj de eroare. JavaScript este limbajul care pune pagina în mișcare: aproape orice joc sau aplicație de pe un site funcționează cu el, iar primul pas este să dai comenzi calculatorului și să vezi ce răspunde.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Cele trei limbaje · pregătim folderul · alegem datele din articol |
| 15–35 | Legăm `script.js` · prima comandă (**Exemplele 1–2**) |
| 35–55 | Text, numere, calcule (**Exemplele 3–4**) |
| 55–75 | Comentarii · mai multe valori (**Exemplele 5–6**) |
| 75–95 | Erori și cum le citim (**Exemplul 7**) |
| 95–115 | Mini-proiect: fișa în consolă (**Exemplul 8**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `<script src="script.js"></script>` | Leagă fișierul cu programul de pagină | înainte de `</body>` |
| `console.log(…);` | Scrie ceva în consolă | `console.log("Salut!");` |
| `"text"` | Un text se scrie între ghilimele | `"Am zece ani"` |
| `+  -  *  /` | Adunare, scădere, înmulțire, împărțire | `console.log(6 * 7);` |
| `// …` și `/* … */` | Comentarii: calculatorul le ignoră | `// notiță` |

---

## 1. Recapitulare rapidă

| Limbaj | Ce face | Exemplu |
|--------|---------|---------|
| **HTML** | structura: ce este în pagină | un titlu, un buton |
| **CSS** | aspectul: cum arată | culoare, mărime |
| **JavaScript** | comportamentul: ce se întâmplă | numără, calculează, răspunde la click |

Gândește-te la o mașinuță: HTML este caroseria, CSS este vopseaua, JavaScript este motorul.

În Modulul 3 ai lucrat cu `tema.html` și `stil.css`. Acum adăugăm al treilea fișier, `script.js`, care stă lângă ele în același folder.

**Încearcă tu (8 min)**  
- [ ] Creează folderul `Prenume_Nume_W4_L1` ca o **copie** a folderului `Prenume_Nume_W3_L10` (cu `tema.html`, `galerie.html`, `stil.css`, `imagini`, `media`)  
- [ ] Deschide `tema.html` cu Live Server și verifică dacă pagina arată ca înainte  
- [ ] Deschide articolul pe Wikipedia și uită-te la **căsuța din dreapta sus** (fișa pe scurt)  
- [ ] Alege din ea 4–5 date, de preferat **numere** (ani, mărimi, cantități); azi le scrii în consolă și le folosești la calcule  

---

## 2. Prima comandă

### Exemplul 1 — Legăm `script.js`

1. În același folder creează un fișier gol, `script.js`.  
2. În `tema.html`, chiar înainte de `</body>`, adaugă linia care îl leagă:

```html
  <footer>…</footer>

  <script src="script.js"></script>
</body>
```

Linia `<script src="script.js"></script>` îi spune browserului: „citește și rulează comenzile din `script.js`”. O punem la **sfârșitul** lui `<body>`, ca pagina să fie încărcată înainte de a porni scriptul. `<script>` are și etichetă de închidere, chiar dacă nu scrii nimic între ele.

**Încearcă tu (5 min)**  
- [ ] Creează `script.js` în folderul `Prenume_Nume_W4_L1`  
- [ ] Adaugă linia `<script>` în `tema.html`, înainte de `</body>`  
- [ ] Verifică dacă numele din `src` este scris exact ca numele fișierului  

### Exemplul 2 — `console.log`

În `script.js` scrie:

```javascript
console.log("Salut, lume!");
```

Deschide pagina cu **Live Server**. Apoi deschide **consola**: apasă **F12** (pe Mac **Cmd + Option + I**) și alege fila **Console**. Vei vedea:

```text
Salut, lume!
```

Ce înseamnă comanda:
- `console.log` este o comandă care **scrie ceva în consolă**;  
- între **paranteze** pui ce vrei să scrie;  
- textul se pune între **ghilimele** (`"…"`);  
- la sfârșit, **punct și virgulă** (`;`), ca să se vadă că instrucțiunea s-a terminat.

Consola este caietul tău de probă: aici vezi ce face programul, iar vizitatorii paginii nu o văd.

**Încearcă tu (5 min)**  
- [ ] Scrie în `script.js` o comandă `console.log` cu numele subiectului din articolul tău  
- [ ] Deschide consola (F12; pe Mac Cmd + Option + I, fila Console) și găsește textul  
- [ ] Schimbă textul, salvează cu **Ctrl + S** (pe Mac **Cmd + S**) și vezi cum se schimbă în consolă  

**Gata când:**  
- [ ] `script.js` este legat de `tema.html` înainte de `</body>`  
- [ ] Vezi textul tău în consolă  
- [ ] Știi să deschizi consola  

---

## 3. Text și numere

### Exemplul 3 — Text între ghilimele

```javascript
console.log("Mă numesc Ana");
console.log('Am zece ani');
console.log("Îmi place fotbalul ⚽");
```

Textul se poate scrie între ghilimele duble (`"…"`) sau simple (`'…'`), dar **la fel la început și la sfârșit**. Un text se numește în programare **șir de caractere** (în engleză, *string*). Poate avea litere cu diacritice, cifre și chiar emoji.

**Încearcă tu (5 min)**  
- [ ] Scrie trei rânduri de text despre subiectul articolului tău  
- [ ] Folosește o dată ghilimele duble și o dată ghilimele simple  
- [ ] Adaugă un emoji potrivit într-unul dintre rânduri  

### Exemplul 4 — Numere și calcule

```javascript
console.log(10);
console.log(2 + 3);
console.log(6 * 7);
console.log(20 / 5);
console.log("2 + 3");
```

Rezultat în consolă:

```text
10
5
42
4
2 + 3
```

Numerele se scriu **fără ghilimele**. Semne: `+` adunare, `-` scădere, `*` înmulțire, `/` împărțire. Calculatorul face calculul și afișează rezultatul. Ultima linie are ghilimele, deci este **text**: JavaScript nu calculează nimic, ci scrie `2 + 3` exact cum l-ai scris.

**Încearcă tu (7 min)**  
- [ ] Scrie în consolă un număr din fișa articolului tău  
- [ ] Fă un calcul cu un număr din fișă (de exemplu de câte ori încape într-un alt număr)  
- [ ] Afișează `4 + 4` o dată ca număr și o dată ca text  

**Gata când:**  
- [ ] Ai scris cel puțin 3 rânduri de text în consolă  
- [ ] Ai afișat un număr și rezultatul unui calcul  
- [ ] Știi diferența dintre `2 + 3` și `"2 + 3"`  

---

## 4. Comentarii și mai multe valori

### Exemplul 5 — Comentarii

```javascript
// Acesta este un comentariu pe un rând
console.log("Salut!"); // și acesta este un comentariu

/* Acesta este un comentariu
   pe mai multe rânduri */
console.log("La revedere!");
```

Calculatorul **ignoră** comentariile. Ele sunt notițe pentru oameni, ca să explici ce face codul. `//` comentează restul rândului, iar `/* … */` poate cuprinde mai multe rânduri.

**Încearcă tu (5 min)**  
- [ ] Scrie deasupra programului un comentariu cu titlul fișei tale  
- [ ] Adaugă un comentariu pe un rând, la sfârșitul unei comenzi  
- [ ] Scrie un comentariu pe mai multe rânduri, cu sursa datelor (Wikipedia)  

### Exemplul 6 — Mai multe valori într-un `console.log`

```javascript
console.log("Am", 10, "ani");
console.log("2 + 3 =", 2 + 3);
```

Rezultat:

```text
Am 10 ani
2 + 3 = 5
```

Poți pune mai multe valori între paranteze, **separate prin virgulă**. Consola le scrie pe același rând, cu spațiu între ele. Așa poți scrie o explicație și un rezultat pe aceeași linie.

**Încearcă tu (6 min)**  
- [ ] Scrie o linie cu text și număr din fișa ta, separate prin virgulă  
- [ ] Scrie un calcul cu explicația lui în față, ca în exemplu  
- [ ] Verifică dacă între valori apar spațiile în consolă  

**Gata când:**  
- [ ] Ai scris cel puțin două comentarii în `script.js`  
- [ ] Ai folosit un `console.log` cu mai multe valori, separate prin virgulă  
- [ ] Știi ce face calculatorul cu un comentariu  

---

## 5. Erori

### Exemplul 7 — Ce faci când apare o eroare

Greșelile sunt normale, chiar și programatorii cu experiență le fac. Citește greșelile cu atenție: consola îți spune ce nu merge.

Scrie intenționat o greșeală:

```javascript
console.lg("Salut!");
```

În consolă apare un mesaj **roșu**, cam așa:

```text
Uncaught TypeError: console.lg is not a function
    script.js:1
```

Cum îl citești:
1. **Cuvintele din față** (`TypeError`) spun felul erorii.  
2. **`console.lg is not a function`** spune că `console.lg` nu există, deci poate fi o greșeală de scriere.  
3. **`script.js:1`** spune **unde**: fișierul `script.js`, rândul 1.  

Repară: scrie `console.log`. Cele mai frecvente erori de început:

| Greșeală | Ce se întâmplă |
|----------|----------------|
| `console.lg(...)` (litere greșite) | `is not a function` |
| `Console.log(...)` (C mare) | `Console is not defined`: JavaScript face diferența între litere mari și mici |
| `console.log("Salut)` (lipsește ghilimeaua) | `Invalid or unexpected token` |
| `console.log("Salut";` (lipsește paranteza) | `missing ) after argument list` |

**Încearcă tu (8 min)**  
- [ ] Provoacă pe rând fiecare eroare din tabel și citește mesajul din consolă  
- [ ] Notează într-un comentariu rândul indicat de consolă pentru o eroare  
- [ ] Repară toate greșelile și verifică dacă dispar mesajele roșii  

**Gata când:**  
- [ ] Ai provocat cel puțin o eroare și ai citit mesajul  
- [ ] Ai găsit rândul indicat de consolă  
- [ ] Ai reparat greșelile  

---

## 6. Mini-proiect: toate la un loc

### Exemplul 8 — „Fișa în consolă”

Iată programul-model, despre delfin. Scrie un `script.js` ca acesta, cu **subiectul tău** și datele din fișa articolului tău:

```javascript
// Fișa delfinului (sursa: Wikipedia)
console.log("=== Delfinul ===");
console.log("Trăiește în: mări și oceane");
console.log("Lungime medie (metri):", 3);
console.log("Viteza maximă (km pe oră):", 40);
console.log("Durata vieții (ani):", 30);

// Câteva calcule
console.log("În două ore, la viteza maximă, parcurge", 40 * 2, "km");
console.log("Peste 5 ani, un delfin de 30 de ani are", 30 + 5, "ani");

console.log("=== Sfârșit ===");
```

În `tema.html` rămâne doar linia `<script src="script.js"></script>`. Nu pune **date personale** (nume complet, adresă, școală, telefon): alege date din articol.

**Încearcă tu (10 min)**  
- [ ] Scrie fișa subiectului tău, după model, cu cele 4–5 date alese la început  
- [ ] Adaugă două calcule cu numerele din fișă  
- [ ] Verifică dacă pagina `tema.html` arată la fel ca înainte  
- [ ] Citește cu voce tare ce scrie programul, rând cu rând  

**Gata când:**  
- [ ] Programul scrie cel puțin 8 rânduri în consolă  
- [ ] Are text, numere, două calcule și două comentarii  
- [ ] Nu apar mesaje roșii de eroare  
- [ ] Nu ai pus date personale  

---

## De făcut azi — „Fișa în consolă”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | `script.js` legat de `tema.html`, care scrie în consolă 3 rânduri |
| **Complet** | Minim + cel puțin 8 comenzi `console.log`, cu text și numere din articolul tău, 2 calcule, o linie cu mai multe valori, 2 comentarii și o eroare provocată și reparată |

### Pasul 1 — Minim
În folderul `Prenume_Nume_W4_L1`:

- [ ] Ai `tema.html`, `script.js`, `stil.css` și folderele de imagini  
- [ ] `<script src="script.js"></script>` este înainte de `</body>`  
- [ ] Consola arată 3 rânduri de la programul tău  

### Pasul 2 — Complet
- [ ] Ai cel puțin 8 comenzi `console.log`, cu text și cu numere  
- [ ] Ai 2 calcule (adunare, scădere, înmulțire sau împărțire)  
- [ ] Ai o linie cu mai multe valori, separate prin virgulă  
- [ ] Ai cel puțin 2 comentarii  
- [ ] Ai provocat o eroare, ai citit mesajul și ai reparat-o  

---

## Bonus ★★★ — Provocare: Programul cu surprize
*Doar dacă ai terminat Complet.*

Faci programul mai jucăuș, cu trei lucruri noi.

- [ ] Fă un „tabel al înmulțirii cu 7” de la 7 × 1 până la 7 × 5, cu un `console.log` pe rând  
- [ ] Calculează în consolă câte secunde are o oră (`60 * 60`)  
- [ ] Scrie, sub fișă, o figură din semnul `*`, pe mai multe rânduri (de exemplu un triunghi mic)  
- [ ] Adaugă la începutul programului o fereastră cu `alert("Bun venit!");` și observă cum așteaptă să apeși OK (folosește-o rar, enervează vizitatorii)  

---

## Greșeli frecvente
1. **Ai uitat să legi `script.js`** de pagină — nu apare nimic în consolă.  
2. **Ai scris numele fișierului greșit** (`scrip.js`) — consola arată o eroare 404.  
3. **Ai scris `Console.log`** cu C mare — JavaScript face diferența între litere mari și mici.  
4. **Ai uitat ghilimeaua sau paranteza de închidere** — apare o eroare roșie.  
5. **Ai pus un calcul între ghilimele** — `"5 + 3"` nu calculează nimic, ci scrie textul.  
6. **Ai amestecat ghilimelele** (`"text'`) — folosește aceleași la început și la sfârșit.  
7. **Te uiți la pagină, nu la consolă** — mesajele `console.log` apar numai în consolă (F12; pe Mac Cmd + Option + I).  
8. **Nu ai salvat fișierul** (Ctrl + S; pe Mac Cmd + S) — programul vechi rulează în continuare.  

---

## Recapitulare pe scurt
1. HTML = structura, CSS = aspectul, JavaScript = comportamentul.  
2. `<script src="script.js"></script>` înainte de `</body>` leagă scriptul.  
3. `console.log(…);` scrie în consolă (F12; pe Mac Cmd + Option + I, fila Console).  
4. Textul se scrie între ghilimele; numerele, fără.  
5. `//` și `/* … */` sunt comentarii: calculatorul le ignoră.  
6. Mesajele roșii spun felul erorii și rândul ei: citește-le cu calm.

## Quiz scurt
- Ce face JavaScript într-o pagină?  
- Ce afișează `console.log(3 + 4);`? Dar `console.log("3 + 4");`?  
- Cum deschizi consola?  
- Ce este un comentariu?  
- Ce spune mesajul `script.js:5`?

## Temă
1. Termină `Prenume_Nume_W4_L1` (Minim, apoi Complet).  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — Ghilimele în text.**

```javascript
console.log('Ea a spus: "Salut!"');
```

Textul din exterior are ghilimele simple, deci cele duble din interior sunt doar litere. Încearcă și invers: ghilimele duble în exterior, ghilimele simple în interior.

**Acasă 2 — Un rând nou în text.**

```javascript
console.log("Rândul 1\nRândul 2");
```

Semnul `\n` înseamnă „rând nou” și apare în consolă pe două rânduri. Scrie un mic poem de trei rânduri cu un singur `console.log`.

4. **Încă patru exerciții (B–E):**

**B — Ce apare în consolă?** Spune ce afișează fiecare linie: (1) `console.log(8 + 2);` (2) `console.log("8 + 2");` (3) `console.log("Am", 3 * 4, "mere");` (4) `console.log(15 / 3);`

**C — Scrie comanda.** Scrie comenzile care afișează: (1) textul `Bună ziua!`; (2) rezultatul lui `9 * 9`; (3) pe un singur rând: `Am 7 prieteni` (cu numărul 7 scris ca număr, nu ca text).

**D — Găsește greșelile.** Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```text
consol.log("Salut");
console.log("Mă cheamă Ana);
Console.log("Am 10 ani");
```

**E — Explică cu cuvintele tale.** Într-un comentariu din cod: ce face HTML, ce face CSS și ce face JavaScript? Unde vezi rezultatul unui `console.log`? Ce faci când apare un mesaj roșu în consolă?

## Ce urmează — Lecția 2
Învățăm **variabile**: „cutii” cu nume în care păstrăm valori, cu `let` și `const`.

---

## Răspunsuri
- **Quiz scurt:** (1) JavaScript dă comportament paginii: calculează, ia decizii și răspunde la click; (2) `console.log(3 + 4);` afișează `7`, iar `console.log("3 + 4");` afișează textul `3 + 4`; (3) apăsând F12 (pe Mac Cmd + Option + I) și alegând fila Console; (4) o notiță pentru oameni, scrisă cu `//` sau `/* … */`, pe care calculatorul o ignoră; (5) eroarea este în fișierul `script.js`, la rândul 5.  
- **Dacă ritmul clasei este lent:** Exemplul 6 (mai multe valori) se poate face scurt; Exemplele 1–4 și 7 sunt obligatorii.  
- **Tema, exercițiul B:** (1) `10`; (2) `8 + 2` (text); (3) `Am 12 mere`; (4) `5`.  
- **Tema, exercițiul C:** (1) `console.log("Bună ziua!");`; (2) `console.log(9 * 9);` (rezultă 81); (3) `console.log("Am", 7, "prieteni");`.  
- **Tema, exercițiul D:** (1) `consol` trebuie `console`; (2) lipsește ghilimeaua de închidere după `Ana`; (3) `Console` trebuie `console` (litera mică).  
- **Tema, exercițiul E:** HTML pune structura, CSS dă aspectul, JavaScript dă comportamentul; rezultatul se vede în consolă (F12; pe Mac Cmd + Option + I, fila Console); citesc mesajul, văd rândul indicat și repar greșeala.  
- **Bonus (indicii):** (1) fiecare rând arată așa: `console.log("7 x 1 =", 7 * 1);`; (2) răspunsul este `3600`; (3) `console.log("*");`, apoi `console.log("**");` și tot așa, câte un rând pe linie; (4) `alert("Bun venit!");` oprește pagina până apeși OK.  
- **Notă informativă:** dacă „nu apare nimic”, verifică, în ordine: (1) `script.js` este salvat; (2) linia `<script>` este în `tema.html`, cu numele corect; (3) consola este deschisă pe fila Console. Mulți copii pierd mesajele pentru că se uită la pagină, nu în consolă. Citește mesajele de eroare cu voce tare: este cea mai bună obișnuință pentru programare. Dacă nu ai `tema.html` din Modulul 3, pornește de la orice pagină cu o fișă pe scurt (un animal, un loc, un hobby). `alert` apare doar în Bonus și se folosește rar.
