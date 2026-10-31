# Lecția 6 — Farul de pe mare
### Bucle: repeat, for index și while
**Modulul 1 · Primii pași cu micro:bit (blocuri)**  
**Code Maker Club · micro:bit Starter**

> Azi înveți să **repeți** lucruri cu bucle și faci **„Farul de pe mare”**:  
> un far care pulsează, o rază de lumină care străbate marea și viteza razei controlată din butoane.  
> Fișier: `Prenume_Nume_MB1_L06` (ex. `Ana_Pop_MB1_L06`)

---

## Obiectiv
La finalul orei folosești `repeat`, `for index from … to …` și `while` și faci o rază de lumină care **se mișcă pe ecran**.  
**Minim:** un **far** care pulsează de 2 ori, urmat de o **rază de lumină** care trece prin rândul din mijloc, în `forever`, cu **cel puțin 8 blocuri diferite**.  
**Ținta orei (Complet):** partea a doua: **A** face raza mai rapidă, **B** mai lentă, fără să iasă din limite, cu cel puțin **6 blocuri diferite**.

## De ce contează
Un far de pe coastă învârte lumina noapte de noapte, mereu la fel. Programele repetă lucruri: o animație, o verificare de senzor, o alarmă.  
Cu o **buclă** scrii un lucru **o singură dată** și îl faci să se întâmple de câte ori vrei.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L5: `if`, `else`, comparații |
| 10–25 | Jocul „Repetă!”: bucle fără calculator |
| 25–45 | Trei feluri de bucle: `forever`, `repeat`, `for index` |
| 45–60 | Lampa farului cu `repeat` (**Minim**) |
| 60–85 | Raza de lumină cu `for index` (**Minim**) |
| 85–112 | **Complet:** viteza razei din butoane |
| 112–120 | Recap, bonus, arăți ce ai gata |

**Unelte azi:** placa micro:bit · cablu micro-USB · browser Chrome sau Edge · [makecode.microbit.org](https://makecode.microbit.org)

**Capitole azi:**  
<span style="color:#00A600;font-weight:700">Loops</span> · <span style="color:#5C2D91;font-weight:700">LED</span> · <span style="color:#DC143C;font-weight:700">Variables</span> · <span style="color:#00A4A6;font-weight:700">Logic</span> · <span style="color:#D400D4;font-weight:700">Input</span> · <span style="color:#1E90FF;font-weight:700">Basic</span>  
*(Math — mai târziu.)*

**Blocurile de azi:**

| Bloc | Ce face |
|------|---------|
| <span style="color:#00A600;font-weight:700">for index from 0 to 4</span> | repetă și îți dă numărul pasului (`index`): 0, 1, 2, 3, 4 |
| <span style="color:#00A600;font-weight:700">while</span> | repetă **cât timp** condiția e adevărată |
| <span style="color:#D400D4;font-weight:700">button A is pressed</span> | adevărat cât ții butonul A apăsat (îl folosim în Bonus) |

*Din lecțiile trecute le știi deja:* <span style="color:#1E90FF;font-weight:700">forever</span>, <span style="color:#00A600;font-weight:700">repeat</span>, <span style="color:#1E90FF;font-weight:700">show icon</span>, <span style="color:#1E90FF;font-weight:700">show string</span>, <span style="color:#1E90FF;font-weight:700">pause (ms)</span>, <span style="color:#1E90FF;font-weight:700">clear screen</span>, <span style="color:#5C2D91;font-weight:700">plot x y</span>, <span style="color:#DC143C;font-weight:700">set</span>, <span style="color:#DC143C;font-weight:700">change</span>, <span style="color:#00A4A6;font-weight:700">if … then</span>, <span style="color:#D400D4;font-weight:700">on button pressed</span>.

---

## Pas cu pas

### 1) Jocul „Repetă!” (fără calculator)
Un copil dă o comandă: „Bate din palme **de 4 ori**!” Ceilalți o fac. Apoi: „Bate din palme **cât timp** țin mâna sus!” și „Bate din palme **pentru totdeauna**!”

Sunt trei feluri de a repeta:
- **de un număr de ori** (`repeat`)  
- **cât timp** se întâmplă ceva (`while`)  
- **pentru totdeauna** (`forever`)

**Încearcă tu — (5 min)**  
- [ ] Spui un lucru pe care îl faci de mai multe ori pe zi  
- [ ] Arăți cu mâinile cele trei feluri de repetare  

### 2) Trei feluri de bucle
| Bloc | Cum repetă |
|------|------------|
| <span style="color:#1E90FF;font-weight:700">forever</span> | la nesfârșit |
| <span style="color:#00A600;font-weight:700">repeat</span> `4` times | de 4 ori |
| <span style="color:#00A600;font-weight:700">for index</span> from `0` to `4` | de **5** ori și îți dă numărul `index` (0, 1, 2, 3, 4) |

`index` e un număr care crește singur. Îl poți pune în <span style="color:#5C2D91;font-weight:700">plot x y</span> ca **x**: LED-ul se mută pe rând, de la stânga la dreapta.

**Încearcă tu — (5–8 min)**  
- [ ] Spui de câte ori repetă `for index from 0 to 4` (de 5 ori)  
- [ ] Spui ce valori ia `index`  

### 3) Lampa farului: repeat
Lampa farului pulsează: se face mare, apoi mică, de două ori, apoi raza pornește.

1. Proiect nou: `Prenume_Nume_MB1_L06`  
2. În <span style="color:#1E90FF;font-weight:700">forever</span>, un <span style="color:#00A600;font-weight:700">repeat</span> `2` times cu: <span style="color:#1E90FF;font-weight:700">show icon</span> `Diamond`, <span style="color:#1E90FF;font-weight:700">pause (ms)</span> `300`, <span style="color:#1E90FF;font-weight:700">show icon</span> `SmallDiamond`, <span style="color:#1E90FF;font-weight:700">pause (ms)</span> `300`  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#00A600;font-weight:700">repeat</span> `2` times  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Diamond`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `300`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `SmallDiamond`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `300`

**Încearcă tu — (8–10 min)**  
- [ ] Lampa pulsează mare-mic, de două ori, în buclă  
- [ ] Ai schimbat `2` în `3` și ai numărat pulsările  

### 4) Raza de lumină: for index
Adăugăm în <span style="color:#1E90FF;font-weight:700">forever</span>, după lampă, raza care străbate rândul din mijloc.

<span style="color:#00A600;font-weight:700">for index</span> from `0` to `4`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `index` `2`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `150`  

**Ce vezi:** un singur LED trece pe rândul din mijloc, de la stânga la dreapta, ca raza farului. <span style="color:#1E90FF;font-weight:700">clear screen</span> din buclă șterge LED-ul vechi înainte de cel nou.

**Încearcă tu — (8–10 min)**  
- [ ] Raza trece de la stânga la dreapta  
- [ ] În plot, `x` este blocul rotund `index`  

### 5) Programul: Minim
Reunești totul. <span style="color:#1E90FF;font-weight:700">forever</span> pornește odată cu <span style="color:#1E90FF;font-weight:700">on start</span>, deci primul bloc din <span style="color:#1E90FF;font-weight:700">forever</span> este <span style="color:#1E90FF;font-weight:700">pause (ms)</span> `3000` (aceeași regulă ca în lecțiile trecute), ca titlul `Far` să se termine.

Programul tău (Minim):

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `Far`  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `3000`  
&emsp;<span style="color:#00A600;font-weight:700">repeat</span> `2` times  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Diamond`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `300`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `SmallDiamond`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `300`  
&emsp;<span style="color:#00A600;font-weight:700">for index</span> from `0` to `4`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  
&emsp;&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `index` `2`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `150`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `600`

**Încearcă tu — (10–15 min)**  
- [ ] Titlul apare o dată, apoi lampa pulsează și trece raza  
- [ ] Totul se repetă singur  
- [ ] Programul e pe placa adevărată  

### 6) Complet: viteza din butoane
Facem o variabilă `viteza`: cât durează fiecare pas al razei. Număr mic înseamnă rază **rapidă**.

1. În <span style="color:#1E90FF;font-weight:700">on start</span>: <span style="color:#DC143C;font-weight:700">set</span> `viteza` to `150`  
2. În <span style="color:#00A600;font-weight:700">for index</span>, în loc de `150` pui blocul rotund `viteza` la pauză  
3. <span style="color:#D400D4;font-weight:700">on button A pressed</span>: dacă `viteza > 50`, atunci <span style="color:#DC143C;font-weight:700">change</span> `viteza` by `-50` (mai rapid, dar nu sub 50)  
4. <span style="color:#D400D4;font-weight:700">on button B pressed</span>: dacă `viteza < 500`, atunci <span style="color:#DC143C;font-weight:700">change</span> `viteza` by `50` (mai lent, dar nu peste 500)  

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `viteza` to `150`  
&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `Far`  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `3000`  
&emsp;*(lampa care pulsează, ca în Minim)*  
&emsp;<span style="color:#00A600;font-weight:700">for index</span> from `0` to `4`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  
&emsp;&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `index` `2`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `viteza`  
&emsp;*(restul rămâne ca în Minim)*  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `viteza > 50` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">change</span> `viteza` by `-50`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `viteza < 500` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">change</span> `viteza` by `50`

**Încearcă tu — (15–20 min)**  
- [ ] A face raza mai rapidă, B mai lentă  
- [ ] Viteza nu iese din limite (nu mai rapid de 50, nu mai lent de 500)  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  

---

## Greșeli frecvente
1. **Lampa pulsează doar o dată** — <span style="color:#00A600;font-weight:700">repeat</span> e în afara lui <span style="color:#1E90FF;font-weight:700">forever</span>.  
2. **Raza nu se vede** — <span style="color:#5C2D91;font-weight:700">plot x y</span> nu are `index` la `x`, ci un număr fix.  
3. **Titlul și lampa se amestecă** — <span style="color:#1E90FF;font-weight:700">forever</span> nu începe cu <span style="color:#1E90FF;font-weight:700">pause (ms)</span> `3000`.  
4. **Raza devine prea rapidă** — `viteza` a ajuns prea mică. Limitează cu <span style="color:#00A4A6;font-weight:700">if</span>.  
5. **Raza lasă urmă pe ecran** — lipsește <span style="color:#1E90FF;font-weight:700">clear screen</span> din buclă.  
6. **`index` repetă de 4 ori** — `for index from 0 to 4` repetă de **5** ori (0, 1, 2, 3, 4).  

---

## De făcut azi — „Farul de pe mare”
Salvat: `Prenume_Nume_MB1_L06`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1** — farul pulsează de 2 ori și trece raza de lumină, cu **cel puțin 8 blocuri diferite**, pe placă |
| **Complet (ținta orei)** | Minim + **Pasul 2** — A și B schimbă viteza razei în limite, cu cel puțin **6 blocuri diferite** |

Dacă rămâi în urmă: **oprește-te la Minim** și salvează. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Farul de pe mare *(Minim)*
<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `Far`  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `3000`  
&emsp;<span style="color:#00A600;font-weight:700">repeat</span> `2` times  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Diamond`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `300`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `SmallDiamond`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `300`  
&emsp;<span style="color:#00A600;font-weight:700">for index</span> from `0` to `4`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  
&emsp;&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `index` `2`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `150`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `600`

- [ ] Proiect nou cu numele `Prenume_Nume_MB1_L06`  
- [ ] Titlul `Far` apare o dată; lampa pulsează și raza trece apoi singure  
- [ ] Ai cel puțin **8 blocuri diferite**: <span style="color:#1E90FF;font-weight:700">on start</span>, <span style="color:#1E90FF;font-weight:700">show string</span>, <span style="color:#1E90FF;font-weight:700">forever</span>, <span style="color:#1E90FF;font-weight:700">pause (ms)</span>, <span style="color:#00A600;font-weight:700">repeat</span>, <span style="color:#1E90FF;font-weight:700">show icon</span>, <span style="color:#00A600;font-weight:700">for index</span>, <span style="color:#5C2D91;font-weight:700">plot x y</span>, <span style="color:#1E90FF;font-weight:700">clear screen</span>  
- [ ] Programul e trimis pe placă  

**→ Ai Minim când:** pe placă lampa pulsează, apoi raza trece prin rândul din mijloc, fără explicații.

### Pasul 2 — Viteza razei *(Complet)*
<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `viteza` to `150`  
&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `Far`  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `3000`  
&emsp;*(lampa care pulsează, ca în Minim)*  
&emsp;<span style="color:#00A600;font-weight:700">for index</span> from `0` to `4`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  
&emsp;&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `index` `2`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `viteza`  
&emsp;*(restul rămâne ca în Minim)*  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `viteza > 50` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">change</span> `viteza` by `-50`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `viteza < 500` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">change</span> `viteza` by `50`

- [ ] Variabila `viteza` pusă la `150` în <span style="color:#1E90FF;font-weight:700">on start</span>  
- [ ] Pauza din `for index` folosește `viteza`  
- [ ] A: <span style="color:#00A4A6;font-weight:700">if</span> `viteza > 50` apoi <span style="color:#DC143C;font-weight:700">change</span> −50; B: <span style="color:#00A4A6;font-weight:700">if</span> `viteza < 500` apoi <span style="color:#DC143C;font-weight:700">change</span> +50  
- [ ] Viteza nu iese din limite  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  
- [ ] Salvat din nou: `Prenume_Nume_MB1_L06`  

**Gata Complet când:** cu A raza trece mai repede, cu B mai încet, fără să se strice.

---

## Bonus ★★★ — Provocare: Farul în ceață
*Doar dacă ai terminat Complet.*

- [ ] Fă **raza** și pe rândul de jos (`y` = `4`)  
- [ ] **Provocarea:** cât timp ții apăsat A, e **ceață**: farul trimite semnal de alarmă, tot ecranul clipește rapid. Folosești <span style="color:#00A600;font-weight:700">while</span> cu <span style="color:#D400D4;font-weight:700">button A is pressed</span> și <span style="color:#00A600;font-weight:700">repeat</span>; când lași butonul, raza își reia drumul. Un coleg apasă și lasă butonul de 3 ori; placa trebuie să revină la rază de fiecare dată.  

## Recapitulare rapidă
1. <span style="color:#1E90FF;font-weight:700">forever</span> repetă la nesfârșit; <span style="color:#00A600;font-weight:700">repeat</span> de câte ori alegi; <span style="color:#00A600;font-weight:700">while</span> cât timp e adevărat  
2. `for index from 0 to 4` repetă de **5** ori și îți dă `index`  
3. <span style="color:#5C2D91;font-weight:700">plot x y</span> cu `index` la `x` mută LED-ul pe rând, ca raza farului  
4. O variabilă (`viteza`) poate controla **viteza**  
5. Limitele se pun cu <span style="color:#00A4A6;font-weight:700">if</span>, ca viteza să nu iasă din control  
6. Minim = Pasul 1 · Complet = Pasul 1 + 2  

## Schema pe scurt *(pe foaie)*
<span style="color:#1E90FF;font-weight:700">forever</span>: <span style="color:#1E90FF;font-weight:700">pause (ms)</span> `3000` → <span style="color:#00A600;font-weight:700">repeat</span> `2` (<span style="color:#1E90FF;font-weight:700">show icon</span> `Diamond` → <span style="color:#1E90FF;font-weight:700">pause (ms)</span> `300` → <span style="color:#1E90FF;font-weight:700">show icon</span> `SmallDiamond` → <span style="color:#1E90FF;font-weight:700">pause (ms)</span> `300`) → <span style="color:#00A600;font-weight:700">for index</span> (<span style="color:#1E90FF;font-weight:700">clear screen</span> → <span style="color:#5C2D91;font-weight:700">plot x y</span> `index` `2` → <span style="color:#1E90FF;font-weight:700">pause (ms)</span> `viteza`) → <span style="color:#1E90FF;font-weight:700">clear screen</span> → <span style="color:#1E90FF;font-weight:700">pause (ms)</span> `600`

A / B → <span style="color:#00A4A6;font-weight:700">if</span> → <span style="color:#DC143C;font-weight:700">change</span> `viteza`

**Quiz scurt (cu profesorul):**  
- De câte ori repetă `for index from 0 to 4`?  
- Care e diferența dintre <span style="color:#1E90FF;font-weight:700">forever</span> și <span style="color:#00A600;font-weight:700">repeat</span> `4` times?  
- Ce face <span style="color:#5C2D91;font-weight:700">plot x y</span> cu `index` la `x`?  
- De ce nu lăsăm `viteza` să ajungă la `0`?  
- Când se oprește un <span style="color:#00A600;font-weight:700">while</span>?  

## Temă (opțional)
- Dacă ai doar Minim: acasă, adaugi viteza din butoane (Pasul 2), în același `Prenume_Nume_MB1_L06`.  
- Dacă ai Complet: desenezi pe foaie un semafor care schimbă culorile în buclă și scrii ce buclă ai folosi și ce pauze ai pune.  
- Dacă ai terminat și Bonusul: faci o copie și schimbi viteza.  

## Ce urmează
În **Lecția 7** placa **simte mișcarea**: o bilă magică ce răspunde Da sau Nu.
