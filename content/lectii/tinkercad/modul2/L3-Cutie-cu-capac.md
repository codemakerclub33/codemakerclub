# Lecția 3 — Cutie cu capac
### Piese care se potrivesc
**Modulul 2 · Obiecte utile**  
**Code Maker Club · Object Maker**  

> Azi faci **două piese** care trebuie să se potrivească: o cutie și capacul ei.  
> Proiect: **„Cutia mea”**  
> Fișier: `Prenume_Nume_T2_L03` (obiectul 1) și `Prenume_Nume_T2_L03_B` (obiectul 2)


---

## Obiectiv
La finalul orei ai **două obiecte utile**: **Cutia cu capac** și **Cutia rotundă**.  
**Minim:** **Obiectul 1:** cutia `60 × 40 × 30` goală și capacul `60 × 40 × 4` cu margine `53 × 33 × 3` și **Obiectul 2:** cutia rotundă `Ø50 × 30` goală și capacul `Ø50 × 4` cu margine `Ø43 × 3`, toate patru piese separate, pe plan, cu **cel puțin 8 unelte diferite**.  
**Ținta orei (Complet):** a doua parte: capacul întors pe cutie, culori diferite și joc de `0,5` mm măsurat cu <span style="color:#E65722;font-weight:700">Ruler</span>, cu cel puțin **6 unelte diferite**.

## De ce contează
Piesele care se potrivesc au nevoie de **joc**: un spațiu mic, ca să intre ușor.  
Dacă marginea capacului e **exact** cât gaura, la printare nu intră. Azi lași **0,5 mm pe fiecare parte**.

**Notă:** imprimanta 3D **nu** e folosită la oră — doar design.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap lecția trecută · privim obiecte reale: ce părți au? |
| 10–50 | **Obiectul 1** — Cutia cu capac (Minim) |
| 50–85 | **Obiectul 2** — Cutia rotundă (Minim) |
| 85–110 | **Complet** pe primul obiect |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme sau ca temă |

**Grupe de unelte azi:**  
<span style="color:#1E90FF;font-weight:700">Forme</span> · <span style="color:#D400D4;font-weight:700">Vedere</span> · <span style="color:#E65722;font-weight:700">Mărime și loc</span> · <span style="color:#00A600;font-weight:700">Culoare</span> · <span style="color:#DC143C;font-weight:700">Taste de editare</span>  
*(culorile ajută să știi **ce fel de unealtă** e: o formă, o mișcare a camerei, o schimbare de mărime, culoarea sau o tastă.)*

**Uneltele de azi:**

| Unealtă | Ce face |
|---------|---------|
| <span style="color:#1E90FF;font-weight:700">Box</span> | cutia dreptunghiulară și capacul ei |
| <span style="color:#1E90FF;font-weight:700">Cylinder</span> | cutia rotundă și capacul ei |
| <span style="color:#00A600;font-weight:700">Hole</span> | golul cutiei: taie după Group |
| <span style="color:#E65722;font-weight:700">Align (L)</span> | centrează golul și marginea capacului |
| <span style="color:#DC143C;font-weight:700">Ctrl+G</span> | Group: cutia gata, cu gol |
| <span style="color:#E65722;font-weight:700">Ruler</span> | măsoară jocul dintre capac și cutie |
| <span style="color:#E65722;font-weight:700">conul negru</span> | ridică golul la `3` mm: fundul cutiei |

Celelalte unelte (formele de bază, vederea, <span style="color:#00A600;font-weight:700">Color</span>, <span style="color:#DC143C;font-weight:700">Ctrl+Z</span>) le știi din lecțiile trecute.

---

## Pas cu pas

**Obiectul 1 — Cutia cu capac**

### 1) Proiect nou
1. **Create new design** · nume `Prenume_Nume_T2_L03`  
2. Snap Grid: **1.0 mm**

**Încearcă tu — Proiect nou (4 min)**  
- [ ] Proiectul e creat și redenumit `Prenume_Nume_T2_L03`

### 2) Cutia — exteriorul
1. <span style="color:#1E90FF;font-weight:700">Box</span> → **60 · 40 · 30**  
2. Rămâne <span style="color:#00A600;font-weight:700">Solid</span>

**Încearcă tu — Cutia — exteriorul (6 min)**  
- [ ] Cutia exterioară are **60 · 40 · 30** (Solid)

### 3) Cutia — golul
1. Alt <span style="color:#1E90FF;font-weight:700">Box</span> → **54 · 34 · 30** → fereastra piesei → <span style="color:#00A600;font-weight:700">Hole</span>  
2. Selectezi Hole-ul și cutia → <span style="color:#E65722;font-weight:700">L</span> → **mijloc** pe cele două direcții de pe plan (stânga–dreapta și față–spate)  
3. Ridici Hole-ul cu **3 mm**, folosind **<span style="color:#E65722;font-weight:700">conul negru</span>** (scrii 3): golul începe la 3 mm de jos (fundul) și iese 3 mm deasupra, deci cutia e **deschisă sus**  
4. <span style="color:#DC143C;font-weight:700">Ctrl+A</span> → <span style="color:#DC143C;font-weight:700">Ctrl+G</span> — cutie goală, cu pereți de 3 mm

**Încearcă tu — Cutia — golul (8 min)**  
- [ ] Golul (**54 · 34 · 30**) e <span style="color:#00A600;font-weight:700">Hole</span>, centrat, ridicat cu **3 mm**  
- [ ] După Group, cutia e goală, cu pereți de **3 mm**

### 4) Capacul — placa
1. Alt <span style="color:#1E90FF;font-weight:700">Box</span> → **60 · 40 · 4**  
2. Îl muți lângă cutie, pe plan

**Încearcă tu — Capacul — placa (6 min)**  
- [ ] Placa capacului are **60 · 40 · 4**

### 5) Capacul — marginea care intră
1. Alt <span style="color:#1E90FF;font-weight:700">Box</span> → **53 · 33 · 3**  
2. De ce 53 și 33? Golul cutiei e 54 × 34 → rămâne **0,5 mm joc** pe fiecare parte  
3. Îl ridici cu 4 mm (cât placa), folosind **<span style="color:#E65722;font-weight:700">conul negru</span>** — stă **pe** placă  
4. Selectezi marginea și placa → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe ambele direcții  
5. Dai <span style="color:#DC143C;font-weight:700">Group</span> doar la cele două (capacul = 1 piesă); cutia rămâne separată

**Încearcă tu — Capacul — marginea care intră (10 min)**  
- [ ] Marginea (**53 · 33 · 3**) stă pe placă, centrată  
- [ ] Capacul e un singur grup; cutia rămâne separată

**Obiectul 2 — Cutia rotundă**

### 6) Cutia rotundă: proiect nou și cutia
1. Dai **Create new design** și scrii numele `Prenume_Nume_T2_L03_B`. Snap Grid: **5.0 mm**.  
2. Trage un <span style="color:#1E90FF;font-weight:700">Cylinder</span> **50 · 50 · 30**: exteriorul cutiei  
3. Alt <span style="color:#1E90FF;font-weight:700">Cylinder</span> **44 · 44 · 30** → <span style="color:#00A600;font-weight:700">Hole</span>. Îl ridici cu **<span style="color:#E65722;font-weight:700">conul negru</span>** la **3** (fund de `3` mm); iese deasupra cutiei (`33 > 30`)  
4. Selectezi golul și cutia → <span style="color:#E65722;font-weight:700">L</span> → **mijloc** pe stânga–dreapta și pe față–spate. Pereții au `3` mm peste tot  
5. <span style="color:#DC143C;font-weight:700">Ctrl+A</span> → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>: cutia rotundă gata  

**Încearcă tu — Cutia rotundă: proiect nou și cutia (12 min)**  
- [ ] Cutia are **50 · 50 · 30**, golul **44 · 44 · 30** la **3**  
- [ ] Pereții au `3` mm, iar fundul `3` mm  

### 7) Cutia rotundă: capacul
1. Muți cutia grupată **60 mm** spre stânga (`12` apăsări pe săgeată), ca să faci loc  
2. Trage un <span style="color:#1E90FF;font-weight:700">Cylinder</span> **50 · 50 · 4**: placa capacului  
3. Alt <span style="color:#1E90FF;font-weight:700">Cylinder</span> **43 · 43 · 3**: marginea care intră în cutie. Joc: `(44 − 43) / 2 = 0,5` mm pe parte  
4. Selectezi marginea și placa → <span style="color:#E65722;font-weight:700">L</span> → **mijloc** pe stânga–dreapta și pe față–spate. Ridici marginea cu **<span style="color:#E65722;font-weight:700">conul negru</span>** la **4**, **deasupra** plăcii  
5. Selectezi **doar** placa și marginea (Shift+click), nu și cutia → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>. Capacul stă lângă cutie, pe plan  

**Încearcă tu — Cutia rotundă: capacul (12 min)**  
- [ ] Placa capacului are **50 · 50 · 4**, marginea **43 · 43 · 3**, la **4**  
- [ ] Capacul e separat de cutie, pe plan  

**Complet**

### 8) Complet — capacul pe cutie
*Deschizi din nou proiectul `Prenume_Nume_T2_L03` din lista **Designs**.*

1. Selectezi capacul → rotești **180°** cu o săgeată curbă **de pe lateral** (8 pași de 22,5°, sau scrii **180**) ca marginea să arate **în jos**  
2. Selectezi capacul și cutia → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele două direcții de pe plan. Apoi ridici capacul cu **<span style="color:#E65722;font-weight:700">conul negru</span>** la **27 mm**: placa lui stă pe pereți (la 30 mm), iar marginea de 3 mm intră în gol  
3. View Cube → <span style="color:#D400D4;font-weight:700">Front</span>: capacul stă pe pereți, nu e „înfipt” în ei  
4. <span style="color:#E65722;font-weight:700">Ruler</span>: pe o piesă selectată citești mărimea ei. Din <span style="color:#D400D4;font-weight:700">Top</span>, măsori marginea capacului (**53**) și golul cutiei (**54**) — diferența e 1 mm (0,5 pe parte). *(Golul se măsoară doar dacă Hole-ul e separat: <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span> pe cutie, măsori, apoi <span style="color:#DC143C;font-weight:700">Ctrl+A</span> pe Hole+cutie → <span style="color:#DC143C;font-weight:700">Ctrl+G</span> la loc)*  
5. <span style="color:#00A600;font-weight:700">Color</span>: cutia o culoare, capacul alta

**Încearcă tu — Complet — capacul pe cutie (15 min)**  
- [ ] Capacul e rotit **180°** (marginea în jos) și stă pe pereți, la **27 mm**  
- [ ] Din <span style="color:#D400D4;font-weight:700">Front</span>, capacul nu e „înfipt” în pereți  
- [ ] Cutia și capacul au culori diferite

---

## Greșeli frecvente
1. **Cutia e plină** — Hole-ul nu a fost grupat, sau e și el Solid. Pune <span style="color:#00A600;font-weight:700">Hole</span>, apoi <span style="color:#DC143C;font-weight:700">Ctrl+G</span>.  
2. **Cutia nu are fund** — Hole-ul e la fel de înalt ca ea. Hole-ul trebuie ridicat **3 mm**, nu lăsat pe plan.  
3. **Capacul nu intră** — marginea e prea mare. Verifică **53 · 33**, nu 54 · 34.  
4. **Capacul e prea lejer în gol** — dacă pui 50 · 30, joacă prea mult. 53 · 33 e potrivit.  
5. **Am grupat și cutia, și capacul** — Ungroup (<span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span>). Trebuie să fie **2** piese.  
6. **Marginea capacului plutește** — nu ai ridicat marginea cu 4 mm; verifică din <span style="color:#D400D4;font-weight:700">Front</span>.
7. **Capacul rotund nu intră** — marginea e `44` sau mai mare: trebuie `43`, ca să rămână joc de `0,5` mm pe parte.  

---

## De făcut azi — „Cutia mea”

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pașii 1 și 2** — cutia dreptunghiulară cu capac **și** cutia rotundă cu capac (`Ø50 × 30`, capac cu margine `Ø43`), patru piese separate, pe plan, cu **cel puțin 8 unelte diferite** |
| **Complet (ținta orei)** | Minim + **Pasul 3** — capacul întors pe cutie, culori diferite, joc `0,5` mm cu `Ruler`, cu cel puțin **6 unelte diferite** |

Dacă rămâi în urmă: **oprește-te la Minim**. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Obiectul 1: Cutia cu capac *(Minim)*
- [ ] Cutie **60 · 40 · 30** + Hole **54 · 34 · 30** ridicat 3 mm  
- [ ] <span style="color:#DC143C;font-weight:700">Ctrl+G</span> → cutie goală cu fund (verifici din lateral și de sus)  
- [ ] Capac **60 · 40 · 4** + margine **53 · 33 · 3** pe el → Group  
- [ ] Cutia și capacul sunt **2** piese separate

### Pasul 2 — Obiectul 2: Cutia rotundă *(Minim)*
- [ ] Cutia are **50 · 50 · 30**, golul **44 · 44 · 30** la **3**  
- [ ] Pereții au `3` mm, iar fundul `3` mm  
- [ ] Placa capacului are **50 · 50 · 4**, marginea **43 · 43 · 3**, la **4**  
- [ ] Capacul e separat de cutie, pe plan  
- [ ] Ai folosit cel puțin **8 unelte diferite** (la ambele obiecte): <span style="color:#1E90FF;font-weight:700">Box</span>, <span style="color:#1E90FF;font-weight:700">Cylinder</span>, <span style="color:#00A600;font-weight:700">Hole</span>, <span style="color:#E65722;font-weight:700">Align (L)</span>, <span style="color:#DC143C;font-weight:700">Ctrl+G</span>, <span style="color:#E65722;font-weight:700">conul negru</span>, <span style="color:#E65722;font-weight:700">săgețile de la tastatură</span>, <span style="color:#E65722;font-weight:700">mărimi cu numere</span>, <span style="color:#D400D4;font-weight:700">View Cube</span>  

**→ Ai Minim când:** cele două capace se văd separate de cutii, iar marginea fiecărui capac pare să încapă în gol.

### Pasul 3 — Complet
- [ ] Capacul întors **180°** și așezat pe cutie  
- [ ] <span style="color:#E65722;font-weight:700">Ruler</span>: 54 și 53  
- [ ] Culori diferite · numele `T2_L03` e corect
- [ ] Partea a doua are cel puțin **6 unelte diferite**: <span style="color:#E65722;font-weight:700">Ruler</span>, <span style="color:#00A600;font-weight:700">Color</span>, <span style="color:#E65722;font-weight:700">Align (L)</span>, <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span>, <span style="color:#E65722;font-weight:700">săgeata curbă</span>, <span style="color:#D400D4;font-weight:700">View Cube</span>  

**Gata Complet când:** capacul întors pe cutie, culori diferite, joc 0,5 mm cu Ruler și nimic nu plutește.

---

## Bonus ★★★ — Provocare: Cutie cu două compartimente
*Doar dacă ai terminat Complet.*

- [ ] Schimbă culorile și pune pe capac text cu numele tău (`1` mm)  
- [ ] **Provocarea (obiect mai complicat):** cutia `60 × 40 × 30` cu **2 compartimente egale**: perete **`3 × 34 × 25`** pus **după** Group, la mijloc, apoi <span style="color:#DC143C;font-weight:700">Group</span> din nou; plus un **mâner** pe capac (Cylinder `10 · 10 · 5`). Cele două compartimente au câte `25,5` mm lățime (verificat cu <span style="color:#E65722;font-weight:700">Ruler</span>), iar capacul se potrivește în continuare.  

## Recapitulare rapidă
1. Cutie goală = Box Solid + Box <span style="color:#00A600;font-weight:700">Hole</span> mai mic + <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  
2. Hole **ridicat 3 mm** = cutie cu fund  
3. Marginea capacului = golul − **1 mm** (0,5 mm pe parte)  
4. Cutia și capacul rămân **2 piese**
5. Al doilea obiect (Cutia rotundă) exersează aceeași idee pe alte mărimi

## Schema pe scurt *(pe foaie — dacă o printezi separat)*

**Cutie:** Box 60·40·30 + Hole 54·34·30 (ridicat 3 mm) → Group  
**Capac:** Box 60·40·4 + margine 53·33·3 → Group  
**Complet:** capac întors 180° pe cutie · Ruler · Color

**Quiz scurt:**  
- De ce marginea capacului nu poate fi exact cât golul?  
- Câți mm are fundul cutiei?  
- Câte piese separate trebuie să rămână la final?

## Temă
Opțional: o cutie pătrată **40 × 40 × 20** cu capac — aplici aceeași regulă (gol − 1 mm).

## Ce urmează
În **Lecția 4** faci un **tăietor pentru biscuiți** în formă de stea și unul cu **forma ta**, cu perete subțire de `2` mm.
