# LECȚIA 6 — Dealuri și nori
### Editare proporțională
**Modulul 2 · Modelare în Edit Mode**  
**Code Maker Club · Mesh Modeler**

> Când muți un vârf, vecinii lui rămân pe loc și apare un „vârf ascuțit”. Cu **editarea proporțională**, zona din jur se mișcă după el, ca atunci când tragi de o față de masă. Azi faci **dealuri rotunde** și **nori pufoși**.  
> Proiect: **„Dealuri și nori”** · `Prenume_Nume_B2_L06.blend`

---

## Ce facem azi
La finalul orei ai un peisaj cu **dealuri rotunde, o vale și trei nori**, cu lumină și o imagine randată. Natura nu are colțuri: dealurile, norii și fețele sunt moi. Editarea proporțională este unealta principală pentru formele organice.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L5: Loop Cut |
| 10–35 | Editarea proporțională |
| 35–65 | Dealuri și vale |
| 65–90 | Norii |
| 90–110 | Lumină, cameră, randare |
| 110–120 | Recap, quiz, galerie |

**Ce ai nevoie:** Blender 4.2 · scena de start (fără cub)

---

## Instrucțiuni noi azi

| Ce folosim | Ce face | Exemplu |
|------------|---------|---------|
| **O** (litera) | Pornește / oprește editarea proporțională | zona din jur se mișcă după vârf |
| **Rotița** în timpul lui **G** | Mărește sau micșorează cercul de influență | deal lat sau ascuțit |
| **Shift + O** | Schimbă tipul de atenuare (Falloff) | Smooth, Sphere, Sharp… |
| *Recap:* **G Z** cu număr | Mută pe înălțime | **G Z 3** |

---

## Pas cu pas

### 1) Pregătirea
1. Șterge cubul. **Shift + A → Mesh → Grid**. În panoul din stânga-jos: **X Subdivisions = 30**, **Y Subdivisions = 30**, **Size = 12**.  
2. **Tab**, modul **Vertex** (butonul din antet), apoi vedere de sus (**Numpad 7**, ca în Modulul 1).

> Grila trebuie să aibă **multe** vârfuri, ca dealurile să iasă netede.

**Încearcă tu — grila (2 min)**  
- [ ] Grila este plată, cu multe pătrățele  
- [ ] Ești în Edit Mode, modul Vertex, privind de sus  

### 2) Pornim Proportional Editing
1. Apasă **O** (litera) în Edit Mode. În bara de sus se aprinde butonul cu cercul și puncte.  
2. Selectează **un singur vârf** din mijloc.  
3. **G Z 3**, dar **nu** apăsa încă Enter! Mișcă **rotița mouse-ului**: un cerc mare apare în jurul punctului, iar zona din cerc se ridică **odată cu el**.  
4. Confirmă cu **Enter**.

**Încearcă tu — primul deal (5 min)**  
- [ ] Ai un deal rotund, nu un vârf ascuțit  
- [ ] Ai făcut **Ctrl + Z** și ai refăcut dealul cu cercul mai mic, apoi mai mare  
- [ ] Ai oprit **O**, ai mutat un vârf și ai văzut cum iese ascuțit  

### 3) Tipuri de atenuare (Falloff)
În bara de sus, lângă cerc, ai o listă. Se schimbă și cu **Shift + O**.

| Tip | Cum arată dealul |
|-----|------------------|
| **Smooth** | rotunjit, natural (cel mai bun) |
| **Sphere** | bombat |
| **Sharp** | ascuțit |
| **Linear** | con |
| **Random** | zgrunțuros |

**Încearcă tu — atenuarea (5 min)**  
- [ ] Ai făcut câte un deal cu **Smooth**, **Sharp** și **Linear**  
- [ ] Poți spune, privind un deal, ce tip de atenuare are  

### 4) Dealurile
1. Alege 3 vârfuri în locuri diferite.  
2. Pentru fiecare: **G Z** cu cifre diferite (2, 3, 1.5) și reglezi raza cu rotița.  
3. Fă un **deal lat** (rază mare) și un **deal ascuțit** (rază mică).  
4. Pentru o **vale**: **G Z −2** pe un vârf.  
5. Ieși cu **Tab**, apoi click dreapta → **Shade Smooth**.

**Încearcă tu — peisajul (7 min)**  
- [ ] Ai 3 dealuri de mărimi diferite, o vale și un deal ascuțit  
- [ ] Suprafața este netedă, fără muchii vizibile  

### 5) Norii
1. **Shift + A → Mesh → UV Sphere** (Segments 32, Rings 16). Ridic-o: **G Z 6**.  
2. **S X 1.6**, apoi **S Y 1**, apoi **S Z 0.7**: un nor lat.  
3. **Tab**, **O** pornit. Alege câte un vârf și **G** + rotița: faci „bule” pe suprafață.  
4. Fă 3–4 bule mari sus și 2 pe lateral.  
5. **Shade Smooth**, material alb, **Roughness 1**.  
6. **Shift + D**, apoi **G X** și **G Y** pentru încă 2 nori, de mărimi diferite (**S 0.7**, **S 1.3**).

**Încearcă tu — norii (7 min)**  
- [ ] Ai 3 nori pufoși, de mărimi diferite, la înălțimi diferite  
- [ ] Niciun nor nu atinge dealurile  

### 6) Complet — scenă completă
1. Material verde pentru dealuri (iarbă).  
2. Un deal în față și două în fundal.  
3. Lumină **Sun** caldă și o cameră de unde se văd dealurile (Modulul 1, lecția 8).  
4. Randezi o imagine PNG (Modulul 1, lecția 9).

**Gata când:**  
- [ ] Dealurile sunt verzi, norii albi, iar lumina vine dintr-o parte  
- [ ] Imaginea randată este salvată ca PNG  
- [ ] Obiectele au nume clare (`Dealuri`, `Nor1`…)  

### 7) Creează tu — peisajul tău
Schimbă forma peisajului: un deal foarte înalt, o vale adâncă, un nor uriaș. Un coleg trebuie să ghicească ce ai schimbat.

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| Dealul e ascuțit | **O** nu este pornit | Apasă **O** înainte de **G** |
| Dealul e ciudat de mic | Raza e mică | Mărește cu rotița **în timp ce** muți |
| Rotița schimbă zoom-ul | Nu ai început încă mutarea | Apasă **G Z**, apoi rotița |
| Dealul iese zimțat | Grila are prea puține vârfuri | Folosește 30 × 30 |
| Un vârf izolat iese ascuțit | Ai uitat **O** pornit | Pornește sau oprește **O** după nevoie |

---

## De făcut azi — „Dealuri și nori”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | 3 dealuri rotunde pe grilă |
| **Complet** | Minim + atenuări diferite + 3 nori + randare |

### Pasul 1 — Minim
- [ ] Grilă 30 × 30  
- [ ] Proportional Editing pornit  
- [ ] 3 dealuri  

**→ Minim când:** un coleg recunoaște ce ai făcut, fără explicații.

### Pasul 2 — Complet
- [ ] Valea și dealul ascuțit  
- [ ] 3 nori diferiți  
- [ ] Randare PNG  
- [ ] Numele `B2_L06` e corect

---

## Bonus ★★★ — Provocare: Dimineață, zi și apus
*Doar dacă ai terminat Complet.*

Randezi același peisaj de trei ori, la momente diferite din zi.

- [ ] Dimineața: lumină **Sun** galben-pal, unghi mic, cer deschis  
- [ ] Ziua: lumină albă puternică, unghi mare  
- [ ] Apusul: lumină portocalie, unghi mic, cer închis  
- [ ] Cele trei imagini sunt salvate cu nume clare (`dimineata`, `zi`, `apus`)  

---

## Recapitulare pe scurt
1. **O** pornește editarea proporțională  
2. **Rotița** în timpul lui **G** schimbă raza zonei  
3. **Smooth** dă forme naturale  
4. Forme organice cer multe vârfuri  
5. Un grup de vârfuri selectate dă un platou, nu un vârf

## Mai departe *(opțional)*
Privește norii pe cer: nu sunt niciodată la fel. Alege unul și încearcă să imiți forma lui.

## Quiz scurt
- Ce tastă pornește editarea proporțională?  
- Cu ce schimbi raza?  
- Ce tip de atenuare dă un deal natural?  
- Ce obții dacă muți mai multe vârfuri vecine deodată?

## Temă
Alege un obiect moale sau rotunjit din casă (o pernă, o pâine, un pepene) și **modelează-l în Blender**, cu **editare proporțională**.
- Începe de la o grilă sau o sferă cu multe vârfuri.
- Folosește cel puțin 3 atenuări diferite (`Shift + O`) și notează-le pe foaie.
- Dă fiecărei piese un nume (`F2`) și salvează fișierul `Prenume_Nume_B2_L06_Tema.blend`.
