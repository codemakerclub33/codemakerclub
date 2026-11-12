# LECȚIA 2 — Peisajul din grilă
### Selectare isteață
**Modulul 2 · Modelare în Edit Mode**  
**Code Maker Club · Mesh Modeler**

> Cine selectează repede, modelează repede. Azi înveți **șase metode de selectare** care îți economisesc zeci de click-uri, iar cu ele ridici dealuri, munți și văi dintr-o simplă grilă.  
> Proiect: **„Peisajul din grilă”** · `Prenume_Nume_B2_L02.blend`

---

## Ce facem azi
La finalul orei ai un **peisaj 3D** cu dealuri, un munte, o vale și un lac, făcut dintr-o singură grilă. Un model are sute de piese. Dacă le selectezi pe rând, pierzi mult timp. Metodele isteațe fac același lucru dintr-o singură mișcare.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L1 |
| 10–25 | Grila de lucru |
| 25–50 | Box select, Shift, A / Alt + A, X-ray |
| 50–75 | Bucla de muchii, selectare legată, inversare |
| 75–105 | Peisajul din grilă |
| 105–120 | Recap, quiz, galerie |

**Ce ai nevoie:** Blender 4.2 · scena de start (cubul de start îl ștergi)

---

## Instrucțiuni noi azi

| Ce folosim | Ce face | Exemplu |
|------------|---------|---------|
| **Box select** (tragi un dreptunghi) | Selectează un grup de piese | un deal întreg |
| **Alt + click pe o muchie** | Selectează o **buclă** întreagă | un rând de pe grilă |
| **L** (mouse peste piesă) | Selectează tot ce e **legat** de ea | o casă, fără peisaj |
| **Ctrl + I** | **Inversează** selecția | „tot, în afară de deal” |
| *Recap:* **Alt + Z** | X-ray: vezi și prin obiect | selectezi și piesele din spate |
| *Recap:* **A / Alt + A** | Selectează tot / nimic | start curat |

---

## Pas cu pas

### 1) Grila de lucru
1. **File → New → General**, apoi șterge cubul (**X → Delete**).  
2. **Shift + A → Mesh → Grid.**  
3. În panoul din stânga-jos (**Adjust Last Operation**) pune **X Subdivisions = 10**, **Y Subdivisions = 10**, **Size = 10**.  
4. **Tab** (Edit Mode), alegi **Vertex** din butoanele din antet și apeși **7** (vedere de sus).

**Încearcă tu — grila (3 min)**  
- [ ] Vezi o plasă de pătrate, în Edit Mode, din vedere de sus  
- [ ] Ai apăsat **A** și toată grila s-a făcut portocalie, apoi **Alt + A** a deselectat-o  

### 2) Box select și Shift + click
- **Tragi** un dreptunghi gol cu mouse-ul: selectezi tot ce e în el (**Box select**).  
- **Shift + click** adaugă o piesă la selecție sau o scoate din ea.  
- **Alt + A** deselectează tot: așa începi o selecție nouă.

> Dacă nu merge tragerea, apasă **T** (bara de unelte din stânga) și alege instrumentul **Select Box**. Poți apăsa și **B**, apoi tragi.

**Încearcă tu — Box select (5 min)**  
- [ ] Selectezi cu Box un grup de vârfuri din mijloc  
- [ ] Cu **Shift + click** scoți două vârfuri din selecție  
- [ ] Cu **Alt + A** o iei de la capăt  

### 3) Un deal, un munte, o vale
1. Selectează cu Box un grup mare de vârfuri din mijloc. **G Z 2 Enter**: un **deal**.  
2. **Alt + A**. Selectează o zonă mică și **G Z 4 Enter**: un **munte**.  
3. **Alt + A**. Selectează o zonă din colț și **G Z −1 Enter**: o **vale**.

Ca să vezi relieful, rotește vederea ca în Modulul 1. Dealurile au colțuri ascuțite, pentru că muți puține vârfuri. În lecția 6 înveți o metodă care le face rotunde.

**Încearcă tu — relieful (5 min)**  
- [ ] Ai un deal, un munte și o vale  
- [ ] Le vezi din lateral (**3**) și din față (**1**)  
- [ ] Anulezi un pas cu **Ctrl + Z** și îl refaci cu valori mai mari  

### 4) X-ray: prinzi și ce nu se vede
**Box select** selectează doar ce **se vede** din vederea ta. Ca să prinzi și piesele din spate, apasă **Alt + Z**. În vederea de sus a unei grile plate se vede totul, dar când privești din lateral sau lucrezi pe munți, X-ray contează.

**Încearcă tu — X-ray (3 min)**  
- [ ] Rotești vederea oblic, fără X-ray, tragi un dreptunghi peste munte și vezi în contor câte vârfuri ai prins  
- [ ] Pornești **Alt + Z**, tragi același dreptunghi și numărul crește  

### 5) Bucla de muchii (Alt + click)
**Alt + click pe o muchie** selectează tot rândul de muchii, până la capătul grilei.

1. Alegi modul **Edge**.  
2. **Alt + click** pe o muchie din mijlocul unei linii.  
3. **G Z 1 Enter**: ridici un **zid** prin peisaj. Apoi **Ctrl + Z**.  
4. Încerci pe o linie în cealaltă direcție.

> **Alt + click** trebuie dat pe o **muchie**, nu pe un vârf.
>
> **Laptop cu Emulate 3 Button Mouse?** Atunci **Alt + click** rotește vederea. Selectează o muchie cu un click simplu și alege din meniul de sus **Select → Select Loops → Edge Loops**: se selectează tot rândul.

**Încearcă tu — bucla (4 min)**  
- [ ] O linie întreagă a grilei este selectată cu un singur click  
- [ ] Ai coborât o linie cu **G Z −0.5** și ai făcut un șanț  

### 6) L: selectăm ce e legat
Un model poate avea mai multe **piese separate** în același obiect. Ca să vezi cum merge **L**:
1. **Alt + A**, apoi **Shift + A → Mesh → Cube**. Cubul apare **în același obiect**, ca o piesă separată.  
2. Mută-l cu **G** într-un loc liber (cubul este selectat).  
3. **Alt + A**, mouse peste cub, apasă **L**: se selectează doar cubul. Mouse peste grilă și **L**: se selectează grila întreagă.  
4. Selectează cubul cu **L** și mută-l cu **G X 2**: casa se mută, peisajul rămâne.

**Încearcă tu — L (4 min)**  
- [ ] Cu **L** pe cub se selectează doar cubul  
- [ ] Cu **L** pe grilă se selectează doar grila  
- [ ] Ai mutat casa fără să atingi peisajul  

### 7) Ctrl + I: inversăm selecția
**Ctrl + I** schimbă ce e selectat cu ce nu e selectat. E util când e mai ușor să alegi ce **nu** vrei.

1. Selectează cubul (casa) cu **L**.  
2. **Ctrl + I**: acum e selectat tot, în afară de casă.  
3. Cu peisajul selectat, **G Z −0.3 Enter**: peisajul coboară puțin, iar casa rămâne pe loc, cu o fundație la vedere.

**Încearcă tu — inversarea (3 min)**  
- [ ] Ai selectat o piesă, apoi **Ctrl + I** a ales restul  
- [ ] Ai mutat restul, iar piesa rămasă a stat pe loc  

### 8) Complet — „Peisajul din grilă”
Pune totul laolaltă:
1. **Trei dealuri** de înălțimi diferite (**Box select**, **G Z**).  
2. Un **munte** în fundal.  
3. O **vale** care trece de-a lungul grilei: **Alt + click** pe o linie din mijloc, coborâtă cu **G Z −1**.  
4. O **casă** (cubul) pusă pe un deal, mutată cu **L**.  
5. Ieși cu **Tab**, click dreapta pe obiect, **Shade Smooth**.  
6. Un **lac**: **Shift + A → Mesh → Plane** în Object Mode, scalat cu **S 4**, așezat la **Z = −0.7**, ca să umple valea.

**Gata când:**  
- [ ] Peisajul are cel puțin 3 dealuri, un munte și o vale  
- [ ] Casa se mută separat, cu **L**  
- [ ] Lacul stă în vale și nu iese deasupra dealurilor  
- [ ] Obiectele au nume: `Peisaj`, `Lac`  

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| Nu merge Box select | Instrumentul nu e activ | **T** și alegi **Select Box**, sau **B** |
| Se selectează doar piese din față | X-ray este oprit | **Alt + Z** |
| **Alt + click** nu face bucla | Ai dat click pe vârf sau pe față, sau Alt rotește vederea (Emulate 3 Button Mouse) | Click pe **muchie**, în modul Edge; sau **Select → Select Loops → Edge Loops** |
| Selectezi prea mult | Selecția veche a rămas | **Alt + A** și reiei |
| Peisajul e plat | Mutarea e prea mică | Scrie numere mai mari |
| **L** selectează totul | Piesa nu e separată de restul | Adaugi piesa cu **Shift + A** în Edit Mode |

---

## De făcut azi — „Peisajul din grilă”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Grilă 10 × 10 și 2 dealuri făcute cu Box select |
| **Complet** | Minim + buclă de muchii, **L**, **Ctrl + I**, munte, vale, casă și lac |

### Pasul 1 — Minim
- [ ] Am o grilă 10 × 10  
- [ ] Am făcut 2 dealuri cu Box select  

**→ Minim când:** un coleg recunoaște ce ai făcut, fără explicații.

### Pasul 2 — Complet
- [ ] Am folosit **Alt + click**, **L** și **Ctrl + I**  
- [ ] Peisajul are munte, vale, casă și lac  
- [ ] Numele `B2_L02` e corect

---

## Bonus ★★★ — Provocare: Insula
*Doar dacă ai terminat Complet.*

Transformă peisajul într-o **insulă** înconjurată de apă.

- [ ] Selectezi cu **Alt + click** (sau **Select Loops**) buclele din marginea grilei și le cobori cu **G Z −1.5**: marginile intră în apă  
- [ ] Cu un plan mare, pus la **Z = −0.7**, apa înconjoară insula  
- [ ] Pe insulă ai munte, drum, cel puțin 3 case și un lac  
- [ ] Obiectele au nume clare  

---

## Recapitulare pe scurt
1. **Box** pentru grupuri · **Shift + click** pentru ajustări  
2. **Alt + click** pe muchie = buclă · **L** = piese legate · **Ctrl + I** = invers  
3. **Alt + Z** vede și prin obiect  
4. **A / Alt + A** = tot / nimic

## Mai departe *(opțional)*
Privește un peisaj real, pe fereastră sau într-o poză. Care sunt „dealurile”? Ce ai selecta pentru a le face?

## Quiz scurt
- Ce face **Alt + click** pe o muchie?  
- La ce folosește **L**?  
- Cum inversezi selecția?  
- De ce ai nevoie uneori de X-ray?

## Temă
Alege un loc cunoscut (o curte, un parc, o piață) și **refă-l ca relief în Blender**, pe o grilă.
- Schițează pe foaie unde sunt dealurile, apa și zonele plate.
- Construiește relieful cu cel puțin două metode de selectare din lecție (box, buclă sau `L`) și notează-le pe foaie.
- Dă fiecărei piese un nume (`F2`) și salvează fișierul `Prenume_Nume_B2_L02_Tema.blend`.
