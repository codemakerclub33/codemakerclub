# Lecția 2 — Floarea care se deschide
### Coordonate, plot și animații
**Modulul 1 · Primii pași cu micro:bit (blocuri)**  
**Code Maker Club · micro:bit Starter**

> Azi înveți să pictezi pe ecran **punct cu punct** și faci **„Floarea care se deschide”**:  
> o animație în care floarea se deschide petală cu petală, apoi se închide.  
> Fișier: `Prenume_Nume_MB1_L02` (ex. `Ana_Pop_MB1_L02`)

---

## Obiectiv
La finalul orei știi să aprinzi un LED anume, după coordonate, și să faci o animație din mai multe cadre.  
**Minim:** floarea se deschide (miez, 4 petale, 4 colțuri), miezul clipește, iar titlul apare la început, cu **8 blocuri diferite**.  
**Ținta orei (Complet):** partea a doua: floarea se **închide** petală cu petală, apare numărul petalelor și o floare desenată de tine, cu cel puțin **6 blocuri diferite**.

## De ce contează
Ecranul plăcii e un tablou cu 25 de pătrățele. Fiecare LED e un **pixel**. Toate ecranele din lume, de la telefon la televizor, desenează la fel, doar că au milioane de pixeli.  
Azi înveți să „pictezi” cu lumină, un pixel odată.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L1: `show icon`, `show leds`, `pause`, `forever` |
| 10–25 | Coordonatele **x** și **y**: adresa unui LED |
| 25–45 | `plot x y` și `unplot x y`: aprindem și stingem un LED |
| 45–60 | `toggle x y` și `repeat`: clipește și repetă |
| 60–95 | Floarea care se deschide (**Minim**) |
| 95–112 | **Complet:** floarea se închide |
| 112–120 | Recap, bonus, arăți ce ai gata |

**Unelte azi:** placa micro:bit · cablu micro-USB · browser Chrome sau Edge · [makecode.microbit.org](https://makecode.microbit.org)

**Capitole azi:**  
<span style="color:#1E90FF;font-weight:700">Basic</span> · <span style="color:#5C2D91;font-weight:700">LED</span> · <span style="color:#00A600;font-weight:700">Loops</span>  
*(Input, Logic, Variables — mai târziu.)*

**Blocurile de azi:**

| Bloc | Ce face |
|------|---------|
| <span style="color:#5C2D91;font-weight:700">plot x y</span> | aprinde LED-ul de la coordonatele alese |
| <span style="color:#5C2D91;font-weight:700">unplot x y</span> | stinge LED-ul de la coordonatele alese |
| <span style="color:#5C2D91;font-weight:700">toggle x y</span> | schimbă LED-ul: aprins devine stins, stins devine aprins |
| <span style="color:#00A600;font-weight:700">repeat 4 times</span> | repetă de câte ori alegi tu blocurile dinăuntru |

*Din L1 le știi deja:* <span style="color:#1E90FF;font-weight:700">on start</span>, <span style="color:#1E90FF;font-weight:700">forever</span>, <span style="color:#1E90FF;font-weight:700">show icon</span>, <span style="color:#1E90FF;font-weight:700">show leds</span>, <span style="color:#1E90FF;font-weight:700">pause (ms)</span>, <span style="color:#1E90FF;font-weight:700">clear screen</span>, <span style="color:#1E90FF;font-weight:700">show string</span>, <span style="color:#1E90FF;font-weight:700">show number</span>.

---

## Pas cu pas

### 1) Coordonatele: x și y
Fiecare LED are o **adresă** din două numere: **x** (coloana) și **y** (rândul). Numărătoarea începe de la **0**.

```text
        x →  0   1   2   3   4
y = 0        .   .   .   .   .
y = 1        .   .   .   .   .
y = 2        .   .   o   .   .
y = 3        .   .   .   .   .
y = 4        .   .   .   .   .
```
- Colțul din stânga sus este **(0, 0)**.  
- Colțul din dreapta jos este **(4, 4)**.  
- **Mijlocul** este **(2, 2)** (litera `o` din desen).

**Încearcă tu — (3–5 min)**  
- [ ] Arăți pe foaie cele 4 colțuri și mijlocul  
- [ ] Spui adresa LED-ului din colțul din dreapta sus (răspuns: 4, 0)  

### 2) plot: aprindem un LED
1. Proiect nou: `Prenume_Nume_MB1_L02`  
2. Din <span style="color:#5C2D91;font-weight:700">LED</span> tragi <span style="color:#5C2D91;font-weight:700">plot x y</span> în <span style="color:#1E90FF;font-weight:700">on start</span>  
3. Scrii `x` = `2` și `y` = `2`: se aprinde **mijlocul**  
4. Adaugi încă 4 <span style="color:#5C2D91;font-weight:700">plot x y</span>: `2 1`, `1 2`, `3 2`, `2 3`. Acestea sunt cele **4 petale**  

Programul tău:

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `2` `2`  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `2` `1`  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `1` `2`  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `3` `2`  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `2` `3`  

**Ce vezi pe ecran:**
```text
. . . . .
. . # . .
. # # # .
. . # . .
. . . . .
```

**Încearcă tu — (5–8 min)**  
- [ ] Apare o floare cu 4 petale în simulator  
- [ ] Ai schimbat o coordonată și ai văzut cum se mută LED-ul  

### 3) unplot și toggle
- <span style="color:#5C2D91;font-weight:700">unplot x y</span> **stinge** LED-ul de la adresa aleasă.  
- <span style="color:#5C2D91;font-weight:700">toggle x y</span> îl **schimbă**: dacă era aprins, îl stinge; dacă era stins, îl aprinde.  

Încearcă: pui <span style="color:#5C2D91;font-weight:700">toggle x y</span> `2` `2` de **două ori** la rând. Mijlocul se aprinde, apoi se stinge, atât de repede încât nu vezi nimic. De aceea între ele punem <span style="color:#1E90FF;font-weight:700">pause (ms)</span>.

<span style="color:#5C2D91;font-weight:700">toggle x y</span> `2` `2`  
<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `200`  
<span style="color:#5C2D91;font-weight:700">toggle x y</span> `2` `2`  
<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `200`

**Încearcă tu — (5–8 min)**  
- [ ] Mijlocul clipește o dată (aprins, pauză, stins, pauză)  
- [ ] Ai stins un petal cu unplot și l-ai aprins la loc cu plot  

### 4) repeat: nu scriem același lucru de 4 ori
În loc să copiezi de 4 ori aceleași blocuri, le pui într-un <span style="color:#00A600;font-weight:700">repeat</span> `4` times.

<span style="color:#00A600;font-weight:700">repeat</span> `4` times  
&emsp;<span style="color:#5C2D91;font-weight:700">toggle x y</span> `2` `2`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `200`  

Miezul florii **clipește de 4 ori**. După 4 schimbări (aprins, stins, aprins, stins) revine la starea de la început.

**Încearcă tu — (5 min)**  
- [ ] Miezul clipește de 4 ori  
- [ ] Ai schimbat `4` în `6` și ai numărat clipirile  

### 5) Floarea: Minim
Punem toată floarea în <span style="color:#1E90FF;font-weight:700">forever</span>, ca animația să se repete.

1. În <span style="color:#1E90FF;font-weight:700">on start</span> pui <span style="color:#1E90FF;font-weight:700">show string</span> `Floare` (titlul)  
2. În <span style="color:#1E90FF;font-weight:700">forever</span>, **primul bloc** e <span style="color:#1E90FF;font-weight:700">pause (ms)</span> `4000`, ca titlul să se termine înainte să înceapă desenul (aceeași regulă ca în L1)  
3. Apoi <span style="color:#1E90FF;font-weight:700">clear screen</span>, ca să pornești de pe un ecran curat  
4. **Miezul** `2 2`, pauză, apoi **4 petale**, pauză, apoi **4 colțuri** `1 1`, `3 1`, `1 3`, `3 3`, pauză  
5. La final <span style="color:#00A600;font-weight:700">repeat</span> `4` times cu <span style="color:#5C2D91;font-weight:700">toggle x y</span> la miez și o pauză scurtă  

Programul tău (Minim):

<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `Floare`  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `4000`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `2` `2`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `2` `1`  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `1` `2`  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `3` `2`  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `2` `3`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `1` `1`  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `3` `1`  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `1` `3`  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `3` `3`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;<span style="color:#00A600;font-weight:700">repeat</span> `4` times  
&emsp;&emsp;<span style="color:#5C2D91;font-weight:700">toggle x y</span> `2` `2`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `200`  

**Ce vezi la sfârșit (floarea deschisă):**
```text
. . . . .
. # # # .
. # # # .
. # # # .
. . . . .
```

**Încearcă tu — (15–20 min)**  
- [ ] Floarea apare în 3 timpi: miez, petale, colțuri  
- [ ] Miezul clipește de 4 ori la final  
- [ ] Totul se repetă singur  

### 6) Complet: floarea se închide
După clipit, adaugi în <span style="color:#1E90FF;font-weight:700">forever</span> **partea a doua** (aceleași blocuri, în ordine inversă):

1. <span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
2. <span style="color:#5C2D91;font-weight:700">unplot x y</span> la cele **4 colțuri**, pauză  
3. <span style="color:#5C2D91;font-weight:700">unplot x y</span> la cele **4 petale**, pauză  
4. <span style="color:#5C2D91;font-weight:700">unplot x y</span> la miez, apoi <span style="color:#1E90FF;font-weight:700">clear screen</span>  
5. <span style="color:#1E90FF;font-weight:700">show number</span> `8` (numărul de petale și colțuri), pauză  
6. <span style="color:#1E90FF;font-weight:700">show leds</span> cu **floarea ta**, desenată de tine, pauză, apoi <span style="color:#1E90FF;font-weight:700">show icon</span> `Heart`  

Partea a doua (se adaugă după <span style="color:#00A600;font-weight:700">repeat</span>, în <span style="color:#1E90FF;font-weight:700">forever</span>):

&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#5C2D91;font-weight:700">unplot x y</span> `1` `1`  
&emsp;<span style="color:#5C2D91;font-weight:700">unplot x y</span> `3` `1`  
&emsp;<span style="color:#5C2D91;font-weight:700">unplot x y</span> `1` `3`  
&emsp;<span style="color:#5C2D91;font-weight:700">unplot x y</span> `3` `3`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;<span style="color:#5C2D91;font-weight:700">unplot x y</span> `2` `1`  
&emsp;<span style="color:#5C2D91;font-weight:700">unplot x y</span> `1` `2`  
&emsp;<span style="color:#5C2D91;font-weight:700">unplot x y</span> `3` `2`  
&emsp;<span style="color:#5C2D91;font-weight:700">unplot x y</span> `2` `3`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;<span style="color:#5C2D91;font-weight:700">unplot x y</span> `2` `2`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show number</span> `8`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">show leds</span> *(floarea ta, desenată de tine)*  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `1000`  
&emsp;<span style="color:#1E90FF;font-weight:700">show icon</span> `Heart`

**Încearcă tu — (10–15 min)**  
- [ ] Floarea se închide în ordine inversă  
- [ ] Apare numărul `8` și floarea desenată de tine  
- [ ] Totul merge pe placa adevărată  

---

## Greșeli frecvente
1. **Nu se întâmplă nimic** — blocul e lăsat singur, nu e lipit de <span style="color:#1E90FF;font-weight:700">on start</span> sau <span style="color:#1E90FF;font-weight:700">forever</span>.  
2. **Petalele apar toate deodată** — lipsește <span style="color:#1E90FF;font-weight:700">pause (ms)</span> între grupe.  
3. **Floarea se schimbă înainte să se termine titlul** — <span style="color:#1E90FF;font-weight:700">forever</span> nu începe cu <span style="color:#1E90FF;font-weight:700">pause (ms)</span> `4000`.  
4. **Un LED e la locul greșit** — ai încurcat `x` cu `y`. `x` e coloana, `y` e rândul.  
5. **Miezul rămâne stins după clipit** — <span style="color:#00A600;font-weight:700">repeat</span> are un număr impar. Folosește `4`.  
6. **Nu se stinge nimic** — ai pus <span style="color:#5C2D91;font-weight:700">plot x y</span> în loc de <span style="color:#5C2D91;font-weight:700">unplot x y</span>.  

---

## De făcut azi — „Floarea care se deschide”
Salvat: `Prenume_Nume_MB1_L02`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1** — floarea se deschide și miezul clipește, cu **8 blocuri diferite**, pe placă |
| **Complet (ținta orei)** | Minim + **Pasul 2** — floarea se închide, apare `8` și floarea ta, cu cel puțin **6 blocuri diferite** |

Dacă rămâi în urmă: **oprește-te la Minim** și salvează. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Floarea care se deschide *(Minim)*
<span style="color:#1E90FF;font-weight:700">on start</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">show string</span> `Floare`  

<span style="color:#1E90FF;font-weight:700">forever</span>  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `4000`  
&emsp;<span style="color:#1E90FF;font-weight:700">clear screen</span>  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `2` `2`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `2` `1`  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `1` `2`  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `3` `2`  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `2` `3`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `1` `1`  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `3` `1`  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `1` `3`  
&emsp;<span style="color:#5C2D91;font-weight:700">plot x y</span> `3` `3`  
&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `500`  
&emsp;<span style="color:#00A600;font-weight:700">repeat</span> `4` times  
&emsp;&emsp;<span style="color:#5C2D91;font-weight:700">toggle x y</span> `2` `2`  
&emsp;&emsp;<span style="color:#1E90FF;font-weight:700">pause (ms)</span> `200`

- [ ] Proiect nou cu numele `Prenume_Nume_MB1_L02`  
- [ ] Titlul `Floare` apare o singură dată, la început  
- [ ] Ai **8 blocuri diferite**: <span style="color:#1E90FF;font-weight:700">on start</span>, <span style="color:#1E90FF;font-weight:700">show string</span>, <span style="color:#1E90FF;font-weight:700">forever</span>, <span style="color:#1E90FF;font-weight:700">pause (ms)</span>, <span style="color:#1E90FF;font-weight:700">clear screen</span>, <span style="color:#5C2D91;font-weight:700">plot x y</span>, <span style="color:#00A600;font-weight:700">repeat</span>, <span style="color:#5C2D91;font-weight:700">toggle x y</span>  
- [ ] Programul e trimis pe placă (**Download**)  

**→ Ai Minim când:** pe placă floarea se deschide în trei timpi și miezul clipește, fără explicații.

### Pasul 2 — Floarea se închide *(Complet)*
- [ ] Cele 8 <span style="color:#5C2D91;font-weight:700">unplot x y</span> sting floarea în ordine inversă  
- [ ] <span style="color:#1E90FF;font-weight:700">show number</span> `8` apare după ce floarea s-a stins  
- [ ] <span style="color:#1E90FF;font-weight:700">show leds</span> arată floarea ta, desenată de tine, apoi <span style="color:#1E90FF;font-weight:700">show icon</span> `Heart`  
- [ ] Partea a doua are cel puțin 6 blocuri diferite  
- [ ] Salvat din nou: `Prenume_Nume_MB1_L02`  

**Gata Complet când:** floarea se deschide, clipește, se închide, apare `8`, apoi floarea ta și o inimă, iar totul se repetă.

---

## Bonus ★★★ — Provocare: Racheta care urcă
*Doar dacă ai terminat Complet.*

- [ ] Schimbă timpii: `200` pentru un ritm rapid, `800` pentru unul lent  
- [ ] **Provocarea:** faci o animație nouă din **cel puțin 5 cadre** cu <span style="color:#5C2D91;font-weight:700">plot x y</span> și <span style="color:#5C2D91;font-weight:700">unplot x y</span>: o **rachetă** care urcă de pe rândul 4 pe rândul 0, o minge care sare sau un ceas care bate. Ciclul durează cel puțin **10 secunde**. Arată placa unui coleg fără să spui nimic: ghicește ce e?  

## Recapitulare rapidă
1. Fiecare LED are o adresă: `x` = coloana, `y` = rândul, de la `0` la `4`  
2. <span style="color:#5C2D91;font-weight:700">plot x y</span> aprinde, <span style="color:#5C2D91;font-weight:700">unplot x y</span> stinge, <span style="color:#5C2D91;font-weight:700">toggle x y</span> schimbă  
3. <span style="color:#00A600;font-weight:700">repeat</span> repetă blocurile dinăuntru de câte ori alegi  
4. O animație = mai multe cadre + <span style="color:#1E90FF;font-weight:700">pause (ms)</span> între ele  
5. <span style="color:#1E90FF;font-weight:700">forever</span> începe cu o pauză, ca să nu se încurce cu <span style="color:#1E90FF;font-weight:700">on start</span>  
6. Minim = Pasul 1 · Complet = Pasul 1 + 2  

## Schema pe scurt *(pe foaie)*
<span style="color:#1E90FF;font-weight:700">on start</span>: <span style="color:#1E90FF;font-weight:700">show string</span>

<span style="color:#1E90FF;font-weight:700">forever</span>: <span style="color:#1E90FF;font-weight:700">pause (ms)</span> → <span style="color:#1E90FF;font-weight:700">clear screen</span> → <span style="color:#5C2D91;font-weight:700">plot x y</span> (miez, petale, colțuri) → <span style="color:#00A600;font-weight:700">repeat</span> <span style="color:#5C2D91;font-weight:700">toggle x y</span> → <span style="color:#5C2D91;font-weight:700">unplot x y</span> (colțuri, petale, miez) → <span style="color:#1E90FF;font-weight:700">show number</span> → <span style="color:#1E90FF;font-weight:700">show leds</span> → <span style="color:#1E90FF;font-weight:700">show icon</span>

**Quiz scurt (cu profesorul):**  
- Care e adresa LED-ului din mijloc?  
- Care e diferența dintre `x` și `y`?  
- Ce face <span style="color:#5C2D91;font-weight:700">toggle x y</span> de două ori la rând?  
- De ce pui <span style="color:#1E90FF;font-weight:700">pause (ms)</span> între cadre?  
- Ce face <span style="color:#00A600;font-weight:700">repeat</span> `4` times?  

## Temă (opțional)
- Dacă ai doar Minim: acasă, adaugi partea a doua (Pasul 2), în același `Prenume_Nume_MB1_L02`.  
- Dacă ai Complet: desenezi pe foaie o animație cu 4 cadre (un fluture, un ceas), cu coordonate, și o faci în MakeCode.  
- Dacă ai terminat și Bonusul: faci o copie a proiectului și schimbi povestea (altă formă, alți timpi).  

## Ce urmează
În **Lecția 3** placa **reacționează la butoanele A și B**: un comutator de emoții.
