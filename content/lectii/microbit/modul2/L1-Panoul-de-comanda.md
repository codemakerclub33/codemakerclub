# Lecția 1 — Panoul de comandă
### Recapitulare Modulul 1 · busolă și timp
**Modulul 2 · Proiecte Maker cu micro:bit (blocuri)**  
**Code Maker Club · micro:bit Maker**

> Bine ai venit în Modulul 2! Azi reiei ce știi și faci **„Panoul de comandă”**:  
> o singură placă cu mai multe **moduri**: nume, lumină, temperatură și busolă, alese cu butoanele.  
> Fișier: `Prenume_Nume_MB2_L01` (ex. `Ana_Pop_MB2_L01`)

---

## Obiectiv
La finalul orei folosești o variabilă `mod` ca să faci un program cu mai multe „fețe” și citești două lucruri noi: **busola** și **timpul**.  
**Minim:** A trece prin 4 moduri, B arată ce măsoară modul ales (nume, lumină, temperatură, direcție), cu **cel puțin 8 blocuri diferite**.  
**Ținta orei (Complet):** partea a doua: **A+B** arată cât timp a trecut de la pornire, în secunde, cu cel puțin **6 blocuri diferite**.

## De ce contează
Telecomanda de la televizor are un buton pentru „mod”, iar ceasul de mână are mai multe moduri: oră, cronometru, alarmă. Totul e **un singur aparat cu o variabilă de mod**.  
Azi faci așa ceva, iar apoi vei folosi aceeași idee în toate proiectele modulului.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Recap Modulul 1: variabile, `if`, senzori |
| 15–30 | Jocul „Panoul”: moduri fără calculator |
| 30–50 | Variabila `mod` și butonul A |
| 50–70 | Butonul B: ce face fiecare mod |
| 70–85 | Busola: calibrare și `compass heading` |
| 85–105 | Panoul de comandă (**Minim**) și timpul (**Complet**) |
| 105–120 | Recap, bonus, arăți ce ai gata |

**Unelte azi:** placa micro:bit · cablu micro-USB · browser Chrome sau Edge · [makecode.microbit.org](https://makecode.microbit.org)

**Capitole azi:**  
<span style="color:#D400D4;font-weight:700">Input</span> · <span style="color:#9C00C8;font-weight:700">Math</span> · <span style="color:#DC143C;font-weight:700">Variables</span> · <span style="color:#00A4A6;font-weight:700">Logic</span> · <span style="color:#1E90FF;font-weight:700">Basic</span>  
*(blocurile noi sunt în Input (partea „more”) și în Math.)*

**Blocurile de azi:**

| Bloc | Ce face |
|------|---------|
| <span style="color:#D400D4;font-weight:700">compass heading</span> | dă direcția în grade: 0 = Nord, 90 = Est, 180 = Sud, 270 = Vest |
| <span style="color:#D400D4;font-weight:700">running time (ms)</span> | câte milisecunde au trecut de la pornirea plăcii (în Input, la „more”) |
| <span style="color:#9C00C8;font-weight:700">0 ÷ 0</span> | împarte primul număr la al doilea |

*Din Modulul 1 le știi deja:* <span style="color:#1E90FF;font-weight:700">on start</span>, <span style="color:#1E90FF;font-weight:700">show number</span>, <span style="color:#1E90FF;font-weight:700">show string</span>, <span style="color:#1E90FF;font-weight:700">pause (ms)</span>, <span style="color:#1E90FF;font-weight:700">clear screen</span>, <span style="color:#D400D4;font-weight:700">on button pressed</span>, <span style="color:#D400D4;font-weight:700">light level</span>, <span style="color:#D400D4;font-weight:700">temperature (°C)</span>, <span style="color:#DC143C;font-weight:700">set</span>, <span style="color:#DC143C;font-weight:700">change</span>, <span style="color:#00A4A6;font-weight:700">if … then … else</span>, <span style="color:#00A4A6;font-weight:700">0 = 0</span>, <span style="color:#00A4A6;font-weight:700">0 > 0</span>.

---

## Pas cu pas

### 1) Jocul „Panoul” (fără calculator)
Un copil e **panoul**. Ceilalți spun „Treci la modul următor!”, iar el schimbă ce arată: întâi numele, apoi o lanternă imaginară (lumina), apoi un termometru imaginar, apoi direcția. După ultimul, **se întoarce la primul**.

Panoul ține minte **în ce mod este**. Pentru calculator, asta înseamnă o **variabilă**.

**Încearcă tu — (5–8 min)**  
- [ ] Ai trecut prin toate cele patru moduri, apoi te-ai întors la primul  
- [ ] Spui ce ține minte panoul între două apăsări  

### 2) Variabila mod și butonul A
1. Proiect nou: `Prenume_Nume_MB2_L01`  
2. Creezi variabila `mod` (ca în lecția 4 din Modulul 1)  
3. În <span style="color:#1E90FF;font-weight:700">on start</span>: <span style="color:#DC143C;font-weight:700">set</span> `mod` to `0` și <span style="color:#1E90FF;font-weight:700">show number</span> `mod`  
4. La <span style="color:#D400D4;font-weight:700">on button A pressed</span>: <span style="color:#DC143C;font-weight:700">change</span> `mod` by `1`. Dacă `mod > 3`, <span style="color:#DC143C;font-weight:700">set</span> `mod` to `0`. La final <span style="color:#1E90FF;font-weight:700">show number</span> `mod`  

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `mod` to `0`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `mod`  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `mod` by `1`  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `mod > 3` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `mod` to `0`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `mod`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>

**Încearcă tu — (8–10 min)**  
- [ ] La A vezi `1`, `2`, `3`, apoi iar `0`  
- [ ] Modul nu trece de `3`  

### 3) Butonul B: ce face fiecare mod
La <span style="color:#D400D4;font-weight:700">on button B pressed</span> placa face un lucru diferit, în funcție de `mod`:

| `mod` | Ce arată |
|-------|----------|
| `0` | numele tău |
| `1` | <span style="color:#D400D4;font-weight:700">light level</span> |
| `2` | <span style="color:#D400D4;font-weight:700">temperature (°C)</span> |
| `3` | <span style="color:#D400D4;font-weight:700">compass heading</span> |

Legăm patru decizii: un <span style="color:#00A4A6;font-weight:700">if … then … else</span> **în ramura altfel** a altuia, de trei ori, ca la Bila magică din Modulul 1.

**Încearcă tu — (10–12 min)**  
- [ ] La modul `1` apare numărul luminii  
- [ ] La modul `2` apare temperatura  

### 4) Busola: calibrare și direcție
<span style="color:#D400D4;font-weight:700">compass heading</span> dă direcția în **grade**, între `0` și `359`: `0` = Nord, `90` = Est, `180` = Sud, `270` = Vest.

**Prima dată** când folosești busola, placa îți cere să o **calibrezi**: pe ecran apare un punct, iar tu înclini placa în toate direcțiile ca punctul să deseneze un cerc (ca un joc mic). Se face o singură dată.

În simulator, busola are un **slider**. Pe placă, o rotești cu mâna și numărul se schimbă.

**Încearcă tu — (8–10 min)**  
- [ ] Ai calibrat busola pe placa adevărată (cercul)  
- [ ] Rotești placa și vezi numărul crescând sau scăzând  

### 5) Panoul de comandă: Minim
Reunești totul.

Programul tău (Minim):

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `mod` to `0`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `mod`  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `mod` by `1`  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `mod > 3` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `mod` to `0`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `mod`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `mod = 0` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `Ana`  
&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `mod = 1` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#D400D4;font-weight:700">light level</span>  
&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `mod = 2` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#D400D4;font-weight:700">temperature (°C)</span>  
&emsp;&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#D400D4;font-weight:700">compass heading</span>  

**Test:** A de 4 ori trece prin toate modurile; la fiecare mod, B arată altceva.

**Încearcă tu — (15–20 min)**  
- [ ] A trece prin 0, 1, 2, 3 și se întoarce la 0  
- [ ] B arată numele, lumina, temperatura și direcția  
- [ ] Programul e pe placa adevărată  

### 6) Complet: cât timp a trecut
<span style="color:#D400D4;font-weight:700">running time (ms)</span> dă milisecundele de la pornire. Ca să obții **secunde**, împarți la `1000` cu <span style="color:#9C00C8;font-weight:700">0 ÷ 0</span>.

La <span style="color:#D400D4;font-weight:700">on button A+B pressed</span>: <span style="color:#1E90FF;font-weight:700">show string</span> `Timp`, apoi <span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#D400D4;font-weight:700">running time (ms)</span> <span style="color:#9C00C8;font-weight:700">÷</span> `1000`, apoi <span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000` și <span style="color:#1E90FF;font-weight:700">clear screen</span>.

<span style="color:#D400D4;font-weight:700">on button A+B pressed</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `Timp`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#D400D4;font-weight:700">running time (ms)</span> <span style="color:#9C00C8;font-weight:700">÷</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>

**Încearcă tu — (15–20 min)**  
- [ ] A+B arată `Timp` și un număr de secunde  
- [ ] Numărul crește la a doua apăsare  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  

---

## Greșeli frecvente
1. **Modul nu se întoarce la `0`** — `if mod > 3` lipsește sau are `set mod to 0` în afara lui `if`.  
2. **B arată mereu același lucru** — al doilea <span style="color:#00A4A6;font-weight:700">if … then … else</span> nu e în ramura **altfel** a primului.  
3. **Busola arată `0` sau numere ciudate** — nu ai calibrat placa. Fă cercul de pe ecran.  
4. **Timpul pare prea mare** — ai uitat `÷ 1000` și vezi milisecunde.  
5. **A+B nu face nimic** — blocul `on button A+B pressed` e pus în alt bloc, nu pe zona de lucru.  
6. **Numele apare cu diacritice greșite** — scrie numele fără diacritice în `show string`.  

---

## De făcut azi — „Panoul de comandă”
Salvat: `Prenume_Nume_MB2_L01`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1** — A trece prin 4 moduri, iar B arată nume, lumină, temperatură și direcție, cu **cel puțin 8 blocuri diferite**, pe placă |
| **Complet (ținta orei)** | Minim + **Pasul 2** — A+B arată timpul în secunde, cu cel puțin **6 blocuri diferite** |

Dacă rămâi în urmă: **oprește-te la Minim** și salvează. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Panoul de comandă *(Minim)*
<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `mod` to `0`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `mod`  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `mod` by `1`  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `mod > 3` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `mod` to `0`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `mod`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `mod = 0` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `Ana`  
&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `mod = 1` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#D400D4;font-weight:700">light level</span>  
&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `mod = 2` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#D400D4;font-weight:700">temperature (°C)</span>  
&emsp;&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#D400D4;font-weight:700">compass heading</span>

- [ ] Proiect nou cu numele `Prenume_Nume_MB2_L01`  
- [ ] Variabila `mod` creată  
- [ ] Ai cel puțin **8 blocuri diferite**: <span style="color:#1E90FF;font-weight:700">on start</span>, <span style="color:#DC143C;font-weight:700">set</span>, <span style="color:#1E90FF;font-weight:700">show number</span>, <span style="color:#D400D4;font-weight:700">on button pressed</span>, <span style="color:#DC143C;font-weight:700">change</span>, <span style="color:#00A4A6;font-weight:700">if … then … else</span>, <span style="color:#00A4A6;font-weight:700">0 > 0</span>, <span style="color:#00A4A6;font-weight:700">0 = 0</span>, <span style="color:#D400D4;font-weight:700">light level</span>, <span style="color:#D400D4;font-weight:700">temperature (°C)</span>, <span style="color:#D400D4;font-weight:700">compass heading</span>  
- [ ] Placa e calibrată; programul e trimis pe placă  

**→ Ai Minim când:** un coleg apasă A de patru ori și, la fiecare mod, B îi arată altceva.

### Pasul 2 — Cât timp a trecut *(Complet)*
<span style="color:#D400D4;font-weight:700">on button A+B pressed</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `Timp`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#D400D4;font-weight:700">running time (ms)</span> <span style="color:#9C00C8;font-weight:700">÷</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>

- [ ] <span style="color:#D400D4;font-weight:700">on button A+B pressed</span> cu <span style="color:#1E90FF;font-weight:700">show string</span> `Timp`  
- [ ] <span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#D400D4;font-weight:700">running time (ms)</span> <span style="color:#9C00C8;font-weight:700">÷</span> `1000`  
- [ ] Numărul e în secunde  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  
- [ ] Salvat din nou: `Prenume_Nume_MB2_L01`  

**Gata Complet când:** A+B arată `Timp` și secundele care au trecut de la pornire.

---

## Bonus ★★★ — Provocare: Panoul cu cinci moduri
*Doar dacă ai terminat Complet.*

- [ ] Schimbă numele din modul `0` cu un cuvânt scurt al tău (fără diacritice)  
- [ ] **Provocarea:** panoul are **5 moduri**, nu 4. Modul `4` arată `Happy` dacă <span style="color:#D400D4;font-weight:700">light level</span> e peste `100`, altfel `Sad`. Programul trebuie să treacă prin toate cele 5 moduri și să se întoarcă la `0`. Un coleg încearcă toate modurile **fără să te întrebe** „ce face?”; trebuie să recunoască fiecare mod.  

## Recapitulare rapidă
1. O variabilă (`mod`) ține minte **în ce mod** e programul  
2. `if mod > 3` ... `set mod to 0` face un **ciclu**  
3. <span style="color:#D400D4;font-weight:700">compass heading</span> dă direcția în grade (Nord = 0, Est = 90)  
4. <span style="color:#D400D4;font-weight:700">running time (ms)</span> dă timpul de la pornire; împărțit la `1000` obții secunde  
5. Un <span style="color:#00A4A6;font-weight:700">if … then … else</span> în **altfel** adaugă încă o variantă  
6. Minim = Pasul 1 · Complet = Pasul 1 + 2  

## Schema pe scurt *(pe foaie)*
A → <span style="color:#DC143C;font-weight:700">change</span> `mod` +1 → dacă `mod > 3` → `mod = 0`

B → `mod = 0`: nume · `1`: lumină · `2`: temperatură · `3`: busolă

A+B → `Timp` → <span style="color:#D400D4;font-weight:700">running time (ms)</span> ÷ 1000

**Quiz scurt (cu profesorul):**  
- Ce ține minte variabila `mod`?  
- De ce punem `if mod > 3` după `change mod by 1`?  
- Ce număr dă busola când placa arată spre Est?  
- Cum transformi milisecundele în secunde?  
- De ce trebuie să calibrezi busola?  

## Temă (opțional)
- Dacă ai doar Minim: acasă, adaugi A+B cu timpul (Pasul 2), în același `Prenume_Nume_MB2_L01`.  
- Dacă ai Complet: te gândești la un al cincilea mod pentru panou și îl desenezi pe foaie, cu ce arată pe ecran.  
- Dacă ai terminat și Bonusul: faci o copie și schimbi pragul de lumină.  

## Ce urmează
În **Lecția 2** transformi busola într-un instrument adevărat: **busola de buzunar**.
