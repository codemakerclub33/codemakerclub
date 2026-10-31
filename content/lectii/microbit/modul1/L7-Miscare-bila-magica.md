# Lecția 7 — Bila magică Da / Nu
### Mișcare și numere aleatorii
**Modulul 1 · Primii pași cu micro:bit (blocuri)**  
**Code Maker Club · micro:bit Starter**

> Azi înveți că placa **simte mișcarea** și faci **„Bila magică Da / Nu”**:  
> pui o întrebare, scuturi placa și ea răspunde Da, Nu sau Poate, la întâmplare.  
> Fișier: `Prenume_Nume_MB1_L07` (ex. `Ana_Pop_MB1_L07`)

---

## Obiectiv
La finalul orei folosești **accelerometrul** (senzorul de mișcare) și numere **aleatorii** (alese la întâmplare).  
**Minim:** scuturi placa și ea răspunde **Da**, **Nu** sau **Poate**, la întâmplare, cu **cel puțin 8 blocuri diferite**.  
**Ținta orei (Complet):** partea a doua: placa „se gândește” înainte de răspuns, iar înclinarea spre stânga pregătește o întrebare nouă, cu cel puțin **6 blocuri diferite**.

## De ce contează
Telefonul tău își dă seama când îl răsucești și își întoarce ecranul. Jocurile de pe consolă simt când scuturi telecomanda. Toate folosesc un **accelerometru**.  
Iar când un joc „alege” ceva la întâmplare, folosește numere **aleatorii**.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L6: bucle, `repeat`, `for index` |
| 10–30 | Accelerometrul: cum simte placa mișcarea? |
| 30–45 | `on shake`: pornește când scuturi |
| 45–60 | Numere aleatorii: `pick random` |
| 60–90 | Bila magică (**Minim**) |
| 90–112 | **Complet:** „mă gândesc” și înclinarea |
| 112–120 | Recap, bonus, arăți ce ai gata |

**Unelte azi:** placa micro:bit · cablu micro-USB · browser Chrome sau Edge · [makecode.microbit.org](https://makecode.microbit.org)

**Capitole azi:**  
<span style="color:#D400D4;font-weight:700">Input</span> · <span style="color:#9C00C8;font-weight:700">Math</span> · <span style="color:#00A4A6;font-weight:700">Logic</span> · <span style="color:#DC143C;font-weight:700">Variables</span> · <span style="color:#1E90FF;font-weight:700">Basic</span> · <span style="color:#5C2D91;font-weight:700">LED</span> · <span style="color:#00A600;font-weight:700">Loops</span>  
*(nimic nou la Basic, doar combinăm.)*

**Blocurile de azi:**

| Bloc | Ce face |
|------|---------|
| <span style="color:#D400D4;font-weight:700">on shake</span> | pornește blocurile din el când **scuturi** placa |
| <span style="color:#9C00C8;font-weight:700">pick random 0 to 10</span> | alege un număr la întâmplare, între cele două numere date |
| <span style="color:#D400D4;font-weight:700">acceleration (mg) x</span> | cât de mult e înclinată sau mișcată placa pe axa aleasă (x, y sau z) |

*Din lecțiile trecute le știi deja:* <span style="color:#1E90FF;font-weight:700">on start</span>, <span style="color:#1E90FF;font-weight:700">forever</span>, <span style="color:#1E90FF;font-weight:700">show string</span>, <span style="color:#1E90FF;font-weight:700">show icon</span>, <span style="color:#1E90FF;font-weight:700">pause (ms)</span>, <span style="color:#1E90FF;font-weight:700">clear screen</span>, <span style="color:#5C2D91;font-weight:700">plot x y</span>, <span style="color:#5C2D91;font-weight:700">unplot x y</span>, <span style="color:#00A600;font-weight:700">repeat</span>, <span style="color:#DC143C;font-weight:700">set</span>, <span style="color:#00A4A6;font-weight:700">if … then … else</span>, <span style="color:#00A4A6;font-weight:700">0 = 0</span>.

---

## Pas cu pas

### 1) Placa simte mișcarea
În placă e un **accelerometru**: măsoară cât de mult o miști sau o înclini, în **mg** (miimi de g). Are trei axe: **x** (stânga–dreapta), **y** (față–spate), **z** (sus–jos).

Încearcă în simulator, cu un <span style="color:#1E90FF;font-weight:700">forever</span> care arată <span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#D400D4;font-weight:700">acceleration (mg) x</span>: înclini placa spre stânga și numărul devine **negativ**, spre dreapta devine **pozitiv**.

**Încearcă tu — (5–8 min)**  
- [ ] Înclini placa și numărul de pe ecran se schimbă  
- [ ] Spui în ce parte devine negativ (stânga)  

### 2) on shake: pornește când scuturi
1. Proiect nou: `Prenume_Nume_MB1_L07`  
2. Din <span style="color:#D400D4;font-weight:700">Input</span> tragi <span style="color:#D400D4;font-weight:700">on shake</span>  
3. Înăuntru pui <span style="color:#1E90FF;font-weight:700">show icon</span> `Yes`  

<span style="color:#D400D4;font-weight:700">on shake</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Yes`  

În simulator, scuturi cu butonul **SHAKE** de pe placa desenată.

**Încearcă tu — (5–8 min)**  
- [ ] La scuturare apare bifa  
- [ ] Ai scuturat de mai multe ori la rând  

### 3) Numerele aleatorii
<span style="color:#9C00C8;font-weight:700">pick random</span> `0` to `2` alege la întâmplare **0**, **1** sau **2**. Îl pui într-o variabilă:

<span style="color:#D400D4;font-weight:700">on shake</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `raspuns` to <span style="color:#9C00C8;font-weight:700">pick random</span> `0` to `2`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `raspuns`  

Creezi variabila `raspuns` (ca în lecția 4). Scuturi de câteva ori: numerele se schimbă, fără ordine.

**Încearcă tu — (5–8 min)**  
- [ ] La fiecare scuturare apare 0, 1 sau 2  
- [ ] Ai numărat de 10 ori cât de des iese fiecare  

### 4) Bila magică: Minim
Fiecare număr devine un răspuns: **0** = `Yes`, **1** = `No`, **2** = `Confused` (Poate).

1. În <span style="color:#1E90FF;font-weight:700">on start</span>: <span style="color:#1E90FF;font-weight:700">show string</span> `Intreaba` (fără diacritice)  
2. În <span style="color:#D400D4;font-weight:700">on shake</span>: <span style="color:#DC143C;font-weight:700">set</span> `raspuns` to <span style="color:#9C00C8;font-weight:700">pick random</span> `0` to `2`  
3. Apoi <span style="color:#00A4A6;font-weight:700">if … then … else</span>: dacă `raspuns = 0` arată `Yes`; **altfel**, încă un <span style="color:#00A4A6;font-weight:700">if … then … else</span>: dacă `raspuns = 1` arată `No`, altfel `Confused`  
4. La final <span style="color:#1E90FF;font-weight:700">pause (ms)</span> `2000` și <span style="color:#1E90FF;font-weight:700">clear screen</span>  

Programul tău (Minim):

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `Intreaba`  

<span style="color:#D400D4;font-weight:700">on shake</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `raspuns` to <span style="color:#9C00C8;font-weight:700">pick random</span> `0` to `2`  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `raspuns = 0` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Yes`  
&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `raspuns = 1` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `No`  
&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Confused`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `2000`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>

**Încearcă tu — (15–20 min)**  
- [ ] Fiecare scuturare dă Da, Nu sau Poate, la întâmplare  
- [ ] Răspunsul stă 2 secunde și se șterge  
- [ ] Programul e pe placa adevărată  

### 5) Complet: „mă gândesc”
Înainte de răspuns, placa „se gândește”: miezul clipește de 3 ori.

&emsp;<span style="color:#00A600;font-weight:700">repeat</span> `3` times  
&emsp;&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `2` `2`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `200`  
&emsp;&emsp;<span style="color:#5C2D91;font-weight:700">unplot x y</span> `2` `2`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `200`  

Pui acest <span style="color:#00A600;font-weight:700">repeat</span> la **începutul** blocului <span style="color:#D400D4;font-weight:700">on shake</span>, **înainte** de <span style="color:#DC143C;font-weight:700">set</span>.

**Încearcă tu — (8–10 min)**  
- [ ] Înainte de răspuns, miezul clipește de 3 ori  

### 6) Complet: înclinarea pentru întrebarea nouă
Dacă înclini placa spre **stânga**, apare din nou `Intreaba`. Pentru asta citim accelerometrul într-un <span style="color:#1E90FF;font-weight:700">forever</span>.

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `acceleration x < -500` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `Intreaba`  

Programul de la **Complet** (în afară de ce ai deja în Minim):

<span style="color:#D400D4;font-weight:700">on shake</span>  
&emsp;<span style="color:#00A600;font-weight:700">repeat</span> `3` times  
&emsp;&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `2` `2`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `200`  
&emsp;&emsp;<span style="color:#5C2D91;font-weight:700">unplot x y</span> `2` `2`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `200`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `raspuns` to <span style="color:#9C00C8;font-weight:700">pick random</span> `0` to `2`  
&emsp;*(restul rămâne ca în Minim)*  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `acceleration x < -500` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `Intreaba`

**Încearcă tu — (8–10 min)**  
- [ ] Înclinarea spre stânga arată `Intreaba`  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  

---

## Greșeli frecvente
1. **Nu se întâmplă nimic la scuturare** — blocul <span style="color:#D400D4;font-weight:700">on shake</span> nu e pe zona de lucru sau e pus în <span style="color:#1E90FF;font-weight:700">on start</span>.  
2. **Dă mereu același răspuns** — ai uitat să pui `pick random` în `set`.  
3. **Apare doar `Yes` sau `No`** — al doilea <span style="color:#00A4A6;font-weight:700">if … then … else</span> nu e în ramura **altfel** a primului.  
4. **Nu apare `Confused`** — verifică `pick random 0 to 2` (limita de sus e 2).  
5. **„Mă gândesc” apare după răspuns** — <span style="color:#00A600;font-weight:700">repeat</span> e după <span style="color:#DC143C;font-weight:700">set</span> în loc de înainte.  
6. **Textul `Intreaba` se amestecă cu răspunsul** — <span style="color:#1E90FF;font-weight:700">forever</span> nu are <span style="color:#1E90FF;font-weight:700">pause (ms)</span> în el.  

---

## De făcut azi — „Bila magică Da / Nu”
Salvat: `Prenume_Nume_MB1_L07`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1** — bila magică dă Da, Nu sau Poate la scuturare, cu **cel puțin 8 blocuri diferite**, pe placă |
| **Complet (ținta orei)** | Minim + **Pasul 2** — „mă gândesc” înainte de răspuns și înclinare spre stânga, cu cel puțin **6 blocuri diferite** |

Dacă rămâi în urmă: **oprește-te la Minim** și salvează. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Bila magică *(Minim)*
<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `Intreaba`  

<span style="color:#D400D4;font-weight:700">on shake</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `raspuns` to <span style="color:#9C00C8;font-weight:700">pick random</span> `0` to `2`  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `raspuns = 0` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Yes`  
&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `raspuns = 1` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `No`  
&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Confused`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `2000`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>

- [ ] Proiect nou cu numele `Prenume_Nume_MB1_L07`  
- [ ] Variabila `raspuns` creată  
- [ ] Ai cel puțin **8 blocuri diferite**: <span style="color:#1E90FF;font-weight:700">on start</span>, <span style="color:#1E90FF;font-weight:700">show string</span>, <span style="color:#D400D4;font-weight:700">on shake</span>, <span style="color:#DC143C;font-weight:700">set</span>, <span style="color:#9C00C8;font-weight:700">pick random</span>, <span style="color:#00A4A6;font-weight:700">if … then … else</span>, <span style="color:#00A4A6;font-weight:700">0 = 0</span>, <span style="color:#1E90FF;font-weight:700">show icon</span>, <span style="color:#1E90FF;font-weight:700">pause (ms)</span>, <span style="color:#1E90FF;font-weight:700">clear screen</span>  
- [ ] Programul e trimis pe placă  

**→ Ai Minim când:** un coleg pune o întrebare, scuturi placa și vede Da, Nu sau Poate, fără explicații; la 10 scuturări nu primește mereu același răspuns.

### Pasul 2 — Mă gândesc și înclinarea *(Complet)*
<span style="color:#D400D4;font-weight:700">on shake</span>  
&emsp;<span style="color:#00A600;font-weight:700">repeat</span> `3` times  
&emsp;&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `2` `2`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `200`  
&emsp;&emsp;<span style="color:#5C2D91;font-weight:700">unplot x y</span> `2` `2`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `200`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `raspuns` to <span style="color:#9C00C8;font-weight:700">pick random</span> `0` to `2`  
&emsp;*(restul rămâne ca în Minim)*  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `acceleration x < -500` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `Intreaba`

- [ ] <span style="color:#00A600;font-weight:700">repeat</span> `3` times cu <span style="color:#5C2D91;font-weight:700">plot x y</span> și <span style="color:#5C2D91;font-weight:700">unplot x y</span> la începutul lui <span style="color:#D400D4;font-weight:700">on shake</span>  
- [ ] <span style="color:#1E90FF;font-weight:700">forever</span> cu <span style="color:#00A4A6;font-weight:700">if</span> `acceleration x < -500` arată `Intreaba`  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  
- [ ] Salvat din nou: `Prenume_Nume_MB1_L07`  

**Gata Complet când:** placa „se gândește”, apoi răspunde, iar înclinată spre stânga cere o întrebare nouă.

---

## Bonus ★★★ — Provocare: Bila cu patru răspunsuri
*Doar dacă ai terminat Complet.*

- [ ] Schimbă pauza de răspuns: `1000` sau `3000`  
- [ ] **Provocarea:** bila are **4 răspunsuri** (<span style="color:#9C00C8;font-weight:700">pick random</span> `0` to `3`), unul dintre ele haios, desenat de tine cu <span style="color:#1E90FF;font-weight:700">show leds</span>. Înainte de răspuns, placa arată o animație „gândesc…” cu 3 pași. Un coleg pune 5 întrebări și **nu primește de 5 ori același răspuns**.  

## Recapitulare rapidă
1. **Accelerometrul** simte mișcarea plăcii  
2. <span style="color:#D400D4;font-weight:700">on shake</span> pornește când scuturi  
3. `pick random 0 to 2` alege `0`, `1` sau `2` la întâmplare  
4. Un <span style="color:#00A4A6;font-weight:700">if … then … else</span> în **altfel** adaugă a treia variantă  
5. Un program poate răspunde **diferit** la aceeași acțiune  
6. Minim = Pasul 1 · Complet = Pasul 1 + 2  

## Schema pe scurt *(pe foaie)*
Scuturat → <span style="color:#9C00C8;font-weight:700">pick random</span> → `raspuns` → <span style="color:#00A4A6;font-weight:700">if</span> `= 0` → `Yes` · altfel <span style="color:#00A4A6;font-weight:700">if</span> `= 1` → `No` · altfel `Confused`

<span style="color:#1E90FF;font-weight:700">forever</span>: <span style="color:#00A4A6;font-weight:700">if</span> `acceleration x < -500` → <span style="color:#1E90FF;font-weight:700">show string</span> `Intreaba`

**Quiz scurt (cu profesorul):**  
- Ce măsoară un accelerometru?  
- Ce numere poate da `pick random 0 to 2`?  
- De ce bila magică nu dă mereu același răspuns?  
- Cum faci a treia variantă de răspuns?  
- Ce se întâmplă dacă înclini placa spre stânga?  

## Temă (opțional)
- Dacă ai doar Minim: acasă, adaugi „mă gândesc” și înclinarea (Pasul 2), în același `Prenume_Nume_MB1_L07`.  
- Dacă ai Complet: te gândești la 3 întrebări pentru bila magică și la un al patrulea răspuns haios; le scrii pe foaie și mâine le testezi cu un coleg.  
- Dacă ai terminat și Bonusul: faci o copie și schimbi răspunsurile.  

## Ce urmează
În **Lecția 8** placa **măsoară lumina și temperatura**: o seră inteligentă.
