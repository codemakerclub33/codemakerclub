# LECȚIA 3 — Titluri și paragrafe
**Modulul 1 · HTML I: Prima mea pagină · 2 ore**  
**Code Maker Club · HTML Starter**

> Azi înveți să scrii **titluri mari și mici** și să împarți textul în **paragrafe**, ca într-o carte sau într-un articol. Paginile tale încep să arate ca niște pagini adevărate!  
> Proiect: **„Povestea mea într-o pagină”** · folder: `Prenume_Nume_W1_L3` (ex. `Ana_Pop_W1_L3`)

---

## Obiectiv
La finalul orei știi să folosești cele șase titluri (`h1` … `h6`), știi de ce o pagină are un singur `h1`, scrii paragrafe, rupi un rând cu `<br>`, tragi o linie cu `<hr>` și știi să scrii în pagină semnele `<` și `>`.  
**Minim:** o pagină cu un `<h1>`, două titluri `<h2>` și câte un paragraf sub fiecare.  
**Ținta orei (Complet):** + un titlu `<h3>`, o linie `<hr>`, o poezie cu `<br>` și un paragraf în care apare un semn special.

## De ce contează
Titlurile sunt ca **etichetele de pe sertarele unui dulap**: îți spun repede ce găsești în fiecare. Cititorii, dar și programele care citesc pagina cu voce tare pentru cei care nu văd, se orientează după ele. Un text împărțit în titluri și paragrafe se citește mult mai ușor.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · scheletul scris singur |
| 15–45 | Cele șase titluri · un singur `h1` · ordinea titlurilor (**Exemplele 1–3**) |
| 45–70 | Paragrafe, spații și rânduri noi (**Exemplele 4–6**) |
| 70–85 | Linia `<hr>` și semnele speciale (**Exemplele 7–9**) |
| 85–110 | Mini-proiect: povestea mea (**Exemplul 10**) |
| 110–120 | Recap și temă |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- scheletul are `DOCTYPE`, `html`, `head` (informații) și `body` (ce se vede);
- `<title>` apare în fila browserului;
- ultimul tag deschis se închide primul;
- tot ce vrei să se vadă scrii în `<body>`.

**Încearcă tu (3 min)**  
- [ ] Creează folderul `Prenume_Nume_W1_L3` și fișierul `index.html`  
- [ ] Scrie scheletul complet **singur**, cu un `<title>` și un `<p>` în `<body>`, apoi pornește Live Server  

> De aici înainte, exemplele arată doar ce scrii **în interiorul `<body>`**, dacă nu spunem altfel.

---

## 2. Titlurile

HTML are **șase titluri**, de la cel mai mare la cel mai mic: `h1`, `h2`, `h3`, `h4`, `h5`, `h6` („h” vine de la „heading”, adică „titlu”).

### Exemplul 1 — Cele șase titluri

```html
<h1>Titlu 1</h1>
<h2>Titlu 2</h2>
<h3>Titlu 3</h3>
<h4>Titlu 4</h4>
<h5>Titlu 5</h5>
<h6>Titlu 6</h6>
```

În browser, `h1` este cel mai mare, iar `h6` cel mai mic. Pe măsură ce numărul crește, titlul devine mai mic.

> Titlurile se scriu **întotdeauna cu tag de deschidere și de închidere**: `<h2>` … `</h2>`. Numărul din tagul de deschidere trebuie să fie **același** cu cel din închidere.

**Gata când:**  
- [ ] Ai scris toate cele șase titluri și vezi cum se micșorează  
- [ ] Ai verificat că fiecare are și închidere  

### Exemplul 2 — Un singur `h1`

```html
<h1>Animalele mele</h1>
<p>Aici vorbesc despre animalele pe care le iubesc.</p>
```

`h1` este **titlul întregii pagini**, ca titlul unei cărți. De obicei se folosește **o singură dată** pe pagină. Pentru restul titlurilor folosim `h2`, `h3` și așa mai departe.

> Titlurile nu se aleg după cât de **mari** vrei să arate, ci după cât de **importante** sunt. Mărimea o vei schimba mai târziu, cu CSS.

### Exemplul 3 — Titlurile ca un cuprins

Titlurile se așază ca un **cuprins**: `h2` sunt capitolele, iar `h3` sunt părțile din capitole.

```html
<h1>Animalele mele</h1>

<h2>Pisica</h2>
<h3>Cum arată</h3>
<p>Mițu are blană gri și ochi verzi.</p>
<h3>Ce îi place</h3>
<p>Mițu iubește să doarmă la soare.</p>

<h2>Câinele</h2>
<p>Rex aleargă prin parc în fiecare zi.</p>
```

Ordinea corectă merge **pe rând**: după `h1` vine `h2`, după `h2` vine `h3`. Nu sări de la `h2` direct la `h5`.

**Încearcă tu (4 min)**  
- [ ] Scrie Exemplul 3 și schimbă animalele cu ale tale  
- [ ] Desenează pe o foaie „cuprinsul” paginii tale, ca să vezi ce titluri ai  

---

## 3. Paragrafele

### Exemplul 4 — Paragrafe

```html
<p>Mă cheamă Ana și am zece ani. Locuiesc într-un oraș mare, lângă un parc cu multe flori.</p>
<p>Îmi place să desenez, să citesc și să mă joc cu pisica.</p>
```

Fiecare `<p>` începe pe un rând nou și are **puțin spațiu** deasupra și dedesubt. Dacă textul este lung, browserul îl rupe singur la marginea ferestrei. Schimbă mărimea ferestrei și vei vedea cum se mută cuvintele.

### Exemplul 5 — Spațiile în plus se ignoră

```html
<p>Salut,           lume!</p>
<p>Prima propoziție.
   A doua propoziție.</p>
```

Oricâte spații sau Enter-uri pui între cuvinte, browserul le arată ca **un singur spațiu**. Dacă vrei un rând nou, ai nevoie de un tag.

### Exemplul 6 — Rând nou cu `<br>`

```html
<p>
  Roșu e trandafirul,<br>
  Albastră e violeta,<br>
  Eu învăț HTML,<br>
  Și fac singur pagina.
</p>
```

`<br>` rupe rândul, dar rămâi în **același paragraf**. Nu are tag de închidere.

> Folosește `<br>` doar pentru versuri sau adrese. Pentru un text nou, pune un **paragraf nou**.

**Încearcă tu (4 min)**  
- [ ] Scrie 2 paragrafe despre tine și schimbă lățimea ferestrei browserului  
- [ ] Scrie Exemplul 6 și compară cu o variantă fără `<br>`  

---

## 4. Linii și semne speciale

### Exemplul 7 — O linie despărțitoare: `<hr>`

```html
<h2>Capitolul 1</h2>
<p>A fost odată o pisică.</p>
<hr>
<h2>Capitolul 2</h2>
<p>Pisica a găsit o comoară.</p>
```

`<hr>` trasează o **linie orizontală** între două părți ale paginii („hr” vine de la „horizontal rule”). Nu are tag de închidere.

### Exemplul 8 — Titluri și paragrafe împreună

```html
<h1>Excursia mea</h1>

<h2>Ziua 1</h2>
<p>Am plecat dimineața cu trenul.</p>

<h2>Ziua 2</h2>
<p>Am urcat pe munte și am văzut norii de aproape.</p>
```

Observă: după fiecare titlu urmează text (un paragraf) sau un titlu mai mic. Un titlu fără nimic sub el rămâne gol și nu ajută pe nimeni.

### Exemplul 9 — Semne speciale: `<` și `>`

Ce se întâmplă dacă vrei să scrii **în pagină** un tag, de exemplu `<p>`? Browserul crede că e un tag adevărat și nu îl afișează. Folosim coduri speciale:

| Vrei să apară | Scrii în cod |
|---------------|--------------|
| `<` | `&lt;` |
| `>` | `&gt;` |
| `&` | `&amp;` |

```html
<p>Tagul pentru paragraf este &lt;p&gt;.</p>
<p>Ana &amp; Mihai sunt prieteni.</p>
```

În browser apare: **Tagul pentru paragraf este `<p>`.** și **Ana & Mihai sunt prieteni.**

> Codul începe cu `&` și se termină cu `;` (punct și virgulă). „lt” vine de la „less than” (mai mic), iar „gt” de la „greater than” (mai mare).

**Încearcă tu (4 min)**  
- [ ] Scrie Exemplul 7 și vezi linia dintre capitole  
- [ ] Scrie o propoziție în care să apară `<h1>` ca text, nu ca titlu  

---

## 5. Mini-proiect

### Exemplul 10 — „Povestea mea într-o pagină”

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Povestea mea</title>
</head>
<body>
  <h1>Povestea mea</h1>

  <h2>Cine sunt</h2>
  <p>Mă cheamă Ana și am zece ani. Locuiesc în Cluj.</p>

  <h2>Ce îmi place</h2>
  <h3>La școală</h3>
  <p>Îmi place ora de desen și ora de informatică.</p>
  <h3>După școală</h3>
  <p>Mă joc cu pisica și citesc povești cu dragoni.</p>

  <hr>

  <h2>Poezia mea</h2>
  <p>
    Plouă mărunt peste sat,<br>
    Eu scriu cod și sunt încântat.
  </p>
</body>
</html>
```

Povestea ta trebuie să fie despre **tine**: schimbă toate textele cu ale tale.

**Gata când:**  
- [ ] Pagina are un singur `<h1>`, mai multe `<h2>` și cel puțin un `<h3>`  
- [ ] Sub fiecare titlu urmează text sau un titlu mai mic  

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Povestea mea într-o pagină” (obligatoriu)
Pe scheletul complet, scrie în `<body>`:
- un `<h1>` cu titlul povestirii,
- cel puțin **două** titluri `<h2>`, fiecare cu un paragraf,
- **un** titlu `<h3>`, cu paragraful lui,
- o linie `<hr>` între două părți,
- o poezie scurtă, cu `<br>`.

Verifică pagina cu Live Server.

### Exercițiul B — Ordinea titlurilor
Pune titlurile în ordinea corectă, de la cel mai important la cel mai puțin important, pentru o pagină despre sporturi:

```text
Fotbal în echipă (h3)
Sporturile mele (h1)
Antrenamentul de luni (h4)
Sporturi de echipă (h2)
```

### Exercițiul C — Rând nou sau paragraf nou?
Pentru fiecare, alege `<br>` sau `<p>`: (1) un vers de poezie; (2) două idei diferite într-un text; (3) o adresă pe două rânduri.

### Exercițiul D — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```text
<h1>Animalele mele</h1>
<h4>Pisica</h4>
<p>Pisica mea doarme mult.
<h2>Câinele</h2>
<p>Câinele meu aleargă.</p>
<h1>Sfârșit</h1>
```

### Exercițiul E — Explică cu cuvintele tale
Pe foaie: de ce nu folosim `h1` pentru orice text care trebuie să arate mare?

**Gata când:**  
- [ ] Folderul și fișierul se numesc corect: `Prenume_Nume_W1_L3` și `index.html`  
- [ ] Pagina are un `<h1>`, titluri `<h2>` și `<h3>` în ordine bună  
- [ ] Are paragrafe, o linie `<hr>` și o poezie cu `<br>`  
- [ ] Ai răspuns la exercițiile B–E  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Scrie o pagină cu **regulile jocului tău preferat**, cu titluri și paragrafe  
- [ ] Încearcă și `<h5>` și `<h6>` într-o pagină cu cuprins de 4 niveluri  
- [ ] Scrie în pagină, ca text, tagurile `<h1>` și `</h1>`, folosind `&lt;` și `&gt;`  
- [ ] Deschide DevTools cu **F12**, fila **Elements**, și caută titlurile paginii tale  

---

## Greșeli frecvente
1. **`<h2>` se închide cu `</h3>`** — numărul trebuie să fie același.  
2. **Mai multe `<h1>` pe aceeași pagină** — folosește un singur `h1`, apoi `h2`.  
3. **Sari de la `h2` la `h5`** — merge pe rând: `h1`, `h2`, `h3`.  
4. **Ai folosit titlul doar ca să arate mare** — alege titlul după importanță, nu după mărime.  
5. **Ai crezut că Enter face rând nou** — folosește `<br>` sau un `<p>` nou.  
6. **Ai uitat `</p>`** — paragraful rămâne deschis și poate încurca ce urmează.  
7. **Ai uitat `;` la `&lt;`** — codurile speciale se termină cu punct și virgulă.  

---

## Recapitulare pe scurt
1. Titlurile merg de la `h1` (cel mai important) la `h6`.  
2. O pagină are, de obicei, **un singur `h1`**.  
3. Titlurile se așază ca un **cuprins**, în ordine, fără sărituri.  
4. `<p>` face paragrafe; spațiile și Enter-urile în plus se ignoră.  
5. `<br>` rupe rândul; `<hr>` trasează o linie.  
6. Pentru `<`, `>` și `&` în text scrii `&lt;`, `&gt;`, `&amp;`.

## Quiz scurt
- Care titlu este cel mai mare?  
- Câte `h1` pui de obicei într-o pagină?  
- Ce face `<br>`?  
- Cum scrii în pagină semnul `<`?  
- Unde pui mai multe idei diferite: în același paragraf sau în paragrafe noi?

## Temă
Fă o pagină `index.html` despre **un loc unde ai fost în vacanță** (sau pe care ai vrea să îl vezi): un `<h1>`, cel puțin trei titluri `<h2>`, paragrafe sub ele și o linie `<hr>`. Pune pagina în folderul `Prenume_Nume_W1_L3`.

## Ce urmează — Lecția 4
Învățăm să facem textul **îngroșat** și **înclinat** și să scriem **liste** cu buline și cu numere, ca într-o rețetă sau într-un top 5.

---

## Răspunsuri pentru profesor
- **Quiz scurt:** (1) `h1`; (2) de obicei unul singur; (3) rupe rândul, dar rămâi în același paragraf (nu are tag de închidere); (4) `&lt;`; (5) în paragrafe noi, câte un `<p>` pentru fiecare idee.  
- **Dacă ritmul clasei este lent:** Exemplul 9 (semnele speciale `<` și `>`) este opțional; îl puteți face doar cu grupele rapide.  
- **Exercițiul B:** `Sporturile mele (h1)`, `Sporturi de echipă (h2)`, `Fotbal în echipă (h3)`, `Antrenamentul de luni (h4)`.  
- **Exercițiul C:** (1) `<br>`; (2) `<p>` nou; (3) `<br>`.  
- **Exercițiul D:** (1) `h4` ar trebui să fie `h2` (nu se sare peste niveluri); (2) lipsește `</p>` după „doarme mult.”; (3) al doilea `<h1>` — pagina are un singur `h1` (se poate înlocui cu `<h2>`).  
- **Exercițiul E:** titlul se alege după importanță, nu după mărime; programele care citesc pagina cu voce tare și cei care o parcurg repede se orientează după titluri; mărimea se schimbă cu CSS.
