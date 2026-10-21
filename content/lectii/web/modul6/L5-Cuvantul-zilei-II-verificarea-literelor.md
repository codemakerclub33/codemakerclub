# LECȚIA 5 — Cuvântul zilei II: verificarea literelor
**Modulul 6 · Jocuri web · 2 ore**  
**Code Maker Club · Web Game Maker**

> Azi terminăm **Cuvântul zilei**. Jocul alege **un cuvânt secret pentru fiecare zi**, iar după fiecare încercare colorează literele: **verde** (la locul potrivit), **galben** (este în cuvânt, dar în alt loc) și **gri** (nu este în cuvânt). Colorăm și tastele de pe ecran. Cea mai interesantă parte este un mic **algoritm**: cum verifici literele corect, chiar când o literă apare de două ori.  
> Proiect: **„Cuvântul zilei”** · folder: `Prenume_Nume_W6_L5` (continuăm din `Prenume_Nume_W6_L4`)

---

## Obiectiv
La finalul orei ai jocul complet: cuvântul secret se schimbă în fiecare zi, fiecare încercare este colorată corect, tastele se colorează și ele, iar jocul se termină cu bravo (dacă ai ghicit) sau cu cuvântul secret (dacă nu).  
**Minim:** un cuvânt secret ales din listă și literele colorate verde, galben sau gri după fiecare încercare.  
**Ținta orei (Complet):** + cuvânt diferit în fiecare zi, verificare corectă și pentru literele care se repetă, tastele colorate, mesaj de câștig sau de pierdere, descrieri pentru cititorul de ecran, mici semne în căsuțe (✓ • ×) ca să nu ne bazăm doar pe culoare, o prezentare de un minut.

## De ce contează
Verificarea literelor pare simplă, dar are o capcană (literele repetate). A o rezolva corect înseamnă să **gândești un algoritm**: un șir de pași care dă mereu rezultatul bun. Mai înveți cum să faci ca un joc să „se schimbe” în fiecare zi, folosind data.

---

## Siguranță înainte de toate
- Lista are doar **cuvinte potrivite pentru copii** (animale, obiecte, natură). Dacă adaugi cuvinte, alege cuvintele cu grijă și cere acordul profesorului.  
- **Culorile nu sunt singura informație**: fiecare căsuță colorată are și un semn (✓ la locul potrivit, • în cuvânt dar în alt loc, × nu este în cuvânt), iar căsuța are o descriere pentru cititorul de ecran. Așa pot juca și cei care nu disting verde de roșu.  
- Jocul nu cere date personale și nu trimite nimic.  
- Cuvântul secret se poate vedea dacă cineva deschide DevTools. Este în regulă: este un joc de antrenament, nu un concurs.  
- **Pauze:** după 20–30 de minute, ridică-te și mișcă-te.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare: ce avem din lecția 4 |
| 10–25 | Lista de cuvinte și cuvântul zilei (**Exemplele 1–2**) |
| 25–55 | Algoritmul de verificare (**Exemplul 3**) |
| 55–80 | Colorăm căsuțele și tastele, câștig sau pierdere (**Exemplele 3–4**) |
| 80–95 | Testăm algoritmul pe cazuri grele (**Exemplul 5**) |
| 95–110 | Verificarea jocului (**Exemplul 6**) |
| 110–120 | Recap și temă |

---

## 1. Lista de cuvinte

### Exemplul 1 — 5 litere, fără diacritice

Continuăm în folderul tău (copiază `Prenume_Nume_W6_L4` în `Prenume_Nume_W6_L5` și lucrează în copie). În `script.js`, **sub secțiunea „Setări”**, adaugă:

```javascript
// ===== Lista de cuvinte =====
const CUVINTE = [
  "carte", "penar", "lapte", "vulpe", "tigru", "ursul", "nisip", "mingi", "marea", "norul",
  "soare", "stele", "pomul", "robot", "teren", "caiet", "prune", "paste", "pizza", "dulce",
  "sport", "pilot", "avion", "podul", "sunet", "verde", "negru", "lemne", "cuiul", "mesaj",
  "cutii", "cadou", "cerul", "frate", "unchi", "bunic", "copil", "jocul", "birou", "muzeu",
  "magie", "eroul"
];
```

Reguli pentru lista ta:

```text
□ Fiecare cuvânt are exact 5 litere
□ Litere mici, fără diacritice (fără ă, â, î, ș, ț)
□ Fără cuvinte rele sau care ar putea răni pe cineva
□ Fiecare cuvânt este scris corect
□ Cuvintele nu se repetă
```

Cuvintele fără diacritice sunt mai puține decât ai crede (de exemplu „pâine” sau „zebră” nu merg), dar sunt destule pentru un joc bun. Poți adăuga și altele.

**Încearcă tu (10 min)**  
- [ ] Copiază folderul și adaugă lista  
- [ ] Citește cuvintele: toate au 5 litere?  
- [ ] Adaugă **5 cuvinte ale tale** (cu 5 litere, fără diacritice)

---

## 2. Cuvântul zilei

### Exemplul 2 — Un număr care se schimbă în fiecare zi

Sub lista de cuvinte, adaugă:

```javascript
// ===== Cuvântul zilei =====
const azi = new Date();
const numarZi = azi.getFullYear() * 372 + azi.getMonth() * 31 + azi.getDate();
const secret = CUVINTE[numarZi % CUVINTE.length].toUpperCase();
```

Cum merge:
1. `new Date()` este data de azi. `.getFullYear()`, `.getMonth()` și `.getDate()` dau anul, luna (de la 0 la 11) și ziua din lună.  
2. Din ele facem **un singur număr** care este **diferit în fiecare zi**: `an × 372 + lună × 31 + zi`. (Numerele 372 și 31 sunt alese ca să nu se suprapună zilele.) Mâine, numărul este de obicei mai mare cu 1.  
3. `numarZi % CUVINTE.length` este **restul împărțirii** la numărul de cuvinte. Dacă lista are 42 de cuvinte, restul este un număr între 0 și 41, deci o poziție bună în listă. Cum numărul zilei este diferit de la o zi la alta, cuvântul se schimbă în fiecare zi, iar după ce trec toate, se reia.  
4. `toUpperCase()` face cuvântul cu litere mari, ca să se potrivească cu literele de pe tablă.

Toți cei care joacă în aceeași zi pe același site au **același cuvânt**, fără ca să fie nevoie de un server.

**Încearcă tu (10 min)**  
- [ ] Adaugă secțiunea  
- [ ] Scrie temporar la sfârșitul scriptului `console.log(secret);` ca să vezi cuvântul secret și să poți testa. **Șterge linia la final!**  
- [ ] Schimbă temporar `azi.getDate()` în `azi.getDate() + 1`: cuvântul se schimbă? Pune la loc

---

## 3. Algoritmul de verificare

### Exemplul 3 — Două treceri

Verificarea trebuie să fie **corectă**, chiar când o literă se repetă. Exemplu: cuvântul secret este `LAPTE`, iar tu scrii `LELEA`:

```text
secret:   L  A  P  T  E
încercare: L  E  L  E  A
```

Prima literă, **L**, este la locul ei: verde. Pe urmă sunt **două E-uri** în încercare, dar în cuvânt este **un singur E**. Ce culoare ia fiecare? Regula jocului: fiecare literă din cuvânt „poate fi folosită” **o singură dată**. Primul E este galben (E-ul din cuvânt este acolo), al doilea E este gri, pentru că E-ul din cuvânt a fost deja „folosit”. Al doilea L este gri (singurul L din cuvânt a fost verde). A este galben.

Ca să nu greșim, verificăm în **două treceri**:

```text
Trecerea 1: marchez cu VERDE literele de la locul lor și le "folosesc" din cuvânt.
Trecerea 2: pentru celelalte litere, caut în literele rămase din cuvânt:
            dacă găsesc, marchez cu GALBEN și o "folosesc"; altfel, GRI.
```

Funcțiile:

```javascript
// ===== Verificarea literelor =====
const DESCRIERI = {
  corect: "la locul potrivit",
  prezent: "este în cuvânt, dar în alt loc",
  lipsa: "nu este în cuvânt"
};

// Întoarce o listă cu 5 cuvinte: "corect", "prezent" sau "lipsa"
function evalueaza(incercare) {
  const rezultat = Array(LUNGIME).fill("lipsa");
  const ramase = secret.split("");

  // Pasul 1: literele de la locul lor (verzi)
  for (let i = 0; i < LUNGIME; i++) {
    if (incercare[i] === secret[i]) {
      rezultat[i] = "corect";
      ramase[i] = null;
    }
  }

  // Pasul 2: literele care sunt în cuvânt, dar în alt loc (galbene)
  for (let i = 0; i < LUNGIME; i++) {
    if (rezultat[i] !== "corect") {
      const pozitie = ramase.indexOf(incercare[i]);
      if (pozitie !== -1) {
        rezultat[i] = "prezent";
        ramase[pozitie] = null;
      }
    }
  }

  return rezultat;
}

function coloreazaTasta(litera, stare) {
  const tasta = taste[litera];
  if (tasta === undefined) {
    return;
  }

  // Ordinea importanței: corect > prezent > lipsa
  if (tasta.classList.contains("corect")) {
    return;
  }
  if (tasta.classList.contains("prezent") && stare === "lipsa") {
    return;
  }

  tasta.classList.remove("prezent", "lipsa");
  tasta.classList.add(stare);
}

function trimiteIncercarea() {
  if (coloana < LUNGIME) {
    mesaj.textContent = "Mai ai nevoie de litere. Cuvântul are 5 litere.";
    return;
  }

  let incercare = "";
  for (const casuta of casute[rand]) {
    incercare = incercare + casuta.textContent;
  }

  const rezultat = evalueaza(incercare);

  for (let i = 0; i < LUNGIME; i++) {
    const casuta = casute[rand][i];
    casuta.classList.add(rezultat[i]);
    casuta.setAttribute("aria-label", `${incercare[i]}: ${DESCRIERI[rezultat[i]]}`);
    coloreazaTasta(incercare[i], rezultat[i]);
  }

  if (incercare === secret) {
    mesaj.textContent = `Bravo! Ai ghicit cuvântul din încercarea ${rand + 1}!`;
    joculSaTerminat = true;
    return;
  }

  rand = rand + 1;
  coloana = 0;

  if (rand === INCERCARI) {
    mesaj.textContent = `Gata încercările! Cuvântul era: ${secret}. Mâine vine alt cuvânt.`;
    joculSaTerminat = true;
  } else {
    mesaj.textContent = `Încercarea ${rand + 1} din ${INCERCARI}.`;
  }
}
```

Pe rând:
1. `DESCRIERI` leagă fiecare stare de o descriere pentru cititorul de ecran.  
2. `Array(LUNGIME).fill("lipsa")` face o listă cu 5 elemente, toate `"lipsa"`: pornim de la ideea că nicio literă nu se potrivește.  
3. `ramase = secret.split("")` desparte cuvântul secret în litere (o listă). Din ea „scoatem” literele folosite (le punem pe `null`).  
4. **Trecerea 1:** pentru fiecare poziție, dacă litera din încercare este egală cu cea din secret, marchez `"corect"` și o scot din `ramase`.  
5. **Trecerea 2:** pentru fiecare literă care nu este deja `"corect"`, `ramase.indexOf(litera)` caută litera în literele rămase. Dacă o găsește (`!== -1`), este `"prezent"` și o scot; altfel rămâne `"lipsa"`.  
6. `coloreazaTasta` colorează tasta de pe ecran, dar nu strică o culoare mai bună: **verde bate galben, galben bate gri**. Dacă o literă a fost verde, nu o facem la loc galbenă.  
7. `trimiteIncercarea` adună literele din rând într-un text (`incercare`), îl verifică cu `evalueaza`, apoi colorează fiecare căsuță (clasa `corect`, `prezent` sau `lipsa`), colorează tastele, apoi decide: dacă `incercare === secret`, ai câștigat; altfel treci la rândul următor sau, dacă ai terminat rândurile, ai pierdut și jocul îți arată cuvântul.  
8. `aria-label` pe căsuță spune, de exemplu, „E: este în cuvânt, dar în alt loc”. Stilul adaugă semnele ✓, • și ×.

**Încearcă tu (30 min)**  
- [ ] **Înlocuiește** vechea secțiune „Verificarea literelor” (cea din lecția 4) cu cea de mai sus  
- [ ] Verifică în consolă: `evalueaza("ABCDE")` returnează o listă cu 5 valori  
- [ ] Joacă: scrie un cuvânt de 5 litere și apasă Enter. Se colorează căsuțele și tastele?

---

## 4. Câștig sau pierdere

### Exemplul 4 — Cum se termină jocul

În `trimiteIncercarea` ai deja trei situații (privește codul):

```text
incercare === secret          → "Bravo! Ai ghicit cuvântul din încercarea N!"  (jocul se termină)
rand ajunge la INCERCARI      → "Gata încercările! Cuvântul era: ...."          (jocul se termină)
altfel                        → "Încercarea N din 6." și mergem la rândul următor
```

Variabila `joculSaTerminat` devine `true` în primele două cazuri, iar `apasaTasta` (din lecția 4) nu mai face nimic după aceea. Așa nu poți scrie mai departe după ce jocul s-a terminat.

Observă: verificăm **întâi** dacă ai câștigat (`incercare === secret`) și abia apoi dacă s-au terminat rândurile. Dacă ai ghicit chiar în al șaselea rând, câștigi: pierderea nu se verifică înaintea câștigului.

**Încearcă tu (10 min)**  
- [ ] Ghicește cuvântul (pentru test, folosește `console.log(secret)` din Exemplul 2): apare mesajul de bravo?  
- [ ] Joacă încă o dată și greșește de 6 ori: apare cuvântul secret?  
- [ ] După sfârșit, încearcă să scrii o literă: nu mai merge?

---

## 5. Testăm cazurile grele

### Exemplul 5 — Un algoritm se testează cu exemple

Un algoritm bun se verifică pe cazuri **grele**. Pentru test, schimbă temporar rândul cu `secret` din „Cuvântul zilei”:

```javascript
const secret = "LAPTE";
```

Pentru rândurile cu secretul `CARTE` sau `ROBOT`, schimbă `secret` cu acel cuvânt și reîncarcă pagina. Apoi scrie, pe rând, aceste încercări și compară cu tabelul (v = verde, g = galben, x = gri):

| Secret | Încercare | Rezultat așteptat |
|--------|-----------|-------------------|
| LAPTE | LELEA | v g x x g |
| LAPTE | LAPTE | v v v v v |
| CARTE | TERAC | g g v g g |
| ROBOT | BOBBY | x v v x x |

Explicații scurte:
- **LAPTE / LELEA:** L este verde. Un singur E în cuvânt: primul E din încercare este galben, al doilea este gri. A este galben.  
- **CARTE / TERAC:** doar a treia literă, R, este verde (la locul ei în ambele cuvinte). Celelalte sunt în cuvânt, dar în alt loc.  
- **ROBOT / BOBBY:** a doua literă (O) și a treia (B) sunt la locul lor. B-ul din cuvânt a fost „folosit”, deci primul și al patrulea B sunt gri.

După test, **pune la loc** linia originală (cu `CUVINTE[...]`).

**Încearcă tu (15 min)**  
- [ ] Testează cele 4 cazuri  
- [ ] Inventează încă un caz greu (cu două litere la fel) și prezice culorile **înainte** să apeși Enter  
- [ ] Pune la loc linia `const secret = CUVINTE[numarZi % CUVINTE.length].toUpperCase();`

---

## 6. Verificarea

### Exemplul 6 — Lista de verificare a jocului

```text
□ Cuvântul secret este ales din listă și este același toată ziua
□ O literă corectă la locul ei este verde (și are semnul ✓)
□ O literă din cuvânt, dar în alt loc, este galbenă (•)
□ O literă care nu este în cuvânt este gri (×)
□ Literele care se repetă sunt colorate corect (cele patru cazuri din Exemplul 5)
□ Tastele de pe ecran se colorează, iar verde nu devine galben după aceea
□ Dacă ghicești, apare mesajul de bravo și nu mai poți scrie
□ Dacă nu ghicești în 6 încercări, apare cuvântul secret
□ Nu rămâne în cod nicio linie cu console.log(secret) sau cu cuvânt scris direct
□ Merge cu tastatura calculatorului și cu tastatura de pe ecran
□ Merge pe telefon (DevTools 375 px)
□ Nu apar erori în consolă
```

**Gata când:**  
- [ ] Toate punctele sunt bifate  
- [ ] Ai făcut o copie de siguranță a folderului

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Cuvântul zilei” (obligatoriu)
Folderul `Prenume_Nume_W6_L5` are jocul complet, cu lista ta de cuvinte, și lista din Exemplul 6 este bifată.

### Exercițiul B — Îl faci al tău
Schimbă culorile (verde, galben, gri), titlul, mesajele și lista de cuvinte (cel puțin 10 cuvinte ale tale, 5 litere, fără diacritice). Dacă schimbi culorile, verifică din nou că **semnele** ✓ • × se văd.

### Exercițiul C — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```javascript
function evalueaza(incercare) {
  const rezultat = Array(LUNGIME).fill("lipsa");
  const ramase = secret.split("");

  for (let i = 0; i < LUNGIME; i++) {
    if (incercare[i] = secret[i]) {
      rezultat[i] = "corect";
    }
  }

  for (let i = 0; i < LUNGIME; i++) {
    if (rezultat[i] !== "corect") {
      const pozitie = ramase.indexOf(incercare[i]);
      if (pozitie === -1) {
        rezultat[i] = "prezent";
      }
    }
  }

  return rezultat;
}
```

### Exercițiul D — Explică cu cuvintele tale
Pe foaie: de ce verificăm literele în **două treceri**? Ce face `%` în `numarZi % CUVINTE.length`? De ce nu ne bazăm doar pe culori pentru a arăta rezultatul?

**Gata când:**  
- [ ] Jocul este complet și lista este bifată  
- [ ] Ai răspuns la exercițiile B–D

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Acceptă doar cuvinte din listă: la Enter, dacă cuvântul scris nu este în `CUVINTE` (cu litere mici), arată „Cuvântul nu este în lista mea.” și nu consuma încercarea  
- [ ] Adaugă un buton „Cuvânt de antrenament” care alege un cuvânt la întâmplare (`Math.random`), ca să poți juca de mai multe ori pe zi  
- [ ] Salvează în `localStorage` câte jocuri ai câștigat (doar un număr)  
- [ ] Adaugă o temă „contrast mare” cu culori foarte diferite

---

## Greșeli frecvente
1. **`=` în loc de `===`** în `if`: atribuie în loc să compare, iar condiția este mereu adevărată.  
2. **O singură trecere**: literele repetate ies greșit galbene.  
3. **Uitat să „consumi” litera** (`ramase[pozitie] = null`): aceeași literă din cuvânt este folosită de două ori.  
4. **Condiția inversă** (`pozitie === -1` pentru galben): `indexOf` dă `-1` când **nu** găsește litera.  
5. **Cuvinte cu diacritice sau cu altă lungime** în listă: tabla nu le poate afișa.  
6. **Verificarea pierderii înaintea câștigului**: cine ghicește în ultimul rând ar pierde.

## Recapitulare pe scurt
1. Un algoritm este un șir de pași care dă mereu rezultatul corect.  
2. Verificarea literelor se face în două treceri: verde, apoi galben și gri.  
3. `indexOf` caută o literă într-o listă și dă `-1` dacă nu o găsește.  
4. Data (`new Date()`) și restul împărțirii (`%`) aleg cuvântul zilei.  
5. Culoarea nu este singura informație: adăugăm semne și descrieri.  
6. Un algoritm se testează pe cazuri grele.

## Quiz scurt
1. Ce dă `ramase.indexOf("Q")` dacă nu există Q în `ramase`?  
2. Care este rezultatul pentru secretul `ROBOT` și încercarea `BOBBY`?  
3. Ce face `numarZi % 42`?  
4. De ce ștergem `console.log(secret)` la final?

## Temă
Joacă jocul în trei zile diferite: cuvântul se schimbă? Cere unui membru al familiei să încerce și să spună dacă regulile se înțeleg. Notează o idee de îmbunătățire și, dacă ai timp, încearcă ideea. Salvează varianta în `Prenume_Nume_W6_L5`.

## Ce urmează — Lecția 6
Trecem la **Canvas**: o pânză pe care desenăm cu JavaScript și pe care mișcăm o minge care sare. Ne trebuie pentru jocurile cu mișcare din lecțiile 7–9.

---

## Răspunsuri pentru profesor
- **Quiz scurt:** (1) dă `-1`; (2) `x v v x x` (primul `B` gri, `O` verde, `B` verde, al patrulea `B` gri, `Y` gri); (3) dă restul împărțirii la 42, adică un număr de la 0 la 41, o poziție bună în lista de cuvinte; (4) ca să nu se vadă cuvântul secret în consolă: linia a fost doar pentru teste.  
- **Exercițiul A:** pentru evaluare folosiți lista din Exemplul 6. Minimul de acceptare: cuvânt secret din listă, litere colorate verde, galben sau gri, mesaj de câștig; tratarea corectă a literelor repetate și cuvântul zilei sunt ținta.  
- **Exercițiul B:** nu are răspuns unic; verificați că toate cuvintele au 5 litere, fără diacritice, și sunt potrivite pentru copii.  
- **Exercițiul C:** (1) `incercare[i] = secret[i]` este atribuire; trebuie `===`; (2) lipsește „consumarea” literelor: `ramase[i] = null` în trecerea 1 și `ramase[pozitie] = null` în trecerea 2, ceea ce dă rezultate greșite pentru literele repetate; (3) condiția `pozitie === -1` este inversă: trebuie `pozitie !== -1` pentru `"prezent"`.  
- **Exercițiul D:** o singură trecere ar da galben unei litere care este deja verde în altă poziție; `%` dă restul împărțirii și alege o poziție validă în listă; unii oameni nu disting culorile, deci adăugăm semne și descrieri.  
- **Notă pentru profesor:** dacă un elev are încercări colorate greșit, cereți să scrie pe foaie secretul și încercarea și să facă cele două treceri cu creionul; apoi comparați cu rezultatul programului. Pentru bonusul cu lista de cuvinte valide, explicați că un joc real are o listă mult mai mare. Verificați că niciun elev nu lasă `console.log(secret)` în varianta finală.
