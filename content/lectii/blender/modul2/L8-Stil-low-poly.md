# LECȚIA 8 — Pădurea low-poly
### Stilul low-poly
**Modulul 2 · Modelare în Edit Mode**  
**Code Maker Club · Mesh Modeler**

> **Low-poly** înseamnă modele cu puține fețe plate, ca niște bijuterii șlefuite. E un stil modern, folosit în jocuri și ilustrații. Azi faci **brazi și stânci** în acest stil.  
> Proiect: **„Pădurea low-poly”** · `Prenume_Nume_B2_L08.blend`

---

## Ce facem azi
La finalul orei ai o mică **pădure cu brazi și stânci**, în stil low-poly, randată cu umbre. Low-poly e **rapid de făcut** și arată bine chiar și fără detalii: fiecare față are o culoare puțin diferită, ca la o piatră tăiată.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L7: Mirror |
| 10–25 | Flat vs Smooth |
| 25–50 | Bradul |
| 50–70 | Stânca |
| 70–85 | Copacul rotund |
| 85–105 | Pădurea și randarea |
| 105–120 | Recap, quiz, galerie |

**Ce ai nevoie:** Blender 4.2 · scena de start

---

## Instrucțiuni noi azi

| Ce folosim | Ce face | Exemplu |
|------------|---------|---------|
| **Shade Flat** | Fețele plate, cu muchii vizibile | brad, stâncă |
| **Ctrl + J** | Unește mai multe obiecte într-unul | conurile și trunchiul devin un brad |
| **Mesh → Transform → Randomize** | Mută vârfurile puțin, la întâmplare | stâncă neregulată |
| *Recap:* **Shift + D**, **R Z**, **S** | Copii variate | brazi diferiți |

---

## Pas cu pas

### 1) Flat și Smooth

| Mod | Cum arată | Folosim la |
|-----|-----------|------------|
| **Shade Smooth** | suprafață fină, rotundă | personaje, căni, fructe |
| **Shade Flat** | fețele plate, vizibile | low-poly |

În Object Mode: **click dreapta → Shade Flat**. Pentru low-poly avem nevoie de **Flat**.

**Încearcă tu — Flat și Smooth (2 min)**  
- [ ] Ai pus același cub pe **Smooth**, apoi pe **Flat**  
- [ ] Vezi diferența: pe Flat se văd fețele  

### 2) Bradul low-poly
1. **Shift + A → Mesh → Cone**: **Vertices = 6**, **Radius = 1.2**, **Depth = 1.5**, apoi **G Z 1.75**.  
2. **Shift + D**, **Enter**, **G Z 0.8 Enter**, apoi **S 0.8 Enter**.  
3. Încă o copie: **Shift + D**, **G Z 0.8**, **S 0.7**. Ai 3 niveluri.  
4. **Trunchi**: **Cylinder** (Vertices 6, Radius 0.2, Depth 1), apoi **G Z 0.5**.  
5. Selectează cele 3 conuri și trunchiul (**Shift + click**), **Ctrl + J**: devin un singur obiect. Dă-i numele `Brad` cu **F2**.  
6. **Shade Flat**. Materiale: **verde** pe conuri, **maro** pe trunchi (în Edit Mode, fețele trunchiului, **Assign** pe un slot nou).

> Varierea mărimii și a rotației face brazii „vii”.

**Încearcă tu — bradul (8 min)**  
- [ ] Bradul are 3 niveluri, tot mai mici spre vârf  
- [ ] Este un singur obiect, cu numele `Brad`  
- [ ] Conurile sunt verzi, trunchiul maro  

### 3) Stânca low-poly
1. **Shift + A → Mesh → Ico Sphere**: **Subdivisions = 1**, **Radius = 1**.  
2. **Tab**, modul **Vertex**, **A** (selectează tot).  
3. **S X 1.3 Enter**, **S Z 0.7 Enter**: mai lată decât înaltă.  
4. **Mesh → Transform → Randomize**. În panoul **Adjust Last Operation**: **Amount 0.3**. Dacă nu o găsești, mută câteva vârfuri cu **G** și mouse-ul.  
5. Cu **O** (editare proporțională) pornit și raza mică, tragi câte o „umflătură”.  
6. **Tab**, **Shade Flat**, material gri-albăstrui, **Roughness 1**.

**Încearcă tu — stânca (8 min)**  
- [ ] Stânca e neregulată și are colțuri  
- [ ] Nu arată ca un balon  
- [ ] A rămas pe podea: dacă plutește, **G Z** în jos  

### 4) Copacul rotund
Pădurea are nevoie și de copaci cu coroană rotundă, nu doar de brazi.

1. **Shift + A → Mesh → Ico Sphere**: **Subdivisions = 1**, **Radius = 1**, apoi **G Z 2.2**: coroana.  
2. **Tab**, **A**, **Mesh → Transform → Randomize**, **Amount 0.15**: coroana iese neregulată, ca o piatră verde.  
3. **Tab**. **Shift + A → Mesh → Cylinder**: **Vertices 6**, **Radius 0.15**, **Depth 1.4**, apoi **G Z 0.7**: trunchiul.  
4. Selectează coroana și trunchiul, **Ctrl + J**, **F2**: numele `Copac`.  
5. **Shade Flat**. Material verde pentru coroană, maro pentru trunchi (în Edit Mode, **Assign**).

**Încearcă tu — copacul (6 min)**  
- [ ] Coroana este rotundă, dar neregulată, cu fețe plate  
- [ ] Coroana stă pe trunchi și nu plutește  
- [ ] `Copac` este un singur obiect, cu două culori  

### 5) Pădurea
1. Un **Plane** mare ca pământ (**S 10**), verde închis, **Z = 0**.  
2. **Shift + D** pe `Brad` și pe `Copac`, în locuri diferite; **R Z** cu valori diferite; **S** de la 0.6 la 1.3.  
3. 2 stânci, una mare și una mai mică, lângă brazi.  
4. **Sun** cu **Strength 3**, culoare caldă, într-un unghi care dă umbre.

**Încearcă tu — pădurea (7 min)**  
- [ ] Ai cel puțin 4 brazi și 2 copaci rotunzi, de mărimi și rotații diferite  
- [ ] Copacii nu se ating unul de altul  
- [ ] Vezi umbre pe pământ, în modul Rendered  

### 6) Complet — randare
1. Cameră care privește pădurea de la mică înălțime.  
2. **Render → Render Image** (**F12**), apoi **Image → Save As** ca PNG.  

**Încearcă tu — randarea (5 min)**  
- [ ] Ai o imagine cu pădurea, cu umbre vizibile  
- [ ] Ai încercat alt unghi al camerei și ai randat din nou  

**Gata când:**  
- [ ] Pădurea are brazi variați și stânci  
- [ ] Totul este **Flat**, cu culori clare  
- [ ] Imaginea PNG este salvată  

### 7) Creează tu — pădurea ta
Schimbă forma unui brad (4 niveluri sau 2), culorile sau mărimea stâncilor. Un coleg trebuie să ghicească ce ai schimbat.

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| Suprafața e prea netedă | A rămas Shade Smooth | **Shade Flat** |
| Brazii arată identic | Aceeași mărime și rotație | Variază **S** și **R Z** |
| Stânca e un balon | Doar ai scalat | **Randomize** și mută vârfuri |
| Umbrele lipsesc | Nu e lumină Sun sau nu e modul Rendered | Adaugă **Sun**, vedere Rendered |
| Prea multe fețe | Cone cu 32 laturi | Cone cu **6–8** laturi |

---

## De făcut azi — „Pădurea low-poly”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Un brad și o stâncă low-poly |
| **Complet** | Minim + brazi și copaci variați, 2 stânci, randare cu umbre |

### Pasul 1 — Minim
- [ ] Brad din 3 conuri + trunchi  
- [ ] Stâncă din Ico Sphere  

**→ Minim când:** un coleg recunoaște ce ai făcut, fără explicații.

### Pasul 2 — Complet
- [ ] Shade Flat peste tot  
- [ ] Pădure cu brazi, copaci rotunzi și stânci  
- [ ] Randare PNG  
- [ ] Numele `B2_L08` e corect

---

## Bonus ★★★ — Provocare: Pădurea în patru anotimpuri
*Doar dacă ai terminat Complet.*

Aceeași pădure, patru imagini randate, doar din culori.

- [ ] Primăvara: verde deschis, lumină blândă  
- [ ] Vara: verde închis, lumină puternică  
- [ ] Toamna: portocaliu și maro, lumină caldă  
- [ ] Iarna: brazi verzi cu pământ alb; cele patru imagini au nume clare  

---

## Recapitulare pe scurt
1. **Low-poly** = puține fețe, plate  
2. **Shade Flat** pentru fațete  
3. **Ctrl + J** unește piesele într-un singur obiect  
4. **Randomize** face o stâncă neregulată  
5. Variază mărimea și rotația

## Mai departe *(opțional)*
Caută „low poly art” pe internet și observă cum arată scenele din jocuri.

## Quiz scurt
- Ce înseamnă low-poly?  
- Ce alegi: Smooth sau Flat?  
- Cum faci o stâncă din Ico Sphere?  
- Ce face **Ctrl + J**?

## Temă
Alege un obiect din casă sau din curte (o căsuță, o mașinuță, un cort) și **refă-l în stil low-poly**, în Blender.
- Notează pe foaie din ce forme simple îl faci.
- Folosește `Shade Flat`, puține fețe și cel puțin 2 culori; verifică în `Statistics` că ai sub 150 de fețe.
- Dă fiecărei piese un nume (`F2`) și salvează fișierul `Prenume_Nume_B2_L08_Tema.blend`.
