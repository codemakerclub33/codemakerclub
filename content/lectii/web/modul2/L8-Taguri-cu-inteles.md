# LECȚIA 8 — Taguri cu înțeles
**Modulul 2 · HTML II: Pagini mai bogate · 2 ore**  
**Code Maker Club · HTML Builder**

> Într-o casă, fiecare cameră are un nume: bucătărie, dormitor, baie. Într-o pagină web, fiecare parte poate avea și ea un nume: **antet**, **meniu**, **conținut**, **final**. Azi înveți **tagurile cu înțeles** care dau nume părților paginii.  
> Proiect: **„Pagina clubului meu, pe camere”** · folder: `Prenume_Nume_W2_L8` (ex. `Ana_Pop_W2_L8`)

---

## Obiectiv
La finalul orei știi să împarți o pagină în părți cu `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>` și `<footer>`, să explici ce face fiecare și să alegi tagul potrivit.  
**Minim:** o pagină cu `header`, `nav`, `main` și `footer`.  
**Ținta orei (Complet):** + cel puțin două `section`, un `article`, un `aside`, ordinea corectă a titlurilor și explicația pe foaie a diferenței dintre `<head>` și `<header>`.

## De ce contează
Aceste taguri **arată la fel** ca niște paragrafe obișnuite, dar au un înțeles:
- cititoarele de ecran (pentru cine nu vede) sar direct la meniu sau la conținut;  
- motoarele de căutare înțeleg mai bine pagina;  
- tu și colegii tăi vă orientați mai ușor în cod.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul |
| 15–35 | Harta paginii · `header` · `nav` (**Exemplele 1–3**) |
| 35–60 | `main` · `section` · `article` (**Exemplele 4–6**) |
| 60–75 | `aside` · `footer` (**Exemplele 7–8**) |
| 75–100 | Pagina completă (**Exemplul 9**) |
| 100–115 | Greșeli și alegerea tagului (**Exemplul 10**) |
| 115–120 | Recap și temă |

---

## 1. Recapitulare rapidă

- `<iframe>` arată o altă pagină în pagina ta și are mereu `title`.  
- `<h1>` este titlul principal; `<h2>`, `<h3>` sunt subtitluri.  
- `<ul>` și `<li>` fac liste.  
- Meniul este o linie de linkuri `<a>`.

**Încearcă tu (4 min)**  
- [ ] Creează folderul `Prenume_Nume_W2_L8` și fișierul `index.html` cu scheletul complet  
- [ ] Pune în `<body>` un `<h1>` „Clubul animalelor” și un paragraf scurt  

> De aici înainte, exemplele arată doar ce scrii **în interiorul `<body>`**.

---

## 2. Harta paginii

### Exemplul 1 — Părțile unei pagini

Majoritatea paginilor au aceleași părți:

```text
+--------------------------------------+
| header: titlul și sigla              |
| nav: meniul                          |
+--------------------------------------+
| main:                                |
|   section: o parte a conținutului    |
|   section: altă parte                |
|     article: o postare sau un card   |
|   aside: o notă pe lateral           |
+--------------------------------------+
| footer: finalul paginii              |
+--------------------------------------+
```

| Tag | Înseamnă | Ce conține |
|-----|----------|------------|
| `<header>` | antet | titlul paginii, sigla |
| `<nav>` | navigare | meniul de linkuri |
| `<main>` | conținut principal | tot ce este important în pagină |
| `<section>` | secțiune | o parte a conținutului, cu titlu |
| `<article>` | articol | ceva de sine stătător: o postare, un card |
| `<aside>` | lateral | o notă, o reclamă, un sfat |
| `<footer>` | subsol | finalul: cine a făcut pagina, anul |

### Exemplul 2 — `<header>`

```html
<header>
  <h1>Clubul animalelor</h1>
  <p>Aici învățăm să avem grijă de prietenii noștri cu blană.</p>
</header>
```

`<header>` este **partea de sus a paginii**. De obicei conține `<h1>` și un text scurt.

> **Nu este același lucru cu `<head>`!** `<head>` este din schelet și conține informații invizibile (`title`, `meta`). `<header>` este în `<body>` și se vede.

### Exemplul 3 — `<nav>`

```html
<nav>
  <ul>
    <li><a href="index.html">Acasă</a></li>
    <li><a href="animale.html">Animale</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</nav>
```

`<nav>` învelește **meniul principal**, adică linkurile spre părțile mari ale site-ului. Nu pui `<nav>` la orice grup de linkuri, ci doar la meniurile importante. Lista cu `<ul>` este bună pentru meniu, pentru că un meniu este o listă de linkuri.

**Gata când:**  
- [ ] Ai un `<header>` cu un `<h1>` și o propoziție  
- [ ] Ai un `<nav>` cu cel puțin trei linkuri într-o listă  
- [ ] Poți explica diferența dintre `<head>` și `<header>`  

---

## 3. Conținutul: `main`, `section`, `article`

### Exemplul 4 — `<main>`

```html
<main>
  <p>Aici este conținutul important al paginii.</p>
</main>
```

`<main>` conține **ce este important** în pagină. Într-o pagină există **un singur** `<main>`. Meniul și subsolul rămân în afara lui.

### Exemplul 5 — `<section>`

```html
<main>
  <section>
    <h2>Ce facem la club</h2>
    <p>Învățăm despre animale, desenăm și facem excursii.</p>
  </section>

  <section>
    <h2>Când ne întâlnim</h2>
    <p>În fiecare sâmbătă dimineață.</p>
  </section>
</main>
```

`<section>` este **o parte** a conținutului, în general cu un titlu `<h2>`. Imaginează capitolele unei cărți.

### Exemplul 6 — `<article>`

`<article>` este ceva care ar avea sens și **dacă ai scoate acel element din pagină**: o postare, o veste, un card cu un animal.

```html
<section>
  <h2>Animalele noastre</h2>

  <article>
    <h3>Pisica Mița</h3>
    <p>Doarme toată ziua și toarce când este mângâiată.</p>
  </article>

  <article>
    <h3>Cățelul Rex</h3>
    <p>Aleargă prin curte și aduce mingea.</p>
  </article>
</section>
```

Observă titlurile: `<h1>` în antet, `<h2>` pentru secțiune, `<h3>` pentru fiecare articol din ea. **Nu sări peste niveluri** (de la `<h2>` direct la `<h4>`).

> Cum alegi între `section` și `article`? Dacă partea este „un capitol”, folosești `section`. Dacă este „o postare sau un card de sine stătător”, folosești `article`.

**Încearcă tu (7 min)**  
- [ ] Pune în pagină un `<main>` cu două `<section>`, fiecare cu un `<h2>`  
- [ ] Într-una dintre secțiuni, pune două `<article>`, fiecare cu un `<h3>` și un paragraf  
- [ ] Verifică ordinea titlurilor: `h1` → `h2` → `h3`  

---

## 4. `aside` și `footer`

### Exemplul 7 — `<aside>`

```html
<aside>
  <h2>Știai că…</h2>
  <p>Pisicile dorm între 12 și 16 ore pe zi.</p>
</aside>
```

`<aside>` („lateral”) este o notă, un sfat sau o curiozitate, care **ar putea lipsi** fără ca pagina să își piardă sensul. Poate sta în `<main>`, lângă o secțiune, sau după `main`.

### Exemplul 8 — `<footer>`

```html
<footer>
  <p>Pagină făcută de Ana, în anul 2026.</p>
  <p><a href="index.html">Înapoi sus</a></p>
</footer>
```

`<footer>` este **finalul paginii**: cine a făcut pagina, anul, câteva linkuri. Nu pune în el adresa, telefonul sau numele complet.

**Gata când:**  
- [ ] Ai un `<aside>` cu o curiozitate  
- [ ] Ai un `<footer>` cu anul și prenumele tău (doar prenumele)  
- [ ] Meniul și subsolul sunt în afara lui `<main>`  

---

## 5. Pagina completă

### Exemplul 9 — „Pagina clubului meu, pe camere”

```html
<header>
  <h1>Clubul animalelor</h1>
  <p>Aici învățăm să avem grijă de prietenii noștri cu blană.</p>
</header>

<nav>
  <ul>
    <li><a href="index.html">Acasă</a></li>
    <li><a href="#animale">Animale</a></li>
    <li><a href="#intalniri">Întâlniri</a></li>
  </ul>
</nav>

<main>
  <section id="animale">
    <h2>Animalele noastre</h2>

    <article>
      <h3>Pisica Mița</h3>
      <p>Doarme toată ziua și toarce când este mângâiată.</p>
    </article>

    <article>
      <h3>Cățelul Rex</h3>
      <p>Aleargă prin curte și aduce mingea.</p>
    </article>
  </section>

  <section id="intalniri">
    <h2>Când ne întâlnim</h2>
    <p>În fiecare sâmbătă dimineață.</p>
  </section>

  <aside>
    <h2>Știai că…</h2>
    <p>Pisicile dorm între 12 și 16 ore pe zi.</p>
  </aside>
</main>

<footer>
  <p>Pagină făcută de Ana, în anul 2026.</p>
</footer>
```

Ce vezi în browser? **Aproape nimic nou**: textele arată simplu, ca niște paragrafe. Diferența este în **înțeles**, nu în aspect. Cu CSS (Modulul 3) vei da fiecărei părți aspect propriu.

Deschide DevTools (**F12**) → **Elements** și vezi cum tagurile cu înțeles formează un „arbore” al paginii.

### Exemplul 10 — Greșeli frecvente și alegerea tagului

```text
<main>...</main>
<main>...</main>
```

Două `<main>` într-o pagină: trebuie unul singur.

```text
<section>
  <p>Text fără titlu</p>
</section>
```

`<section>` fără titlu: o secțiune ar trebui să aibă un titlu (`h2`, `h3`…). Dacă nu are, folosește alt tag.

Ce tag alegi?

| Parte | Tag |
|-------|-----|
| Titlul paginii cu sigla | `header` |
| Meniul principal | `nav` |
| Un capitol cu titlu | `section` |
| O postare de sine stătătoare | `article` |
| „Știai că…” | `aside` |
| „Pagină făcută de…” | `footer` |

**Gata când:**  
- [ ] Ai făcut pagina completă cu `header`, `nav`, `main`, două `section`, un `article`, un `aside` și `footer`  
- [ ] Ai un singur `<main>` și un singur `<h1>`  
- [ ] Titlurile urmează ordinea `h1`, `h2`, `h3` fără să sară niveluri  

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Pagina clubului meu, pe camere” (obligatoriu)
Fă pagina unui **club imaginar** (animale, desen, fotbal, jocuri) cu:
- `<header>` cu `<h1>` și o propoziție;  
- `<nav>` cu minimum 3 linkuri într-o listă;  
- `<main>` cu minimum 2 `<section>` (fiecare cu `<h2>`);  
- cel puțin 2 `<article>` (fiecare cu `<h3>`);  
- un `<aside>` cu o curiozitate;  
- un `<footer>` cu prenumele tău și anul.

### Exercițiul B — Cum se numește?
Scrie tagul potrivit: (1) meniul principal; (2) finalul paginii; (3) conținutul principal; (4) o notă lateral; (5) partea de sus a paginii.

### Exercițiul C — Vechi versus nou
Un coleg a scris pagina doar cu `<p>` și `<h1>`. Scrie ce taguri cu înțeles ai recomanda colegului și unde.

### Exercițiul D — Găsește greșelile
Găsește **3 greșeli** și repară greșelile:

```text
<head>
  <h1>Clubul meu</h1>
</head>
<main>
  <h1>Despre club</h1>
  <section>
    <h4>Ce facem</h4>
  </section>
</main>
<main>
  <p>Altceva</p>
</main>
```

### Exercițiul E — Explică cu cuvintele tale
Pe foaie: de ce folosim taguri cu înțeles dacă pagina arată la fel? Care este diferența dintre `<head>` și `<header>`?

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W2_L8` conține `index.html` cu pagina pe camere  
- [ ] Toate tagurile cu înțeles sunt la locul lor, iar titlurile sunt în ordine  
- [ ] Codul este indentat și are comentarii pentru fiecare cameră  
- [ ] Ai răspuns la exercițiile B–E  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Adaugă în pagină `<figure>` cu o imagine și `<figcaption>`  
- [ ] Caută „HTML time” și pune data întâlnirii în `<time datetime="2026-10-17">`  
- [ ] Transformă un site din Modulul 1 în varianta cu taguri cu înțeles  
- [ ] Deschide DevTools și numără câte taguri cu înțeles are o pagină cunoscută (cu profesorul)  

---

## Greșeli frecvente
1. **Ai confundat `<head>` cu `<header>`**.  
2. **Ai pus două `<main>`** — trebuie unul singur.  
3. **Ai pus meniul sau subsolul în `<main>`** — rămân în afara lui.  
4. **Ai folosit `<section>` fără titlu**.  
5. **Ai sărit peste nivelurile de titluri** (de la `h2` la `h4`).  
6. **Ai pus `<nav>` la orice grup de linkuri** — doar la meniurile importante.  
7. **Ai folosit `<article>` pentru orice** — doar pentru ce poate sta singur.  
8. **Ai pus date personale în `<footer>`**.  

---

## Recapitulare pe scurt
1. `<header>`: partea de sus.  
2. `<nav>`: meniul principal.  
3. `<main>`: conținutul important (unul singur).  
4. `<section>`: un capitol cu titlu; `<article>`: ceva de sine stătător.  
5. `<aside>`: o notă laterală; `<footer>`: finalul paginii.  
6. Aspectul nu se schimbă, dar înțelesul este mai clar.  
7. Titlurile rămân în ordine.

## Quiz scurt
- Ce conține `<nav>`?  
- Câte `<main>` are o pagină?  
- Care este diferența dintre `section` și `article`?  
- Unde pui meniul: în `main` sau în afara lui?  
- Care este diferența dintre `<head>` și `<header>`?

## Temă
Transformă una dintre paginile tale din Modulul 1 (de exemplu „Pagina mea despre mine”) într-o pagină cu taguri cu înțeles: `header`, `nav`, `main`, `section` și `footer`. Salvează în `Prenume_Nume_W2_L8`.

## Ce urmează — Lecția 9
**div, span, id și class**: cutii și etichete cu nume, pentru părțile care nu au un tag cu înțeles.

---

## Răspunsuri pentru profesor
- **Quiz scurt:** (1) meniul principal, adică linkurile spre părțile mari ale site-ului (de obicei într-o listă); (2) unul singur; (3) `section` este un capitol cu titlu, `article` este ceva de sine stătător, ca o postare sau un card; (4) în afara lui `main`; (5) `<head>` este din schelet și conține informații invizibile (`title`, `meta`), iar `<header>` este antetul vizibil din `<body>`.  
- **Exercițiul B:** (1) `<nav>`; (2) `<footer>`; (3) `<main>`; (4) `<aside>`; (5) `<header>`.  
- **Exercițiul D:** (1) `<h1>` este în `<head>`, unde nu se vede: trebuie `<header>` în `<body>`; (2) titlul `<h4>` sare de la `h1` direct la `h4`: trebuie `<h2>`; (3) există două `<main>`: trebuie unul singur. Verificați să fie 3 greșeli distincte.  
- **Exercițiul E:** taguri cu înțeles ajută cititoarele de ecran, motoarele de căutare și programatorii; `head` conține informații invizibile, `header` este antetul vizibil.  
- **Exemplul 10:** al doilea `<main>` și `<section>` fără titlu.
