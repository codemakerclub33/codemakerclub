# LECȚIA 1 — Primul meu Place
### Roblox Studio, Part, Anchor și Play
**Modulul 1 · Place Builder**  
**Code Maker Club · Roblox Studio**

> Azi deschizi **Roblox Studio**, înveți cele **5 comenzi** de bază și construiești **Etapa 1** din Obby-ul tău: un pod pe care îl treci în **Play**.  
> Proiect: **„Etapa1_Pod”** · Place: `Prenume_Nume_M1` (ex. `Ana_Pop_M1`)

---

## Ce facem azi
La finalul orei ai un **Place salvat** și **Etapa 1** a Obby-ului tău: un turn de start, un pod din 6 plăci și un turn de ieșire. Vezi cu ochii tăi ce face **Anchor**: același pod **cade** când nu e ancorat și **ține** când e ancorat. Obby-ul tău crește în tot modulul: în fiecare lecție adaugi o **etapă nouă**, iar în ultima lecție le legi pe toate într-o singură lume.

**Notă:** azi nu scriem cod. Lucrezi doar cu ce vezi pe ecran.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–15 | Deschidem Studio · Place nou · salvăm cu numele tău |
| 15–45 | Turul celor 5 comenzi · mutăm, mărim, rotim (**Încearcă tu**) |
| 45–75 | **Proiectul 1** · Turnul de start (Part, Move, Scale, Anchor) |
| 75–105 | **Proiectul 2** · Podul care cade și podul care ține |
| 105–120 | Recap, quiz, salvare · **Bonus ★★★** pentru cine termină devreme |

**Pe ecran folosim azi:** Viewport · Play / Stop · Part · Move / Scale / Rotate · Anchor.

---

## Instrucțiuni noi azi

| Ce folosim | Ce face | Exemplu |
|------------|---------|---------|
| **Part** (în Home) | Pune o formă în lume: Block, Sphere, Wedge, Corner Wedge, Cylinder | Home → **Part** → **Block** |
| **Move** / **Scale** / **Rotate** | Mută, mărește, rotește Part-ul selectat | Selectezi cubul → **Move** → tragi o săgeată |
| **Anchor** | Part-ul stă pe loc și nu cade când apeși Play | Selectezi Part-ul → **Anchor** |
| **Anchored parts** | Arată ce Parts sunt ancorate | Roata din colțul Viewport-ului → **Visualization Modes** → bifezi **Anchored parts** |
| **Ctrl+D** (Mac: **Cmd+D**) | Dublează Part-ul selectat | Selectezi placa → Ctrl+D → o muți cu Move |
| **Play** / **Stop** | Testezi ca jucător / te întorci la editare | Săgeata albastră sus · pătratul roșu |

---

## Pas cu pas

### 1) Turul celor 5 comenzi
Când deschizi Studio pe un Place nou, vezi:

| # | Ce | Unde |
|---|-----|------|
| 1 | **Viewport** | Mijlocul ecranului: **lumea 3D**. Podeaua în carouri e **Baseplate**; pătratul alb cu stea neagră e **SpawnLocation**, locul unde apari când joci |
| 2 | **Play** / **Stop** | Sus, în stânga: **Play** (săgeata albastră) pornește testul, **Stop** (pătratul roșu) te întoarce la editare. Lângă ele e **Pause** și meniul **Test** |
| 3 | **Part** | Tab-ul **Home**, butonul **Part**. Săgeata de lângă el arată formele: Block, Sphere, Wedge, Corner Wedge, Cylinder |
| 4 | **Move** / **Scale** / **Rotate** | Tab-ul **Home**, în stânga: **Move**, **Scale**, **Rotate** |
| 5 | **Anchor** | Tab-ul **Home**, în dreapta: butonul **Anchor** |

**Atenție:** butonul **Run** din dreapta jos **nu** este Play. E o bară de comenzi, pe care azi nu o folosim.

**Panourile din margini:** în stânga vezi **Terrain Editor** și **Toolbox**, în dreapta **Explorer**. Azi nu le folosim. Le poți închide cu **X** ca să ai loc, iar Terrain și Toolbox revin din Home. Explorer ne trebuie la **lecția 2**.

**Încearcă tu — ecran (3 min)**  
- [ ] Găsești pe ecran: Viewport · Play · Stop · Part · Anchor  
- [ ] Spui cu voce tare ce face fiecare  

### 2) Place nou + nume
1. Pornești **Roblox Studio** și te conectezi cu contul tău  
2. Alegi un Place nou de tip **Baseplate**  
3. **File → Save** (salvezi pe contul tău Roblox sau pe calculator, cum îți propune Studio)  
4. Numele: **`Prenume_Nume_M1`**, de exemplu `Ana_Pop_M1`  
   - Pune **prenumele și numele**, nu doar `Ana_M1` și nu `Place1`  
   - Rămâne **`_M1`** tot Modulul 1; la început de modul nou faci o **copie** (`_M2`, `_M3`)  

*Dacă îți strici sau îți pierzi Place-ul, refaci Etapa 1 din această lecție: durează puțin, pentru că acum știi pașii.*

**Încearcă tu — salvare (2 min)**  
- [ ] Place-ul se numește `Prenume_Nume_M1`  
- [ ] Îl găsești din nou în **File → Open**  

### 3) Mutăm, mărim, rotim
Primul tău Part e un **Block**: **Home → Part → Block**. Apoi îl selectezi cu **Select** (săgeata din stânga barei) și un click pe el în Viewport. Cât timp e selectat, are un contur și **unelte** în jur.

| Unealta | Ce vezi pe Part | Ce faci |
|---------|-----------------|---------|
| **Move** | **Săgeți colorate** (roșu, verde, albastru), câte una pe fiecare direcție | Tragi o săgeată: Part-ul **alunecă** pe acea direcție |
| **Scale** | **Mânere** (bulinuțe) pe fețele Part-ului | Tragi un mâner: Part-ul **devine mai mare sau mai mic** pe direcția lui |
| **Rotate** | **Inele colorate** în jurul Part-ului | Tragi pe un inel: Part-ul se **învârte** în jurul acelei axe |

**Culorile sunt aceleași la toate trei:** <span style="color:#D62828;font-weight:700">roșu</span> = stânga și dreapta · <span style="color:#2E9E3E;font-weight:700">verde</span> = sus și jos · <span style="color:#1F6FEB;font-weight:700">albastru</span> = față și spate. Dacă vrei ca Part-ul să urce, tragi de <span style="color:#2E9E3E;font-weight:700">verde</span>.

**Snap:** în bara Home, lângă **Move**, câmpul **„1 studs”** face ca Part-ul să se mute și să crească din **1 în 1 stud**, nu „din ochi”. Un **stud** e unitatea de măsură din Roblox (pătrățelul din carourile Baseplate-ului). Lasă-l pe 1.

**Încearcă tu — mutare, mărire, rotire (6–8 min)**  
- [ ] **Move:** muți Block-ul **4 stud-uri** în față (numeri pătrățelele din Baseplate)  
- [ ] **Scale:** îl faci **de două ori mai lung**, apoi **înapoi** cum era  
- [ ] **Rotate:** îl rotești cu o jumătate de pas, apoi **Ctrl+Z** (pe Mac: **Cmd+Z**) îl aduce înapoi  
- [ ] Faci un cub **8 × 8 × 8** din Block-ul de la început, numărând stud-urile  
- [ ] Apeși **Play** o dată ca să vezi că nu ai stricat nimic, apoi **Stop**  

### 4) Proiectul 1 — Turnul de start
Schița etapei, văzută din lateral. Azi construiești **turnul de start** (stânga). Podul și turnul de ieșire vin la Proiectul 2.

```
       TURN START  plăci 1–6    TURN IEȘIRE
       ┌──────┐   ▭ ▭ ▭ ▭ ▭ ▭   ┌──────┐
      ╱│  8   │                 │  8   │╲
     ╱ │înalt │                 │înalt │ ╲
────╱──┴──────┴─────────────────┴──────┴──╲─────
  rampă                                 rampă
```

**Rampă** = Wedge. **Plăcile** sunt 6, cu goluri de 2 stud-uri între ele. Tot desenul stă pe **Baseplate**.

| Piesă | Formă | Mărime aproximativă (stud-uri) | Unde |
|-------|-------|---------------------------------|------|
| **Turn** | Block | 8 lățime · 8 înălțime · 8 adâncime | lângă SpawnLocation |
| **Decor turn** | Cylinder | 4 lățime · 2 înălțime | pe vârful turnului |
| **Rampă** | Wedge | 8 înălțime · 16 lungime | lipită de turn, urcă spre vârf |

**Cum faci:**
1. Home → **Part** → **Block** (sau folosești cubul 8 × 8 × 8 de la exercițiu)  
2. **Scale**: îl faci 8 × 8 × 8, cu snap-ul pe **1 studs**  
3. **Move**: îl pui lângă SpawnLocation  
4. **Anchor**: apasă-l cu cubul selectat  
5. Home → Part → **Cylinder**, îl mărești puțin, îl pui pe vârf, îl **ancorezi**  
6. Home → Part → **Wedge**, îl **rotești** (**Rotate**) până urcă spre turn, îl **ancorezi**  
7. Roata din colțul Viewport-ului → **Visualization Modes** → bifezi **Anchored parts**: cele trei piese trebuie să apară marcate. Bifa o poți lăsa

**Încearcă tu — turnul (5–8 min)**  
- [ ] Turn + Cylinder + Wedge, toate **ancorate**  
- [ ] Rampa te duce în **Play** până sus, pe turn  

### 5) Play = steagul de test
1. Apeși **Play** (săgeata albastră)  
2. **W, A, S, D** (sau săgețile) te mișcă, **mouse-ul** se uită, **bara de spațiu** sare  
3. Urci rampa, ajungi pe turn  
4. **Stop** (pătratul roșu) te întoarce la editare  

*Play nu salvează.* După ce îți place cum arată, salvezi din nou cu **File → Save**.

**Încearcă tu — Play / Stop (3 min)**  
- [ ] Play, urci pe turn, Stop  
- [ ] Salvezi  

### 6) Proiectul 2 — Podul care cade
Acum construiești **podul** și îl încerci **fără Anchor**, ca să vezi de ce contează.

| Piesă | Formă | Mărime aproximativă (stud-uri) | Cum |
|-------|-------|---------------------------------|-----|
| **Placă** | Block | 4 lățime · 1 înălțime · 4 adâncime | 6 bucăți, la **înălțimea turnului**, cu **gol de 2 stud-uri** între ele |
| **Turn ieșire** | Block + Cylinder + Wedge | ca turnul de start, în oglindă | la capătul podului |

**Cum faci:**
1. Home → Part → Block, îl faci 4 × 1 × 4 și îl pui lipit de turnul de start, **la înălțimea de sus a turnului**  
2. Selectezi placa și o dublezi cu **Ctrl+D** (pe Mac: **Cmd+D**); duplicatul apare peste ea, îl muți cu **Move** cu 6 stud-uri mai departe (4 placă + 2 gol)  
3. Repeți până ai **6 plăci**  
4. **Turnul de ieșire**: la capătul podului, un Block 8 × 8 × 8, un Cylinder pe el și un Wedge care coboară (**Rotate** pe partea cealaltă)  
5. Ancorezi **turnul de ieșire**, cilindrul și rampa de coborâre  
6. Plăcile podului **nu** trebuie să fie ancorate acum. Cu **Anchored parts** bifat, plăcile **nu** trebuie să fie marcate. Dacă sunt marcate, le selectezi pe toate și apeși **Anchor** o dată, ca să se **dezancoreze**  
7. Apeși **Play**. Ce se întâmplă cu podul?  

**Încearcă tu — podul care cade (5 min)**  
- [ ] La **Play** plăcile **cad** pe Baseplate  
- [ ] Apeși **Stop** și podul revine la locul lui  

### 7) Podul care ține
1. Selectezi **toate cele 6 plăci** (ții **Shift** sau **Ctrl** și dai click pe fiecare, sau tragi un dreptunghi cu mouse-ul)  
2. Apeși **Anchor**  
3. **Anchored parts** arată acum toate plăcile marcate  
4. **Play**: urci rampa, treci podul, cobori pe turnul de ieșire, **Stop**  
5. Salvezi  

**Încearcă tu — podul care ține (4 min)**  
- [ ] Treci podul de la un capăt la celălalt, **fără să cazi**  
- [ ] Poți spune în cuvintele tale ce face **Anchor**  

### 8) Numele etapei
1. Selectezi **toate** piesele etapei (turn, rampă, plăci, turn de ieșire)  
2. **Group** (în Home) sau **Ctrl+G**  
3. În **Explorer**, dai dublu click pe numele grupului și scrii **`Etapa1_Pod`**  
4. Salvezi  

*Etapa 2 o vei construi mai departe, la **150 de stud-uri** de aici, spre dreapta (pe direcția roșie), nu lipită de aceasta. Cu **Move** mutăm SpawnLocation lângă etapa pe care o testăm.*

---

## Greșeli frecvente
1. **La Play tot ce construiesc cade** — piesele nu sunt ancorate; selectează-le și apasă **Anchor**.  
2. **Podul nu cade la Play** — plăcile sunt deja ancorate. Cu **Anchored parts** bifat, selectează-le și apasă **Anchor**, până dispar marcajele.  
3. **Nu găsesc Place-ul** — nume greșit sau nesalvat; caută `Prenume_Nume_M1` în **File → Open**.  
4. **Rămân în Play și nu mai pot edita** — apasă **Stop**, nu butonul **Run** de jos.  
5. **Am șters Baseplate-ul** — **Ctrl+Z** (pe Mac: **Cmd+Z**) sau un Place nou și resalvare cu același nume.  
6. **Nu pot sări peste goluri** — golurile sunt de 2 stud-uri, nu mai mari; cu **Move** apropie plăcile.  

---

## De făcut azi — „Etapa1_Pod”
Salvat: `Prenume_Nume_M1`

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Place salvat + **Proiectul 1**: turn de start, Cylinder și rampă, toate ancorate + un tur în Play |
| **Complet** | Minim + **Proiectul 2**: podul de 6 plăci (a căzut când nu era ancorat și ține când e ancorat) + turn de ieșire + etapa grupată ca `Etapa1_Pod` |

Dacă rămâi în urmă: salvează la **Minim**.

### Pasul 1 — Place-ul tău
- [ ] Studio deschis pe Baseplate  
- [ ] Salvat: `Prenume_Nume_M1`  

### Pasul 2 — Turnul de start *(Minim)*
- [ ] Block, Cylinder, Wedge  
- [ ] Toate **ancorate** (bifate în **Anchored parts**)  
- [ ] **Play**: urci pe turn · **Stop** · salvat  

**→ Minim când:** poți urca pe turn din Play, și Place-ul e salvat.

### Pasul 3 — Podul și etapa *(Complet)*
- [ ] 6 plăci, goluri de 2 stud-uri  
- [ ] La **Play** fără Anchor: au căzut  
- [ ] La **Play** cu Anchor: ai trecut podul  
- [ ] Turn de ieșire + rampă  
- [ ] Grupat și denumit **`Etapa1_Pod`**  

**Gata Complet când:** treci de la turnul de start la cel de ieșire, fără să cazi, și Place-ul e salvat.

---

## Bonus ★★★ — Provocare: Parapetul podului
*Doar dacă ai terminat Complet.*

Un pod adevărat are **balustradă**.

- [ ] Pe **fiecare margine** a podului, 6 stâlpi subțiri din **Cylinder** (12 în total), la **distanțe egale**, făcuți cu **Ctrl+D** și **Move** cu snap la 1 stud  
- [ ] Toți stâlpii sunt **ancorați** (verifici cu **Anchored parts**)  
- [ ] Treci podul în Play de **3 ori la rând**, fără să cazi, și apoi **Stop** și salvezi  
- [ ] Stâlpii sunt în același grup `Etapa1_Pod`  

## Recapitulare pe scurt
1. **Viewport** = lumea · **Play** / **Stop** = testezi / editezi  
2. **Part** (Block, Sphere, Wedge, Corner Wedge, Cylinder) = pui forme  
3. **Move** / **Scale** / **Rotate** = le așezi  
4. **Anchor** = stau pe loc; fără el **cad**  
5. **Anchored parts** = vezi ce e ancorat  
6. Etapa 1 e un grup `Etapa1_Pod`; Place-ul `Prenume_Nume_M1`  

## Quiz scurt
- Ce face **Play**? Dar **Stop**?  
- Ce se întâmplă cu plăcile podului fără **Anchor**?  
- Cum vezi care Parts sunt ancorate?  

## Temă
Opțional, acasă (dacă ai Studio): redeschizi `Prenume_Nume_M1` și adaugi la turnul de start un **steag** din 2 Parts (un Cylinder subțire și un Block mic), ancorat. Rămâi în același Place.

---

## Ce urmează — Lecția 2
În **lecția 2** folosești **Explorer** și **Properties**, ca să pui nume pieselor și mărimi exacte, și construiești **Etapa 2**: o casă cu 3 camere.
