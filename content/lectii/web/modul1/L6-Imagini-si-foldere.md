# LECȚIA 6 — Colțul meu cu poze
### Imagini și foldere
**Modulul 1 · HTML I: Prima mea pagină · 2 ore**  
**Code Maker Club · HTML Starter**

> Până acum paginile tale au avut doar text. Azi le dai culoare: înveți să pui **imagini** în pagină, să le ții în **foldere** ordonate și să le scrii **descrieri**, ca să le înțeleagă toată lumea!  
> Proiect: **„Colțul meu cu poze”** · folder: `Prenume_Nume_W1_L6` (ex. `Ana_Pop_W1_L6`)

---

## Ce facem azi
La final ai **colțul tău cu poze**: o pagină cu trei imagini din folderul `imagini`, fiecare cu legendă și text `alt`, și una dintre ele e și link. Știi să pui o imagine cu `<img>`, să ții pozele în foldere ordonate și să le scrii descrieri, ca să le înțeleagă toată lumea. Imaginile fac o pagină vie, dar o imagine care **nu se vede** din cauza unei greșeli de adresă arată urât, de aceea azi înveți cum se găsesc fișierele.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pregătim pozele și folderele |
| 15–40 | Prima imagine · textul `alt` (**Exemplele 1–2**) |
| 40–65 | Folderul `imagini` · mărimea imaginii (**Exemplele 3–4**) |
| 65–80 | Formate de imagini (**Exemplul 5**) |
| 80–100 | Legendă și imagine-link (**Exemplele 6–7**) |
| 100–115 | Mini-proiect: colțul meu cu poze (**Exemplul 8**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `<img src="..." alt="...">` | Pune o imagine în pagină | `src` = unde e fișierul, `alt` = ce se vede |
| `src="imagini/poza.jpg"` | Drumul până la fișier | folderul, `/`, numele |
| `width="300"` | Lățimea imaginii, în pixeli | înălțimea se potrivește singură |
| `<figure>` și `<figcaption>` | Imagine cu legendă dedesubt | `<figcaption>Mițu doarme</figcaption>` |
| `<a>` în jurul unui `<img>` | Imagine pe care se poate apăsa | imaginea e link |

---

## 1. Recapitulare și pregătiri

Din lecția trecută ții minte că:
- un link este `<a href="adresa">text</a>`;
- pentru paginile tale scrii numele fișierului, iar `../` urcă un folder;
- numele de fișiere se scriu cu litere mici, fără spații și fără diacritice.

### Ce ne trebuie azi: imaginile
Ai nevoie de **3 imagini** ale **animalului tău preferat** (sau ale unui lucru care îți place): poze făcute de tine, desene fotografiate sau imaginile din **pachetul de poze** primit de la profesor. Pune imaginile într-un folder.

> **Despre imaginile din internet:** nu copia imaginile din orice loc. Multe sunt protejate și nu ai voie să le folosești în paginile tale. Alege imaginile **împreună cu profesorul** (există site-uri cu imagini libere) sau folosește **poze și desene făcute de tine**.  
> **Fără poze cu oameni** (nici cu tine, nici cu alții) într-o pagină pe care o vede altcineva, dacă nu are acordul părinților.

**Încearcă tu (4 min)**  
- [ ] Creează folderul `Prenume_Nume_W1_L6` și fișierul `index.html` cu scheletul scris de tine  
- [ ] Pune cele 3 imagini într-un folder `imagini` din interiorul folderului proiectului, cu nume simple (`pisica1.jpg`, `pisica2.jpg`, `pisica3.jpg`)  

> De aici înainte, exemplele arată doar ce scrii **în interiorul `<body>`**.

---

## 2. Prima imagine

### Exemplul 1 — Tagul `<img>`

Pune o imagine **în același folder** cu `index.html` (pentru acest exemplu, copiază imaginea și acolo) și scrie:

```html
<img src="pisica1.jpg" alt="O pisică gri care doarme pe canapea">
```

Tagul `<img>` („image”, adică „imagine”) are două atribute importante:

| Atribut | Ce spune | Exemplu |
|---------|----------|---------|
| `src` | **unde se află** fișierul imaginii (de la „source”, adică „sursă”) | `src="pisica1.jpg"` |
| `alt` | **ce se vede** în imagine, în cuvinte | `alt="O pisică gri care doarme"` |

`<img>` este un **tag singur**: nu are text în interior și nu are tag de închidere. (Nu scrii `</img>`.)

### Exemplul 2 — De ce scriem `alt`

Textul `alt` („alternativ”) are trei roluri:
1. Dacă imaginea **nu se încarcă** (adresă greșită sau internet slab), în loc de imagine apare textul.  
2. Cei care **nu pot vedea** imaginea (de exemplu copii cu probleme de vedere) ascultă textul citit cu voce tare.  
3. Ajută motoarele de căutare să înțeleagă imaginea.  

Compară:

```html
<img src="pisica1.jpg" alt="poza">
<img src="pisica1.jpg" alt="O pisică gri se joacă cu o minge roșie">
```

Al doilea text este mult mai bun: spune **ce vezi**, nu doar „poza”.

> Încearcă și o greșeală: scrie `src="pisica1.jpgg"` (cu un `g` în plus). Imaginea dispare și apare textul `alt`. Repară și imaginea revine.

**Gata când:**  
- [ ] O imagine se vede în pagină  
- [ ] Imaginea are un text `alt` care spune ce se vede în ea  

---

## 3. Foldere și mărimi

### Exemplul 3 — Folderul `imagini`

Când ai multe imagini, nu le mai pune toate lângă `index.html`. Fă un folder `imagini`:

```text
Prenume_Nume_W1_L6/
├── index.html
└── imagini/
    ├── pisica1.jpg
    ├── pisica2.jpg
    └── pisica3.jpg
```

În `src` scrii **drumul** până la fișier: mai întâi folderul, apoi `/`, apoi numele:

```html
<img src="imagini/pisica1.jpg" alt="O pisică gri care doarme pe canapea">
```

Dacă pagina ar fi **într-un alt folder** (de exemplu `pagini/galerie.html`), ai urca un folder cu `../`:

```html
<img src="../imagini/pisica1.jpg" alt="O pisică gri care doarme pe canapea">
```

La fel ca la linkuri: `/` pentru a intra într-un folder, `../` pentru a urca.

### Exemplul 4 — Mărimea imaginii

```html
<img src="imagini/pisica1.jpg" alt="O pisică gri care doarme pe canapea" width="300">
```

`width` este **lățimea**, în pixeli (puncte mici din care e făcut ecranul). Aici imaginea are lățimea de 300 de pixeli, iar înălțimea se potrivește **singură**, ca să nu se deformeze.

> Scrie doar `width`. Dacă scrii și `height` cu o valoare care nu se potrivește, imaginea se întinde urât (o pisică lungă și subțire!).

**Gata când:**  
- [ ] Imaginile sunt în folderul `imagini`, iar `src` începe cu `imagini/`  
- [ ] Ai încercat două lățimi diferite și ai văzut cum se schimbă imaginea  

---

## 4. Fișiere de imagini

### Exemplul 5 — Formate de imagini

Imaginile se salvează în formate diferite. Le recunoști după terminație:

| Format | Terminație | Când se folosește |
|--------|-----------|-------------------|
| **JPEG** | `.jpg` | poze (fotografii) |
| **PNG** | `.png` | desene, iconițe, imagini cu fundal transparent |
| **GIF** | `.gif` | imagini mici care se mișcă |
| **WebP** | `.webp` | poze și desene, mai mici decât JPEG |
| **SVG** | `.svg` | desene care se măresc fără să se strice |

Pentru paginile noastre vom folosi mai ales `.jpg` și `.png`.

**Încearcă tu (3 min)**  
- [ ] Verifică ce formate au pozele tale (`.jpg` sau `.png`) și cum se numesc fișierele  

---

## 5. Legende și imagini-link

### Exemplul 6 — Imagine cu legendă: `<figure>` și `<figcaption>`

```html
<figure>
  <img src="imagini/pisica2.jpg" alt="Pisica Mițu pe covor" width="300">
  <figcaption>Mițu se joacă pe covor.</figcaption>
</figure>
```

- `<figure>` („figură”) înfășoară imaginea și legenda ei.  
- `<figcaption>` („legenda figurii”) este textul care se vede **sub** imagine.  

Legenda se vede de toți; textul `alt` îl vede doar cine nu vede imaginea. Scrie ambele texte.

### Exemplul 7 — Imagine pe care se poate apăsa

Poți pune o imagine **în interiorul** unui link:

```html
<a href="https://www.wikipedia.org" target="_blank" rel="noopener noreferrer">
  <img src="imagini/pisica3.jpg" alt="Pisică. Apasă ca să afli mai multe despre pisici" width="200">
</a>
```

Acum, dacă apeși pe imagine, mergi la linkul din `href`. La fel cum ai pus text, poți pune imaginea între `<a>` și `</a>`.

**Încearcă tu (4 min)**  
- [ ] Pune o imagine cu legendă sub ea  
- [ ] Fă o imagine care e și link spre o altă pagină din folderul tău sau spre un site ales cu profesorul  

---

## 6. Mini-proiect

### Exemplul 8 — „Colțul meu cu poze”

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Colțul meu cu poze</title>
</head>
<body>
  <h1>Colțul meu cu poze</h1>
  <p>Mițu este pisica mea. Iată trei poze cu ea.</p>

  <h2>Mițu doarme</h2>
  <figure>
    <img src="imagini/pisica1.jpg" alt="O pisică gri care doarme pe canapea" width="300">
    <figcaption>După masă, Mițu doarme pe canapea.</figcaption>
  </figure>

  <h2>Mițu se joacă</h2>
  <figure>
    <img src="imagini/pisica2.jpg" alt="Pisica Mițu pe covor, cu o minge roșie" width="300">
    <figcaption>Mingea roșie este jucăria preferată.</figcaption>
  </figure>

  <h2>Mițu la geam</h2>
  <figure>
    <img src="imagini/pisica3.jpg" alt="Pisica Mițu la geam, privind păsările" width="300">
    <figcaption>Ce se vede pe geam? Păsărele!</figcaption>
  </figure>
</body>
</html>
```

Colțul tău cu poze poate fi despre orice îți place: un animal, un joc, un loc. Schimbă titlurile, legendele și textele `alt`.

**Gata când:**  
- [ ] Ai trei imagini în folderul `imagini`, fiecare cu `alt` și legendă  
- [ ] Toate imaginile se văd în pagină  

---

## De făcut azi — „Colțul meu cu poze”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | O pagină cu trei imagini din folderul `imagini`, fiecare cu text `alt` |
| **Complet** | Minim + o legendă sub fiecare imagine, o imagine care e și link și imaginile micșorate cu `width` |

### Pasul 1 — Minim
Pune trei imagini în folderul `imagini` și arată-le în `index.html`, fiecare cu text `alt` care spune ce se vede în ea.

- [ ] Folderul `Prenume_Nume_W1_L6` are `index.html` și folderul `imagini`  
- [ ] Toate cele trei imagini se văd în pagină  
- [ ] Fiecare imagine are un `alt` care spune ce se vede în ea  

### Pasul 2 — Complet
Completezi colțul cu poze:

- [ ] Ai un `<h1>` cu titlul colțului tău și un paragraf de prezentare  
- [ ] Fiecare imagine are `width` și o legendă (`<figure>`), sub un titlu `<h2>`  
- [ ] Una dintre imagini este și link  
- [ ] Folosești poze și desene făcute de tine sau alese cu profesorul  

---

## Bonus ★★★ — Provocare: Colțul meu cu poze, ediția mare
*Doar dacă ai terminat Complet.*

Faci colțul cu poze mai mare și mai ordonat.

- [ ] Adaugă o a patra imagine, un desen făcut de tine și fotografiat  
- [ ] Fă o a doua pagină `galerie.html` într-un folder `pagini` și pune imaginile cu `../imagini/...`  
- [ ] Greșește intenționat numele unei imagini, vezi textul `alt` și apoi repară  
- [ ] Deschide DevTools (**F12**), fila **Elements**, apasă pe o imagine și vezi atributele `src` și `alt`  

---

## Greșeli frecvente
1. **Imaginea nu se vede** — verifică `src`: numele fișierului, folderul și terminația trebuie să fie exacte.  
2. **Ai scris `\` în loc de `/`** — în adrese se scrie `/`.  
3. **Ai scris `</img>`** — `img` nu are tag de închidere.  
4. **Lipsește `alt`** — fiecare imagine trebuie să aibă text alternativ.  
5. **Ai scris `alt="poza"`** — descrie ce se vede: „O pisică gri care doarme”.  
6. **Imaginea e deformată** — ai pus `width` și `height` care nu se potrivesc; lasă doar `width`.  
7. **Ai majuscule, spații sau diacritice în numele pozei** — redenumește fișierul: `pisica1.jpg`.  
8. **Pozele sunt foarte mari** — pagina se încarcă încet; micșorează imaginile.  
9. **Ai folosit o poză din internet fără voie** — folosește poze ale tale sau imagini libere, alese cu profesorul.  

---

## Recapitulare pe scurt
1. Imaginea se pune cu `<img src="..." alt="...">`; `img` nu are închidere.  
2. `src` = unde e fișierul; `alt` = ce se vede, în cuvinte.  
3. Pozele stau în folderul `imagini`; `/` intră într-un folder, `../` urcă.  
4. `width` schimbă lățimea; înălțimea se potrivește singură.  
5. Formate: `.jpg` pentru poze, `.png` pentru desene.  
6. `<figure>` și `<figcaption>` pun o legendă sub imagine.  
7. O imagine în interiorul unui `<a>` devine link.

## Quiz scurt
- Ce atribut spune unde se află imaginea?  
- De ce scriem `alt`?  
- Cum scrii `src` pentru o imagine din folderul `imagini`?  
- Are `<img>` tag de închidere?  
- Ce format de imagine folosești pentru un desen cu fundal transparent?

## Temă
1. Fă o pagină `index.html` cu **o galerie de 4 imagini** despre ceva ce iubești (un joc, un loc, un sport): fiecare cu `alt`, legendă și o poveste scurtă în paragraf. Pune imaginile într-un folder `imagini` în folderul `Prenume_Nume_W1_L6`.  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — Mărimea fișierului.**

O poză făcută cu telefonul poate avea **5 sau 10 MB**. Pe o pagină cu multe astfel de poze, totul se încarcă încet. Pentru pagina ta:
- alege imagini **sub 500 KB** fiecare (profesorul te ajută să le micșorezi);  
- dă imaginilor nume **scurte, cu litere mici, fără spații și fără diacritice**: `pisica1.jpg`, nu `Poză Pisică Foarte Frumoasă.JPG`.

> Numele din `src` trebuie să fie **exact** ca numele fișierului, inclusiv terminația. Dacă fișierul e `pisica1.jpg`, `src="pisica1.png"` nu merge.

**Acasă 2 — Imaginea cu adresă din internet.**

```html
<img src="https://exemplu.ro/poze/pisica.jpg" alt="Pisică" width="300">
```

(Adresa e doar un exemplu: nu duce nicăieri.) Un `src` poate fi și adresa completă a unei imagini de pe un alt site. Nu e recomandat, din două motive:
1. Imaginea poate **dispărea** oricând, dacă cel care o ține o șterge.  
2. Poate fi **protejată**: nu ai voie să o folosești fără acordul celui care a făcut imaginea.  

De aceea, imaginile paginilor tale le **ții în folderul tău**, iar pe cele din internet le folosești doar dacă ele sunt libere și le alegi cu profesorul.

4. **Încă patru exerciții (B–E):**

**B — Găsește drumul.** Folderul tău arată așa:

```text
site/
├── index.html
├── imagini/
│   └── pisica.jpg
└── pagini/
    └── galerie.html
```

Ce scrii în `src` pentru imaginea `pisica.jpg`: (1) în `index.html`? (2) în `galerie.html`?

**C — Scrie textul `alt`.** Scrie un text `alt` bun pentru fiecare imagine: (1) o poză cu un câine care aleargă prin zăpadă; (2) un desen cu un soare zâmbăreț deasupra unei case; (3) o poză cu tortul tău de ziua ta.

**D — Găsește greșelile.** Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```text
<img src="poza.jpg">
<img src="imagini\pisica.jpg" alt="Pisica">
<img src="imagini/caine.jpg" alt="Câinele meu"></img>
```

**E — Explică cu cuvintele tale.** Pe foaie: la ce folosește textul `alt` și de ce nu scriem doar „poza” în el?

## Ce urmează — Lecția 7
Facem paginile **colorate**: învățăm să schimbăm culoarea textului și a fundalului, primul pas spre aspectul pe care îl vei controla complet în Modulul 3.

---

## Răspunsuri
- **Quiz scurt:** (1) `src`; (2) textul `alt` spune în cuvinte ce se vede: apare dacă imaginea nu se încarcă și este citit cu voce tare pentru cei care nu văd imaginea; (3) `src="imagini/pisica1.jpg"` (folderul, apoi `/`, apoi numele fișierului); (4) nu, `<img>` este tag singur (nu scrii `</img>`); (5) `.png`.  
- **Tema, exercițiul B:** (1) `imagini/pisica.jpg`; (2) `../imagini/pisica.jpg`.  
- **Tema, exercițiul C:** exemple: (1) „Un câine alb aleargă prin zăpadă”; (2) „Desen cu un soare zâmbăreț deasupra unei case”; (3) „Tort de ziua mea, cu zece lumânări”.  
- **Tema, exercițiul D:** (1) lipsește `alt`; (2) `\` în loc de `/`; (3) `</img>` nu există, `img` e tag singur.  
- **Tema, exercițiul E:** `alt` apare dacă imaginea nu se încarcă, e citit de cei care nu văd imaginea și ajută căutarea; „poza” nu spune ce se vede.
