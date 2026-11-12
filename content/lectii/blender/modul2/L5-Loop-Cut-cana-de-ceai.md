# LECȚIA 5 — Cana de ceai
### Loop Cut
**Modulul 2 · Modelare în Edit Mode**  
**Code Maker Club · Mesh Modeler**

> **Loop Cut** adaugă un inel nou de muchii în jurul unui obiect, iar cu el controlezi forma cu mult mai multă libertate. Azi faci o **cană de ceai** cu interior gol, buza rotunjită și toartă.  
> Proiect: **„Cana de ceai”** · `Prenume_Nume_B2_L05.blend`

---

## Ce facem azi
La finalul orei ai o cană cu **formă rotunjită, interior gol, buza netedă și toartă**. Un cilindru simplu are doar fețe sus și jos. Cu **Loop Cut** adaugi inele la mijloc și poți face cana mai lată la mijloc, o vază mai îngustă la gât sau o sticlă.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L4: Inset, Extrude, Bevel |
| 10–35 | Loop Cut |
| 35–70 | Cana: forma și golul |
| 70–95 | Buza și toarta |
| 95–110 | Finisare și creezi tu |
| 110–120 | Recap, quiz, galerie |

**Ce ai nevoie:** Blender 4.2 · scena de start

---

## Instrucțiuni noi azi

| Ce folosim | Ce face | Exemplu |
|------------|---------|---------|
| **Ctrl + R** | Loop Cut: adaugă un inel nou de muchii | inel la mijlocul cănii |
| **Rotița** în timpul Loop Cut | Alege câte inele adaugi | 2 rotiri = 2 inele |
| **Select → Select Loops → Edge Loops** | Selectează tot inelul unei muchii alese | buza cănii |
| **Shift + A → Mesh → Torus** | Adaugă un inel gros, bun pentru toartă | toarta cănii |
| *Recap:* **I + E** negativ | Gol în interior | interiorul cănii |

---

## Pas cu pas

### 1) Cilindrul de pornire
1. **File → New → General**, șterge cubul cu **X**.  
2. **Shift + A → Mesh → Cylinder**. În panoul din stânga-jos: **Vertices = 32**, **Radius = 1**, **Depth = 2**.  
3. **G Z 1 Enter**: stă pe podea.  
4. **Tab**: vezi rețeaua cilindrului.

**Încearcă tu — cilindrul (2 min)**  
- [ ] Cilindrul are 32 de laturi și stă pe podea  
- [ ] În Edit Mode vezi inele de muchii în jurul lui, doar sus și jos  

### 2) Loop Cut (Ctrl + R)
În Edit Mode, cu mouse-ul peste o **muchie verticală** a cilindrului:

| Pas | Cum |
|-----|-----|
| 1 | **Ctrl + R**: apare o linie **galbenă** sau magenta (previzualizare) |
| 2 | mută mouse-ul pe o muchie verticală: linia merge în jurul cilindrului, orizontal |
| 3 | **rotița** schimbă numărul de inele: alege **2** |
| 4 | **click stânga** confirmă, apoi **click dreapta** lasă inelele **exact la locul lor**, echidistante |

După tăiere, **inelele noi rămân selectate**. Ai acum 3 benzi de fețe.

> Dacă nu apare linia, ești în Object Mode: apasă **Tab**. Dacă linia e pe direcția greșită, mută mouse-ul pe altă muchie, înainte de click.

**Încearcă tu — Loop Cut (4 min)**  
- [ ] Ai 2 inele noi, la distanțe egale pe înălțime  
- [ ] Inelele sunt portocalii, deci selectate  
- [ ] Ai anulat cu **Ctrl + Z** și ai refăcut cu 1 inel, apoi cu 3 inele  

### 3) Forma cănii
Cu cele 2 inele selectate (dacă nu mai sunt, selectează o muchie din fiecare inel, cu **Shift + click**, în modul **Edge**, apoi **Select → Select Loops → Edge Loops**):
1. **S 1.15 Enter**: inelele se măresc, iar cana devine mai lată la mijloc.  
2. Observă din față (**1**): cana nu mai e dreaptă, are „burtă”.

**Încearcă tu — forma (3 min)**  
- [ ] Cana are burtă, văzută din față  
- [ ] Ai încercat **S 0.8** (după **Ctrl + Z**) și ai obținut o vază cu mijlocul îngust  

### 4) Golul
1. Alegi **Face**. Click pe fața **de sus** (cercul).  
2. **I 0.12 Enter**: grosimea peretelui.  
3. **E Z −1.7 Enter**: extrudezi în jos, adânc, aproape de fund (rămâne un fund gros de **0.3**).

Ar trebui să vezi un interior gol, ca la o cană adevărată.

**Încearcă tu — golul (3 min)**  
- [ ] Ai un interior gol, cu fundul mai jos decât buza  
- [ ] Din lateral (**3**) peretele pare subțire  

### 5) Buza rotunjită
1. Alegi **Edge**. Click pe o muchie din cercul **exterior** de sus, apoi **Shift + click** pe o muchie din cercul **interior**.  
2. **Select → Select Loops → Edge Loops**: se selectează ambele cercuri ale buzei.  
3. **Ctrl + B**, scrii **0.04**, rotița pe **3 segmente**, **Enter**.

**Încearcă tu — buza (3 min)**  
- [ ] Marginea de sus a cănii este rotunjită  
- [ ] Ai încercat și **0.08**, după **Ctrl + Z**: ce se schimbă?  

### 6) Toarta din Torus
1. **Tab** (ieși din Edit Mode), apoi **Shift + A → Mesh → Torus**. În panoul din stânga-jos: **Major Radius 0.5**, **Minor Radius 0.09**.  
2. **R X 90 Enter**: torusul stă în picioare. Apoi **S X 0.7 Enter**: se turtește puțin.  
3. Mută-l lângă cană: **N** → **Location X = 1.15**, **Z = 1.2**.  
4. Privește din față (**1**): jumătate din Torus intră în cană, iar cealaltă jumătate iese ca o toartă.

**Încearcă tu — toarta (4 min)**  
- [ ] Toarta este pe partea dreaptă a cănii, la mijloc  
- [ ] Toarta atinge cana, nu plutește  

### 7) Complet — finisare
1. **Shade Smooth** pe cană și pe toartă (click dreapta).  
2. Material alb, ceramic (**Roughness 0.2**), ca în Modulul 1, lecția 7.  
3. Un **Plane** mare, pus sub cană, ca masă (**Shift + A → Mesh → Plane**, **S 4**).  
4. Nume cu **F2**: `Cana`, `Toarta`, `Masa`.

**Gata când:**  
- [ ] Cana are burtă, interior gol, buza rotunjită și toartă  
- [ ] Suprafețele sunt netede, cu material  
- [ ] Cana stă pe masă, iar obiectele au nume  

### 8) Creează tu — cana ta
Schimbă forma: alt număr de inele, altă lățime la mijloc, altă toartă (mai mare sau mai mică). Un coleg trebuie să ghicească ce ai schimbat.

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| Loop Cut nu apare | Ești în Object Mode | **Tab** |
| Tăietura e pe direcția greșită | Mouse-ul e pe altă muchie | Mută mouse-ul pe o muchie verticală înainte de click |
| Inelul se mută când dai click | Ai tras mouse-ul după click stânga | După click stânga dai **click dreapta** |
| Fundul cănii e tăiat | Ai extrudat prea adânc | **E Z −1.5** |
| Toarta nu se prinde | E prea departe de cană | **Location X** mai mic (1.0) |
| Cana e „colțuroasă” | Lipsesc Shade Smooth sau Bevel | Click dreapta → **Shade Smooth**, apoi **Ctrl + B** la buză |

---

## De făcut azi — „Cana de ceai”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Cilindru cu 32 laturi, golit cu Inset + Extrude |
| **Complet** | Minim + Loop Cut pentru formă + Bevel la buză + toartă din Torus |

### Pasul 1 — Minim
- [ ] Cilindru cu 32 laturi  
- [ ] Interior gol  

**→ Minim când:** un coleg recunoaște ce ai făcut, fără explicații.

### Pasul 2 — Complet
- [ ] Loop Cut și inele mărite  
- [ ] Buza rotunjită cu Bevel  
- [ ] Toartă  
- [ ] Numele `B2_L05` e corect

---

## Bonus ★★★ — Provocare: Setul de ceai
*Doar dacă ai terminat Complet.*

Construiește un set: ceainic, cană, farfurioară și masă.

- [ ] Ceainicul: un cilindru cu 3 inele mărite pentru burtă, un cioc dintr-un **Cone** scalat, un capac cu un buton mic  
- [ ] Cana pe farfurioară, farfurioara pe masă  
- [ ] Toate piesele sunt netezite (**Shade Smooth**) și au culori diferite  
- [ ] Toate obiectele au nume clare  

---

## Recapitulare pe scurt
1. **Ctrl + R** = inel nou de muchii; rotița schimbă numărul, iar click dreapta îl lasă la mijloc  
2. **S** pe un inel selectat îl lărgește sau îl îngustează  
3. **I** + **E negativ** = gol  
4. **Select Loops → Edge Loops** selectează un inel întreg  
5. **Torus** = toartă simplă

## Mai departe *(opțional)*
Alege 3 obiecte rotunde din bucătărie și spune câte inele (Loop Cut) ar trebui ca să le modelezi.

## Quiz scurt
- Ce scurtătură face Loop Cut?  
- Cum golești un obiect?  
- Ce piesă folosim pentru toartă?  
- Ce face **S** pe un inel selectat?

## Temă
Alege un obiect rotund din casă (o vază, o sticlă, un pahar, o oală) și **refă-l în Blender**, cu **Loop Cut**.
- Desenează pe foaie profilul lui și marchează unde ai pune inelele.
- Construiește-l: inele mărite sau micșorate, gol în interior, buza rotunjită.
- Dă fiecărei piese un nume (`F2`) și salvează fișierul `Prenume_Nume_B2_L05_Tema.blend`.
