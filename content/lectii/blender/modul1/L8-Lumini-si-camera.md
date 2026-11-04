# LECȚIA 8 — Regizorul de lumini
### Lumini și cameră
**Modulul 1 · Primii pași în Blender**  
**Code Maker Club · Blender Starter**

> Azi ești **regizorul** unei scene de film: construiești o **tabără de noapte**, cu cort și foc, apoi o luminezi și îți alegi **camera**, ca într-un film adevărat.  
> Proiect: **„Regizorul de lumini”** · `Prenume_Nume_B1_L08.blend`

---

## Ce facem azi
La finalul orei ai o tabără de noapte: un cort, un foc cu bușteni și o lună. Scena e luminată de focul din mijloc și de lumina lunii, iar camera privește frumos către ea. Aceeași tabără arată **foarte diferit** la apus și la miezul nopții. Lumina face jumătate din frumusețea unui model, iar camera hotărăște ce vede privitorul.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L7 |
| 10–40 | Construim tabăra: sol, cort, foc, bușteni |
| 40–50 | Culorile taberei |
| 50–75 | Tipuri de lumină, culoare și putere |
| 75–90 | Experimentul nopții |
| 90–105 | Camera, regula treimilor, lentila |
| 105–120 | Creezi tu: dispoziția taberei · recap, quiz |

**Ce ai nevoie:** Blender 4.2 · scena de start (cubul de start îl ștergi)

---

## Instrucțiuni noi azi

| Ce folosim | Ce face | Exemplu |
|------------|---------|---------|
| **Shift + A → Light** | Adaugă o lumină | Point, Sun, Spot sau Area |
| **Color** și **Power** | Culoarea și puterea luminii | fila Light, becul verde |
| **Ctrl + Alt + Numpad 0** | Aduce camera la vederea ta | așezi camera ca un fotograf |
| **Focal Length** | Lentila camerei | 50 mm seamănă cu ochiul |

---

## Pas cu pas

### 1) Construim tabăra
Pornești de la **File → New → General** și ștergi cubul cu **X**. Construiești tabăra din forme simple. Valorile sunt sugestii: le scrii în panoul **N** sau în panoul **Adjust Last Operation**.

| Piesă | Forma | Reglaje | Locul |
|-------|-------|---------|-------|
| **Solul** | Plane | **S** `6` **Enter** | centru, Z `0` |
| **Cortul** | Cone | Vertices `4`, Radius `1.5`, Depth `1.8`; apoi **R Z 45** și **Ctrl + A → Rotation** | X `−3`, Y `2`, Z `0.9` |
| **Focul** | Cone | Radius `0.3`, Depth `0.7` | X `0`, Y `0`, Z `0.35` |
| **Buștean 1 și 2** | Cylinder | Radius `0.12`, Depth `1.2`; rotit **R X 90** | X `1.5` și X `−1.5`, Y `0`, Z `0.12` |
| **Buștean 3 și 4** | Cylinder | Radius `0.12`, Depth `1.2`; rotit **R Y 90** | Y `1.5` și Y `−1.5`, X `0`, Z `0.12` |

Dă fiecărei piese un nume cu **F2** (`Sol`, `Cort`, `Foc`, `Bustean_1`…).

**Încearcă tu — tabăra (20 min)**  
- [ ] Solul e un plan mare, iar cortul stă pe el  
- [ ] Focul e în centru, înconjurat de 4 bușteni  
- [ ] Din vederea de sus (`7`) bușteanul 1 și 2 sunt pe axa X, iar 3 și 4 pe axa Y  
- [ ] Toate piesele au nume  

### 2) Culorile taberei
Folosește materialele din lecția 7 (**Material Preview**, fila Material, **New**):

| Piesă | Culoare |
|-------|---------|
| Solul | verde închis sau maro, `Roughness` `0.9` |
| Cortul | roșu sau albastru |
| Focul | portocaliu |
| Buștenii | maro, `Roughness` `0.8` |

**Încearcă tu — culorile (4 min)**  
- [ ] Fiecare piesă are culoarea ei  
- [ ] Buștenii au același material (**Ctrl + L → Link Materials**)  

### 3) Tipuri de lumină
**Shift + A → Light:**

| Lumină | Cum arată | Bună pentru |
|--------|-----------|-------------|
| **Point** | bec care luminează în toate direcțiile | foc, lumânare, lampă |
| **Sun** | lumină de soare sau de lună, paralelă | scene în aer liber |
| **Spot** | con de lumină | far, lanternă |
| **Area** | panou luminos | studio foto, ferestre |

**Încearcă tu — tipurile de lumină (3 min)**  
- [ ] Ai adăugat cu **Shift + A → Light** o lumină Sun și una Point  
- [ ] Știi la ce e bună fiecare  

### 4) Setări (Properties → tab Light, becul verde)
Selectează mai întâi lumina (click pe ea în Outliner). Tab-ul cu becul verde apare în **Properties** doar când o lumină e selectată.

- **Color** — culoarea luminii (portocaliu cald, albastru rece).  
- **Power / Strength** — cât de puternică e.  
- Pentru **Sun**: **Strength** `0.3`–`4`. Pentru **Point**: **Power** `500`–`1000` W.

> Lumina **Sun** se rotește cu **R** ca să se schimbe unghiul umbrei; poziția ei nu contează, doar **direcția**.

**Încearcă tu — setările luminii (4 min)**  
- [ ] Ai schimbat **Color** și **Strength** sau **Power**  
- [ ] Scena se luminează sau se întunecă după setări  

### 5) Experimentul nopții
Treci în modul **Rendered** (a patra sferă, în dreapta sus a viewport-ului, ultima din cele 4). Pe rând, aprinzi și stingi:

| Test | Ce faci | Ce vezi |
|------|---------|---------|
| **Focul** | **Point** portocaliu, Power `500`, deasupra focului (Z `0.9`) | cortul și buștenii se luminează cald |
| **Luna** | **Sun** albastru deschis, Strength `0.3`, rotit ca să vină de sus | umbre lungi și albăstrii |
| **Reflector** | **Spot** alb, Power `1000`, deasupra cortului | cortul iese în evidență |

**Încearcă tu — experimentul nopții (6 min)**  
- [ ] Cu Point portocaliu cortul e luminat cald  
- [ ] Cu Sun albastru slab apar umbre lungi  
- [ ] Ai încercat și Spot, și știi ce schimbă  

### 6) Camera
Camera din scena de start e la dreapta și sus. O poți muta cu **G** și roti cu **R**, dar există un mod mult mai ușor:

1. Plasează-te în viewport în **unghiul în care vrei fotografia**.  
2. Apasă **Ctrl + Alt + Numpad 0** (sau **View → Align View → Align Active Camera to View**): camera „sare” la vederea ta.  
3. Verifică prin cameră: **Numpad 0**.  
4. Dacă ai nevoie să ajustezi **fără să te încurci**, apasă **N**, alege tab-ul **View**, caută secțiunea **View Lock** și bifează **Camera to View** și poți naviga, iar camera te urmează (**debifează după!**).

**Încearcă tu — camera (3 min)**  
- [ ] Cu **Ctrl + Alt + Numpad 0** camera sare la vederea ta  
- [ ] Cu **Numpad 0** vezi poza prin cameră  

### 7) Regula treimilor și lentila
Împarte cu gândul ecranul în 3×3 pătrate. Pune subiectul **pe linii sau la intersecții**, nu mereu în mijloc. Selectează camera, apoi în **Properties** alege tab-ul **Camera** (aparatul foto verde, apare doar când camera e selectată). Deschide panoul **Viewport Display** și bifează **Composition Guides → Thirds** (liniile apar în vederea camerei).

**Properties → tab Camera → panoul Lens → Focal Length:**

| Valoare | Efect |
|---------|-------|
| 24 mm | cuprinde mult, deformează puțin |
| 50 mm | ca ochiul omului |
| 85 mm | apropie, portrete |

Pentru scena noastră, **35–50 mm** merge bine.

**Încearcă tu — treimile și lentila (3 min)**  
- [ ] Ai bifat Thirds și ai pus cortul sau focul pe o linie  
- [ ] Ai încercat 24 mm, 50 mm și 85 mm, apoi ai ales o valoare între 35 și 50 mm  

### 8) Complet — noaptea cu foc și lună
- Un **Point** portocaliu deasupra focului, Power `500`.  
- Un **Sun** albastru deschis, Strength `0.3`, ca lumină de lună.  
- Camera la 35 mm, așezată dintr-un colț, ca să vezi **cortul și focul** în aceeași poză.

**Încearcă tu — noaptea (4 min)**  
- [ ] Ai un Point portocaliu la foc și un Sun albastru slab  
- [ ] Camera vede cortul și focul, cu compoziție în treimi  

### 9) Creează tu — „Dispoziția taberei”
Alegi tu ce simte cine se uită la poza taberei.
1. Alege o dispoziție: **apus liniștit**, **noapte cu lună plină**, **furtună** sau **petrecere la foc**.  
2. Folosește **cel puțin 2 lumini** cu **culori diferite** (de exemplu portocaliu cald și albastru rece). Dă fiecărei lumini un nume cu **F2** (`Foc_lumina`, `Luna`).  
3. Pune camera într-un **alt colț** decât la „Complet” și respectă regula treimilor.  
4. Scrie pe o foaie: tipul și puterea fiecărei lumini și o propoziție despre ce simte cine privește poza.

**Gata când:**  
- [ ] Cel puțin 2 lumini cu culori diferite și nume  
- [ ] Camera vede tabăra dintr-un alt colț, cu compoziție în treimi  
- [ ] Am notat valorile și propoziția  
- [ ] Un coleg ghicește ce dispoziție ai ales  

---

## Greșeli frecvente
1. **Totul e întunecat** — Power prea mic sau lumina e în spatele obiectelor.  
2. **Lumina Sun „nu schimbă nimic” când o muți** — pentru Sun contează doar **rotația**.  
3. **Camera nu vede tabăra** — Ctrl + Alt + Numpad 0, apoi verifică cu Numpad 0.  
4. **N-ai umbre** — treci în **Rendered**.  
5. **Camera se mișcă singură** — ai uitat **Camera to View** bifat; debifează.  
6. **Cortul arată ca o piramidă strâmbă** — nu ai aplicat rotirea: **R Z 45**, apoi **Ctrl + A → Rotation**.

---

## De făcut azi — „Regizorul de lumini”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Tabără: sol, cort, foc, bușteni · o lumină · camera vede tabăra |
| **Complet** | Minim + culori + 4 tipuri de lumină încercate + Point și Sun finale + regula treimilor + „Dispoziția taberei” (2 lumini colorate, valori notate) |

### Pasul 1 — Minim
- [ ] Tabăra e construită  
- [ ] O lumină potrivită  
- [ ] Camera vede tabăra (Numpad 0)  

**→ Minim când:** un coleg recunoaște ce ai făcut, fără explicații.  

### Pasul 2 — Complet
- [ ] Am testat Point, Sun, Spot, Area  
- [ ] Culoare și putere reglate  
- [ ] Compoziție cu treimi  
- [ ] Am făcut „Dispoziția taberei”, cu 2 lumini colorate și valorile notate  
- [ ] Numele `B1_L08` e corect

---

## Bonus ★★★ — Provocare: Peștera cu cristale magice
*Doar dacă ai terminat Complet.*

O scenă întunecată, în care singura lumină vine din cristale.

- [ ] Fundal negru (Properties → tab World, globul roșu → Surface → Color) și fără celelalte lumini
- [ ] 4 cristale: conuri înalte, cu `Vertices` `5`, pe sol
- [ ] Fiecare cristal are propria lumină `Point` în altă culoare (violet, albastru, verde, roz), Power `50`–`100` W
- [ ] Camera arată cristalele, cu regula treimilor; verifici în `Rendered`

## Recapitulare pe scurt
1. **Point · Sun · Spot · Area**  
2. Culoare + putere = atmosferă  
3. **Ctrl + Alt + Numpad 0** aduce camera la vederea ta  
4. Regula treimilor pentru compoziție

## Mai departe *(opțional)*
Fă poze ale aceluiași obiect la ore diferite și observă cum se schimbă umbrele. Încearcă să le reproduci în Blender.

## Quiz scurt
- Ce lumină folosești pentru Lună?  
- Cum aduci camera la vederea ta?  
- Ce lentilă seamănă cu ochiul uman?

## Temă
Alege un obiect din casă (o cană, o jucărie) și **luminează-l în Blender** în două dispoziții, de exemplu zi și noapte.
- Pentru fiecare dispoziție alege tipul, culoarea și puterea luminilor.
- Notează pe foaie valorile alese pentru fiecare dispoziție.
- Salvează fișierul `Prenume_Nume_B1_L08_Tema.blend`.
