# Lecția 8 — Lumini și cameră
### Lumini și cameră
**Modulul 1 · Primii pași în Blender**  
**Code Maker Club · Blender Starter**

> Azi înveți cum să **luminezi** scena și cum să pui **camera** exact unde vrei, ca un regizor de film.  
> Proiect: **„Fotografia casei”** · `Prenume_Nume_B1_L08.blend`

---

## Obiectiv
La finalul orei scena ta e bine luminată și camera privește frumos către casă.  
**Minim:** adaugi o lumină și pui camera să vadă casa.  
**Complet:** Minim + încerci **4 tipuri de lumină** + alegi culoarea și puterea + obții **umbre frumoase** + creezi o **dispoziție a ta** cu lumini și cameră.

## De ce contează
Aceeași casă arată **foarte diferit** la prânz și la apus. Lumina face jumătate din frumusețea unui model, iar camera hotărăște ce vede privitorul.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L7 |
| 10–50 | Cele 4 tipuri de lumină |
| 50–80 | Culoare și putere |
| 80–100 | Camera: poziție și vedere |
| 100–115 | Creezi tu: dispoziția mea |
| 115–120 | Recap, quiz |

**Ce ai nevoie:** Blender 4.2 · casa din L7

---

## Pas cu pas

### 1) Tipuri de lumină
**Shift + A → Light:**

| Lumină | Cum arată | Bună pentru |
|--------|-----------|-------------|
| **Point** | bec care luminează în toate direcțiile | lampă, lumânare |
| **Sun** | lumină de soare, paralelă | scene în aer liber |
| **Spot** | con de lumină | far, lanternă |
| **Area** | panou luminos | studio foto, ferestre |

**Încearcă tu — tipurile de lumină (2 min)**  
- [ ] Ai adăugat cu **Shift + A → Light** o lumină Sun și una Point  
- [ ] Știi la ce e bună fiecare  

### 2) Setări (Properties → tab Light, becul verde)
- **Color** — culoarea luminii (galben cald, albastru rece).  
- **Power / Strength** — cât de puternică e.  
- Pentru **Sun**: **Strength** 2–4. Pentru **Point**: **Power** 500–1000 W.

> Lumina **Sun** se rotește cu **R** ca să se schimbe unghiul umbrei; poziția ei nu contează, doar **direcția**.

**Încearcă tu — setările luminii (3 min)**  
- [ ] Ai schimbat **Color** și **Strength** sau **Power**  
- [ ] Scena se luminează sau se întunecă după setări  

### 3) Experimentul zilei

| Test | Ce faci | Ce vezi |
|------|---------|---------|
| **Prânz** | Sun, Strength 3, aproape de verticală | umbre scurte, culori vii |
| **Apus** | Sun aproape de orizontală, culoare portocalie | umbre lungi, atmosferă caldă |
| **Seară** | Point la geam, culoare galbenă | casa „se luminează” |

Treci în modul **Rendered** (sfera din dreapta sus) ca să vezi umbrele.

**Încearcă tu — experimentul zilei (3–4 min)**  
- [ ] Cu Sun aproape vertical umbrele sunt scurte (prânz)  
- [ ] Cu Sun aproape orizontal umbrele sunt lungi (apus)  

### 4) Camera
Camera din scena de start e la dreapta și sus. O poți muta cu **G** și roti cu **R**, dar există un mod mult mai ușor:

1. Plasează-te în viewport în **unghiul în care vrei fotografia**.  
2. Apasă **Ctrl + Alt + Numpad 0** (sau **View → Align View → Align Active Camera to View**): camera „sare” la vederea ta.  
3. Verifică prin cameră: **Numpad 0**.  
4. Dacă ai nevoie să ajustezi **fără să te încurci**, în **N → View → Camera to View** bifează opțiunea și poți naviga, iar camera te urmează (**debifează după!**).

**Încearcă tu — camera (3 min)**  
- [ ] Cu **Ctrl + Alt + Numpad 0** camera sare la vederea ta  
- [ ] Cu **Numpad 0** vezi poza prin cameră  

### 5) Regula treimilor
Împarte cu gândul ecranul în 3×3 pătrate. Pune subiectul **pe linii sau la intersecții**, nu mereu în mijloc. În **Properties → Camera → Viewport Display** bifează **Composition Guides → Thirds** (liniile apar în vederea camerei).

### 6) Lentila camerei
**Properties → tab Camera → Focal Length:**

| Valoare | Efect |
|---------|-------|
| 24 mm | cuprinde mult, deformează puțin |
| 50 mm | ca ochiul omului |
| 85 mm | apropie, portrete |

Pentru scena noastră, **35–50 mm** merge bine.

**Încearcă tu — lentila (2 min)**  
- [ ] Ai încercat 24 mm, 50 mm și 85 mm  
- [ ] Pentru scena ta ai ales o valoare între 35 și 50 mm  

### 7) Complet — compoziția finală
- Un **Sun** cald (portocaliu deschis, Strength 3).  
- Un **Area** mic, albastru, **Power 200**, ca lumină de umplere din partea opusă.  
- Camera la 35 mm, așezată din colț, ca să vezi **două fețe** ale casei.

**Încearcă tu — compoziția (4 min)**  
- [ ] Ai un Sun cald și un Area albastru din partea opusă  
- [ ] Camera vede două fețe ale casei  

### 8) Creează tu — „Dispoziția mea”
Alegi tu ce simte cine se uită la poza casei.
1. Alege o dispoziție: **dimineață liniștită**, **seară caldă**, **noapte cu lună** sau **casa în care e petrecere**.  
2. Folosește **cel puțin 2 lumini** cu **culori diferite** (de exemplu galben cald și albastru rece). Dă fiecărei lumini un nume cu **F2** (`Soarele`, `Umplere`).  
3. Pune camera într-un **alt colț** decât la „Complet” și respectă regula treimilor.  
4. Scrie pe o foaie: tipul și puterea fiecărei lumini și o propoziție despre ce simte cine privește poza.

**Gata când:**  
- [ ] Cel puțin 2 lumini cu culori diferite și nume  
- [ ] Camera vede casa dintr-un alt colț, cu compoziție în treimi  
- [ ] Am notat valorile și propoziția  
- [ ] Un coleg ghicește ce dispoziție ai ales  

---

## Greșeli frecvente
1. **Totul e întunecat** — Power prea mic sau lumina e în spatele obiectelor.  
2. **Lumina Sun „nu schimbă nimic” când o muți** — pentru Sun contează doar **rotația**.  
3. **Camera nu vede casa** — Ctrl + Alt + Numpad 0, apoi verifică cu Numpad 0.  
4. **N-ai umbre** — treci în **Rendered**.  
5. **Camera se mișcă singură** — ai uitat **Camera to View** bifat; debifează.

---

## De făcut azi — „Fotografia casei”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Lumină + cameră care vede casa |
| **Complet** | Minim + 4 tipuri de lumină încercate + 2 lumini finale + regula treimilor + „Dispoziția mea” (2 lumini colorate, valori notate) |

### Pasul 1 — Minim
- [ ] O lumină potrivită  
- [ ] Camera vede casa (Numpad 0)  

**→ Minim când:** un coleg recunoaște ce ai făcut, fără explicații.  

### Pasul 2 — Complet
- [ ] Am testat Point, Sun, Spot, Area  
- [ ] Culoare și putere reglate  
- [ ] Compoziție cu treimi  
- [ ] Am făcut „Dispoziția mea”, cu 2 lumini colorate și valorile notate  
- [ ] Numele `B1_L08` e corect

---

## Bonus ★★★ — Provocare: Aceeași casă, trei momente
*Doar dacă ai terminat Complet.*

Aceeași scenă, trei momente ale zilei, doar din lumini.

- [ ] Salvezi 3 fișiere: `_dimineata`, `_apus`, `_noapte`
- [ ] Casa și camera rămân la fel, se schimbă doar luminile
- [ ] Noaptea: o lumină `Point` sau `Spot` la ușă sau la geam
- [ ] Un coleg ghicește momentul din ecranul `Rendered`

## Recapitulare rapidă
1. **Point · Sun · Spot · Area**  
2. Culoare + putere = atmosferă  
3. **Ctrl + Alt + Numpad 0** aduce camera la vederea ta  
4. Regula treimilor pentru compoziție

## Schema pe scurt *(pe foaie — doar dacă o printezi separat)*

`Tipuri de lumină` → `Setări (Properties → tab Light, becul verde)` → `Experimentul zilei` → `Camera` → `Regula treimilor` → `Lentila camerei` → `Complet — compoziția finală` → `Creează tu`

## Mai departe *(opțional)*
Fă poze ale aceluiași obiect la ore diferite și observă cum se schimbă umbrele. Încearcă să le reproduci în Blender.

## Quiz scurt
- Ce lumină folosești pentru Soare?  
- Cum aduci camera la vederea ta?  
- Ce lentilă seamănă cu ochiul uman?

## Temă
Scrie ce lumină ai pune pentru: lumânare, far de mașină, soare de vară, ecranul unui telefon.
