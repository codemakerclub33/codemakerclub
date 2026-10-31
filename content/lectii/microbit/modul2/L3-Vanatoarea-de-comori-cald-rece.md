# Lecția 3 — Pedometrul
### Accelerometrul numără pașii
**Modulul 2 · Proiecte Maker cu micro:bit (blocuri)**  
**Code Maker Club · micro:bit Maker**

> Azi înveți să recunoști o **mișcare** din numere și faci **„Pedometrul”**:  
> placa numără pașii tăi, iar când ajungi la țintă te felicită.  
> Fișier: `Prenume_Nume_MB2_L03` (ex. `Ana_Pop_MB2_L03`)

---

## Obiectiv
La finalul orei folosești `acceleration (mg) strength` ca să recunoști un pas, alegi un **prag** și eviți să numeri același pas de două ori.  
**Minim:** placa numără pașii (pragul `1300`), A arată totalul, B îl pune pe `0`, cu **cel puțin 8 blocuri diferite**.  
**Ținta orei (Complet):** partea a doua: placa te felicită când ajungi la țintă (`20` de pași), iar **A+B** mărește ținta cu `10`, cu cel puțin **6 blocuri diferite**.

## De ce contează
Ceasurile de mână și telefoanele numără pașii pe care îi faci într-o zi. Medicii și sportivii le folosesc ca să vadă cât te miști.  
Azi faci tu un pedometru și vezi cum un **senzor de mișcare** devine un **contor**.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L2: `else if`, `map`, busola |
| 10–30 | Cum simte placa un pas? `acceleration strength` |
| 30–50 | Pragul: măsurăm și alegem |
| 50–65 | Pauza anti-dublare |
| 65–95 | Pedometrul (**Minim**) |
| 95–112 | **Complet:** ținta și mesajul |
| 112–120 | Recap, bonus, arăți ce ai gata |

**Unelte azi:** placa micro:bit · cablu micro-USB · browser Chrome sau Edge · [makecode.microbit.org](https://makecode.microbit.org)

**Capitole azi:**  
<span style="color:#D400D4;font-weight:700">Input</span> · <span style="color:#00A4A6;font-weight:700">Logic</span> · <span style="color:#DC143C;font-weight:700">Variables</span> · <span style="color:#1E90FF;font-weight:700">Basic</span>  
*(un bloc nou: `acceleration (mg) strength` (Input, la „more”).)*

**Blocurile de azi:**

| Bloc | Ce face |
|------|---------|
| <span style="color:#D400D4;font-weight:700">acceleration (mg) strength</span> | cât de puternică e mișcarea, indiferent de direcție; în repaus e aproape `1000` |

*Din lecțiile trecute le știi deja:* <span style="color:#1E90FF;font-weight:700">on start</span>, <span style="color:#1E90FF;font-weight:700">forever</span>, <span style="color:#1E90FF;font-weight:700">show number</span>, <span style="color:#1E90FF;font-weight:700">show string</span>, <span style="color:#1E90FF;font-weight:700">show icon</span>, <span style="color:#1E90FF;font-weight:700">pause (ms)</span>, <span style="color:#1E90FF;font-weight:700">clear screen</span>, <span style="color:#D400D4;font-weight:700">on button pressed</span>, <span style="color:#DC143C;font-weight:700">set</span>, <span style="color:#DC143C;font-weight:700">change</span>, <span style="color:#00A4A6;font-weight:700">if … then</span>, <span style="color:#00A4A6;font-weight:700">0 > 0</span>, <span style="color:#00A4A6;font-weight:700">0 = 0</span>.

---

## Pas cu pas

### 1) Cum simte placa un pas?
Fiecare pas e o mică **zguduitură**. Accelerometrul o simte. <span style="color:#D400D4;font-weight:700">acceleration (mg) strength</span> dă **forța totală** a mișcării, într-un singur număr (în **mg**).

În repaus, forța e aproape de `1000` (atâta e atracția Pământului). Când placa se zguduie, numărul **crește**.

Încearcă în simulator: într-un <span style="color:#1E90FF;font-weight:700">forever</span>, <span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#D400D4;font-weight:700">acceleration (mg) strength</span>. Cu butonul de scuturare numărul sare mult peste `1000`.

**Încearcă tu — (8–10 min)**  
- [ ] În repaus vezi un număr aproape de `1000`  
- [ ] La scuturare numărul crește mult  

### 2) Pragul: măsurăm și alegem
Un **prag** e numărul de la care spunem „asta a fost un pas”. Nu îl ghicim, îl **măsurăm**:

1. Ții placa în mână și mergi încet prin clasă, cu un <span style="color:#1E90FF;font-weight:700">forever</span> care arată forța  
2. Notezi cel mai mare număr la fiecare pas  
3. Alegi un prag **puțin sub** acele numere  

Noi pornim de la `1300`; tu îl poți schimba după mersul tău.

**Încearcă tu — (8–10 min)**  
- [ ] Ai notat forța la 5 pași  
- [ ] Ai ales pragul tău (de obicei între `1200` și `1600`)  

### 3) Pauza anti-dublare
Un pas durează mai mult decât o clipă, iar forța rămâne mare câteva zeci de milisecunde. Fără **pauză**, placa ar număra **același pas de mai multe ori**.

De aceea, după fiecare pas numărat punem <span style="color:#1E90FF;font-weight:700">pause (ms)</span> `400`: placa „așteaptă” până se termină pasul.

<span style="color:#00A4A6;font-weight:700">if</span> `acceleration strength > 1300` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `pasi` by `1`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `400`

**Încearcă tu — (5–8 min)**  
- [ ] Fără pauză, numărul crește prea repede  
- [ ] Cu `400` numără aproape corect  

### 4) Pedometrul: Minim
1. Proiect nou: `Prenume_Nume_MB2_L03`  
2. Creezi variabila `pasi`  
3. În <span style="color:#1E90FF;font-weight:700">on start</span>: <span style="color:#DC143C;font-weight:700">set</span> `pasi` to `0`  
4. În <span style="color:#1E90FF;font-weight:700">forever</span>: <span style="color:#00A4A6;font-weight:700">if</span> `acceleration strength > 1300` → <span style="color:#DC143C;font-weight:700">change</span> `pasi` by `1` și <span style="color:#1E90FF;font-weight:700">pause (ms)</span> `400`  
5. La <span style="color:#D400D4;font-weight:700">on button A pressed</span>: <span style="color:#1E90FF;font-weight:700">show number</span> `pasi`, pauză, <span style="color:#1E90FF;font-weight:700">clear screen</span>  
6. La <span style="color:#D400D4;font-weight:700">on button B pressed</span>: <span style="color:#DC143C;font-weight:700">set</span> `pasi` to `0` și o bifă `Yes`  

Programul tău (Minim):

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `pasi` to `0`  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `acceleration strength > 1300` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">change</span> `pasi` by `1`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `400`  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `pasi`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `pasi` to `0`  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Yes`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>

**Încearcă tu — (15–20 min)**  
- [ ] Mergi 10 pași și placa arată un număr apropiat de 10  
- [ ] B pune numărătoarea pe `0`  
- [ ] Programul e pe placa adevărată  

### 5) Complet: ținta și mesajul
Adăugăm o **țintă**: după `20` de pași, placa te felicită.

1. Creezi variabila `tinta`; în <span style="color:#1E90FF;font-weight:700">on start</span>: <span style="color:#DC143C;font-weight:700">set</span> `tinta` to `20`  
2. În <span style="color:#00A4A6;font-weight:700">if</span> de la pas, după <span style="color:#DC143C;font-weight:700">change</span> `pasi` by `1`: un alt <span style="color:#00A4A6;font-weight:700">if</span> `pasi = tinta` → <span style="color:#1E90FF;font-weight:700">show icon</span> `Happy`, <span style="color:#1E90FF;font-weight:700">show string</span> `Bravo`, pauză, <span style="color:#1E90FF;font-weight:700">clear screen</span>  
3. La <span style="color:#D400D4;font-weight:700">on button A+B pressed</span>: <span style="color:#DC143C;font-weight:700">change</span> `tinta` by `10` și <span style="color:#1E90FF;font-weight:700">show number</span> `tinta`  

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `pasi` to `0`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `tinta` to `20`  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `acceleration strength > 1300` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">change</span> `pasi` by `1`  
&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `pasi = tinta` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Happy`  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `Bravo`  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `400`  

<span style="color:#D400D4;font-weight:700">on button A+B pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `tinta` by `10`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `tinta`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>

**Încearcă tu — (15–20 min)**  
- [ ] La `20` de pași apare fața veselă și `Bravo`  
- [ ] A+B mărește ținta (`30`, `40`, …)  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  

---

## Greșeli frecvente
1. **Numără prea mulți pași** — pragul e prea mic sau pauza e prea scurtă. Mărește-le.  
2. **Nu numără nimic** — pragul e prea mare. Testează cu un `forever` care arată forța.  
3. **Numărul crește când stai** — pragul e sub `1000`. Pune-l peste.  
4. **`Bravo` nu apare** — <span style="color:#00A4A6;font-weight:700">if</span> `pasi = tinta` e **în afara** lui <span style="color:#00A4A6;font-weight:700">if</span> de la pas.  
5. **B nu pune pe `0`** — ai pus `change`, nu `set`.  
6. **A arată un număr și dispare repede** — lipsește `pause (ms)` după `show number`.  

---

## De făcut azi — „Pedometrul”
Salvat: `Prenume_Nume_MB2_L03`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1** — placa numără pașii (prag `1300`), A arată totalul, B îl pune pe `0`, cu **cel puțin 8 blocuri diferite**, pe placă |
| **Complet (ținta orei)** | Minim + **Pasul 2** — ținta `20` cu mesaj și A+B care mărește ținta, cu cel puțin **6 blocuri diferite** |

Dacă rămâi în urmă: **oprește-te la Minim** și salvează. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Pedometrul *(Minim)*
<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `pasi` to `0`  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `acceleration strength > 1300` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">change</span> `pasi` by `1`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `400`  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `pasi`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `pasi` to `0`  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Yes`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>

- [ ] Proiect nou cu numele `Prenume_Nume_MB2_L03`  
- [ ] Variabila `pasi` creată  
- [ ] Ai cel puțin **8 blocuri diferite**: <span style="color:#1E90FF;font-weight:700">on start</span>, <span style="color:#DC143C;font-weight:700">set</span>, <span style="color:#1E90FF;font-weight:700">forever</span>, <span style="color:#00A4A6;font-weight:700">if … then</span>, <span style="color:#00A4A6;font-weight:700">0 > 0</span>, <span style="color:#D400D4;font-weight:700">acceleration (mg) strength</span>, <span style="color:#DC143C;font-weight:700">change</span>, <span style="color:#1E90FF;font-weight:700">pause (ms)</span>, <span style="color:#D400D4;font-weight:700">on button pressed</span>, <span style="color:#1E90FF;font-weight:700">show number</span>  
- [ ] Programul e trimis pe placă  

**→ Ai Minim când:** un coleg face 10 pași și A arată un număr între `8` și `12`.

### Pasul 2 — Ținta și mesajul *(Complet)*
<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `pasi` to `0`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `tinta` to `20`  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `acceleration strength > 1300` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">change</span> `pasi` by `1`  
&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `pasi = tinta` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Happy`  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `Bravo`  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `400`  

<span style="color:#D400D4;font-weight:700">on button A+B pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `tinta` by `10`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `tinta`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>

- [ ] Variabila `tinta` pusă la `20` în `on start`  
- [ ] La `pasi = tinta` apar <span style="color:#1E90FF;font-weight:700">show icon</span> `Happy` și <span style="color:#1E90FF;font-weight:700">show string</span> `Bravo`  
- [ ] A+B: <span style="color:#DC143C;font-weight:700">change</span> `tinta` by `10`  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  
- [ ] Salvat din nou: `Prenume_Nume_MB2_L03`  

**Gata Complet când:** la `20` de pași apare `Bravo`, iar A+B mută ținta la `30`.

---

## Bonus ★★★ — Provocare: Bara de pași
*Doar dacă ai terminat Complet.*

- [ ] Schimbă pragul și numără pași în clasă, ca să vezi ce potrivire e cea mai bună  
- [ ] **Provocarea:** la A, în loc de număr, apare o **bară de LED-uri** care se umple după cât te apropii de țintă: <span style="color:#5C2D91;font-weight:700">plot bar graph of 0 up to 0</span> cu `pasi` și `tinta`. Un coleg numără cu voce tare `20` de pași, iar placa trebuie să arate bara **plină** (greșeală cel mult `2` pași).  

## Recapitulare rapidă
1. <span style="color:#D400D4;font-weight:700">acceleration (mg) strength</span> dă forța totală a mișcării; în repaus e aproape `1000`  
2. Pragul se **măsoară**, nu se ghicește  
3. Pauza după un pas evită numărarea dublă  
4. O țintă (`tinta`) face programul să „știe” când ai reușit  
5. Un senzor devine contor cu `if` + `change`  
6. Minim = Pasul 1 · Complet = Pasul 1 + 2  

## Schema pe scurt *(pe foaie)*
<span style="color:#1E90FF;font-weight:700">forever</span>: <span style="color:#00A4A6;font-weight:700">if</span> forța `> 1300` → `pasi + 1` → pauză `400`

A → arată `pasi` · B → `pasi = 0`

`pasi = tinta` → `Happy` + `Bravo` · A+B → `tinta + 10`

**Quiz scurt (cu profesorul):**  
- Ce număr dă forța în repaus?  
- Cum alegi pragul pentru pași?  
- De ce punem pauză după un pas?  
- Ce face `if pasi = tinta`?  
- Cum ai face placa să arate pașii pe o bară?  

## Temă (opțional)
- Dacă ai doar Minim: acasă, adaugi ținta și mesajul (Pasul 2), în același `Prenume_Nume_MB2_L03`.  
- Dacă ai Complet: pui placa la brâu sau în buzunar și numeri pașii până la ușă; notezi cât a numărat placa și cât ai numărat tu.  
- Dacă ai terminat și Bonusul: faci o copie și schimbi ținta la `50`.  

## Ce urmează
În **Lecția 4** placa devine **ceas**: cu alarmă care te trezește.
