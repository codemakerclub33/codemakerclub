# Lecția 3 — Mutăm, rotim, scalăm
### Transformări
**Modulul 1 · Primii pași în Blender**  
**Code Maker Club · Blender Starter**

> Azi înveți cele **trei mișcări** pe care le faci cel mai des în Blender: **G** (mută), **R** (rotește), **S** (scalează), plus cum le „blochezi” pe o axă.  
> Proiect: **„Scara spre cer”** · `Prenume_Nume_B1_L03.blend`

---

## Obiectiv
La finalul orei transformi obiecte precis, cu mouse-ul și cu **numere**.  
**Minim:** muți, rotești și scalezi un cub.  
**Complet:** Minim + blochezi pe axe (**X, Y, Z**) + construiești o **scară** din 6 cuburi folosind numere exacte și apoi o **construcție proprie** (scara ta).

## De ce contează
Tot ce faci în 3D începe cu aceste trei mișcări. Dacă le știi bine, poți construi aproape orice din forme simple.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L2 |
| 10–40 | **G**, **R**, **S** cu mouse |
| 40–65 | Blocare pe axe |
| 65–90 | Numere exacte |
| 90–105 | Scara spre cer |
| 105–120 | Scara mea, recap, quiz |

**Ce ai nevoie:** Blender 4.2 · scena de start

---

## Pas cu pas

### 1) Cele trei transformări
Selectează cubul, mouse peste viewport:

| Tasta | Ce face | Confirmi cu | Anulezi cu |
|-------|---------|-------------|------------|
| **G** | **mută** (Grab) | click stânga | **Esc** |
| **R** | **rotește** (Rotate) | click stânga | **Esc** |
| **S** | **scalează** (Scale) | click stânga | **Esc** |

Mișcă mouse-ul după ce ai apăsat tasta: obiectul te urmează.

**Încearcă tu — G, R, S (3 min)**  
- [ ] **G** mută, **R** rotește și **S** scalează cubul  
- [ ] Cu **Esc** anulezi fiecare mișcare  

### 2) Blocare pe o axă
După ce apeși **G**, **R** sau **S**, apasă **X**, **Y** sau **Z** și obiectul se mișcă **doar pe acea axă**.

| Exemplu | Ce face |
|---------|---------|
| **G**, **Z** | mută doar în sus / jos |
| **R**, **Z** | rotește ca un titirez |
| **S**, **Z** | întinde doar pe înălțime |
| **G**, **Shift + Z** | mută **fără** axa Z (doar pe podea) |

**Încearcă tu — axele (3 min)**  
- [ ] **G**, **Z** mută doar în sus și în jos  
- [ ] **R**, **Z** învârte cubul ca un titirez  

### 3) Numere exacte
După **G + axă**, scrie un **număr** și apasă **Enter**:

| Scrii | Rezultat |
|-------|----------|
| **G Z 3 Enter** | mută cu **3 unități** în sus |
| **R Z 90 Enter** | rotește cu **90°** |
| **S 2 Enter** | mărește de **2 ori** |
| **S Z 0.5 Enter** | înjumătățește înălțimea |

Poți scrie și cu minus: **G X -2 Enter** mută spre stânga.

**Încearcă tu — numerele (3 min)**  
- [ ] **G Z 3 Enter** mută cubul exact cu 3 unități în sus  
- [ ] **S 2 Enter** îl mărește de 2 ori  

### 4) Panoul de transformare (tasta N)
Apasă **N** și, în tab-ul **Item**, vezi **Location, Rotation, Scale**. Poți scrie acolo direct valorile:

| Câmp | Ce înseamnă |
|------|-------------|
| **Location** X, Y, Z | unde e obiectul |
| **Rotation** X, Y, Z | cât e rotit (grade) |
| **Scale** X, Y, Z | cât e de mare (1 = normal) |

**Încearcă tu — panoul N (2 min)**  
- [ ] În tab-ul **Item** vezi **Location**, **Rotation** și **Scale**  
- [ ] Dacă scrii o valoare acolo, cubul se mută  

### 5) Resetări utile

| Scurtătură | Ce face |
|------------|---------|
| **Alt + G** | pune obiectul înapoi în centru |
| **Alt + R** | scoate rotația |
| **Alt + S** | readuce mărimea la 1 |

**Încearcă tu — resetările (2 min)**  
- [ ] **Alt + G** pune cubul înapoi în centru  
- [ ] **Alt + R** și **Alt + S** scot rotația și readuc mărimea la 1  

### 6) Complet — „Scara spre cer”
1. Selectează cubul → **S** → **0.5 Enter**. Acum are latura de 1 unitate.  
2. Mută cubul pe podea: **G Z 0.5 Enter**.  
3. Duplică cubul: **Shift + D**, apoi **click dreapta** (copia rămâne pe loc, peste original).  
4. Mută copia o treaptă mai departe: **G X 1 Enter**, apoi mai sus: **G Z 0.5 Enter**.  
5. Repetă pașii 3–4 până ai **6 trepte**: fiecare e cu **1 unitate mai la dreapta** și **0.5 mai sus** decât cea dinainte.  
6. La final, adaugă un **plan** (Shift + A → Mesh → Plane), mărit cu **S 8 Enter**, ca podea.

> **Sfat:** în loc să faci 6 cuburi de la zero, duplică ultimul cub. Mai repede și mai exact.
>  
> Treptele din acest exercițiu „plutesc”, cu spațiu gol dedesubt. Așa e scara din joc, e normal.

**Încearcă tu — scara (4 min)**  
- [ ] Primele trepte sunt duplicate cu **Shift + D**  
- [ ] Fiecare treaptă e cu 1 unitate mai la dreapta și 0.5 mai sus  

### 7) Creează tu — „Scara mea”
Acum o construiești pe a ta, fără pași scriși. Alege **una** dintre variante:
- **Scară mai lungă:** 8 trepte, cu altă înălțime și altă lățime decât la prima.  
- **Pod:** urcă 4 trepte, o platformă la mijloc, apoi coboară 4 trepte.  
- **Scară cu cotitură:** urcă 4 trepte pe axa X, o platformă, apoi încă 4 trepte pe axa **Y**.  

Reguli:
1. Folosești **numere exacte** (**G**, **R** sau **S** + axă + număr + Enter). Nu muți „din ochi”.  
2. Treptele sunt la **distanțe egale**.  
3. Cel puțin o dată folosești **panoul N** ca să verifici poziția unui obiect.  
4. Pe o foaie notezi **numerele** folosite (de exemplu „înălțime treaptă: 0.4”).

**Gata când:**  
- [ ] Construcția are cel puțin 8 piese, la distanțe egale  
- [ ] Am notat numerele folosite  
- [ ] Un coleg poate „urca” scara cu ochii, fără să vadă goluri sau piese suprapuse  

### Dacă ai terminat devreme
- [ ] Fă o **scară în spirală** (rotește și mută fiecare treaptă)  
- [ ] Sau Bonusul de mai jos  

---

## Greșeli frecvente
1. **Obiectul sare departe** — ai mișcat mouse-ul mult înainte de a confirma; **Esc** și reia.  
2. **Rotația merge pe axa greșită** — apasă **R** apoi **Z** (sau X / Y).  
3. **Scalezi un obiect „strâmb”** — ai blocat o singură axă; fără axă scalează uniform.  
4. **Numerele nu se aplică** — ai uitat **Enter**.  
5. **Duplicatul rămâne peste original** — după **Shift + D**, mută copia imediat.

---

## De făcut azi — „Scara spre cer”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Mut, rotesc, scalez un cub |
| **Complet** | Minim + axe + numere + scară cu 6 trepte + „Scara mea” (varianta ta, cu numerele notate) |

### Pasul 1 — Minim
- [ ] Folosesc **G**, **R**, **S**  
- [ ] Știu să anulez cu **Esc**  

**→ Minim când:** un coleg recunoaște ce ai făcut, fără explicații.  

### Pasul 2 — Complet
- [ ] Blochez pe axe cu **X / Y / Z**  
- [ ] Folosesc numere exacte  
- [ ] Scara are 6 trepte, la distanțe egale  
- [ ] Am făcut „Scara mea”: construcție proprie cu cel puțin 8 piese, cu numerele notate  
- [ ] Numele `B1_L03` e corect

---

## Bonus
- [ ] Adaugă o „bilă” sus, care să marcheze finalul scării

## Recapitulare rapidă
1. **G** mută · **R** rotește · **S** scalează  
2. **X / Y / Z** blochează pe o axă  
3. Numerele + **Enter** = precizie  
4. **Alt + G / R / S** resetează

## Schema pe scurt *(pe foaie — doar dacă o printezi separat)*

`Cele trei transformări` → `Blocare pe o axă` → `Numere exacte` → `Panoul de transformare (tasta N)` → `Resetări utile` → `Complet — „Scara spre cer”` → `Creează tu`

## Mai departe *(opțional)*
Uită-te la o scară reală și măsoară: ce înălțime are o treaptă? Încearcă să o refaci în Blender cu aceeași proporție.

## Quiz scurt
- Cum rotești un obiect cu exact 45° pe axa Z?  
- Ce face **S Z 2 Enter**?  
- Cum readuci obiectul în centru?

## Temă
Desenează pe hârtie o scenă cu 3 cuburi mutate, rotite și scalate diferit și scrie ce numere ai folosi.
