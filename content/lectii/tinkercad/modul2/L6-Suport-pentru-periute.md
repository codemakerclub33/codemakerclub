# Lecția 6 — Suport pentru periuțe
### Matrice de găuri
**Modulul 2 · Obiecte utile**  
**Code Maker Club · Object Maker**  

> Azi faci un șablon de **găuri la distanțe egale**, în două direcții, ca într-un tabel.  
> Proiect: **„Suportul de periuțe”**  
> Fișier: `Prenume_Nume_T2_L06` (obiectul 1) și `Prenume_Nume_T2_L06_B` (obiectul 2)


---

## Obiectiv
La finalul orei ai **două obiecte utile**: **Suportul pentru periuțe** și **Suportul de periuțe de vacanță, care se închide**.  
**Minim:** **Obiectul 1:** suportul pentru periuțe (cilindru `Ø70 × 40`, **4 găuri** `Ø16`, fund de `5`) și **Obiectul 2:** suportul de vacanță (cutie `190 × 45 × 25`, **2 canale** `180 × 15`, fund de `5`, plus un capac care se pune peste, cu joc de `0,5` mm), ambele grupate, cu **cel puțin 8 unelte diferite**.  
**Ținta orei (Complet):** a doua parte: bază lată `Ø80 × 4`, culoare și <span style="color:#E65722;font-weight:700">Ruler</span>, cu cel puțin **6 unelte diferite**.

## De ce contează
Găurile așezate **în rânduri și coloane** se numesc o **matrice**. O faci o dată, apoi o copiezi.  
Cu <span style="color:#DC143C;font-weight:700">Ctrl+D</span> faci un rând, apoi copiezi tot rândul — fără să măsori de fiecare dată.

**Notă:** imprimanta 3D **nu** e folosită la oră — doar design.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap lecția trecută · privim obiecte reale: ce părți au? |
| 10–50 | **Obiectul 1** — Suportul pentru periuțe (Minim) |
| 50–85 | **Obiectul 2** — Suportul de vacanță, care se închide (Minim) |
| 85–110 | **Complet** pe primul obiect |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme sau ca temă |

**Grupe de unelte azi:**  
<span style="color:#1E90FF;font-weight:700">Forme</span> · <span style="color:#D400D4;font-weight:700">Vedere</span> · <span style="color:#E65722;font-weight:700">Mărime și loc</span> · <span style="color:#00A600;font-weight:700">Culoare</span> · <span style="color:#DC143C;font-weight:700">Taste de editare</span>  
*(culorile ajută să știi **ce fel de unealtă** e: o formă, o mișcare a camerei, o schimbare de mărime, culoarea sau o tastă.)*

**Uneltele de azi:**

| Unealtă | Ce face |
|---------|---------|
| <span style="color:#00A600;font-weight:700">Hole</span> | găurile și canalele pentru periuțe |
| <span style="color:#DC143C;font-weight:700">Ctrl+D</span> | copii egale: o matrice de găuri |
| <span style="color:#E65722;font-weight:700">săgețile de la tastatură</span> | mută gaura în pași de `5` mm |
| <span style="color:#E65722;font-weight:700">Align (L)</span> | centrează prima gaură |
| <span style="color:#E65722;font-weight:700">conul negru</span> | ridică găurile la `5` mm: fundul rămâne închis |
| <span style="color:#DC143C;font-weight:700">Ctrl+G</span> | Group: găurile taie corpul |
| <span style="color:#D400D4;font-weight:700">View Cube Top</span> | verifici matricea de sus |

Celelalte unelte (formele de bază, vederea, <span style="color:#00A600;font-weight:700">Color</span>, <span style="color:#DC143C;font-weight:700">Ctrl+Z</span>) le știi din lecțiile trecute.

---

## Pas cu pas

**Obiectul 1 — Suportul pentru periuțe**

### 1) Proiect nou
1. **Create new design** · nume `Prenume_Nume_T2_L06`  
2. Snap Grid: **1.0 mm** pentru început

**Încearcă tu — Proiect nou (4 min)**  
- [ ] Proiectul e creat și redenumit `Prenume_Nume_T2_L06`

### 2) Corpul
1. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **70 · 70 · 40**  
2. Rămâne <span style="color:#00A600;font-weight:700">Solid</span>

**Încearcă tu — Corpul (6 min)**  
- [ ] Corpul are **70 · 70 · 40** (Solid)

### 3) Prima gaură
1. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **16 · 16 · 40** → <span style="color:#00A600;font-weight:700">Hole</span>  
2. Selectezi gaura și corpul → <span style="color:#E65722;font-weight:700">L</span> → **mijloc** pe ambele direcții de pe plan  
3. Ridici gaura cu **5 mm**, folosind **<span style="color:#E65722;font-weight:700">conul negru</span>** (scrii 5): începe la 5 mm de jos și iese 5 mm deasupra → **fund închis de 5 mm**

**Încearcă tu — Prima gaură (8 min)**  
- [ ] Prima gaură (**16 · 16 · 40**, Hole) e centrată  
- [ ] E ridicată cu **5 mm**, deci fundul e închis

### 4) Matricea 2 × 2
1. Snap Grid: **5.0 mm**  
2. Din <span style="color:#D400D4;font-weight:700">Top</span>, cu <span style="color:#E65722;font-weight:700">săgețile de la tastatură</span> (o apăsare = 5 mm), muți gaura **15 mm** spre dreapta și **15 mm** spre față (3 apăsări pe fiecare direcție)  
3. <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → muți copia **30 mm** spre stânga (6 apăsări) → 2 găuri într-un rând  
4. Shift+click pe **ambele** găuri → <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → muți cele două copii **30 mm** spre spate (6 apăsări) → rândul 2  
5. Rezultat: 4 găuri în pătrat, centrele la 30 mm unele de altele

**Încearcă tu — Matricea 2 × 2 (10 min)**  
- [ ] Ai **4** găuri într-un pătrat  
- [ ] Centrele sunt la **30 mm** unele de altele

### 5) Group + verificare
1. <span style="color:#DC143C;font-weight:700">Ctrl+A</span> → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  
2. View Cube → <span style="color:#D400D4;font-weight:700">Top</span>: 4 găuri, pereți între ele vizibil egali?  
3. Perete minim între găuri: cât? (30 − 16 = **14 mm** pe axă, **mai mult** pe diagonală)

**Încearcă tu — Group + verificare (6 min)**  
- [ ] Am parcurs toate punctele din verificare  
- [ ] Am corectat ce nu se potrivea

**Obiectul 2 — Suportul de periuțe de vacanță, care se închide**

### 6) Vacanța: proiect nou, cutia și primul canal
1. Dai **Create new design** și scrii numele `Prenume_Nume_T2_L06_B`. Snap Grid: **5.0 mm**.  
2. Trage un <span style="color:#1E90FF;font-weight:700">Box</span> **190 · 45 · 25**: cutia  
3. Alt <span style="color:#1E90FF;font-weight:700">Box</span> **180 · 15 · 25** → <span style="color:#00A600;font-weight:700">Hole</span>: primul canal (pentru o periuță de până la `17` cm). Îl ridici cu **<span style="color:#E65722;font-weight:700">conul negru</span>** la **5** (fund de `5` mm); iese deasupra cutiei (`30 > 25`)  
4. Selectezi canalul și cutia → <span style="color:#E65722;font-weight:700">L</span> → **mijloc** pe stânga–dreapta și pe față–spate. Apoi <span style="color:#E65722;font-weight:700">săgeata spre spate</span> de `2` ori (`10` mm): canalul e în rândul din spate, cu capete de `5` mm  

**Încearcă tu — Vacanța: proiect nou, cutia și primul canal (12 min)**  
- [ ] Cutia are **190 · 45 · 25**  
- [ ] Primul canal (**180 · 15 · 25**, Hole) e la `5` mm de plan și la `10` mm spre spate de centru  

### 7) Vacanța: al doilea canal și capacul
1. Canalul selectat → <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → muți copia **20 mm** spre față (`4` apăsări): al doilea canal. Între canale și față de margini rămân pereți de `5` mm  
2. <span style="color:#DC143C;font-weight:700">Ctrl+A</span> → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>. <span style="color:#D400D4;font-weight:700">Top</span>: **2** canale paralele, pereți egali  
3. Capacul: trage un <span style="color:#1E90FF;font-weight:700">Box</span> **197 · 52 · 15** pe plan, **lângă** cutie. Alt <span style="color:#1E90FF;font-weight:700">Box</span> **191 · 46 · 17** → <span style="color:#00A600;font-weight:700">Hole</span>. Selectezi golul și capacul → <span style="color:#E65722;font-weight:700">L</span> → **mijloc** pe stânga–dreapta și pe față–spate. Cobori golul cu **<span style="color:#E65722;font-weight:700">conul negru</span>** la **−5**: golul are `191 × 46` (cutia plus `0,5` mm joc pe fiecare parte) și se oprește la `3` mm de vârful capacului  
4. Selectezi **doar** capacul și golul (Shift+click), nu și cutia → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>. Capacul se pune peste cutie, ca un manșon  

**Încearcă tu — Vacanța: al doilea canal și capacul (15 min)**  
- [ ] Cele **2** canale sunt la `20` mm între centre, cu pereți de `5` mm  
- [ ] Capacul (**197 · 52 · 15**) are golul **191 · 46** (joc `0,5` mm), iar tavanul e de `3` mm  

**Complet**

### 8) Complet — bază lată + Ruler
*Deschizi din nou proiectul `Prenume_Nume_T2_L06` din lista **Designs**.*

1. <span style="color:#1E90FF;font-weight:700">Cylinder</span> **80 · 80 · 4** (lângă suport) → selectezi baza și suportul → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe ambele direcții de pe plan: baza stă pe plan, sub corp  
2. Din <span style="color:#D400D4;font-weight:700">Front</span>: baza e mai lată decât corpul → suportul nu se răstoarnă  
3. <span style="color:#E65722;font-weight:700">Ruler</span>: pui rigla la marginea stângă a unei găuri, click pe gaura vecină din rând: **30 mm** între aceleași margini, adică între centre *(Hole-urile se măsoară doar separat: dacă sunt în Group, <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span>, măsori, apoi <span style="color:#DC143C;font-weight:700">Ctrl+A</span> → <span style="color:#DC143C;font-weight:700">Ctrl+G</span> la loc)*  
4. Selectezi tot → <span style="color:#DC143C;font-weight:700">Ctrl+G</span> (suport și bază) · <span style="color:#00A600;font-weight:700">Color</span>

**Încearcă tu — Complet — bază lată + Ruler (12 min)**  
- [ ] Baza (**80 · 80 · 4**) e sub corp și mai lată decât el (din <span style="color:#D400D4;font-weight:700">Front</span>)  
- [ ] Cu <span style="color:#E65722;font-weight:700">Ruler</span>: **30 mm** între găuri  
- [ ] Suportul și baza sunt grupate și colorate

---

## Greșeli frecvente
1. **Găurile nu sunt în pătrat** — ai mutat o copie mai mult. Verifică din <span style="color:#D400D4;font-weight:700">Top</span>: aceleași distanțe pe stânga/dreapta și față/spate.  
2. **Rândul 2 are o singură gaură** — ai copiat doar una. Shift+click pe ambele **înainte** de Ctrl+D pentru rândul 2.  
3. **Gaura iese prin fund** — Hole-ul e prea jos. Ridică-l cu <span style="color:#E65722;font-weight:700">conul negru</span> la **5 mm** de plan.  
4. **Gaura prea aproape de margine** — peretele se rupe. Păstrează distanțele de 15 mm.  
5. **Snap Grid prea mic** — mutarea sare din 1 în 1 mm și obosește. Pune **5.0 mm**.  
6. **Baza nu e centrată** — apeși <span style="color:#E65722;font-weight:700">L</span> pe amândouă și alegi mijloc pe ambele direcții.
7. **O gaură iese prin perete** — matricea nu e centrată: refaci prima gaură cu <span style="color:#E65722;font-weight:700">L</span> și apoi mutările de `25` și `10` mm.  

---

## De făcut azi — „Suportul de periuțe”

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pașii 1 și 2** — suportul pentru periuțe (`Ø70 × 40`, 4 găuri `Ø16`) **și** suportul de vacanță (cutie `190 × 45 × 25`, 2 canale, capac cu joc de `0,5` mm), fund de `5` mm la ambele, cu **cel puțin 8 unelte diferite** |
| **Complet (ținta orei)** | Minim + **Pasul 3** — bază lată, culoare, `Ruler`, cu cel puțin **6 unelte diferite** |

Dacă rămâi în urmă: **oprește-te la Minim**. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Obiectul 1: Suportul pentru periuțe *(Minim)*
- [ ] Corp **70 · 70 · 40**  
- [ ] Gaură **16 · 16 · 40** ridicată 5 mm  
- [ ] 4 găuri în pătrat (copiate cu <span style="color:#DC143C;font-weight:700">Ctrl+D</span>)  
- [ ] <span style="color:#DC143C;font-weight:700">Ctrl+A</span> → <span style="color:#DC143C;font-weight:700">Ctrl+G</span> · fundul e închis

### Pasul 2 — Obiectul 2: Suportul de periuțe de vacanță *(Minim)*
- [ ] Cutia are **190 · 45 · 25**, cu **2** canale **180 · 15** la `20` mm între centre  
- [ ] Fundul canalelor e de `5` mm, iar pereții de `5` mm  
- [ ] Capacul (**197 · 52 · 15**) are golul **191 · 46** și tavan de `3` mm  
- [ ] Ai folosit cel puțin **8 unelte diferite** (la ambele obiecte): <span style="color:#1E90FF;font-weight:700">Cylinder</span>, <span style="color:#1E90FF;font-weight:700">Box</span>, <span style="color:#00A600;font-weight:700">Hole</span>, <span style="color:#DC143C;font-weight:700">Ctrl+D</span>, <span style="color:#E65722;font-weight:700">săgețile de la tastatură</span>, <span style="color:#E65722;font-weight:700">Align (L)</span>, <span style="color:#E65722;font-weight:700">conul negru</span>, <span style="color:#DC143C;font-weight:700">Ctrl+G</span>, <span style="color:#DC143C;font-weight:700">Ctrl+A</span>  

**→ Ai Minim când:** un coleg poate pune patru periuțe în primul suport și două în al doilea, iar capacul se potrivește peste cutie.

### Pasul 3 — Complet
- [ ] Bază **80 · 80 · 4**, centrată  
- [ ] <span style="color:#E65722;font-weight:700">Ruler</span>: 30 mm între centre  
- [ ] <span style="color:#00A600;font-weight:700">Color</span> · numele `T2_L06` e corect
- [ ] Partea a doua are cel puțin **6 unelte diferite**: <span style="color:#1E90FF;font-weight:700">Cylinder</span>, <span style="color:#E65722;font-weight:700">Ruler</span>, <span style="color:#00A600;font-weight:700">Color</span>, <span style="color:#E65722;font-weight:700">Align (L)</span>, <span style="color:#E65722;font-weight:700">conul negru</span>, <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  

**Gata Complet când:** bază lată, culoare, Ruler și nimic nu plutește.

---

## Bonus ★★★ — Provocare: Organizator cu trei mărimi de găuri
*Doar dacă ai terminat Complet.*

- [ ] Schimbă culorile și adaugă text „PERIUȚE” pe baza lată (`1` mm)  
- [ ] **Provocarea (obiect mai complicat):** un **organizator** `120 × 50 × 35` cu **cel puțin 9 găuri** de **3 mărimi diferite** (de exemplu `Ø8` pentru pixuri, `Ø12` pentru markere, `Ø22` pentru o foarfecă), toate în șiruri egale și **niciuna** la mai puțin de `3` mm de perete (verificat cu <span style="color:#E65722;font-weight:700">Ruler</span>). Fundul rămâne închis, la `5` mm.  

## Recapitulare rapidă
1. Matrice = găuri în rânduri și coloane  
2. Faci **un rând**, apoi **copiezi rândul**  
3. Gaura ridicată 5 mm = **fund închis**  
4. Baza lată = stabilitate
5. Al doilea obiect (Suportul de vacanță) are canale la distanțe egale și un capac cu joc de `0,5` mm

## Schema pe scurt *(pe foaie — dacă o printezi separat)*

**Minim:** Cylinder 70·70·40 − Hole 16·16·40 (ridicat 5 mm) → mută 15+15 mm → Ctrl+D (30 mm) → ambele → Ctrl+D (30 mm) → Group  
**Complet:** + bază 80·80·4 · Ruler · Color

**Quiz scurt:**  
- De ce gaura se ridică 5 mm de la plan și nu stă pe plan?  
- Cum faci al doilea rând de găuri fără să măsori din nou?  
- De ce baza e mai lată?

## Temă
Opțional: un suport cu **6 găuri** (2 rânduri × 3 coloane) pe un corp <span style="color:#1E90FF;font-weight:700">Box</span> — calculezi lungimea corpului.

## Ce urmează
În **Lecția 7** faci un **abajur cu decupaje** și un **lampion**, cu rotiri repetate.
