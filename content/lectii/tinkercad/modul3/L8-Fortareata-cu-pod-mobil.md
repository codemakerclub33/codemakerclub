# Lecția 8 — Fortăreața cu pod mobil
### Balamale pe axe, cu joc: un pod și o poartă cu 2 canaturi
**Modulul 3 · Creativ și mecanic**  
**Code Maker Club · Motion Maker**  

> Azi faci **două piese care se pot mișca pe o axă**, cu joc: un **pod** care se rotește pe un ax orizontal, la poarta unei fortărețe, și o **poartă cu 2 canaturi**, care se rotesc pe axe verticale.  
> Proiect: **„Fortăreața mea”**  
> Fișier: `Prenume_Nume_T3_L08` (obiectul 1) și `Prenume_Nume_T3_L08_B` (obiectul 2)

---

## Obiectiv
La finalul orei ai **două obiecte cu balamale**: **Fortăreața cu pod** și **Poarta cu 2 canaturi**.  
**Minim:** **Obiectul 1:** fortăreața (placă `120 × 70 × 4`, zid `80 × 8 × 30` cu poartă `20 × 12 × 22`, 2 turnuri `Ø20 × 40`, ax `Ø4 × 24`, pod `18 × 24 × 2` cu butuc `Ø10` și gaură `Ø5`) și **Obiectul 2:** poarta (placă `80 × 30 × 4`, 2 stâlpi `12 × 12 × 36`, 2 axe `Ø4 × 30`, 2 canaturi `19 × 3 × 24` cu butuc `Ø8` și gaură `Ø5`), cu podul și canaturile **separate** de axe și **cel puțin 8 unelte diferite**.  
**Ținta orei (Complet):** a doua parte: **3 creneluri** în zidul fortăreței, jocul măsurat cu <span style="color:#E65722;font-weight:700">Ruler</span> și culori, cu cel puțin **6 unelte diferite**.

## De ce contează
O balama are două părți: **axul** (fix) și **butucul** cu gaură (care se rotește). Ca butucul să se învârtă, gaura e **puțin mai mare** decât axul: `5` față de `4`, adică joc de `0,5` mm pe parte. Dacă gaura ar avea `4`, butucul ar rămâne blocat.  
Același principiu stă în spatele podului la poarta unui castel și al porților cu două canaturi.

**Notă:** imprimanta 3D **nu** e folosită la oră — doar design. În Tinkercad piesele nu se mișcă; vezi că **ar avea loc** să se miște.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L7 · privim o poartă cu canaturi și un pod mobil: pe ce se rotesc? |
| 10–50 | **Obiectul 1** — Fortăreața cu pod (Minim) |
| 50–85 | **Obiectul 2** — Poarta cu 2 canaturi (Minim) |
| 85–110 | **Complet** pe primul obiect |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme sau ca temă |

**Grupe de unelte azi:**  
<span style="color:#1E90FF;font-weight:700">Forme</span> · <span style="color:#D400D4;font-weight:700">Vedere</span> · <span style="color:#E65722;font-weight:700">Mărime și loc</span> · <span style="color:#00A600;font-weight:700">Culoare</span> · <span style="color:#DC143C;font-weight:700">Taste de editare</span>  
*(culorile ajută să știi **ce fel de unealtă** e: o formă, o mișcare a camerei, o schimbare de mărime, culoarea sau o tastă.)*

**Uneltele de azi:**

| Unealtă | Ce face |
|---------|---------|
| <span style="color:#E65722;font-weight:700">Align (L)</span> | aliniază piese pe puncte, la fiecare direcție |
| <span style="color:#E65722;font-weight:700">rotire</span> | culcă axul și butucul (`90°`) sau întoarce un canat (`180°`) |
| <span style="color:#00A600;font-weight:700">Hole</span> | poarta din zid, gaura butucului și crenelurile |
| <span style="color:#DC143C;font-weight:700">Ctrl+D</span> | copie, apoi aceeași mutare repetată |
| <span style="color:#E65722;font-weight:700">săgețile de la tastatură</span> | mută piesa cu `1` sau `5` mm |
| <span style="color:#E65722;font-weight:700">conul negru</span> | ridică piesa cu un număr exact de milimetri |
| <span style="color:#DC143C;font-weight:700">Ctrl+G</span> și <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span> | Group și Ungroup (grup temporar, ca să centrezi) |
| <span style="color:#D400D4;font-weight:700">View Cube</span> | Right, Top și Front: verifici axul și podul |
| <span style="color:#E65722;font-weight:700">Ruler</span> | măsoară gaura butucului față de ax |

Celelalte unelte (formele de bază, <span style="color:#00A600;font-weight:700">Color</span>, <span style="color:#DC143C;font-weight:700">Ctrl+Z</span>) le știi din lecțiile trecute.

---

## Pas cu pas

**Obiectul 1 — Fortăreața cu pod**

### 1) Proiect nou, placa și zidul cu poartă
1. **Create new design** · nume `Prenume_Nume_T3_L08`. <span style="color:#E65722;font-weight:700">Snap Grid</span>: **1.0 mm**  
2. <span style="color:#1E90FF;font-weight:700">Box</span> → **120 · 70 · 4** *(placa)*  
3. <span style="color:#1E90FF;font-weight:700">Box</span> → **80 · 8 · 30** *(zidul)*. <span style="color:#1E90FF;font-weight:700">Box</span> → **20 · 12 · 22** → <span style="color:#00A600;font-weight:700">Hole</span> *(poarta)*  
4. Selectezi poarta și zidul → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele două direcții de pe plan și punctul de **jos**  
5. <span style="color:#DC143C;font-weight:700">Ctrl+G</span>: zid cu deschidere (poarta e mai groasă decât zidul, deci taie complet)  

**Încearcă tu — Proiect nou, placa și zidul cu poartă (8 min)**  
- [ ] Placa are **120 · 70 · 4**  
- [ ] Zidul (**80 · 8 · 30**) are poarta (**20 · 12 · 22**, Hole) tăiată complet  

### 2) Turnurile și fortul pe placă
1. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **20 · 20 · 40**. Selectezi turnul și zidul → <span style="color:#E65722;font-weight:700">L</span> → marginea din **stânga** și mijloc pe adâncime  
2. <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → copia; selectezi copia și zidul → <span style="color:#E65722;font-weight:700">L</span> → marginea din **dreapta**  
3. Selectezi zidul și cele două turnuri → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>: fortul  
4. Fortul → îl tragi **peste** placă → selectezi fortul și placa → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele două direcții de pe plan → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>: fortăreață cu podea (placa se vede prin poartă)  

**Încearcă tu — Turnurile și fortul pe placă (6 min)**  
- [ ] Turnurile (**20 · 20 · 40**) sunt la **stânga** și la **dreapta** zidului  
- [ ] Fortul stă centrat pe placă; placa se vede prin poartă  

### 3) Axul, butucul și podul (facem balamaua lângă fort)
*Atenție la <span style="color:#E65722;font-weight:700">Align</span>: mută **ambele** piese spre mijlocul lor. De aceea facem balamaua întâi separat, o grupăm temporar și abia apoi o aducem la poartă.*

1. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **4 · 4 · 24** *(axul)* → îl rotești **90°** (`4` pași de 22,5°) până când, din <span style="color:#D400D4;font-weight:700">View Cube</span> → <span style="color:#D400D4;font-weight:700">Right</span>, se vede ca un **cerc**  
2. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **10 · 10 · 18** *(butucul)*, rotit **90°** la fel. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **5 · 5 · 22** → <span style="color:#00A600;font-weight:700">Hole</span>, rotit la fel  
3. Tragi butucul și gaura **peste** ax; selectezi **butucul, gaura și axul** → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele **trei** direcții — toate trei au același centru  
4. Selectezi **doar butucul și gaura** → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>: butuc cu gaură. Axul rămâne separat și trece prin gaură, cu **0,5 mm** joc pe parte *(gaura `5`, axul `4`)*  
5. Selectezi **butucul și axul** → <span style="color:#DC143C;font-weight:700">Ctrl+G</span> *(temporar)* → <span style="color:#E65722;font-weight:700">D</span> (stau pe plan)  
6. <span style="color:#1E90FF;font-weight:700">Box</span> → **18 · 24 · 2** *(podul)* → îl tragi **în fața** butucului. Selectezi podul și grupul temporar → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe direcția stânga–dreapta, punctul de **jos** și punctul din **spate**: podul pornește de la butuc și iese **în față**  
7. Selectezi grupul temporar → <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span> (butucul și axul sunt din nou separate). Selectezi **podul și butucul** → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>: podul cu balama *(axul nu e în el)*. Podul (`2` mm) stă mai jos decât gaura (care începe la `2,5` mm de jos), deci nu atinge axul  

**Încearcă tu — Axul, butucul și podul (14 min)**  
- [ ] Axul (**4 · 4 · 24**) trece prin butuc (**10 · 10 · 18**), prin gaura de **5 mm**  
- [ ] Podul (**18 · 24 · 2**) e grupat cu butucul, fără ax, și nu atinge axul  

### 4) Balamaua pe poartă și verificarea
1. Selectezi **axul** și **podul cu balama** → <span style="color:#DC143C;font-weight:700">Ctrl+G</span> *(temporar)* → îl tragi **peste** fortăreață. Selectezi grupul temporar și fortăreața → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe direcția stânga–dreapta și pe adâncime  
2. <span style="color:#E65722;font-weight:700">Snap Grid</span> **1.0** → grupul temporar îl muți **7 mm** spre față *(podul iese în față, deci centrul grupului nu e pe ax: mutarea pune axul în mijlocul porții)*  
3. Îl ridici cu <span style="color:#E65722;font-weight:700">conul negru</span> cu **4 mm**: podul stă pe podeaua porții, axul e la **9 mm** de plan  
4. <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span> pe grupul temporar: ax și pod sunt din nou separate  
5. <span style="color:#D400D4;font-weight:700">Right</span>: axul (cerc mic) în gaura butucului. <span style="color:#D400D4;font-weight:700">Top</span>: axul trece prin poartă, cu `2` mm în fiecare perete lateral; podul stă în dreptul porții  
6. Selectezi **axul** și fortăreața → <span style="color:#DC143C;font-weight:700">Ctrl+G</span> *(axul se prinde de ea)*. Click pe pod: se selectează singur — e **separat**  

**Încearcă tu — Balamaua pe poartă și verificarea (12 min)**  
- [ ] Axul e la **9 mm** de plan, iar podul stă pe podeaua porții  
- [ ] Axul e prins de fortăreață, iar podul rămâne **separat**  

**Obiectul 2 — Poarta cu 2 canaturi**

### 5) Poarta cu 2 canaturi: proiect nou, placa și stâlpii
1. Dai **Create new design** și scrii numele `Prenume_Nume_T3_L08_B`. <span style="color:#E65722;font-weight:700">Snap Grid</span>: **1.0 mm**.  
2. <span style="color:#1E90FF;font-weight:700">Box</span> → **80 · 30 · 4** *(placa)*. <span style="color:#1E90FF;font-weight:700">Box</span> → **12 · 12 · 36** *(stâlpul)* → îl tragi **peste** placă → <span style="color:#E65722;font-weight:700">L</span> cu placa: punctul din **stânga** și mijloc pe față–spate  
3. <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → copia → <span style="color:#E65722;font-weight:700">L</span> cu placa: punctul din **dreapta**. Cei 2 stâlpi sunt la capetele plăcii, cu `56` mm între ei  
4. Selectezi placa și cei 2 stâlpi → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  

**Încearcă tu — Poarta cu 2 canaturi: proiect nou, placa și stâlpii (10 min)**  
- [ ] Placa are **80 · 30 · 4**, iar cei 2 stâlpi (**12 · 12 · 36**) sunt la capete  
- [ ] Placa și stâlpii sunt grupate  

### 6) Axul și canatul din stânga
1. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **4 · 4 · 30** *(axul, vertical)* → îl tragi **peste** placă → <span style="color:#E65722;font-weight:700">L</span> cu placa: mijloc pe cele două direcții de pe plan. Apoi <span style="color:#E65722;font-weight:700">Snap Grid</span> **5.0** → îl muți **20 mm** spre stânga (`4` apăsări): axul e la `20` mm de centru  
2. <span style="color:#E65722;font-weight:700">Snap Grid</span> **1.0**. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **8 · 8 · 24** *(butucul)* și <span style="color:#1E90FF;font-weight:700">Box</span> → **19 · 3 · 24** *(canatul)*. Selectezi butucul și canatul → <span style="color:#E65722;font-weight:700">L</span> → punctul din **stânga** pe stânga–dreapta, mijloc pe față–spate și punctul de **jos**  
3. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **5 · 5 · 24** → <span style="color:#00A600;font-weight:700">Hole</span> → cu **butucul** → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele **trei** direcții. Selectezi **butucul, gaura și canatul** → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>: canatul cu butuc  
4. Canatul → îl tragi **peste** placă → selectezi canatul și placa → <span style="color:#E65722;font-weight:700">L</span> → punctul din **stânga** pe stânga–dreapta și mijloc pe față–spate. Apoi <span style="color:#E65722;font-weight:700">Snap Grid</span> **1.0** → îl muți **16 mm** spre dreapta (`16` apăsări): butucul e peste ax  
5. Îl ridici cu conul negru cu **4 mm**: canatul stă pe placă, iar axul trece prin gaura butucului, cu `0,5` mm joc pe parte  

**Încearcă tu — Axul și canatul din stânga (14 min)**  
- [ ] Axul (**4 · 4 · 30**) e la **20 mm** de centru, în stânga  
- [ ] Butucul (**8 · 8 · 24**, gaura **5 mm**) e peste ax, iar canatul (**19 · 3 · 24**) se întinde spre mijloc  

### 7) Canatul din dreapta și verificarea
1. Selectezi **axul** și apoi <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → <span style="color:#E65722;font-weight:700">Snap Grid</span> **5.0** → muți copia **40 mm** spre dreapta (`8` apăsări): axul din dreapta, la `20` mm de centru  
2. Selectezi **canatul** → <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → îl rotești **180°** (`8` pași de 22,5°, pe loc) → îl muți **25 mm** spre dreapta (`5` apăsări): butucul e peste axul din dreapta, iar canatul se întinde spre mijloc  
3. <span style="color:#D400D4;font-weight:700">Top</span>: cele 2 canaturi se opresc la `2` mm unul de altul, în mijloc. <span style="color:#D400D4;font-weight:700">Front</span>: canaturile stau între stâlpi  
4. Selectezi placa cu stâlpii și cele **2 axe** (Shift+click) → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>: axele se prind de placă. Canaturile rămân **separate**  

**Încearcă tu — Canatul din dreapta și verificarea (12 min)**  
- [ ] Axul din dreapta e la **20 mm** de centru, iar canatul e rotit **180°**, cu butucul peste ax  
- [ ] Din Top, canaturile au `2` mm între ele; axele sunt prinse de placă, iar canaturile sunt separate  

**Complet**

### 8) Complet — creneluri, Ruler, culori
*Deschizi din nou proiectul `Prenume_Nume_T3_L08` din lista **Designs**.*

1. <span style="color:#1E90FF;font-weight:700">Box</span> → **6 · 12 · 8** → <span style="color:#00A600;font-weight:700">Hole</span> → <span style="color:#E65722;font-weight:700">L</span> cu fortăreața: mijloc pe cele două direcții (zidul e în mijlocul plăcii) → <span style="color:#E65722;font-weight:700">Snap Grid</span> **5.0** → ridici cu conul negru la **25 mm**  
2. <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → muți copia **10 mm** spre dreapta. Selectezi crenelul din centru → <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → muți copia **10 mm** spre stânga  
3. Selectezi cele 3 creneluri și fortăreața → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  
4. <span style="color:#E65722;font-weight:700">Ruler</span>: gaura butucului (`5` mm) față de ax (`4` mm)  
5. <span style="color:#00A600;font-weight:700">Color</span>: zid, turnuri, pod în culori diferite  

**Încearcă tu — Complet — creneluri, Ruler, culori (25 min)**  
- [ ] Ai **3** creneluri, la **10 mm** unul de altul  
- [ ] Cu Ruler: gaura **5 mm**, axul **4 mm**  
- [ ] Zidul, turnurile și podul au culori diferite  

---

## Greșeli frecvente
1. **Podul e lipit de ax** — ai dat Group cu axul. Axul rămâne separat de butuc și de pod.  
2. **Axul nu trece prin butuc** — gaura nu e Hole, sau nu e centrată pe cele trei direcții.  
3. **Butucul nu se poate roti** — gaura are `4`, la fel ca axul. Trebuie `5`.  
4. **Poarta nu e tăiată** — Hole-ul `20 · 12 · 22` e mai subțire decât zidul sau nu ai dat <span style="color:#DC143C;font-weight:700">Ctrl+G</span>.  
5. **Podul nu stă pe podeaua porții** — după mutarea de `7` mm nu ai ridicat grupul cu `4` mm.  
6. **Am grupat tot** — <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span> și refaci: axul prins de fortăreață, podul separat.  
7. **Cele 2 canaturi se ating** — la canatul din dreapta nu ai mutat cu `25` mm, sau ai folosit alt unghi de rotire. Între canaturi trebuie `2` mm.  
8. **Canatul din dreapta se întinde spre exterior** — nu l-ai rotit cu `180°` înainte de mutare.  
9. **Canaturile s-au prins de ax** — ai selectat și canaturile la <span style="color:#DC143C;font-weight:700">Ctrl+G</span>. Axele se prind doar de placă.  

---

## De făcut azi — „Fortăreața mea”

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pașii 1–4** — fortăreața (placă `120 × 70 × 4`, zid cu poartă, 2 turnuri, ax `Ø4 × 24`, pod `18 × 24 × 2` cu butuc `Ø10`, gaură `Ø5`) **și** pașii 5–7 — poarta cu 2 canaturi (placă `80 × 30 × 4`, 2 stâlpi, 2 axe `Ø4 × 30`, 2 canaturi `19 × 3 × 24` cu butuc `Ø8`, gaură `Ø5`), cu podul și canaturile separate, cu **cel puțin 8 unelte diferite** |
| **Complet (ținta orei)** | Minim + **Pasul 3** — 3 creneluri, `Ruler`, culori, cu cel puțin **6 unelte diferite** |

Dacă rămâi în urmă: **oprește-te la Minim**. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Obiectul 1: Fortăreața cu pod *(Minim)*
- [ ] Placă **120 · 70 · 4**, zid **80 · 8 · 30** cu poartă **20 · 12 · 22**, 2 turnuri **20 · 20 · 40**  
- [ ] Ax **4 · 4 · 24** prin butuc **10 · 10 · 18** cu gaură **5**, axul la `9` mm de plan  
- [ ] Pod **18 · 24 · 2** grupat cu butucul, separat de ax  

### Pasul 2 — Obiectul 2: Poarta cu 2 canaturi *(Minim)*
- [ ] Placă **80 · 30 · 4** cu 2 stâlpi **12 · 12 · 36**, la capete  
- [ ] 2 axe **4 · 4 · 30**, la `20` mm de centru, prinse de placă  
- [ ] 2 canaturi **19 · 3 · 24** cu butuc **8 · 8 · 24** și gaură **5**, cu `2` mm între ele  
- [ ] Ai folosit cel puțin **8 unelte diferite** (la ambele obiecte): <span style="color:#1E90FF;font-weight:700">Cylinder</span>, <span style="color:#1E90FF;font-weight:700">Box</span>, <span style="color:#00A600;font-weight:700">Hole</span>, <span style="color:#E65722;font-weight:700">Align (L)</span>, <span style="color:#DC143C;font-weight:700">Ctrl+D</span>, <span style="color:#E65722;font-weight:700">rotire</span>, <span style="color:#E65722;font-weight:700">conul negru</span>, <span style="color:#DC143C;font-weight:700">Ctrl+G</span>, <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span>, <span style="color:#D400D4;font-weight:700">View Cube</span>  

**→ Ai Minim când:** la ambele obiecte, axele trec prin butuc cu joc, iar podul și canaturile ar avea loc să se miște, fără să atingă axul.

### Pasul 3 — Complet
- [ ] **3** creneluri **6 · 12 · 8**, la `10` mm unul de altul, ridicate la `25`  
- [ ] <span style="color:#E65722;font-weight:700">Ruler</span>: gaura **5 mm**, axul **4 mm**  
- [ ] <span style="color:#00A600;font-weight:700">Color</span> · numele `T3_L08` e corect  
- [ ] Partea a doua are cel puțin **6 unelte diferite**: <span style="color:#1E90FF;font-weight:700">Box</span>, <span style="color:#00A600;font-weight:700">Hole</span>, <span style="color:#E65722;font-weight:700">Align (L)</span>, <span style="color:#DC143C;font-weight:700">Ctrl+D</span>, <span style="color:#E65722;font-weight:700">Ruler</span>, <span style="color:#00A600;font-weight:700">Color</span>  

**Gata Complet când:** zidul are 3 creneluri egale, jocul e verificat cu Ruler, iar piesele au culori diferite.

---

## Bonus ★★★ — Provocare: Fortăreață cu șanț și pod ridicat
*Doar dacă ai terminat Complet.*

- [ ] Schimbă culorile și adaugă un text cu numele tău pe zid  
- [ ] **Provocarea (obiect mai complicat):** în proiectul `Prenume_Nume_T3_L08`, un **șanț** în fața porții: <span style="color:#1E90FF;font-weight:700">Box</span> `40 · 10 · 4` → <span style="color:#00A600;font-weight:700">Hole</span>, centrat pe poartă, cu marginea dinspre zid la `2` mm de fața zidului (centrul șanțului la `11` mm în fața axei), ridicat la `1`, așa că taie `3` mm adâncime în placă și lasă `1` mm de fund. Podul (`24` mm lungime) trece peste șanț și aterizează pe `3` mm de placă. Apoi **podul ridicat**: o copie a podului, rotită `90°`, în picioare lângă poartă, înălțime **24 mm**. Cu <span style="color:#E65722;font-weight:700">Ruler</span> confirmi lățimea șanțului (`10`), adâncimea (`3`) și înălțimea podului ridicat (`24`). Un coleg vede din <span style="color:#D400D4;font-weight:700">Front</span> că podul coborât trece peste șanț.  

## Recapitulare rapidă
1. Balama = **ax** (fix) + **butuc cu gaură** (mobil)  
2. Gaura (`5`) e mai mare decât axul (`4`): joc de `0,5` mm pe parte  
3. Axul se prinde de placă, iar podul și canaturile rămân **separate**  
4. Grupul temporar centrează balamaua fără s-o lipească  
5. <span style="color:#DC143C;font-weight:700">Ctrl+D</span> cu rotire de `180°` dă canatul din dreapta  

## Schema pe scurt *(pe foaie — dacă o printezi separat)*

**Minim:** placă 120·70·4 + zid 80·8·30 − poartă 20·12·22 + 2 turnuri 20·20·40 · ax 4·4·24 prin butuc 10·10·18 − Hole 5 · pod 18·24·2 · poartă: placă 80·30·4 + 2 stâlpi 12·12·36 + 2 axe 4·4·30 (la ±20) · 2 canaturi 19·3·24 cu butuc 8·8·24 − Hole 5  
**Complet:** + 3 creneluri 6·12·8 la 10 mm · Ruler · culori

**Quiz scurt:**  
- De ce gaura butucului e mai mare decât axul?  
- Cu cât e mai mare gaura (`5`) decât axul (`4`), pe fiecare parte?  
- De ce rotești canatul din dreapta cu `180°`?

## Temă
Opțional: desenezi pe foaie un **pod mobil** văzut din lateral și marchezi axul, butucul și podul.

## Ce urmează
În **Lecția 9** faci un **carusel** și o **roată panoramică**: un rotor care se învârte pe o axă, cu joc.
