# LECȚIA 5 — Omulețul meu
### Obiecte din sfere
**Modulul 1 · Primii pași în Blender**  
**Code Maker Club · Blender Starter**

> Azi îți faci primul **personaj**: un omuleț de zăpadă, din sfere, cilindri și conuri, cu suprafață netedă și piese care se mișcă împreună.  
> Proiect: **„Omulețul meu”** · `Prenume_Nume_B1_L05.blend`

---

## Ce facem azi
La finalul orei ai un omuleț complet, cu **corp, cap, nas, ochi, pălărie și nasturi**. Personajele se construiesc din piese simple, așezate cu grijă. Aici înveți și 2 trucuri importante: **netezirea** suprafeței și **legarea** pieselor.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L4 |
| 10–50 | Corp, cap, nas, ochi |
| 50–75 | Shade Smooth |
| 75–100 | Pălărie, nasturi, brațe |
| 100–120 | Legare, recap, quiz, galerie |

**Ce ai nevoie:** Blender 4.2 · scena de start (cubul de start îl ștergi)

---

## Instrucțiuni noi azi

| Ce folosim | Ce face | Exemplu |
|------------|---------|---------|
| **Shade Smooth** | Netezește suprafața unui obiect | click dreapta pe sferă → Shade Smooth |
| **Shift + D** | Duplică obiectul selectat | un nasture, apoi încă unul |
| **Ctrl + P → Object** | Leagă piesele de un părinte | piesele se mișcă împreună cu corpul |
| **X** | Șterge obiectul selectat | cubul de start |

---

## Pas cu pas

### 1) Pornim curat
**File → New → General**, apoi **X → Delete** pe cub.

### 2) Corpul din 3 sfere
Adaugă **Shift + A → Mesh → UV Sphere** de 3 ori și așază sferele (valorile sunt sugestii):

| Piesă | Scale | Location Z |
|-------|-------|-----------|
| **Jos** | 1.2 | 1.2 |
| **Mijloc** | 0.9 | 3.0 |
| **Cap** | 0.6 | 4.4 |

Cum le scalezi: **S** → numărul → **Enter**. Locul: **N** → Location Z.

> Sferele trebuie să **se atingă ușor** și să se suprapună puțin. Verifică din față (**1**).

**Încearcă tu — sferele (3 min)**  
- [ ] Cele 3 sfere sunt una peste alta și se ating ușor  
- [ ] Din față (**1**) se vede un om de zăpadă, nu trei bile separate  

### 3) Nasul — morcovul
1. **Shift + A → Mesh → Cone.**  
2. În panoul din stânga-jos setează: **Radius 0.15**, **Depth 0.8**, **Rotation X = 90°**. Vârful conului arată acum spre față (spre −Y).  
3. Mută piesa la **Location**: X = 0, **Y = −0.9**, **Z = 4.4**. Baza intră puțin în cap, iar vârful iese în față.  
4. Verifică din dreapta (**3**): nasul iese din „față”?

**Încearcă tu — nasul (2 min)**  
- [ ] Vârful conului arată în față  
- [ ] Din dreapta (**3**), nasul iese din cap  

### 4) Ochii și nasturii
- **UV Sphere** mică: **S 0.08**. Locație ochi: **X = ±0.2**, **Y = −0.52**, **Z = 4.6**. Fă unul, duplică ochiul (**Shift + D**) și schimbă semnul lui X.  
- Nasturii: 3 sfere mici (**S 0.1**) pe mijloc: **X = 0**, **Y = −0.88**, **Z = 3.3, 3.0 și 2.7**.

**Încearcă tu — ochii (3 min)**  
- [ ] Ochii sunt simetrici: X cu aceeași valoare și semn opus  
- [ ] Nasturii stau pe mijloc, unul sub altul  

### 5) Shade Smooth — suprafață netedă
Sferele arată „cu fațete”. Le netezești:

1. Selectează o sferă (sau toate, cu **A**).  
2. **Click dreapta → Shade Smooth** (sau din meniul **Object → Shade Smooth**).  
3. Compară: rotunjimile sunt acum fine.

**Încearcă tu — Shade Smooth (2 min)**  
- [ ] Sferele nu mai au fațete vizibile  
- [ ] Ai comparat cum arăta înainte și după  

### 6) Pălăria
- **Cylinder** (Radius 0.5, Depth 0.7) pentru corpul pălăriei, la **Z = 5.35**.  
- Un al doilea **Cylinder** plat (Radius 0.8, Depth 0.08) ca boruri, la **Z = 5.0**.

**Încearcă tu — pălăria (2 min)**  
- [ ] Pălăria stă pe cap, iar borurile sunt mai late decât corpul ei  
- [ ] Nu intră în cap și nu plutește deasupra lui  

### 7) Brațele (crengi)
**Cylinder** subțire (Radius 0.05, Depth 1.5), rotit **R Y 60**, la **X = 1.4, Z = 3.4**. Fă o copie (**Shift + D**) pentru celălalt braț: **X = −1.4**, **Rotation Y = −60°**.

### 8) Complet — legăm totul (parent)
Vrei să muți omulețul întreg dintr-o mișcare. Soluția: **părinte și copii**.

1. Selectează **toate piesele**, în afară de sfera de jos (sferele de mijloc și cap, ochi, nas, nasturi, pălărie, brațe), cu **Shift + click**.  
2. La final, **Shift + click** pe **sfera de jos** (ea devine „activă”, deci părintele).  
3. Apasă **Ctrl + P → Object**.  
4. Acum, când muți sfera de jos cu **G**, toate piesele merg după ea!  
5. În **Outliner** vezi piesele „ascunse” sub părinte, ca într-o ierarhie.

**Încearcă tu — părintele (3 min)**  
- [ ] Când muți sfera de jos cu **G**, toate piesele merg după ea  
- [ ] În **Outliner** piesele apar sub părinte  

---

## Greșeli frecvente
1. **Omulețul „se desface” când îl muți** — nu ai făcut Ctrl + P.  
2. **Părintele nu e ultimul selectat** — selectează părintele la sfârșit.  
3. **Sferele sunt colțuroase** — lipsește Shade Smooth.  
4. **Nasul arată în sus sau înăuntru** — verifică **Rotation X = 90°** și privește din dreapta (**3**).  
5. **Ochii nu sunt simetrici** — folosește valori X egale cu semn opus (0.2 și −0.2).

---

## De făcut azi — „Omulețul meu”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | 3 sfere + nas + 2 ochi |
| **Complet** | Minim + Shade Smooth + pălărie + nasturi + legare |

### Pasul 1 — Minim
- [ ] Corp din 3 sfere  
- [ ] Nas și ochi  

**→ Minim când:** un coleg recunoaște ce ai făcut, fără explicații.  

### Pasul 2 — Complet
- [ ] Toate sferele netezite  
- [ ] Pălărie, nasturi, brațe  
- [ ] Piesele sunt legate cu Ctrl + P  
- [ ] Numele `B1_L05` e corect

---

## Bonus ★★★ — Provocare: Pinguinul
*Doar dacă ai terminat Complet.*

Construiește un pinguin doar din sfere și un con.

- [ ] Cel puțin 8 piese: corp, burtă, cap, cioc (con), 2 aripi, 2 picioare
- [ ] Burta, aripile și picioarele sunt sfere turtite cu `S`
- [ ] `Shade Smooth` pe toate sferele
- [ ] Toate piesele legate de corp cu `Ctrl + P`: muți corpul și vine tot pinguinul

## Recapitulare pe scurt
1. Personajele = **forme simple** puse cap la cap  
2. **Shade Smooth** netezește aspectul  
3. **Ctrl + P** leagă piese (părinte + copii)  
4. **Shift + D** duplică, apoi mută

## Mai departe *(opțional)*
Caută poze cu oameni de zăpadă și observă proporțiile: care e cea mai mare sferă? Poți schimba stilul (mai gras, mai înalt).

## Quiz scurt
- Ce face **Shade Smooth**?  
- Ce piesă trebuie selectată **ultima** când faci Ctrl + P?  
- Cum faci un ochi simetric?

## Temă
Fă un desen cu un alt personaj (om de ciocolată, robot) și scrie din ce forme de bază ai construi personajul.
