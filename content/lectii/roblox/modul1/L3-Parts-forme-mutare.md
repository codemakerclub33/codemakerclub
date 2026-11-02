# LECȚIA 3 — Castelul
### Forme, rotire și mărimi exacte
**Modulul 1 · Place Builder**  
**Code Maker Club · Roblox Studio**

> Azi folosești toate cele 5 forme de Part (**Block, Sphere, Wedge, Corner Wedge, Cylinder**) și construiești **Etapa 3**: un castel cu turnuri, ziduri, scară, rampă și steag, pe care îl și parcurgi.  
> Proiect: **„Etapa3_Castel”** · Place: `Prenume_Nume_M1` (același ca la L1 și L2)

---

## Ce facem azi
La finalul orei ai **Etapa 3**: un castel cu patru turnuri rotunde, ziduri și o poartă. Treci prin poartă, urci pe o **scară** de 5 trepte, mergi pe zid, cobori pe o **rampă** și ajungi la **steag**. Înveți să alegi forma potrivită (Cylinder pentru turn, Wedge pentru rampă) și să o **rotești** cu cifre, din **Orientation**. Obby-ul tău crește cu încă o etapă.

**Notă:** azi tot fără cod.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L2 · deschidem Place-ul `Prenume_Nume_M1` |
| 10–30 | Cele 5 forme · Orientation (**Încearcă tu**) |
| 30–70 | **Proiectul 1** · curtea, 4 turnuri, 5 ziduri |
| 70–105 | **Proiectul 2** · scara, rampa, steagul, grupul |
| 105–120 | Recap, quiz, salvare · **Bonus ★★★** pentru cine termină devreme |

---

## Instrucțiuni noi azi

| Ce folosim | Ce face | Exemplu |
|------------|---------|---------|
| **Part → săgeata de lângă el** | Alegi forma: Block, Sphere, Wedge, Corner Wedge, Cylinder | Home → **Part** (săgeata) → **Cylinder** |
| **Orientation** (Properties) | Cum e rotită piesa, în grade: `X, Y, Z` | `0, 0, 90` |
| **Rotate** | Rotește piesa cu inelele (din 45 în 45 de grade) | Tragi pe inelul verde |
| **Size la Cylinder** | Primul număr e **lungimea cilindrului** | `16, 10, 10` = înalt 16, gros 10 |
| **Wedge** | O piesă cu pantă, pentru rampe. La `Orientation 0, 0, 0` partea **înaltă** e spre Z mic (spre față); cu `0, 180, 0` se întoarce | `6, 10, 16` |

---

## Pas cu pas

### 1) Cele 5 forme
În **Home**, lângă **Part**, apasă **săgeata mică**: apare lista cu cele 5 forme.

| Formă | Seamănă cu | O folosim pentru |
|-------|------------|------------------|
| **Block** | cutie | podele, ziduri, trepte |
| **Cylinder** | cilindru | turnuri, stâlpi |
| **Wedge** | felie de tort | rampe |
| **Corner Wedge** | colț de felie | acoperișuri, colțuri |
| **Sphere** | minge | ornamente |

**Încearcă tu — formele (3 min)**  
- [ ] Pui pe scenă câte una din cele 5 forme  
- [ ] Le ancorezi pe toate (**Anchor**)  
- [ ] Le ștergi cu **Delete**, în afară de **Cylinder**  

### 2) Orientation: rotire cu cifre
Un **Cylinder** nou apare de obicei **în picioare**, iar în **Properties**, la **Orientation**, vezi `0, 0, 90`. Lungimea lui e pe axa **X**, rotită cu **90 de grade** în jurul axei Z. Cu `0, 0, 0` cilindrul stă **culcat**.

1. Selectezi Cylinder-ul și te uiți la **Orientation**  
2. Scrii `0, 0, 0` și apeși **Enter**: acum e **culcat** (bun pentru o bară sau o buturugă)  
3. Scrii la loc `0, 0, 90`: e din nou **în picioare** (bun pentru un turn sau un stâlp)  
4. **Size** rămâne ca înainte: primul număr e **lungimea** (înălțimea turnului după rotire), următoarele două sunt **grosimea**  

*Rotate din bară* face același lucru cu inelele, din 45 în 45 de grade. **Orientation** îți dă exact unghiul dorit.

**Încearcă tu — Cylinder în picioare și culcat (4 min)**  
- [ ] Cylinder cu **Size** `16, 10, 10`  
- [ ] **Orientation** `0, 0, 0`: culcat; apoi `0, 0, 90`: în picioare  
- [ ] Stă în picioare, înalt de 16 stud-uri  
- [ ] Îl muți cu **Position** la `150, 9, 150` și îl ancorezi  

### 3) Proiectul 1 — Curtea, turnurile, zidurile
Etapa 3 stă la **150 de stud-uri** de Etapa 2, pe direcția **albastră** (Z), adică la **Z = 150**. Castelul e centrat la `150, 0, 150` și are **60 × 60** stud-uri.

Schița castelului, **văzută de sus** (nu e la scară):

```
        ZidNord (lat, cu pasarelă)
 (T)══════════════════════════════(T)
  ║        1  2  3  4  5  RRR      ║
  ║                       RRR      ║
  ║                                ║
V ║               F                ║ E
  ║                                ║
  ║                                ║
 (T)═════════════    ═════════════(T)
                  P
```

**T** = turn (Cylinder) · **1–5** = trepte · **R** = rampă (Wedge) · **F** = steag · **P** = poartă (gol de 8 stud-uri) · **V / E** = ZidVest / ZidEst

**Piesele din Proiectul 1** (Size și Position, în stud-uri):

| Nume | Formă | Size | Position | Orientation |
|------|-------|------|----------|-------------|
| `CurteCastel` | Block | `60, 1, 60` | `150, 0.5, 150` | — |
| `TurnSV` | Cylinder | `16, 10, 10` | `125, 9, 125` | `0, 0, 90` |
| `TurnSE` | Cylinder | `16, 10, 10` | `175, 9, 125` | `0, 0, 90` |
| `TurnNV` | Cylinder | `16, 10, 10` | `125, 9, 175` | `0, 0, 90` |
| `TurnNE` | Cylinder | `16, 10, 10` | `175, 9, 175` | `0, 0, 90` |
| `ZidNord` | Block | `40, 10, 6` | `150, 6, 172` | — |
| `ZidVest` | Block | `2, 10, 40` | `125, 6, 150` | — |
| `ZidEst` | Block | `2, 10, 40` | `175, 6, 150` | — |
| `ZidSudStanga` | Block | `16, 10, 2` | `138, 6, 125` | — |
| `ZidSudDreapta` | Block | `16, 10, 2` | `162, 6, 125` | — |

**Cum faci repede:**
1. Faci prima piesă din fiecare formă, o ancorezi, o numești  
2. Pentru celelalte: selectezi piesa gata, **Ctrl+D**, apoi **Name**, **Position**, **Size** (și **Orientation** la turnuri)  
3. Între `ZidSudStanga` și `ZidSudDreapta` rămâne un gol de **8 stud-uri**: e **poarta**  
4. Mută **SpawnLocation** (Move sau **Position** `150, 0.5, 105`) în **fața porții**, ca să apari lângă castel, nu la etapa 1  
5. **Play**: intri pe poartă și te plimbi prin curte. **Stop**. Salvezi  

**Încearcă tu — castelul gol (20–30 min)**  
- [ ] 10 piese, toate **ancorate**, toate cu nume din tabel  
- [ ] 4 turnuri **în picioare**, înalte de 16 stud-uri  
- [ ] Intri prin poartă în Play și vezi că zidurile te opresc  
- [ ] Salvezi  

### 4) Proiectul 2 — Scara, rampa, steagul
**Obby-ul castelului:** intri pe poartă → urci **scara** de 5 trepte → mergi pe **pasarela** de pe `ZidNord` → cobori pe **rampă** → ajungi la **steag**.

**Scara** (5 trepte; fiecare e mai înaltă cu 2 stud-uri):

| Nume | Size | Position |
|------|------|----------|
| `Treapta1` | `6, 2, 4` | `135, 2, 167` |
| `Treapta2` | `6, 4, 4` | `141, 3, 167` |
| `Treapta3` | `6, 6, 4` | `147, 4, 167` |
| `Treapta4` | `6, 8, 4` | `153, 5, 167` |
| `Treapta5` | `6, 10, 4` | `159, 6, 167` |

**Rampa** (Wedge) și **steagul:**

| Nume | Formă | Size | Position | Orientation |
|------|-------|------|----------|-------------|
| `Rampa` | Wedge | `6, 10, 16` | `167, 6, 161` | `0, 180, 0` |
| `SteagTij` | Cylinder | `12, 1, 1` | `150, 7, 150` | `0, 0, 90` |
| `SteagBila` | Sphere | `3, 3, 3` | `150, 13.5, 150` | — |

**Cum faci:**
1. **Treptele:** o dublezi cu **Ctrl+D** și schimbi **Size** și **Position** după tabel. **Treapta5** se lipește de `ZidNord` și are vârful la același nivel cu pasarela  
2. **Rampa:** Wedge, **Size** și **Position** din tabel. Partea **înaltă** trebuie să fie lipită de `ZidNord`, iar panta să **coboare spre poartă**. Cu **Orientation** `0, 180, 0`, partea înaltă ajunge spre Z mare, lângă zid. Dacă panta iese totuși invers, scrii `0, 0, 0`  
3. **Steagul:** un Cylinder subțire în picioare și o Sphere deasupra  
4. Toate **ancorate**  
5. **Play**: poartă → scară → pasarelă (mergi spre rampă) → rampă → steag. **Stop**  
6. Selectezi **toate** cele 18 piese și **Ctrl+G**; redenumești grupul **`Etapa3_Castel`**  
7. Salvezi  

**Încearcă tu — obby-ul castelului (15–25 min)**  
- [ ] 8 piese noi (5 trepte, rampă, 2 la steag), toate ancorate  
- [ ] Parcurgi de la poartă la steag, **fără să cazi**  
- [ ] Grupat și numit `Etapa3_Castel`  
- [ ] Salvat  

---

## Greșeli frecvente
1. **Cylinder-ul e culcat** — **Orientation** `0, 0, 90` (în picioare).  
2. **Turnul e prea lat sau prea scund** — la Cylinder, primul număr din **Size** e lungimea.  
3. **Piesele cad la Play** — lipsește **Anchor**.  
4. **Rampa urcă invers** — schimbi **Orientation** între `0, 180, 0` și `0, 0, 0`.  
5. **Nu poți urca pe pasarelă** — Treapta5 trebuie să aibă vârful la același nivel cu `ZidNord`.  
6. **Treci prin ziduri** — o piesă nu e ancorată, sau mărimea e greșită; compară cu tabelul.  
7. **Nume `Part` sau cu spațiu** — redenumești ca la L2, fără spații și fără diacritice.  

---

## De făcut azi — „Etapa3_Castel”
Salvat: `Prenume_Nume_M1`

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | **Proiectul 1:** curte + 4 turnuri în picioare + 5 ziduri, ancorate, cu nume, și un tur prin poartă |
| **Complet** | Minim + **Proiectul 2:** scara de 5 trepte, rampa, steagul, grup `Etapa3_Castel`, parcurs de la poartă la steag |

Dacă rămâi în urmă: salvează la **Minim**.

### Pasul 1 — Formele și Orientation
- [ ] Ai pus cele 5 forme  
- [ ] Un Cylinder stă în picioare (`0, 0, 90`)  

### Pasul 2 — Castelul gol *(Minim)*
- [ ] 10 piese ancorate, cu nume  
- [ ] Poarta de 8 stud-uri  
- [ ] Tur în Play · salvat  

**→ Minim când:** intri prin poartă și ești închis între ziduri.

### Pasul 3 — Scară, rampă, steag *(Complet)*
- [ ] 5 trepte · rampă · steag  
- [ ] Parcurs de la poartă la steag  
- [ ] Grup `Etapa3_Castel` · salvat  

**Gata Complet când:** treci de la poartă la steag fără să cazi.

---

## Bonus ★★★ — Provocare: Cupolele simetrice
*Doar dacă ai terminat Complet.*

- [ ] Câte o **cupolă** (**Sphere**) pe fiecare dintre cele 4 turnuri, **ancorată** și numită `Cupola1` … `Cupola4`  
- [ ] Cupolele sunt **simetrice**: centrul castelului e `150, 150`, iar fiecare cupolă e la **25 de stud-uri** pe X și la **25** pe Z față de el. Verifici în **Position**  
- [ ] Un **Corner Wedge** pe fiecare capăt al pasarelei, ca ornament  
- [ ] Treci castelul în Play de **3 ori la rând**, de la poartă la steag, fără să cazi  

## Recapitulare pe scurt
1. **Block, Cylinder, Wedge, Corner Wedge, Sphere** = cele 5 forme  
2. **Orientation** = rotire cu cifre; Cylinder în picioare = `0, 0, 90`  
3. La **Cylinder**, primul număr din **Size** e lungimea  
4. **Wedge** = rampă  
5. **Ctrl+D** dublează, **Ctrl+G** grupează  
6. Etapa 3 e grupul `Etapa3_Castel`  

## Quiz scurt
- Ce formă alegi pentru un turn? Dar pentru o rampă?  
- Cum pui un Cylinder în picioare?  
- Ce înseamnă primul număr din **Size** la un Cylinder?  

## Temă
Opțional, acasă (dacă ai Studio): în `Etapa3_Castel` adaugă un **pod** peste curte, din 3 plăci, între două ziduri. Folosește **Block**, nume clare și mărimi calculate de tine. Rămâi în același Place.

---

## Ce urmează — Lecția 4
În **lecția 4** folosești **Material** și **Color** și construiești **Etapa 4**: o parcare cu rampe, marcaje și platforme.
