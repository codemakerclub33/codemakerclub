# Lecția 9 — Carusel și roată panoramică
### Un rotor pe stâlp și o roată pe ax orizontal, cu joc
**Modulul 3 · Creativ și mecanic**  
**Code Maker Club · Motion Maker**  

> Azi construiești **două atracții cu piese care se rotesc**: un **carusel**, care se învârte pe un stâlp vertical, și o **roată panoramică**, care se învârte pe un ax orizontal. La amândouă, piesa mobilă are o gaură **mai mare** decât axul.  
> Proiect: **„Parcul meu de atracții”**  
> Fișier: `Prenume_Nume_T3_L09` (obiectul 1) și `Prenume_Nume_T3_L09_B` (obiectul 2)  
> *Parcul întreg și orașul vin în Modulul 4, nu azi.*

---

## Obiectiv
La finalul orei ai **două obiecte**: **Caruselul** și **Roata panoramică**.  
**Minim:** **Obiectul 1:** carusel din **două piese**: baza cu stâlp central (bază `Ø100 × 4`, stâlp `Ø12 × 60`, capac `Ø18 × 3`) și rotorul (platformă `Ø80 × 4`, 8 stâlpi `Ø4 × 36` la raza `30`, fiecare cu scaun `10 × 10 × 3`, acoperiș con `Ø90 × 14`, gaură `Ø13`), rotorul stând pe stâlp la `8` mm de bază, nelipit. **Obiectul 2:** roată panoramică din **două piese**: suportul (placă `90 × 40 × 4`, 2 stâlpi `8 × 8 × 50`, ax `Ø4 × 40`) și roata (4 bare `70 × 4 × 8` = 8 spițe, 8 cabine `8 × 8 × 8`, butuc `Ø12` cu gaură `Ø5`), roata stând pe ax, nelipită. **Cel puțin 8 unelte diferite**.  
**Ținta orei (Complet):** a doua parte: un **steag** pe vârful caruselului, **Ruler** (gaura `13`, stâlpul `12`) și culori, cu cel puțin **6 unelte diferite**.

## De ce contează
Ca la morișcă și la balama: **piesa care se rotește** are o gaură **mai mare** decât axul pe care stă. La carusel axul e vertical (gaura `13`, stâlpul `12`), la roata panoramică e orizontal (gaura `5`, axul `4`). Repetarea pieselor în cerc o faci cu <span style="color:#DC143C;font-weight:700">Ctrl+D</span> **și rotire**.

**Notă:** imprimanta 3D **nu** e folosită la oră — doar design.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L8 · privim o atracție adevărată: pe ce se rotește rotorul? |
| 10–50 | **Obiectul 1** — Caruselul (Minim) |
| 50–85 | **Obiectul 2** — Roata panoramică (Minim) |
| 85–110 | **Complet** pe primul obiect |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme sau ca temă |

**Grupe de unelte azi:**  
<span style="color:#1E90FF;font-weight:700">Forme</span> · <span style="color:#D400D4;font-weight:700">Vedere</span> · <span style="color:#E65722;font-weight:700">Mărime și loc</span> · <span style="color:#00A600;font-weight:700">Culoare</span> · <span style="color:#DC143C;font-weight:700">Taste de editare</span>  
*(culorile ajută să știi **ce fel de unealtă** e: o formă, o mișcare a camerei, o schimbare de mărime, culoarea sau o tastă.)*

**Uneltele de azi:**

| Unealtă | Ce face |
|---------|---------|
| <span style="color:#E65722;font-weight:700">Align (L)</span> | aliniază piese pe puncte, la fiecare direcție |
| <span style="color:#E65722;font-weight:700">rotire</span> | `45°` pentru copiile din cerc, `90°` ca să pui roata în picioare |
| <span style="color:#DC143C;font-weight:700">Ctrl+D</span> | copie, apoi aceeași mutare sau rotire repetată |
| <span style="color:#00A600;font-weight:700">Hole</span> | gaura rotorului și gaura butucului |
| <span style="color:#E65722;font-weight:700">conul negru</span> | ridică piesa cu un număr exact de milimetri |
| <span style="color:#E65722;font-weight:700">săgețile de la tastatură</span> | mută piesa cu `1` sau `5` mm |
| <span style="color:#DC143C;font-weight:700">Ctrl+G</span> | Group: bare, rotor, roată |
| <span style="color:#D400D4;font-weight:700">View Cube</span> | Front și Top: verifici axa și golurile |
| <span style="color:#E65722;font-weight:700">Ruler</span> | măsoară gaura față de ax |

Celelalte unelte (formele de bază, <span style="color:#00A600;font-weight:700">Color</span>, <span style="color:#DC143C;font-weight:700">Ctrl+Z</span>) le știi din lecțiile trecute.

---

## Pas cu pas

**Obiectul 1 — Caruselul**

### 1) Proiect nou, baza cu stâlp
1. **Create new design** · nume `Prenume_Nume_T3_L09`. <span style="color:#E65722;font-weight:700">Snap Grid</span>: **1.0 mm**  
2. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **100 · 100 · 4** *(baza)*. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **12 · 12 · 60** *(stâlpul)*. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **18 · 18 · 3** *(capacul)*  
3. Selectezi **capacul, stâlpul și baza** → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele două direcții de pe plan *(baza e cea mai lată, deci rămâne pe loc și stâlpul ajunge în centru)*  
4. Selectezi **capacul și stâlpul** → <span style="color:#E65722;font-weight:700">L</span> → punctul de **sus**: capacul stă pe vârful stâlpului  
5. Selectezi baza, stâlpul și capacul → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>: baza cu stâlp. Îl muți **100 mm** deoparte (rotorul se face separat, lângă el)  

**Încearcă tu — Proiect nou, baza cu stâlp (8 min)**  
- [ ] Baza (**100 · 100 · 4**) are stâlp (**12 · 12 · 60**) și capac (**18 · 18 · 3**), grupate  
- [ ] Grupul e mutat deoparte, la **100 mm**  

### 2) Platforma, cei 8 stâlpi și scaunele
1. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **80 · 80 · 4** *(platforma rotorului)*  
2. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **4 · 4 · 36** *(stâlpul)* și <span style="color:#1E90FF;font-weight:700">Box</span> → **10 · 10 · 3** *(scaunul)* → le tragi peste platformă. Selectezi **platforma, stâlpul și scaunul** → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele două direcții de pe plan  
3. Ridici scaunul cu <span style="color:#E65722;font-weight:700">conul negru</span> la **10 mm**. Selectezi stâlpul și scaunul → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>: un „stâlp cu scaun”  
4. <span style="color:#E65722;font-weight:700">Snap Grid</span>: **5.0 mm** → muți stâlpul cu scaun **30 mm** spre dreapta (`6` apăsări): la raza `30`  
5. <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → muți copia **60 mm** spre stânga (`12` apăsări). Selectezi cei **doi** stâlpi → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>: o „bară”, centrată pe platformă  
6. Selectezi bara → <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → rotești copia **45°** (`2` pași de 22,5°) → <span style="color:#DC143C;font-weight:700">Ctrl+D</span> încă o dată, apoi încă o dată. Din <span style="color:#D400D4;font-weight:700">Top</span>: `4` bare = **8 stâlpi**, egal depărtați, în cerc  

**Încearcă tu — Platforma, cei 8 stâlpi și scaunele (14 min)**  
- [ ] Stâlpul cu scaun (**4 · 4 · 36** + **10 · 10 · 3**, scaunul la **10 mm**) e la **30 mm** de centru  
- [ ] Ai **4** bare = **8** stâlpi în cerc (din **Top**), toate scaunele la aceeași înălțime  

### 3) Acoperișul, gaura și rotorul
1. <span style="color:#1E90FF;font-weight:700">Cone</span> → **90 · 90 · 14** → îl tragi peste platformă. Selectezi **conul, platforma și cele 4 bare** → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele două direcții de pe plan  
2. Selectezi doar conul → îl ridici cu conul negru la **35 mm**: stă pe vârful stâlpilor  
3. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **13 · 13 · 70** → <span style="color:#00A600;font-weight:700">Hole</span> → îl tragi peste platformă → <span style="color:#E65722;font-weight:700">L</span> cu platforma → mijloc **doar** pe cele două direcții de pe plan *(gaura pornește de la plan și trece prin platformă și acoperiș, deci nu o aliniezi pe înălțime)*  
4. Selectezi platforma, cele 4 bare, acoperișul și gaura (Shift+click) → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>: **rotorul**. Gaura `Ø13` e mai mare decât stâlpul `Ø12`: **0,5 mm** joc pe parte  

**Încearcă tu — Acoperișul, gaura și rotorul (10 min)**  
- [ ] Acoperișul (con **90 · 90 · 14**) stă la **35 mm**, pe vârful stâlpilor  
- [ ] Gaura (**13 · 13 · 70**, Hole) e centrată și grupată în rotor  

### 4) Rotorul pe stâlp
1. Selectezi rotorul și baza cu stâlp → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele două direcții de pe plan *(se mută amândouă spre mijloc, dar stâlpul ajunge exact în gaura rotorului)*  
2. Apeși <span style="color:#E65722;font-weight:700">D</span>, apoi ridici rotorul cu conul negru la **8 mm**  
3. <span style="color:#D400D4;font-weight:700">Front</span>: stâlpul trece prin rotor, rotorul stă între bază și capac, **nelipit**  

**Încearcă tu — Rotorul pe stâlp (6 min)**  
- [ ] Rotorul e ridicat la **8 mm** și stâlpul trece prin el  
- [ ] Rotorul e între bază și capac, **nelipit**  

**Obiectul 2 — Roata panoramică**

### 5) Roata: bare cu cabine, butuc
1. Dai **Create new design** și scrii numele `Prenume_Nume_T3_L09_B`. <span style="color:#E65722;font-weight:700">Snap Grid</span>: **1.0 mm**  
2. <span style="color:#1E90FF;font-weight:700">Box</span> → **70 · 4 · 8** *(spița)* și <span style="color:#1E90FF;font-weight:700">Box</span> → **8 · 8 · 8** *(cabina)* → le tragi una peste alta → <span style="color:#E65722;font-weight:700">L</span> → punctul din **stânga**, mijloc pe față–spate și punctul de **jos**: cabina la capătul din stânga  
3. <span style="color:#DC143C;font-weight:700">Ctrl+D</span> pe cabină → selectezi copia și spița → <span style="color:#E65722;font-weight:700">L</span> → punctul din **dreapta**: cabina din dreapta. Selectezi spița și cele **2** cabine → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>: o „bară cu cabine”  
4. <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → rotești copia **45°** (`2` pași de 22,5°) → <span style="color:#DC143C;font-weight:700">Ctrl+D</span> încă o dată, apoi încă o dată: `4` bare = **8 spițe** și **8 cabine**  
5. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **12 · 12 · 8** *(butucul)* → îl tragi peste roată → <span style="color:#E65722;font-weight:700">L</span> cu prima bară: mijloc pe cele două direcții de pe plan și punctul de jos. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **5 · 5 · 8** → <span style="color:#00A600;font-weight:700">Hole</span> → cu butucul → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele două direcții și punctul de jos  
6. Selectezi cele **4** bare, butucul și gaura (Shift+click) → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>: **roata**. Gaura `Ø5` va primi axul `Ø4`  

**Încearcă tu — Roata: bare cu cabine, butuc (14 min)**  
- [ ] Bară **70 · 4 · 8** cu cabine **8 · 8 · 8** la capete; din Top: `8` spițe și `8` cabine în cerc  
- [ ] Butucul (**12 · 12 · 8**) cu gaura **5 mm** e în centru; roata e grupată  

### 6) Suportul: placa, stâlpii și axul
1. <span style="color:#1E90FF;font-weight:700">Box</span> → **90 · 40 · 4** *(placa)*. <span style="color:#1E90FF;font-weight:700">Box</span> → **8 · 8 · 50** *(stâlpul)* → îl tragi peste placă → <span style="color:#E65722;font-weight:700">L</span> cu placa: mijloc pe stânga–dreapta și punctul din **spate**  
2. <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → copia → <span style="color:#E65722;font-weight:700">L</span> cu placa: punctul din **față**. Stâlpii sunt la capetele plăcii, cu `24` mm între ei  
3. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **4 · 4 · 40** *(axul)* → îl rotești **90°** (`4` pași de 22,5°) până când, din <span style="color:#D400D4;font-weight:700">Front</span>, se vede ca un **cerc** → <span style="color:#E65722;font-weight:700">L</span> cu placa: mijloc pe cele două direcții de pe plan. Îl ridici cu conul negru la **41 mm**: axul e la `43` mm de plan, în stâlpi  
4. Selectezi placa, cei 2 stâlpi și axul → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>: suportul  

**Încearcă tu — Suportul: placa, stâlpii și axul (12 min)**  
- [ ] Placa (**90 · 40 · 4**) are 2 stâlpi (**8 · 8 · 50**) la capete, cu `24` mm între ei  
- [ ] Axul (**4 · 4 · 40**) e orizontal, la **43 mm** de plan, prins în stâlpi; suportul e grupat  

### 7) Roata pe ax și verificarea
1. Selectezi roata → o rotești **90°** (`4` pași de 22,5°) pe săgeata care o pune în picioare, până când din <span style="color:#D400D4;font-weight:700">Front</span> se vede ca o **roată** cu spițele. *Dacă se vede ca o bandă subțire, ai rotit pe cealaltă axă: <span style="color:#DC143C;font-weight:700">Ctrl+Z</span> și încerci altă săgeată.*  
2. O tragi peste suport → selectezi roata și suportul → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele două direcții de pe plan *(suportul rămâne pe loc, roata ajunge între stâlpi)*  
3. Ridici roata cu conul negru la **8 mm** (marginea ei de jos): butucul ajunge la `43` mm de plan, exact pe ax  
4. <span style="color:#D400D4;font-weight:700">Front</span>: axul (cerc) în gaura butucului. <span style="color:#D400D4;font-weight:700">Top</span>: roata stă între stâlpi, la `8` mm de fiecare. Roata nu atinge placa  
5. Click pe roată: se selectează singură — e **separată** de ax  

**Încearcă tu — Roata pe ax și verificarea (10 min)**  
- [ ] Roata e în picioare, cu butucul pe ax, la **8 mm** de placă  
- [ ] Din Top, `8` mm între roată și fiecare stâlp; roata e **separată** de suport  

**Complet**

### 8) Complet — steag, culori, Ruler
*Deschizi din nou proiectul `Prenume_Nume_T3_L09` din lista **Designs**.*

1. <span style="color:#1E90FF;font-weight:700">Cylinder</span> **2 · 2 · 15** → îl tragi peste baza cu stâlp → <span style="color:#E65722;font-weight:700">L</span> cu baza cu stâlp: mijloc pe cele două direcții → îl ridici la **58 mm** (se înfige `2` mm în capac)  
2. <span style="color:#1E90FF;font-weight:700">Box</span> **10 · 1,5 · 6** → <span style="color:#E65722;font-weight:700">L</span> cu cilindrul steagului: mijloc pe adâncime, punctul de **sus** și marginea din **stânga**: panoul pleacă spre dreapta de la vârf  
3. Selectezi cilindrul, panoul și baza cu stâlp → <span style="color:#DC143C;font-weight:700">Ctrl+G</span> *(rotorul rămâne separat; nu folosi Ctrl+A)*  
4. <span style="color:#E65722;font-weight:700">Ruler</span>: gaura `13` mm față de stâlp `12` mm  
5. <span style="color:#00A600;font-weight:700">Color</span>: acoperiș, scaune, platformă în culori diferite  

**Încearcă tu — Complet — steag, culori, Ruler (25 min)**  
- [ ] Steagul stă pe stâlp, la **58 mm**  
- [ ] Cu Ruler: gaura **13 mm**, stâlpul **12 mm**  
- [ ] Acoperișul, scaunele și platforma au culori diferite  

---

## Greșeli frecvente
1. **Stâlpii nu sunt în cerc** — bara nu e centrată pe platformă. Aliniază stâlpul cu platforma înainte de a-l muta.  
2. **Rotorul e lipit de stâlp** — ai dat Group cu baza. Rotorul rămâne separat.  
3. **Scaunele sunt la înălțimi diferite** — fiecare scaun a fost ridicat separat. Ridică-l **o dată** (`10` mm), înainte de <span style="color:#DC143C;font-weight:700">Ctrl+D</span>.  
4. **Acoperișul nu atinge stâlpii** — ridică-l la `35` mm.  
5. **Gaura nu trece prin acoperiș** — nu e destul de înaltă (`70` mm) sau ai ridicat-o de la plan.  
6. **Rotorul atinge baza** — ridică-l la `8` mm.  
7. **Am dat Ctrl+A** — a prins și baza. Selectează cu Shift+click.  
8. **Roata nu stă în picioare** — din Front trebuie să se vadă ca o roată, nu ca o bandă. Rotește pe cealaltă axă.  
9. **Roata nu e pe ax** — nu ai ridicat-o la `8` mm, sau ai aliniat-o pe înălțime. Axul e la `43`, iar centrul roții trebuie să fie tot la `43`.  
10. **Roata e lipită de ax** — ai dat Group cu suportul. Roata rămâne separată.  

---

## De făcut azi — „Parcul meu de atracții”

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pașii 1–4** — caruselul din 2 piese (bază cu stâlp + rotor cu 8 stâlpi și scaune, acoperiș, gaură `Ø13`, la `8` mm de bază) **și** pașii 5–7 — roata panoramică din 2 piese (suport cu placă, 2 stâlpi, ax `Ø4 × 40` + roată cu 8 spițe, 8 cabine, butuc cu gaură `Ø5`), nelipite, cu **cel puțin 8 unelte diferite** |
| **Complet (ținta orei)** | Minim + **Pasul 3** — steag, `Ruler`, culori, cu cel puțin **6 unelte diferite** |

Dacă rămâi în urmă: **oprește-te la Minim**. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Obiectul 1: Caruselul *(Minim)*
- [ ] Bază **Ø100 · 4** cu stâlp **Ø12 · 60** și capac **Ø18 · 3**  
- [ ] Rotor: platformă **Ø80 · 4**, 8 stâlpi **Ø4 · 36** la raza `30`, scaune **10 · 10 · 3** la `10` mm, acoperiș **con 90 · 90 · 14** la `35` mm, gaură **13**  
- [ ] Rotorul stă pe stâlp la **8 mm**, nelipit  

### Pasul 2 — Obiectul 2: Roata panoramică *(Minim)*
- [ ] Suport: placă **90 · 40 · 4**, 2 stâlpi **8 · 8 · 50**, ax **Ø4 · 40** la `43` mm  
- [ ] Roată: 4 bare **70 · 4 · 8** cu 8 cabine **8 · 8 · 8**, butuc **Ø12** cu gaură **5**, în picioare, pe ax, nelipită  
- [ ] Ai folosit cel puțin **8 unelte diferite** (la ambele obiecte): <span style="color:#1E90FF;font-weight:700">Cylinder</span>, <span style="color:#1E90FF;font-weight:700">Box</span>, <span style="color:#1E90FF;font-weight:700">Cone</span>, <span style="color:#00A600;font-weight:700">Hole</span>, <span style="color:#E65722;font-weight:700">Align (L)</span>, <span style="color:#DC143C;font-weight:700">Ctrl+D</span>, <span style="color:#E65722;font-weight:700">rotire</span>, <span style="color:#E65722;font-weight:700">conul negru</span>, <span style="color:#DC143C;font-weight:700">Ctrl+G</span>, <span style="color:#D400D4;font-weight:700">View Cube</span>  

**→ Ai Minim când:** la ambele obiecte, piesa mobilă stă pe axul ei, cu joc, fără să atingă baza sau suportul.

### Pasul 3 — Complet
- [ ] Steag pe vârf: cilindru **2 · 2 · 15** la `58` mm și panou **10 · 1,5 · 6**  
- [ ] <span style="color:#E65722;font-weight:700">Ruler</span>: gaura **13 mm**, stâlpul **12 mm**  
- [ ] <span style="color:#00A600;font-weight:700">Color</span> · numele `T3_L09` e corect  
- [ ] Partea a doua are cel puțin **6 unelte diferite**: <span style="color:#1E90FF;font-weight:700">Cylinder</span>, <span style="color:#1E90FF;font-weight:700">Box</span>, <span style="color:#E65722;font-weight:700">Align (L)</span>, <span style="color:#DC143C;font-weight:700">Ctrl+G</span>, <span style="color:#E65722;font-weight:700">Ruler</span>, <span style="color:#00A600;font-weight:700">Color</span>  

**Gata Complet când:** steagul stă pe stâlp, jocul e verificat cu Ruler, iar caruselul are culori diferite.

---

## Bonus ★★★ — Provocare: Carusel cu două inele de scaune
*Doar dacă ai terminat Complet.*

- [ ] Schimbă culorile și adaugă lumini: sfere mici pe marginea acoperișului  
- [ ] **Provocarea (obiect mai complicat):** în proiectul `Prenume_Nume_T3_L09`, selectezi rotorul → <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span>, ca să-l desfaci în piesele lui. Faci un **al doilea inel** de scaune, mai aproape de centru: <span style="color:#1E90FF;font-weight:700">Cylinder</span> `4 · 4 · 30` și <span style="color:#1E90FF;font-weight:700">Box</span> `8 · 8 · 3` ridicat la `8` mm → grupate într-un „stâlp cu scaun”, aliniate cu platforma și mutate cu `15` mm spre dreapta; <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → copia la `30` mm spre stânga → bara; apoi <span style="color:#DC143C;font-weight:700">Ctrl+D</span> cu rotire de `45°`, de `3` ori: încă **8 scaune**, în total `16`. Selectezi apoi platforma, toate cele `8` bare, acoperișul și gaura → <span style="color:#DC143C;font-weight:700">Ctrl+G</span> și îl ridici din nou la `8` mm. Cu <span style="color:#E65722;font-weight:700">Ruler</span> confirmi raza primului inel (`30`), a celui de al doilea (`15`) și distanța dintre ele (`15`). Un coleg numără: `16` scaune, în două inele.  

## Recapitulare rapidă
1. Piesa mobilă are gaura **mai mare** decât axul: `13` față de `12` la carusel, `5` față de `4` la roată  
2. Stâlpii și bara se repetă în cerc cu <span style="color:#DC143C;font-weight:700">Ctrl+D</span> **și rotire**  
3. Rotorul și roata rămân **separate** de ax  
4. Roata în picioare: din Front se vede ca o roată, iar centrul ei e la aceeași înălțime cu axul  

## Schema pe scurt *(pe foaie — dacă o printezi separat)*

**Minim:** carusel: bază Ø100·4 + stâlp Ø12·60 + capac Ø18·3 · rotor: platformă Ø80·4 + 8 stâlpi Ø4·36 la R30 cu scaune 10·10·3 + acoperiș con 90·90·14 − Hole Ø13 la 8 mm · roată: placă 90·40·4 + 2 stâlpi 8·8·50 + ax Ø4·40 · roată: 4 bare 70·4·8 + 8 cabine 8·8·8 + butuc Ø12·8 − Hole Ø5  
**Complet:** + steag la 58 mm · Ruler · culori

**Quiz scurt:**  
- De ce gaura rotorului e mai mare decât stâlpul?  
- Cu cât e mai mare gaura (`13`) decât stâlpul (`12`), pe fiecare parte?  
- Câți stâlpi sunt la carusel și cum i-ai făcut?

## Temă
Opțional: desenezi pe foaie o **roată panoramică** văzută din față și marchezi axul, butucul și o cabină.

## Ce urmează
În **Lecția 10** faci **proiectul final de modul**: alegi un mecanism cu o piesă fixă, una mobilă cu joc și o piesă repetată, și îl prezinți.
