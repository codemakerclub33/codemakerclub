# LECȚIA 6 — Imagini și foldere
**Modulul 1 · HTML I: Prima mea pagină · 2 ore**  
**Code Maker Club · HTML Starter**

> Până acum paginile tale au avut doar text. Azi le dai culoare: înveți să pui **imagini** în pagină, să le ții în **foldere** ordonate și să le scrii **descrieri**, ca să le înțeleagă toată lumea!  
> Proiect: **„Galeria animalului meu preferat”** · folder: `Prenume_Nume_W1_L6` (ex. `Ana_Pop_W1_L6`)

---

## Obiectiv
La finalul orei știi să pui o imagine cu `<img>`, să scrii textul alternativ `alt`, să ții pozele într-un folder `imagini`, să alegi mărimea imaginii, să faci o imagine cu legendă (`<figure>`) și o imagine pe care se poate apăsa (link).  
**Minim:** o pagină cu trei imagini din folderul `imagini`, fiecare cu text `alt`.  
**Ținta orei (Complet):** + o legendă sub fiecare imagine, o imagine care e și link și imaginile micșorate cu `width`.

## De ce contează
Imaginile fac o pagină vie și te ajută să povestești mai bine. Dar o pagină cu imagini care **nu se văd** (din cauza unei greșeli de adresă) arată urât. Azi înveți cum se găsesc fișierele, o lecție pe care o vei folosi la toate site-urile tale.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pregătim pozele și folderele |
| 15–40 | Prima imagine · textul `alt` (**Exemplele 1–2**) |
| 40–60 | Folderul `imagini` · mărimea imaginii (**Exemplele 3–4**) |
| 60–80 | Formate și greutatea pozelor (**Exemplele 5–6**) |
| 80–100 | Legendă și imagine-link (**Exemplele 7–8**) |
| 100–115 | Imagini din internet · mini-proiect (**Exemplele 9–10**) |
| 115–120 | Recap și temă |

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

### Exemplul 6 — Mărimea fișierului

O poză făcută cu telefonul poate avea **5 sau 10 MB**. Pe o pagină cu multe astfel de poze, totul se încarcă încet. Pentru pagina ta:
- alege imagini **sub 500 KB** fiecare (profesorul te ajută să le micșorezi);  
- dă imaginilor nume **scurte, cu litere mici, fără spații și fără diacritice**: `pisica1.jpg`, nu `Poză Pisică Foarte Frumoasă.JPG`.

> Numele din `src` trebuie să fie **exact** ca numele fișierului, inclusiv terminația. Dacă fișierul e `pisica1.jpg`, `src="pisica1.png"` nu merge.

**Încearcă tu (4 min)**  
- [ ] Verifică pe calculator cât de mari sunt pozele tale (click dreapta, Properties / Get Info)  
- [ ] Redenumește o poză cu un nume bun și schimbă în `src` ca imaginea să se vadă din nou  

---

## 5. Legende și imagini-link

### Exemplul 7 — Imagine cu legendă: `<figure>` și `<figcaption>`

```html
<figure>
  <img src="imagini/pisica2.jpg" alt="Pisica Mițu pe covor" width="300">
  <figcaption>Mițu se joacă pe covor.</figcaption>
</figure>
```

- `<figure>` („figură”) înfășoară imaginea și legenda ei.  
- `<figcaption>` („legenda figurii”) este textul care se vede **sub** imagine.  

Legenda se vede de toți; textul `alt` îl vede doar cine nu vede imaginea. Scrie ambele texte.

### Exemplul 8 — Imagine pe care se poate apăsa

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

## 6. Imagini din internet și mini-proiect

### Exemplul 9 — Imaginea cu adresă din internet

```html
<img src="https://exemplu.ro/poze/pisica.jpg" alt="Pisică" width="300">
```

(Adresa e doar un exemplu: nu duce nicăieri.) Un `src` poate fi și adresa completă a unei imagini de pe un alt site. Nu e recomandat, din două motive:
1. Imaginea poate **dispărea** oricând, dacă cel care o ține o șterge.  
2. Poate fi **protejată**: nu ai voie să o folosești fără acordul celui care a făcut imaginea.  

De aceea, imaginile paginilor tale le **ții în folderul tău**, iar pe cele din internet le folosești doar dacă ele sunt libere și le alegi cu profesorul.

### Exemplul 10 — „Galeria animalului meu preferat”

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Galeria pisicii Mițu</title>
</head>
<body>
  <h1>Galeria pisicii Mițu</h1>
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

Galeria ta e despre **animalul tău**: schimbă titlurile, legendele și textele `alt`.

**Gata când:**  
- [ ] Ai trei imagini în folderul `imagini`, fiecare cu `alt` și legendă  
- [ ] Toate imaginile se văd în pagină  

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Galeria animalului meu preferat” (obligatoriu)
Pe scheletul complet, scrie:
- un `<h1>` cu titlul galeriei și un paragraf de prezentare,
- **trei** imagini din folderul `imagini`, fiecare cu `alt` bun, `width` și legendă (`<figure>`),
- un titlu `<h2>` pentru fiecare imagine,
- **o imagine care e și link**.

Verifică totul cu Live Server.

### Exercițiul B — Găsește drumul
Folderul tău arată așa:

```text
site/
├── index.html
├── imagini/
│   └── pisica.jpg
└── pagini/
    └── galerie.html
```

Ce scrii în `src` pentru imaginea `pisica.jpg`: (1) în `index.html`? (2) în `galerie.html`?

### Exercițiul C — Scrie textul `alt`
Scrie un text `alt` bun pentru fiecare imagine: (1) o poză cu un câine care aleargă prin zăpadă; (2) un desen cu un soare zâmbăreț deasupra unei case; (3) o poză cu tortul tău de ziua ta.

### Exercițiul D — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```text
<img src="poza.jpg">
<img src="imagini\pisica.jpg" alt="Pisica">
<img src="imagini/caine.jpg" alt="Câinele meu"></img>
```

### Exercițiul E — Explică cu cuvintele tale
Pe foaie: la ce folosește textul `alt` și de ce nu scriem doar „poza” în el?

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W1_L6` are `index.html` și folderul `imagini`  
- [ ] Ai trei imagini cu `alt` bun, legendă și lățime  
- [ ] Ai o imagine care e și link  
- [ ] Ai răspuns la exercițiile B–E  

---

## Bonus / Provocare (dacă ai terminat)
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
Fă o pagină `index.html` cu **o galerie de 4 imagini** despre ceva ce iubești (un joc, un loc, un sport): fiecare cu `alt`, legendă și o poveste scurtă în paragraf. Pune imaginile într-un folder `imagini` în folderul `Prenume_Nume_W1_L6`.

## Ce urmează — Lecția 7
Facem paginile **colorate**: învățăm să schimbăm culoarea textului și a fundalului, primul pas spre aspectul pe care îl vei controla complet în Modulul 3.

---

## Răspunsuri pentru profesor
- **Quiz scurt:** (1) `src`; (2) textul `alt` spune în cuvinte ce se vede: apare dacă imaginea nu se încarcă și este citit cu voce tare pentru cei care nu văd imaginea; (3) `src="imagini/pisica1.jpg"` (folderul, apoi `/`, apoi numele fișierului); (4) nu, `<img>` este tag singur (nu scrii `</img>`); (5) `.png`.  
- **Exercițiul B:** (1) `imagini/pisica.jpg`; (2) `../imagini/pisica.jpg`.  
- **Exercițiul C:** exemple: (1) „Un câine alb aleargă prin zăpadă”; (2) „Desen cu un soare zâmbăreț deasupra unei case”; (3) „Tort de ziua mea, cu zece lumânări”.  
- **Exercițiul D:** (1) lipsește `alt`; (2) `\` în loc de `/`; (3) `</img>` nu există, `img` e tag singur.  
- **Exercițiul E:** `alt` apare dacă imaginea nu se încarcă, e citit de cei care nu văd imaginea și ajută căutarea; „poza” nu spune ce se vede.
