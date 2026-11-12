# LECȚIA 9 — Vulpea low-poly
### Mirror, Extrude și Loop Cut
**Modulul 2 · Modelare în Edit Mode**  
**Code Maker Club · Mesh Modeler**

> Azi modelezi un **animal** din tot ce ai învățat în Modulul 2: Mirror pentru simetrie, Extrude pentru gât, bot și coadă, Inset pentru urechi și picioare, Loop Cut pentru a împărți corpul. Totul pornește de la un singur cub.  
> Proiect: **„Vulpea low-poly”** · `Prenume_Nume_B2_L09.blend`

---

## Ce facem azi
La finalul orei ai o **vulpe low-poly**, cu corp, patru picioare, cap cu bot, urechi, ochi și coadă stufoasă, modelată o singură dată pe jumătate și colorată. Animalele se fac din forme simple, trase în afară pas cu pas.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L8: low-poly |
| 10–30 | Corpul și Mirror |
| 30–50 | Picioarele |
| 50–75 | Capul și botul |
| 75–90 | Urechile și ochii |
| 90–105 | Coada și culorile |
| 105–120 | Recap, quiz, galerie |

**Ce ai nevoie:** Blender 4.2 · scena de start

---

## Instrucțiuni noi azi

| Ce folosim | Ce face | Exemplu |
|------------|---------|---------|
| **Mirror** + **Clipping** | Modelezi doar jumătate de animal | picior dreapta, copie stânga |
| **E Y** cu număr | Extrude pe lungimea animalului | gât, cap, bot, coadă |
| **I** pe o față de la margine | Face un chenar care nu atinge mijlocul | urechi și picioare separate |
| *Recap:* **Ctrl + R**, **S Z**, **Assign** | Loop Cut, scalare pe înălțime, culori pe fețe | picioare, coadă, pete |

> **Ideea de bază:** modelezi doar jumătatea din **dreapta** (X pozitiv). Fețele care ating mijlocul (X = 0) devin piese din mijloc: corp, coadă, bot. Dacă faci un chenar cu **I** pe o față de la margine, apar piese **separate**: câte una în dreapta și în stânga (urechi, picioare).

---

## Pas cu pas

### 1) Proporțiile
Vulpea stă cu fața spre tine (în vederea din față, **Numpad 1**). Corpul e lung pe axa **Y**, capul e spre **−Y**, coada spre **+Y**.

| Parte | Mărime |
|-------|--------|
| Corp | lungime 2, lățime 0.8, înălțime 1 |
| Picioare | 0.7 înălțime |
| Cap | lățime 0.8, înălțime 0.7, lungime 0.5 |
| Bot | lungime 0.4 |
| Coadă | 3 bucăți, câte 0.5–0.6 |

### 2) Corpul și Mirror
1. Șterge cubul de start (**X**). **Shift + A → Mesh → Cube**.  
2. **S X 0.2 Enter**, **S Y 1 Enter**, **S Z 0.5 Enter**, apoi **G Z 1.2 Enter**.  
3. **Ctrl + A → Scale** (mouse peste viewport): scara devine 1.  
4. **Tab**, **A**, **G X 0.2 Enter**: cubul stă acum doar în dreapta, cu marginea lui din stânga exact pe **X = 0**.  
5. **Tab** (Object Mode), **Properties → Modifiers → Add Modifier → Generate → Mirror**, bifează **Clipping**, iar la **Axis** doar **X**.  
6. **Shade Flat**, apoi **F2**: numește obiectul `Vulpe`.

**Încearcă tu — corpul (6 min)**  
- [ ] Vezi un corp lung de 2, lat de 0.8, înalt de 1, deasupra podelei  
- [ ] Mirror cu Clipping este pornit și nu se vede nicio linie la mijloc  
- [ ] Înapoi în Edit Mode, vezi doar jumătatea din dreapta (cealaltă e oglinda)  

### 3) Picioarele
1. **Tab**, modul **Face**. Mouse-ul pe o muchie lungă de pe lateral (pe lungimea lui Y), apoi **Ctrl + R**, rotița pe **2**, click, click dreapta: corpul se împarte în **3 părți** pe lungime.  
2. Privește din jos (**View → Viewpoint → Bottom**). Selectează fața de jos din față și, cu **Shift + click**, fața de jos din spate (cele din capete, nu cea din mijloc), pe jumătatea din dreapta.  
3. **I 0.08 Enter**: se face un chenar pe fiecare față.  
4. **E Z −0.7 Enter**: picioarele coboară până la podea.

**Încearcă tu — picioarele (8 min)**  
- [ ] Vezi 4 picioare, 2 în față și 2 în spate, cu un gol între cele din stânga și din dreapta  
- [ ] Picioarele ating podeaua  
- [ ] Din lateral (**Numpad 3**), cele din față și cele din spate arată la fel  

### 4) Capul și botul
Revino în vederea din față (**Numpad 1**). Selectează fața din față a corpului (jumătatea din dreapta, la **Y = −1**).

1. **E Y −0.2 Enter** (gâtul), apoi **S Z 0.7 Enter**: gâtul e mai scund decât corpul.  
2. **E Y −0.5 Enter**: capul.  
3. **E Y −0.4 Enter** (botul), apoi **S Z 0.5 Enter**, **S X 0.5 Enter** și **G X −0.1 Enter**: botul se subțiază și rămâne lipit de mijloc.

**Încearcă tu — capul (8 min)**  
- [ ] Capul are o parte lată și un bot mai îngust  
- [ ] Botul este lipit de linia de mijloc, fără gol  
- [ ] Din lateral, botul e mai jos și mai subțire decât capul  

### 5) Urechile și ochii
1. Selectează fața de **sus** a capului (nu a gâtului).  
2. **I 0.1 Enter**: chenar pe fața de sus (urechea nu atinge mijlocul).  
3. **E Z 0.35 Enter**, apoi **S 0.3 Enter**: o ureche ascuțită. Mirror o face și pe cealaltă.  
4. Selectează fața laterală a capului (din dreapta), **I 0.15 Enter**, apoi **E X 0.03 Enter**: un ochi.

**Încearcă tu — urechile și ochii (7 min)**  
- [ ] Două urechi ascuțite, câte una pe fiecare parte  
- [ ] Doi ochi, câte unul pe fiecare parte a capului  
- [ ] Din față, capul pare simetric  

### 6) Coada
Selectează fața din spate a corpului (jumătatea din dreapta, la **Y = 1**).

1. **E Y 0.5 Enter**, **S Z 0.6 Enter**: baza cozii.  
2. **E Y 0.6 Enter**, **S Z 1.6 Enter**: mijlocul stufos.  
3. **E Y 0.5 Enter**, **S Z 0.4 Enter**: vârful.  
4. **G Z 0.3 Enter**: vârful se ridică puțin.

**Încearcă tu — coada (6 min)**  
- [ ] Coada are 3 bucăți: subțire, groasă, ascuțită  
- [ ] Vârful e puțin ridicat  
- [ ] Din față, coada e în mijloc, nu lateral  

### 7) Complet — culori și randare
1. **Tab**. Corpul: material portocaliu, ca în Modulul 1.  
2. Modul **Face**, **Alt + Z**, vedere laterală (**Numpad 3**), **B** pe vârful cozii (ultima bucată), apoi slot nou, material alb, **Assign**.  
3. Selectează fața din fața botului, slot nou, material negru, **Assign**. La fel pentru cei doi ochi.  
4. **Plane** mare ca pământ, **Sun**, cameră, **F12**: salvezi un PNG.

**Gata când:**  
- [ ] Vulpea este portocalie, cu vârful cozii alb, nasul și ochii negri  
- [ ] Are ochi, urechi, 4 picioare, bot și coadă  
- [ ] Imaginea PNG este salvată  

### 8) Creează tu — vulpea ta
Schimbă ceva: botul mai lung, urechile mai mari, coada mai mică. Un coleg trebuie să ghicească ce ai schimbat.

---

## Greșeli frecvente

| Ce vezi | Cauza | Corect |
|---------|-------|--------|
| Picioarele s-au lipit într-unul gros | Ai uitat **I** înainte de **E** | **Ctrl + Z**, **I 0.08**, apoi **E Z −0.7** |
| Gol între jumătăți, la bot sau coadă | Marginea nu e pe **X = 0** | Verifică **Clipping**; la bot, **G X −0.1** |
| Un singur ochi sau o singură ureche | Mirror nu e pornit în Edit Mode | Verifică modificatorul și axa **X** |
| Corpul apare dublu | Cubul nu a fost mutat la **X** pozitiv | Refă pasul 2.4 |
| Nu mai poți selecta fața | Vezi doar jumătatea oglindită | Dă click pe jumătatea din **dreapta** |

---

## De făcut azi — „Vulpea low-poly”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Corp cu Mirror, 4 picioare și cap cu bot |
| **Complet** | Minim + urechi + ochi + coadă + culori + randare |

### Pasul 1 — Minim
- [ ] Corp cu Mirror  
- [ ] 4 picioare  
- [ ] Cap cu bot  

**→ Minim când:** un coleg recunoaște ce ai făcut, fără explicații.

### Pasul 2 — Complet
- [ ] Urechi și ochi  
- [ ] Coadă cu 3 părți  
- [ ] Culori cu Assign  
- [ ] Numele `B2_L09` e corect

---

## Bonus ★★★ — Provocare: Alt animal, aceeași tehnică
*Doar dacă ai terminat Complet.*

Construiește un iepure sau o pisică folosind aceiași pași.

- [ ] Corp cu Mirror, mai scurt sau mai lung decât la vulpe  
- [ ] Urechi: lungi la iepure (**E Z 1**), mici la pisică  
- [ ] Coadă: o bilă mică la iepure, lungă și subțire la pisică  
- [ ] Culori și nume clare; cele două animale stau lângă tine, în aceeași scenă  

---

## Recapitulare pe scurt
1. **Mirror** + **Clipping**: modelezi jumătate, vezi întregul  
2. **E Y** trage gâtul, capul, botul și coada  
3. **I** pe o față de la margine face piese separate (urechi, picioare)  
4. **S Z** schimbă înălțimea unei piese fără să o miște lateral  
5. **Assign** pune culori pe fețe alese

## Mai departe *(opțional)*
Alege un animal din jurul tău. Din ce forme simple l-ai construi?

## Quiz scurt
- De ce modelăm doar jumătate din vulpe?  
- Ce face **I** înainte de **E** la picioare?  
- Ce schimbă **S Z**?  
- Cu ce pui culori pe fețe alese?

## Temă
Alege un animal de jucărie sau din poze (o pisică, un câine, un iepure) și **refă-l în Blender**, cu **Mirror**.
- Desenează pe foaie animalul din 4–5 cuburi și notează unealta pentru fiecare piesă.
- Construiește-l pe jumătate, cu `Mirror`, `E` și `I`, apoi pune cel puțin 2 culori cu `Assign`.
- Dă fiecărei piese un nume (`F2`) și salvează fișierul `Prenume_Nume_B2_L09_Tema.blend`.
