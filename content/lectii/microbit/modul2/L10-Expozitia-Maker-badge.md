# Lecția 10 — Expoziția Maker
### Reluare: proiectele din tot Modulul 2
**Modulul 2 · Proiecte Maker cu micro:bit (blocuri)**  
**Code Maker Club · micro:bit Maker**

> Azi nu înveți blocuri noi, ci **îmbini** proiectele din Modulul 2 și faci **„Panoul Maker”**:  
> un singur program cu mai multe moduri: busolă, pedometru, ceas, termometru, jurnal. Apoi îl prezinți la expoziție.  
> Fișier: `Prenume_Nume_MB2_L10` (ex. `Ana_Pop_MB2_L10`)

---

## Obiectiv
La finalul orei **folosești singur** tot ce ai învățat în Modulul 2 și primești insigna **micro:bit Maker**.  
**Minim:** un **Panou Maker** cu `3` moduri (busolă, pași, secunde), A schimbă modul, B îl arată, cu cel puțin **8 blocuri diferite**.  
**Ținta orei (Complet):** partea a doua: încă **2 moduri** (o față după temperatură și un jurnal de măsurători), cu cel puțin **6 blocuri diferite**, și **prezentarea** de 1 minut.

## De ce contează
Un programator nu rescrie totul de la zero: el **adună** ce a făcut deja. Azi vezi că ai o **bibliotecă de proiecte**, iar un aparat mare e făcut din piese mici.  
La expoziție înveți și să **povestești** ce ai făcut, o abilitate la fel de importantă ca programul.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap Modulul 2, lista de proiecte |
| 10–25 | Planul Panoului Maker pe foaie |
| 25–70 | Piesele din L1, L2, L3, L4 (**Minim**) |
| 70–95 | Piesele din L5, L6 (**Complet**) |
| 95–105 | Prezentarea de 1 minut |
| 105–120 | **Verificarea Modulului 2**, autoevaluare, badge |

**Unelte azi:** placa micro:bit · cablu micro-USB · browser Chrome sau Edge · [makecode.microbit.org](https://makecode.microbit.org)

**Capitole azi:**  
<span style="color:#D400D4;font-weight:700">Input</span> · <span style="color:#DC143C;font-weight:700">Variables</span> · <span style="color:#00A4A6;font-weight:700">Logic</span> · <span style="color:#9C00C8;font-weight:700">Math</span> · <span style="color:#E65722;font-weight:700">Arrays</span> · <span style="color:#1E90FF;font-weight:700">Basic</span>  
*(nu avem capitole noi azi.)*

**Blocurile de azi:**

| Bloc | Ce face |
|------|---------|
| <span style="color:#DC143C;font-weight:700">mod</span> | **L1:** panoul cu moduri |
| <span style="color:#D400D4;font-weight:700">compass heading</span> | **L1, L2:** direcția (modul `0`) |
| <span style="color:#D400D4;font-weight:700">acceleration (mg) strength</span> | **L3:** pașii (modul `1`) |
| <span style="color:#D400D4;font-weight:700">running time (ms)</span> | **L1, L4:** secunde de la pornire (modul `2`) |
| <span style="color:#00A4A6;font-weight:700">else if</span> | **L2:** mai multe variante într-un `if` |
| <span style="color:#D400D4;font-weight:700">temperature (°C)</span> | **L6:** față după temperatură (modul `3`) |
| <span style="color:#E65722;font-weight:700">add value to end of</span> | **L6:** jurnalul (modul `4`) |

*Azi nu apar blocuri noi: tabelul de mai sus arată **din ce lecție** vine fiecare piesă.*

---

## Pas cu pas

### 1) Planul pe foaie
Desenezi pe foaie **Panoul Maker**: ce arată fiecare mod.

| `mod` | Ce arată | Din lecția |
|-------|----------|------------|
| `0` | direcția (busola) | 1, 2 |
| `1` | numărul de pași | 3 |
| `2` | secundele de la pornire | 1, 4 |
| `3` | față veselă sau tristă după temperatură | 6 |
| `4` | notează temperatura în jurnal | 6 |

A schimbă modul, B îl **arată**.

**Încearcă tu — (8–10 min)**  
- [ ] Ai desenat tabelul pe foaie  
- [ ] Știi ce piesă vine din ce lecție  

### 2) Modurile 0, 1 și 2: Minim
1. Proiect nou: `Prenume_Nume_MB2_L10`  
2. Creezi variabilele `mod` și `pasi`  
3. În <span style="color:#1E90FF;font-weight:700">forever</span>: pasul de la pedometru (L3): <span style="color:#00A4A6;font-weight:700">if</span> forța `> 1300` → <span style="color:#DC143C;font-weight:700">change</span> `pasi` by `1` și pauză `400`  
4. La <span style="color:#D400D4;font-weight:700">on button A pressed</span>: <span style="color:#DC143C;font-weight:700">change</span> `mod` by `1`; dacă `mod > 2`, <span style="color:#DC143C;font-weight:700">set</span> `mod` to `0`; apoi <span style="color:#1E90FF;font-weight:700">show number</span> `mod`  
5. La <span style="color:#D400D4;font-weight:700">on button B pressed</span>: <span style="color:#00A4A6;font-weight:700">if … then</span> `mod = 0` → <span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#D400D4;font-weight:700">compass heading</span>; <span style="color:#00A4A6;font-weight:700">else if</span> `mod = 1` → <span style="color:#1E90FF;font-weight:700">show number</span> `pasi`; altfel <span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#D400D4;font-weight:700">running time (ms)</span> <span style="color:#9C00C8;font-weight:700">÷</span> `1000`  

Programul tău (Minim):

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `mod` to `0`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `pasi` to `0`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `mod`  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `acceleration strength > 1300` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">change</span> `pasi` by `1`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `400`  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `mod` by `1`  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `mod > 2` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `mod` to `0`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `mod`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `mod = 0` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#D400D4;font-weight:700">compass heading</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">else if</span> `mod = 1` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `pasi`  
&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#D400D4;font-weight:700">running time (ms)</span> <span style="color:#9C00C8;font-weight:700">÷</span> `1000`

**Încearcă tu — (25–30 min)**  
- [ ] A trece prin 0, 1, 2 și se întoarce la 0  
- [ ] B arată busola, pașii și secundele  
- [ ] Mergi `10` pași și modul `1` arată un număr apropiat de `10`  
- [ ] Programul e pe placa adevărată  

### 3) Complet: modurile 3 și 4
Adaugi **două moduri**: modul `3` arată o față după temperatură (`Happy` dacă `temperature > 25`, altfel `Sad`), modul `4` notează temperatura într-o **listă** `masuratori` (pe care o creezi în <span style="color:#1E90FF;font-weight:700">on start</span>).

Schimbi `if mod > 2` în `if mod > 4`, ca A să treacă prin toate cele 5 moduri.

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `mod` by `1`  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `mod > 4` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `mod` to `0`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `mod`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;*(modurile `0`, `1`, `2` ca în Minim)*  
&emsp;<span style="color:#00A4A6;font-weight:700">else if</span> `mod = 3` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `temperature (°C) > 25` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Happy`  
&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Sad`  
&emsp;<span style="color:#00A4A6;font-weight:700">else if</span> `mod = 4` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#E65722;font-weight:700">add value to end of</span> `masuratori` <span style="color:#D400D4;font-weight:700">temperature (°C)</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Yes`

**Încearcă tu — (20–25 min)**  
- [ ] A trece prin cele 5 moduri  
- [ ] Modul `3` arată o față după temperatură  
- [ ] Modul `4` notează temperatura și arată bifa  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  

### 4) Prezentarea de 1 minut
Prezinți Panoul Maker unui coleg, în **1 minut**. Spui:
1. **Ce face** (cele 5 moduri)  
2. **Ce piesă ți-a plăcut cel mai mult** și din ce lecție vine  
3. **Ce greșeală** ai avut și cum ai reparat-o (metoda doctorului)  
4. **Ce ai schimba** dacă ai mai avea o oră  

Coleg: pune o întrebare și spune ce a înțeles.

**Încearcă tu — (10 min)**  
- [ ] Ai prezentat în 1 minut  
- [ ] Ai răspuns la o întrebare de la coleg  

---

## Greșeli frecvente
1. **Panoul nu mai pornește** — ai blocuri neconectate pe masă. Verifică ce e gri.  
2. **`pasi` nu crește** — <span style="color:#00A4A6;font-weight:700">if</span> de la pedometru e în afara lui <span style="color:#1E90FF;font-weight:700">forever</span>, sau pragul e prea mare.  
3. **A nu trece prin toate modurile** — `if mod > 2` (sau `> 4`) lipsește sau are `set mod to 0` în afara lui `if`.  
4. **Busola arată `0` sau numere ciudate** — nu ai calibrat placa.  
5. **Jurnalul e gol** — lipsește `set masuratori to empty array` în `on start`.  
6. **Prezentarea durează prea mult** — alege **3** lucruri și exersează o dată înainte.  

---

## De făcut azi — „Expoziția Maker”
Salvat: `Prenume_Nume_MB2_L10`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1** — un Panou Maker cu `3` moduri, A le schimbă și B le arată, cu **cel puțin 8 blocuri diferite**, pe placă |
| **Complet (ținta orei)** | Minim + **Pasul 2** — încă `2` moduri (față după temperatură și jurnal), cu cel puțin **6 blocuri diferite**, și prezentarea |

Dacă rămâi în urmă: **oprește-te la Minim** și salvează. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Panoul Maker *(Minim)*
<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `mod` to `0`  
&emsp;<span style="color:#DC143C;font-weight:700">set</span> `pasi` to `0`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `mod`  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `acceleration strength > 1300` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">change</span> `pasi` by `1`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `400`  

<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `mod` by `1`  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `mod > 2` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `mod` to `0`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `mod`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `mod = 0` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#D400D4;font-weight:700">compass heading</span>  
&emsp;<span style="color:#00A4A6;font-weight:700">else if</span> `mod = 1` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `pasi`  
&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> <span style="color:#D400D4;font-weight:700">running time (ms)</span> <span style="color:#9C00C8;font-weight:700">÷</span> `1000`

- [ ] Proiect nou cu numele `Prenume_Nume_MB2_L10`  
- [ ] Variabilele `mod` și `pasi` create  
- [ ] Ai cel puțin **8 blocuri diferite**: <span style="color:#1E90FF;font-weight:700">on start</span>, <span style="color:#DC143C;font-weight:700">set</span>, <span style="color:#1E90FF;font-weight:700">show number</span>, <span style="color:#1E90FF;font-weight:700">forever</span>, <span style="color:#00A4A6;font-weight:700">if … then</span>, <span style="color:#00A4A6;font-weight:700">0 > 0</span>, <span style="color:#D400D4;font-weight:700">acceleration (mg) strength</span>, <span style="color:#DC143C;font-weight:700">change</span>, <span style="color:#1E90FF;font-weight:700">pause (ms)</span>, <span style="color:#D400D4;font-weight:700">on button pressed</span>, <span style="color:#00A4A6;font-weight:700">else if</span>, <span style="color:#D400D4;font-weight:700">compass heading</span>, <span style="color:#D400D4;font-weight:700">running time (ms)</span>  
- [ ] Toate cele trei moduri merg pe placă  
- [ ] Prezentarea de 1 minut a fost făcută  

**→ Ai Minim când:** un coleg apasă A și B și vede busola, pașii și secundele, fără explicații.

### Pasul 2 — Modurile 3 și 4 *(Complet)*
<span style="color:#D400D4;font-weight:700">on button A pressed</span>  
&emsp;<span style="color:#DC143C;font-weight:700">change</span> `mod` by `1`  
&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `mod > 4` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#DC143C;font-weight:700">set</span> `mod` to `0`  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `mod`  

<span style="color:#D400D4;font-weight:700">on button B pressed</span>  
&emsp;*(modurile `0`, `1`, `2` ca în Minim)*  
&emsp;<span style="color:#00A4A6;font-weight:700">else if</span> `mod = 3` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">if</span> `temperature (°C) > 25` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Happy`  
&emsp;&emsp;<span style="color:#00A4A6;font-weight:700">else</span>  
&emsp;&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Sad`  
&emsp;<span style="color:#00A4A6;font-weight:700">else if</span> `mod = 4` <span style="color:#00A4A6;font-weight:700">then</span>  
&emsp;&emsp;<span style="color:#E65722;font-weight:700">add value to end of</span> `masuratori` <span style="color:#D400D4;font-weight:700">temperature (°C)</span>  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Yes`

- [ ] Lista `masuratori` creată în `on start`  
- [ ] Modul `3`: `Happy` sau `Sad` după temperatură  
- [ ] Modul `4`: notează temperatura în listă  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  
- [ ] Verificarea Modulului 2 completată  
- [ ] Salvat din nou: `Prenume_Nume_MB2_L10`  

**Gata Complet când:** A trece prin 5 moduri, iar fiecare mod face ce scrie în tabelul tău.

---

## Bonus ★★★ — Provocare: Panoul cu povestea mea
*Doar dacă ai terminat Complet.*

- [ ] Schimbă pragul de temperatură și numele modurilor  
- [ ] **Provocarea:** alegi **un proiect din Modulul 2** (Șarpele, Paznicul, Theremin …), îl **îmbunătățești cu o idee a ta** (un mod nou, o animație, o regulă) și îl prezinți la expoziție. Un coleg încearcă proiectul tău `2` minute și îți spune **ce a înțeles singur**, fără explicații din partea ta.  

## Recapitulare rapidă
1. Un proiect mare e făcut din **piese mici**, adică lecțiile tale  
2. `mod` + `if/else if` pun mai multe proiecte într-un singur program  
3. Metoda doctorului de cod te scapă de multe greșeli  
4. Prezentarea arată ce ai învățat și ce ai alege diferit  
5. Ai terminat Modulul 2  
6. Minim = Pasul 1 · Complet = Pasul 1 + 2  

## Schema pe scurt *(pe foaie)*
A → `mod` → B arată: busola · pași · secunde · față după temperatură · jurnal

Forever → numără pașii (forța > 1300 → `pasi + 1`)

**Quiz scurt (cu profesorul):**  
- Din ce lecție vine pedometrul?  
- Ce face `mod` în panoul tău?  
- Cum se numește metoda de a găsi greșeli?  
- Ce ai alege diferit dacă ai mai avea o oră?  
- Ce piesă ți-a plăcut cel mai mult?  

## Temă (opțional)
- Fă o poză programului tău (screenshot) și o poză a plăcii în funcțiune. Adu-le mâine pentru **portofoliul** tău.  
- Dacă ai Complet: completează Verificarea Modulului 2 de mai jos și bifează autoevaluarea.  

## Verificarea Modulului 2
Răspunde pe foaie, fără să te uiți în lecții. Răspunsurile sunt la final.

1. Ce face variabila `mod` într-un panou de comandă?  
2. Ce număr dă `compass heading` când placa arată spre Est?  
3. De ce N are nevoie de `or` la busolă?  
4. Cum alegi pragul pentru pași?  
5. De ce punem `pause` după ce am numărat un pas?  
6. Ce face `remainder of`? Dă un exemplu.  
7. Care e prima poziție dintr-o listă și care e ultima?  
8. Cum calculezi media valorilor dintr-o listă?  
9. Ce înseamnă un parametru la o funcție?  
10. Care sunt cei 5 pași ai doctorului de cod?

**Autoevaluare**

Bifează ce poți face **singur**:

- [ ] fac un program cu mai multe moduri (`mod`)
- [ ] folosesc busola și accelerometrul
- [ ] folosesc `else if`, `map` și `remainder of`
- [ ] folosesc o listă (adaug, citesc, calculez)
- [ ] folosesc o funcție cu parametru
- [ ] repar un program stricat cu metoda în 5 pași
- [ ] prezint un proiect în 1 minut

**Răspunsuri:**
1. Ține minte în ce mod este programul. 2. Aproximativ `90`. 3. Nordul e la începutul și la sfârșitul cercului (`10` și `350`). 4. Îl măsor mergând și aleg un număr puțin sub cele văzute. 5. Ca să nu număr același pas de două ori. 6. Restul împărțirii; de exemplu `(59 + 1)` împărțit la `60` are restul `0`. 7. `0` și `length − 1`. 8. Suma împărțită la câte sunt. 9. O valoare care vine de afară în funcție. 10. Citești, rulezi, izolezi, repari, verifici.

---

## Ce urmează
**Felicitări!** Ai terminat Modulul 2 de la micro:bit cu blocuri. Următoarele module te duc spre **Python** pe aceeași placă.
