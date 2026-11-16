# LECȚIA 4 — Cartonașe de joc
### Cutia fiecărui element
**Modulul 3 · CSS: Stil și culoare · 2 ore**  
**Code Maker Club · CSS Stylist**

> Secretul care face CSS-ul să pară ușor: **fiecare element dintr-o pagină este o cutie**. Un titlu este o cutie, un paragraf este o cutie, o imagine este o cutie. Când înțelegi cutia, știi să așezi orice lucru exact unde vrei.  
> Proiect: **„Cartonașe de joc”** · folder: `Prenume_Nume_W3_L4` (ex. `Ana_Pop_W3_L4`)

---

## Ce facem azi
La final ai o pagină cu cărți de joc: cutii cu lățime, spațiu în interior, chenar, colțuri rotunjite și umbră, centrate pe pagină. Dacă un element nu stă unde vrei, aproape mereu problema este o cutie: un spațiu în plus, o lățime greșită sau un chenar care adaugă ceva. Cine citește bine cutiile repară o pagină în câteva minute.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · aducem pagina cu articolul de pe Wikipedia |
| 15–30 | Cutia · lățime și înălțime (**Exemplul 1**) |
| 30–45 | `padding` și `border` (**Exemplul 2**) |
| 45–60 | `margin` și centrare (**Exemplul 3**) |
| 60–80 | `box-sizing` · `block`, `inline`, `inline-block` (**Exemplele 4–5**) |
| 80–100 | Colțuri, umbră, buton · imagini (**Exemplele 6–7**) |
| 100–115 | Mini-proiect: cartonașe de joc (**Exemplul 8**) |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `width`, `max-width` | Lățimea cutiei | `300px` |
| `padding`, `border`, `margin` | Spațiu în interior, chenar, spațiu în afară | `20px`, `3px solid tomato` |
| `margin: 0 auto;` | Centrează o cutie cu lățime | `width: 300px;` |
| `box-sizing: border-box;` | `width` include `padding` și `border` | `* { … }` |
| `display: inline-block;` | În rând, cu lățime și spațiu | buton, etichetă |
| `border-radius`, `box-shadow` | Colțuri rotunjite și umbră | `12px` |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- `font-family` are o listă de rezervă care se termină cu un grup general;
- mărimea se scrie în `px` sau `rem`, fără spațiu înainte de unitate;
- `line-height` dă aer între rânduri;
- `max-width` și `margin: 0 auto;` fac o coloană îngustă și centrată (azi înțelegi de ce).

**Încearcă tu (8 min)**  
- [ ] Creează folderul `Prenume_Nume_W3_L4` cu `index.html` (scheletul complet, legat la `stil.css`) și `stil.css`  
- [ ] Pune în `<body>` un `<h1>` și trei cutii `<div class="carte">` cu câte un `<h2>` și un `<p>` despre un animal  
- [ ] Copiază în folder `tema.html`, `stil.css` și folderele `imagini` și `media` din lecția trecută  
- [ ] Deschide `tema.html` cu Live Server: ce elemente crezi că sunt „cutii” în articolul tău?  

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

Cel mai bun mod să le vezi: deschide DevTools (**F12**; pe Mac Cmd + Option + I), fila **Elements**, apasă pe un element și privește panoul **Styles**, jos, la desenul colorat al cutiei. Albastrul este conținutul, verdele este `padding`, galbenul este `border`, iar portocaliul este `margin`. Dacă treci cu mouse-ul peste element în DevTools, vezi aceleași culori pe pagină.

Acum lățimea și înălțimea:

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

**Încearcă tu (5 min)**  
- [ ] Dă unei cutii `width: 250px;` și un fundal colorat  
- [ ] Deschide DevTools și apasă pe cutie: găsește cele patru straturi colorate  
- [ ] În `tema.html`, deschide DevTools, apasă pe un paragraf și notează câți pixeli are `padding` și `margin`  

**Gata când:**  
- [ ] Ai o cutie cu o lățime fixă și un fundal colorat  
- [ ] Poți spune în ce ordine sunt straturile, de la interior spre exterior  

---

## 3. Spațiu în interior și chenar

### Exemplul 2 — `padding` și `border`

```css
.carte {
  background-color: lightyellow;
  padding: 20px;
  border: 3px solid tomato;
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

.punctat {
  border: 2px dashed navy;
}

.jos {
  border-bottom: 4px solid green;
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

`border` are trei lucruri, scrise în orice ordine, separate prin spațiu: **grosimea**, **stilul** și **culoarea**. Stiluri: `solid` (linie), `dashed` (liniuțe), `dotted` (puncte), `double` (dublu). Poți pune chenar doar pe o latură: `border-top`, `border-right`, `border-bottom`, `border-left`.

**Încearcă tu (6 min)**  
- [ ] Dă unei cutii `padding` de 20px și vezi cum se mărește spațiul din jurul textului  
- [ ] Fă o cutie cu chenar punctat și una cu chenar doar jos  
- [ ] În `tema.html`, pune pe fiecare capitol (`h2` și paragrafele lui, într-un `<section>`) `padding: 20px;` și un chenar subțire  

---

## 4. Spațiu în afară și centrare

### Exemplul 3 — `margin`

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

**Încearcă tu (6 min)**  
- [ ] Pune `margin: 20px;` pe trei cutii și vezi spațiul dintre ele  
- [ ] Dă unei cutii `width: 300px;` și `margin: 0 auto;` și vezi cum se centrează  
- [ ] În `tema.html`, dă capitolelor `margin: 20px 0;` ca să respire între ele  

---

## 5. Mărimea reală, `block` și `inline`

### Exemplul 4 — Cutia pare mai mare decât ai cerut: `box-sizing`

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

**Încearcă tu (5 min)**  
- [ ] Fă o cutie cu `width: 200px;`, `padding: 20px;` și chenar de 5px  
- [ ] Măsoară-o în DevTools: câți pixeli are?  
- [ ] Pune regula și în `stil.css` de la `tema.html`  

### Exemplul 5 — `block`, `inline` și `inline-block`

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

**Încearcă tu (6 min)**  
- [ ] Fă trei etichete `span` în rând, cu `display: inline-block;`, fundal și `padding`  
- [ ] Încearcă să le dai `width` fără `inline-block`: ce se întâmplă?  
- [ ] În `tema.html`, fă din cuvintele „Nou”, „Important” sau „De știut” etichete colorate  

**Gata când:**  
- [ ] Ai pus `* { box-sizing: border-box; }` la începutul fișierului `stil.css`  
- [ ] Poți calcula lățimea unei cutii cu `padding` și `border`, fără și cu `border-box`  
- [ ] Ai făcut trei etichete în rând, cu `display: inline-block;`  

---

## 6. Colțuri, umbră și imagini

### Exemplul 6 — Colțuri rotunjite, umbră și buton

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

### Exemplul 7 — Imagini care nu ies din cutie

```css
img {
  max-width: 100%;
  height: auto;
}
```

O imagine mare poate ieși din cutia ei. Cu `max-width: 100%;` ea nu devine niciodată mai lată decât cutia în care stă, iar `height: auto;` păstrează proporțiile. Este o regulă bună pentru **orice** pagină.

**Încearcă tu (6 min)**  
- [ ] Rotunjește colțurile unei cutii și pune o umbră ușoară  
- [ ] Fă un cerc cu `border-radius: 50%;` și un buton dintr-un link  
- [ ] În `tema.html`, rotunjește capitolele cu `border-radius: 12px;` și pune o umbră ușoară  

---

## 7. Mini-proiect

### Exemplul 8 — „Cartonașe de joc”

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

## De făcut azi — „Cartonașe de joc”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | O cutie cu lățime, spațiu în interior, chenar și spațiu în afară, centrată pe pagină |
| **Complet** | Minim + colțuri rotunjite și umbră, `box-sizing: border-box`, un buton făcut dintr-un link, imagini care nu ies din cutie și o explicație a celor patru straturi cu ajutorul DevTools |

### Pasul 1 — Minim
Pe scheletul complet, legat la `stil.css`, fă o carte cu `width`, `padding`, `border` și `margin: 0 auto;`.

- [ ] Folderul `Prenume_Nume_W3_L4` are `index.html` și `stil.css`  
- [ ] Cartea are lățime, `padding`, `border` și este centrată  
- [ ] Pagina se vede în browser, cu Live Server pornit  

### Pasul 2 — Complet
Îmbunătățești pagina:

- [ ] Ai regula `* { box-sizing: border-box; }` prima în `stil.css`  
- [ ] Ai **minimum 4 cărți** `<div class="carte">` cu `border-radius` și `box-shadow`  
- [ ] Cel puțin o carte are două clase (`carte rara`)  
- [ ] Ai un buton făcut dintr-un link, cu `display: inline-block;`  
- [ ] Ai un număr de putere într-un `<span>` rotunjit, cu `inline-block`  
- [ ] Ai cel puțin două comentarii în CSS  

---

## Bonus ★★★ — Provocare: Capitolele ca niște cărți
*Doar dacă ai terminat Complet.*

Faci `tema.html` să arate ca o pagină cu cărți.

- [ ] Pune fiecare capitol din `tema.html` într-un `<section>` și stilează-l ca o carte: `padding`, chenar, `border-radius`, `box-shadow`, `margin: 20px auto;` și `max-width`  
- [ ] Pune `img { max-width: 100%; height: auto; }` și rotunjește imaginile cu `border-radius: 8px;`  
- [ ] Fă un cerc mai mare (100px) cu `border-radius: 50%` și pune în el un număr mare, centrat cu `text-align: center;` și `line-height` egal cu înălțimea  
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
1. Fă o pagină „Carduri de jucători” cu **5 carduri** ale unor jucători inventați, fiecare cu nume, o descriere scurtă și un buton. Una dintre cărți are și clasa `capitan` cu alt fundal. Salvează în `Prenume_Nume_W3_L4`.  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — Un cadru dublu.**

```css
.cadru {
  border: 6px double navy;
  outline: 3px solid gold;
  outline-offset: 4px;
  padding: 15px;
}
```

`outline` este un al doilea contur, desenat în afara chenarului; `outline-offset` îl îndepărtează puțin.

**Acasă 2 — Un titlu cu bară în stânga.**

```css
.titlu-bara {
  border-left: 8px solid tomato;
  padding-left: 12px;
  background-color: #fff4ee;
}
```

O bară groasă în stânga este un truc simplu pentru titluri și citate.

4. **Încă patru exerciții (B–E):**

**B — Calculează.** Calculează lățimea totală a cutiilor: (1) `width: 300px; padding: 10px; border: 2px solid;` fără `border-box`; (2) aceeași cutie, cu `box-sizing: border-box`; (3) la `margin: 5px 10px 15px 20px;` spune câți pixeli sunt sus, dreapta, jos și stânga.

**C — Scrie regula.** Scrie în CSS: (1) o cutie lată de 250px, cu spațiu în interior de 15px, chenar gri de 2px, colțuri rotunjite de 10px, centrată pe pagină; (2) o etichetă `inline-block` cu fundal verde deschis, spațiu `5px 10px` și colțuri rotunjite; (3) o regulă care face imaginile să nu iasă din cutie.

**D — Găsește greșelile.** Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```text
.cutie {
  width: 200;
  padding: 10px 20px 30px 40px 50px;
  border: solid 2px;
  margin = 10px;
}
```

**E — Explică cu cuvintele tale.** Într-un comentariu din cod: care sunt cele patru straturi ale unei cutii, de la interior spre exterior? Care este diferența dintre `padding` și `margin`? De ce punem `box-sizing: border-box`?

## Ce urmează — Lecția 5
Învățăm **Flexbox**: așezăm cutiile una lângă alta, într-un rând, le distanțăm și le centrăm fără să mai calculăm marginile. Din cărți vom face un rând frumos de carduri.

---

## Răspunsuri
- **Quiz scurt:** (1) de la interior spre exterior: conținut, `padding`, `border`, `margin`; (2) centrează pe orizontală o cutie care are `width` sau `max-width`; (3) 250px (200 + 20 + 20 + 5 + 5); (4) `display: inline-block;`; (5) îi pui `display: inline-block;`, `padding`, fundal, `border-radius` și `text-decoration: none;`.  
- **Dacă ritmul clasei este lent:** în proiect cereți minimum 3 cărți și lăsați `box-shadow` și imaginile pentru bonus.  
- **Tema, exercițiul B:** (1) 300 + 10 + 10 + 2 + 2 = 324px; (2) 300px; (3) sus 5px, dreapta 10px, jos 15px, stânga 20px.  
- **Tema, exercițiul C:** (1) `.cutie { width: 250px; padding: 15px; border: 2px solid gray; border-radius: 10px; margin: 0 auto; }`; (2) `.eticheta { display: inline-block; background-color: lightgreen; padding: 5px 10px; border-radius: 6px; }`; (3) `img { max-width: 100%; height: auto; }`.  
- **Tema, exercițiul D:** (1) `width: 200` trebuie `200px`; (2) `padding` nu poate avea cinci valori; (3) `margin = 10px` trebuie `margin: 10px`.  
- **Tema, exercițiul E:** conținut, `padding`, `border`, `margin`; `padding` este spațiul din interior (are fundalul cutiei), `margin` este spațiul din afară (transparent); `border-box` face ca `width` să includă `padding` și `border`, deci cutia are mărimea scrisă.  
- **Notă pentru profesor:** desenul cu caractere din Exemplul 1 este un ajutor; arată cutia în DevTools pe proiector. În Exemplul 4, calculul 200 + 40 + 10 = 250px este punctul-cheie al lecției; verifică că toți elevii l-au înțeles înainte de `border-box`. `margin` între cutii vecine se poate „topi” într-una singură (se ia cea mai mare valoare), dar nu insistăm în această lecție.
