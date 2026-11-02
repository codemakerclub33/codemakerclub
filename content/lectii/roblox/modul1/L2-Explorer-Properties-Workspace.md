# LECȚIA 2 — Casa cu trei camere
### Explorer, Properties și mărimi exacte
**Modulul 1 · Place Builder**  
**Code Maker Club · Roblox Studio**

> Azi înveți **lista obiectelor** (Explorer) și **fișa fiecărui obiect** (Properties), apoi construiești **Etapa 2** din Obby-ul tău: o casă cu trei camere, cu piese **numite** și **mărimi exacte**.  
> Proiect: **„Etapa2_Casa”** · Place: `Prenume_Nume_M1` (același ca la L1)

---

## Ce facem azi
La finalul orei ai **Etapa 2**: o casă cu trei camere, făcută din 15 piese cu nume clare, la mărimi și poziții **scrise cu cifre**, nu trase din ochi. Când ai 20 de piese pe scenă, click în Viewport e haos. **Explorer** e lista (ca un dosar), **Properties** e fișa obiectului selectat. Cu ele construiești precis, iar în Modulul 2 vei căuta aceleași nume în cod.

**Notă:** azi tot fără cod. Nu adăugăm Script.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L1 · deschidem Place-ul `Prenume_Nume_M1` |
| 10–35 | Explorer, Workspace, nume, Properties (**Încearcă tu**) |
| 35–70 | **Proiectul 1** · scheletul casei: podea + 6 pereți |
| 70–105 | **Proiectul 2** · pereți despărțitori, mobilă, acoperiș, grup |
| 105–120 | Recap, quiz, salvare · **Bonus ★★★** pentru cine termină devreme |

---

## Instrucțiuni noi azi

| Ce folosim | Ce face | Exemplu |
|------------|---------|---------|
| **Explorer** | Lista obiectelor din lume | Click pe un nume → se selectează și în Viewport |
| **Properties** | Fișa obiectului selectat | Home → butonul **Properties** |
| **Name** | Numele piesei | `PereteSpate` (fără spații, fără diacritice) |
| **Size** | Cât e de mare: lățime, înălțime, adâncime (stud-uri) | `60, 8, 1` |
| **Position** | Unde e pe hartă (stud-uri) | `150, 5, 9.5` |
| **Group** | Strânge piesele într-un singur obiect | Ctrl+G, apoi redenumești grupul |

**X, Y, Z = cele trei culori de la L1:** **X** = stânga–dreapta (săgeata roșie), **Y** = sus–jos (verde), **Z** = față–spate (albastră).

---

## Pas cu pas

### 1) Panourile
1. Deschizi Place-ul `Prenume_Nume_M1` (**File → Open**)  
2. **Explorer** (lista, în dreapta) e deschis. **Properties** îl deschizi din **Home**, butonul **Properties**  
3. Dacă ți-au rămas **Terrain Editor** sau **Toolbox** în stânga, le poți închide cu **X**  

**Încearcă tu — panouri (2 min)**  
- [ ] Vezi Explorer **și** Properties  
- [ ] Dai click pe un Part din Viewport și apare selectat **în Explorer**  

### 2) Workspace
În **Explorer**, desfaci cu săgeata folderul **Workspace**: tot ce e în lume stă acolo.

| Nume | Ce e |
|------|------|
| **Workspace** | Tot ce se vede în lume: Baseplate, SpawnLocation, Parts-urile tale |
| **Lighting**, **Players** etc. | Alte foldere. Azi nu le atingem |

**Încearcă tu — Workspace (2 min)**  
- [ ] Vezi **Baseplate**, **SpawnLocation** și `Etapa1_Pod` în Workspace  
- [ ] Desfaci `Etapa1_Pod` și vezi plăcile, turnurile și rampele din L1  
- [ ] Click pe o piesă **în listă** o selectează și în Viewport  

### 3) Nume clare
1. În Explorer, selectezi o piesă  
2. **Dublu click pe nume** (sau **F2**) și scrii noul nume, apoi **Enter**  
3. **Regula numelor:** doar litere și cifre, **lipite**. Fără spații, fără diacritice (ă, â, î, ș, ț). Scrii `Treapta1`, nu `Treapta 1`, și `PereteStanga`, nu `Perete Stângă`  

*De ce:* în Modulul 2 vei găsi piesele din cod după nume, iar spațiile și diacriticele încurcă.

**Încearcă tu — nume (3 min)**  
- [ ] Redenumești **3** piese din `Etapa1_Pod`: `TurnStart`, `TurnIesire`, `Placa1`  
- [ ] Niciunul nu mai e `Part`  
- [ ] Niciun nume nu are spațiu sau diacritice  

### 4) Properties: Name, Anchored, Size, Position
Selectezi o piesă și în **Properties** vezi:

| Proprietate | Ce face |
|-------------|---------|
| **Name** | Același nume ca în Explorer |
| **Anchored** | Căsuța bifată = piesa nu cade (ca butonul Anchor de la L1) |
| **Size** | Mărimea: trei numere (lățime, înălțime, adâncime) |
| **Position** | Locul: trei numere, **X**, **Y**, **Z** |
| **Orientation** | Rotirea: trei numere, în grade (o folosim din lecția 3) |

**Unde le găsești:** în secțiunea **Transform** vezi **Size**, iar **Position** și **Orientation** sunt sub **CFrame**.

**Cum scrii o valoare:** dai click pe câmpul **Size**, scrii cele trei numere despărțite prin virgulă, de exemplu `8, 8, 8`, și apeși **Enter**. Același lucru la **Position**. (Dacă vezi o săgeată lângă câmp, o poți desface și scrie X, Y, Z separat.) Dacă lista e lungă, caută în Properties după cuvântul **Size** sau **Position**.

**Încearcă tu — Properties (4 min)**  
- [ ] Pe un Part nou: scrii **Size** `4, 1, 8` și **Position** `150, 1, 0`  
- [ ] Îl vezi în Viewport, mai departe de etapa 1  
- [ ] Îl ștergi (**Delete**) sau îl muți, nu-l lași în drum  

### 5) Proiectul 1 — Scheletul casei
Etapa 2 stă la **150 de stud-uri** de etapa 1, spre dreapta (pe direcția roșie). **Podeaua** Baseplate are vârful la nivelul **Y = 0** (ține minte: dacă pe Baseplate vezi altceva în Properties, vârful lui este **Position Y + jumătate din Size Y**).

Schița casei, **văzută de sus**:

```
                PereteSpate
 ┌──────────────┬──────────────┬──────────────┐
 │              │              │              │
 │              │              2              │
 │              │              │              │
 I              │              │              E
 │              │              │              │
 │              1              │              │
 │              │              │              │
 └──────────────┴──────────────┴──────────────┘
                PereteFata
    Camera 1       Camera 2       Camera 3
```

**I** = intrare · **E** = ieșire · **1** = ușa 1 (mai spre față) · **2** = ușa 2 (mai spre spate)

Piese pentru **Proiectul 1** (Size și Position, în stud-uri):

| Nume | Size | Position |
|------|------|----------|
| `PodeaCasa` | `60, 1, 20` | `150, 0.5, 0` |
| `PereteSpate` | `60, 8, 1` | `150, 5, 9.5` |
| `PereteFata` | `60, 8, 1` | `150, 5, -9.5` |
| `CapatStangaN` | `1, 8, 7` | `120.5, 5, 5.5` |
| `CapatStangaS` | `1, 8, 7` | `120.5, 5, -5.5` |
| `CapatDreaptaN` | `1, 8, 7` | `179.5, 5, 5.5` |
| `CapatDreaptaS` | `1, 8, 7` | `179.5, 5, -5.5` |

**Cum faci repede:**
1. Home → **Part** → **Block** și îl faci `PodeaCasa`: **Name**, **Size**, **Position**, **Anchored** bifat  
2. Pentru fiecare piesă următoare: selectezi o piesă gata făcută, **Ctrl+D**, apoi schimbi **Name**, **Size**, **Position** (Anchored rămâne bifat)  
3. Între `CapatStangaN` și `CapatStangaS` rămâne un **gol de 4 stud-uri**: e **intrarea**. La fel la dreapta: e **ieșirea**  
4. Mută **SpawnLocation** în fața intrării (**Position** `110, 0.5, 0`), ca să apari lângă casă, nu la etapa 1  
5. Apeși **Play**, intri pe intrare și ieși pe ieșire; **Stop**; salvezi  

**Încearcă tu — scheletul (20–25 min)**  
- [ ] 7 piese, toate **ancorate**, toate cu nume din tabel  
- [ ] Treci prin casă în **Play**, de la intrare la ieșire  
- [ ] Salvezi  

### 6) Proiectul 2 — Camerele, mobila, acoperișul
**Pereți despărțitori** (cu goluri de 4 stud-uri, ca să treci prin ele):

| Nume | Size | Position |
|------|------|----------|
| `Div1N` | `1, 8, 11` | `140, 5, 3.5` |
| `Div1S` | `1, 8, 3` | `140, 5, -7.5` |
| `Div2N` | `1, 8, 3` | `160, 5, 7.5` |
| `Div2S` | `1, 8, 11` | `160, 5, -3.5` |

Ușile **nu sunt una în fața celeilalte**: **ușa 1** e mai spre **față** (golul între `Z = -6` și `Z = -2`), iar **ușa 2** mai spre **spate** (între `Z = 2` și `Z = 6`). Așa traseul face un **zigzag**.

**Mobila din camera 2** (trei obstacole pe care le sari, una după alta):

| Nume | Size | Position |
|------|------|----------|
| `Canapea` | `6, 2, 3` | `146, 2, 0` |
| `Masa` | `4, 3, 4` | `152, 2.5, 0` |
| `Dulap` | `3, 3, 3` | `157, 2.5, 0` |

**Acoperișul:**

| Nume | Size | Position |
|------|------|----------|
| `Acoperis` | `60, 1, 20` | `150, 9.5, 0` |

1. Faci cele 8 piese, la fel ca la Proiectul 1 (**Ctrl+D**, apoi **Name**, **Size**, **Position**), toate **ancorate**  
2. **Play**: intri, treci prin ușa 1 (mai spre față), sari peste Canapea, Masă și Dulap, treci prin ușa 2 (mai spre spate), ieși. **Stop**  
3. Selectezi **toate** cele 15 piese (în Explorer, ții **Shift** și dai click pe prima și pe ultima, sau tragi un dreptunghi cu mouse-ul în Viewport) și apeși **Ctrl+G** (Group)  
4. În Explorer, redenumești grupul: **`Etapa2_Casa`**  
5. Salvezi  

**Încearcă tu — casa completă (20–30 min)**  
- [ ] 15 piese, toate ancorate, toate cu nume din tabele  
- [ ] Treci de la intrare la ieșire, sărind peste mobilă, fără să cazi prin pereți  
- [ ] Grup numit `Etapa2_Casa`  
- [ ] Salvat  

---

## Greșeli frecvente
1. **Nu am Explorer sau Properties** — Explorer e deschis din start; Properties îl deschizi din butonul **Properties** din **Home**.  
2. **Am selectat Lighting sau altceva** — te întorci în **Workspace**.  
3. **Am redenumit Baseplate-ul** — **Ctrl+Z** (pe Mac: **Cmd+Z**). Baseplate rămâne **Baseplate**; **SpawnLocation** rămâne și el **SpawnLocation**.  
4. **Nume cu spațiu sau diacritice** (`Treapta 1`, `Perete Stângă`) — scrie lipit și fără diacritice: `Treapta1`, `PereteStanga`.  
5. **Piesa a zburat sau a dispărut** — ai scris o valoare greșită la **Position**; **Ctrl+Z** sau scrii din nou valoarea din tabel.  
6. **Treci prin pereți** — piesa nu are **Anchored** sau mărimea e greșită; compară cu tabelul.  
7. **Piesele sunt cu 0,5 prea sus sau prea jos** — ai greșit **Y** la **Position**; Y = jumătate din înălțime + vârful piesei de dedesubt.  

---

## De făcut azi — „Etapa2_Casa”
Salvat: `Prenume_Nume_M1`

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | **Proiectul 1:** podea + 6 pereți cu nume și mărimi din tabel, ancorate, și un tur în Play de la intrare la ieșire |
| **Complet** | Minim + **Proiectul 2:** 4 pereți despărțitori, 3 mobile, acoperiș, grup `Etapa2_Casa` și un tur prin toată casa |

Dacă rămâi în urmă: salvează la **Minim**.

### Pasul 1 — Panouri și nume
- [ ] Explorer și Properties vizibile  
- [ ] 3 piese din `Etapa1_Pod` redenumite fără spații și diacritice  

### Pasul 2 — Scheletul *(Minim)*
- [ ] 7 piese (podea + 6 pereți), ancorate, cu nume  
- [ ] **Play**: intri și ieși prin golurile pereților  

**→ Minim când:** poți intra pe intrare și ieși pe ieșire în Play.

### Pasul 3 — Casa completă *(Complet)*
- [ ] 4 despărțitori  
- [ ] Canapea, Masă, Dulap  
- [ ] Acoperiș  
- [ ] Grup `Etapa2_Casa`  
- [ ] Tur prin toată casa  

**Gata Complet când:** treci prin cele trei camere și sari mobila fără să cazi, iar în Explorer nu vezi nicio piesă numită `Part`.

---

## Bonus ★★★ — Provocare: Casa cu cinci camere
*Doar dacă ai terminat Complet.*

Casa ta crește.

- [ ] Casa are **5 camere** (lungime de **100 de stud-uri**), cu goluri de 4 stud-uri între ele  
- [ ] **Toate** piesele au nume clare: **zero** piese numite `Part` (verifici în Explorer)  
- [ ] Ai calculat singur **Size** și **Position** pentru piesele noi  
- [ ] Parcurgi casa de la intrare la ieșire în **sub 40 de secunde**, fără să cazi  

## Recapitulare pe scurt
1. **Explorer** = lista · **Properties** = fișa piesei  
2. **Workspace** = tot ce e în lume  
3. Nume: litere și cifre lipite, fără spații și fără diacritice  
4. **Size** = cât e de mare · **Position** = unde e (X, Y, Z)  
5. **Ctrl+D** dublează, **Ctrl+G** grupează  
6. Etapa 2 e grupul `Etapa2_Casa`  

## Quiz scurt
- Ce arată **Explorer**? Dar **Properties**?  
- De ce nu punem spații sau diacritice în nume?  
- Ce înseamnă **X**, **Y** și **Z** la **Position**?  

## Temă
Opțional, acasă (dacă ai Studio): în `Etapa2_Casa` adaugă o **fereastră**, adică un gol în `PereteSpate`. Împarte peretele în două piese cu nume clare și mărimi calculate de tine. Rămâi în același Place.

---

## Ce urmează — Lecția 3
În **lecția 3** lucrezi cu formele (Block, Cylinder, Wedge) și construiești **Etapa 3**: un castel cu ziduri, scară, rampă și turn.
