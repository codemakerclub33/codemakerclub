# Lecția 9 — Căruciorul teleghidat (Sim Lab)
### Fizică, motor și blocuri în Tinkercad
**Modulul 5 · Avansat și proiectare tehnică**  
**Code Maker Club · Design Pro**

> Azi construiești în 3D un **cărucior** și îl pui în mișcare în **Sim Lab**:  
> caroserie + roți + axă cu motor + **controller** cu blocuri. Cu tasta **W** merge înainte, cu **S** înapoi.  
> Fișier: `Prenume_Nume_T5_L09` (ex. `Ana_Pop_T5_L09`)

---

## Obiectiv
La finalul orei construiești un obiect 3D care **se mișcă singur**, comandat prin cod.  
**Minim:** căruciorul merge **înainte** la W, **înapoi** la S și se **oprește** când eliberezi tasta, cu **cel puțin 8 piese și blocuri diferite**.  
**Ținta orei (Complet):** partea a doua: un **senzor de distanță** oprește căruciorul singur înainte să atingă un zid, cu cel puțin **6 piese și blocuri diferite**.

## De ce contează
Roboții, mașinile fără șofer și liftul din clădire au același început: un **corp**, un **motor**, un **senzor** și un **program**. Azi le pui pe toate într-un singur model.  
Sim Lab îți arată ce face modelul tău **înainte să-l construiești în realitate**: dacă nu merge pe ecran, nu va merge nici pe masă.

**Notă:** azi nu folosești imprimanta 3D. Sim Lab e în browser și nu e același lucru cu Circuits: aici nu sunt baterie, rezistor sau LED, ci **fizică** (gravitație, frecare) și **blocuri** pentru motoare și senzori.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Sim Lab: ce e, piesele din bara din dreapta |
| 15–40 | Caroseria și roțile în 3D |
| 40–60 | Axele și motorul (**Axle connector**) |
| 60–85 | Controllerul și blocurile (**Minim**) |
| 85–110 | **Complet:** senzorul de distanță |
| 110–120 | Recap, bonus, arăți ce ai gata |

**Unelte azi:** calculator cu mouse · browser Chrome sau Edge · cont Tinkercad (de la școală) · [tinkercad.com](https://www.tinkercad.com)

**Grupe azi:** <span style="color:#1E90FF;font-weight:700">Forme 3D</span> · <span style="color:#2E9E4F;font-weight:700">Piese Sim Lab</span> · <span style="color:#F28C28;font-weight:700">Control</span> · <span style="color:#2F80ED;font-weight:700">Output</span> · <span style="color:#8E4DF0;font-weight:700">Input</span>  
*(piesele Sim Lab sunt în bara din dreapta; blocurile au culorile din editorul de blocuri.)*

**Piesele Sim Lab (bara din dreapta, de sus în jos):**

| Piesă | Ce face |
|-------|---------|
| <span style="color:#2E9E4F;font-weight:700">Axle connector</span> | o **axă**: roata se învârte în jurul ei (aici avem și **motor**) |
| <span style="color:#2E9E4F;font-weight:700">Slider connector</span> | o piesă care **glisează** între două limite |
| <span style="color:#2E9E4F;font-weight:700">Pivot connector</span> | o **articulație** care se poate înclina |
| <span style="color:#2E9E4F;font-weight:700">Tracer</span> | lasă o **urmă** colorată pe unde trece piesa |
| <span style="color:#2E9E4F;font-weight:700">Controller</span> | **creierul**: rulează blocurile tale |
| <span style="color:#2E9E4F;font-weight:700">Field Sensor</span> | **senzor** de distanță |
| <span style="color:#2E9E4F;font-weight:700">IMU sensor</span> | senzor de înclinare și accelerație |

**Blocurile de azi:**

| Bloc | Ce face |
|------|---------|
| <span style="color:#F28C28;font-weight:700">on key press</span> | ce e înăuntru rulează când apeși o tastă |
| <span style="color:#F28C28;font-weight:700">on key release</span> | ce e înăuntru rulează când **eliberezi** tasta |
| <span style="color:#2F80ED;font-weight:700">set target speed</span> | spune motorului **cât de repede** să meargă (valoare negativă = înapoi) |
| <span style="color:#8E4DF0;font-weight:700">distance</span> | cât de departe e cel mai apropiat obiect, văzut de senzor |
| <span style="color:#F28C28;font-weight:700">forever</span> | se repetă la nesfârșit |
| <span style="color:#F28C28;font-weight:700">if … do</span> | face ceva doar dacă o condiție e adevărată |
| <span style="color:#F28C28;font-weight:700">0 < 0</span> | compară două numere |

---

## Pas cu pas

### 1) Cunoaștem Sim Lab
1. Deschizi proiectul `Prenume_Nume_T5_L09`  
2. Sus, lângă numele proiectului, e comutatorul **3D** / **Sim Lab**. Apeși **Sim Lab**: planul devine o **placă groasă**, cu **gravitație**  
3. În dreapta apare o bară cu **7 piese** (tabelul de mai sus). Treci cu mouse-ul peste fiecare ca să vezi numele  
4. Jos, în stânga, e butonul **Play** (▶). Îl apeși ca să pornești simularea  
5. Apeși pe plan: în dreapta vezi **Ground**: **Gravity** (Lună, Marte, Pământ, Jupiter) și **Simulation Scale**  
6. Te întorci pe **3D**  

**Încearcă tu — Sim Lab (8–10 min)**  
- [ ] Ai apăsat **Sim Lab** și apoi ai revenit pe **3D**  
- [ ] Spui numele a **4 piese** din bara din dreapta  
- [ ] Ai schimbat **Gravity** pe Lună și ai apăsat Play (obiectele cad mai încet)  

### 2) Caroseria și roțile
Lucrezi în **3D**.
1. <span style="color:#1E90FF;font-weight:700">Box</span> → **`60 × 30 × 10`**: caroseria  
2. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **`14 × 14 × 4`**, rotit **90°** (cu săgeata curbă), ca să arate ca o roată: prima roată  
3. O lipești lângă caroserie, pe o latură lungă, ca roata să atingă solul  
4. <span style="color:#DC143C;font-weight:700">Ctrl+D</span>: a doua roată, de partea **opusă**  
5. Colorezi caroseria și roțile diferit (<span style="color:#00A600;font-weight:700">Color</span>)  

**Încearcă tu — corpul (15–20 min)**  
- [ ] Caroseria are **`60 × 30 × 10`**  
- [ ] Ai **2 roți** egale, una de fiecare parte  
- [ ] Caroseria și roțile au culori **diferite**  

### 3) Axele și motorul
1. Din bara din dreapta, tragi un <span style="color:#2E9E4F;font-weight:700">Axle connector</span>  
2. **Tragi conectorul peste roată și peste caroserie**: așa îi spui că roata se învârte în jurul axei  
3. Faci la fel pentru **a doua roată**  
4. Selectezi unul dintre conectori. În fereastra lui, la **Motor Type**, alegi **Stepper** (motorul). Setezi **Max Speed (RPM)** la **`400`**  
5. Celălalt conector rămâne fără motor: roata lui se învârte **liberă**  

> Când un conector e legat de un controller, fereastra lui spune: **„Interaction is now managed by a controller”**: viteza o dai din blocuri, nu de mână.

**Încearcă tu — axele (15–20 min)**  
- [ ] Ambii conectori sunt între roată și caroserie  
- [ ] Un conector are **Motor Type: Stepper**, **Max Speed `400`**  
- [ ] Celălalt conector rămâne fără motor  

### 4) Controllerul și blocurile (Minim)
1. Tragi un <span style="color:#2E9E4F;font-weight:700">Controller</span> **peste caroserie**  
2. Îl selectezi: în fereastra lui, la **Connected peripherals**, vezi **Stepper 1** (motorul tău) și **Encoder 1**  
3. Apeși **Edit code**: se deschide editorul de blocuri, cu <span style="color:#F28C28;font-weight:700">on start</span> și <span style="color:#F28C28;font-weight:700">forever</span> deja puse  
4. Faci **patru** grupuri de blocuri:  

<span style="color:#F28C28;font-weight:700">on key press</span> `w`  
&emsp;<span style="color:#2F80ED;font-weight:700">set target speed</span> `Stepper 1` to `400`  

<span style="color:#F28C28;font-weight:700">on key release</span> `w`  
&emsp;<span style="color:#2F80ED;font-weight:700">set target speed</span> `Stepper 1` to `0`  

<span style="color:#F28C28;font-weight:700">on key press</span> `s`  
&emsp;<span style="color:#2F80ED;font-weight:700">set target speed</span> `Stepper 1` to `-400`  

<span style="color:#F28C28;font-weight:700">on key release</span> `s`  
&emsp;<span style="color:#2F80ED;font-weight:700">set target speed</span> `Stepper 1` to `0`  

5. Apeși **Back to 3D design**, apoi **Sim Lab** și **Play**  
6. Apeși **W**: căruciorul merge înainte. Apeși **S**: merge înapoi  

**Încearcă tu — codul (20–25 min)**  
- [ ] La **W** căruciorul merge înainte  
- [ ] La **S** merge înapoi  
- [ ] Când eliberezi tasta, **se oprește**  

### 5) Complet: senzorul de distanță
Vrem ca căruciorul să se oprească **singur** înainte de un zid.
1. În 3D pui un <span style="color:#1E90FF;font-weight:700">Box</span> ca **zid** (de exemplu `60 × 4 × 20`), la câțiva centimetri în fața căruciorului  
2. Tragi un <span style="color:#2E9E4F;font-weight:700">Field Sensor</span> peste caroserie, în **față**, cu fața spre zid (**Sensor Type: Distance**)  
3. În editorul de blocuri, la <span style="color:#F28C28;font-weight:700">forever</span> pui un <span style="color:#F28C28;font-weight:700">if … do</span>  
4. Condiția: <span style="color:#8E4DF0;font-weight:700">distance</span> (alegi senzorul tău) <span style="color:#F28C28;font-weight:700">0 < 0</span> `100`  
5. În <span style="color:#F28C28;font-weight:700">if</span>: <span style="color:#2F80ED;font-weight:700">set target speed</span> `Stepper 1` to `0`  
6. Dacă `100` e prea mult sau prea puțin, schimbi numărul după cum se comportă  

<span style="color:#F28C28;font-weight:700">forever</span>  
&emsp;<span style="color:#F28C28;font-weight:700">if</span> <span style="color:#8E4DF0;font-weight:700">distance</span> `<` `100` <span style="color:#F28C28;font-weight:700">do</span>  
&emsp;&emsp;<span style="color:#2F80ED;font-weight:700">set target speed</span> `Stepper 1` to `0`  

**Încearcă tu — oprirea (20–25 min)**  
- [ ] Pornești cu W spre zid  
- [ ] Căruciorul se oprește **singur**, **fără** să atingă zidul  
- [ ] Partea a doua are cel puțin 6 piese și blocuri diferite  

---

## Greșeli frecvente
1. **Căruciorul nu se mișcă** — conectorul nu are **Motor Type: Stepper**, sau nu ai apăsat **Play**.  
2. **Roțile cad sau se rup de caroserie** — conectorul nu e tras **și** peste roată, **și** peste caroserie.  
3. **La W merge înapoi** — viteza are semnul greșit: înainte e `400`, înapoi e `-400`.  
4. **Nu se oprește la eliberare** — lipsește <span style="color:#F28C28;font-weight:700">on key release</span> cu viteza `0`.  
5. **Controllerul nu vede motorul** — conectorul nu e **peste** caroserie, sau controllerul nu e peste ea.  
6. **Apeși W și nu se întâmplă nimic** — nu ești în **Sim Lab** cu Play pornit.  
7. **Se oprește mereu** — pragul din <span style="color:#F28C28;font-weight:700">if</span> e prea mare pentru distanța ta.  
8. **Ai ales Circuits** — pentru această lecție nu e nevoie de el.  

---

## De făcut azi — „Căruciorul teleghidat”
Salvat: `Prenume_Nume_T5_L09`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1** — W înainte, S înapoi, oprire la eliberare, cu **cel puțin 8 piese și blocuri diferite**, în Sim Lab |
| **Complet (ținta orei)** | Minim + **Pasul 2** — senzor de distanță care oprește căruciorul înaintea zidului, cu cel puțin **6 piese și blocuri diferite** |

Dacă rămâi în urmă: **oprește-te la Minim** și salvează. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Căruciorul *(Minim)*
- [ ] Proiect nou cu numele `Prenume_Nume_T5_L09`  
- [ ] Caroseria `60 × 30 × 10` și 2 roți  
- [ ] 2 conectori între roți și caroserie; unul cu **Motor Type: Stepper**  
- [ ] Controller peste caroserie, cu patru grupuri de blocuri (W, S și eliberările)  
- [ ] Ai folosit cel puțin **8 piese și blocuri diferite**: <span style="color:#1E90FF;font-weight:700">Box</span>, <span style="color:#1E90FF;font-weight:700">Cylinder</span>, <span style="color:#2E9E4F;font-weight:700">Axle connector</span>, <span style="color:#2E9E4F;font-weight:700">Controller</span>, <span style="color:#F28C28;font-weight:700">on key press</span>, <span style="color:#F28C28;font-weight:700">on key release</span>, <span style="color:#2F80ED;font-weight:700">set target speed</span>, <span style="color:#00A600;font-weight:700">Color</span>, <span style="color:#DC143C;font-weight:700">Ctrl+D</span>, rotirea cu săgeata curbă  

**→ Ai Minim când:** un coleg apasă W și S și căruciorul merge înainte și înapoi, apoi se oprește.

### Pasul 2 — Senzorul *(Complet)*
- [ ] Zid din Box în fața căruciorului  
- [ ] <span style="color:#2E9E4F;font-weight:700">Field Sensor</span> în față, pe caroserie  
- [ ] <span style="color:#F28C28;font-weight:700">if</span> <span style="color:#8E4DF0;font-weight:700">distance</span> `< 100` → viteza `0`  
- [ ] Căruciorul se oprește fără să atingă zidul  
- [ ] Partea a doua are cel puțin **6 piese și blocuri diferite**: <span style="color:#1E90FF;font-weight:700">Box</span>, <span style="color:#2E9E4F;font-weight:700">Field Sensor</span>, <span style="color:#F28C28;font-weight:700">forever</span>, <span style="color:#F28C28;font-weight:700">if … do</span>, <span style="color:#8E4DF0;font-weight:700">distance</span>, <span style="color:#2F80ED;font-weight:700">set target speed</span>  
- [ ] Salvat din nou: `Prenume_Nume_T5_L09`  

**Gata Complet când:** pornești cu W spre zid, iar căruciorul se oprește singur, înainte să-l atingă.

---

## Bonus ★★★ — Provocare: Traseul cu țintă
*Doar dacă ai terminat Complet.*

- [ ] Schimbă pragul din `100` și vezi cum se oprește mai devreme sau mai târziu  
- [ ] **Provocarea:** pui un <span style="color:#1E90FF;font-weight:700">Box</span> **țintă** la o distanță aleasă de tine și ajungi la ea cu căruciorul în **cel mult `20` de secunde**, apoi se oprește **fără să atingă** ținta. Un coleg măsoară timpul cu telefonul. Apoi schimbi **Gravity** pe Lună și vezi dacă programul merge la fel.  

## Recapitulare rapidă
1. **Sim Lab** arată fizica modelului, înainte să-l construiești  
2. <span style="color:#2E9E4F;font-weight:700">Axle connector</span> + **Motor Type: Stepper** = roată cu motor  
3. <span style="color:#2E9E4F;font-weight:700">Controller</span> rulează blocurile, iar <span style="color:#2F80ED;font-weight:700">set target speed</span> dă viteza motorului  
4. Viteza **pozitivă** merge înainte, cea **negativă** înapoi, `0` oprește  
5. <span style="color:#2E9E4F;font-weight:700">Field Sensor</span> + <span style="color:#8E4DF0;font-weight:700">distance</span> + <span style="color:#F28C28;font-weight:700">if</span> = oprire automată  
6. Minim = Pasul 1 · Complet = Pasul 1 + 2  

## Schema pe scurt *(pe foaie)*
Box + 2 cilindri + <span style="color:#2E9E4F;font-weight:700">Axle connector</span> (Stepper) + <span style="color:#2E9E4F;font-weight:700">Controller</span>  
W → viteză `400` · S → viteză `-400` · eliberare → `0`  
<span style="color:#2E9E4F;font-weight:700">Field Sensor</span>: distanță `< 100` → viteză `0`

**Quiz scurt (cu profesorul):**  
- Ce diferență e între 3D și Sim Lab?  
- Ce face Motor Type: Stepper?  
- De ce avem nevoie de on key release?  
- Ce numere dau mersul înainte și înapoi?  
- Cum oprește senzorul căruciorul?  

## Temă (opțional)
- Dacă ai doar Minim: acasă adaugi senzorul și zidul (Pasul 2), în același `Prenume_Nume_T5_L09`.  
- Dacă ai Complet: desenezi pe foaie un robot cu **alt senzor** (de exemplu IMU sensor) și scrii ce ar face.  
- Dacă ai terminat și Bonusul: faci o copie și o încerci pe **Marte**, apoi pe **Jupiter**.  

## Ce urmează
În **Lecția 10** îți alegi o idee și faci un **produs complet**, de la schiță la prezentare.
