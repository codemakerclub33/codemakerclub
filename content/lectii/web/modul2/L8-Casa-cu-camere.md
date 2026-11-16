# LECȚIA 8 — Casa cu camere
### Taguri cu înțeles
**Modulul 2 · HTML II: Pagini mai bogate · 2 ore**  
**Code Maker Club · HTML Builder**

> Într-o casă, fiecare cameră are un nume: bucătărie, dormitor, baie. Într-o pagină web, fiecare parte poate avea și ea un nume: **antet**, **meniu**, **conținut**, **final**. Azi înveți **tagurile cu înțeles** care dau nume părților paginii.  
> Proiect: **„Pagina clubului sportiv”** · folder: `Prenume_Nume_W2_L8` (ex. `Ana_Pop_W2_L8`)

---

## Ce facem azi
La final ai pagina unui **club sportiv imaginar**, împărțită pe camere: antet, meniu, conținut cu secțiuni și articole, o notă laterală și un final. Știi să împarți o pagină cu `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>` și `<footer>`, să explici ce face fiecare și să alegi tagul potrivit. Aceste taguri **arată la fel** ca niște paragrafe obișnuite, dar au un înțeles: cititoarele de ecran (pentru cine nu vede) sar direct la meniu sau la conținut, motoarele de căutare înțeleg mai bine pagina, iar tu te orientezi mai ușor în cod.

> **Siguranță:** în `<footer>` scriem doar **prenumele** și anul, nu adresa, telefonul sau numele complet.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul · aducem pagina cu articolul de pe Wikipedia |
| 15–35 | Harta paginii · `header` · `nav` (**Exemplele 1–3**) |
| 35–65 | `main` · `section` · `article` (**Exemplele 4–5**) |
| 65–85 | `aside` · `footer` (**Exemplele 6–7**) |
| 85–115 | Mini-proiect: pagina clubului sportiv (**Exemplul 8**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `<header>` | Partea de sus a paginii | `<header><h1>Clubul Fulgerul</h1></header>` |
| `<nav>` | Meniul principal | `<nav><ul>...</ul></nav>` |
| `<main>` | Conținutul important (unul singur) | `<main> ... </main>` |
| `<section>` / `<article>` | Un capitol cu titlu / o postare de sine stătătoare | `<section><h2>Echipe</h2></section>` |
| `<aside>` | O notă laterală | `<aside><h2>Știai că…</h2></aside>` |
| `<footer>` | Finalul paginii | `<footer><p>Pagină făcută de Ana</p></footer>` |

---

## 1. Recapitulare rapidă

- `<iframe>` arată o altă pagină în pagina ta și are mereu `title`.  
- `<h1>` este titlul principal; `<h2>`, `<h3>` sunt subtitluri.  
- `<ul>` și `<li>` fac liste.  
- Meniul este o linie de linkuri `<a>`.

**Încearcă tu (8 min)**  
- [ ] Creează folderul `Prenume_Nume_W2_L8` și fișierul `index.html` cu scheletul complet  
- [ ] Pune în `<body>` un `<h1>` „Clubul Fulgerul” și un paragraf scurt  
- [ ] Copiază în folder pagina `tema.html` din lecția trecută, cu folderele `imagini` și `media`  
- [ ] Desenează într-un comentariu harta paginii: ce e antet, ce e meniu, ce e conținut, ce e notă laterală și ce e subsol  

> De aici înainte, exemplele arată doar ce scrii **în interiorul `<body>`**, dacă nu spunem altfel.

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
  <h1>Clubul Fulgerul</h1>
  <p>Aici ne antrenăm, ne jucăm și ne bucurăm de sport.</p>
</header>
```

`<header>` este **partea de sus a paginii**. De obicei conține `<h1>` și un text scurt.

> **Nu este același lucru cu `<head>`!** `<head>` este din schelet și conține informații invizibile (`title`, `meta`). `<header>` este în `<body>` și se vede.

### Exemplul 3 — `<nav>`

```html
<nav>
  <ul>
    <li><a href="index.html">Acasă</a></li>
    <li><a href="echipe.html">Echipe</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</nav>
```

`<nav>` învelește **meniul principal**, adică linkurile spre părțile mari ale site-ului. Nu pui `<nav>` la orice grup de linkuri, ci doar la meniurile importante. Lista cu `<ul>` este bună pentru meniu, pentru că un meniu este o listă de linkuri.

**Încearcă tu (10 min)**  
- [ ] Pune în pagină un `<header>` cu un `<h1>` și o propoziție  
- [ ] Adaugă un `<nav>` cu cel puțin trei linkuri într-o listă  
- [ ] Explică diferența dintre `<head>` și `<header>`  
- [ ] În `tema.html`, pune titlul articolului într-un `<header>`, iar sub el un `<nav>` cu linkuri `#` spre capitole  
- [ ] Pune `id` pe fiecare capitol, ca meniul să ducă la el  

---

## 3. Conținutul: `main`, `section`, `article`

### Exemplul 4 — `<main>` și `<section>`

```html
<main>
  <section>
    <h2>Ce facem la club</h2>
    <p>Ne antrenăm, jucăm meciuri și facem excursii.</p>
  </section>

  <section>
    <h2>Când ne întâlnim</h2>
    <p>În fiecare sâmbătă dimineață.</p>
  </section>
</main>
```

- `<main>` conține **ce este important** în pagină. Într-o pagină există **un singur** `<main>`. Meniul și subsolul rămân în afara lui.  
- `<section>` este **o parte** a conținutului, în general cu un titlu `<h2>`. Imaginează capitolele unei cărți.

### Exemplul 5 — `<article>`

`<article>` este ceva care ar avea sens și **dacă ai scoate acel element din pagină**: o postare, o veste, un card cu o echipă.

```html
<section>
  <h2>Echipele noastre</h2>

  <article>
    <h3>Echipa de baschet</h3>
    <p>Se antrenează marțea și joi, în sala mare.</p>
  </article>

  <article>
    <h3>Echipa de înot</h3>
    <p>Se antrenează la bazin, miercurea.</p>
  </article>
</section>
```

Observă titlurile: `<h1>` în antet, `<h2>` pentru secțiune, `<h3>` pentru fiecare articol din ea. **Nu sări peste niveluri** (de la `<h2>` direct la `<h4>`).

> Cum alegi între `section` și `article`? Dacă partea este „un capitol”, folosești `section`. Dacă este „o postare sau un card de sine stătător”, folosești `article`.

**Încearcă tu (11 min)**  
- [ ] Pune în pagină un `<main>` cu două `<section>`, fiecare cu un `<h2>`  
- [ ] Într-una dintre secțiuni, pune două `<article>`, fiecare cu un `<h3>` și un paragraf  
- [ ] Verifică ordinea titlurilor: `h1` → `h2` → `h3`  
- [ ] În `tema.html`, pune capitolele în `<main>`, fiecare într-un `<section>` cu `<h2>`  
- [ ] Pune în fiecare `section` câte un `<article>` pentru fiecare idee mai mare  

---

## 4. `aside` și `footer`

### Exemplul 6 — `<aside>`

```html
<aside>
  <h2>Știai că…</h2>
  <p>Un meci de baschet are patru reprize.</p>
</aside>
```

`<aside>` („lateral”) este o notă, un sfat sau o curiozitate, care **ar putea lipsi** fără ca pagina să își piardă sensul. Poate sta în `<main>`, lângă o secțiune, sau după `main`.

### Exemplul 7 — `<footer>`

```html
<footer>
  <p>Pagină făcută de Ana, în anul 2026.</p>
  <p><a href="index.html">Înapoi sus</a></p>
</footer>
```

`<footer>` este **finalul paginii**: cine a făcut pagina, anul, câteva linkuri. Nu pune în el adresa, telefonul sau numele complet.

**Încearcă tu (9 min)**  
- [ ] Adaugă un `<aside>` cu o curiozitate  
- [ ] Adaugă un `<footer>` cu anul și prenumele tău (doar prenumele)  
- [ ] Verifică ca meniul și subsolul să fie în afara lui `<main>`  
- [ ] În `tema.html`, mută „Fișa pe scurt” într-un `<aside>` și pune sursa articolului într-un `<footer>`  
- [ ] Verifică în DevTools dacă se vede arborele paginii: `header`, `nav`, `main`, `aside`, `footer`  

---

## 5. Mini-proiect

### Exemplul 8 — „Pagina clubului sportiv”

Acesta este proiectul **complet**, cu tot scheletul paginii. Salvează-l în `index.html` și scrie-l singur, bucată cu bucată.

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Pagina clubului sportiv</title>
</head>
<body>
  <header>
    <h1>Clubul Fulgerul</h1>
    <p>Aici ne antrenăm, ne jucăm și ne bucurăm de sport.</p>
  </header>

  <nav>
    <ul>
      <li><a href="index.html">Acasă</a></li>
      <li><a href="#echipe">Echipe</a></li>
      <li><a href="#intalniri">Întâlniri</a></li>
    </ul>
  </nav>

  <main>
    <section id="echipe">
      <h2>Echipele noastre</h2>

      <article>
        <h3>Echipa de baschet</h3>
        <p>Se antrenează marțea și joi, în sala mare.</p>
      </article>

      <article>
        <h3>Echipa de înot</h3>
        <p>Se antrenează la bazin, miercurea.</p>
      </article>
    </section>

    <section id="intalniri">
      <h2>Când ne întâlnim</h2>
      <p>În fiecare sâmbătă dimineață.</p>
    </section>

    <aside>
      <h2>Știai că…</h2>
      <p>Un meci de baschet are patru reprize.</p>
    </aside>
  </main>

  <footer>
    <p>Pagină făcută de Ana, în anul 2026.</p>
  </footer>
</body>
</html>
```

Ce vezi în browser? **Aproape nimic nou**: textele arată simplu, ca niște paragrafe. Diferența este în **înțeles**, nu în aspect. Cu CSS (Modulul 3) vei da fiecărei părți aspect propriu.

Deschide DevTools (**F12**; pe Mac Cmd + Option + I) → **Elements** și vezi cum tagurile cu înțeles formează un „arbore” al paginii.

Ce tag alegi?

| Parte | Tag |
|-------|-----|
| Titlul paginii cu sigla | `header` |
| Meniul principal | `nav` |
| Un capitol cu titlu | `section` |
| O postare de sine stătătoare | `article` |
| „Știai că…” | `aside` |
| „Pagină făcută de…” | `footer` |

---

## De făcut azi — „Pagina clubului sportiv”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | O pagină cu `header`, `nav`, `main` și `footer` |
| **Complet** | Minim + cel puțin două `section`, două `article`, un `aside`, titlurile în ordine (`h1`, `h2`, `h3`) și explicația într-un comentariu a diferenței dintre `<head>` și `<header>` |

### Pasul 1 — Minim
Fă pagina unui **club imaginar** (sport, jocuri, desen, muzică).

- [ ] Folderul `Prenume_Nume_W2_L8` are `index.html` cu scheletul complet  
- [ ] `<header>` cu `<h1>` și o propoziție; `<nav>` cu minimum 3 linkuri într-o listă  
- [ ] `<main>` cu conținutul și `<footer>` cu prenumele tău și anul  
- [ ] Meniul și subsolul sunt în afara lui `<main>`  

### Pasul 2 — Complet
Îmbunătățești pagina:

- [ ] `<main>` are minimum 2 `<section>`, fiecare cu `<h2>`  
- [ ] Ai cel puțin 2 `<article>`, fiecare cu `<h3>`  
- [ ] Ai un `<aside>` cu o curiozitate  
- [ ] Ai un singur `<main>` și un singur `<h1>`, iar titlurile nu sar niveluri  
- [ ] Codul este indentat și are un comentariu pentru fiecare „cameră”  

---

## Bonus ★★★ — Provocare: Camera cu program
*Doar dacă ai terminat Complet.*

- [ ] Adaugă o a treia `<section>` „Programul” cu un tabel de antrenamente, ca în Lecția 2  
- [ ] Fă din `tema.html` o pagină cu toate tagurile cu înțeles, cu `figure` pentru imagini și `time` pentru ani  
- [ ] Pune în `<aside>` o listă cu trei curiozități despre sportul tău  
- [ ] Deschide DevTools și numără câte taguri cu înțeles are o pagină cunoscută (împreună cu un adult)  

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
1. Transformă una dintre paginile tale din Modulul 1 (de exemplu „Pagina mea despre mine”) într-o pagină cu taguri cu înțeles: `header`, `nav`, `main`, `section` și `footer`. Salvează în `Prenume_Nume_W2_L8`.  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — Imagine cu legendă: `figure` și `figcaption`.**

```html
<figure>
  <img src="imagini/sala.jpg" alt="O sală de sport goală, cu mingi într-un colț" width="300">
  <figcaption>Sala mare a clubului</figcaption>
</figure>
```

`<figure>` învelește imaginea, iar `<figcaption>` este legenda ei.

**Acasă 2 — O dată cu înțeles: `time`.**

```html
<p>Următorul meci este pe <time datetime="2026-10-17">17 octombrie</time>.</p>
```

`<time>` spune browserului și motoarelor de căutare că este o dată; valoarea din `datetime` se scrie an-lună-zi.

4. **Încă patru exerciții (B–E):**

**B — Cum se numește?** Scrie tagul potrivit: (1) meniul principal; (2) finalul paginii; (3) conținutul principal; (4) o notă lateral; (5) partea de sus a paginii.

**C — Vechi versus nou.** Un coleg a scris pagina doar cu `<p>` și `<h1>`. Scrie ce taguri cu înțeles ai recomanda colegului și unde.

**D — Găsește greșelile.** Găsește **3 greșeli** în primul cod și **2 greșeli** în al doilea. Repară greșelile:

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

```text
<section>
  <p>Text fără titlu</p>
</section>
<main>
  <nav>...</nav>
</main>
```

**E — Explică cu cuvintele tale.** Într-un comentariu din cod: de ce folosim taguri cu înțeles dacă pagina arată la fel? Care este diferența dintre `<head>` și `<header>`?

## Ce urmează — Lecția 9
**Cărțile de colecție**: `div`, `span`, `id` și `class`, cutii și etichete cu nume pentru părțile care nu au un tag cu înțeles.

---

## Răspunsuri
- **Quiz scurt:** (1) meniul principal, adică linkurile spre părțile mari ale site-ului (de obicei într-o listă); (2) unul singur; (3) `section` este un capitol cu titlu, `article` este ceva de sine stătător, ca o postare sau un card; (4) în afara lui `main`; (5) `<head>` este din schelet și conține informații invizibile (`title`, `meta`), iar `<header>` este antetul vizibil din `<body>`.  
- **Tema, exercițiul B:** (1) `<nav>`; (2) `<footer>`; (3) `<main>`; (4) `<aside>`; (5) `<header>`.  
- **Tema, exercițiul D, primul cod:** (1) `<h1>` este în `<head>`, unde nu se vede: trebuie `<header>` în `<body>`; (2) titlul `<h4>` sare de la `h1` direct la `h4`: trebuie `<h2>`; (3) există două `<main>`: trebuie unul singur.  
- **Tema, exercițiul D, al doilea cod:** (1) `<section>` fără titlu: o secțiune ar trebui să aibă un titlu (`h2`, `h3`…); (2) `<nav>` este pus în `<main>`: meniul rămâne în afara lui.  
- **Tema, exercițiul E:** taguri cu înțeles ajută cititoarele de ecran, motoarele de căutare și programatorii; `head` conține informații invizibile, `header` este antetul vizibil.
