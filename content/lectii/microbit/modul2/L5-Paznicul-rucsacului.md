# Lecția 5 — Paznicul rucsacului
### Stări, alarmă și timp
**Modulul 2 · Proiecte Maker cu micro:bit (blocuri)**  
**Code Maker Club · micro:bit Maker**

> Azi înveți să dai programului **mai multe stări** și faci **„Paznicul rucsacului”**:  
> pui placa în rucsac, o armezi cu A, iar dacă cineva o mișcă, ea sună alarma.  
> Fișier: `Prenume_Nume_MB2_L05` (ex. `Ana_Pop_MB2_L05`)

---

## Obiectiv
La finalul orei folosești o variabilă `stare` cu 3–4 valori, `on shake` ca senzor și `running time` ca să măsori cât durează ceva.  
**Minim:** A armează paznicul (după o numărătoare), mișcarea declanșează alarma, B o oprește, cu **cel puțin 8 blocuri diferite**.  
**Ținta orei (Complet):** partea a doua: alarma pornește după **3 secunde de avertisment** (în care poți încă să o oprești), iar **A+B** o oprește oricând, cu cel puțin **6 blocuri diferite**.

## De ce contează
Alarmele din mașini și din case au câteva stări: oprită, armată, avertisment, alarmă. Dacă ai intrat în mașină, ai câteva secunde să tastezi codul, apoi sună.  
Azi faci acest „automat cu stări”, la scară mică.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L4: variabile, timp, `and` |
| 10–30 | Jocul „Statuia”: stările unui paznic |
| 30–50 | Variabila `stare` pe foaie: tabelul stărilor |
| 50–85 | Paznicul (**Minim**) |
| 85–110 | **Complet:** avertisment cu `running time` |
| 110–120 | Recap, bonus, arăți ce ai gata |

**Unelte azi:** placa micro:bit · cablu micro-USB · browser Chrome sau Edge · [makecode.microbit.org](https://makecode.microbit.org)

**Capitole azi:**  
<span style="color:#DC143C;font-weight:700">Variables</span> · <span style="color:#D400D4;font-weight:700">Input</span> · <span style="color:#00A4A6;font-weight:700">Logic</span> · <span style="color:#9C00C8;font-weight:700">Math</span> · <span style="color:#00A600;font-weight:700">Loops</span> · <span style="color:#1E90FF;font-weight:700">Basic</span>  
*(blocuri noi: `not` (Logic) și `0 − 0` (Math).)*

**Blocurile de azi:**

| Bloc | Ce face |
|------|---------|
| <span style="color:#00A4A6;font-weight:700">not</span> | întoarce răspunsul: adevărat devine fals și invers |
| <span style="color:#9C00C8;font-weight:700">0 − 0</span> | scade al doilea număr din primul |

*Din lecțiile trecute le știi deja:* <span style="color:#1E90FF;font-weight:700">on start</span>, <span style="color:#1E90FF;font-weight:700">forever</span>, <span style="color:#1E90FF;font-weight:700">show icon</span>, <span style="color:#1E90FF;font-weight:700">pause (ms)</span>, <span style="color:#1E90FF;font-weight:700">clear screen</span>, <span style="color:#D400D4;font-weight:700">on button pressed</span>, <span style="color:#D400D4;font-weight:700">on shake</span>, <span style="color:#D400D4;font-weight:700">running time (ms)</span>, <span style="color:#5C2D91;font-weight:700">plot x y</span>, <span style="color:#00A600;font-weight:700">repeat</span>, <span style="color:#DC143C;font-weight:700">set</span>, <span style="color:#00A4A6;font-weight:700">if … then</span>, <span style="color:#00A4A6;font-weight:700">0 = 0</span>, <span style="color:#00A4A6;font-weight:700">0 > 0</span>.

---

## Pas cu pas

### 1) Jocul „Statuia” (fără calculator)
Un copil e **paznicul**. Cât timp paznicul se uită la tine, stai ca o statuie. Dacă te mișci, ești descoperit și paznicul spune „ALARMĂ!”.

Paznicul are **stări**: „privește” sau „nu privește”. Pentru fiecare stare, o mișcare înseamnă altceva.

**Încearcă tu — (5–8 min)**  
- [ ] Ai jucat statuia cu un coleg  
- [ ] Spui în ce stare e paznicul și ce se întâmplă la mișcare  

### 2) Stările pe foaie
Înainte de blocuri, desenezi pe foaie **stările** paznicului, ca la Seiful secret:

| `stare` | Ce înseamnă | Ce se întâmplă la scuturare |
|---------|-------------|-----------------------------|
| `0` | liber (nu păzește) | nimic |
| `1` | armat | trece în stare `2` |
| `2` | alarmă | clipește craniul |

**A** armează (stare `1`), **B** oprește (stare `0`).

**Încearcă tu — (8–10 min)**  
- [ ] Ai desenat cele trei stări  
- [ ] Spui ce se întâmplă dacă scuturi placa în fiecare stare  

### 3) Armarea: A cu numărătoare
Când apeși A, ai nevoie de câteva secunde să pui placa în rucsac. Facem o **întârziere**: <span style="color:#00A600;font-weight:700">repeat</span> `3` times cu o formă mică, apoi `stare = 1` și un punct pe ecran.

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#00A600;font-weight:700">repeat</span> `3` times  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `SmallDiamond`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `stare` to `1`  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `2` `2`

**Încearcă tu — (10 min)**  
- [ ] La A apar trei clipiri, apoi un punct în mijloc  
- [ ] Spui de ce nu se armează imediat  

### 4) Alarma și oprirea
1. Proiect nou: `Prenume_Nume_MB2_L05`  
2. Creezi variabila `stare`; în <span style="color:#1E90FF;font-weight:700">on start</span>: <span style="color:#DC143C;font-weight:700">set</span> `stare` to `0` și `Asleep`  
3. <span style="color:#D400D4;font-weight:700">on shake</span>: <span style="color:#00A4A6;font-weight:700">if</span> `stare = 1` → <span style="color:#DC143C;font-weight:700">set</span> `stare` to `2`  
4. În <span style="color:#1E90FF;font-weight:700">forever</span>: <span style="color:#00A4A6;font-weight:700">if</span> `stare = 2` → clipește `Skull`  
5. La <span style="color:#D400D4;font-weight:700">on button B pressed</span>: <span style="color:#DC143C;font-weight:700">set</span> `stare` to `0`, o bifă și <span style="color:#1E90FF;font-weight:700">clear screen</span>  

&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `stare = 1` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `stare` to `2`  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `stare = 2` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Skull`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `200`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `200`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `stare` to `0`  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Yes`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>

**Încearcă tu — (10 min)**  
- [ ] Armezi cu A, scuturi, și craniul clipește  
- [ ] B oprește alarma  

### 5) Paznicul: Minim
Reunești totul.

Programul tău (Minim):

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `stare` to `0`  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Asleep`  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#00A600;font-weight:700">repeat</span> `3` times  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `SmallDiamond`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `stare` to `1`  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `2` `2`  

<span style="color:#D400D4;font-weight:700">on shake</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `stare = 1` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `stare` to `2`  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `stare = 2` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Skull`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `200`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `200`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `stare` to `0`  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Yes`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  

**Test:** scuturi fără să armezi: nimic. Armezi, scuturi: alarma. Apeși B: liniște.

**Încearcă tu — (10–15 min)**  
- [ ] Fără armare, scuturarea nu face nimic  
- [ ] Armat, scuturarea pornește alarma  
- [ ] B oprește alarma  
- [ ] Programul e pe placa adevărată  

### 6) Complet: avertisment cu running time
Adăugăm o stare nouă, **`3` = avertisment**: după scuturare, placa arată `Surprised` timp de **3 secunde**, iar tu poți apăsa B să o oprești (ești chiar tu, care scoți placa din rucsac). Dacă nu apeși, trece în alarmă (`2`).

În alarmă, B **nu mai oprește**: doar **A+B** o oprește. Ca să spunem „B oprește doar dacă **nu** e alarmă” folosim <span style="color:#00A4A6;font-weight:700">not</span>.

Pentru cele 3 secunde, la scuturare notăm <span style="color:#DC143C;font-weight:700">set</span> `start` to <span style="color:#D400D4;font-weight:700">running time (ms)</span>, iar în <span style="color:#1E90FF;font-weight:700">forever</span> verificăm <span style="color:#00A4A6;font-weight:700">if</span> `running time − start > 3000` cu <span style="color:#9C00C8;font-weight:700">0 − 0</span>.

<span style="color:#D400D4;font-weight:700">on shake</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `stare = 1` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `stare` to `3`  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `start` to <span style="color:#D400D4;font-weight:700">running time (ms)</span>  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `stare = 3` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Surprised`  
&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `running time (ms) − start > 3000` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `stare` to `2`  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `stare = 2` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Skull`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `200`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `200`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `not stare = 2` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `stare` to `0`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Yes`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  

<span style="color:#D400D4;font-weight:700">on button A+B pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `stare` to `0`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>

**Încearcă tu — (20 min)**  
- [ ] După scuturare apare `Surprised`, iar B încă oprește  
- [ ] După 3 secunde pornește alarma, iar B nu o mai oprește  
- [ ] A+B oprește alarma oricând  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  

---

## Greșeli frecvente
1. **Alarma pornește fără scuturare** — `stare` nu e `0` la început, sau `if stare = 1` are `=` greșit.  
2. **Armarea nu are întârziere** — <span style="color:#00A600;font-weight:700">repeat</span> e în afara lui <span style="color:#D400D4;font-weight:700">on button A pressed</span>.  
3. **Craniul nu clipește** — lipsește `pause` în `forever`, sau `if stare = 2` e pus în alt bloc.  
4. **Avertismentul nu se termină** — `start` nu se salvează la scuturare, sau `3000` e scris greșit.  
5. **B oprește chiar și în alarmă** — lipsește `not` sau `stare = 2` e scris altfel.  
6. **Scuturi în stare `0` și sună** — ai uitat <span style="color:#00A4A6;font-weight:700">if</span> `stare = 1` în <span style="color:#D400D4;font-weight:700">on shake</span>.  

---

## De făcut azi — „Paznicul rucsacului”
Salvat: `Prenume_Nume_MB2_L05`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1** — A armează după o numărătoare, mișcarea declanșează alarma, B o oprește, cu **cel puțin 8 blocuri diferite**, pe placă |
| **Complet (ținta orei)** | Minim + **Pasul 2** — avertisment de 3 secunde și A+B care oprește alarma, cu cel puțin **6 blocuri diferite** |

Dacă rămâi în urmă: **oprește-te la Minim** și salvează. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Paznicul *(Minim)*
<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `stare` to `0`  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Asleep`  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#00A600;font-weight:700">repeat</span> `3` times  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `SmallDiamond`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `stare` to `1`  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `2` `2`  

<span style="color:#D400D4;font-weight:700">on shake</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `stare = 1` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `stare` to `2`  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `stare = 2` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Skull`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `200`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `200`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `stare` to `0`  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Yes`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>

- [ ] Proiect nou cu numele `Prenume_Nume_MB2_L05`  
- [ ] Variabila `stare` creată  
- [ ] Ai cel puțin **8 blocuri diferite**: <span style="color:#1E90FF;font-weight:700">on start</span>, <span style="color:#DC143C;font-weight:700">set</span>, <span style="color:#1E90FF;font-weight:700">show icon</span>, <span style="color:#D400D4;font-weight:700">on button pressed</span>, <span style="color:#00A600;font-weight:700">repeat</span>, <span style="color:#1E90FF;font-weight:700">pause (ms)</span>, <span style="color:#5C2D91;font-weight:700">plot x y</span>, <span style="color:#D400D4;font-weight:700">on shake</span>, <span style="color:#00A4A6;font-weight:700">if … then</span>, <span style="color:#00A4A6;font-weight:700">0 = 0</span>, <span style="color:#1E90FF;font-weight:700">forever</span>  
- [ ] Programul e trimis pe placă  

**→ Ai Minim când:** un coleg armează placa, o scutură și vede craniul clipind, apoi o oprește cu B.

### Pasul 2 — Avertisment *(Complet)*
<span style="color:#D400D4;font-weight:700">on shake</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `stare = 1` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `stare` to `3`  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `start` to <span style="color:#D400D4;font-weight:700">running time (ms)</span>  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `stare = 3` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Surprised`  
&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `running time (ms) − start > 3000` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `stare` to `2`  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `stare = 2` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Skull`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `200`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `200`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `not stare = 2` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `stare` to `0`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Yes`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  

<span style="color:#D400D4;font-weight:700">on button A+B pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `stare` to `0`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>

- [ ] Starea `3` (avertisment) cu `Surprised` și <span style="color:#DC143C;font-weight:700">set</span> `start` to <span style="color:#D400D4;font-weight:700">running time (ms)</span>  
- [ ] După `3000` ms trece în stare `2` (cu <span style="color:#9C00C8;font-weight:700">0 − 0</span>)  
- [ ] B oprește doar dacă <span style="color:#00A4A6;font-weight:700">not</span> `stare = 2`  
- [ ] A+B oprește alarma oricând  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  
- [ ] Salvat din nou: `Prenume_Nume_MB2_L05`  

**Gata Complet când:** scuturi placa armată, ai 3 secunde să o oprești cu B, apoi sună; doar A+B o mai oprește.

---

## Bonus ★★★ — Provocare: Șoferul adormit
*Doar dacă ai terminat Complet.*

- [ ] Schimbă forma care clipește la alarmă și numărătoarea de la armare  
- [ ] **Provocarea:** transformi paznicul în **detector de somnolență**: placa ținută pe frunte sau pe șapcă, dacă `acceleration (mg) y` arată că ai lăsat capul în față **mai mult de `2` secunde** (măsurate cu <span style="color:#D400D4;font-weight:700">running time (ms)</span>), pornește alarma. Un coleg lasă capul `1` secundă: **fără alarmă**; îl lasă `3` secunde: **alarmă**.  

## Recapitulare rapidă
1. O variabilă `stare` face un program cu mai multe **moduri de lucru**  
2. Fiecare eveniment (scuturare, buton) face altceva în fiecare stare  
3. <span style="color:#D400D4;font-weight:700">running time (ms)</span> măsoară cât durează ceva; scăzut din „start” dă timpul scurs  
4. <span style="color:#00A4A6;font-weight:700">not</span> întoarce un răspuns: „orice altceva decât `stare = 2`”  
5. Un tabel al stărilor pe foaie scutește de erori  
6. Minim = Pasul 1 · Complet = Pasul 1 + 2  

## Schema pe scurt *(pe foaie)*
`stare`: `0` liber · `1` armat · `3` avertisment · `2` alarmă

A → numărătoare → `1` · scuturare (`1`) → `3` + `start` → după 3 s → `2`

B → `0` (doar dacă nu e `2`) · A+B → `0` oricând

**Quiz scurt (cu profesorul):**  
- Câte stări are paznicul tău în Minim?  
- De ce armarea are o numărătoare?  
- Cum aflăm că au trecut 3 secunde?  
- Ce face `not stare = 2`?  
- De ce desenăm stările pe foaie?  

## Temă (opțional)
- Dacă ai doar Minim: acasă, adaugi avertismentul (Pasul 2), în același `Prenume_Nume_MB2_L05`.  
- Dacă ai Complet: gândești o a cincea stare (de exemplu „somn”, în care placa nu mai răspunde la scuturare) și o scrii în tabel.  
- Dacă ai terminat și Bonusul: faci o copie și schimbi durata de la `2` secunde la `3`.  

## Ce urmează
În **Lecția 6** placa **ține un jurnal** de măsurători: liste.
