# LECȚIA 8 — Apariții pe rând
### Animații cu `@keyframes`
**Modulul 3 · CSS: Stil și culoare · 2 ore**  
**Code Maker Club · CSS Stylist**

> La `transition` elementul se mișcă doar când ceri tu, cu mouse-ul. O **animație** pornește **singură** și poate avea mai mulți pași. Azi faci capitolele paginii tale să apară lin, unul după altul, când se încarcă pagina, și înveți să respecți oamenii care nu vor mișcare pe ecran. Lucrezi tot pe `tema.html`, în același `stil.css`.  
> Proiect: **„Apariții pe rând”** · folder: `Prenume_Nume_W3_L8` (ex. `Ana_Pop_W3_L8`)

---

## Ce facem azi
La final capitolele paginii tale apar lin, unul după altul, un cuvânt important pulsează blând, iar în banner un delfin (sau ce alegi tu) înoată încoace și încolo, iar cine nu vrea mișcare nu vede nimic din toate acestea. O animație blândă face pagina plăcută. Una prea mare sau prea rapidă obosește ochii și poate fi chiar supărătoare pentru unii oameni, de aceea o facem **puțină și blândă**.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recapitulare · copiem folderul lecției trecute |
| 15–35 | `@keyframes` și `animation` · durata și `backwards` (**Exemplele 1–2**) |
| 35–50 | `animation-delay`: unul după altul (**Exemplul 3**) |
| 50–70 | Mai mulți pași și `infinite` · piesă nouă: delfinul care înoată (**Exemplele 4–5**) |
| 70–85 | Respect pentru utilizator · animația și `:hover` împreună (**Exemplele 6–7**) |
| 85–105 | Mini-proiect: toate la un loc (**Exemplul 8**) |
| 105–115 | Verificare: este animația blândă și rulează o singură dată? |
| 115–120 | Recap și temă |

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `@keyframes nume { … }` | Rețeta animației: ce se schimbă | `from`, `to`, `50%` |
| `animation: nume durată …;` | Pornește animația pe un element | `aparitie 0.7s ease backwards` |
| `infinite alternate` | Se repetă, mergând înainte și înapoi | delfinul |
| `animation-delay` | Așteptare înainte de pornire | `0.2s` |
| `opacity` | Cât de vizibil e elementul (0–1) | `0`, `1` |
| `@media (prefers-reduced-motion: reduce)` | Oprește mișcarea la cerere | `animation: none;` |

---

## 1. Recapitulare rapidă

Din lecția trecută ții minte că:
- `transition` face o schimbare lină între două stări, când pui mouse-ul;
- `:hover`, `:focus` și `:active` sunt stări;
- `transform: translateY(-5px)` mută un element în sus;
- `transition` se scrie pe starea normală, nu pe `:hover`.

**Încearcă tu (8 min)**  
- [ ] Creează folderul `Prenume_Nume_W3_L8` ca o **copie** a folderului `Prenume_Nume_W3_L7` (cu `tema.html`, `stil.css`, `imagini`, `media`)  
- [ ] Deschide `tema.html` cu Live Server și reîncarcă pagina: se mișcă ceva singur?  
- [ ] Notează într-un comentariu ce ai vrea să apară lin la încărcare (titlul, capitolele)  

> De aici înainte, exemplele arată ce scrii în `stil.css`, pe piesele paginii-model despre delfin.

---

## 2. Prima animație

### Exemplul 1 — `@keyframes` și `animation`

O animație are două părți: o **rețetă** (`@keyframes`) și o **pornire** (`animation`):

```css
@keyframes aparitie {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.carte {
  animation: aparitie 0.7s;
}
```

- `@keyframes aparitie` este rețeta, cu un **nume** ales de tine;  
- `from` este începutul și `to` este sfârșitul;  
- `opacity` spune cât de **vizibil** este elementul: `0` este invizibil, `1` este complet vizibil;  
- `animation: aparitie 0.7s;` pornește rețeta pe `.carte`, în șapte zecimi de secundă.

La încărcarea paginii, capitolele apar lin din nimic.

### Exemplul 2 — Mai mult controlul: `ease` și `backwards`

```css
@keyframes aparitie {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.carte {
  animation: aparitie 0.7s ease backwards;
}
```

- în rețetă poți schimba mai multe lucruri deodată: aici capitolul apare și urcă 15px;  
- `ease` face mișcarea să înceapă și să se termine mai încet (ca la `transition`);  
- `backwards` ține elementul în starea de început (`from`) cât timp așteaptă. Fără el, un element cu întârziere ar apărea întâi complet, apoi ar dispărea și abia apoi ar începe animația.

**Încearcă tu (7 min)**  
- [ ] Scrie rețeta `aparitie` și pornește-o pe `.carte`  
- [ ] Adaugă mutarea `translateY(15px)` și `ease backwards`  
- [ ] Reîncarcă pagina (F5) de mai multe ori și urmărește animația  

**Gata când:**  
- [ ] Capitolele apar lin la încărcare  
- [ ] Poți spune care e rețeta și care e pornirea  

---

## 3. Una după alta

### Exemplul 3 — `animation-delay`

Dacă toate capitolele apar odată, efectul nu se vede bine. Cu `animation-delay` le faci să apară pe rând:

```css
#hrana {
  animation-delay: 0.2s;
}
```

Capitolul cu `id="hrana"` așteaptă 0.2 secunde înainte să apară, deci apare **după** primul. Poți pune `0.4s` pe al treilea și așa mai departe. Regula cu `#` este mai puternică decât `.carte`, deci schimbă doar întârzierea, iar restul rămâne ca în `.carte`.

**Încearcă tu (6 min)**  
- [ ] Pune pe al doilea capitol (după `id`) `animation-delay: 0.2s;`  
- [ ] Pune pe al treilea `0.4s` și reîncarcă pagina  
- [ ] Scoate `backwards` din `.carte` și vezi ce se întâmplă cu capitolele întârziate  

---

## 4. Mai mulți pași și delfinul

### Exemplul 4 — Pași intermediari și `infinite`

În loc de `from` și `to`, poți scrie **procente**: `0%` este începutul, `100%` sfârșitul, iar între ele poți pune pași:

```css
@keyframes pulsare {
  0% {
    color: var(--accent);
  }
  50% {
    color: var(--principala);
  }
  100% {
    color: var(--accent);
  }
}

.important {
  animation: pulsare 2s infinite;
}
```

Cuvântul important trece lin de la o culoare la alta și înapoi. `infinite` înseamnă „la nesfârșit”. Alege durate **lungi** (2 secunde sau mai mult) pentru ce se repetă: o mișcare rapidă și repetată obosește.

### Piesă nouă de HTML: delfinul care înoată

Azi bannerul primește un **personaj** care se mișcă. Adaugă în banner, **după fraza ta**, o emoticoană într-un `<span>`:

```html
<div class="banner">
  Bun venit în lumea delfinilor!
  <span class="delfin">🐬</span>
</div>
```

La subiectul tău poți alege altă emoticoană: 🐱, 🚀, 🦖. Clasa o poți numi cum vrei, dar aici o numim `delfin`, iar în CSS o alegi cu **punct**. Până îi dăm mișcare, personajul stă nemișcat în banner.

### Exemplul 5 — Personajul care înoată

```css
@keyframes inoata {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100px);
  }
}

.delfin {
  display: inline-block;
  animation: inoata 4s ease-in-out infinite alternate;
}
```

- `translateX` mută pe orizontală: minus spre stânga, plus spre dreapta. Rețeta duce personajul de la locul lui până la 100px spre dreapta (la `alternate` se întoarce singur);  
- `display: inline-block;` este obligatoriu: un element „în rând” (ca `span`) ignoră `transform`;  
- `infinite` repetă mișcarea, iar `alternate` o face să meargă **înainte și apoi înapoi**, în loc să sară la început;  
- `4s` este o mișcare lentă, deci blândă.

**Încearcă tu (7 min)**  
- [ ] Fă cuvântul important să pulseze între două culori din paleta ta  
- [ ] Copiază personajul în banner și scrie rețeta `inoata`, cu `display: inline-block;`  
- [ ] Schimbă durata pulsării în `0.3s` și vezi cât de nepotrivit e; revino la `2s`  

**Gata când:**  
- [ ] Cuvântul important pulsează blând  
- [ ] Personajul din banner înoată încoace și încolo, lent  

---

## 5. Respect pentru cel care citește

### Exemplul 6 — `prefers-reduced-motion`

Unii oameni se simt rău când văd multă mișcare. Ei pot cere calculatorului „fără mișcare”, iar CSS poate afla asta:

```css
@media (prefers-reduced-motion: reduce) {
  .carte,
  .delfin,
  .important {
    animation: none;
    transition: none;
  }
}
```

Regula se aplică doar pentru cei care au cerut mai puțină mișcare. Pentru ei, `animation: none;` oprește animațiile, iar `transition: none;` oprește și tranzițiile. Scrie regula **la sfârșitul fișierului**, ca să bată regulile de dinainte.

> Sunt oameni pentru care mișcarea de pe ecran înseamnă amețeală sau greață. O pagină bună are grijă și de ei.

### Exemplul 7 — Animația și `:hover` împreună

Capitolele au acum și o animație (`aparitie`), și un `:hover` cu `transform`. Ele merg împreună doar cu `backwards`: animația se termină și apoi lasă `:hover`-ul să lucreze. Dacă ai scrie `forwards` sau `both`, animația ar **ține** valoarea finală și `:hover`-ul nu s-ar mai vedea.

```css
.carte {
  animation: aparitie 0.7s ease backwards;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
```

Fiecare proprietate (`animation`, `transition`) se scrie **o singură dată** pe un element: adună-le în aceeași regulă.

**Încearcă tu (6 min)**  
- [ ] Adaugă regula `prefers-reduced-motion` la sfârșitul fișierului  
- [ ] Verifică dacă `.carte` are o singură linie `animation` și una `transition`  
- [ ] Treci cu mouse-ul peste un capitol după ce a apărut: se ridică încă?  

---

## 6. Mini-proiect: toate la un loc

### Exemplul 8 — Tot ce ai învățat azi, în `stil.css`

Pagina despre delfin (cea din Lecția 1) primește în HTML doar personajul din banner. În `stil.css` păstrezi tot ce ai făcut în lecțiile 2–7 și adaugi o secțiune nouă, **Animațiile**, la **sfârșitul fișierului**. Delfinul este **modelul tău**:

```css
/* Animațiile */
@keyframes aparitie {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulsare {
  0% {
    color: var(--accent);
  }
  50% {
    color: var(--principala);
  }
  100% {
    color: var(--accent);
  }
}

@keyframes inoata {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100px);
  }
}

.carte {
  animation: aparitie 0.7s ease backwards;
}

#hrana {
  animation-delay: 0.2s;
}

.important {
  animation: pulsare 2s infinite;
}

.delfin {
  display: inline-block;
  animation: inoata 4s ease-in-out infinite alternate;
}

/* Respect pentru cei care nu vor mișcare */
@media (prefers-reduced-motion: reduce) {
  .carte,
  .delfin,
  .important {
    animation: none;
    transition: none;
  }
}
```

Capitolele apar lin, unul după altul, cuvântul important pulsează blând, delfinul înoată lent în banner, iar cine nu vrea mișcare nu vede nimic din toate acestea.

**Acum e rândul tău:** fă-ți propria pagină după modelul Delfinul, cu **subiectul tău și culorile tale**. Nu copia valorile delfinului: alege-ți durata, întârzierile și culorile.

**Încearcă tu (10 min)**  
- [ ] Adaugă în `stil.css`, la sfârșit, rețeta `aparitie` pe `.carte` și o întârziere pe un capitol  
- [ ] Adaugă pulsarea blândă pe cuvântul important și personajul care înoată din banner  
- [ ] Adaugă regula `prefers-reduced-motion` și compară cu modelul: ai toate cele cinci părți (rețeta, pornirea, întârzierea, personajul, respectul pentru utilizator)?  

**Gata când:**  
- [ ] Capitolele apar lin, unul după altul  
- [ ] Animațiile sunt blânde (cele care se repetă durează cel puțin 2 secunde)  
- [ ] Ai regula `prefers-reduced-motion` la sfârșit  

---

## De făcut azi — „Apariții pe rând”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | `tema.html` cu o animație `@keyframes` pornită pe capitole (`animation`) |
| **Complet** | Minim + întârzieri între capitole, personaj care înoată în banner, cuvânt important care pulsează blând, `prefers-reduced-motion` la sfârșit și `:hover`-ul care încă merge |

### Pasul 1 — Minim
Pe `tema.html`, fă capitolele să apară lin la încărcare.

- [ ] Folderul `Prenume_Nume_W3_L8` are `tema.html` și `stil.css`  
- [ ] Ai o rețetă `@keyframes` și o pornești cu `animation` pe `.carte`  
- [ ] Pagina se vede în browser, cu Live Server pornit  

### Pasul 2 — Complet
Îmbunătățești pagina:

- [ ] Capitolele apar cu întârzieri diferite, cu `animation-delay`  
- [ ] Personajul din banner înoată (`alternate`) și un cuvânt important pulsează blând (cel puțin 2 secunde)  
- [ ] Ai regula `prefers-reduced-motion` la sfârșitul fișierului  
- [ ] `:hover` pe capitole încă funcționează  

---

## Bonus ★★★ — Provocare: Mișcare cu pauză
*Doar dacă ai terminat Complet.*

Faci animația mai interesantă, tot blând.

- [ ] Fă cuvântul care pulsează să se oprească la `:hover`: `.important:hover { animation-play-state: paused; }`  
- [ ] Schimbă emoticoana din banner și `ease-in-out` în `linear`, apoi compară cum se mișcă  
- [ ] Fă „Fișa pe scurt” (`aside`) să vină din stânga, cu o rețetă nouă care folosește `translateX(-30px)`  
- [ ] Deschide DevTools (**F12**; pe Mac Cmd + Option + I), apoi meniul cu trei puncte, **More tools**, **Animations**, și reîncarcă pagina: vezi animațiile tale pe o axă a timpului  

---

## Greșeli frecvente
1. **Ai uitat numele rețetei în `animation`** sau l-ai scris diferit — numele din `@keyframes` și din `animation` trebuie să fie la fel.  
2. **Ai uitat durata** — fără ea (`0.7s`), animația nu se vede.  
3. **Ai scris `0.7` fără `s`** — scrie `0.7s`.  
4. **Ai scris `animation` de două ori** pe același element — a doua o înlocuiește pe prima.  
5. **Capitolul apare, dispare și apoi apare** — ai folosit `animation-delay` fără `backwards`.  
6. **`:hover` nu mai merge** — ai pus `forwards` sau `both` pe animația care folosește `transform`.  
7. **Animația se repetă prea repede** — pune `infinite` doar la mișcări lente (2 secunde sau mai mult).  
8. **Ai uitat regula `prefers-reduced-motion`** — cine nu vrea mișcare tot o vede.  

---

## Recapitulare pe scurt
1. O animație are o rețetă (`@keyframes`) și o pornire (`animation`).  
2. `from` și `to` (sau procente) spun ce se schimbă; `opacity` merge de la 0 la 1.  
3. `backwards` ține elementul în starea de început cât așteaptă.  
4. `animation-delay` face elementele să apară pe rând.  
5. `infinite` repetă animația; alege durate lungi pentru ce se repetă.  
6. `prefers-reduced-motion` oprește mișcarea pentru cine o cere.

## Quiz scurt
- Care sunt cele două părți ale unei animații?  
- Ce face `animation-delay`?  
- Ce înseamnă `opacity: 0`?  
- De ce nu punem animații rapide care se repetă?  
- Ce face regula `prefers-reduced-motion`?

## Temă
1. Termină animațiile paginii `tema.html`: capitole care apar pe rând, un personaj care înoată în banner, un cuvânt care pulsează blând și `prefers-reduced-motion` la sfârșit. Salvează în `Prenume_Nume_W3_L8`.  
2. Refă **4 exemple la alegere** din cele 8, scrise de mână (nu copiate).  
3. **Exemple pentru acasă.** Încearcă amândouă:

**Acasă 1 — Fișa vine din stânga.**

```css
@keyframes dinstanga {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

aside {
  animation: dinstanga 0.8s ease backwards;
}
```

`translateX` mută pe orizontală: minus înseamnă spre stânga. Rețeta aduce fișa din stânga în locul ei.

**Acasă 2 — O animație care rulează de trei ori.**

```css
.important {
  animation: pulsare 2s 3;
}
```

Numărul de după durată (`3`) spune de câte ori rulează animația, în loc de `infinite`.

4. **Încă patru exerciții (B–E):**

**B — Ce face regula?** Spune ce face fiecare regulă: (1) `animation: aparitie 1s;`; (2) `animation-delay: 0.5s;`; (3) `opacity: 0;`; (4) `infinite`; (5) `@media (prefers-reduced-motion: reduce) { … }`.

**C — Scrie regula.** Scrie în CSS: (1) o rețetă `mareste` cu `from { transform: translateY(0); }` și `to { transform: translateY(-10px); }`; (2) pornește-o pe `.cutie`, în 2 secunde; (3) o regulă care o oprește pentru cei care nu vor mișcare.

**D — Găsește greșelile.** Găsește **3 greșeli** în codul de mai jos și repară greșelile:

```text
@keyframes aparitie {
  from { opacity 0; }
  to { opacity: 1; }
}

.carte {
  animation: apariție 0.7;
}
```

**E — Explică cu cuvintele tale.** Într-un comentariu din cod: care este diferența dintre `transition` și animație? De ce nu punem animații rapide care se repetă? Ce face `prefers-reduced-motion` și pentru cine e important?

## Ce urmează — Lecția 9
Învățăm să facem pagina să arate bine și pe **telefon**, cu `@media` și cu o grilă care devine o singură coloană.

---

## Răspunsuri
- **Quiz scurt:** (1) rețeta (`@keyframes`) și pornirea (`animation`); (2) face elementul să aștepte înainte să înceapă animația; (3) elementul este complet invizibil; (4) pentru că obosesc ochii și pot da amețeală; (5) oprește mișcarea (animațiile și tranzițiile) pentru cine a cerut mai puțină mișcare în setări.  
- **Tema, exercițiul B:** (1) pornește rețeta `aparitie` și durează o secundă; (2) animația începe după o jumătate de secundă; (3) elementul este invizibil; (4) animația se repetă la nesfârșit; (5) regulile dinăuntru se aplică doar celor care au cerut mai puțină mișcare.  
- **Tema, exercițiul C:** (1) `@keyframes mareste { from { transform: translateY(0); } to { transform: translateY(-10px); } }`; (2) `.cutie { animation: mareste 2s; }`; (3) `@media (prefers-reduced-motion: reduce) { .cutie { animation: none; } }`.  
- **Tema, exercițiul D:** (1) lipsesc două puncte după `opacity` (`opacity: 0;`); (2) numele `apariție` (cu diacritică) nu e la fel cu `aparitie`; (3) `0.7` trebuie `0.7s`.  
- **Tema, exercițiul E:** `transition` pornește doar când se schimbă o stare (de exemplu `:hover`), iar animația pornește singură și poate avea mai mulți pași; mișcarea rapidă și repetată obosește și poate da amețeală; regula oprește mișcarea pentru cine are setarea activată.  
- **Dacă ritmul clasei este lent:** Exemplele 4 și 7 se pot face scurt; Exemplele 1–3 și 6 sunt obligatorii (în special `prefers-reduced-motion`); personajul care înoată (Exemplul 5) este piesa nouă a paginii și se poate termina acasă.  
- **Bonus (indicii):** (1) `animation-play-state: paused;` merge doar pe un element care are deja o animație; (2) în rețeta scurtă `animation: …` înlocuiești cuvântul `ease-in-out` cu `linear`; (3) copiază o rețetă `@keyframes` existentă, dă-i alt nume și pune `translateX(-30px)` la început, `translateX(0)` la sfârșit; (4) panoul **Animations** arată animațiile doar după ce reîncarci pagina.  
- **Notă informativă:** rotirea, săritura, `steps()` și `animation-play-state` nu sunt în lecția de bază (ultimul apare în Bonus); `alternate` apare doar la personajul din banner. `opacity` este introdusă aici, pentru apariție lină. Dacă animația ta „nu merge”, verifică mai întâi numele rețetei și litera `s` de la durată.
