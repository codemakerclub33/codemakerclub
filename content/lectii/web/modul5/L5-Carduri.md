# LECȚIA 5 — Carduri
**Modulul 5 · Site complet: HTML + CSS + JavaScript · 2 ore**  
**Code Maker Club · Web Builder**

> Un **card** este o căsuță cu o poză (sau o pictogramă), un titlu și puțin text. Azi faci 6 carduri și le așezi într-o grilă care **se adaptează singură**: 3 pe rând pe calculator, 2 pe tabletă, 1 pe telefon, fără să scrii nicio regulă `@media`.  
> Proiect: **„Cardurile mele”** · folder: `Prenume_Nume_W5` (continuăm în același folder)

---

## Obiectiv
La finalul orei, pe `index.html` ai o secțiune cu 6 carduri, fiecare cu pictogramă, titlu și text, așezate într-o grilă adaptivă, cu efect la `:hover`.  
**Minim:** 6 carduri cu titlu și text, cu chenar și colțuri rotunjite, într-o grilă.  
**Ținta orei (Complet):** + grilă cu `repeat(auto-fit, minmax(240px, 1fr))`, umbră și efect la `:hover` cu `transition`, `<article>` ca etichetă, pictograme ascunse cititoarelor de ecran (`aria-hidden`) și texte scrise corect.

## De ce contează
Cardurile apar pe aproape orice site: produse, știri, profiluri. Dacă știi să le faci, poți construi rapid multe tipuri de pagini.

---

## Siguranță înainte de toate
- Textele din carduri sunt **scrise de tine** sau adaptate cu profesorul. Nu copiezi texte din internet.  
- Informațiile despre animale (sau despre subiectul tău) trebuie să fie **adevărate**. Verifică într-o carte sau cu profesorul.  
- Fără date personale. Fără imagini cu oameni.  
- Efectul `:hover` este mic (o mișcare de 5 px), nu licărește.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recapitulare Grid și `article` |
| 10–35 | HTML-ul unui card (**Exemplul 1**) |
| 35–55 | Cele 6 carduri (**Exemplul 2**) |
| 55–80 | Grila adaptivă (**Exemplul 3**) |
| 80–100 | Aspectul cardului (**Exemplul 4**) |
| 100–115 | Testele (**Exemplul 5**) |
| 115–120 | Recap și temă |

---

## 1. HTML-ul unui card

### Exemplul 1 — `article` cu pictogramă, titlu și text

```html
<article class="card">
  <div class="card-poza" aria-hidden="true">🐱</div>
  <h3>Pisica</h3>
  <p>Doarme mult și vânează seara. Are mustăți care o ajută să simtă ce este în jur.</p>
</article>
```

- `<article>` este o bucată de conținut care are sens și **de sine stătător** (un card, o știre).  
- `<div class="card-poza">` conține o **emoticoană** ca pictogramă. Merge fără niciun fișier de imagine. Poți pune în loc și o imagine (`<img>`), dacă ai una potrivită.  
- `aria-hidden="true"` ascunde pictograma de cititoarele de ecran: ele citesc doar titlul și textul, care spun deja totul.  
- Titlul cardului este `<h3>`, fiindcă este sub un `<h2>` (secțiunea) care este sub `<h1>` (hero).

**Încearcă tu (10 min)**  
- [ ] Scrie primul card despre un element al subiectului tău  
- [ ] Verifică în browser: se vede pictograma, titlul și textul

---

## 2. Cele 6 carduri

### Exemplul 2 — Secțiunea cu carduri

Șterge secțiunea cu textul de probă din `index.html` și pune în loc:

```html
<section class="container sectiune">
  <h2>Animalele noastre</h2>
  <div class="carduri">
    <article class="card">
      <div class="card-poza" aria-hidden="true">🐱</div>
      <h3>Pisica</h3>
      <p>Doarme mult și vânează seara. Are mustăți care o ajută să simtă ce este în jur.</p>
    </article>
    <article class="card">
      <div class="card-poza" aria-hidden="true">🐶</div>
      <h3>Cățelul</h3>
      <p>Aleargă prin curte și își face repede prieteni. Are un miros foarte bun.</p>
    </article>
    <!-- ...încă 4 carduri, în același fel -->
  </div>
</section>
```

Un `<div class="carduri">` ține toate cardurile: el va fi **grila**. Scrie tu celelalte 4 carduri (pentru subiectul tău). Fiecare card are: o pictogramă, un titlu scurt și 1–2 propoziții adevărate.

**Încearcă tu (20 min)**  
- [ ] Scrie cele 6 carduri  
- [ ] Citește tare fiecare text și corectează greșelile  
- [ ] Verifică dacă fiecare card are `<h3>`, nu `<h1>`

---

## 3. Grila adaptivă

### Exemplul 3 — `auto-fit` și `minmax`

În `stil.css` adaugă:

```css
/* ===== Carduri ===== */
.carduri {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}
```

Cum se citește linia cu `grid-template-columns`:
- `minmax(240px, 1fr)`: fiecare coloană are **cel puțin** 240 px și, dacă mai este loc, se întinde egal cu celelalte.  
- `repeat(auto-fit, ...)`: pune **câte coloane încap** pe rând.  
- Rezultatul: lățime mare → 3–4 carduri pe rând; lățime mică → 1 card pe rând. Fără `@media`.

**Încearcă tu (15 min)**  
- [ ] Adaugă regula  
- [ ] Micșorează și mărește fereastra: se schimbă numărul de carduri pe rând?  
- [ ] Schimbă `240px` în `180px`, apoi în `320px`, și vezi diferența

---

## 4. Aspectul cardului

### Exemplul 4 — Chenar, umbră și mișcare

```css
.card {
  background-color: var(--card);
  border: 2px solid var(--linie);
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
}

.card-poza {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  margin-bottom: 0.5rem;
  font-size: 4rem;
  background-color: var(--fundal);
  border-radius: 8px;
}

.card h3 {
  margin: 0 0 0.5rem;
  color: var(--accent);
}

.card p {
  margin: 0;
}
```

- `box-shadow: 0 2px 6px ...` face o umbră mică în jurul cardului; la `:hover` umbra devine mai mare și cardul se ridică, deci pare că „se ridică de pe pagină”.  
- `transition` lista două proprietăți separate prin virgulă.  
- `.card-poza` folosește Flexbox ca să pună pictograma exact la mijloc.  
- `font-size: 4rem` mărește emoticoana.

**Încearcă tu (20 min)**  
- [ ] Adaugă regulile  
- [ ] Verifică efectul la `:hover`, cu mouse-ul  
- [ ] Schimbă culoarea titlurilor, rotunjirea și umbra, pentru a le face ale tale

---

## 5. Testele

### Exemplul 5 — Lista de verificare a cardurilor

```text
□ Sunt 6 carduri, fiecare cu pictogramă, <h3> și text
□ Cardurile sunt în <article>, într-un <div class="carduri">
□ Pe calculator sunt cel puțin 3 pe rând; pe telefon, unul pe rând
□ Cardurile au chenar, colțuri rotunjite și umbră
□ La :hover cardul se ridică puțin
□ Pictogramele au aria-hidden="true"
□ Textele sunt adevărate și fără greșeli
□ Nu apare derulare pe orizontală pe telefon
```

**Gata când:**  
- [ ] Toate punctele sunt bifate  
- [ ] Ai făcut o copie de siguranță a folderului

---

## Proiect / exerciții de finalizat AZI

### Exercițiul A — „Cardurile mele” (obligatoriu)
`index.html` are 6 carduri despre subiectul tău, într-o grilă adaptivă, cu toate punctele din Exemplul 5 bifate.

### Exercițiul B — Îl faci al tău
Fă cardurile **mai late** (schimbă `240px`) și schimbă efectul la `:hover` (de exemplu, o rotire foarte mică, `rotate(1deg)`). Notează ce ai schimbat.

### Exercițiul C — Găsește greșelile
Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```css
.carduri {
  display: flex;
  grid-template-columns: repeat(auto-fit, minmax(1fr, 240px));
  gap: 20;
}
.card:hover {
  transform: translateY(5px);
}
```

### Exercițiul D — Explică cu cuvintele tale
Pe foaie: ce face `repeat(auto-fit, minmax(240px, 1fr))`? De ce folosim `<article>`? De ce ascundem pictograma de cititoarele de ecran?

**Gata când:**  
- [ ] Cardurile merg pe calculator și pe telefon  
- [ ] Ai răspuns la exercițiile B–D

---

## Bonus / Provocare (dacă ai terminat)
- [ ] Înlocuiește pictograma unui card cu o imagine din folderul `imagini` (`<img src="imagini/g1.jpg" alt="...">`), cu `object-fit: cover;` și `height: 120px; width: 100%;`  
- [ ] Adaugă la fiecare card o etichetă mică („Mamifer”, „Pasăre”) cu `<span>` și stil de insignă  
- [ ] Adaugă un al șaptelea card și vezi cum se rearanjează grila

---

## Greșeli frecvente
1. **`display: flex` în loc de `display: grid`** când folosești `grid-template-columns`.  
2. **`minmax(1fr, 240px)`**: ordinea este minim apoi maxim (`minmax(240px, 1fr)`).  
3. **`gap: 20`** fără unitate: lipsește `px`.  
4. **Titluri `<h1>`** în carduri: sunt `<h3>`.  
5. **Texte despre animale care nu sunt adevărate.** Verifică înainte să publici.

## Recapitulare pe scurt
1. Un card este un `<article>` cu pictogramă, titlu și text.  
2. `display: grid` și `repeat(auto-fit, minmax(240px, 1fr))` fac o grilă adaptivă.  
3. `border`, `border-radius`, `box-shadow` dau aspect de card.  
4. `:hover` cu `transition` face mișcarea blândă.  
5. Verificăm și adevărul textelor.

## Quiz scurt
1. Ce face `auto-fit`?  
2. Ce înseamnă `minmax(240px, 1fr)`?  
3. Când folosim `<article>`?  
4. Ce face `aria-hidden="true"`?

## Temă
Cere unui prieten să citească cardurile tale și să spună un lucru nou aflat din ele. Dacă nu a aflat nimic, adaugă o informație interesantă. Salvează varianta în `Prenume_Nume_W5_L5`.

## Ce urmează — Lecția 6
Facem **galeria**: pozele mici într-o grilă, iar la clic apare imaginea mare, cu buton de închidere și tasta `Escape`.

---

## Răspunsuri pentru profesor
- **Exercițiul A:** pentru evaluare folosiți lista din Exemplul 5.  
- **Exercițiul B:** nu are răspuns unic; verificați că grila rămâne adaptivă.  
- **Exercițiul C:** (1) `display: flex` trebuie `display: grid`; (2) `minmax(1fr, 240px)` trebuie `minmax(240px, 1fr)`; (3) `gap: 20` trebuie `gap: 20px`. Observație: `translateY(5px)` coboară cardul; pentru ridicare trebuie `-5px`.  
- **Exercițiul D:** `repeat(auto-fit, minmax(240px, 1fr))` pune câte coloane încap, fiecare de cel puțin 240 px; `<article>` marchează o bucată de conținut cu sens propriu; cititorul de ecran citește titlul și textul, deci pictograma ar fi doar zgomot.  
- **Notă pentru profesor:** verificați adevărul informațiilor din carduri (mulți copii scriu din memorie). Dacă un elev nu are subiect cu pictograme, propuneți emoticoane potrivite sau imagini din pachetul media. La `:hover`, amintiți că pe telefon nu există mouse, deci efectul nu trebuie să fie singurul mod de a înțelege cardul.
