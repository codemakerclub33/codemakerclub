# LECȚIA 6 — Labirintul
### Start, Finish și un singur drum corect
**Modulul 1 · Place Builder**  
**Code Maker Club · Roblox Studio**

> Azi construiești **Etapa 6**: un labirint cu **Start** și **Finish** la capete opuse, un singur drum corect și mai multe fundături. Înveți să planifici pe o **grilă** și să calculezi pozițiile pereților.  
> Proiect: **„Etapa6_Labirint”** · Place: `Prenume_Nume_M1` (același ca la L1–L5)

---

## Ce facem azi
La finalul orei ai **Etapa 6**: un labirint de 5 × 5 camere, cu **Start** (SpawnLocation verde) în colțul de nord-vest și **Finish** (Neon, galben) în colțul de sud-est. Între ele există **un singur drum** și patru fundături. Înveți ce face **SpawnLocation**, cum arată un **Start** și un **Finish** clare și cum calculezi poziția unui perete pe o grilă. Obby-ul tău crește cu încă o etapă.

**Notă:** azi tot fără cod.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L5 · deschidem Place-ul `Prenume_Nume_M1` |
| 10–30 | **SpawnLocation**, Start și Finish · grila (**Încearcă tu**) |
| 30–55 | **Proiectul 1** · podea, pereți exteriori, Start, Finish |
| 55–105 | **Proiectul 2** · 10 pereți interiori, un singur drum, grupul |
| 105–120 | Recap, quiz, salvare · **Bonus ★★★** pentru cine termină devreme |

---

## Instrucțiuni noi azi

| Ce folosim | Ce face | Exemplu |
|------------|---------|---------|
| **SpawnLocation** (Explorer, în **Workspace**) | Locul unde apari la **Play** | Verde, `8, 1, 8` |
| **Enabled** (Properties) | Bifat = jucătorul poate apărea aici | Verifici că e bifat |
| **Grila** | Un caroiaj desenat pe hartă, cu **12 stud-uri** pe cameră | Camera 1 e între `-180` și `-168` pe X |
| **Formula pentru linii** | `X = -180 + 12 × k` și `Z = -30 + 12 × k` | `k = 2` → `X = -156` |
| **Shift + click** în **Explorer** | Selectezi o serie de piese de la prima la ultima | Pentru **Ctrl+G** |

---

## Pas cu pas

### 1) Start și Finish
Un obby bun se înțelege fără explicații: jucătorul vede **unde începe** și **unde ajunge**.

1. În **Explorer**, deschide **Workspace** și caută **SpawnLocation** (e singurul și are exact acest nume; nu îl redenumi)  
2. Îl selectezi: în **Properties** verifici că **Enabled** e bifat  
3. **Start** = **SpawnLocation**, verde, **Anchor**, **Size** `8, 1, 8`  
4. **Finish** = un **Block** numit `Finish`, **Neon**, galben, **Anchor**  
5. Start și Finish stau la **capete opuse** ale etapei, ca drumul să fie lung  

Un singur **SpawnLocation** există în Place. De fiecare dată când începi o etapă nouă, îl muți lângă ea. Un Block verde numit „Start” **nu** funcționează: la Play tot pe **SpawnLocation** apari.

**Încearcă tu — Start și Finish (4 min)**  
- [ ] Găsești **SpawnLocation** în Explorer și verifici **Enabled**  
- [ ] Îi dai **Size** `8, 1, 8` și îl mai muți cu **Position** la `-174, 1.5, 24`  
- [ ] Apeși **Play** și apari pe el, apoi **Stop**  

### 2) Grila: planifici înainte să construiești
Labirintul are **5 × 5 camere** de câte **12 stud-uri**, deci **60 × 60** stud-uri. Centrul lui este `-150, 0, 0`.

- Liniile grilei pe **X** sunt la `-180, -168, -156, -144, -132, -120`  
- Liniile grilei pe **Z** sunt la `-30, -18, -6, 6, 18, 30`  
- Formulele: `X = -180 + 12 × k` și `Z = -30 + 12 × k`, cu `k` de la `0` la `5`  

Un **perete** stă pe o linie a grilei. Are **grosime 2**, **înălțime 8** și lungimea unui număr întreg de camere, plus **2** stud-uri, ca să se lipească de pereții de lângă el. Centrul lui e la mijlocul liniei, la **Y = 5**.

Schița labirintului, **văzută de sus** (nord sus):

```
+   +---+---+---+---+
| S             |   |
+---+---+---+   +   +
|   |       |       |
+   +   +   +---+   +
|       |           |
+   +---+---+---+---+
|           |       |
+---+---+   +---+   +
|                 F |
+---+---+---+---+   +
```

**S** = Start, în camera din colțul de nord-vest · **F** = Finish, în camera din colțul de sud-est · **Intrarea** e golul de sus, deasupra lui **S** · **Ieșirea** e golul de jos, sub **F**

**Încearcă tu — drumul pe hârtie (5 min)**  
- [ ] Cu degetul sau cu creionul, mergi pe schiță de la **S** la **F**  
- [ ] Drumul corect trece prin **19 camere** (inclusiv **S** și **F**)  
- [ ] Găsești **4 fundături** (camere de unde nu mai poți merge înainte)  

### 3) Proiectul 1 — Podea, pereți exteriori, Start, Finish
Etapa 6 stă la **150 de stud-uri** de Etapa 1, spre **stânga** pe axa roșie, și la **Z = 0**. Centrul ei e `-150, 0, 0`.

| Nume | Formă | Size | Position | Material | Culoare |
|------|-------|------|----------|----------|---------|
| `PodeaLabirint` | Block | `60, 1, 60` | `-150, 0.5, 0` | Concrete | gri deschis |
| `ZidVest` | Block | `2, 8, 62` | `-180, 5, 0` | Brick | roșu închis |
| `ZidEst` | Block | `2, 8, 62` | `-120, 5, 0` | Brick | roșu închis |
| `ZidNord` | Block | `50, 8, 2` | `-144, 5, 30` | Brick | roșu închis |
| `ZidSud` | Block | `50, 8, 2` | `-156, 5, -30` | Brick | roșu închis |
| `SpawnLocation` (Start) | — | `8, 1, 8` | `-174, 1.5, 24` | — | verde |
| `Finish` | Block | `8, 1, 8` | `-126, 1.5, -24` | Neon | galben |

`ZidNord` și `ZidSud` sunt mai scurți (50, nu 62): lasă **intrarea** (nord, în dreptul lui Start) și **ieșirea** (sud, în dreptul lui Finish), de câte 10 stud-uri.

**Cum faci:**
1. Faci `PodeaLabirint`, o ancorezi, îi dai **Material** și **Color**  
2. Faci `ZidVest` și îl ancorezi; apoi **Ctrl+D** de 3 ori și schimbi **Name**, **Size**, **Position**  
3. **SpawnLocation** îl muți și îi dai **Size**, **Position**, **Color** verde  
4. `Finish`: Block cu **Material** **Neon**, galben, ancorat  
5. **Play**: apari în colțul de nord-vest, între pereți; te plimbi pe podea, treci prin ieșirea din sud. **Stop**. Salvezi  

**Încearcă tu — sala goală (15–25 min)**  
- [ ] 6 piese noi, toate **ancorate**, cu numele din tabel  
- [ ] **SpawnLocation** în colțul de nord-vest, verde  
- [ ] `Finish` în colțul de sud-est, **Neon**  
- [ ] În Play poți merge liber de la Start la Finish, în linie dreaptă, prin sala goală  
- [ ] Salvezi  

### 4) Proiectul 2 — Pereții interiori
Acum faci **un singur drum corect**. Pereții interiori au **înălțimea 8**, **Y = 5**, și stau pe liniile grilei.

| Nume | Tip | Size | Position |
|------|-----|------|----------|
| `Zid1` | pe Z (vertical în schiță) | `2, 8, 14` | `-168, 5, 12` |
| `Zid2` | pe Z | `2, 8, 14` | `-156, 5, 0` |
| `Zid3` | pe Z | `2, 8, 14` | `-144, 5, -12` |
| `Zid4` | pe Z | `2, 8, 14` | `-144, 5, 12` |
| `Zid5` | pe Z | `2, 8, 14` | `-132, 5, 24` |
| `Zid6` | pe X (orizontal în schiță) | `26, 8, 2` | `-168, 5, -18` |
| `Zid7` | pe X | `14, 8, 2` | `-138, 5, -18` |
| `Zid8` | pe X | `50, 8, 2` | `-144, 5, -6` |
| `Zid9` | pe X | `14, 8, 2` | `-138, 5, 6` |
| `Zid10` | pe X | `38, 8, 2` | `-162, 5, 18` |

Toți au **Material** **Brick** și aceeași culoare ca pereții exteriori.

**Cum faci:**
1. Duplici un perete exterior cu **Ctrl+D** sau faci unul nou; îl numești `Zid1` și scrii **Size** și **Position** din tabel  
2. Pentru fiecare perete nou: **Ctrl+D**, apoi **Name**, **Size**, **Position**  
3. Toți **ancorați**  
4. După fiecare 3–4 pereți apeși **Play** și te uiți de sus (**Scroll** înapoi): se vede forma din schiță?  
5. La final, **Play** de la Start: ajungi la Finish **numai** pe drumul corect, iar pe celelalte drumuri dai de pereți  
6. În **Explorer**, selectezi prima piesă a etapei, ții **Shift** și dai click pe ultima: se selectează toate din serie. Verifici că **SpawnLocation** **nu** e selectat (el rămâne în afara grupului; dacă e selectat, **Ctrl+click** pe el îl deselectează)  
7. **Ctrl+G**, redenumești grupul **`Etapa6_Labirint`**  
8. Salvezi  

**Încearcă tu — labirintul (35–45 min)**  
- [ ] 10 pereți interiori, toți ancorați, cu numele din tabel  
- [ ] La Play găsești **un singur drum** de la Start la Finish  
- [ ] Cel puțin **2 fundături** (în schiță sunt 4)  
- [ ] Grup `Etapa6_Labirint` fără **SpawnLocation**  
- [ ] Salvat  

---

## Greșeli frecvente
1. **Un perete e la poziția greșită** — compari cu tabelul; verifici semnul minus la **Position**.  
2. **Am schimbat Size, dar nu Position** — peretele iese din grilă; Position e centrul.  
3. **Între pereți rămân goluri** — lungimea trebuie să fie `12 × camere + 2`.  
4. **Nu apar la Start** — **SpawnLocation** nu e la `-174, 1.5, 24` sau **Enabled** nu e bifat.  
5. **Finish verde** — verde e doar pentru Start; Finish e galben, **Neon**.  
6. **Piesele cad la Play** — lipsește **Anchor**.  
7. **Am pus un Block „Start”** — la Play tot pe **SpawnLocation** apari.  

---

## De făcut azi — „Etapa6_Labirint”
Salvat: `Prenume_Nume_M1`

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | **Proiectul 1:** podea, 4 pereți exteriori cu intrare și ieșire, **Start** (SpawnLocation) și **Finish**, ancorate, un tur în Play |
| **Complet** | Minim + **Proiectul 2:** cei 10 pereți interiori, un singur drum de la Start la Finish, cel puțin 2 fundături, grup `Etapa6_Labirint` |

Dacă rămâi în urmă: salvează la **Minim**.

### Pasul 1 — Start, Finish și grila
- [ ] **Enabled** verificat pe **SpawnLocation**  
- [ ] Drumul de pe schiță parcurs cu degetul (19 camere, 4 fundături)  

### Pasul 2 — Sala goală *(Minim)*
- [ ] Podea, 4 pereți exteriori, Start, Finish  
- [ ] Tur în Play · salvat  

**→ Minim când:** apari la Start și poți ajunge la Finish în linie dreaptă.

### Pasul 3 — Drumul corect *(Complet)*
- [ ] 10 pereți interiori  
- [ ] Un singur drum, 2+ fundături  
- [ ] Grup `Etapa6_Labirint` · salvat  

**Gata Complet când:** treci de la Start la Finish **doar** pe drumul corect.

---

## Bonus ★★★ — Provocare: Două drumuri
*Doar dacă ai terminat Complet.*

Un labirint cu **două drumuri** de lungimi diferite.

- [ ] **Ștergi** `Zid4` (selectezi și **Delete**)  
- [ ] Pe schiță găsești acum **două drumuri** de la Start la Finish: unul lung, de 19 camere, și unul mai scurt, de 15  
- [ ] **Colorezi** podeaua camerelor drumului scurt într-o culoare diferită, cu câte un **Block** subțire (`10, 0.2, 10`, **Y = 1.1**), ca marcaj  
- [ ] Parcurgi **ambele drumuri** în Play, fără să cazi, apoi repari ce nu merge  

## Recapitulare pe scurt
1. **SpawnLocation** = Start; **Enabled** bifat; verde  
2. **Finish** = galben, **Neon**, la capătul opus  
3. **Grila:** `X = -180 + 12 × k`, `Z = -30 + 12 × k`  
4. Perete: lungime `12 × camere + 2`, **Y = 5**  
5. **Shift + click** în Explorer selectează o serie  
6. Etapa 6 e grupul `Etapa6_Labirint`  

## Quiz scurt
- Ce piesă decide unde apari la Play? Ce bifă din **Properties** trebuie să fie pusă?  
- Cum calculezi **Position** pentru un perete pe linia `k = 3`?  
- De ce un perete are lungimea `12 × camere + 2`?  

## Temă
Opțional, acasă (dacă ai Studio): desenează pe hârtie un labirint **4 × 4** cu un singur drum și 3 fundături, apoi calculează **Position** pentru 3 pereți (cu grila de 12 stud-uri). Rămâi în același Place.

---

## Ce urmează — Lecția 7
În **lecția 7** construiești **Etapa 7**: un zgârie-nori cu 10 etaje, făcut cu **Ctrl+D** și formule pentru **Position**, și un obby care urcă pe balcoanele lui.
