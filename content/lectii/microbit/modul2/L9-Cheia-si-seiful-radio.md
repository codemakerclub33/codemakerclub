# Lecția 9 — Șarpele de un pixel
### Joc: direcție, mișcare și mâncare
**Modulul 2 · Proiecte Maker cu micro:bit (blocuri)**  
**Code Maker Club · micro:bit Maker**

> Azi faci primul tău **joc complet**: **„Șarpele de un pixel”**:  
> un punct aleargă singur pe ecran, îl întorci cu A și B și prinzi „mâncarea” care apare la întâmplare.  
> Fișier: `Prenume_Nume_MB2_L09` (ex. `Ana_Pop_MB2_L09`)

---

## Obiectiv
La finalul orei folosești `remainder of` ca să „înfășori” ecranul (ieși pe o parte, intri pe cealaltă), o variabilă `dir` pentru direcție și o **funcție** ca să nu repeți codul.  
**Minim:** punctul se mișcă singur, A și B îl întorc, iar când prinde mâncarea scorul crește și mâncarea apare în alt loc, cu **cel puțin 8 blocuri diferite**.  
**Ținta orei (Complet):** partea a doua: **funcția `mancare`**, viteza **crește** la fiecare mâncare, iar la `5` puncte apare `Bravo`, cu cel puțin **6 blocuri diferite**.

## De ce contează
Un joc e făcut din câteva idei simple, puse la un loc: ceva **se mișcă**, tu **controlezi**, există un **scop** și un **scor**. Șarpele e unul dintre cele mai vechi jocuri, de pe primele telefoane.  
Azi faci varianta mică: **un singur punct**, dar cu toate ideile unui joc.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L8: depanare, funcții |
| 10–25 | Jocul „Șarpele uman”: stânga și dreapta |
| 25–45 | Direcția: variabila `dir` și `remainder of` |
| 45–70 | Mișcarea: `x`, `y` și „înfășurarea” |
| 70–95 | Mâncarea și scorul (**Minim**) |
| 95–112 | **Complet:** funcția `mancare`, viteză, câștig |
| 112–120 | Recap, bonus, arăți ce ai gata |

**Unelte azi:** placa micro:bit · cablu micro-USB · browser Chrome sau Edge · [makecode.microbit.org](https://makecode.microbit.org)

**Capitole azi:**  
<span style="color:#DC143C;font-weight:700">Variables</span> · <span style="color:#9C00C8;font-weight:700">Math</span> · <span style="color:#5C2D91;font-weight:700">LED</span> · <span style="color:#00A4A6;font-weight:700">Logic</span> · <span style="color:#3455DB;font-weight:700">Functions</span> · <span style="color:#D400D4;font-weight:700">Input</span> · <span style="color:#1E90FF;font-weight:700">Basic</span>  
*(nimic nou la blocuri; folosim tot ce știi.)*

**Blocurile de azi:**

| Bloc | Ce face |
|------|---------|
| <span style="color:#9C00C8;font-weight:700">remainder of (înfășurare)</span> | `x + 1` rămâne între `0` și `4`: după `4` urmează `0` |
| <span style="color:#DC143C;font-weight:700">dir (direcție)</span> | `0` = dreapta, `1` = jos, `2` = stânga, `3` = sus |

*Din lecțiile trecute le știi deja:* <span style="color:#1E90FF;font-weight:700">on start</span>, <span style="color:#1E90FF;font-weight:700">forever</span>, <span style="color:#1E90FF;font-weight:700">pause (ms)</span>, <span style="color:#1E90FF;font-weight:700">show string</span>, <span style="color:#1E90FF;font-weight:700">show number</span>, <span style="color:#1E90FF;font-weight:700">clear screen</span>, <span style="color:#D400D4;font-weight:700">on button pressed</span>, <span style="color:#5C2D91;font-weight:700">plot x y</span>, <span style="color:#5C2D91;font-weight:700">unplot x y</span>, <span style="color:#DC143C;font-weight:700">set</span>, <span style="color:#DC143C;font-weight:700">change</span>, <span style="color:#00A4A6;font-weight:700">if … then</span>, <span style="color:#00A4A6;font-weight:700">else if</span>, <span style="color:#00A4A6;font-weight:700">0 = 0</span>, <span style="color:#00A4A6;font-weight:700">and</span>, <span style="color:#9C00C8;font-weight:700">pick random</span>, <span style="color:#9C00C8;font-weight:700">remainder of</span>, <span style="color:#3455DB;font-weight:700">Make a Function…</span>.

---

## Pas cu pas

### 1) Jocul „Șarpele uman” (fără calculator)
Un copil e **șarpele** și merge înainte. Ceilalți spun doar „**stânga**” sau „**dreapta**”, iar el se întoarce **față de direcția lui**, nu față de clasă. Cineva „aruncă mâncarea”: un obiect pe jos pe care șarpele trebuie să-l atingă.

Și în joc, A și B sunt tot **stânga** și **dreapta**, față de direcția șarpelui.

**Încearcă tu — (5–8 min)**  
- [ ] Ai fost șarpele și ai urmat comenzile  
- [ ] Spui în ce direcție ajungi dacă mergi spre Est și cineva spune „stânga”  

### 2) Direcția: variabila dir
Direcția o ținem într-o variabilă `dir`:

| `dir` | Direcția |
|-------|----------|
| `0` | dreapta |
| `1` | jos |
| `2` | stânga |
| `3` | sus |

**B** (dreapta) crește `dir` cu `1`, dar după `3` urmează `0`. Aici ne ajută <span style="color:#9C00C8;font-weight:700">remainder of</span>: `(dir + 1)` rămâne între `0` și `3`. **A** (stânga) scade cu `1`, adică adaugă `3`:

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `dir` to <span style="color:#9C00C8;font-weight:700">remainder of</span> (dir + 3) by `4`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `dir` to <span style="color:#9C00C8;font-weight:700">remainder of</span> (dir + 1) by `4`

**Încearcă tu — (10 min)**  
- [ ] Spui ce devine `dir` dacă apeși B de la `3`  
- [ ] Spui ce devine `dir` dacă apeși A de la `0`  

### 3) Mișcarea: x, y și înfășurarea
Punctul are poziția `x`, `y` (ca la plot, de la `0` la `4`). La fiecare pas:

1. <span style="color:#5C2D91;font-weight:700">unplot x y</span> (stingi punctul vechi)  
2. Schimbi `x` sau `y` după `dir`: dreapta `x + 1`, jos `y + 1`, stânga `x − 1`, sus `y − 1`  
3. <span style="color:#5C2D91;font-weight:700">plot x y</span> (aprinzi punctul nou)  

Dacă `x` ajunge la `4` și mai face un pas, nu vrem `5` (în afara ecranului), ci `0`: ieși pe o parte, intri pe cealaltă. Cu <span style="color:#9C00C8;font-weight:700">remainder of</span> `(x + 1)` by `5` se întâmplă exact asta. Pentru **minus** `1` folosim **plus** `4` (ca la direcții): `(x + 4)` by `5`.

**Încearcă tu — (10–15 min)**  
- [ ] Punctul iese pe dreapta și intră pe stânga  
- [ ] Spui de ce `x − 1` devine `x + 4`  

### 4) Mâncarea și scorul
**Mâncarea** e un LED aprins în alt loc, la poziția `fx`, `fy`, alese cu <span style="color:#9C00C8;font-weight:700">pick random</span> `0` to `4`.

Când punctul ajunge pe mâncare (<span style="color:#00A4A6;font-weight:700">if</span> `x = fx` <span style="color:#00A4A6;font-weight:700">and</span> `y = fy`):  
- <span style="color:#DC143C;font-weight:700">change</span> `scor` by `1`  
- alegi altă poziție pentru mâncare și o aprinzi  

&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `x = fx and y = fy` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">change</span> `scor` by `1`  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `fx` to <span style="color:#9C00C8;font-weight:700">pick random</span> `0` to `4`  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `fy` to <span style="color:#9C00C8;font-weight:700">pick random</span> `0` to `4`  
&emsp;&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `fx` `fy`

**Încearcă tu — (10 min)**  
- [ ] Când prinzi mâncarea, aceasta apare în alt loc  
- [ ] Scorul crește (îl verifici cu `show number scor`)  

### 5) Șarpele: Minim
Reunești totul: Proiect nou: `Prenume_Nume_MB2_L09`. Creezi variabilele `x`, `y`, `dir`, `viteza`, `scor`, `fx`, `fy`.

În <span style="color:#1E90FF;font-weight:700">forever</span>, **primul bloc** e <span style="color:#1E90FF;font-weight:700">pause (ms)</span> `viteza`: controlează cât de repede se mișcă punctul.

Programul tău (Minim):

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `x` to `2`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `y` to `2`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `dir` to `0`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `viteza` to `400`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `scor` to `0`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `fx` to <span style="color:#9C00C8;font-weight:700">pick random</span> `0` to `4`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `fy` to <span style="color:#9C00C8;font-weight:700">pick random</span> `0` to `4`  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `x` `y`  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `fx` `fy`  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `dir` to <span style="color:#9C00C8;font-weight:700">remainder of</span> (dir + 3) by `4`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `dir` to <span style="color:#9C00C8;font-weight:700">remainder of</span> (dir + 1) by `4`  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `viteza`  
&emsp;<span style="color:#5C2D91;font-weight:700">unplot x y</span> `x` `y`  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `dir = 0` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `x` to <span style="color:#9C00C8;font-weight:700">remainder of</span> (x + 1) by `5`  
&emsp;<span style="color:#00A4A6;font-weight:700">else if</span> `dir = 1` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `y` to <span style="color:#9C00C8;font-weight:700">remainder of</span> (y + 1) by `5`  
&emsp;<span style="color:#00A4A6;font-weight:700">else if</span> `dir = 2` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `x` to <span style="color:#9C00C8;font-weight:700">remainder of</span> (x + 4) by `5`  
&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `y` to <span style="color:#9C00C8;font-weight:700">remainder of</span> (y + 4) by `5`  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `x` `y`  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `x = fx and y = fy` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">change</span> `scor` by `1`  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `fx` to <span style="color:#9C00C8;font-weight:700">pick random</span> `0` to `4`  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `fy` to <span style="color:#9C00C8;font-weight:700">pick random</span> `0` to `4`  
&emsp;&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `fx` `fy`  

> O dată din 25, mâncarea apare chiar unde e punctul și dispare când punctul pleacă. E ok, este o limită a jocului nostru mic.

**Încearcă tu — (20 min)**  
- [ ] Punctul se mișcă singur și iese pe cealaltă parte  
- [ ] A și B îl întorc  
- [ ] Prinzi mâncarea și apare alta  
- [ ] Programul e pe placa adevărată  

### 6) Complet: funcția, viteza și câștigul
Blocurile pentru mâncare sunt scrise de **două ori** (la pornire și când o prinzi). Le punem într-o funcție <span style="color:#3455DB;font-weight:700">mancare</span> (ca în Doctorul de cod).

Apoi: la fiecare mâncare, jocul **se grăbește** (<span style="color:#DC143C;font-weight:700">change</span> `viteza` by `-50`, dar nu sub `150`). La `5` puncte câștigi: `Bravo`, scorul revine la `0` și viteza la `400`.

La <span style="color:#D400D4;font-weight:700">on button A+B pressed</span>: arăți scorul.

<span style="color:#3455DB;font-weight:700">function</span> `mancare`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `fx` to <span style="color:#9C00C8;font-weight:700">pick random</span> `0` to `4`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `fy` to <span style="color:#9C00C8;font-weight:700">pick random</span> `0` to `4`  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `fx` `fy`  

*(în `on start` și în `if x = fx …` înlocuiești cele 3 blocuri cu* <span style="color:#3455DB;font-weight:700">call</span> `mancare`*)*  

*(în `if x = fx and y = fy`, după `change scor by 1`:)*  
<span style="color:#00A4A6;font-weight:700">if</span> `viteza > 150` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `viteza` by `-50`  
<span style="color:#00A4A6;font-weight:700">if</span> `scor = 5` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `Bravo`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `scor` to `0`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `viteza` to `400`  
&emsp;<span style="color:#3455DB;font-weight:700">call</span> `mancare`  

<span style="color:#D400D4;font-weight:700">on button A+B pressed</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `scor`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>

**Încearcă tu — (20 min)**  
- [ ] Funcția `mancare` e folosită în 2 locuri  
- [ ] La fiecare mâncare jocul merge mai repede  
- [ ] La `5` puncte apare `Bravo` și jocul pornește de la capăt  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  

---

## Greșeli frecvente
1. **Punctul nu se mișcă** — `forever` nu are `pause (ms)`, sau `unplot`/`plot` sunt în alt loc.  
2. **Punctul iese din ecran sau dă eroare** — lipsește `remainder of` la `x` sau `y`.  
3. **A și B întorc greșit** — verifică `+ 3` pentru A și `+ 1` pentru B, cu `remainder of 4`.  
4. **Punctul lasă urme** — lipsește `unplot x y` la începutul fiecărui pas.  
5. **Mâncarea nu se schimbă** — `set fx`/`set fy` lipsesc din `if x = fx and y = fy`.  
6. **Jocul e prea rapid** — `viteza` e prea mică; începe cu `400`.  

---

## De făcut azi — „Șarpele de un pixel”
Salvat: `Prenume_Nume_MB2_L09`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1** — punctul se mișcă singur, A și B îl întorc, iar când prinde mâncarea scorul crește, cu **cel puțin 8 blocuri diferite**, pe placă |
| **Complet (ținta orei)** | Minim + **Pasul 2** — funcția `mancare`, viteza crește și la `5` puncte apare `Bravo`, cu cel puțin **6 blocuri diferite** |

Dacă rămâi în urmă: **oprește-te la Minim** și salvează. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Șarpele de un pixel *(Minim)*
<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `x` to `2`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `y` to `2`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `dir` to `0`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `viteza` to `400`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `scor` to `0`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `fx` to <span style="color:#9C00C8;font-weight:700">pick random</span> `0` to `4`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `fy` to <span style="color:#9C00C8;font-weight:700">pick random</span> `0` to `4`  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `x` `y`  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `fx` `fy`  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `dir` to <span style="color:#9C00C8;font-weight:700">remainder of</span> (dir + 3) by `4`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `dir` to <span style="color:#9C00C8;font-weight:700">remainder of</span> (dir + 1) by `4`  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `viteza`  
&emsp;<span style="color:#5C2D91;font-weight:700">unplot x y</span> `x` `y`  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `dir = 0` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `x` to <span style="color:#9C00C8;font-weight:700">remainder of</span> (x + 1) by `5`  
&emsp;<span style="color:#00A4A6;font-weight:700">else if</span> `dir = 1` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `y` to <span style="color:#9C00C8;font-weight:700">remainder of</span> (y + 1) by `5`  
&emsp;<span style="color:#00A4A6;font-weight:700">else if</span> `dir = 2` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `x` to <span style="color:#9C00C8;font-weight:700">remainder of</span> (x + 4) by `5`  
&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `y` to <span style="color:#9C00C8;font-weight:700">remainder of</span> (y + 4) by `5`  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `x` `y`  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `x = fx and y = fy` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">change</span> `scor` by `1`  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `fx` to <span style="color:#9C00C8;font-weight:700">pick random</span> `0` to `4`  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `fy` to <span style="color:#9C00C8;font-weight:700">pick random</span> `0` to `4`  
&emsp;&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `fx` `fy`

- [ ] Proiect nou cu numele `Prenume_Nume_MB2_L09`  
- [ ] Variabilele `x`, `y`, `dir`, `viteza`, `scor`, `fx`, `fy` create  
- [ ] Ai cel puțin **8 blocuri diferite**: <span style="color:#1E90FF;font-weight:700">on start</span>, <span style="color:#DC143C;font-weight:700">set</span>, <span style="color:#5C2D91;font-weight:700">plot x y</span>, <span style="color:#D400D4;font-weight:700">on button pressed</span>, <span style="color:#9C00C8;font-weight:700">remainder of</span>, <span style="color:#1E90FF;font-weight:700">forever</span>, <span style="color:#1E90FF;font-weight:700">pause (ms)</span>, <span style="color:#5C2D91;font-weight:700">unplot x y</span>, <span style="color:#00A4A6;font-weight:700">else if</span>, <span style="color:#00A4A6;font-weight:700">0 = 0</span>, <span style="color:#9C00C8;font-weight:700">pick random</span>  
- [ ] Programul e trimis pe placă  

**→ Ai Minim când:** un coleg joacă 30 de secunde: întoarce punctul cu A și B, iese pe cealaltă parte și prinde mâncarea cel puțin o dată.

### Pasul 2 — Funcție, viteză și câștig *(Complet)*
<span style="color:#3455DB;font-weight:700">function</span> `mancare`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `fx` to <span style="color:#9C00C8;font-weight:700">pick random</span> `0` to `4`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `fy` to <span style="color:#9C00C8;font-weight:700">pick random</span> `0` to `4`  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `fx` `fy`  

*(în `on start` și în `if x = fx …` înlocuiești cele 3 blocuri cu* <span style="color:#3455DB;font-weight:700">call</span> `mancare`*)*  

*(în `if x = fx and y = fy`, după `change scor by 1`:)*  
<span style="color:#00A4A6;font-weight:700">if</span> `viteza > 150` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `viteza` by `-50`  
<span style="color:#00A4A6;font-weight:700">if</span> `scor = 5` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `Bravo`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `scor` to `0`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `viteza` to `400`  
&emsp;<span style="color:#3455DB;font-weight:700">call</span> `mancare`  

<span style="color:#D400D4;font-weight:700">on button A+B pressed</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `scor`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>

- [ ] Funcția <span style="color:#3455DB;font-weight:700">mancare</span> e apelată din `on start` și din `if x = fx …`  
- [ ] La fiecare mâncare: <span style="color:#DC143C;font-weight:700">change</span> `viteza` by `-50` (nu sub `150`)  
- [ ] La `scor = 5`: <span style="color:#1E90FF;font-weight:700">show string</span> `Bravo`, scor la `0`, viteză la `400`  
- [ ] A+B arată scorul  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  
- [ ] Salvat din nou: `Prenume_Nume_MB2_L09`  

**Gata Complet când:** jocul se grăbește la fiecare mâncare, iar la `5` puncte apare `Bravo` și pornește de la capăt.

---

## Bonus ★★★ — Provocare: Șarpele cu zid
*Doar dacă ai terminat Complet.*

- [ ] Schimbă viteza de start și pragul de câștig  
- [ ] **Provocarea:** adaugi un **zid** (un LED fix la `3`, `3`). Dacă punctul îl atinge (`x = 3` <span style="color:#00A4A6;font-weight:700">and</span> `y = 3`), jocul se termină: `GAME OVER`, scorul final și restart. Un coleg trebuie să ajungă la **`5` puncte în cel mult 60 de secunde**, fără să atingă zidul.  

## Recapitulare rapidă
1. Un joc: ceva **se mișcă**, tu **controlezi**, există **scop** și **scor**  
2. <span style="color:#9C00C8;font-weight:700">remainder of</span> „înfășoară” ecranul (după `4` vine `0`) și direcția (după `3` vine `0`)  
3. Pentru „minus 1” într-un ciclu folosești „plus (n − 1)”  
4. Mâncarea la întâmplare: `pick random 0 to 4` pentru `fx` și `fy`  
5. O **funcție** (`mancare`) evită codul repetat  
6. Minim = Pasul 1 · Complet = Pasul 1 + 2  

## Schema pe scurt *(pe foaie)*
A/B → `dir` (<span style="color:#9C00C8;font-weight:700">remainder of</span> 4) · <span style="color:#1E90FF;font-weight:700">forever</span>: pauză `viteza` → <span style="color:#5C2D91;font-weight:700">unplot x y</span> → mută după `dir` (<span style="color:#9C00C8;font-weight:700">remainder of</span> 5) → <span style="color:#5C2D91;font-weight:700">plot x y</span>

`x = fx și y = fy` → `scor + 1` → <span style="color:#3455DB;font-weight:700">call</span> `mancare`

**Quiz scurt (cu profesorul):**  
- Ce înseamnă `dir = 2`?  
- De ce `x − 1` devine `x + 4`?  
- De ce `unplot` e la începutul fiecărui pas?  
- Cum alegi o poziție la întâmplare?  
- De ce `mancare` e o funcție?  

## Temă (opțional)
- Dacă ai doar Minim: acasă, adaugi funcția `mancare` și câștigul (Pasul 2), în același `Prenume_Nume_MB2_L09`.  
- Dacă ai Complet: te gândești la un alt joc cu **un singur pixel** (de exemplu „fugi de un punct”) și îl desenezi pe foaie, cu ce controlează A și B.  
- Dacă ai terminat și Bonusul: faci o copie cu doi pereți.  

## Ce urmează
În **Lecția 10** alegi cel mai bun proiect al tău și îl prezinți: **Expoziția Maker**.
