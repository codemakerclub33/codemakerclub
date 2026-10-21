# LECȚIA 7 — iframe: hartă și video
**Modulul 2 · HTML II: Pagini mai bogate · 2 ore**  
**Code Maker Club · HTML Builder**

> Cum pui într-o pagină **o hartă** sau **un film** care stă pe alt site? Cu un „geam” prin care se vede o altă pagină. Se numește **iframe**.  
> Proiect: **„Excursia mea imaginară”** · folder: `Prenume_Nume_W2_L7` (ex. `Ana_Pop_W2_L7`)

---

## Obiectiv
La finalul orei știi să pui o altă pagină în pagina ta cu `<iframe>`, să alegi mărimea paginii încorporate, să scrii un `title`, să adaugi o hartă și un film dintr-un alt site, să știi de ce uneori „geamul” rămâne gol și să folosești iframe-urile cu grijă.  
**Minim:** o pagină cu un `<iframe>` către o altă pagină a ta și unul către o hartă.  
**Ținta orei (Complet):** + un film încorporat (cu profesorul), `loading="lazy"`, titlu pentru fiecare iframe și o listă de reguli de siguranță scrisă de tine.

## De ce contează
Multe site-uri au hărți și filme care nu sunt făcute de ele, ci „încorporate” din alt loc. Dacă ai înțeles iframe, poți face și tu asta, dar trebuie să știi **ce pui în pagină**: iframe arată un alt site în interiorul paginii tale.

---

## Siguranță cu iframe
Un iframe nu e doar o imagine: este **o pagină întreagă** din alt loc. De aceea:
- punem în iframe **doar site-uri alese împreună cu profesorul** (hărți sau filme verificate);  
- nu punem **hărți cu adresa casei sau a școlii noastre**, ci locuri publice (un parc, un muzeu, o grădină zoologică);  
- nu copiem coduri de „încorporare” de pe site-uri necunoscute.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul |
| 15–35 | Primul iframe: propria pagină (**Exemplele 1–3**) |
| 35–60 | O hartă (**Exemplele 4–5**) |
| 60–80 | Un film încorporat (**Exemplul 6**) |
| 80–95 | `loading="lazy"` · când iframe rămâne gol (**Exemplele 7–8**) |
| 95–115 | Siguranță · proiect (**Exemplele 9–10**) |
| 115–120 | Recap și temă |

---

## 1. Recapitulare rapidă

- `<audio>` și `<video>` pun sunete și filme din fișierele tale, cu `controls`.  
- Fișierele stau în foldere și se leagă prin `src`.  
- Folosim doar materiale permise.  
- Nu punem date personale în pagini.

**Încearcă tu (4 min)**  
- [ ] Creează folderul `Prenume_Nume_W2_L7` și fișierul `index.html` cu scheletul complet  
- [ ] Creează în același folder și `despre.html`, cu scheletul complet, un `<h1>` și un paragraf scurt  

> De aici înainte, exemplele arată doar ce scrii **în interiorul `<body>`**.

---

## 2. Primul iframe

### Exemplul 1 — O pagină în altă pagină

```html
<h1>Pagina mea principală</h1>

<iframe src="despre.html" width="500" height="200" title="Pagina despre mine"></iframe>
```

- `<iframe>` („cadru în interiorul paginii”) arată în pagina ta altă pagină;  
- `src` este adresa paginii (aici, o pagină din același folder, ca la linkuri);  
- `width` și `height` sunt lățimea și înălțimea „geamului”, în pixeli;  
- `title` spune în cuvinte **ce se vede în geam**, la fel cum `alt` spune ce se vede în imagine;  
- `<iframe>` are tag de închidere.

### Exemplul 2 — De ce scriem `title`

Un cititor de ecran citește `title`-ul și vizitatorul știe ce urmează: „Pagina despre mine”. Fără `title`, ar auzi doar „cadru”. Scrie mereu un `title` care descrie conținutul, nu doar „iframe”.

### Exemplul 3 — Ramă în jurul geamului

Implicit, browserul desenează o ramă subțire. Poți schimba rama cu `style`:

```html
<iframe src="despre.html" width="500" height="200" title="Pagina despre mine"
        style="border: 3px solid tomato;"></iframe>
```

Pentru fără ramă: `style="border: none;"`. Culoarea și grosimea le alegi ca la tabel.

**Gata când:**  
- [ ] Ai pus în `index.html` un iframe către `despre.html`  
- [ ] Iframe-ul are `width`, `height` și `title`  
- [ ] Ai schimbat rama cu `style`  

---

## 3. O hartă

### Exemplul 4 — Harta unui oraș

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

### Exemplul 5 — Harta unui loc public

Cum alegi un loc? Cu profesorul:
1. deschide `openstreetmap.org` și caută un **loc public** (un parc, un muzeu, grădina zoologică);  
2. apasă pe butonul de partajare („Share” sau „Distribuie”) și caută opțiunea de încorporare „HTML”;  
3. copiază codul `<iframe …>` și pune codul în pagina ta;  
4. scrie un `title` bun și verifică în Live Server.

Dacă nu vezi opțiunea, alege un loc din exemplu și schimbă doar `title`.

> **Nu pune harta casei tale sau a școlii.** Harta arată oricui exact unde este locul.

**Încearcă tu (8 min)**  
- [ ] Pune în pagina ta harta din Exemplul 4 cu un `title` potrivit  
- [ ] Alege împreună cu profesorul un loc public și pune harta lui în pagină  
- [ ] Verifică în Live Server că harta se vede  

---

## 4. Un film încorporat

### Exemplul 6 — Filmul dintr-un alt site

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

**Filmul îl alege profesorul** (un film potrivit pentru copii, de la un canal verificat). Înlocuiește `ID_VIDEO` cu al lui și scrie un `title` care spune ce film este.

**Gata când:**  
- [ ] Ai o hartă și un film încorporate în aceeași pagină (cu filmul ales de profesor)  
- [ ] Fiecare iframe are `title` care descrie conținutul  
- [ ] Poți explica de ce nu punem harta casei  

---

## 5. Probleme, siguranță și proiect

### Exemplul 7 — `loading="lazy"`

```html
<iframe src="https://www.openstreetmap.org/export/embed.html?bbox=26.07%2C44.42%2C26.12%2C44.45&layer=mapnik"
        width="500" height="300" title="Harta centrului orașului București"
        loading="lazy"></iframe>
```

`loading="lazy"` („încărcare leneșă”) face browserul să încarce iframe-ul **doar când ajungi cu pagina lângă el**. Pagina se deschide mai repede, mai ales dacă ai mai multe hărți sau filme.

### Exemplul 8 — Când geamul rămâne gol

Uneori iframe-ul arată doar un spațiu gol sau mesajul „refused to connect” („a refuzat conexiunea”). Cauze frecvente:
- **site-ul nu permite** să fie arătat în alte pagini (multe site-uri interzic asta, din siguranță);  
- ai greșit adresa din `src`;  
- nu ai internet;  
- pentru propriile pagini: ai greșit numele fișierului.

Nu este vina ta când un site refuză. Alege alt site sau ia codul de „încorporare” oficial, dacă există.

### Exemplul 9 — Reguli de siguranță

Scrie pe foaie cu cuvintele tale 5 reguli pentru folosirea iframe-urilor. Câteva idei:
1. Folosesc doar site-uri alese cu profesorul.  
2. Nu pun hărți cu casa sau școala mea.  
3. Nu copiez coduri de „încorporare” din locuri necunoscute.  
4. Scriu mereu un `title`.  
5. Verific pagina înainte să o arăt altora.

### Exemplul 10 — „Excursia mea imaginară”

```html
<h1>Excursia mea imaginară</h1>

<h2>Unde mergem?</h2>
<p>Vizităm un loc public, de exemplu o grădină zoologică sau un muzeu.</p>

<h2>Harta</h2>
<iframe src="https://www.openstreetmap.org/export/embed.html?bbox=26.07%2C44.42%2C26.12%2C44.45&layer=mapnik"
        width="500" height="300" title="Harta locului pe care îl vizităm"
        loading="lazy"></iframe>

<h2>Ce vedem acolo</h2>
<ul>
  <li>animale</li>
  <li>pavilioane</li>
  <li>o plimbare lungă</li>
</ul>

<h2>Pagina mea despre mine</h2>
<iframe src="despre.html" width="500" height="200"
        title="Pagina mea despre mine" style="border: 3px solid teal;"></iframe>

<h2>Un film despre loc</h2>
<iframe src="https://www.youtube-nocookie.com/embed/ID_VIDEO"
        width="560" height="315" title="Film despre locul vizitat"
        loading="lazy" allowfullscreen></iframe>
```

Înlocuiește conținutul cu locul ales de tine. Înlocuiește `ID_VIDEO` cu al filmului ales de profesor. Dacă nu ai un film, poți lăsa doar harta.

**Gata când:**  
- [ ] Pagina excursiei are un titlu, o hartă și o listă  
- [ ] Ai un film încorporat (sau o explicație pe foaie de ce nu ai pus filmul)  
- [ ] Ai scris pe foaie cele 5 reguli de siguranță  

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Excursia mea imaginară” (obligatoriu)
Fă pagina din Exemplul 10 pentru **un loc public ales de tine**, cu:
- un `<h1>`, titluri `<h2>` și o listă;  
- un iframe cu hartă (cu `title`, `loading="lazy"`);  
- un iframe către propria pagină (`despre.html`) cu `title` și ramă colorată;  
- un iframe cu film (dacă profesorul alege unul) și `allowfullscreen`.

### Exercițiul B — Ce face atributul?
Spune ce face fiecare: (1) `src`; (2) `title`; (3) `loading="lazy"`; (4) `allowfullscreen`.

### Exercițiul C — Merge sau nu?
Spune, pentru fiecare, dacă este o idee bună: (1) harta casei tale; (2) o hartă a muzeului din orașul tău; (3) un iframe cu un site primit de la un străin; (4) un film ales de profesor.

### Exercițiul D — Găsește greșelile
Găsește **3 greșeli** și repară greșelile:

```text
<iframe src="despre.html" width="500" height="200"></iframe>
<iframe src="https://www.openstreetmap.org/export/embed.html?bbox=26.07%2C44.42%2C26.12%2C44.45&layer=mapnik"
        width=300 title="Harta"
<iframe src="https://exemplu.ro/film" title="iframe"></iframe>
```

### Exercițiul E — Explică cu cuvintele tale
Pe foaie: ce este un iframe? De ce nu punem în iframe orice site?

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W2_L7` conține `index.html` și `despre.html`  
- [ ] Toate iframe-urile au `title` care descrie conținutul  
- [ ] Nicio hartă nu arată casa sau școala ta  
- [ ] Codul este indentat și are comentarii  
- [ ] Ai răspuns la exercițiile B–E  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Pune în pagină iframe-uri către alte două pagini ale tale, cu rame diferite  
- [ ] Pune două hărți ale unor locuri publice, una lângă alta (cu profesorul)  
- [ ] Caută „HTML iframe sandbox” și citește cu profesorul ce face  
- [ ] Deschide DevTools, fila **Elements**, și găsește iframe-ul: vezi că în interior este o pagină întreagă  

---

## Greșeli frecvente
1. **Nu ai scris `title`** — cititorul de ecran nu știe ce urmează.  
2. **Ai uitat `</iframe>`**.  
3. **Ai pus o hartă cu casa sau școala ta**.  
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
6. Folosim doar site-uri alese cu profesorul.

## Quiz scurt
- Ce arată un iframe?  
- De ce scriem `title`?  
- Ce face `loading="lazy"`?  
- De ce uneori geamul iframe rămâne gol?  
- De ce nu punem harta casei noastre?

## Temă
Fă o pagină despre **un loc public preferat** (un parc, un muzeu, o plajă) cu o hartă încorporată, o listă cu ce se poate face acolo și o descriere. Salvează în `Prenume_Nume_W2_L7`.

## Ce urmează — Lecția 8
**Taguri cu înțeles**: `header`, `nav`, `main`, `footer` și celelalte, care spun ce este fiecare parte a paginii.

---

## Răspunsuri pentru profesor
- **Quiz scurt:** (1) o altă pagină întreagă, ca printr-un „geam” în pagina ta; (2) ca să descrie ce se vede în geam pentru cititorul de ecran, la fel ca `alt` la imagine; (3) încarcă iframe-ul doar când ajungi cu pagina lângă el, ca pagina să se deschidă mai repede; (4) site-ul nu permite să fie arătat în alte pagini, adresa din `src` este greșită, nu există internet sau numele fișierului propriu este greșit; (5) pentru că harta arată oricui exact unde este locul, deci punem doar locuri publice.  
- **Exercițiul B:** (1) adresa paginii; (2) descrie conținutul pentru cititorul de ecran; (3) încarcă iframe-ul doar când vizitatorul ajunge lângă el; (4) permite ecranul mare.  
- **Exercițiul C:** (1) nu; (2) da; (3) nu; (4) da.  
- **Exercițiul D:** (1) lipsește `title` la primul iframe; (2) al doilea iframe nu este închis cu `>` și `</iframe>`; (3) `title="iframe"` nu descrie conținutul (corect: de exemplu „Film despre animale”). Acceptați orice formulare apropiată.  
- **ID_VIDEO:** profesorul alege un film potrivit și dă elevilor ID-ul.  
- **Siguranță:** doar locuri publice; fără adrese personale.
