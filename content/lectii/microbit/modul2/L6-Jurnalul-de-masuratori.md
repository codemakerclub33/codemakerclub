# Lecția 6 — Jurnalul de măsurători
### Liste: aduni, citești, calculezi
**Modulul 2 · Proiecte Maker cu micro:bit (blocuri)**  
**Code Maker Club · micro:bit Maker**

> Azi înveți să ții **mai multe numere** într-o singură „cutie” și faci **„Jurnalul de măsurători”**:  
> placa notează temperatura de câte ori apeși A, iar apoi îți citește jurnalul și calculează media și maximul.  
> Fișier: `Prenume_Nume_MB2_L06` (ex. `Ana_Pop_MB2_L06`)

---

## Obiectiv
La finalul orei folosești o **listă** (array): adaugi valori, le citești pe rând cu `for index` și calculezi o **medie** și un **maxim**.  
**Minim:** A notează temperatura în listă, B o citește pe rând, cu **cel puțin 8 blocuri diferite**.  
**Ținta orei (Complet):** partea a doua: **A+B** calculează **media** și **maximul** măsurătorilor, cu cel puțin **6 blocuri diferite**.

## De ce contează
O variabilă obișnuită ține **un singur** număr. Dar un meteorolog notează temperatura în fiecare oră, nu doar o dată. El are nevoie de un **caiet**.  
O **listă** e caietul programului: ține câte numere vrei și le poți citi pe rând.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L5: stări, `running time` |
| 10–25 | Jocul „Caietul”: poziții de la 0 |
| 25–45 | Lista în blocuri: creare și adăugare |
| 45–60 | Citim lista cu `for index` |
| 60–90 | Jurnalul (**Minim**) |
| 90–112 | **Complet:** media și maximul |
| 112–120 | Recap, bonus, arăți ce ai gata |

**Unelte azi:** placa micro:bit · cablu micro-USB · browser Chrome sau Edge · [makecode.microbit.org](https://makecode.microbit.org)

**Capitole azi:**  
<span style="color:#E65722;font-weight:700">Arrays</span> · <span style="color:#00A600;font-weight:700">Loops</span> · <span style="color:#DC143C;font-weight:700">Variables</span> · <span style="color:#9C00C8;font-weight:700">Math</span> · <span style="color:#D400D4;font-weight:700">Input</span> · <span style="color:#00A4A6;font-weight:700">Logic</span> · <span style="color:#1E90FF;font-weight:700">Basic</span>  
*(blocuri noi din Arrays (Advanced). Numele pot diferi puțin în editor; caută blocurile după formă.)*

**Blocurile de azi:**

| Bloc | Ce face |
|------|---------|
| <span style="color:#E65722;font-weight:700">empty array</span> | o listă fără nimic în ea (o pui într-o variabilă cu `set`) |
| <span style="color:#E65722;font-weight:700">add value to end of</span> | adaugă o valoare la sfârșitul listei |
| <span style="color:#E65722;font-weight:700">length of</span> | câte valori are lista |
| <span style="color:#E65722;font-weight:700">get value at</span> | citește valoarea de la poziția dată (prima poziție e `0`) |

*Din lecțiile trecute le știi deja:* <span style="color:#1E90FF;font-weight:700">on start</span>, <span style="color:#1E90FF;font-weight:700">show number</span>, <span style="color:#1E90FF;font-weight:700">show string</span>, <span style="color:#1E90FF;font-weight:700">show icon</span>, <span style="color:#1E90FF;font-weight:700">pause (ms)</span>, <span style="color:#1E90FF;font-weight:700">clear screen</span>, <span style="color:#D400D4;font-weight:700">on button pressed</span>, <span style="color:#D400D4;font-weight:700">temperature (°C)</span>, <span style="color:#00A600;font-weight:700">for index</span>, <span style="color:#DC143C;font-weight:700">set</span>, <span style="color:#DC143C;font-weight:700">change</span>, <span style="color:#00A4A6;font-weight:700">if … then</span>, <span style="color:#00A4A6;font-weight:700">0 > 0</span>, <span style="color:#9C00C8;font-weight:700">0 − 0</span>, <span style="color:#9C00C8;font-weight:700">0 ÷ 0</span>.

---

## Pas cu pas

### 1) Jocul „Caietul” (fără calculator)
Un copil e **caietul**. Ceilalți spun un număr, iar caietul îl **adaugă la sfârșit** („Adaugă `21`!”, „Adaugă `24`!”). Apoi cineva întreabă: „Ce e la poziția `0`?” (primul), „Ce e la poziția `1`?” (al doilea).

Atenție: **prima poziție e `0`**, nu `1`. Ca și coordonatele de pe ecran.

**Încearcă tu — (5–8 min)**  
- [ ] Ai adăugat 4 numere în „caiet”  
- [ ] Spui ce e la poziția `0` și la poziția `2`  

### 2) Creăm lista și adăugăm valori
1. Proiect nou: `Prenume_Nume_MB2_L06`  
2. Creezi variabila `masuratori` (Variables → **Make a Variable…**)  
3. În <span style="color:#1E90FF;font-weight:700">on start</span>: <span style="color:#DC143C;font-weight:700">set</span> `masuratori` to <span style="color:#E65722;font-weight:700">empty array</span> (listă goală). Blocul e în **Advanced → Arrays**  
4. La <span style="color:#D400D4;font-weight:700">on button A pressed</span>: <span style="color:#E65722;font-weight:700">add value to end of</span> `masuratori` cu <span style="color:#D400D4;font-weight:700">temperature (°C)</span>, apoi o bifă `Yes`, pauză și <span style="color:#1E90FF;font-weight:700">clear screen</span>  

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `masuratori` to <span style="color:#E65722;font-weight:700">empty array</span>  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#E65722;font-weight:700">add value to end of</span> `masuratori` <span style="color:#D400D4;font-weight:700">temperature (°C)</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Yes`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>

**Încearcă tu — (10 min)**  
- [ ] La fiecare A vezi bifa (valoarea s-a adăugat)  
- [ ] Spui de ce lista e goală la pornire  

### 3) Citim lista: for index
La <span style="color:#D400D4;font-weight:700">on button B pressed</span> citim **toate** valorile, una câte una, cu <span style="color:#00A600;font-weight:700">for index</span>. Lista cu `3` valori are pozițiile `0`, `1`, `2`, deci bucla merge de la `0` la **<span style="color:#E65722;font-weight:700">length of</span> `masuratori` − 1**.

Pe fiecare poziție: <span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#E65722;font-weight:700">get value at</span> `index` of `masuratori`, pauză, <span style="color:#1E90FF;font-weight:700">clear screen</span>. Înainte de buclă punem un <span style="color:#00A4A6;font-weight:700">if</span> `length of masuratori > 0`, ca să nu citim o listă goală.

&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `length of masuratori > 0` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#00A600;font-weight:700">for index</span> from `0` to <span style="color:#E65722;font-weight:700">length of</span> `masuratori` <span style="color:#9C00C8;font-weight:700">−</span> `1`  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#E65722;font-weight:700">get value at</span> `index` of `masuratori`  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>

**Încearcă tu — (10 min)**  
- [ ] B arată pe rând toate temperaturile notate  
- [ ] Ai încercat B cu lista goală și nu s-a întâmplat nimic  

### 4) Jurnalul: Minim
Reunești totul.

Programul tău (Minim):

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `masuratori` to <span style="color:#E65722;font-weight:700">empty array</span>  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#E65722;font-weight:700">add value to end of</span> `masuratori` <span style="color:#D400D4;font-weight:700">temperature (°C)</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Yes`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `length of masuratori > 0` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#00A600;font-weight:700">for index</span> from `0` to <span style="color:#E65722;font-weight:700">length of</span> `masuratori` <span style="color:#9C00C8;font-weight:700">−</span> `1`  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#E65722;font-weight:700">get value at</span> `index` of `masuratori`  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  

**Test:** apeși A de 3 ori (poți ține placa în mână ca să se schimbe temperatura), apoi B: vezi cele 3 valori.

**Încearcă tu — (15–20 min)**  
- [ ] A de 3 ori notează 3 valori  
- [ ] B le arată pe rând  
- [ ] Programul e pe placa adevărată  

### 5) Complet: media și maximul
La <span style="color:#D400D4;font-weight:700">on button A+B pressed</span> calculăm două lucruri din listă:

- **media** = suma valorilor împărțită la numărul lor: <span style="color:#DC143C;font-weight:700">change</span> `suma` by valoarea de la poziția `index`, la fiecare poziție, apoi `suma` <span style="color:#9C00C8;font-weight:700">÷</span> <span style="color:#E65722;font-weight:700">length of</span> `masuratori`  
- **maximul** = cea mai mare valoare: pornim cu `maxim = 0`, iar dacă o valoare e mai mare decât `maxim`, o salvăm în `maxim`  

Creezi variabilele `suma` și `maxim`.

<span style="color:#D400D4;font-weight:700">on button A+B pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `suma` to `0`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `maxim` to `0`  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `length of masuratori > 0` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#00A600;font-weight:700">for index</span> from `0` to <span style="color:#E65722;font-weight:700">length of</span> `masuratori` <span style="color:#9C00C8;font-weight:700">−</span> `1`  
&emsp;&emsp;&emsp;<span style="color:#DC143C;font-weight:700">change</span> `suma` by <span style="color:#E65722;font-weight:700">get value at</span> `index` of `masuratori`  
&emsp;&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">if</span> <span style="color:#E65722;font-weight:700">get value at</span> `index` of `masuratori` > `maxim` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `maxim` to <span style="color:#E65722;font-weight:700">get value at</span> `index` of `masuratori`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `M`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `suma` <span style="color:#9C00C8;font-weight:700">÷</span> <span style="color:#E65722;font-weight:700">length of</span> `masuratori`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `Max`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `maxim`

**Încearcă tu — (20 min)**  
- [ ] A+B arată `M` și media, apoi `Max` și cea mai mare valoare  
- [ ] Verifici cu mintea: media nu e mai mare decât maximul  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  

---

## Greșeli frecvente
1. **B nu arată nimic** — lista e goală (nu ai apăsat A) sau lipsește `set masuratori to empty array`.  
2. **Prima valoare lipsește** — bucla începe de la `1`. Prima poziție e `0`.  
3. **Placa se blochează la ultima valoare** — bucla merge până la `length`, nu până la `length − 1`.  
4. **Media e prea mare** — `suma` nu e `0` la început.  
5. **Maximul e `0`** — `if value > maxim` e în afara buclei.  
6. **Valorile par greșite** — placa s-a încălzit în mână. Așteaptă puțin între A-uri.  

---

## De făcut azi — „Jurnalul de măsurători”
Salvat: `Prenume_Nume_MB2_L06`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1** — A notează temperatura în listă, B o citește pe rând, cu **cel puțin 8 blocuri diferite**, pe placă |
| **Complet (ținta orei)** | Minim + **Pasul 2** — A+B arată media și maximul măsurătorilor, cu cel puțin **6 blocuri diferite** |

Dacă rămâi în urmă: **oprește-te la Minim** și salvează. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Jurnalul de măsurători *(Minim)*
<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `masuratori` to <span style="color:#E65722;font-weight:700">empty array</span>  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#E65722;font-weight:700">add value to end of</span> `masuratori` <span style="color:#D400D4;font-weight:700">temperature (°C)</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Yes`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `length of masuratori > 0` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#00A600;font-weight:700">for index</span> from `0` to <span style="color:#E65722;font-weight:700">length of</span> `masuratori` <span style="color:#9C00C8;font-weight:700">−</span> `1`  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#E65722;font-weight:700">get value at</span> `index` of `masuratori`  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>

- [ ] Proiect nou cu numele `Prenume_Nume_MB2_L06`  
- [ ] Variabila `masuratori` creată și pusă pe listă goală  
- [ ] Ai cel puțin **8 blocuri diferite**: <span style="color:#1E90FF;font-weight:700">on start</span>, <span style="color:#DC143C;font-weight:700">set</span>, <span style="color:#D400D4;font-weight:700">on button pressed</span>, <span style="color:#E65722;font-weight:700">add value to end of</span>, <span style="color:#D400D4;font-weight:700">temperature (°C)</span>, <span style="color:#1E90FF;font-weight:700">show icon</span>, <span style="color:#1E90FF;font-weight:700">pause (ms)</span>, <span style="color:#1E90FF;font-weight:700">clear screen</span>, <span style="color:#00A600;font-weight:700">for index</span>, <span style="color:#1E90FF;font-weight:700">show number</span>, <span style="color:#E65722;font-weight:700">get value at</span>, <span style="color:#E65722;font-weight:700">length of</span>  
- [ ] Programul e trimis pe placă  

**→ Ai Minim când:** un coleg apasă A de 3 ori și apoi B: placa îi arată cele 3 temperaturi, pe rând.

### Pasul 2 — Media și maximul *(Complet)*
<span style="color:#D400D4;font-weight:700">on button A+B pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `suma` to `0`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `maxim` to `0`  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `length of masuratori > 0` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#00A600;font-weight:700">for index</span> from `0` to <span style="color:#E65722;font-weight:700">length of</span> `masuratori` <span style="color:#9C00C8;font-weight:700">−</span> `1`  
&emsp;&emsp;&emsp;<span style="color:#DC143C;font-weight:700">change</span> `suma` by <span style="color:#E65722;font-weight:700">get value at</span> `index` of `masuratori`  
&emsp;&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">if</span> <span style="color:#E65722;font-weight:700">get value at</span> `index` of `masuratori` > `maxim` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `maxim` to <span style="color:#E65722;font-weight:700">get value at</span> `index` of `masuratori`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `M`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `suma` <span style="color:#9C00C8;font-weight:700">÷</span> <span style="color:#E65722;font-weight:700">length of</span> `masuratori`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `Max`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `maxim`

- [ ] Variabilele `suma` și `maxim` create  
- [ ] Media = `suma` <span style="color:#9C00C8;font-weight:700">÷</span> <span style="color:#E65722;font-weight:700">length of</span> `masuratori`  
- [ ] Maximul = cea mai mare valoare din listă  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  
- [ ] Salvat din nou: `Prenume_Nume_MB2_L06`  

**Gata Complet când:** A+B arată `M` cu media și `Max` cu cea mai mare valoare notată.

---

## Bonus ★★★ — Provocare: Stația meteo
*Doar dacă ai terminat Complet.*

- [ ] Schimbă pauza de la afișare și numărul de măsurători pe care le notezi  
- [ ] **Provocarea:** o **stație meteo** care măsoară **singură**. În <span style="color:#1E90FF;font-weight:700">forever</span>, o dată la `10` secunde (<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `10000`), notează temperatura în listă, până la **`6` măsurători** (<span style="color:#00A4A6;font-weight:700">if</span> `length of masuratori < 6`). La <span style="color:#D400D4;font-weight:700">on button A+B pressed</span> placa arată `Sus` dacă ultima valoare e mai mare decât prima, `Jos` dacă e mai mică. Un coleg ține placa în mână un minut: trebuie să arate `Sus`.  

## Recapitulare rapidă
1. O **listă** ține mai multe valori într-o variabilă  
2. `add value to end of` adaugă; `get value at` citește; `length of` numără  
3. Prima poziție e `0`; ultima e `length − 1`  
4. <span style="color:#00A600;font-weight:700">for index</span> de la `0` la `length − 1` citește toată lista  
5. Media = suma ÷ cât sunt; maximul = comparat pe rând  
6. Minim = Pasul 1 · Complet = Pasul 1 + 2  

## Schema pe scurt *(pe foaie)*
A → <span style="color:#E65722;font-weight:700">add value to end of</span> `masuratori` temperatura

B → pentru fiecare poziție `0` … `length − 1` → arată valoarea

A+B → media (`suma ÷ length`) și maximul (`value > maxim`)

**Quiz scurt (cu profesorul):**  
- Care e prima poziție dintr-o listă?  
- Cum afli câte valori are lista?  
- De ce bucla merge până la `length − 1`?  
- Cum calculezi media?  
- Cum găsești cea mai mare valoare?  

## Temă (opțional)
- Dacă ai doar Minim: acasă, adaugi media și maximul (Pasul 2), în același `Prenume_Nume_MB2_L06`.  
- Dacă ai Complet: notezi temperatura camerei la 5 ore diferite și le scrii pe foaie ca „jurnal”; calculezi media cu mintea și o compari cu placa.  
- Dacă ai terminat și Bonusul: faci o copie și schimbi intervalul de măsurare.  

## Ce urmează
În **Lecția 7** faci un instrument muzical fără să-l atingi: un **theremin cu lumină**.
