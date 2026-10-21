# Lecția 9 — Prima randare
**Modulul 1 · Primii pași în Blender**  
**Code Maker Club · Blender Starter**

> Azi transformi scena 3D într-o **imagine** reală, pe care o poți trimite prietenilor. Procesul se numește **randare** (render).  
> Proiect: **„Poza finală”** · `Prenume_Nume_B1_L09.blend` + `Prenume_Nume_B1_L09.png`

---

## Obiectiv
La finalul orei ai o imagine salvată (PNG) cu scena ta.  
**Minim:** randezi cu **F12** și salvezi imaginea.  
**Complet:** Minim + reglezi **rezoluția**, compari motoarele **EEVEE** și **Cycles** obții o imagine cu fundal transparent și faci **trei poze ale aceleiași scene**, fiecare cu altă schimbare.

## De ce contează
Până acum ai lucrat în viewport. Randarea face **imaginea finală**: calculează lumina, umbrele și reflexiile cu mare atenție. E „fotografia” scenei tale.

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

**Ce ai nevoie:** Blender 4.2 · scena din L8 (cu cameră și lumină)

---

## Pas cu pas

### 1) Prima randare
1. Verifică prin cameră: **Numpad 0**.  
2. Apasă **F12** (sau **Render → Render Image**).  
3. Se deschide o fereastră cu imaginea. Așteaptă să se termine.  
4. În fereastra de randare: **Image → Save As** (sau **Shift + Alt + S**), format **PNG**, numește fișierul `Prenume_Nume_B1_L09.png`.  
5. Închide fereastra cu **Esc** sau cu butonul ferestrei.

> Dacă ai pierdut fereastra, **F11** o aduce înapoi.

**Gata când:**  
- [ ] Am făcut toți pașii din „Prima randare”  
- [ ] Ce văd în Blender seamănă cu descrierea  

### 2) Setările de randare
**Properties → tab Render** (aparatul foto):

| Setare | Ce face |
|--------|---------|
| **Render Engine** | „motorul” care calculează imaginea |
| **Samples** | câte „încercări” face per pixel (mai multe = mai curat, dar mai lent) |

**Gata când:**  
- [ ] Am făcut toți pașii din „Setările de randare”  
- [ ] Ce văd în Blender seamănă cu descrierea  

### 3) Cele două motoare

| Motor | Viteză | Aspect | Când îl folosim |
|-------|--------|--------|-----------------|
| **EEVEE** | rapid (secunde) | frumos, dar „aproximat” | proiectele noastre de zi cu zi |
| **Cycles** | lent (minute) | foarte realist | imagini finale speciale |

Pentru calculatoare mai slabe, rămâi pe **EEVEE**.

**Gata când:**  
- [ ] Am făcut toți pașii din „Cele două motoare”  
- [ ] Ce văd în Blender seamănă cu descrierea  

### 4) Rezoluția
**Properties → tab Output** (imprimanta):

| Setare | Valoare recomandată |
|--------|---------------------|
| **Resolution X × Y** | 1920 × 1080 |
| **Resolution %** | 50% pentru teste, 100% pentru final |
| **Frame Range** | nu ne interesează (e doar o imagine) |

> **Truc:** testează cu **50%**, ca să mergi rapid, iar pentru poza finală treci la **100%**.

**Gata când:**  
- [ ] Am făcut toți pașii din „Rezoluția”  
- [ ] Ce văd în Blender seamănă cu descrierea  

### 5) Experiment: Cycles
1. Render → **Cycles**.  
2. **Render → Max Samples** pune **64**.  
3. Activează **Denoise** (mai jos, în același panou), ca imaginea să arate curat și cu puține „puncte”.  
4. F12. Compară cu EEVEE: umbrele și reflexiile sunt mai fine?  
5. Notează cât a durat. Dacă e prea lent, scade **Resolution %**.

**Gata când:**  
- [ ] Am făcut toți pașii din „Experiment: Cycles”  
- [ ] Ce văd în Blender seamănă cu descrierea  

### 6) Complet — fundal transparent
Vrei omulețul fără cer, ca să lipești omulețul pe altă imagine:

1. **Properties → Render → Film → Transparent** (bifează).  
2. **Output → Output → File Format: PNG**, **Color: RGBA**.  
3. F12 și salvează. În editorul de imagini vezi pătrățele gri-albe în loc de fundal.

**Gata când:**  
- [ ] Am făcut toți pașii din „Complet — fundal transparent”  
- [ ] Ce văd în Blender seamănă cu descrierea  

### 7) Creează tu — „Trei poze, trei povești”
Faci trei poze ale **aceleiași scene**. Schimbi de fiecare dată un singur lucru, ca să vezi ce diferență face.
1. **Poza A:** schimbă **culoarea cerului** (Properties → World → Color).  
2. **Poza B:** schimbă **unghiul camerei** (alt colț sau mai de sus).  
3. **Poza C:** schimbă **lumina** (culoare sau direcție).  
4. Randează cu **EEVEE** (rapid), la 1280 × 720. Salvează imaginile ca `Prenume_Nume_B1_L09_A.png`, `_B.png`, `_C.png`.  
5. Pe o foaie notează ce ai schimbat la fiecare și **care poză îți place cel mai mult** și de ce.

**Gata când:**  
- [ ] Am 3 imagini salvate, cu litere în nume  
- [ ] Am notat ce am schimbat la fiecare  
- [ ] Am spus care îmi place cel mai mult și de ce  

### Dacă ai terminat devreme
- [ ] Schimbă culoarea **cerului** în **Properties → World → Color**  
- [ ] Sau Bonusul de mai jos  

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

## Bonus
- [ ] Lipește omulețul cu fundal transparent peste o altă imagine, într-un editor simplu, dacă ai unul

## Recapitulare rapidă
1. **F12** randează · **Image → Save As** salvează  
2. **EEVEE** rapid · **Cycles** realist și lent  
3. Rezoluția: 1920 × 1080, 50% pentru teste  
4. **Film → Transparent** pentru fundal liber

## Schema pe scurt *(pe foaie — doar dacă o printezi separat)*

`Prima randare` → `Setările de randare` → `Cele două motoare` → `Rezoluția` → `Experiment: Cycles` → `Complet — fundal transparent` → `Creează tu`

## Mai departe *(opțional)*
Trimite poza unui prieten sau a părinților și întreabă ce le place. Ce ai îmbunătăți?

## Quiz scurt
- Care motor e mai rapid?  
- Cum salvezi imaginea randată?  
- Ce face „Transparent”?

## Temă
Alege cea mai frumoasă randare a ta și scrie 2 propoziții despre ea: ce arată, ce ai îndrăgit.
