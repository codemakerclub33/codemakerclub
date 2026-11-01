# Lecția 9 — Clemă pentru cabluri
### Măsurare și toleranță
**Modulul 2 · Obiecte utile**  
**Code Maker Club · Object Maker**  

> Azi pornești de la un **obiect real**: măsori un cablu și faci o clemă exact pe mărimea lui.  
> Proiect: **„Clema mea”**  
> Fișier: `Prenume_Nume_T2_L09` (obiectul 1) și `Prenume_Nume_T2_L09_B` (obiectul 2)


---

## Obiectiv
La finalul orei ai **două obiecte utile**: **Clema pentru cabluri** și **Suportul pentru creion**.  
**Minim:** **Obiectul 1:** clema pentru un cablu măsurat (de exemplu `5` mm: inel cu gaura `6`, exterior `12`, fantă `4`, plăcuță `30 × 12 × 3` cu **2 găuri** `Ø3`) și **Obiectul 2:** suportul pentru un creion măsurat (de exemplu `7` mm: gaură `8`, exterior `14`, plăcuță `30 × 30 × 3` cu **2 găuri** `Ø3`), ambele grupate, cu **cel puțin 8 unelte diferite**.  
**Ținta orei (Complet):** a doua parte: a doua clemă pentru un cablu mai gros, <span style="color:#E65722;font-weight:700">Ruler</span> și culoare, cu cel puțin **6 unelte diferite**.

## De ce contează
O piesă făcută pentru un obiect real are nevoie de **măsurare** și de **toleranță**: gaura ceva mai mare decât cablul, ca să intre.  
Fanta ceva mai îngustă decât cablul îl **ține** înăuntru, dar cablul poate fi apăsat să intre.

**Regula azi:**  
gaura = cablu **+ 1 mm** · fanta = cablu **− 1 mm** · exteriorul = gaura **+ 6 mm**

**Notă:** imprimanta 3D **nu** e folosită la oră — doar design.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap lecția trecută · privim obiecte reale: ce părți au? |
| 10–50 | **Obiectul 1** — Clema pentru cabluri (Minim) |
| 50–85 | **Obiectul 2** — Suportul pentru creion (Minim) |
| 85–110 | **Complet** pe primul obiect |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme sau ca temă |

**Grupe de unelte azi:**  
<span style="color:#1E90FF;font-weight:700">Forme</span> · <span style="color:#D400D4;font-weight:700">Vedere</span> · <span style="color:#E65722;font-weight:700">Mărime și loc</span> · <span style="color:#00A600;font-weight:700">Culoare</span> · <span style="color:#DC143C;font-weight:700">Taste de editare</span>  
*(culorile ajută să știi **ce fel de unealtă** e: o formă, o mișcare a camerei, o schimbare de mărime, culoarea sau o tastă.)*

**Uneltele de azi:**

| Unealtă | Ce face |
|---------|---------|
| <span style="color:#E65722;font-weight:700">Ruler</span> | măsori cablul și creionul |
| <span style="color:#E65722;font-weight:700">mărimi cu numere</span> | scrii mărimile calculate |
| <span style="color:#00A600;font-weight:700">Hole</span> | golul în care intră cablul sau creionul |
| <span style="color:#E65722;font-weight:700">Align (L)</span> | centrează golul în corp |
| <span style="color:#E65722;font-weight:700">săgețile de la tastatură</span> | mută găurile de prindere cu pași de `5` mm |
| <span style="color:#DC143C;font-weight:700">Ctrl+G</span> | Group: golurile taie corpul |
| <span style="color:#DC143C;font-weight:700">Ctrl+D</span> | a doua gaură de prindere, simetrică |

Celelalte unelte (formele de bază, vederea, <span style="color:#00A600;font-weight:700">Color</span>, <span style="color:#DC143C;font-weight:700">Ctrl+Z</span>) le știi din lecțiile trecute.

---

## Pas cu pas

**Obiectul 1 — Clema pentru cabluri**

### 1) Proiect nou și calculul
1. **Create new design** · nume `Prenume_Nume_T2_L09`  
2. Pe foaie, cu cablul tău (exemplu **5 mm**):  
   gaura = 5 + 1 = **6** · fanta = 5 − 1 = **4** · exteriorul = 6 + 6 = **12**  
3. Snap Grid: **1.0 mm**

**Încearcă tu — Proiect nou și calculul (5 min)**  
- [ ] Ai calculat pe foaie: gaura, fanta și exteriorul pentru cablul tău

### 2) Inelul
1. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **12 · 12 · 12** *(exteriorul și lungimea clemei)*  
2. Alt <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **6 · 6 · 16** → <span style="color:#00A600;font-weight:700">Hole</span> *(gaura cablului, mai lungă decât inelul)*  
3. Selectezi Hole-ul și cilindrul → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe cele **trei** direcții  
4. <span style="color:#DC143C;font-weight:700">Ctrl+A</span> → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>, apoi <span style="color:#E65722;font-weight:700">D</span> — un tub scurt, cu pereți de 3 mm, pe plan

**Încearcă tu — Inelul (8 min)**  
- [ ] Tubul (**12 · 12 · 12**) are gaura **6** (Hole, mai lungă decât tubul)  
- [ ] Pereții sunt de **3 mm** și tubul stă pe plan

### 3) Rotirea
1. Selectezi tubul → rotești **90°** (4 pași de câte 22,5° pe o săgeată curbă **de pe lateral**, sau scrii **90**)  
2. Tubul stă acum „culcat”. Verifici din <span style="color:#D400D4;font-weight:700">Top</span>: trebuie să arate ca un **dreptunghi lung față–spate** — gaura lui trece de la **față** la **spate**, cablul va trece **orizontal**, prin el  
3. Dacă din <span style="color:#D400D4;font-weight:700">Top</span> e un cerc, mai rotești 90° pe altă săgeată curbă; dacă dreptunghiul e stânga–dreapta, rotești 90° pe săgeata plată de pe plan  
4. Dacă tubul a rămas sub plan sau plutește, apasă <span style="color:#E65722;font-weight:700">D</span>

**Încearcă tu — Rotirea (6 min)**  
- [ ] Din <span style="color:#D400D4;font-weight:700">Top</span>, tubul e un dreptunghi lung față–spate (gaura trece de la față la spate)

### 4) Plăcuța
1. <span style="color:#1E90FF;font-weight:700">Box</span> → **30 · 12 · 3** *(plăcuța de prindere)*  
2. Selectezi tubul și plăcuța → <span style="color:#E65722;font-weight:700">L</span> → mijloc pe ambele direcții de pe plan  
3. Plăcuța și tubul sunt acum amândouă pe plan: selectezi **tubul** și îl ridici cu **<span style="color:#E65722;font-weight:700">conul negru</span>** la **2 mm** (scrii 2): se **înfige 1 mm** în plăcuță (grosime 3) și se prinde

**Încearcă tu — Plăcuța (8 min)**  
- [ ] Plăcuța are **30 · 12 · 3**  
- [ ] Tubul e ridicat la **2 mm** și se înfige 1 mm în plăcuță

### 5) Fanta
1. <span style="color:#1E90FF;font-weight:700">Box</span> → **4 · 12 · 10** → <span style="color:#00A600;font-weight:700">Hole</span> *(lățimea 4 mm = cablu − 1)*  
2. Selectezi fanta și tubul → <span style="color:#E65722;font-weight:700">L</span> → **mijloc** pe cele două direcții de pe plan  
3. Ridici fanta cu **<span style="color:#E65722;font-weight:700">conul negru</span>** la **8 mm** de plan: ea pornește de la mijlocul tubului și iese 4 mm deasupra lui. Fanta taie peretele de sus și lasă cablul să intre apăsat  
4. <span style="color:#DC143C;font-weight:700">Ctrl+A</span> → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>

**Încearcă tu — Fanta (8 min)**  
- [ ] Fanta (**4 · 12 · 10**, Hole) e la **8 mm** și taie peretele de sus

### 6) Găurile de prindere
1. <span style="color:#1E90FF;font-weight:700">Cylinder</span> → **3 · 3 · 8** → <span style="color:#00A600;font-weight:700">Hole</span>  
2. Selectezi gaura și plăcuța → <span style="color:#E65722;font-weight:700">L</span> → punctul din **stânga** și **mijloc** față–spate (nu alege sus–jos); apoi **săgeata dreapta** de **4 ori**: marginea găurii e la **4 mm** de capăt, în partea lipsită de tub  
3. Cobori gaura cu **1 mm** sub plan, folosind **<span style="color:#E65722;font-weight:700">conul negru</span>**, ca să treacă prin toată plăcuța  
4. <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → copia + plăcuța → <span style="color:#E65722;font-weight:700">L</span> → punctul din **dreapta**, apoi **săgeata stânga** de **4 ori**: la **4 mm** de capătul opus  
5. <span style="color:#DC143C;font-weight:700">Ctrl+A</span> → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>

**Încearcă tu — Găurile de prindere (8 min)**  
- [ ] Cele **2** găuri de prindere (**3 mm**) sunt la **4 mm** de capete  
- [ ] Trec prin toată plăcuța

**Obiectul 2 — Suportul pentru creion**

### 7) Creionul: proiect nou, măsurare și corp
1. Dai **Create new design** și scrii numele `Prenume_Nume_T2_L09_B`. Snap Grid: **5.0 mm**.  
2. Măsori un **creion** (de exemplu `7` mm). Regula: **gaura = creion + 1 mm = 8**; **exterior = gaură + 6 mm = 14**  
3. Trage un <span style="color:#1E90FF;font-weight:700">Cylinder</span> **14 · 14 · 25**: corpul. Alt <span style="color:#1E90FF;font-weight:700">Cylinder</span> **8 · 8 · 24** → <span style="color:#00A600;font-weight:700">Hole</span>, ridicat cu **<span style="color:#E65722;font-weight:700">conul negru</span>** la **3** (fund de `3` mm); iese deasupra (`27 > 25`)  
4. Selectezi golul și corpul → <span style="color:#E65722;font-weight:700">L</span> → **mijloc** pe stânga–dreapta și pe față–spate. Pereții au `3` mm peste tot  

**Încearcă tu — Creionul: proiect nou, măsurare și corp (12 min)**  
- [ ] Corpul are **14 · 14 · 25**, golul **8 · 8 · 24** la **3**  
- [ ] Mărimile vin din măsurarea creionului: creion `+ 1 = gaură`, gaură `+ 6 = exterior`  

### 8) Creionul: plăcuța, găurile de prindere, Group
1. Trage un <span style="color:#1E90FF;font-weight:700">Box</span> **30 · 30 · 3**: plăcuța. Selectezi corpul grupat (sau golul și corpul) și plăcuța → <span style="color:#E65722;font-weight:700">L</span> → **mijloc** pe stânga–dreapta și pe față–spate. Corpul stă pe plan, în centrul plăcuței  
2. Un <span style="color:#1E90FF;font-weight:700">Cylinder</span> **3 · 3 · 10** → <span style="color:#00A600;font-weight:700">Hole</span>: <span style="color:#E65722;font-weight:700">L</span> pe **mijloc** pe stânga–dreapta și pe față–spate, apoi **săgeata stânga** de `2` ori (`10` mm)  
3. <span style="color:#DC143C;font-weight:700">Ctrl+D</span> → muți copia **20 mm** spre dreapta (`4` apăsări): a doua gaură, simetrică  
4. <span style="color:#DC143C;font-weight:700">Ctrl+A</span> → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>. <span style="color:#D400D4;font-weight:700">Top</span>: găurile nu ating corpul (cel puțin `1,5` mm) și nici marginea plăcuței  

**Încearcă tu — Creionul: plăcuța, găurile de prindere, Group (12 min)**  
- [ ] Plăcuța are **30 · 30 · 3**, cu **2** găuri **Ø3** simetrice la `10` mm de centru  
- [ ] După <span style="color:#DC143C;font-weight:700">Group</span>, găurile nu ating corpul și nici marginea  

**Complet**

### 9) Complet — a doua clemă
*Deschizi din nou proiectul `Prenume_Nume_T2_L09` din lista **Designs**.*

1. Un cablu gros de **8 mm**: gaura 9 · fanta 7 · exteriorul 15 — calculezi tu pe foaie  
2. Refaci pașii 2–6 cu numerele noi: tub **15 · 15 · 15**, Hole **9 · 9 · 19**, plăcuță **36 · 15 · 3**, fantă **7 · 15 · 10** (ridicată la **9 mm**), tubul ridicat la 2 mm, găuri Ø3 la 4 mm de capete  
3. Pune a doua clemă lângă prima, pe plan  
4. <span style="color:#E65722;font-weight:700">Ruler</span>: măsori gaura (6 mm) și fanta (4 mm) *(Hole-urile se măsoară doar separat: <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span>, măsori, apoi <span style="color:#DC143C;font-weight:700">Ctrl+A</span> → <span style="color:#DC143C;font-weight:700">Ctrl+G</span> la loc; la tub: <span style="color:#DC143C;font-weight:700">Ctrl+Shift+G</span> pe grupul mare, apoi pe tub)*  
5. <span style="color:#00A600;font-weight:700">Color</span>

**Încearcă tu — Complet — a doua clemă (12 min)**  
- [ ] Ai a doua clemă, pentru un cablu de **8 mm**  
- [ ] Cu <span style="color:#E65722;font-weight:700">Ruler</span>: gaura **6 mm** și fanta **4 mm**  
- [ ] Clemele sunt colorate

---

## Greșeli frecvente
1. **Cablul nu intră** — gaura e exact cât cablul. Folosește **cablu + 1 mm**.  
2. **Cablul iese singur** — fanta e prea largă. Folosește **cablu − 1 mm**.  
3. **Tubul nu e rotit** — cablul ar trece pe verticală, prin plăcuță. Rotește 90°.  
4. **Fanta nu taie** — nu e Hole, sau nu ai dat <span style="color:#DC143C;font-weight:700">Ctrl+G</span>.  
5. **Tubul plutește deasupra plăcuței** — coboară-l la 2 mm de plan, să se înfigă 1 mm.  
6. **Găurile de prindere taie tubul** — mută-le spre capete, departe de el.  
7. **Am măsurat cablul „cu ochiul”** — folosește rigla și scrie numărul pe foaie.
8. **Creionul nu intră** — ai pus gaura exact cât creionul: adaugi `1` mm toleranță.  

---

## De făcut azi — „Clema mea”

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pașii 1 și 2** — clema pentru cablul măsurat **și** suportul pentru creionul măsurat (gaură = creion `+ 1`, exterior = gaură `+ 6`), cu **cel puțin 8 unelte diferite** |
| **Complet (ținta orei)** | Minim + **Pasul 3** — a doua clemă pentru un cablu mai gros, `Ruler`, culoare, cu cel puțin **6 unelte diferite** |

Dacă rămâi în urmă: **oprește-te la Minim**. Nu e eșec, e baza pentru lecția următoare.

### Pasul 1 — Obiectul 1: Clema pentru cabluri *(Minim)*
- [ ] Cablul tău măsurat · gaura, fanta și exteriorul calculate pe foaie  
- [ ] Tub **12 · 12 · 12** cu Hole **6 · 6 · 16**, rotit 90°  
- [ ] Plăcuță **30 · 12 · 3**, tubul prins 1 mm în ea  
- [ ] Fantă **4 · 12 · 10** pe sus  
- [ ] 2 găuri **Ø3** la capete · <span style="color:#DC143C;font-weight:700">Ctrl+A</span> → <span style="color:#DC143C;font-weight:700">Ctrl+G</span>

### Pasul 2 — Obiectul 2: Suportul pentru creion *(Minim)*
- [ ] Corpul are **14 · 14 · 25**, golul **8 · 8 · 24** la **3**  
- [ ] Mărimile vin din măsurarea creionului: creion `+ 1 = gaură`, gaură `+ 6 = exterior`  
- [ ] Plăcuța are **30 · 30 · 3**, cu **2** găuri **Ø3** simetrice la `10` mm de centru  
- [ ] După <span style="color:#DC143C;font-weight:700">Group</span>, găurile nu ating corpul și nici marginea  
- [ ] Ai folosit cel puțin **8 unelte diferite** (la ambele obiecte): <span style="color:#E65722;font-weight:700">Ruler</span>, <span style="color:#1E90FF;font-weight:700">Cylinder</span>, <span style="color:#1E90FF;font-weight:700">Box</span>, <span style="color:#00A600;font-weight:700">Hole</span>, <span style="color:#E65722;font-weight:700">Align (L)</span>, <span style="color:#DC143C;font-weight:700">Ctrl+G</span>, <span style="color:#DC143C;font-weight:700">Ctrl+D</span>, <span style="color:#E65722;font-weight:700">mărimi cu numere</span>, <span style="color:#E65722;font-weight:700">conul negru</span>  

**→ Ai Minim când:** cablul intră în clemă, creionul intră în suport, iar mărimile pornesc de la măsurători, nu de la ochi.

### Pasul 3 — Complet
- [ ] A doua clemă (cablu 8 mm): gaura 9 · fanta 7 · exterior 15  
- [ ] <span style="color:#E65722;font-weight:700">Ruler</span> pe gaura și pe fanta primei cleme  
- [ ] <span style="color:#00A600;font-weight:700">Color</span> · numele `T2_L09` e corect
- [ ] Partea a doua are cel puțin **6 unelte diferite**: <span style="color:#E65722;font-weight:700">Ruler</span>, <span style="color:#00A600;font-weight:700">Color</span>, <span style="color:#DC143C;font-weight:700">Ctrl+D</span>, <span style="color:#E65722;font-weight:700">mărimi cu numere</span>, <span style="color:#E65722;font-weight:700">Align (L)</span>, <span style="color:#DC143C;font-weight:700">Ctrl+G</span>  

**Gata Complet când:** a doua clemă pentru un cablu mai gros, Ruler, culoare și nimic nu plutește.

---

## Bonus ★★★ — Provocare: Clemă dublă cu două cabluri
*Doar dacă ai terminat Complet.*

- [ ] Schimbă culorile și adaugă pe plăcuță text cu mărimea cablului (`1` mm)  
- [ ] **Provocarea (obiect mai complicat):** o **plăcuță** `50 × 14 × 3` cu **2 cleme** pentru **2 cabluri diferite** (de exemplu `5` mm și `7` mm), mărimile calculate după regula lecției (gaură `+ 1`, exterior `+ 6`, fantă `− 1`), și **2 găuri** `Ø3` la capete. Cu <span style="color:#E65722;font-weight:700">Ruler</span> verifici cele două găuri și cele două fante; un coleg poate pune în ele cele două cabluri.  

## Recapitulare rapidă
1. Piesa pentru un obiect real începe cu **măsurarea**  
2. Gaura = obiect **+ 1 mm** · fanta = obiect **− 1 mm**  
3. **Toleranța** = spațiul mic care face piesa să se potrivească  
4. Rotire de 90° pentru ca tubul să stea culcat
5. Al doilea obiect (Suportul pentru creion) exersează aceeași idee pe alte mărimi

## Schema pe scurt *(pe foaie — dacă o printezi separat)*

**Calcul:** cablu 5 → gaură 6 → fantă 4 → exterior 12  
**Minim:** Cylinder 12·12·12 − Hole 6·6·16 → rotit 90° → plăcuță 30·12·3 → fantă Hole 4·12·10 → 2 găuri Ø3 → Group  
**Complet:** + clemă pentru 8 mm · Ruler · Color

**Quiz scurt:**  
- Cablul are 5 mm. Cât are gaura? Dar fanta?  
- De ce nu facem gaura exact cât cablul?  
- Ce faci dacă ai un cablu de 7 mm?

## Temă
Opțional: măsoară un cablu de acasă (încărcător, căști), notează mărimea pe foaie și calculează gaura, fanta și exteriorul. Mâine îl modelezi.

## Ce urmează
În **Lecția 10** alegi **tu** un obiect util și o **piesă pereche**, cu schiță și prezentare.
