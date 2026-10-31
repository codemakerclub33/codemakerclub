# Lecția 9 — Seiful secret
### Stări, variabile și funcții
**Modulul 1 · Primii pași cu micro:bit (blocuri)**  
**Code Maker Club · micro:bit Starter**

> Azi înveți să ții minte **în ce stare** e programul și faci **„Seiful secret”**:  
> deschizi seiful doar cu codul corect, apăsat în ordinea bună: A apoi B apoi A.  
> Fișier: `Prenume_Nume_MB1_L09` (ex. `Ana_Pop_MB1_L09`)

---

## Obiectiv
La finalul orei folosești o **variabilă de stare** (`pas`) și o **funcție** care evită repetarea.  
**Minim:** seiful se deschide doar cu **A, B, A**; orice altă ordine arată `No` și începe de la capăt, cu **cel puțin 8 blocuri diferite**.  
**Ținta orei (Complet):** partea a doua: o **funcție** pentru greșeală și o **alarmă** după 3 greșeli până la deschidere, cu cel puțin **6 blocuri diferite**.

## De ce contează
Telefonul se deblochează cu un cod apăsat în ordine. Ușa unui seif din filme știe câte cifre ai apăsat deja.  
Pentru asta programul trebuie să **țină minte** unde a rămas. Cu o variabilă de **stare** o faci simplu.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L8: senzori, praguri, `ocupat` |
| 10–30 | Planul seifului pe foaie: stări |
| 30–45 | Pornirea și butonul A |
| 45–75 | Butonul B și testul (**Minim**) |
| 75–105 | Funcția `greseala` și alarma (**Complet**) |
| 105–120 | Recap, bonus, arăți ce ai gata |

**Unelte azi:** placa micro:bit · cablu micro-USB · browser Chrome sau Edge · [makecode.microbit.org](https://makecode.microbit.org)

**Capitole azi:**  
<span style="color:#DC143C;font-weight:700">Variables</span> · <span style="color:#3455DB;font-weight:700">Functions</span> · <span style="color:#00A4A6;font-weight:700">Logic</span> · <span style="color:#D400D4;font-weight:700">Input</span> · <span style="color:#1E90FF;font-weight:700">Basic</span>  
*(nimic nou la Basic, doar combinăm.)*

**Blocurile de azi:**

| Bloc | Ce face |
|------|---------|
| <span style="color:#3455DB;font-weight:700">Make a Function… (greseala)</span> | creezi **propriul tău bloc**, cu o grămadă de blocuri înăuntru |
| <span style="color:#3455DB;font-weight:700">call greseala</span> | apelează funcția; **o folosești de câte ori vrei** |
| <span style="color:#DC143C;font-weight:700">change greseli by 1</span> | mărește valoarea variabilei cu un număr |

*Din lecțiile trecute le știi deja:* <span style="color:#1E90FF;font-weight:700">on start</span>, <span style="color:#1E90FF;font-weight:700">show icon</span>, <span style="color:#1E90FF;font-weight:700">show string</span>, <span style="color:#1E90FF;font-weight:700">pause (ms)</span>, <span style="color:#D400D4;font-weight:700">on button pressed</span>, <span style="color:#DC143C;font-weight:700">set</span>, <span style="color:#00A4A6;font-weight:700">if … then … else</span>, <span style="color:#00A4A6;font-weight:700">0 = 0</span>.

---

## Pas cu pas

### 1) Planul seifului pe foaie
Înainte să facem blocuri, desenăm pe foaie **stările** seifului. Variabila `pas` spune unde a ajuns:

| `pas` | Ce a apăsat omul | Ce urmează |
|---|---|---|
| `0` | nimic | A |
| `1` | A | B |
| `2` | A, B | A |

Orice altceva e o **greșeală**: `No` și revii la `0`.

**Încearcă tu — (8–10 min)**  
- [ ] Ai desenat pe foaie cele trei stări  
- [ ] Poți spune ce se întâmplă dacă apeși B de la început  

### 2) Proiect nou și pornirea
1. Proiect nou: `Prenume_Nume_MB1_L09`  
2. Creezi variabila `pas`  
3. În <span style="color:#1E90FF;font-weight:700">on start</span>: <span style="color:#DC143C;font-weight:700">set</span> `pas` to `0` și <span style="color:#1E90FF;font-weight:700">show icon</span> `Square` (seiful închis)  

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `pas` to `0`  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Square`

**Încearcă tu — (5 min)**  
- [ ] Pe ecran apare pătratul (seiful închis)  

### 3) Butonul A
Butonul A face două lucruri, în funcție de `pas`:

- dacă `pas = 0` → primul A corect: <span style="color:#DC143C;font-weight:700">set</span> `pas` to `1`  
- altfel, dacă `pas = 2` → al doilea A corect: seiful se **deschide** (<span style="color:#1E90FF;font-weight:700">show icon</span> `Yes`, <span style="color:#1E90FF;font-weight:700">show string</span> `Deschis`, pauză, revii la start)  
- în orice alt caz → greșeală: `No`, pauză scurtă, revii la start  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `pas = 0` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `pas` to `1`  
&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `pas = 2` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Yes`  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `Deschis`  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `2000`  
&emsp;&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `pas` to `0`  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Square`  
&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `No`  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `700`  
&emsp;&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `pas` to `0`  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Square`

**Încearcă tu — (10 min)**  
- [ ] Primul A nu arată nimic (pasul 1 e ținut minte)  
- [ ] A la pasul greșit arată `No` și revine la pătrat  

### 4) Butonul B și testul: Minim
B e corect **doar** la `pas = 1`. Atunci: <span style="color:#DC143C;font-weight:700">set</span> `pas` to `2`. Altfel e greșeală.

Programul tău (Minim):

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `pas` to `0`  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Square`  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `pas = 0` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `pas` to `1`  
&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `pas = 2` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Yes`  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `Deschis`  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `2000`  
&emsp;&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `pas` to `0`  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Square`  
&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `No`  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `700`  
&emsp;&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `pas` to `0`  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Square`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `pas = 1` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `pas` to `2`  
&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `No`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `700`  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `pas` to `0`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Square`  

Testezi: **A, B, A** deschide; **B** de la început, **A, A** sau **A, B, B** arată `No`.

**Încearcă tu — (15–20 min)**  
- [ ] A, B, A deschide seiful  
- [ ] B de la început arată `No`  
- [ ] Alte ordini arată `No` și revin la start  
- [ ] Programul e pe placa adevărată  

### 5) Complet: funcția greșeală și alarma
Ai observat că blocurile pentru greșeală se repetă de două ori. Le punem **într-o funcție** (din <span style="color:#3455DB;font-weight:700">Functions</span>) numită `greseala` și o **apelăm**.

1. Creezi variabila `greseli`  
2. Din <span style="color:#3455DB;font-weight:700">Functions</span>: **Make a Function…**, nume `greseala`  
3. În ea: <span style="color:#DC143C;font-weight:700">change</span> `greseli` by `1`, `No`, pauză, <span style="color:#DC143C;font-weight:700">set</span> `pas` to `0`  
4. Dacă `greseli = 3`: <span style="color:#1E90FF;font-weight:700">show string</span> `ALARMA` și <span style="color:#DC143C;font-weight:700">set</span> `greseli` to `0`  
5. În A și B înlocuiești greșeala cu **call** `greseala`; la deschidere pui `greseli` la `0`  

<span style="color:#3455DB;font-weight:700">function</span> `greseala`  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `greseli` by `1`  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `No`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `700`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `pas` to `0`  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `greseli = 3` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `ALARMA`  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `greseli` to `0`  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Square`  

*(în A și B, tot ce făcea `No` + `pause` + `set pas` + icon se înlocuiește cu blocul **call** `greseala`)*  
<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `pas = 0` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `pas` to `1`  
&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `pas = 2` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;&emsp;*(la fel ca în Minim; în plus: `set greseli to 0`)*  
&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;&emsp;<span style="color:#3455DB;font-weight:700">call</span> `greseala`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `pas = 1` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `pas` to `2`  
&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;<span style="color:#3455DB;font-weight:700">call</span> `greseala`

**Încearcă tu — (15–20 min)**  
- [ ] La o greșeală apare `No`, la trei greșeli până la deschidere apare `ALARMA`  
- [ ] Funcția `greseala` e folosită în A și în B  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  

---

## Greșeli frecvente
1. **A, B, A nu deschide** — <span style="color:#DC143C;font-weight:700">set</span> `pas` to `1` lipsește la primul A sau B.  
2. **Seiful se deschide cu orice** — <span style="color:#00A4A6;font-weight:700">if … then … else</span> nu are ramura **altfel** pentru greșeli.  
3. **După `No` nu revine la pătrat** — lipsește `set pas to 0` sau `show icon Square`.  
4. **Funcția nu face nimic** — ai uitat blocul **call** `greseala` în A și B.  
5. **Alarma nu apare** — `greseli` nu crește (lipsește `change`) sau nu e pus la `0` după deschidere.  
6. **Variabilele se amestecă** — verifică numele: `pas`, `greseli`.  

---

## De făcut azi — „Seiful secret”
Salvat: `Prenume_Nume_MB1_L09`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1** — seiful se deschide doar cu A, B, A, cu **cel puțin 8 blocuri diferite**, pe placă |
| **Complet (ținta orei)** | Minim + **Pasul 2** — funcția `greseala` și alarma după 3 greșeli, cu cel puțin **6 blocuri diferite** |

Dacă rămâi în urmă: **oprește-te la Minim** și salvează. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Seiful secret *(Minim)*
<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `pas` to `0`  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Square`  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `pas = 0` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `pas` to `1`  
&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `pas = 2` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Yes`  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `Deschis`  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `2000`  
&emsp;&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `pas` to `0`  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Square`  
&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `No`  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `700`  
&emsp;&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `pas` to `0`  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Square`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `pas = 1` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `pas` to `2`  
&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `No`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `700`  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `pas` to `0`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Square`

- [ ] Proiect nou cu numele `Prenume_Nume_MB1_L09`  
- [ ] Variabila `pas` creată  
- [ ] Ai cel puțin **8 blocuri diferite**: <span style="color:#1E90FF;font-weight:700">on start</span>, <span style="color:#DC143C;font-weight:700">set</span>, <span style="color:#1E90FF;font-weight:700">show icon</span>, <span style="color:#D400D4;font-weight:700">on button pressed</span>, <span style="color:#00A4A6;font-weight:700">if … then … else</span>, <span style="color:#00A4A6;font-weight:700">0 = 0</span>, <span style="color:#1E90FF;font-weight:700">show string</span>, <span style="color:#1E90FF;font-weight:700">pause (ms)</span>  
- [ ] A, B, A deschide; orice altă ordine arată `No`  
- [ ] Programul e trimis pe placă  

**→ Ai Minim când:** un coleg încearcă codul greșit și vede `No`, apoi află că A, B, A deschide seiful.

### Pasul 2 — Funcția greșeală și alarma *(Complet)*
<span style="color:#3455DB;font-weight:700">function</span> `greseala`  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `greseli` by `1`  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `No`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `700`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `pas` to `0`  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `greseli = 3` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `ALARMA`  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `greseli` to `0`  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Square`  

*(în A și B, tot ce făcea `No` + `pause` + `set pas` + icon se înlocuiește cu blocul **call** `greseala`)*  
<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `pas = 0` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `pas` to `1`  
&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `pas = 2` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;&emsp;*(la fel ca în Minim; în plus: `set greseli to 0`)*  
&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;&emsp;<span style="color:#3455DB;font-weight:700">call</span> `greseala`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `pas = 1` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `pas` to `2`  
&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;<span style="color:#3455DB;font-weight:700">call</span> `greseala`

- [ ] Variabila `greseli` creată  
- [ ] Funcția `greseala` făcută și apelată în A și în B  
- [ ] La 3 greșeli până la deschidere apare `ALARMA`  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  
- [ ] Salvat din nou: `Prenume_Nume_MB1_L09`  

**Gata Complet când:** trei greșeli până la deschidere dau `ALARMA`, iar funcția `greseala` e folosită în A și în B.

---

## Bonus ★★★ — Provocare: Seif cu cod de patru pași
*Doar dacă ai terminat Complet.*

- [ ] Schimbă pauza de pe `No` și pe `Yes`  
- [ ] **Provocarea:** codul are **4 pași**, ales de tine (de exemplu A, B, B, A), cu `pas` de la `0` la `4`. Un coleg are **5 încercări** să-l ghicească, după care apare `ALARMA` și seiful rămâne blocat. Nu folosi codul A, B, A.  

## Recapitulare rapidă
1. O variabilă de **stare** ține minte unde a rămas programul  
2. `if … else` cu `pas` face programul să aștepte **ordinea corectă**  
3. Orice altă ordine e o **greșeală** și revine la start  
4. O **funcție** (`greseala`) pune blocurile repetate într-un singur loc  
5. `call` apelează funcția de câte ori e nevoie  
6. Minim = Pasul 1 · Complet = Pasul 1 + 2  

## Schema pe scurt *(pe foaie)*
`pas = 0` —A→ `1` —B→ `2` —A→ **Deschis**

Orice altceva → `greseala` (`greseli + 1`, `No`, `pas = 0`) → la `greseli = 3` → `ALARMA`

**Quiz scurt (cu profesorul):**  
- Ce ține minte variabila `pas`?  
- De ce B de la început nu deschide seiful?  
- Ce arată seiful când ordinea e greșită?  
- De ce am pus blocurile pentru greșeală într-o funcție?  
- Ce se întâmplă după trei greșeli până la deschidere?  

## Temă (opțional)
- Dacă ai doar Minim: acasă, faci funcția `greseala` și alarma (Pasul 2), în același `Prenume_Nume_MB1_L09`.  
- Dacă ai Complet: te gândești la un cod din 4 pași și îl scrii pe foaie ca tabel de stări, ca mai devreme.  
- Dacă ai terminat și Bonusul: faci o copie și schimbi codul.  

## Ce urmează
În **Lecția 10** adunăm proiectele din modul într-o **insignă inteligentă**.
