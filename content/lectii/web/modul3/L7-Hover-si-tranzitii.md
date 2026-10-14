# LECȚIA 7 — :hover și tranziții
**Modulul 3 · CSS: Stil și culoare · 2 ore**  
**Code Maker Club · CSS Stylist**

> Până acum pagina ta arăta la fel tot timpul. Acum o facem să **răspundă**: butonul își schimbă culoarea când treci cu mouse-ul peste el, cartea se ridică ușor, iar schimbarea se face **lin**, nu brusc. Cu `:hover`, `transition` și `transform` pagina pare vie.  
> Proiect: **„Butoane și cărți vii”** · folder: `Prenume_Nume_W3_L7` (ex. `Ana_Pop_W3_L7`)

---

## Obiectiv
La finalul orei știi să schimbi stilul când mouse-ul este deasupra (`:hover`), când un element este selectat (`:focus`) sau apăsat (`:active`), să schimbi cursorul, să faci schimbări line cu `transition`, să muți, să mărești și să rotești cu `transform`, și să alegi elemente după poziție cu `:nth-child`.  
**Minim:** un buton care își schimbă culoarea la `:hover`, cu `transition`.  
**Ținta orei (Complet):** + o carte care se ridică și își mărește umbra, un meniu cu efecte, rânduri de tabel colorate alternativ și explicația de ce nu ascundem lucruri importante în spatele lui `:hover`.

## De ce contează
Efectele mici spun utilizatorului „aici poți apăsa” și fac site-ul plăcut. Aproape orice site folosește aceste trucuri la butoane, meniuri și carduri.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul |
| 15–35 | `:hover`, `:focus`, `:active`, `cursor` (**Exemplele 1–3**) |
| 35–60 | `transition` și `transform` (**Exemplele 4–5**) |
| 60–80 | Carte care se ridică · meniu (**Exemplele 6, 8**) |
| 80–95 | `:nth-child` (**Exemplul 7**) |
| 95–115 | Zoom pe imagine · proiect (**Exemplele 9–10**) |
| 115–120 | Recap și temă |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- `display: grid;` face rânduri și coloane, iar `fr` este o parte din spațiul liber;
- `position: relative;` pe părinte și `absolute` pe copil așază o insignă în colț;
- `z-index` ordonează straturile.

**Încearcă tu (4 min)**  
- [ ] Creează folderul `Prenume_Nume_W3_L7` cu `index.html` (scheletul complet, legat la `stil.css`) și `stil.css`  
- [ ] Pune `* { box-sizing: border-box; }` prima în `stil.css`  
- [ ] Pune în `<body>` un `<button class="buton">Apasă aici</button>` (butonul îl faci mai jos mai frumos)  

> De aici înainte, exemplele arată ce scrii în `<body>` și, separat, ce scrii în `stil.css`.

---

## 2. Stări: `:hover`, `:focus`, `:active`

### Exemplul 1 — `:hover`

În `stil.css`:

```css
.buton {
  background-color: navy;
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 10px;
}

.buton:hover {
  background-color: crimson;
}
```

`:hover` se scrie **după** selector, cu două puncte, și se aplică **numai cât timp mouse-ul este deasupra** elementului. Când scoți mouse-ul, stilul revine. Se numește **pseudo-clasă**: o clasă „invizibilă” pe care o pune browserul singur, în anumite situații.

### Exemplul 2 — `:focus` și `:active`

```css
.buton:focus {
  outline: 3px solid gold;
}

.buton:active {
  background-color: darkred;
}
```

- `:focus`: elementul este selectat (de exemplu ai ajuns la el cu tasta **Tab**);  
- `:active`: elementul este **apăsat chiar acum**.

Apasă **Tab** în pagină: vezi cum trece selecția de la un element la altul. Cine nu folosește mouse-ul (de exemplu o persoană care folosește doar tastatura) are nevoie de `:focus` vizibil. De aceea, **nu scoate niciodată** conturul cu `outline: none;` fără să pui altceva în loc.

Ordinea contează la linkuri: dacă stilizezi toate stările, scrie regulile în ordinea `:link`, `:visited`, `:hover`, `:active`.

### Exemplul 3 — `cursor`

```css
.buton {
  cursor: pointer;
}
```

`cursor: pointer;` schimbă săgeata în **mânuță**, ca la un link. Alte valori: `default` (săgeata obișnuită), `text` (bară de scris), `not-allowed` (interzis), `grab` (mână care apucă). Pune `pointer` pe tot ce se poate apăsa.

**Gata când:**  
- [ ] Butonul își schimbă culoarea când pui mouse-ul pe el  
- [ ] Ai un contur vizibil la `:focus` (verifică cu tasta Tab)  
- [ ] Butonul arată altfel cât timp îl ții apăsat  
- [ ] Cursorul devine mânuță pe buton  

---

## 3. Schimbări line și mișcare

### Exemplul 4 — `transition`

Schimbarea culorii de mai sus este bruscă. Pentru o schimbare lină, scrie `transition` pe elementul **de bază** (nu pe `:hover`):

```css
.buton {
  background-color: navy;
  transition: background-color 0.3s ease;
}

.buton:hover {
  background-color: crimson;
}
```

`transition: background-color 0.3s ease;` are trei părți:

| Parte | Ce spune |
|-------|----------|
| `background-color` | **ce** proprietate se schimbă lin |
| `0.3s` | **cât durează** (0,3 secunde) |
| `ease` | **cum** merge: pornește încet, accelerează, apoi încetinește |

Alte feluri de mers: `linear` (viteză egală), `ease-in`, `ease-out`, `ease-in-out`. Pentru mai multe proprietăți, pune între ele virgulă: `transition: background-color 0.3s, transform 0.3s;`. Timpul bun pentru efectele mici este între 0,2s și 0,4s. Dacă durează mai mult, pagina pare înceată.

### Exemplul 5 — `transform`

```css
.cutie {
  transition: transform 0.3s ease;
}

.cutie:hover {
  transform: scale(1.1);
}
```

`transform` schimbă forma sau poziția elementului **fără să împingă celelalte elemente**:

| Funcție | Ce face |
|---------|---------|
| `scale(1.1)` | mărește de 1,1 ori (`0.9` îl micșorează) |
| `rotate(10deg)` | rotește cu 10 grade |
| `translateY(-6px)` | mută 6px în sus (`translateX` mută pe orizontală) |

Poți combina mai multe într-un singur `transform`, separate prin spațiu: `transform: scale(1.1) rotate(5deg);`. Scrie `transform` o singură dată, altfel a doua regulă o înlocuiește pe prima.

**Încearcă tu (6 min)**  
- [ ] Adaugă `transition` pe buton ca să se schimbe lin  
- [ ] Fă o cutie care se mărește la `:hover` cu `scale(1.1)`  
- [ ] Încearcă `rotate(10deg)` și `translateY(-6px)` și compară  

---

## 4. Carduri vii, rânduri colorate și meniu

### Exemplul 6 — Carte care se ridică

```html
<div class="carte">
  <h2>Pisica</h2>
  <p>Doarme toată ziua și vânează seara.</p>
</div>
```

```css
.carte {
  width: 250px;
  background-color: white;
  border: 2px solid navy;
  border-radius: 12px;
  padding: 15px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.carte:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}
```

Cartea se ridică 6px, iar umbra se mărește: pare că se desprinde de pagină. Ambele proprietăți se schimbă lin, pentru că le-ai trecut în `transition`.

### Exemplul 7 — `:nth-child`: după poziție

```html
<table class="tabel">
  <tr><th>Jucător</th><th>Goluri</th></tr>
  <tr><td>Andrei</td><td>5</td></tr>
  <tr><td>Maria</td><td>7</td></tr>
  <tr><td>Radu</td><td>3</td></tr>
  <tr><td>Ioana</td><td>6</td></tr>
</table>
```

```css
.tabel {
  border-collapse: collapse;
  width: 100%;
}

.tabel td,
.tabel th {
  padding: 8px;
  border: 1px solid navy;
}

.tabel tr:nth-child(even) {
  background-color: #e8f1f2;
}

.tabel tr:hover {
  background-color: gold;
}
```

`:nth-child(...)` alege elementele după **numărul lor de ordine** între frați. Variante:

| Scriere | Alege |
|---------|-------|
| `:nth-child(even)` | al doilea, al patrulea, … (pare) |
| `:nth-child(odd)` | primul, al treilea, … (impare) |
| `:nth-child(3)` | exact al treilea |
| `:first-child` și `:last-child` | primul și ultimul |

Rândurile colorate alternativ se citesc mai ușor. `border-collapse: collapse;` lipește chenarele celulelor într-unul singur.

### Exemplul 8 — Meniu cu efecte

```html
<nav>
  <ul class="meniu">
    <li><a href="#acasa">Acasă</a></li>
    <li><a href="#animale">Animale</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
```

```css
.meniu {
  display: flex;
  gap: 10px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.meniu a {
  display: block;
  padding: 10px 18px;
  background-color: navy;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.meniu a:hover,
.meniu a:focus {
  background-color: crimson;
  transform: translateY(-3px);
}
```

Observă virgula: aceeași regulă pentru `:hover` (mouse) și `:focus` (tastatură), deci meniul este prietenos pentru toți.

**Gata când:**  
- [ ] Cartea se ridică și își mărește umbra la `:hover`  
- [ ] Rândurile tabelului sunt colorate alternativ cu `:nth-child(even)`  
- [ ] Meniul reacționează și la mouse, și la tasta Tab  
- [ ] Poți explica ce alege `:nth-child(odd)`  

---

## 5. Zoom pe imagine și proiectul

### Exemplul 9 — Zoom fără să iasă din cutie

```html
<div class="poza">
  <img src="animal.jpg" alt="Un animal desenat de mine">
</div>
```

```css
.poza {
  width: 250px;
  overflow: hidden;
  border-radius: 12px;
}

.poza img {
  display: block;
  width: 100%;
  transition: transform 0.4s ease;
}

.poza:hover img {
  transform: scale(1.15);
}
```

Imaginea se mărește, dar `overflow: hidden;` pe cutie **taie ce iese**, deci zoom-ul rămâne în cadru. Selectorul `.poza:hover img` spune: „când mouse-ul este pe `.poza`, schimbă imaginea din ea”. Folosește o imagine făcută de tine, un desen sau o imagine fără persoane, pusă în același folder cu `index.html`.

### Exemplul 10 — „Butoane și cărți vii”

Fișierul `index.html`:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Butoane și cărți vii</title>
  <link rel="stylesheet" href="stil.css">
</head>
<body>
  <header class="antet">
    <h1>Butoane și cărți vii</h1>
    <nav>
      <ul class="meniu">
        <li><a href="#acasa">Acasă</a></li>
        <li><a href="#animale">Animale</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <div class="carti">
      <div class="carte">
        <h2>Pisica</h2>
        <p>Doarme toată ziua și vânează seara.</p>
        <button class="buton">Află mai mult</button>
      </div>
      <div class="carte">
        <h2>Cățelul</h2>
        <p>Aleargă prin curte și își apără prietenii.</p>
        <button class="buton">Află mai mult</button>
      </div>
      <div class="carte">
        <h2>Delfinul</h2>
        <p>Înoată repede și face salturi mari.</p>
        <button class="buton">Află mai mult</button>
      </div>
    </div>

    <h2>Clasamentul golgheterilor</h2>
    <table class="tabel">
      <tr><th>Jucător</th><th>Goluri</th></tr>
      <tr><td>Andrei</td><td>5</td></tr>
      <tr><td>Maria</td><td>7</td></tr>
      <tr><td>Radu</td><td>3</td></tr>
      <tr><td>Ioana</td><td>6</td></tr>
    </table>
  </main>
</body>
</html>
```

Fișierul `stil.css`:

```css
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f9f9;
  color: #264653;
}

/* Antet cu meniu */
.antet {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: navy;
  padding: 10px 20px;
}

.antet h1 {
  margin: 0;
  color: white;
  font-size: 1.4rem;
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
  padding: 8px 14px;
  color: white;
  text-decoration: none;
  border: 2px solid white;
  border-radius: 8px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.meniu a:hover,
.meniu a:focus {
  background-color: white;
  color: navy;
}

main {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

/* Cărțile care se ridică */
.carti {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
}

.carte {
  flex: 1 1 220px;
  background-color: white;
  border: 2px solid navy;
  border-radius: 12px;
  padding: 15px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.carte:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.carte h2 {
  margin-top: 0;
  color: navy;
}

/* Butonul viu */
.buton {
  background-color: navy;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.buton:hover {
  background-color: crimson;
}

.buton:focus {
  outline: 3px solid gold;
}

.buton:active {
  transform: scale(0.95);
}

/* Tabelul cu rânduri alternative */
.tabel {
  border-collapse: collapse;
  width: 100%;
}

.tabel th,
.tabel td {
  padding: 8px 12px;
  border: 1px solid navy;
  text-align: left;
}

.tabel th {
  background-color: navy;
  color: white;
}

.tabel tr:nth-child(even) {
  background-color: #e8f1f2;
}

.tabel tr:hover td {
  background-color: gold;
}
```

Fă pagina cu **un subiect ales de tine**. Verifică efectele cu mouse-ul și cu tasta Tab.

**Gata când:**  
- [ ] Butoanele, cărțile și linkurile din meniu reacționează la `:hover`  
- [ ] Schimbările sunt line (au `transition`)  
- [ ] Tabelul are rânduri colorate alternativ  
- [ ] Toate elementele care se apasă au `cursor: pointer;` și un `:focus` vizibil  

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Butoane și cărți vii” (obligatoriu)
Fă o pagină cu `index.html` și `stil.css`, cu:
- `* { box-sizing: border-box; }` prima în `stil.css`;
- un meniu cu **minimum 3 linkuri** cu `:hover` și `:focus`, plus `transition`;
- **minimum 3 cărți** care se ridică la `:hover` (`transform` plus `box-shadow`);
- **minimum 2 butoane** cu `:hover`, `:active`, `cursor: pointer;` și `transition`;
- un tabel cu **minimum 4 rânduri**, colorate alternativ cu `:nth-child(even)`;
- cel puțin două comentarii în CSS.

### Exercițiul B — Ce face regula?
Spune ce se întâmplă: (1) `.a:hover { transform: scale(0.9); }`; (2) `li:nth-child(3) { color: red; }`; (3) `.b { transition: transform 1s linear; }` împreună cu `.b:hover { transform: rotate(90deg); }`; (4) `p:first-child { font-weight: bold; }`.

### Exercițiul C — Scrie regula
Scrie în CSS: (1) un link care devine roșu și fără subliniere la `:hover`; (2) o cutie care se rotește 5 grade lin la `:hover`, în 0,4 secunde; (3) o listă în care elementele impare au fundal galben.

### Exercițiul D — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```text
.buton:hover {
  background-color: crimson;
  transition: background-color 0.3;
}

.cutie {
  transform: scale(1.2);
  transform: rotate(10deg);
}
```

### Exercițiul E — Explică cu cuvintele tale
Pe foaie: de ce nu ascundem informații importante în spatele lui `:hover`? De ce trebuie `:focus` vizibil? Unde se scrie `transition`: pe stilul de bază sau pe `:hover`?

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W3_L7` are `index.html` și `stil.css`  
- [ ] Pagina are meniu, cărți, butoane și tabel cu efecte line  
- [ ] Ai testat și cu tasta Tab  
- [ ] Ai răspuns la exercițiile B–E  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Fă un buton care se rotește cu 360 de grade la `:hover` (`rotate(360deg)` cu `transition` de 0,6s)  
- [ ] Fă o cutie care își schimbă culoarea de fundal, mărimea și colțurile în același timp, la `:hover`  
- [ ] Pune `:first-child` și `:last-child` pe elementele unei liste, cu culori diferite  
- [ ] Adaugă `a:visited` cu o culoare mai închisă pentru linkurile deja vizitate  

---

## Greșeli frecvente
1. **Ai scris `transition` pe `:hover`** — efectul merge la intrare, dar revenirea este bruscă. Scrie `transition` pe stilul de bază.  
2. **Ai uitat unitatea la timp** — `0.3` nu este corect, scrie `0.3s`.  
3. **Ai pus două `transform` în aceeași regulă** — a doua o înlocuiește pe prima. Scrie ambele funcții într-un singur `transform`.  
4. **`:hover` fără două puncte** sau scris `.buton :hover` (cu spațiu) — pseudo-clasa se lipește de selector: `.buton:hover`.  
5. **Ai scos conturul cu `outline: none;`** fără să pui altceva — cine folosește tastatura nu mai vede unde este.  
6. **Ai pus informații importante doar la `:hover`** — pe telefon nu există mouse, deci nu apar niciodată.  
7. **Efect prea lung** (de exemplu 3 secunde) — pagina pare înceată. Alege între 0,2s și 0,4s.  
8. **`:nth-child` nu alege ce vrei** — numără toți frații, inclusiv titlurile (`th`) sau alte elemente de același nivel.  
9. **Zoom-ul imaginii iese din cutie** — lipsește `overflow: hidden;` pe cutie.  
10. **Cursorul rămâne săgeată pe buton** — ai uitat `cursor: pointer;`.  

---

## Recapitulare pe scurt
1. `:hover` (mouse deasupra), `:focus` (selectat), `:active` (apăsat) schimbă stilul în funcție de stare.  
2. `cursor: pointer;` face mânuța pe tot ce se apasă.  
3. `transition: proprietate durată fel;` pe stilul de bază face schimbarea lină.  
4. `transform`: `scale`, `rotate`, `translate`; scrie funcțiile într-un singur `transform`.  
5. `:nth-child(even)` și `:nth-child(odd)` alege după poziție.  
6. Nu ascunde lucruri importante în spatele lui `:hover` și lasă `:focus` vizibil.

## Quiz scurt
- Ce face `:hover`?  
- Unde scrii `transition`?  
- Ce face `transform: scale(1.1);`?  
- Ce alege `tr:nth-child(even)`?  
- De ce nu folosim `outline: none;` fără alt contur?

## Temă
Fă pagina „Lista mea de jocuri”: un meniu, patru cărți care se ridică, două butoane și un tabel cu 5 rânduri colorate alternativ. Salvează în `Prenume_Nume_W3_L7`.

## Ce urmează — Lecția 8
Învățăm **animațiile cu `@keyframes`**: elemente care pulsează, sar sau apar încet, fără ca cineva să le atingă.

---

## Răspunsuri pentru profesor
- **Exercițiul B:** (1) elementul se micșorează la 90% când mouse-ul este deasupra; (2) al treilea element `li` (între frații lui) devine roșu; (3) cutia se rotește lin 90 de grade într-o secundă, cu viteză egală, la `:hover`, și revine lin când mouse-ul pleacă, pentru că `transition` este pus pe starea de bază; (4) primul `p` dintre frații lui devine îngroșat.  
- **Exercițiul C:** (1) `a:hover { color: red; text-decoration: none; }`; (2) `.c { transition: transform 0.4s ease; } .c:hover { transform: rotate(5deg); }`; (3) `li:nth-child(odd) { background-color: yellow; }`.  
- **Exercițiul D:** (1) `transition` trebuie scris pe `.buton`, nu pe `:hover`; (2) `0.3` trebuie `0.3s`; (3) două `transform` în aceeași regulă — trebuie unite: `transform: scale(1.2) rotate(10deg);`.  
- **Exercițiul E:** pe telefon nu există mouse, iar informația ar dispărea; cine folosește tastatura are nevoie să vadă unde este selecția; `transition` se scrie pe stilul de bază.  
- **Notă pentru profesor:** la **Exercițiul B (3)**, accentul este că `transition` pus pe starea de bază face lină și intrarea, și ieșirea. Dacă elevii încurcă, arătați pe proiector cele două variante, cu `transition` pe bază și pe `:hover`. Imaginile din Exemplul 9 sunt opționale: se pot folosi desene proprii sau poze fără persoane; fără imagini, exemplul se poate face cu o cutie colorată.
