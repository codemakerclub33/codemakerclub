# LECȚIA 9 — Site-ul pe orice ecran
### Adaptare la telefon
**Modulul 3 · CSS: Stil și culoare · 2 ore**  
**Code Maker Club · CSS Stylist**

> Pagina ta arată bine pe calculator. Dar mulți oameni o vor deschide **pe telefon**, unde ecranul este mult mai îngust. O pagină bună **se adaptează singură** la orice ecran. Se numește **design adaptiv** (în engleză, *responsive design*).  
> Proiect: **„Site-ul pe orice ecran”** · folder: `Prenume_Nume_W3_L9` (ex. `Ana_Pop_W3_L9`)

---

## Ce facem azi
La final ai o pagină cu `viewport`, o coloană care se adaptează, imagini care nu ies din ecran, o galerie care își schimbă singură numărul de coloane și un antet care trece în coloană pe telefon. Mai mult de jumătate din vizitele pe site-uri vin de pe telefon. O pagină pe care trebuie să o mărești cu degetele sau pe care o derulezi și în lateral este greu de folosit, iar oamenii pleacă.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · aducem pagina cu articolul de pe Wikipedia |
| 15–30 | `viewport` (**Exemplul 1**) · unități și imagini care se adaptează (**Exemplul 2**) |
| 30–45 | `@media` (**Exemplul 3**) |
| 45–60 | Antetul trece din rând în coloană (**Exemplul 4**) |
| 60–75 | Grilă adaptivă și text adaptiv (**Exemplul 5**) |
| 75–90 | Testare în DevTools (**Exemplul 6**) |
| 90–100 | Reguli pentru degete (**Exemplul 7**) |
| 100–115 | Mini-proiect: site-ul pe orice ecran (**Exemplul 8**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `<meta name="viewport" …>` | Telefonul folosește lățimea reală | în `<head>` |
| `max-width`, `%`, `rem`, `vw` | Unități care se adaptează | `max-width: 800px;` |
| `img { max-width: 100%; }` | Imaginea nu iese din ecran | `height: auto;` |
| `@media (max-width: 600px) { … }` | Reguli doar pentru ecrane mici | `flex-direction: column;` |
| `repeat(auto-fit, minmax(220px, 1fr))` | Grilă care își schimbă singură coloanele | galerie |
| `clamp(min, ideal, max)` | Mărime de text adaptivă | `clamp(1.5rem, 5vw, 3rem)` |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- o animație are o rețetă (`@keyframes`) și o pornire (`animation`);
- `prefers-reduced-motion` respectă dorința utilizatorului;
- regula `@media` se aplică doar când o condiție este adevărată.

**Încearcă tu (8 min)**  
- [ ] Creează folderul `Prenume_Nume_W3_L9` cu `index.html` (scheletul complet, legat la `stil.css`) și `stil.css`  
- [ ] Pune `* { box-sizing: border-box; }` prima în `stil.css`  
- [ ] Pune în `<body>` un `<header>` cu un `<h1>` și un `<nav>` cu trei linkuri, apoi un `<main>` cu un paragraf lung  
- [ ] Copiază în folder `tema.html`, `stil.css` și folderele `imagini` și `media` din lecția trecută  

> De aici înainte, exemplele arată ce scrii în `<body>` și, separat, ce scrii în `stil.css`.

---

## 2. Pregătirea paginii

### Exemplul 1 — `viewport`

În scheletul paginii există o linie pe care ai copiat de la început:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Ea spune telefonului: „folosește **lățimea reală** a ecranului și nu mări pagina”. **Fără ea**, telefonul se preface că ecranul are 980px lățime și **micșorează** toată pagina, deci textul devine mic și nu se mai citește. Verifică că această linie este în `<head>` la fiecare pagină.

**Încearcă tu (5 min)**  
- [ ] Verifică dacă `index.html` are linia `viewport` în `<head>`  
- [ ] Verifică și în `tema.html`: este acolo?  
- [ ] Scrie într-un comentariu din cod ce se întâmplă fără ea  

### Exemplul 2 — Unități care se adaptează și imagini care nu ies din ecran

Unitățile fixe (`px`) rămân la fel pe orice ecran. Cele **relative** se adaptează:

| Unitate | Înseamnă | Exemplu |
|---------|----------|---------|
| `%` | procent din părinte | `width: 50%;` |
| `rem` | mărimea textului de bază | `padding: 1.5rem;` |
| `vw` | 1% din **lățimea ferestrei** | `font-size: 5vw;` |
| `vh` | 1% din **înălțimea ferestrei** | `min-height: 100vh;` |

Cea mai folositoare combinație pentru o coloană de conținut:

```css
main {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}
```

Pe calculator, coloana are cel mult 800px și stă la mijloc. Pe telefon, ocupă tot ecranul, cu puțin spațiu pe margini. Nu ai scris `width: 800px;` (o lățime **fixă** ar face pagina să iasă din ecran pe telefon).

Imaginile:

```css
img {
  max-width: 100%;
  height: auto;
}
```

Imaginea nu depășește niciodată lățimea părintelui, iar `height: auto;` păstrează proporțiile. Pune regula aceasta la începutul oricărui proiect cu imagini.

**Încearcă tu (5 min)**  
- [ ] Pune conținutul într-un `<main>` cu `max-width`, `margin: 0 auto;` și `padding: 1rem;`  
- [ ] Pune o imagine mare și adaugă `max-width: 100%; height: auto;`  
- [ ] În `tema.html`, pune articolul într-o coloană cu `max-width` și verifică imaginile  

**Gata când:**  
- [ ] Pagina are linia `viewport` în `<head>`  
- [ ] Coloana de conținut are `max-width` și `margin: 0 auto;`  
- [ ] Imaginile au `max-width: 100%; height: auto;`  
- [ ] Nu ai nicio lățime fixă mare pe elementele principale  

---

## 3. `@media`: reguli pentru ecrane mici

### Exemplul 3 — Prima regulă `@media`

```css
body {
  background-color: white;
}

@media (max-width: 600px) {
  body {
    background-color: lightyellow;
  }
}
```

`@media (max-width: 600px)` înseamnă: „**dacă** fereastra are cel mult 600px lățime, aplică și regulile de dinăuntru”. Pe un ecran mai lat, regulile din interior sunt ignorate. Regulile din `@media` se scriu **după** regulile obișnuite, ca să le poată înlocui.

Micșorează fereastra browserului: la 600px fundalul devine galben. Valorile des folosite pentru „puncte de schimbare” (breakpoints): **600px** pentru telefon, **900px** pentru tabletă.

**Încearcă tu (5 min)**  
- [ ] Fă regula `@media (max-width: 600px)` care schimbă culoarea fundalului  
- [ ] Micșorează fereastra și verifică la ce lățime se schimbă  
- [ ] În `tema.html`, fă textul mai mare pe ecrane de maximum 600px  

---

## 4. Antetul trece din rând în coloană

### Exemplul 4 — Meniu adaptiv

```html
<header class="antet">
  <p class="logo">Clubul meu</p>
  <nav>
    <ul class="meniu">
      <li><a href="#acasa">Acasă</a></li>
      <li><a href="#despre">Despre</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
</header>
```

```css
.antet {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: navy;
  padding: 10px 20px;
}

.logo {
  margin: 0;
  color: white;
  font-weight: bold;
}

.meniu {
  display: flex;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.meniu a {
  display: block;
  padding: 10px 14px;
  color: white;
  text-decoration: none;
  border: 2px solid white;
  border-radius: 8px;
}

@media (max-width: 600px) {
  .antet {
    flex-direction: column;
    gap: 10px;
  }

  .meniu {
    flex-wrap: wrap;
    justify-content: center;
  }
}
```

Pe calculator, logoul este în stânga și meniul în dreapta. Pe telefon, elementele trec **una sub alta**, iar meniul poate trece pe mai multe rânduri. În `@media` ai schimbat doar ce trebuia (direcția și aliniarea), nu ai rescris tot.

**Încearcă tu (5 min)**  
- [ ] Fă antetul să treacă în coloană pe ecran îngust  
- [ ] Fă meniul să treacă pe mai multe rânduri, cu `flex-wrap: wrap;`  
- [ ] În `tema.html`, fă meniul cu linkuri către capitole să treacă în coloană pe telefon  

---

## 5. Grilă și text care se adaptează

### Exemplul 5 — `auto-fit`, `minmax` și `clamp`

```css
.galerie {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 15px;
}
```

Înseamnă: „fă **atâtea coloane câte încap**, fiecare de **minimum 220px** și, dacă mai rămâne loc, lățește coloanele egal”. Pe calculator pot fi 4 coloane, pe tabletă 2, pe telefon una. **Nu a trebuit nicio regulă `@media`.** Este una dintre cele mai bune unelte pentru galerii și carduri.

Mărimea textului se poate adapta și ea:

```css
h1 {
  font-size: clamp(1.5rem, 5vw, 3rem);
}
```

`clamp(minim, ideal, maxim)` alege o mărime care crește odată cu ecranul, dar **nu coboară sub minim** și **nu trece de maxim**. Aici titlul are cel puțin `1.5rem`, cel mult `3rem`, iar între ele merge cu `5vw`. Un titlu uriaș pe telefon nu mai încape pe rând, iar unul minuscul pe calculator nu se vede, deci `clamp` rezolvă ambele probleme.

**Încearcă tu (5 min)**  
- [ ] Fă o galerie cu 6 carduri și `repeat(auto-fit, minmax(220px, 1fr))`  
- [ ] Micșorează și mărește fereastra: câte coloane apar la fiecare lățime?  
- [ ] În `tema.html`, pune imaginile într-o galerie adaptivă, cu `auto-fit`  

**Gata când:**  
- [ ] Galeria își schimbă singură numărul de coloane când schimbi lățimea ferestrei  
- [ ] Titlul își schimbă mărimea cu `clamp`  
- [ ] Antetul trece în coloană sub 600px  

---

## 6. Testare și reguli pentru degete

### Exemplul 6 — Testezi cu DevTools

Nu ai nevoie de un telefon ca să testezi pagina:
1. Deschide pagina în Chrome și apasă **F12** (DevTools; pe Mac **Cmd + Option + I**).  
2. Apasă pe pictograma cu **telefon și tabletă** (bara de dispozitive) din colțul stânga sus al panoului.  
3. Alege un dispozitiv din listă (de exemplu un telefon) sau trage de margini ca să schimbi lățimea.  
4. Verifică: se vede tot textul? Apare derulare pe **orizontală**? Se pot apăsa ușor butoanele?

Dacă pagina se derulează și în lateral, ceva este prea lat: o imagine fără `max-width`, o lățime fixă sau un text fără spații care nu trece pe rândul următor. Caută elementul cu DevTools.

**Încearcă tu (5 min)**  
- [ ] Deschide pagina în DevTools, în modul telefon  
- [ ] Verifică dacă apare derulare pe orizontală  
- [ ] Deschide și `tema.html` în modul telefon și caută elementele prea late  

### Exemplul 7 — Reguli pentru degete

Pe telefon, în loc de mouse ai degetul, care este mai gros:

```css
.buton {
  min-height: 44px;
  padding: 12px 20px;
  font-size: 1rem;
}
```

- **Butoane și linkuri de minimum 44px** înălțime și lățime: altfel sunt greu de nimerit.  
- **Spațiu între ele**, ca să nu apeși pe cel de alături.  
- **Text de minimum 16px** (`1rem`) pentru textul principal.  
- **Nimic important doar la `:hover`**: pe telefon nu există mouse (ai învățat deja asta în Lecția 7).

**Încearcă tu (5 min)**  
- [ ] Fă butoanele de cel puțin 44px înălțime  
- [ ] Pune spațiu între linkurile din meniu, cu `gap`  
- [ ] În `tema.html`, fă linkurile din meniu ușor de apăsat cu degetul  

**Gata când:**  
- [ ] Ai testat pagina în modul telefon  
- [ ] Butoanele au cel puțin 44px înălțime  

---

## 7. Mini-proiect

### Exemplul 8 — „Site-ul pe orice ecran”

Fișierul `index.html`:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Site-ul pe orice ecran</title>
  <link rel="stylesheet" href="stil.css">
</head>
<body>
  <header class="antet">
    <p class="logo">Clubul animalelor</p>
    <nav>
      <ul class="meniu">
        <li><a href="#acasa">Acasă</a></li>
        <li><a href="#animale">Animale</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <h1>Animalele noastre</h1>
    <p class="intro">Pagina aceasta se adaptează singură: pe calculator are mai multe coloane, iar pe telefon cardurile se așază unul sub altul.</p>

    <section class="galerie" id="animale">
      <div class="card">
        <h2>Pisica</h2>
        <img src="imagini/pisica.jpg" alt="O pisică">
        <p>Doarme toată ziua și vânează seara.</p>
      </div>
      <div class="card">
        <h2>Cățelul</h2>
        <p>Aleargă prin curte și își apără prietenii.</p>
      </div>
      <div class="card">
        <h2>Delfinul</h2>
        <p>Înoată repede și face salturi mari.</p>
      </div>
      <div class="card">
        <h2>Papagalul</h2>
        <p>Imită sunete și are pene colorate.</p>
      </div>
      <div class="card">
        <h2>Calul</h2>
        <p>Aleargă repede și trăiește în herghelii.</p>
      </div>
      <div class="card">
        <h2>Broasca</h2>
        <p>Sare departe și trăiește lângă apă.</p>
      </div>
    </section>

    <button class="buton">Află mai multe</button>
  </main>

  <footer class="subsol">
    <p>© Clubul animalelor</p>
  </footer>
</body>
</html>
```

Pune o imagine a ta în folderul `imagini` (cu numele `pisica.jpg`) sau schimbă numele din `src`. Fișierul `stil.css`:

```css
* {
  box-sizing: border-box;
}

img {
  max-width: 100%;
  height: auto;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  font-size: 1rem;
  background-color: #f4f9f9;
  color: #264653;
}

/* Antetul: logo și meniu pe un rând */
.antet {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: navy;
  padding: 10px 20px;
}

.logo {
  margin: 0;
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
}

.meniu {
  display: flex;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.meniu a {
  display: block;
  padding: 10px 14px;
  color: white;
  text-decoration: none;
  border: 2px solid white;
  border-radius: 8px;
}

.meniu a:hover,
.meniu a:focus {
  background-color: white;
  color: navy;
}

/* Conținutul: coloană care se adaptează */
main {
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem;
}

h1 {
  text-align: center;
  font-size: clamp(1.5rem, 5vw, 2.8rem);
}

.intro {
  text-align: center;
  line-height: 1.6;
}

/* Galeria: coloane care se adaptează singure */
.galerie {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 15px;
  margin: 1.5rem 0;
}

.card {
  background-color: white;
  border: 2px solid navy;
  border-radius: 12px;
  padding: 15px;
}

.card h2 {
  margin-top: 0;
  color: navy;
  font-size: 1.2rem;
}

.buton {
  display: block;
  margin: 0 auto;
  min-height: 44px;
  background-color: navy;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 10px;
  cursor: pointer;
}

.subsol {
  background-color: navy;
  color: white;
  text-align: center;
  padding: 10px;
}

.subsol p {
  margin: 0;
}

/* Pe telefon */
@media (max-width: 600px) {
  .antet {
    flex-direction: column;
    gap: 10px;
  }

  .meniu {
    flex-wrap: wrap;
    justify-content: center;
  }

  .buton {
    width: 100%;
  }
}
```

Fă pagina cu **un subiect ales de tine**. Testează pagina în DevTools, în modul telefon, la mai multe lățimi.

**Gata când:**  
- [ ] Pagina are `viewport`, coloană cu `max-width` și imagini cu `max-width: 100%`  
- [ ] Galeria își schimbă singură numărul de coloane  
- [ ] Antetul trece în coloană sub 600px, iar butonul ocupă toată lățimea  
- [ ] Nu apare derulare pe orizontală la nicio lățime  

---

## De făcut azi — „Site-ul pe orice ecran”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | O pagină cu `viewport`, o imagine care nu iese din ecran și o regulă `@media` care schimbă ceva pe telefon |
| **Complet** | Minim + un antet care trece din rând în coloană pe telefon, carduri care se așază singure, un titlu cu mărime adaptivă și testarea paginii pe mai multe ecrane |

### Pasul 1 — Minim
Pe scheletul complet, legat la `stil.css`, adaugă `viewport`, `img { max-width: 100%; height: auto; }` și o regulă `@media`.

- [ ] Folderul `Prenume_Nume_W3_L9` are `index.html` și `stil.css`  
- [ ] Linia `viewport` este în `<head>`  
- [ ] O imagine nu iese din ecran, iar o regulă `@media` schimbă ceva pe telefon  
- [ ] Pagina se vede în browser, cu Live Server pornit  

### Pasul 2 — Complet
Îmbunătățești pagina:

- [ ] Ai `* { box-sizing: border-box; }` prima în `stil.css`  
- [ ] Ai conținutul într-o coloană cu `max-width` și `margin: 0 auto;`  
- [ ] Ai o galerie cu **minimum 6 carduri**, cu `repeat(auto-fit, minmax(…px, 1fr))`  
- [ ] Ai un titlu cu `clamp(…)`  
- [ ] Ai butoane de cel puțin 44px înălțime  
- [ ] Ai testat pagina în DevTools, pe cel puțin două dispozitive, și ai făcut o captură de ecran din modul telefon  
- [ ] Ai cel puțin două comentarii în CSS  

---

## Bonus ★★★ — Provocare: Articolul tău pe telefon
*Doar dacă ai terminat Complet.*

Faci `tema.html` să arate bine pe orice ecran.

- [ ] Fă `tema.html` să se citească bine pe telefon: coloană cu `max-width`, imagini adaptive, meniu care trece în coloană și titlu cu `clamp`  
- [ ] Adaugă o a doua regulă `@media (max-width: 900px)` pentru tabletă și schimbă ceva în ea  
- [ ] Ascunde pe telefon un element mai puțin important (cu `display: none;`) și explică de ce este în regulă  
- [ ] Încearcă regula inversă, `@media (min-width: 900px)`: ce se aplică numai pe ecrane late?  

---

## Greșeli frecvente
1. **Ai uitat linia `viewport`** — pe telefon pagina apare micșorată.  
2. **Ai folosit lățimi fixe mari** (`width: 900px;`) — pagina iese din ecran pe telefon; folosește `max-width`.  
3. **Ai scris `@media (max-width: 600)`** fără `px` — condiția nu funcționează.  
4. **Ai scris regula `@media` înaintea celorlalte** — este înlocuită de regulile de după ea; pune regula la sfârșit.  
5. **Imaginea iese din ecran** — lipsește `max-width: 100%;`.  
6. **Apare derulare pe orizontală** — un element este mai lat decât ecranul.  
7. **Butoane prea mici** pentru deget — folosește minimum 44px.  
8. **Ai ascuns un meniu fără alternativă** — pe telefon utilizatorul nu mai poate naviga.  

---

## Recapitulare pe scurt
1. Linia `viewport` face ca telefonul să folosească lățimea reală a ecranului.  
2. `%`, `rem`, `vw` și `max-width` se adaptează la ecran.  
3. `img { max-width: 100%; height: auto; }` oprește imaginile să iasă din ecran.  
4. `@media (max-width: 600px) { … }` aplică reguli doar pe ecrane mici.  
5. `repeat(auto-fit, minmax(220px, 1fr))` face o grilă care își schimbă coloanele singură.  
6. Testează cu DevTools, în modul telefon.

## Quiz scurt
- Ce face linia `viewport`?  
- Ce înseamnă `@media (max-width: 600px)`?  
- De ce `max-width` și nu `width` pe conținut?  
- Ce face `clamp(1.5rem, 5vw, 3rem)`?  
- Cum verifici pagina pe telefon, fără telefon?

## Temă
1. Ia pagina „Echipa mea de fotbal” din Lecția 5 și fă pagina să se adapteze: `viewport`, `max-width`, grilă `auto-fit`, antet care trece în coloană pe telefon. Salvează în `Prenume_Nume_W3_L9`.  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — O regulă pentru ecrane late.**

```css
@media (min-width: 900px) {
  main {
    font-size: 1.15rem;
  }
}
```

`min-width` este opusul lui `max-width`: regula se aplică doar când fereastra are cel puțin 900px.

**Acasă 2 — O imagine care umple cadrul.**

```css
.poza {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
}
```

`object-fit: cover;` taie puțin din imagine ca să umple tot cadrul, fără să o deformeze. Este util când imaginile au proporții diferite.

4. **Încă patru exerciții (B–E):**

**B — Ce face regula?** Spune ce se întâmplă: (1) `@media (max-width: 600px) { .meniu { display: none; } }`; (2) `img { max-width: 100%; }`; (3) `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));` pe un ecran de 650px lățime, fără `gap`; (4) `font-size: clamp(1rem, 4vw, 2rem);` pe un ecran de 200px lățime.

**C — Scrie regula.** Scrie în CSS: (1) o regulă care, pe ecrane de maximum 700px, face un `.rand` flex să treacă în coloană; (2) o imagine care nu iese niciodată din părinte; (3) un titlu cu mărimea între `1.4rem` și `2.5rem`, cu `4vw` între ele.

**D — Găsește greșelile.** Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```text
@media (max-width: 600) {
  .antet {
    flex-direction: vertical;
  }
}

main {
  width: 900px;
}
```

**E — Explică cu cuvintele tale.** Într-un comentariu din cod: ce face linia `viewport`? De ce este mai bine `max-width` decât `width` pe coloana de conținut? De ce nu punem informații importante doar la `:hover`?

## Ce urmează — Lecția 10
Proiectul final al modulului: **„Enciclopedia în haine noi”**. Folosim tot ce am învățat: selectori, culori, text, cutii, Flexbox, Grid, efecte, animații și adaptare la telefon.

---

## Răspunsuri
- **Quiz scurt:** (1) spune telefonului să folosească lățimea reală a ecranului, nu să micșoreze pagina; (2) regulile dinăuntru se aplică doar dacă fereastra are cel mult 600px lățime; (3) `max-width` lasă conținutul să se micșoreze pe ecrane mici, iar un `width` fix îl face să iasă din ecran; (4) alege o mărime care crește cu ecranul (`5vw`), dar nu coboară sub `1.5rem` și nu trece de `3rem`; (5) cu DevTools (**F12**; pe Mac Cmd + Option + I), în modul telefon.  
- **Dacă ritmul clasei este lent:** `auto-fit`, `minmax` și `clamp` pot fi tratate ca provocare; instrumentul principal este `@media`.  
- **Tema, exercițiul B:** (1) pe ecrane de maximum 600px meniul dispare (atenție: utilizatorul nu mai are navigare); (2) imaginea nu depășește lățimea părintelui, dar poate rămâne mai îngustă decât el; (3) pe 650px încap trei coloane de minimum 200px (3 × 200 = 600), iar restul de 50px se împarte egal între ele, deci sunt trei coloane; (4) mărimea ideală `4vw` este 8px, dar `clamp` o ridică la minimum `1rem`, adică 16px.  
- **Tema, exercițiul C:** (1) `@media (max-width: 700px) { .rand { flex-direction: column; } }`; (2) `img { max-width: 100%; height: auto; }`; (3) `h1 { font-size: clamp(1.4rem, 4vw, 2.5rem); }`.  
- **Tema, exercițiul D:** (1) `600` trebuie `600px`; (2) `vertical` trebuie `column`; (3) `width: 900px;` trebuie `max-width: 900px;`.  
- **Tema, exercițiul E:** `viewport` spune telefonului să folosească lățimea reală; `max-width` lasă conținutul să se micșoreze pe ecrane mici, `width` fix îl face să iasă din ecran; pe telefon nu există mouse.  
- **Notă pentru profesor:** la ecrane foarte înguste (sub 250px) `minmax(220px, 1fr)` poate produce derulare laterală; pentru un proiect de club nu este nevoie de tratare, dar cei curioși pot folosi `minmax(min(220px, 100%), 1fr)`. Pentru capturile de ecran, rugați elevii să nu includă în ele date personale (nume de utilizator, bară de favorite cu pagini personale).
