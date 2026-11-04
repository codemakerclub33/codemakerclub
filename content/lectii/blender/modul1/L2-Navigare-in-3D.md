# LECȚIA 2 — Turul obiectului
### Navigare în 3D
**Modulul 1 · Primii pași în Blender**  
**Code Maker Club · Blender Starter**

> Azi înveți să te **plimbi** prin lumea 3D: să te rotești în jurul unui obiect, să te apropii și să te îndepărtezi, să vezi din față, de sus și din lateral.  
> Proiect: **„Turul obiectului”** · `Prenume_Nume_B1_L02.blend`

---

## Ce facem azi
La finalul orei te miști în 3D fără să te pierzi și găsești oricând obiectul. Un obiect 3D are **lățime, înălțime și adâncime**. Ca să modelezi bine obiectul, îl privești din mai multe părți, ca atunci când te uiți la o jucărie.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L1 |
| 10–45 | Rotire, deplasare, zoom |
| 45–75 | Vederi standard (față, dreapta, sus) |
| 75–90 | Perspectivă / ortografic, joc „găsește obiectul” |
| 90–110 | Creezi tu: turul ghidat |
| 110–120 | Recap, quiz, galerie |

**Ce ai nevoie:** Blender 4.2 · fișierul din L1 sau unul nou · mouse cu rotiță (sau emulare)

---

## Instrucțiuni noi azi

| Ce folosim | Ce face | Exemplu |
|------------|---------|---------|
| Rotița apăsată + mișcarea mouse-ului | Rotește vederea în jurul scenei | ține rotița apăsată și mișcă |
| **Shift** + rotița apăsată | Deplasează vederea în lateral | Shift + rotiță + mouse |
| Rotița învârtită | Apropie sau depărtează (zoom) | înainte = mai aproape |
| **1 / 3 / 7** (Numpad) | Vedere din față / dreapta / sus | 7 = privești de sus |
| **5** (Numpad) | Perspectivă ↔ ortografic | vezi fără deformare |
| **Home** | Arată toată scena | când te-ai pierdut |

---

## Pas cu pas

### 1) Deschide scena
**File → New → General.** Ai din nou cubul, lumina și camera.

### 2) Cele 3 mișcări de bază (mouse peste viewport)

| Ce vrei | Cu mouse-ul | Fără rotiță (emulare) |
|---------|-------------|------------------------|
| **Rotești** vederea | ține apăsat **rotița** și mișcă | **Alt + click stânga** și mișcă |
| **Deplasezi** vederea | **Shift + rotiță** și mișcă | **Shift + Alt + click stânga** |
| **Zoom** | **învârți rotița** | **Ctrl + Alt + click stânga**, sau rotița de pe touchpad |

Încearcă fiecare 1 minut. La început pare ciudat, dar în 10 minute e firesc!

**Încearcă tu — mișcările (3 min)**  
- [ ] Poți roti vederea în jurul cubului  
- [ ] Poți deplasa vederea și poți mări sau micșora  
- [ ] Fără rotiță: știi combinațiile cu **Alt**  

### 3) „Giroscopul” din colțul dreapta sus
În colțul viewport-ului e o **sferă cu axe colorate**:

| Culoare | Axa |
|---------|-----|
| **Roșu** | X (stânga ↔ dreapta) |
| **Verde** | Y (față ↔ spate) |
| **Albastru** | Z (sus ↔ jos) |

- **Click** pe o axă → te uiți **pe direcția** ei.  
- **Trage** cu mouse-ul pe sferă → rotești vederea.  
- Mici butoane lângă ea: **mâna** (deplasare) și **lupa** (zoom). Le tragi cu mouse-ul.

**Încearcă tu — giroscopul (2 min)**  
- [ ] Un click pe axa roșie, verde sau albastră schimbă vederea  
- [ ] Tragând pe sferă, vederea se rotește  

### 4) Vederi standard
Cu **Numpad** (sau emulat, cu tastele de sus):

| Tasta | Vederea |
|-------|---------|
| **1** | din **față** |
| **3** | din **dreapta** |
| **7** | de **sus** |
| **Ctrl + 1 / 3 / 7** | din **spate / stânga / jos** |
| **0** | prin **camera** |
| **5** | schimbă **perspectivă ↔ ortografic** |

- **Perspectivă:** ca ochiul tău, lucrurile îndepărtate par mici.  
- **Ortografic:** toate liniile paralele rămân paralele, perfect pentru a modela precis.

**Încearcă tu — vederile (3 min)**  
- [ ] Tastele **1**, **3** și **7** dau față, dreapta și sus  
- [ ] Tasta **0** arată prin cameră, iar **5** schimbă perspectiva cu ortografic  

### 5) Nu te pierde!

| Tasta | Ce face |
|-------|---------|
| **Home** | **potrivește vederea** ca să încapă **toate obiectele** pe ecran (nu mută obiectele) |
| **Numpad .** (punct) | **apropie** obiectul selectat |
| **Shift + C** | resetează vederea și cursorul 3D |

**Home** nu mută obiectele, ci doar **vederea**: o apropie sau o depărtează până când le vezi pe toate. Mouse-ul trebuie să fie deasupra viewport-ului.  
**Pe laptop, fără tasta Home:** apeși **Fn** și **←**, sau alegi din meniu **View → Frame All**.

**Încearcă tu — „nu te pierde” (2 min)**  
- [ ] **Home** aduce toată scena în vedere  
- [ ] După un click pe un obiect în **Outliner**, **Numpad .** sare la el  

### 6) Complet — jocul „Găsește obiectul”
1. Adaugă 3 obiecte (**Shift + A → Mesh**: Cone, Torus, Monkey) și mută obiectele departe de centru cu **G**.  
2. Apasă **Home**, cu mouse-ul peste viewport: vederea se potrivește singură și le vezi pe toate trei (pe laptop: **Fn + ←** sau **View → Frame All**).  
3. Click pe fiecare în **Outliner**, apoi **Numpad .**: vederea sare la el.  
4. Fă un scurt „tur”: față (1), dreapta (3), sus (7) și cameră (0).

**Încearcă tu — jocul (3–4 min)**  
- [ ] Ai 3 obiecte mutate departe de centru, iar **Home** le arată pe toate  
- [ ] Faci turul: față, dreapta, sus, cameră  

### 7) Creează tu — „Turul ghidat”
Acum aranjezi tu scena și o arăți altcuiva.
1. Folosești scena de la jocul „Găsește obiectul”, cu cele **3 obiecte** (con, torus, maimuță), la distanțe diferite față de centru. Nu mai adaugi altele. Dă fiecărui obiect un nume clar cu **F2** (`Con`, `Torus`, `Maimuta`).  
2. Mută obiectele cu **G**, ca unul să fie **mai sus** decât celelalte și două să fie **aproape unul de altul**.  
3. Răspunde la 3 întrebări, cu câte un nume de obiect (pe foaie sau în caiet):  
   - Apasă **1**: care obiect e cel mai **sus**?  
   - Apasă **7**: care două obiecte sunt cele mai **aproape** unul de altul?  
   - Apasă **3**: care obiect e cel mai **în față**? (în vederea din dreapta, cel mai în față e cel din **stânga** ecranului)  
4. **Jocul:** un coleg sau un adult spune numele unui obiect, iar tu îl găsești în **mai puțin de 10 secunde** cu **Outliner** și **Numpad .**. Repetați de 3 ori.

**Gata când:**  
- [ ] Cele 3 obiecte au nume  
- [ ] Am răspuns la cele 3 întrebări  
- [ ] Am găsit un obiect cerut în sub 10 secunde  

---

## Greșeli frecvente
1. **Totul pare strâmb** — ești în perspectivă; apasă **5** pentru ortografic.  
2. **Nu vezi nimic** — ești prea aproape sau prea departe; **Home**.  
3. **Numpad nu merge** — activează **Emulate Numpad** în **Edit → Preferences → Input**.  
4. **Vederea se învârte în loc** — ai ținut Alt apăsat.  
5. **Confuzie între vedere și obiect** — la navigare **nu muți obiectul**, doar „camera ta”.

---

## De făcut azi — „Turul obiectului”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Rotire, deplasare, zoom |
| **Complet** | Minim + 4 vederi + ortografic + Home și Numpad . + turul ghidat (3 obiecte cu nume, 3 răspunsuri) |

### Pasul 1 — Minim
- [ ] Rotesc vederea  
- [ ] Mă apropii și mă îndepărtez  

**→ Minim când:** un coleg recunoaște ce ai făcut, fără explicații.  

### Pasul 2 — Complet
- [ ] Văd scena din față, dreapta, sus  
- [ ] Trec între perspectivă și ortografic  
- [ ] Găsesc fiecare obiect cu Numpad .  
- [ ] Am făcut turul ghidat: scenă cu 3 obiecte cu nume și 3 răspunsuri  
- [ ] Numele `B1_L02` e corect

---

## Bonus ★★★ — Provocare: Sabia din cuburi
*Doar dacă ai terminat Complet.*

Construiește o sabie ca în jocurile cu blocuri, doar din cuburi.

- [ ] Lama: cel puțin 5 cuburi scalate subțiri cu **S**, unul după altul, fără goluri
- [ ] Garda: un cub lat, așezat de-a curmezișul lamei, iar mânerul: un cub mai mic, sub gardă
- [ ] Din vederea din față (`1`) sabia e dreaptă, iar din dreapta (`3`) are aceeași grosime peste tot
- [ ] Fiecare piesă are nume în Outliner (`Lama_1`, `Garda`, `Maner`)

*Ajutor:* scalezi un cub, îl duplici cu **Shift + D** și îl muți cu **G**, pe o singură axă.

## Recapitulare pe scurt
1. Rotire · deplasare · zoom  
2. **1 / 3 / 7** = față / dreapta / sus  
3. **5** = perspectivă ↔ ortografic  
4. **Home** te readuce la scenă

## Mai departe *(opțional)*
Joacă un joc de aventură 3D și observă cum se mișcă camera. Acolo, camera e „ochiul” tău, ca la navigarea din Blender.

## Quiz scurt
- Ce culoare are axa Z?  
- Ce face **Home**?  
- Când e util modul ortografic?

## Temă
Alege un obiect simplu din casă (o cană, o jucărie, o cutie) și **refă-l în Blender**, din forme de bază: cuburi, cilindri, sfere.
- Privește obiectul real din **față, dreapta și sus** și notează ce forme vezi.
- Construiește-l în Blender, cu `Shift + A`, `G`, `R` și `S`, și verifică-l din vederile `1`, `3` și `7`.
- Dă fiecărei piese un nume (`F2`) și salvează fișierul `Prenume_Nume_B1_L02_Tema.blend`.
