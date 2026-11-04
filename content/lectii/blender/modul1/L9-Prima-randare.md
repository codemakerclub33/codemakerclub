# LECȚIA 9 — Poza finală
### Randare
**Modulul 1 · Primii pași în Blender**  
**Code Maker Club · Blender Starter**

> Azi transformi scena 3D într-o **imagine** reală, pe care o poți trimite prietenilor. Procesul se numește **randare** (render).  
> Proiect: **„Poza finală”** · `Prenume_Nume_B1_L09.blend` + `Prenume_Nume_B1_L09.png`

---

## Ce facem azi
La finalul orei ai o imagine salvată (PNG) cu scena ta. Până acum ai lucrat în viewport. Randarea face **imaginea finală**: calculează lumina, umbrele și reflexiile cu mare atenție. E „fotografia” scenei tale.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L8 |
| 10–35 | Prima randare cu EEVEE |
| 35–60 | Rezoluție și calitate |
| 60–85 | Cycles vs EEVEE |
| 85–100 | Fundal transparent |
| 100–115 | Creezi tu: trei poze, trei povești |
| 115–120 | Recap, galerie |

**Ce ai nevoie:** Blender 4.2 · tabăra din L8 (cu cameră și lumină)

---

## Instrucțiuni noi azi

| Ce folosim | Ce face | Exemplu |
|------------|---------|---------|
| **F12** | Randează imaginea | prin cameră |
| **Image → Save As** | Salvează imaginea randată | `Prenume_Nume_B1_L09.png` |
| **EEVEE / Cycles** | Cele două motoare de randare | EEVEE rapid, Cycles realist |
| **Output → Resolution** | Mărimea imaginii | 1920 × 1080 |
| **Film → Transparent** | Fundal fără culoare | imagine fără cer |

---

## Pas cu pas

### 1) Prima randare
1. Verifică prin cameră: **Numpad 0**.  
2. Apasă **F12** (sau **Render → Render Image**).  
3. Se deschide o fereastră cu imaginea. Așteaptă să se termine.  
4. În fereastra de randare: **Image → Save As** (sau **Shift + Alt + S**), format **PNG**, numește fișierul `Prenume_Nume_B1_L09.png`.  
5. Închide fereastra cu **Esc** sau cu butonul ferestrei.

> Dacă ai pierdut fereastra, **F11** o aduce înapoi.

**Încearcă tu — prima randare (3 min)**  
- [ ] **F12** a deschis fereastra cu imaginea  
- [ ] Imaginea e salvată ca PNG, cu numele corect  

### 2) Setările de randare
**Properties → tab Render** (aparatul foto):

| Setare | Ce face |
|--------|---------|
| **Render Engine** | „motorul” care calculează imaginea |
| **Samples** | câte „încercări” face per pixel (mai multe = mai curat, dar mai lent) |

`Render Engine` e primul câmp de sus. `Samples` sunt în panoul `Sampling` (click pe săgeată ca să îl deschizi), la rândul `Render`.

**Încearcă tu — setările (2 min)**  
- [ ] Găsești **Render Engine** și **Samples** în **Properties → Render**  
- [ ] Știi că mai multe Samples înseamnă imagine mai curată, dar mai lentă  

### 3) Cele două motoare

| Motor | Viteză | Aspect | Când îl folosim |
|-------|--------|--------|-----------------|
| **EEVEE** | rapid (secunde) | frumos, dar „aproximat” | proiectele noastre de zi cu zi |
| **Cycles** | lent (minute) | foarte realist | imagini finale speciale |

Pentru calculatoare mai slabe, rămâi pe **EEVEE**.

**Încearcă tu — motoarele (2 min)**  
- [ ] Știi diferența dintre **EEVEE** (rapid) și **Cycles** (lent, realist)  
- [ ] Ai ales EEVEE pentru lucrul de zi cu zi  

### 4) Rezoluția
**Properties → tab Output** (imprimanta):

| Setare | Valoare recomandată |
|--------|---------------------|
| **Resolution X × Y** | 1920 × 1080 |
| **Resolution %** | 50% pentru teste, 100% pentru final |
| **Frame Range** | nu ne interesează (e doar o imagine) |

> **Truc:** testează cu **50%**, ca să mergi rapid, iar pentru poza finală treci la **100%**.

**Încearcă tu — rezoluția (2 min)**  
- [ ] Rezoluția e 1920 × 1080  
- [ ] Pentru teste ai pus 50%, iar pentru poza finală 100%  

### 5) Experiment: Cycles
1. Render → **Cycles**.  
2. În panoul **Sampling**, la rândul **Render**, pune **Max Samples** pe **64**.  
3. Tot acolo, bifează **Denoise** (sub Max Samples), ca imaginea să arate curat și cu puține „puncte”.  
4. F12. Compară cu EEVEE: umbrele și reflexiile sunt mai fine?  
5. Notează cât a durat. Dacă e prea lent, scade **Resolution %**.

**Încearcă tu — Cycles (3–4 min)**  
- [ ] Ai randat cu Cycles, 64 Samples și **Denoise**  
- [ ] Ai notat cât a durat și ai comparat cu EEVEE  

### 6) Complet — fundal transparent
Vrei tabăra fără cer, ca să lipești tabăra pe altă imagine:

1. **Properties → tab Render**, derulează în jos până la panoul **Film** (deschide-l cu săgeata) și bifează **Transparent**.  
2. **Properties → tab Output** (imprimanta) → panoul **Output** → **File Format: PNG**, **Color: RGBA**.  
3. F12 și salvează. În editorul de imagini vezi pătrățele gri-albe în loc de fundal.

**Încearcă tu — fundalul transparent (3 min)**  
- [ ] Ai bifat **Film → Transparent**  
- [ ] Ai salvat PNG cu **RGBA** și vezi pătrățele în loc de fundal  

### 7) Creează tu — „Trei poze, trei povești”
Faci trei poze ale **aceleiași scene**. Schimbi de fiecare dată un singur lucru, ca să vezi ce diferență face.
1. **Poza A:** schimbă **culoarea cerului** (Properties → tab World, globul roșu → Surface → Color).  
2. **Poza B:** schimbă **unghiul camerei** (alt colț sau mai de sus).  
3. **Poza C:** schimbă **lumina** (culoare sau direcție).  
4. Randează cu **EEVEE** (rapid), la 1280 × 720. Salvează imaginile ca `Prenume_Nume_B1_L09_A.png`, `_B.png`, `_C.png`.  
5. Pe o foaie notează ce ai schimbat la fiecare și **care poză îți place cel mai mult** și de ce.

**Gata când:**  
- [ ] Am 3 imagini salvate, cu litere în nume  
- [ ] Am notat ce am schimbat la fiecare  
- [ ] Am spus care îmi place cel mai mult și de ce  

---

## Greșeli frecvente
1. **Imaginea e neagră** — camera nu vede nimic sau lumina lipsește.  
2. **Randarea durează o veșnicie** — Cycles + Samples mari; treci pe EEVEE sau scade samples.  
3. **Fișierul nu a fost salvat** — randarea nu se salvează automat; **Image → Save As**.  
4. **Imaginea e mică** — rezoluția e prea mică sau 50%.  
5. **Fundalul nu e transparent** — lipsește Film → Transparent sau formatul PNG RGBA.

---

## De făcut azi — „Poza finală”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Randare cu F12 + imagine PNG salvată |
| **Complet** | Minim + rezoluție + comparație EEVEE/Cycles + fundal transparent + „Trei poze, trei povești” |

### Pasul 1 — Minim
- [ ] F12 funcționează  
- [ ] PNG-ul e salvat  

**→ Minim când:** un coleg recunoaște ce ai făcut, fără explicații.  

### Pasul 2 — Complet
- [ ] 1920 × 1080  
- [ ] Am comparat EEVEE și Cycles  
- [ ] Am o variantă cu fundal transparent  
- [ ] Am făcut „Trei poze, trei povești”: 3 imagini și notițele pe foaie  
- [ ] Numele `B1_L09` e corect

---

## Bonus ★★★ — Provocare: Tortul cu glazură
*Doar dacă ai terminat Complet.*

Construiește un tort de aniversare și randează-l ca pe o poză de cofetărie.

- [ ] 3 straturi: cilindri unul peste altul, fiecare puțin mai mic decât cel de dedesubt
- [ ] Glazură: un cilindru subțire deasupra, mai lat decât stratul de sus, roz, cu `Roughness` mic
- [ ] Cel puțin 8 bomboane sau fructe: sfere mici, de mai multe culori, pe margine
- [ ] O lumânare: un cilindru subțire și un con mic, galben, deasupra
- [ ] `Shade Smooth` pe glazură și pe sfere
- [ ] Randare cu `Cycles` și `Film` → `Transparent`, salvată ca `Prenume_Nume_B1_L09_Tort.png`

## Recapitulare pe scurt
1. **F12** randează · **Image → Save As** salvează  
2. **EEVEE** rapid · **Cycles** realist și lent  
3. Rezoluția: 1920 × 1080, 50% pentru teste  
4. **Film → Transparent** pentru fundal liber

## Mai departe *(opțional)*
Trimite poza unui prieten sau a părinților și întreabă ce le place. Ce ai îmbunătăți?

## Quiz scurt
- Care motor e mai rapid?  
- Cum salvezi imaginea randată?  
- Ce face „Transparent”?

## Temă
Alege un desert sau un fruct din casă (un măr, un cupcake, o felie de pizză) și **randează-l în Blender**.
- Construiește-l simplu, din forme de bază, cu materiale potrivite.
- Randează-l cu fundal transparent.
- Salvează imaginea `Prenume_Nume_B1_L09_Tema.png`.
- Notează pe foaie ce motor ai folosit (EEVEE sau Cycles) și cât a durat randarea.
