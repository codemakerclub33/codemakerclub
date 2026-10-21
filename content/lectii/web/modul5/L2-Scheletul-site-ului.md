# LECȚIA 2 — Scheletul site-ului
**Modulul 5 · Site complet: HTML + CSS + JavaScript · 2 ore**  
**Code Maker Club · Web Builder**

> Azi construim **scheletul**: cele 3 pagini HTML cu același antet, același subsol și un meniu care duce de la o pagină la alta. Adăugăm și fișierul `stil.css`, cu paleta ta în variabile. Pagina încă nu arată frumos, dar are **oasele la locul lor**.  
> Proiect: **„Scheletul site-ului”** · folder: `Prenume_Nume_W5` (continuăm în același folder)

---

## Obiectiv
La finalul orei ai 3 pagini care se deschid una din alta prin meniu, au aceeași structură (`header`, `nav`, `main`, `footer`) și sunt legate la `stil.css`.  
**Minim:** `index.html` și `galerie.html` legate prin meniu, fiecare cu `header`, `main` și `footer`.  
**Ținta orei (Complet):** + a treia pagină, `stil.css` cu variabile, titluri potrivite în fiecare `<title>`, `aria-current="page"` la linkul paginii curente, comentarii și o verificare a tuturor linkurilor.

## De ce contează
Dacă toate paginile au aceeași structură, vizitatorul se simte acasă oriunde ajunge. Pentru cine folosește un cititor de ecran, etichetele `header`, `nav`, `main` și `footer` spun unde este fiecare parte a paginii.

---

## Siguranță înainte de toate
- Folosești textele tale, fără date personale.  
- Linkurile merg **doar către paginile tale**. Nu pui încă linkuri către alte site-uri.  
- Salvezi des (`Ctrl + S`, pe Mac `Cmd + S`) și, la final, faci o copie a folderului.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare: ce este un `link` și o cale relativă |
| 10–40 | Scheletul paginii `index.html` (**Exemplul 1**) |
| 40–60 | Meniul și `aria-current` (**Exemplul 2**) |
| 60–85 | Celelalte două pagini (**Exemplul 3**) |
| 85–105 | `stil.css` cu paleta și baza (**Exemplul 4**) |
| 105–115 | Testul linkurilor (**Exemplul 5**) |
| 115–120 | Recap și temă |

---

## 1. Scheletul paginii

### Exemplul 1 — `index.html`

Șterge testul de la lecția trecută și scrie:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Clubul animalelor: un site despre animalele noastre preferate.">
  <title>Clubul animalelor</title>
  <link rel="stylesheet" href="stil.css">
</head>
<body>
  <header class="antet">
    <div class="container">
      <a class="logo" href="index.html">Clubul animalelor</a>
    </div>
  </header>

  <main>
    <section class="container sectiune">
      <h1>Bine ai venit!</h1>
      <p>Aici va fi conținutul paginii.</p>
    </section>
  </main>

  <footer class="subsol">
    <p>© 2026 Clubul animalelor · site făcut la Code Maker Club</p>
  </footer>
</body>
</html>
```

Ce face fiecare parte:
- `lang="ro"`: spune browserului că textul este în română.  
- `viewport`: face pagina să se potrivească pe telefon.  
- `meta description`: o propoziție care apare în rezultatele căutării.  
- `<title>`: textul din fila browserului.  
- `<header>`, `<main>`, `<footer>`: partea de sus, conținutul principal, partea de jos. Într-o pagină există **un singur** `<main>`.  
- `class="container"`: o clasă pe care o definim în CSS, ca să ținem conținutul într-o coloană centrată.

Pune în loc titlul și textele **tale**.

**Încearcă tu (15 min)**  
- [ ] Scrie scheletul în `index.html` cu titlul tău  
- [ ] Deschide pagina: se vede titlul și footerul, chiar dacă nu arată frumos  
- [ ] Schimbă anul din subsol cu cel de acum

---

## 2. Meniul

### Exemplul 2 — `nav` cu listă de linkuri

În `index.html`, în `<header>`, după logo, adaugă meniul:

```html
<nav class="meniu" aria-label="Meniu principal">
  <ul>
    <li><a href="index.html" aria-current="page">Acasă</a></li>
    <li><a href="galerie.html">Galerie</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</nav>
```

- Un meniu este o **listă de linkuri**. Așa îl înțeleg și cititoarele de ecran.  
- `aria-label` dă un nume meniului.  
- `aria-current="page"` se pune **doar** pe linkul paginii în care ești. Mai târziu îl vom colora diferit în CSS.  
- Calea este **relativă**: `galerie.html` înseamnă „fișierul `galerie.html` din același folder”.

Meniul stă în același `<div class="container">` cu logoul, imediat după logo.

**Încearcă tu (10 min)**  
- [ ] Adaugă meniul cu cele 3 linkuri  
- [ ] Apasă pe „Galerie”: primești o eroare, pentru că pagina încă nu există (este normal)

---

## 3. Celelalte pagini

### Exemplul 3 — Copiem scheletul

Cele 3 pagini au **același antet și același subsol**. Copiază tot `index.html` în `galerie.html` și `contact.html`, apoi schimbă **doar** ce este diferit:

În `galerie.html`:
```html
<meta name="description" content="Galeria Clubului animalelor: pozele noastre cu animale.">
<title>Galerie | Clubul animalelor</title>
```
```html
<li><a href="index.html">Acasă</a></li>
<li><a href="galerie.html" aria-current="page">Galerie</a></li>
<li><a href="contact.html">Contact</a></li>
```
```html
<h1>Galeria noastră</h1>
<p>Aici vor fi pozele.</p>
```

În `contact.html`: la fel, cu `Contact | Clubul animalelor`, `aria-current` pe linkul „Contact”, titlul `Scrie un mesaj clubului` și textul `Aici va fi formularul.`

De ce se schimbă `<title>` și `aria-current`? Pentru că fiecare pagină trebuie să se recunoască: fila browserului arată alt titlu, iar meniul arată unde ești.

> **Un lucru de știut:** acum, dacă vrei să schimbi meniul, îl schimbi în **3 fișiere**. Site-urile mari rezolvă asta cu unelte speciale. Noi acceptăm munca în plus și avem grijă să schimbăm peste tot.

**Încearcă tu (20 min)**  
- [ ] Creează `galerie.html` și `contact.html`  
- [ ] Schimbă `title`, `description`, `aria-current` și `h1`  
- [ ] Apasă pe toate linkurile din meniu: ajungi pe toate cele 3 pagini?

---

## 4. `stil.css`: paleta și baza

### Exemplul 4 — Variabile și reguli de bază

În `stil.css` scrie:

```css
/* ===== Variabile și bază ===== */
:root {
  --principala: #1d3557;
  --accent: #e63946;
  --fundal: #f1faee;
  --text: #1d2d3a;
  --card: #ffffff;
  --linie: #a8dadc;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  line-height: 1.6;
  background-color: var(--fundal);
  color: var(--text);
}

img {
  max-width: 100%;
  height: auto;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
}

.sectiune {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

/* ===== Antet și subsol (versiune simplă) ===== */
.antet,
.subsol {
  background-color: var(--principala);
  color: white;
}

.antet {
  padding: 1rem 0;
}

.logo {
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
  text-decoration: none;
}

.subsol {
  padding: 1rem;
  text-align: center;
}

.subsol p {
  margin: 0;
}
```

Înlocuiește culorile cu cele din planul tău. Variabilele de aici (`--principala`, `--accent`, ...) vor fi folosite în **toate** lecțiile următoare. Mai ai o variabilă, `--card`, pentru fundalul cardurilor, și `--linie`, pentru chenare. Le vom folosi la carduri și la formular.

`.container` ține conținutul în mijloc, cu lățime maximă de 1000 px, iar `padding` îl ferește de marginea ecranului pe telefon.

**Încearcă tu (15 min)**  
- [ ] Scrie `stil.css` și pune în el culorile tale  
- [ ] Verifică dacă fiecare pagină are linia `<link rel="stylesheet" href="stil.css">`  
- [ ] Reîncarcă paginile: au antet colorat, subsol colorat și text citibil?

---

## 5. Testul linkurilor

### Exemplul 5 — Lista de verificare a scheletului

```text
□ Cele 3 fișiere HTML există și se deschid
□ Fiecare pagină are <!DOCTYPE html>, lang="ro", meta charset și viewport
□ Fiecare pagină are <title> diferit
□ Meniul are 3 linkuri, în aceeași ordine pe toate paginile
□ aria-current="page" este pe linkul paginii curente, doar acolo
□ Există un singur <main> și un singur <h1> pe pagină
□ stil.css este legat în toate cele 3 pagini
□ Din orice pagină ajung în orice altă pagină
```

**Gata când:**  
- [ ] Toate punctele sunt bifate  
- [ ] Ai făcut o copie de siguranță a folderului

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Scheletul site-ului” (obligatoriu)
Folderul `Prenume_Nume_W5` are `index.html`, `galerie.html`, `contact.html` și `stil.css`, cu tot ce este în lista din Exemplul 5.

### Exercițiul B — Autoevaluare
Pe foaie: scrie ce înseamnă `header`, `nav`, `main`, `footer`, `lang` și `viewport`.

### Exercițiul C — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```html
<nav>
  <li><a href="Galerie.HTML" aria-current="page">Galerie</a></li>
  <li><a href="contact">Contact</a></li>
</nav>
<main>...</main>
<main>...</main>
```

### Exercițiul D — Explică cu cuvintele tale
Pe foaie: de ce are fiecare pagină alt `<title>`? Ce arată `aria-current="page"`? De ce punem meniul într-o listă?

**Gata când:**  
- [ ] Ai scheletul complet  
- [ ] Ai răspuns la exercițiile B–D

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Adaugă în `<head>` o iconiță pentru filă (`favicon`) din pachetul media  
- [ ] Adaugă un link „Sari la conținut” la începutul paginii, către `<main id="continut">`  
- [ ] Schimbă toate culorile doar din `:root` și vezi cum se schimbă pagina

---

## Greșeli frecvente
1. **Litere mari în nume** (`Galerie.html`) sau nume diferit în meniu și pe disc. Numele trebuie să fie identice.  
2. **Meniul diferit pe pagini.** Fiecare pagină are aceleași linkuri, în aceeași ordine.  
3. **`aria-current` pe toate linkurile.** Se pune doar pe cel curent.  
4. **Uitat `<link>` către `stil.css`** într-una dintre pagini.  
5. **Două `<main>`** într-o pagină.

## Recapitulare pe scurt
1. Un site are pagini cu aceeași structură: `header`, `main`, `footer`.  
2. Meniul este o listă de linkuri într-un `nav`.  
3. Fiecare pagină are propriul `<title>` și `aria-current` pe linkul ei.  
4. Variabilele din `:root` țin paleta într-un singur loc.  
5. `.container` ține conținutul centrat.

## Quiz scurt
1. Ce face `<meta name="viewport" ...>`?  
2. Câte `<main>` are o pagină?  
3. Unde se pune `aria-current="page"`?  
4. Unde sunt scrise culorile paginii?

## Temă
Verifică site-ul tău pe un alt calculator sau pe un telefon, dacă ai voie. Notează dacă linkurile merg. Salvează varianta în `Prenume_Nume_W5_L2`.

## Ce urmează — Lecția 3
Facem **antetul și meniul frumoase**: meniu pe orizontală cu Flexbox și un buton care deschide meniul pe telefon, cu JavaScript.

---

## Răspunsuri
- **Quiz scurt:** (1) face pagina să se potrivească pe ecranul telefonului; (2) unul singur; (3) doar pe linkul paginii în care ești; (4) în variabilele din `:root`, în fișierul `stil.css`.  
- **Exercițiul A:** pentru evaluare folosiți lista din Exemplul 5.  
- **Exercițiul B:** `header` = partea de sus; `nav` = meniul; `main` = conținutul principal; `footer` = partea de jos; `lang` = limba textului; `viewport` = adaptarea la ecranul telefonului.  
- **Exercițiul C:** (1) linkurile `li` trebuie puse într-un `<ul>`; (2) `Galerie.HTML` trebuie scris exact ca fișierul (`galerie.html`), iar `contact` are nevoie de extensia `.html`; (3) o pagină are un singur `<main>`. `aria-current` este corect doar dacă pagina este chiar Galeria.  
- **Exercițiul D:** titlul diferit ajută la recunoașterea filelor și la căutare; `aria-current` arată pagina în care ești; lista ajută cititoarele de ecran să înțeleagă meniul.  
- **Notă pentru profesor:** cea mai frecventă problemă este o cale greșită sau o literă mare. Cereți elevului să compare numele din `href` cu numele fișierului, litera cu litera. Explicați pe scurt de ce repetăm antetul în fiecare pagină și că există unelte pentru asta, dar nu intrați în ele.
