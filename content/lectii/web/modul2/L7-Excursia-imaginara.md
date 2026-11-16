# LECȚIA 7 — Excursia imaginară
### `iframe`: hartă și video
**Modulul 2 · HTML II: Pagini mai bogate · 2 ore**  
**Code Maker Club · HTML Builder**

> Cum pui într-o pagină **o hartă** sau **un film** care stă pe alt site? Cu un „geam” prin care se vede o altă pagină. Se numește **iframe**. Cu el îți faci o excursie imaginară într-un oraș, fără să pleci de acasă.  
> Proiect: **„Excursia imaginară”** · folder: `Prenume_Nume_W2_L7` (ex. `Ana_Pop_W2_L7`)

---

## Ce facem azi
La final ai o pagină de **excursie într-un oraș**: o hartă a unui loc public, o listă cu ce vedem acolo, o altă pagină a ta într-un „geam” și, dacă adultul alege un film, un film încorporat. Știi să pui o altă pagină în pagina ta cu `<iframe>`, să alegi mărimea paginii încorporate, să scrii un `title`, să știi de ce uneori „geamul” rămâne gol și să folosești iframe-urile cu grijă. Multe site-uri au hărți și filme care nu sunt făcute de ele, ci „încorporate” din alt loc; azi faci și tu asta.

> **Siguranță cu iframe:** un iframe nu e doar o imagine, ci **o pagină întreagă** din alt loc. De aceea punem doar site-uri **alese împreună cu un adult** (hărți sau filme verificate). Nu punem hărți cu **adresa casei noastre**, ci locuri publice (un parc, un muzeu, o piață). Nu copiem coduri de „încorporare” de pe site-uri necunoscute.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul |
| 15–35 | Primul iframe: propria pagină (**Exemplele 1–2**) |
| 35–60 | O hartă (**Exemplele 3–4**) |
| 60–80 | Un film încorporat (**Exemplul 5**) |
| 80–95 | `loading="lazy"` · când iframe rămâne gol (**Exemplele 6–7**) |
| 95–115 | Mini-proiect: excursia imaginară (**Exemplul 8**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `<iframe>` | Arată o altă pagină în pagina ta | `<iframe src="despre.html"></iframe>` |
| `width` și `height` | Mărimea „geamului”, în pixeli | `width="500" height="300"` |
| `title` | Spune în cuvinte ce se vede în geam | `title="Harta orașului"` |
| `loading="lazy"` | Încarcă geamul doar când ajungi lângă el | `loading="lazy"` |
| `allowfullscreen` | Permite ecranul mare la film | `<iframe ... allowfullscreen>` |

---

## 1. Recapitulare rapidă

- `<audio>` și `<video>` pun sunete și filme din fișierele tale, cu `controls`.  
- Fișierele stau în foldere și se leagă prin `src`.  
- Folosim doar materiale permise.  
- Nu punem date personale în pagini.

**Încearcă tu (4 min)**  
- [ ] Creează folderul `Prenume_Nume_W2_L7` și fișierul `index.html` cu scheletul complet  
- [ ] Creează în același folder și `despre.html`, cu scheletul complet, un `<h1>` și un paragraf scurt  

> De aici înainte, exemplele arată doar ce scrii **în interiorul `<body>`**, dacă nu spunem altfel.

---

## 2. Primul iframe

### Exemplul 1 — O pagină în altă pagină

```html
<h1>Pagina principală</h1>

<iframe src="despre.html" width="500" height="200" title="Pagina despre mine"></iframe>
```

- `<iframe>` („cadru în interiorul paginii”) arată în pagina ta altă pagină;  
- `src` este adresa paginii (aici, o pagină din același folder, ca la linkuri);  
- `width` și `height` sunt lățimea și înălțimea „geamului”, în pixeli;  
- `title` spune în cuvinte **ce se vede în geam**, la fel cum `alt` spune ce se vede în imagine;  
- `<iframe>` are tag de închidere.

Un cititor de ecran citește `title`-ul și vizitatorul știe ce urmează: „Pagina despre mine”. Fără `title`, ar auzi doar „cadru”. Scrie mereu un `title` care descrie conținutul, nu doar „iframe”.

### Exemplul 2 — Ramă în jurul geamului

Implicit, browserul desenează o ramă subțire. Poți schimba rama cu `style`:

```html
<iframe src="despre.html" width="500" height="200" title="Pagina despre mine"
        style="border: 3px solid tomato;"></iframe>
```

Pentru fără ramă: `style="border: none;"`. Culoarea și grosimea le alegi ca la tabel.

**Încearcă tu (5 min)**  
- [ ] Pune în `index.html` un iframe către `despre.html`, cu `width`, `height` și `title`  
- [ ] Schimbă rama cu `style`  

---

## 3. O hartă

### Exemplul 3 — Harta unui oraș

Site-ul OpenStreetMap, o hartă liberă, permite încorporarea hărților:

```html
<iframe
  src="https://www.openstreetmap.org/export/embed.html?bbox=26.07%2C44.42%2C26.12%2C44.45&layer=mapnik"
  width="500" height="300"
  title="Harta centrului orașului București"></iframe>
```

Adresa are două părți:
- `https://www.openstreetmap.org/export/embed.html` este pagina care desenează harta;  
- după `?` sunt **setările**: `bbox` arată **ce zonă** se vede, iar `layer=mapnik` este stilul hărții.

`bbox` are patru numere, în această ordine: **stânga, jos, dreapta, sus** (pe hartă, coordonate). Dacă le schimbi, harta se mută.

### Exemplul 4 — Harta unui loc public

Cum alegi un loc? Împreună cu un adult:
1. deschide `openstreetmap.org` și caută un **loc public** (un parc, un muzeu, o piață);  
2. apasă pe butonul de partajare („Share” sau „Distribuie”) și caută opțiunea de încorporare „HTML”;  
3. copiază codul `<iframe …>` și pune codul în pagina ta;  
4. scrie un `title` bun și verifică în Live Server.

Dacă nu vezi opțiunea, folosește harta din Exemplul 3 și schimbă doar `title`.

> **Nu pune harta casei tale.** Harta arată oricui exact unde este locul.

**Încearcă tu (8 min)**  
- [ ] Pune în pagina ta harta din Exemplul 3 cu un `title` potrivit  
- [ ] Alege împreună cu un adult un loc public și pune harta lui în pagină  
- [ ] Verifică în Live Server că harta se vede  

---

## 4. Un film încorporat

### Exemplul 5 — Filmul dintr-un alt site

Site-urile cu filme dau un cod de încorporare. Forma lui este:

```html
<iframe
  src="https://www.youtube-nocookie.com/embed/ID_VIDEO"
  width="560" height="315"
  title="Titlul filmului"
  allowfullscreen></iframe>
```

- `ID_VIDEO` este un șir de litere și cifre din adresa filmului. De exemplu, dacă adresa este `https://www.youtube.com/watch?v=ABC123`, `ID_VIDEO` este `ABC123`;  
- `allowfullscreen` permite ecranul mare;  
- `youtube-nocookie.com` este varianta care urmărește mai puțin vizitatorul.

**Filmul îl alege un adult** (un film potrivit pentru copii, de la un canal verificat). Înlocuiește `ID_VIDEO` cu al lui și scrie un `title` care spune ce film este.

**Încearcă tu (6 min)**  
- [ ] Pune un film încorporat (ales de un adult) în aceeași pagină cu harta  
- [ ] Verifică ca fiecare iframe să aibă `title` care descrie conținutul  

---

## 5. Probleme și siguranță

### Exemplul 6 — `loading="lazy"`

```html
<iframe src="https://www.openstreetmap.org/export/embed.html?bbox=26.07%2C44.42%2C26.12%2C44.45&layer=mapnik"
        width="500" height="300" title="Harta centrului orașului București"
        loading="lazy"></iframe>
```

`loading="lazy"` („încărcare leneșă”) face browserul să încarce iframe-ul **doar când ajungi cu pagina lângă el**. Pagina se deschide mai repede, mai ales dacă ai mai multe hărți sau filme.

### Exemplul 7 — Când geamul rămâne gol

Uneori iframe-ul arată doar un spațiu gol sau mesajul „refused to connect” („a refuzat conexiunea”). Cauze frecvente:
- **site-ul nu permite** să fie arătat în alte pagini (multe site-uri interzic asta, din siguranță);  
- ai greșit adresa din `src`;  
- nu ai internet;  
- pentru propriile pagini: ai greșit numele fișierului.

Nu este vina ta când un site refuză. Alege alt site sau ia codul de „încorporare” oficial, dacă există.

**Încearcă tu (4 min)**  
- [ ] Adaugă `loading="lazy"` la harta ta  
- [ ] Scrie într-un comentariu 5 reguli de siguranță pentru iframe-uri, cu cuvintele tale  

---

## 6. Mini-proiect

### Exemplul 8 — „Excursia imaginară”

Acesta este proiectul **complet**, cu tot scheletul paginii. Salvează-l în `index.html` și scrie-l singur, bucată cu bucată.

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Excursia imaginară</title>
</head>
<body>
  <h1>Excursia imaginară</h1>

  <h2>Unde mergem?</h2>
  <p>Vizităm un oraș și un loc public din el, de exemplu un muzeu sau un parc.</p>

  <h2>Harta</h2>
  <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=26.07%2C44.42%2C26.12%2C44.45&layer=mapnik"
          width="500" height="300" title="Harta locului pe care îl vizităm"
          loading="lazy"></iframe>

  <h2>Ce vedem acolo</h2>
  <ul>
    <li>un muzeu</li>
    <li>un parc</li>
    <li>o plimbare cu tramvaiul</li>
  </ul>

  <h2>Pagina despre mine</h2>
  <iframe src="despre.html" width="500" height="200"
          title="Pagina despre mine" style="border: 3px solid teal;"></iframe>

  <h2>Un film despre oraș</h2>
  <iframe src="https://www.youtube-nocookie.com/embed/ID_VIDEO"
          width="560" height="315" title="Film despre orașul vizitat"
          loading="lazy" allowfullscreen></iframe>
</body>
</html>
```

Înlocuiește conținutul cu orașul ales de tine. Înlocuiește `ID_VIDEO` cu al filmului ales de un adult. Dacă nu ai un film, poți lăsa doar harta.

---

## De făcut azi — „Excursia imaginară”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | O pagină cu un `<iframe>` către o altă pagină a ta și unul către o hartă |
| **Complet** | Minim + un film încorporat (ales de un adult), `loading="lazy"`, `title` la fiecare iframe și o listă de 5 reguli de siguranță scrisă de tine |

### Pasul 1 — Minim
Fă pagina pentru **un oraș ales de tine**, cu un loc public.

- [ ] Folderul `Prenume_Nume_W2_L7` conține `index.html` și `despre.html`  
- [ ] Ai un iframe către `despre.html`, cu `width`, `height` și `title`  
- [ ] Ai un iframe cu o hartă a unui loc public  

### Pasul 2 — Complet
Îmbunătățești pagina:

- [ ] Pagina are un `<h1>`, titluri `<h2>` și o listă  
- [ ] Ai un film încorporat (sau o explicație într-un comentariu de ce nu l-ai pus) și `allowfullscreen`  
- [ ] Toate iframe-urile au `title` și harta are `loading="lazy"`  
- [ ] Ai scris într-un comentariu 5 reguli de siguranță pentru iframe-uri  
- [ ] Codul este indentat și are comentarii  

---

## Bonus ★★★ — Provocare: Excursia în două locuri
*Doar dacă ai terminat Complet.*

- [ ] Pune în pagină iframe-uri către alte două pagini ale tale, cu rame diferite  
- [ ] Pune două hărți ale unor locuri publice, una lângă alta (împreună cu un adult)  
- [ ] Caută „HTML iframe sandbox” și citește împreună cu un adult ce face  
- [ ] Deschide DevTools, fila **Elements**, și găsește iframe-ul: vezi că în interior este o pagină întreagă  

---

## Greșeli frecvente
1. **Nu ai scris `title`** — cititorul de ecran nu știe ce urmează.  
2. **Ai uitat `</iframe>`**.  
3. **Ai pus o hartă cu casa ta**.  
4. **Ai încercat un site care nu permite iframe** — geamul rămâne gol.  
5. **Ai greșit adresa din `src`**.  
6. **Ai folosit dimensiuni foarte mici** — harta sau filmul nu se văd bine.  
7. **Ai copiat un cod de încorporare dintr-un loc necunoscut**.  
8. **Ai pus prea multe iframe-uri** — pagina se încarcă greu.  

---

## Recapitulare pe scurt
1. `<iframe src="..." width="..." height="..." title="...">` arată o altă pagină în pagina ta.  
2. `title` descrie ce se vede în geam.  
3. Hărțile și filmele se încorporează cu un cod dat de site.  
4. `loading="lazy"` încarcă iframe-ul doar când este nevoie.  
5. Unele site-uri nu permit să fie încorporate.  
6. Folosim doar site-uri alese împreună cu un adult.

## Quiz scurt
- Ce arată un iframe?  
- De ce scriem `title`?  
- Ce face `loading="lazy"`?  
- De ce uneori geamul iframe rămâne gol?  
- De ce nu punem harta casei noastre?

## Temă
1. Fă o pagină despre **un loc public preferat** dintr-un oraș (un parc, un muzeu, un stadion) cu o hartă încorporată, o listă cu ce se poate face acolo și o descriere. Salvează în `Prenume_Nume_W2_L7`.  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — Geam care se potrivește pe orice ecran.**

```html
<iframe src="despre.html" title="Pagina despre mine"
        style="width: 100%; max-width: 500px; height: 200px;"></iframe>
```

Cu `width: 100%` și `max-width: 500px`, geamul se micșorează pe un ecran mic și nu depășește 500 de pixeli pe unul mare.

**Acasă 2 — Un link sub hartă.**

```html
<p><a href="https://www.openstreetmap.org" target="_blank" rel="noopener noreferrer">Deschide harta mare</a></p>
```

Dacă geamul rămâne gol, vizitatorul are măcar un link către site.

4. **Încă patru exerciții (B–E):**

**B — Ce face atributul?** Spune ce face fiecare: (1) `src`; (2) `title`; (3) `loading="lazy"`; (4) `allowfullscreen`.

**C — Merge sau nu?** Spune, pentru fiecare, dacă este o idee bună: (1) harta casei tale; (2) o hartă a muzeului din orașul tău; (3) un iframe cu un site primit de la un străin; (4) un film ales de un adult.

**D — Găsește greșelile.** Găsește **3 greșeli** și repară greșelile:

```text
<iframe src="despre.html" width="500" height="200"></iframe>
<iframe src="https://www.openstreetmap.org/export/embed.html?bbox=26.07%2C44.42%2C26.12%2C44.45&layer=mapnik"
        width=300 title="Harta"
<iframe src="https://exemplu.ro/film" title="iframe"></iframe>
```

**E — Explică cu cuvintele tale.** Într-un comentariu din cod: ce este un iframe? De ce nu punem în iframe orice site?

## Ce urmează — Lecția 8
**Casa cu camere**: `header`, `nav`, `main`, `footer` și celelalte taguri care spun ce este fiecare parte a paginii.

---

## Răspunsuri
- **Quiz scurt:** (1) o altă pagină întreagă, ca printr-un „geam” în pagina ta; (2) ca să descrie ce se vede în geam pentru cititorul de ecran, la fel ca `alt` la imagine; (3) încarcă iframe-ul doar când ajungi cu pagina lângă el, ca pagina să se deschidă mai repede; (4) site-ul nu permite să fie arătat în alte pagini, adresa din `src` este greșită, nu există internet sau numele fișierului propriu este greșit; (5) pentru că harta arată oricui exact unde este locul, deci punem doar locuri publice.  
- **Tema, exercițiul B:** (1) adresa paginii; (2) descrie conținutul pentru cititorul de ecran; (3) încarcă iframe-ul doar când vizitatorul ajunge lângă el; (4) permite ecranul mare.  
- **Tema, exercițiul C:** (1) nu; (2) da; (3) nu; (4) da.  
- **Tema, exercițiul D:** (1) lipsește `title` la primul iframe; (2) al doilea iframe nu este închis cu `>` și `</iframe>`; (3) `title="iframe"` nu descrie conținutul (corect: de exemplu „Film despre un oraș”). Acceptați orice formulare apropiată.  
- **ID_VIDEO:** un adult alege un film potrivit și dă ID-ul.  
- **Siguranță:** doar locuri publice; fără adrese personale.
