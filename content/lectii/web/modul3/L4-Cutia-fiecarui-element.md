# LECȚIA 4 — Cutia fiecărui element
**Modulul 3 · CSS: Stil și culoare · 2 ore**  
**Code Maker Club · CSS Stylist**

> Secretul care face CSS-ul să pară ușor: **fiecare element dintr-o pagină este o cutie**. Un titlu este o cutie, un paragraf este o cutie, o imagine este o cutie. Când înțelegi cutia, știi să așezi orice lucru exact unde vrei.  
> Proiect: **„Cărți de joc cu animale, versiunea frumoasă”** · folder: `Prenume_Nume_W3_L4` (ex. `Ana_Pop_W3_L4`)

---

## Obiectiv
La finalul orei știi că orice element are patru straturi (conținut, spațiu în interior, chenar și spațiu în afară), le schimbi cu `width`, `height`, `padding`, `border` și `margin`, centrezi o cutie, rotunjești colțuri, pui umbră, folosești `box-sizing: border-box` și știi diferența dintre `block`, `inline` și `inline-block`.  
**Minim:** o cutie cu lățime, spațiu în interior, chenar și spațiu în afară, centrată pe pagină.  
**Ținta orei (Complet):** + colțuri rotunjite și umbră, `box-sizing: border-box`, un buton făcut dintr-un link, imagini care nu ies din cutie și o explicație a celor patru straturi cu ajutorul DevTools.

## De ce contează
Dacă un element nu stă unde vrei, aproape mereu problema este o cutie: un spațiu în plus, o lățime greșită sau un chenar care adaugă ceva. Cine citește bine cutiile repară o pagină în câteva minute.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · pornim proiectul |
| 15–30 | Cutia · lățime și înălțime (**Exemplele 1–2**) |
| 30–50 | `padding` și `border` (**Exemplele 3–4**) |
| 50–65 | `margin` și centrare (**Exemplul 5**) |
| 65–85 | `box-sizing` · `block`, `inline`, `inline-block` (**Exemplele 6–7**) |
| 85–100 | Colțuri, umbră, buton · imagini (**Exemplele 8–9**) |
| 100–115 | Proiect (**Exemplul 10**) |
| 115–120 | Recap și temă |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- `font-family` are o listă de rezervă care se termină cu un grup general;
- mărimea se scrie în `px` sau `rem`, fără spațiu înainte de unitate;
- `line-height` dă aer între rânduri;
- `max-width` și `margin: 0 auto;` fac o coloană îngustă și centrată (azi înțelegi de ce).

**Încearcă tu (4 min)**  
- [ ] Creează folderul `Prenume_Nume_W3_L4` cu `index.html` (scheletul complet, legat la `stil.css`) și `stil.css`  
- [ ] Pune în `<body>` un `<h1>` și trei cutii `<div class="carte">` cu câte un `<h2>` și un `<p>` despre un animal  

> De aici înainte, exemplele arată ce scrii în `<body>` și, separat, ce scrii în `stil.css`.

---

## 2. Cutia și mărimea ei

### Exemplul 1 — Fiecare element este o cutie

Fiecare element are, de la **interior spre exterior**, patru straturi:

```text
1. conținut ... textul sau imaginea (în mijloc)
2. padding .... spațiul din interiorul chenarului
3. border ..... chenarul
4. margin ..... spațiul din afara chenarului
```

| Strat | Ce este | Cum îl compari |
|-------|---------|----------------|
| conținut | textul sau imaginea | un cadou |
| `padding` | spațiu **în interiorul** chenarului | hârtia de protecție din jurul cadoului |
| `border` | chenarul | cutia cadoului |
| `margin` | spațiu **în afara** chenarului | spațiul dintre cutii pe raft |

Cel mai bun mod să le vezi: deschide DevTools (**F12**), fila **Elements**, apasă pe un element și uită-te în panoul **Styles**, jos, la desenul colorat al cutiei. Albastrul este conținutul, verdele este `padding`, galbenul este `border`, iar portocaliul este `margin`. Dacă treci cu mouse-ul peste element în DevTools, vezi aceleași culori pe pagină.

### Exemplul 2 — Lățime și înălțime

```css
.carte {
  width: 250px;
  height: 120px;
  background-color: lightyellow;
}
```

`width` este lățimea, iar `height` este înălțimea **conținutului**. De obicei lași înălțimea să se potrivească singură cu textul și setezi doar lățimea.

Mai sunt două reguli utile:

```css
.larg {
  max-width: 400px;
}

.minim {
  min-height: 100px;
}
```

`max-width` este lățimea cea mai mare pe care o poate avea, iar `min-height` este înălțimea cea mai mică. Sunt mai prietenoase decât `width` și `height` fixe, pentru că se adaptează.

**Gata când:**  
- [ ] Ai o cutie cu o lățime fixă și un fundal colorat  
- [ ] Ai deschis DevTools și ai văzut cele patru straturi colorate ale cutiei  
- [ ] Poți spune în ce ordine sunt straturile, de la interior spre exterior  

---

## 3. Spațiu în interior și chenar

### Exemplul 3 — `padding`

```css
.carte {
  background-color: lightyellow;
  padding: 20px;
}

.alta {
  padding: 10px 30px;
}

.a-treia {
  padding: 5px 10px 15px 20px;
}

.a-patra {
  padding-left: 40px;
}
```

`padding` poate avea mai multe valori:

| Scris | Ce înseamnă |
|-------|-------------|
| `padding: 20px;` | 20px pe toate cele patru laturi |
| `padding: 10px 30px;` | 10px sus și jos, 30px stânga și dreapta |
| `padding: 5px 10px 15px 20px;` | sus, dreapta, jos, stânga (în sensul acelor de ceasornic) |
| `padding-left: 40px;` | doar pe o latură: `padding-top`, `padding-right`, `padding-bottom`, `padding-left` |

Același lucru se aplică și la `margin`.

### Exemplul 4 — `border`

```css
.carte {
  border: 3px solid tomato;
}

.punctat {
  border: 2px dashed navy;
}

.jos {
  border-bottom: 4px solid green;
}
```

`border` are trei lucruri, scrise în orice ordine, separate prin spațiu: **grosimea**, **stilul** și **culoarea**. Stiluri: `solid` (linie), `dashed` (liniuțe), `dotted` (puncte), `double` (dublu). Poți pune chenar doar pe o latură: `border-top`, `border-right`, `border-bottom`, `border-left`.

**Încearcă tu (6 min)**  
- [ ] Dă unei cutii `padding` de 20px și vezi cum se mărește spațiul din jurul textului  
- [ ] Fă o cutie cu chenar punctat și una cu chenar doar jos  
- [ ] Schimbă `padding` cu două valori (`10px 30px`) și observă diferența  

---

## 4. Spațiu în afară și centrare

### Exemplul 5 — `margin`

```css
.carte {
  margin: 20px;
}

.centrata {
  width: 300px;
  margin: 0 auto;
}

.jos {
  margin-bottom: 30px;
}
```

`margin` este spațiul **din afara** chenarului. Se scrie ca `padding`: o valoare, două, patru sau pe o singură latură (`margin-top`, `margin-bottom`…).

Cel mai folositor truc: **`margin: 0 auto;`** pe o cutie cu lățime fixă o **centrează** pe orizontală. `auto` înseamnă „calculatorul împarte singur spațiul rămas la stânga și la dreapta”. Merge doar dacă cutia are `width` sau `max-width`.

> `padding` este **în interior** (are fundalul cutiei), iar `margin` este **în afară** (este transparent). Dacă vrei spațiu între două cutii, folosești `margin`.

**Încearcă tu (5 min)**  
- [ ] Pune `margin: 20px;` pe trei cutii și vezi spațiul dintre ele  
- [ ] Dă unei cutii `width: 300px;` și `margin: 0 auto;` și vezi cum se centrează  
- [ ] Schimbă `margin` cu patru valori și observă fiecare latură  

---

## 5. Mărimea reală, `block` și `inline`

### Exemplul 6 — Cutia pare mai mare decât ai cerut: `box-sizing`

```css
.cutie {
  width: 200px;
  padding: 20px;
  border: 5px solid navy;
}
```

Câtă lățime ocupă cutia? Nu 200px! Calculatorul adaugă la `width` și `padding`, și `border`:

```text
200 (conținut) + 20 + 20 (padding) + 5 + 5 (border) = 250px
```

Asta încurcă mult. Soluția: spune calculatorului să socotească `padding` și `border` **în interiorul** lățimii:

```css
* {
  box-sizing: border-box;
}
```

`*` înseamnă „toate elementele”. Acum o cutie cu `width: 200px;` ocupă **exact** 200px, oricât `padding` și `border` ai pune. Scrie această regulă **prima** în fiecare `stil.css`, de azi încolo.

### Exemplul 7 — `block`, `inline` și `inline-block`

Elementele au un fel de a se așeza, numit `display`:

| `display` | Cum se comportă | Exemple |
|-----------|-----------------|---------|
| `block` | pe **rând nou**, ocupă toată lățimea; primește `width`, `height`, `margin` | `div`, `p`, `h1`, `ul` |
| `inline` | **în interiorul rândului**; nu primește `width` și `height` | `span`, `a`, `em`, `strong` |
| `inline-block` | în rând, **dar** primește `width`, `height`, `padding` și `margin` | butoane, etichete |

```css
.eticheta {
  display: inline-block;
  background-color: gold;
  padding: 5px 12px;
  margin: 5px;
}
```

```html
<span class="eticheta">Nou</span>
<span class="eticheta">Rar</span>
<span class="eticheta">Popular</span>
```

Dacă un `span` nu vrea să primească lățime sau spațiu sus și jos, probabil este `inline`. Schimbă `display` în `inline-block` și funcționează.

**Gata când:**  
- [ ] Ai pus `* { box-sizing: border-box; }` la începutul fișierului `stil.css`  
- [ ] Poți calcula lățimea unei cutii cu `padding` și `border`, fără și cu `border-box`  
- [ ] Ai făcut trei etichete în rând, cu `display: inline-block;`  

---

## 6. Colțuri, umbră, imagini și proiect

### Exemplul 8 — Colțuri rotunjite, umbră și buton

```css
.carte {
  border: 2px solid tomato;
  border-radius: 12px;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.3);
  padding: 15px;
}

.cerc {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: gold;
}

.buton {
  display: inline-block;
  background-color: tomato;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 8px;
}
```

```html
<a class="buton" href="#">Apasă aici</a>
```

- `border-radius` rotunjește colțurile. `50%` pe o cutie cu lățimea egală cu înălțimea face un **cerc**;  
- `box-shadow` are patru valori: spre dreapta, în jos, încețoșarea și culoarea (de obicei negru transparent);  
- un link cu `display: inline-block;`, `padding`, fundal și colțuri rotunjite arată ca un **buton**.

### Exemplul 9 — Imagini care nu ies din cutie

```css
img {
  max-width: 100%;
  height: auto;
}
```

O imagine mare poate ieși din cutia ei. Cu `max-width: 100%;` ea nu devine niciodată mai lată decât cutia în care stă, iar `height: auto;` păstrează proporțiile. Este o regulă bună pentru **orice** pagină.

### Exemplul 10 — „Cărți de joc cu animale, versiunea frumoasă”

Fișierul `index.html`:

```html
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cărți de joc cu animale</title>
  <link rel="stylesheet" href="stil.css">
</head>
<body>
  <h1>Cărți de joc cu animale</h1>

  <div class="carte">
    <h2>Pisica</h2>
    <p>Doarme toată ziua și vânează seara.</p>
    <p class="putere">Putere: <span class="numar">7</span></p>
    <a class="buton" href="#">Alege acest animal</a>
  </div>

  <div class="carte rara">
    <h2>Delfinul de aur</h2>
    <p>Înoată repede și face salturi mari.</p>
    <p class="putere">Putere: <span class="numar">10</span></p>
    <a class="buton" href="#">Alege acest animal</a>
  </div>

  <div class="carte">
    <h2>Cățelul</h2>
    <p>Aleargă prin curte și își apără prietenii.</p>
    <p class="putere">Putere: <span class="numar">8</span></p>
    <a class="buton" href="#">Alege acest animal</a>
  </div>
</body>
</html>
```

Fișierul `stil.css`:

```css
/* Regula de bază: padding și border intră în lățime */
* {
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: honeydew;
  color: #264653;
  margin: 0;
  padding: 20px;
}

h1 {
  text-align: center;
}

/* Cărțile */
.carte {
  width: 300px;
  margin: 20px auto;
  padding: 15px 20px;
  background-color: white;
  border: 3px solid navy;
  border-radius: 14px;
  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.25);
}

.carte h2 {
  margin-top: 0;
  color: navy;
}

.rara {
  background-color: gold;
  border-color: darkgoldenrod;
}

/* Puterea */
.putere {
  font-weight: bold;
}

.numar {
  display: inline-block;
  width: 36px;
  height: 36px;
  line-height: 36px;
  background-color: crimson;
  color: white;
  text-align: center;
  border-radius: 50%;
}

/* Butonul */
.buton {
  display: inline-block;
  background-color: tomato;
  color: white;
  text-decoration: none;
  padding: 8px 18px;
  border-radius: 8px;
}
```

Fă pagina cu **animalele tale**: minimum 4 cărți. Observă cum o singură regulă `.carte` rotunjește, umbrește și centrează toate cărțile, iar `.rara` schimbă doar fundalul uneia.

**Gata când:**  
- [ ] Pagina are cel puțin 4 cărți centrate, cu chenar, colțuri rotunjite și umbră  
- [ ] Ai `* { box-sizing: border-box; }` prima în `stil.css`  
- [ ] Ai un buton făcut dintr-un link și o etichetă `inline-block`  
- [ ] Ai verificat cutiile în DevTools  

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Cărți de joc cu animale, versiunea frumoasă” (obligatoriu)
Fă o pagină cu `index.html` și `stil.css`, cu:
- regula `* { box-sizing: border-box; }` prima în `stil.css`;
- **minimum 4 cărți** `<div class="carte">`, centrate cu `margin: 0 auto;`, cu `width`, `padding`, `border`, `border-radius` și `box-shadow`;
- cel puțin o carte cu două clase (`carte rara`);
- un buton făcut dintr-un link, cu `display: inline-block;`;
- un număr de putere într-un `<span>` rotunjit, cu `inline-block`;
- cel puțin două comentarii în CSS.

Verifică pagina cu Live Server.

### Exercițiul B — Calculează
Calculează lățimea totală a cutiilor: (1) `width: 300px; padding: 10px; border: 2px solid;` fără `border-box`; (2) aceeași cutie, cu `box-sizing: border-box`; (3) la `margin: 5px 10px 15px 20px;` spune câți pixeli sunt sus, dreapta, jos și stânga.

### Exercițiul C — Scrie regula
Scrie în CSS: (1) o cutie lată de 250px, cu spațiu în interior de 15px, chenar gri de 2px, colțuri rotunjite de 10px, centrată pe pagină; (2) o etichetă `inline-block` cu fundal verde deschis, spațiu `5px 10px` și colțuri rotunjite; (3) o regulă care face imaginile să nu iasă din cutie.

### Exercițiul D — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```text
.cutie {
  width: 200;
  padding: 10px 20px 30px 40px 50px;
  border: solid 2px;
  margin = 10px;
}
```

### Exercițiul E — Explică cu cuvintele tale
Pe foaie: care sunt cele patru straturi ale unei cutii, de la interior spre exterior? Care este diferența dintre `padding` și `margin`? De ce punem `box-sizing: border-box`?

**Gata când:**  
- [ ] Folderul `Prenume_Nume_W3_L4` are `index.html` și `stil.css`  
- [ ] Cărțile au chenar, colțuri rotunjite, umbră și sunt centrate  
- [ ] Ai folosit `box-sizing: border-box`, `inline-block` și un buton  
- [ ] Ai răspuns la exercițiile B–E  

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Fă un cerc mai mare (100px) cu `border-radius: 50%` și pune în el un număr mare, centrat cu `text-align: center;` și `line-height` egal cu înălțimea  
- [ ] Fă o cutie cu un chenar gros doar în stânga, într-o culoare vie (`border-left: 8px solid tomato;`)  
- [ ] Fă un „card de profil” cu o imagine pătrată de 120px (fără persoane) și colțuri rotunjite  
- [ ] În DevTools, schimbă valorile `padding` și `margin` în panoul **Styles** și vezi cum se mișcă cutia pe pagină  

---

## Greșeli frecvente
1. **Ai uitat `box-sizing: border-box`** — cutiile ies mai late decât ai calculat.  
2. **Ai scris `width: 200`** fără `px` — numerele fără unitate nu merg (cu excepția lui `0`).  
3. **Ai scris cinci valori la `padding`** — se scriu una, două, trei sau patru valori, nu mai multe.  
4. **Ai scris `margin = 10px`** — între proprietate și valoare se pun două puncte.  
5. **`margin: 0 auto;` nu centrează** — cutia nu are `width` sau `max-width`, sau este `inline`.  
6. **Ai pus `width` pe un `span`** — `span` este `inline` și îl ignoră; folosește `inline-block`.  
7. **Ai folosit `margin` când voiai spațiu în interior** (sau invers) — spațiul interior este `padding`.  
8. **Imaginea iese din cutie** — adaugă `img { max-width: 100%; height: auto; }`.  
9. **Ai pus înălțime fixă pe o cutie cu text** — textul poate ieși din ea; folosește `min-height`.  
10. **Ai crezut că `border-radius: 50%` face cerc la orice cutie** — doar când lățimea este egală cu înălțimea.  

---

## Recapitulare pe scurt
1. Fiecare element este o cutie: conținut, `padding`, `border`, `margin`.  
2. `padding` este în interiorul chenarului; `margin` este în afară.  
3. `padding` și `margin` pot avea 1, 2 sau 4 valori; `0 auto` centrează o cutie cu lățime.  
4. `border: grosime stil culoare;` desenează chenarul; `border-radius` rotunjește.  
5. `* { box-sizing: border-box; }` face ca `width` să includă `padding` și `border`.  
6. `block` ia un rând, `inline` stă în rând, `inline-block` stă în rând și primește lățime și spațiu.

## Quiz scurt
- Care sunt cele patru straturi ale unei cutii?  
- Ce face `margin: 0 auto;`?  
- Cât ocupă o cutie cu `width: 200px; padding: 20px; border: 5px solid;` fără `border-box`?  
- Ce `display` îi dai unui `span` ca să primească lățime?  
- Cum faci un buton dintr-un link?

## Temă
Fă o pagină „Carduri de jucători” cu **5 carduri** ale unor jucători inventați, fiecare cu nume, o descriere scurtă și un buton. Una dintre cărți are și clasa `capitan` cu alt fundal. Salvează în `Prenume_Nume_W3_L4`.

## Ce urmează — Lecția 5
Învățăm **Flexbox**: așezăm cutiile una lângă alta, într-un rând, le distanțăm și le centrăm fără să mai calculăm marginile. Din cărți vom face un rând frumos de carduri.

---

## Răspunsuri pentru profesor
- **Exercițiul B:** (1) 300 + 10 + 10 + 2 + 2 = 324px; (2) 300px; (3) sus 5px, dreapta 10px, jos 15px, stânga 20px.  
- **Exercițiul C:** (1) `.cutie { width: 250px; padding: 15px; border: 2px solid gray; border-radius: 10px; margin: 0 auto; }`; (2) `.eticheta { display: inline-block; background-color: lightgreen; padding: 5px 10px; border-radius: 6px; }`; (3) `img { max-width: 100%; height: auto; }`.  
- **Exercițiul D:** (1) `width: 200` trebuie `200px`; (2) `padding` nu poate avea cinci valori; (3) `margin = 10px` trebuie `margin: 10px`.  
- **Exercițiul E:** conținut, `padding`, `border`, `margin`; `padding` este spațiul din interior (are fundalul cutiei), `margin` este spațiul din afară (transparent); `border-box` face ca `width` să includă `padding` și `border`, deci cutia are mărimea scrisă.  
- **Notă pentru profesor:** desenul cu caractere din Exemplul 1 este un ajutor; arată cutia în DevTools pe proiector. În Exemplul 6, calculul 200 + 40 + 10 = 250px este punctul-cheie al lecției; verifică că toți elevii l-au înțeles înainte de `border-box`. `margin` între cutii vecine se poate „topi” într-una singură (se ia cea mai mare valoare), dar nu insistăm în această lecție.
