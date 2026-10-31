# LECȚIA 4 — Racheta mea
### Forme de bază
**Modulul 1 · Primii pași în Blender**  
**Code Maker Club · Blender Starter**

> Azi descoperi „cărămizile” modelării 3D: **cub, sferă, cilindru, con, plan, tor**. Din ele poți face aproape orice.  
> Proiect: **„Racheta mea”** · `Prenume_Nume_B1_L04.blend`

---

## Ce facem azi
La finalul orei adaugi și reglezi forme de bază și construiești o **rachetă** din ele. Modelatorii profesioniști încep adesea cu forme simple, pe care le combină și le modifică. Un copac e un cilindru și o sferă; o casă e un cub și un con.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L3 |
| 10–40 | Meniul **Add** și formele de bază |
| 40–65 | Panoul de reglaj după adăugare |
| 65–95 | Construim racheta |
| 95–115 | Creezi tu: alt vehicul |
| 115–120 | Recap, quiz, galerie |

**Ce ai nevoie:** Blender 4.2 · scena de start

---

## Instrucțiuni noi azi

| Ce folosim | Ce face | Exemplu |
|------------|---------|---------|
| **Shift + A → Mesh** | Adaugă o formă de bază | cub, sferă, cilindru, con, plan, tor |
| Panoul **Adjust Last Operation** | Reglează forma abia adăugată | număr de laturi, rază |
| **Shift + C** | Readuce cursorul 3D în centru | înainte de a adăuga o formă nouă |
| **F2** | Redenumește obiectul | `Corp_racheta` |

---

## Pas cu pas

### 1) Meniul Add
**Shift + A → Mesh** (mouse peste viewport):

| Formă | Ce e bună pentru |
|-------|------------------|
| **Plane** | podea, perete, foaie |
| **Cube** | căsuțe, cutii, trepte |
| **Circle** | contur, bază |
| **UV Sphere** | mingi, capete, planete |
| **Ico Sphere** | sferă „din triunghiuri”, bună pentru stânci |
| **Cylinder** | trunchiuri, turnuri, roți |
| **Cone** | vârfuri, pomi de brad, pălării |
| **Torus** | inele, covrigi, roți groase |
| **Monkey** | Suzanne |

**Încearcă tu — meniul Add (2 min)**  
- [ ] Cu **Shift + A → Mesh** găsești Cube, UV Sphere, Cylinder, Cone, Torus  
- [ ] Ai adăugat cel puțin 4 forme diferite  

### 2) Locul unde apar formele
Obiectele noi apar la **cursorul 3D** (cercul alb-roșu din mijloc, la început).

| Acțiune | Cum |
|---------|-----|
| Muți cursorul | **Shift + click dreapta** unde vrei |
| Îl readuci în centru | **Shift + C** |

**Încearcă tu — cursorul 3D (2 min)**  
- [ ] Cu **Shift + click dreapta** muți cursorul 3D  
- [ ] Cu **Shift + C** îl readuci în centru  

### 3) Panoul „Adjust Last Operation”
Imediat după ce adaugi o formă, în **colțul stânga-jos** al viewport-ului apare un panou mic, pe care îl deschizi cu click:

| Setare | Ce schimbă |
|--------|------------|
| **Vertices** (la cilindru, con, cerc) | câte laturi are (3 = triunghi, 6 = hexagon, 32 = rotund) |
| **Radius** | cât e de lat |
| **Depth** | cât e de înalt |
| **Location / Rotation** | unde și cum apare |

> Atenție: panoul dispare când faci altă acțiune. Reglează **imediat** după ce adaugi forma.

**Încearcă tu — panoul din stânga-jos (2–3 min)**  
- [ ] Ai schimbat **Vertices** la un cilindru și forma a devenit mai colțuroasă sau mai rotundă  
- [ ] Ai schimbat **Radius** sau **Depth**  

### 4) Origine și nume
- Orice obiect are un **punct de origine** (punctul portocaliu mic). Rotația și scalarea se fac **în jurul lui**.  
- Redenumește fiecare obiect cu **F2**, ca să nu te încurci.

**Încearcă tu — numele (2 min)**  
- [ ] Vezi punctul portocaliu mic al unui obiect (originea)  
- [ ] Obiectul are nume în **Outliner**, dat cu **F2**  

### 5) Complet — „Racheta mea”
Construiește pe rând (șterge mai întâi cubul de start, cu **X**):

| Piesă | Formă | Reglaje |
|-------|-------|---------|
| **Corp** | Cylinder | Radius 0.5 · Depth 3 · Vertices 32 |
| **Vârf** | Cone | Radius 0.5 · Depth 1 · așezat deasupra corpului |
| **Aripi** (3) | Cube | scalate subțire: **S Y 0.1**, **S X 0.6**, **S Z 0.5**, apoi puse jos, în jurul corpului |
| **Geam** | UV Sphere | scalat mic (**S 0.15**), lipit pe corp, la mijloc |
| **Flacără** | Cone | **Radius 0.3, Depth 1**, cu vârful în jos (**R X 180**), sub corp, la **Z = −0.5** |

**Pași recomandați**
1. Adaugă corpul. Mută corpul în sus: **G Z 1.5 Enter** (ca baza să stea pe podea).  
2. Adaugă conul: vezi că apare la centru. Mută conul la **Z = 3.5**.  
3. Adaugă o aripă. Ridică aripa la **Z = 0.5** și mută aripa la **X = 0.7**. Pentru celelalte aripi, folosește **Shift + D** și rotește copiile **în jurul corpului**: cel mai simplu e să muți mai întâi cursorul 3D în centru (**Shift + C**), să alegi **Pivot: 3D Cursor** (butonul din bara de sus a viewport-ului) și apoi să apeși **R Z 120** și **R Z 240**. La final pune **Pivot** înapoi pe **Median Point**.  
4. Geamul: o sferă mică la **Y = −0.45**, **Z = 2.3**.  
5. Fiecare piesă primește un nume (**F2**): `Corp`, `Varf`, `Aripa1`…

**Încearcă tu — racheta (4 min)**  
- [ ] Corpul stă pe podea, iar vârful e deasupra lui  
- [ ] Cele 3 aripi sunt la distanțe egale, văzute de sus cu **7**  

### 6) Verifică din toate părțile
Folosește vederile din L2: **1** (față), **3** (dreapta), **7** (sus). Sunt aripile la distanțe egale?

### 7) Creează tu — „Vehiculul meu”
Racheta a fost construită după tabel. Acum alegi tu ce construiești.
1. Alege un vehicul: **camion**, **submarin**, **avion**, **barcă** sau orice altceva vrei.  
2. Folosește **cel puțin 5 piese**, din **cel puțin 3 forme diferite** (cub, sferă, cilindru, con, torus).  
3. La **cel puțin o piesă** schimbă ceva în panoul **Adjust Last Operation** (laturi, rază sau adâncime).  
4. Dă fiecărei piese un nume clar cu **F2** (`Roata1`, `Cabina` etc.).  
5. Pe o foaie fă un tabel: **Piesa · Forma · Ce am reglat**.

**Gata când:**  
- [ ] Vehiculul are cel puțin 5 piese din 3 forme  
- [ ] O piesă are reglaje din panoul Adjust Last Operation  
- [ ] Toate piesele au nume  
- [ ] Un coleg ghicește ce vehicul ai făcut  

---

## Greșeli frecvente
1. **Forma apare în altă parte** — cursorul 3D nu e în centru; **Shift + C**.  
2. **N-ai putut regla forma** — panoul din stânga-jos a dispărut; șterge forma și adaugă o formă nouă.  
3. **Forma e „colțuroasă”** — Vertices e prea mic.  
4. **Obiectele se confundă** — nu ai redenumit piesele.  
5. **Piesele intră unele în altele** — verifică vederea din față (**1**).

---

## De făcut azi — „Racheta mea”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | 4 forme diferite, cu dimensiuni schimbate |
| **Complet** | Minim + rachetă completă, cu piese denumite + „Vehiculul meu” (5 piese, tabel pe foaie) |

### Pasul 1 — Minim
- [ ] Am adăugat cub, sferă, cilindru, con  
- [ ] Am scalat piesele  

**→ Minim când:** un coleg recunoaște ce ai făcut, fără explicații.  

### Pasul 2 — Complet
- [ ] Corp, vârf, 3 aripi, geam, flacără  
- [ ] Vertices 32 la corp  
- [ ] Obiecte denumite  
- [ ] Am construit „Vehiculul meu”, cu 5 piese și tabel pe foaie  
- [ ] Numele `B1_L04` e corect

---

## Bonus ★★★ — Provocare: Caruselul
*Doar dacă ai terminat Complet.*

Construiește un carusel de parc, cu stâlpi la distanțe egale.

- [ ] Baza: un cilindru lat și subțire
- [ ] 6 stâlpi subțiri în cerc, la distanțe egale (Pivot pe 3D Cursor, apoi `Shift + D`, click dreapta, `R` `Z` `60`)
- [ ] Acoperiș: un con, care acoperă toți stâlpii
- [ ] Fiecare piesă are nume (`Baza`, `Stalp_1`…, `Acoperis`)

## Recapitulare pe scurt
1. **Shift + A → Mesh** adaugă forme  
2. Panoul din stânga-jos reglează forma  
3. **Shift + C** readuce cursorul 3D  
4. Denumește obiectele cu **F2**

## Mai departe *(opțional)*
Alege o jucărie și încearcă să o descompui în forme de bază: câte cuburi, sfere, cilindri ai nevoie?

## Quiz scurt
- Ce formă folosești pentru un trunchi de copac?  
- Unde apar obiectele noi?  
- Cum faci un cilindru „rotund”?

## Temă
Desenează o jucărie și scrie lângă fiecare parte ce formă de bază ai folosi.
