# LECȚIA 7 — Casa colorată
### Materiale
**Modulul 1 · Primii pași în Blender**  
**Code Maker Club · Blender Starter**

> Azi dai **culoare** modelelor tale! Înveți ce e un material, cum alegi o culoare și cum faci ca un obiect să arate **lucios**, **mat** sau **metalic**.  
> Proiect: **„Casa colorată”** · `Prenume_Nume_B1_L07.blend`

---

## Ce facem azi
La finalul orei casa ta e colorată și ai încercat 3 aspecte diferite: mat, lucios, metalic. O scenă fără culoare arată ca un model de plastilină gri. **Materialele** spun cum arată suprafața: culoare, lucire, transparență.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L6 · deschidem casa |
| 10–40 | Primul material, Base Color |
| 40–70 | Roughness și Metallic |
| 70–90 | Copierea materialelor, casa colorată |
| 90–110 | Creezi tu: scena cu temă |
| 110–120 | Recap, quiz, galerie |

**Ce ai nevoie:** Blender 4.2 · fișierul din L6 (sau al omulețului din L5)

---

## Instrucțiuni noi azi

| Ce folosim | Ce face | Exemplu |
|------------|---------|---------|
| **Material Preview** | Arată culorile în viewport | butonul din colțul dreapta sus |
| **New** în fila Material | Creează un material nou | corpul casei |
| **Base Color / Roughness / Metallic** | Culoarea, cât de lucios, cât de metalic | Roughness 0 = oglindă |
| **Ctrl + L → Link Materials** | Copiază materialul pe alte obiecte | ferestre cu același material |

---

## Pas cu pas

### 1) Vezi culorile în viewport
Colțul din dreapta sus al viewport-ului are 4 butoane („sfere”) pentru **modul de afișare**:

| Mod | Ce arată |
|-----|----------|
| **Wireframe** | doar liniile |
| **Solid** | gri, rapid (modul de lucru) |
| **Material Preview** | cu culori și lumini |
| **Rendered** | aproape ca la randarea finală |

Treci pe **Material Preview**, ca să vezi culorile.

**Încearcă tu — modurile de afișare (2 min)**  
- [ ] În **Solid** totul e gri  
- [ ] În **Material Preview** se văd culorile  

### 2) Primul material
1. Selectează corpul casei.  
2. În **Properties** (dreapta-jos) alege tab-ul cu **sfera roșie** (Material).  
3. Apasă **New**.  
4. Vezi lista „Surface”. Click pe **Base Color** și alege o culoare (ex. galben).  
5. Dă un nume materialului (dublu click pe nume): `Perete`.

**Încearcă tu — primul material (3 min)**  
- [ ] Corpul casei are material nou, cu numele `Perete`  
- [ ] Culoarea se vede în **Material Preview**  

### 3) Cele trei butoane magice

| Setare | Ce schimbă | Valori |
|--------|------------|--------|
| **Base Color** | culoarea | orice |
| **Roughness** | cât de „lucios” e | 0 = oglindă, 1 = mat |
| **Metallic** | cât de metalic e | 0 = plastic/lemn, 1 = metal |

**Experiment:** pe o sferă:

| Aspect | Roughness | Metallic |
|--------|-----------|----------|
| Plastic mat | 0.8 | 0 |
| Plastic lucios | 0.2 | 0 |
| Metal lucios | 0.2 | 1 |
| Metal mat | 0.6 | 1 |

**Încearcă tu — Roughness și Metallic (3 min)**  
- [ ] Pe sferă ai făcut plastic mat și plastic lucios  
- [ ] Pe sferă ai făcut și metal lucios  

### 4) Culori pentru casă
Dă materiale diferite, câte unul pe piesă:

| Piesă | Material | Idee de culoare |
|-------|----------|-----------------|
| Corp | Perete | galben deschis, Roughness 0.8 |
| Acoperiș | Acoperis | roșu-cărămiziu, Roughness 0.6 |
| Ușă | Usa | maro, Roughness 0.7 |
| Ferestre | Geam | albastru deschis, Roughness 0.1 |
| Horn | Caramida | roșu închis |
| Pământ | Iarba | verde, Roughness 1 |

**Încearcă tu — culorile casei (4 min)**  
- [ ] Fiecare piesă a casei are material propriu  
- [ ] Geamul e lucios, iar iarba e mată  

### 5) Copiem materiale
Dacă ai 3 ferestre și vrei **același** material pe toate:

1. Selectează **celelalte ferestre**.  
2. **La final** selectează fereastra care **are deja** materialul (ea e „activă”).  
3. **Ctrl + L → Link Materials.**  
Toate primesc materialul. Dacă modifici culoarea unui material, se schimbă **pe toate** obiectele care îl folosesc.

**Încearcă tu — copierea materialelor (2–3 min)**  
- [ ] A doua fereastră are același material ca prima, prin **Ctrl + L → Link Materials**  
- [ ] Dacă schimbi culoarea, se schimbă pe ambele ferestre  

### 6) Complet — omulețul colorat
Deschide fișierul cu omulețul (L5) și dă omulețului culori:

| Piesă | Culoare |
|-------|---------|
| Sfere | alb, Roughness 0.6 |
| Nas | portocaliu |
| Ochi, nasturi | negru |
| Pălărie | negru sau albastru închis |

**Încearcă tu — omulețul (3 min)**  
- [ ] Sferele sunt albe, nasul portocaliu, ochii și nasturii negri  
- [ ] Pălăria are culoare închisă  

### 7) Creează tu — „Scena cu temă”
Acum alegi tu culorile, nu le iei dintr-un tabel.
1. Alege o **temă**: vară, noapte, cetate, ocean sau o temă a ta.  
2. Recolorează casa și omulețul (sau o scenă nouă, cu cel puțin 5 piese) după tema aleasă.  
3. Folosește **cel puțin 4 culori** care se potrivesc între ele. O piesă să fie **lucioasă** sau **metalică**, dacă are sens (de exemplu o armură sau o lanternă).  
4. Păstrează o copie a variantei vechi, salvată înainte cu numele `Prenume_Nume_B1_L07_v1.blend`. Varianta nouă o salvezi ca `Prenume_Nume_B1_L07.blend`.  
5. Scrie pe o foaie o propoziție: de ce ai ales aceste culori pentru tema ta.

**Gata când:**  
- [ ] Scena are o temă clară și cel puțin 4 culori potrivite  
- [ ] Cel puțin o piesă are Roughness sau Metallic ales cu rost  
- [ ] Am scris propoziția despre culori  
- [ ] Un coleg ghicește tema fără să îi spui  

---

## Greșeli frecvente
1. **Nu vezi culoarea** — ești în modul **Solid**; treci pe **Material Preview**.  
2. **Toate obiectele au aceeași culoare** — folosesc **același material**.  
3. **Culoarea se schimbă pe alt obiect** — idem; apasă butonul cu cifra de lângă numele materialului ca materialul să fie **unic**.  
4. **Metalul arată negru** — metalul „reflectă” mediul; într-o scenă goală pare închis. E normal; în L8 adaugi lumini și metalul prinde viață.  
5. **Materialul nu apare** — ai selectat altă piesă.

---

## De făcut azi — „Casa colorată”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | 4 piese cu culori diferite |
| **Complet** | Minim + Roughness / Metallic + Link Materials + omuleț colorat + „Scena cu temă” (4 culori potrivite, o propoziție) |

### Pasul 1 — Minim
- [ ] Material Preview pornit  
- [ ] 4 materiale create  

**→ Minim când:** un coleg recunoaște ce ai făcut, fără explicații.  

### Pasul 2 — Complet
- [ ] Am ales Roughness diferit  
- [ ] Am folosit Ctrl + L  
- [ ] Am colorat și omulețul  
- [ ] Am făcut „Scena cu temă”, cu 4 culori potrivite și o propoziție  
- [ ] Numele `B1_L07` e corect

---

## Bonus ★★★ — Provocare: Paleta de materiale
*Doar dacă ai terminat Complet.*

Fă o grilă de 12 sfere care arată cum se schimbă materialul.

- [ ] 12 sfere în grilă de 4 coloane și 3 rânduri, la distanțe egale
- [ ] Coloanele au `Roughness` `0`, `0.3`, `0.6`, `1`
- [ ] Rândurile au `Metallic` `0`, `0.5`, `1`
- [ ] Fiecare sferă are numele ei și o culoare la alegere

## Recapitulare pe scurt
1. **Material** = cum arată suprafața  
2. **Base Color · Roughness · Metallic**  
3. **Ctrl + L → Link Materials** copiază materiale  
4. Material Preview arată culorile

## Mai departe *(opțional)*
Priveste în jur: ce e lucios, ce e mat? Cum ai descrie un măr, o monedă și un pulover cu Roughness și Metallic?

## Quiz scurt
- Ce înseamnă Roughness 0?  
- Cum aplici același material pe mai multe obiecte?  
- În ce mod vezi culorile în viewport?

## Temă
Alege 3 obiecte din cameră și scrie ce valori de Roughness și Metallic ar avea.
