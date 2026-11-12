# LECȚIA 10 — Raftul cu figurine
### Proiect final Modulul 2
**Modulul 2 · Modelare în Edit Mode**  
**Code Maker Club · Mesh Modeler**

> Ai modelat un robot, o cană, un fluture, un brad și o vulpe. Azi le aduci pe toate într-un **singur fișier**, construiești un **raft** din care să le arăți și le randezi ca într-o vitrină. Acesta e finalul Modulului 2!  
> Proiect: **„Raftul cu figurine”** · `Prenume_Nume_B2_L10.blend` + `.png`

---

## Ce facem azi
La finalul orei ai un **raft cu trei rafturi** în care stau **6 figurine** făcute de tine în acest modul, cu lumină și o imagine randată. Înveți să aduci obiecte din alte fișiere cu **Append**, să le pui la aceeași mărime și să le așezi.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L9: Mirror și Extrude |
| 10–30 | Raftul din Edit Mode |
| 30–60 | Aducem figurinele (Append) |
| 60–85 | Mărime și așezare |
| 85–105 | Lumină, cameră, randare |
| 105–120 | Verificare finală Modul 2, galerie |

**Ce ai nevoie:** Blender 4.2 · fișierele tale din L4, L5, L7, L8 și L9

---

## Instrucțiuni noi azi

| Ce folosim | Ce face | Exemplu |
|------------|---------|---------|
| **File → Append** | Aduce obiecte dintr-un alt fișier .blend | robotul din lecția 4 |
| **N → Item → Dimensions** | Pune o mărime exactă | înălțime 1.1 pe fiecare figurină |
| **Ctrl + J** | Unește piesele unei figurine într-un obiect | robotul, din mai multe piese |
| *Recap:* **I + E** pe o față | Face o nișă în interior | raftul gol pe dinăuntru |

---

## Pas cu pas

### 1) Proiectul
Faci un raft cu **3 rafturi** și **6 figurine**, câte 2 pe raft:

| Raft | Figurine |
|------|----------|
| Jos | Robotul (L4) și Cana (L5) |
| Mijloc | Fluturele (L7) și Bradul (L8) |
| Sus | Vulpea (L9) și figurina ta preferată din modul (turnul L3, peisajul L6…) |

> Îți lipsește un fișier? Refaci repede figurina în varianta **Minim** din lecția respectivă.

**Încearcă tu — planul (3 min)**  
- [ ] Ai o listă cu cele 6 figurine și fișierul din care vine fiecare  
- [ ] Ai verificat că fișierele există în folderul tău  
- [ ] Ai ales ordinea: ce figurină stă pe ce raft  

### 2) Raftul din Edit Mode
1. Fișier nou (**File → New → General**). Șterge cubul de start (**X**) și adaugă un **Cube**.  
2. Din **N → Item → Dimensions**: **X 7, Y 1.5, Z 5**. Apoi **G Z 2.5**: stă pe podea.  
3. **Ctrl + A → Scale**.  
4. **Tab**, modul **Face**, vedere din față (**Numpad 1**). Selectează fața din față (cea de la **Y = −0.75**).  
5. **I 0.25 Enter**: apare un chenar (pereții raftului).  
6. **E Y 1.2 Enter**: fața de mijloc intră în interior. Ai o nișă adâncă, cu fund gros de 0.3.  
7. **Tab**. **Shift + A → Mesh → Cube**: **Dimensions X 6.6, Y 1.2, Z 0.2**, **Location X 0, Y −0.15, Z 1.7**: primul raft. **Shift + D**, apoi **G Z 1.6**: al doilea, la **Z 3.3**.

**Încearcă tu — raftul (10 min)**  
- [ ] Din față vezi o nișă cu 3 compartimente egale  
- [ ] Rafturile ating pereții din stânga și din dreapta  
- [ ] Raftul stă pe podea  

### 3) Aducem figurinele (Append)
Pentru fiecare figurină, din fișierul ei:

1. **File → Append**. Alege fișierul (`Prenume_Nume_B2_L04.blend`).  
2. Intră în folderul **Object**. Vei vedea toate obiectele din fișier.  
3. Alege doar piesele figurinei (la robot: corp, cap, ochi, gură, antenă, butoane). Nu alege **Camera**, **Light** sau **Plane**.  
4. **Append**: piesele apar în scena ta, selectate.  
5. **Ctrl + J**: devin un singur obiect. **F2**: numele (`Robot`).

> **Atenție la Mirror!** La fluture, aripa are modificatorul Mirror, iar **Ctrl + J** îl pierde dacă aripa nu e obiectul activ. Înainte de **Ctrl + J**, selectează aripa, deschide **Modifiers**, apasă săgeata de lângă Mirror și alege **Apply**. Vulpea e un singur obiect: nu ai nevoie de **Ctrl + J**, iar Mirror rămâne la locul lui.

Repetă pentru cele 6 figurine. Dacă ai adus din greșeală și camera, planul sau lumina, șterge-le (**X**).

**Încearcă tu — Append (12 min)**  
- [ ] Ai adus robotul (L4) și cana (L5), fiecare ca un singur obiect  
- [ ] Au rămas materialele (culorile) din fișierele originale  
- [ ] Ai adus și fluturele, bradul, vulpea și a șasea figurină  
- [ ] Fiecare are un nume clar în Outliner  

### 4) Mărime și așezare
1. Pentru fiecare figurină citește înălțimea din **N → Item → Dimensions → Z**. Apoi apasă **S** cu numărul **1.1 împărțit la acea înălțime**. Exemplu: Z = 4.4 înseamnă **S 0.25 Enter**. Verifică: Z ajunge cam 1.1.  
2. Mută figurina pe raft: **G** cu mouse-ul, sau **Location X, Y, Z** în panoul **N**.  
3. Înălțimile suprafețelor raftului sunt aproape: **Z 0.25**, **Z 1.8** și **Z 3.4**. Din față (**Numpad 1**), ridici sau cobori figurina cu **G Z** până stă pe raft, nu în el și nu deasupra.  
4. Cele 2 figurine de pe un raft: **X −1.5** și **X 1.5**, cu **Y** în jur de −0.2.  
5. Rotește figurinele spre cameră (**R Z**), dacă privesc în altă parte.

**Încearcă tu — așezarea (12 min)**  
- [ ] Toate 6 au aceeași înălțime, cam 1.1  
- [ ] Nicio figurină nu iese din raft și niciuna nu plutește  
- [ ] Toate privesc spre cameră  

### 5) Lumină și cameră
1. **Sun** cu **Strength 3**, din lateral-sus.  
2. Cameră în față, la mijlocul raftului: **Numpad 0** ca să vezi prin ea, **Focal Length 50 mm**.  
3. Material maro de lemn pentru raft (**Roughness 0.7**), alb sau galben deschis pentru fundalul din spate (**Properties → World → Color** cu o culoare deschisă).  
4. **EEVEE**, **F12**, **Image → Save As** PNG.

**Încearcă tu — imaginea (8 min)**  
- [ ] Raftul se vede întreg în imagine  
- [ ] Figurinele sunt luminate, fără umbre prea negre  
- [ ] Imaginea PNG este salvată  

### 6) Complet — verificare finală Modul 2

Bifează ce poți face **singur**:

- [ ] intru în Edit Mode și selectez vârfuri, muchii, fețe  
- [ ] folosesc **E, I, Ctrl + B, Ctrl + R**  
- [ ] folosesc editarea proporțională (**O**)  
- [ ] folosesc modificatorul Mirror cu Clipping  
- [ ] dau mai multe materiale pe un obiect cu **Assign**  
- [ ] aduc obiecte din alt fișier cu **Append**  

**Încearcă tu — verificarea (4 min)**  
- [ ] Alegi 2 puncte din listă și le refaci pe un cub nou, fără să te uiți în lecție  
- [ ] Salvezi fișierul final cu numele corect (`B2_L10`)  
- [ ] Îi arăți raftul unui coleg și îi spui din ce lecție vine fiecare figurină  
### 7) Creează tu — raftul tău
Schimbă ceva: altă ordine a figurinelor, alt număr de rafturi sau altă culoare a lemnului. Un coleg trebuie să ghicească ce ai schimbat.

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| Append nu arată obiecte | Nu ai intrat în folderul **Object** | Dublu click pe fișier, apoi pe **Object** |
| Figurina e uriașă sau minusculă | Mărimile din lecții sunt diferite | Scalezi cu **S** până când **Dimensions Z** ≈ 1.1 |
| Figurina stă în raft | Ai pus-o prea jos | **G Z** în sus |
| Aduci Camera și Light peste ale tale | Le-ai ales la Append | Le ștergi cu **X** |
| Robotul rămâne în bucăți | Nu ai folosit **Ctrl + J** | Selectează piesele, **Ctrl + J** |
| Imaginea e întunecată | Lipsește lumina | Un **Sun** cu **Strength 3** |

---

## De făcut azi — „Raftul cu figurine”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Raft cu 3 compartimente + 3 figurine |
| **Complet** | Minim + 6 figurine + lumină + randare + verificare finală |

### Pasul 1 — Minim
- [ ] Raft cu nișă și rafturi  
- [ ] 3 figurine aduse cu Append  

**→ Minim când:** un coleg recunoaște ce ai făcut, fără explicații.

### Pasul 2 — Complet
- [ ] 6 figurine, la aceeași înălțime  
- [ ] Lumină și cameră  
- [ ] Randare PNG  
- [ ] Verificarea finală completată  
- [ ] Numele `B2_L10` e corect

---

## Bonus ★★★ — Provocare: Vitrina cu plăcuțe
*Doar dacă ai terminat Complet.*

- [ ] **Shift + A → Text**: **Tab**, ștergi „Text” cu **Backspace**, scrii numele figurinei, **Tab**  
- [ ] **Properties → tab-ul Data** (litera verde „a”) → **Geometry → Extrude 0.02**, **R X 90**, **S 0.3**  
- [ ] Câte o plăcuță în fața fiecărei figurine, pe raft  
- [ ] O imagine apropiată (close-up) pe vulpe, salvată separat  

---

## Recapitulare pe scurt — tot Modulul 2
1. Edit Mode: vârfuri, muchii, fețe  
2. **E · I · Ctrl + B · Ctrl + R**  
3. Editare proporțională · Mirror  
4. Low-poly și materiale multiple  
5. **Append** aduce obiecte dintr-un alt fișier  
6. Proiect: robot, cană, fluture, brad, vulpe, toate pe același raft

## Mai departe *(opțional)*
Alege o jucărie de acasă. Din ce forme simple e făcută și cu ce unelte din Modulul 2 ai modela-o?

## Quiz scurt
- Cum aduci un obiect dintr-un alt fișier?  
- Ce face **Ctrl + J**?  
- Cum faci o nișă într-un cub?  
- Ce setezi ca să aibă toate figurinele aceeași înălțime?

## Temă
Alege 3 obiecte din casă și fă pentru ele **un al doilea raft** în Blender, cu figurine noi.
- Desenează pe foaie raftul și locul fiecărui obiect.
- Modelează cele 3 obiecte simplu, pune-le la aceeași înălțime și așază-le pe raft.
- Randează imaginea și salvează `Prenume_Nume_B2_L10_Tema.png`; notează pe foaie ce lumină ai folosit.
