# Lecția 9 — Personajul meu
### Mini-proiect
**Modulul 1 · Primii pași**  
**Code Maker Club · Scratch Starter**

> Azi pui împreună tot ce ai învățat: o poveste scurtă despre **personajul tău**, cu scenă, sunet și un mic joc.  
> Proiect: **„Personajul meu”** · fișier: `Prenume_Nume_L9` (ex. `Ana_Pop_L9`)

---

## Obiectiv
La finalul orei ai un clip de aproximativ 30 de secunde, care pornește curat la <span style="color:#3F8F2A;font-weight:700">steagul verde</span> și în care personajele se mișcă, vorbesc, cântă și răspund la tastă sau la click, fără să explici nimic cu vocea.  
**Minim:** personajul 1 (Animalul tău) cu cel puțin **8 blocuri diferite**.  
**Ținta orei (Complet):** personajul 2 (Stăpânul), cu cel puțin **8 blocuri diferite**, care îl trezește pe Animal și îl cheamă acasă.

## De ce contează
Până acum ai învățat blocurile pe rând. Azi folosești aceleași blocuri într-o poveste întreagă, de la început până la sfârșit. Așa se fac jocurile și animațiile adevărate.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–5 | Obiectiv + ce reluăm azi |
| 5–30 | Pas cu pas: **3** mini-verificări (**Încearcă tu**) |
| 30–105 | Proiectul „Personajul meu” (vezi **Minim vs Complet**) |
| 105–120 | Recap, bonus, salvare |

**Capitole azi (toate 6):**  
<span style="color:#4C97FF;font-weight:700">Mișcare</span> · <span style="color:#E6A800;font-weight:700">Evenimente</span> · <span style="color:#9966FF;font-weight:700">Aspect</span> · <span style="color:#CF63CF;font-weight:700">Sunet</span> · <span style="color:#FFAB19;font-weight:700">Control</span> · <span style="color:#5CB1D1;font-weight:700">Detectare</span> *(doar `tasta [ ] apăsată?`)*

**Blocuri noi azi:** niciunul. Reluăm ce știi:

| Capitol | Ce reluăm |
|---------|-----------|
| <span style="color:#4C97FF;font-weight:700">Mișcare</span> | `setează x la`, `setează y la`, `modifică x cu`, `modifică y cu`, `glisează … la x: y:`, `orientează-te spre` |
| <span style="color:#E6A800;font-weight:700">Evenimente</span> | `când se dă click pe` steagul verde, `când primesc`, `difuzează`, `când tasta [ ] este apăsată`, `când se dă click pe acest personaj` |
| <span style="color:#9966FF;font-weight:700">Aspect</span> | `schimbă decorul la`, `spune … pentru … secunde`, `costumul următor`, `setează mărimea la`, `modifică efectul [culoare] cu` |
| <span style="color:#CF63CF;font-weight:700">Sunet</span> | `pornește sunetul`, `setează volumul la` |
| <span style="color:#FFAB19;font-weight:700">Control</span> | `repetă`, `așteaptă`, `la infinit`, `dacă … atunci`, `stop [totul]` |
| <span style="color:#5CB1D1;font-weight:700">Detectare</span> | `tasta [ ] apăsată?` |

---

## Pas cu pas

### 1) Planul pe hârtie
1. Alegi povestea: cine pornește, ce se întâmplă, cum se termină. Azi povestea e „Ziua animalului meu”: Stăpânul îl trezește, ies la plimbare, se joacă în grădină, apoi se întorc acasă
2. Desenezi pe o foaie cele **trei momente**: Cameră, Grădină, Acasă
3. Pentru fiecare personaj notezi cu ce bloc **pornește** (steag, `când primesc`, tastă sau click)
4. **Animalul** poate fi orice personaj îți place, nu doar un animal. E personajul tău

**Încearcă tu — planul (2–3 min)**  
- [ ] Ai cele **trei momente** pe foaie  
- [ ] Știi ce personaj pornește primul  

### 2) Ordinea pe scenă
1. Fiecare personaj are scriptul lui pe **steag**: se așază (`setează x la`, `setează y la`) și apoi așteaptă ce are de făcut
2. Ce vine **după** un mesaj pui sub `când primesc`, nu în același script cu steagul
3. Personajele **nu vorbesc deodată**: folosești `așteaptă` sau mesaje, ca la lecțiile trecute
4. Finalul (`stop [totul]`) vine **după** ce au terminat toți, nu înăuntrul unei bucle

**Încearcă tu — ordinea (2–3 min)**  
- [ ] Pe foaie ai pus ordinea: steag, apoi mesaj, apoi final  
- [ ] Doi colegi nu vorbesc în același timp pe scenă  

### 3) Cum testezi
1. Apeși steagul și vezi tot clipul, **fără să ții mouse-ul pe personaje**
2. Apeși steagul a doua oară: trebuie să înceapă curat, din același loc
3. Pe urmă încerci tastele și click-ul, ca să vezi că răspund

**Încearcă tu — testul (2–3 min)**  
- [ ] Steag de **două** ori → clipul începe curat  
- [ ] Săgețile mută Animalul, iar click-ul pe balon o face să sară  

---

## Greșeli frecvente
1. **La al doilea steag e haos** — personajele nu pornesc din același loc. Pune la start `setează x la` și `setează y la` pentru fiecare.  
2. **Vorbesc deodată** — lipsește `așteaptă` sau un mesaj între replici.  
3. **Clipul se oprește prea devreme** — `stop [totul]` e prea sus. Îl pui după ce termină toți.  
4. **Nu se aude nimic** — personajul nu are sunet în tab-ul Sunete, sau volumul PC e jos.  
5. **Decorul nu se schimbă** — mesajele `plimbare` și `acasă` nu sunt scrise la fel în `difuzează` și în `când primesc`.  
6. **Animalul nu merge cu săgețile** — `dacă` nu e în `la infinit`.  
7. **Nume fișier** — `Prenume_Nume_L9`, nu doar `Ana_L9`.  

---

## De făcut azi — „Personajul meu”
Salvat: `Prenume_Nume_L9`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1 + Pasul 2** — scena cu 2 decoruri + **Animalul** cu ≥ 8 blocuri diferite |
| **Complet (ținta orei)** | Minim + **Stăpânul** cu ≥ 8 blocuri diferite, care îl trezește pe Animal și îl cheamă acasă |

Dacă rămâi în urmă: salvează la **Minim**. Nu e eșec.  
Cei rapizi: Complet, apoi Bonus.

### Pasul 1 — Lumea *(Minim)*
Alegi două decoruri și le redenumești `Cameră` și `Grădină` (în această ordine). Redenumești personajele: `Animalul`, `Stăpânul`, `Balonul`. Animalul, Stăpânul și Balonul primesc în tab-ul **Sunete** câte un sunet (un lătrat, un fluier, un sunet de sărit). Pe **Scenă** faci scripturile:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">schimbă decorul la</span> `Cameră`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `plimbare`  
<span style="color:#9966FF;font-weight:700">schimbă decorul la</span> `Grădină`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `acasă`  
<span style="color:#9966FF;font-weight:700">schimbă decorul la</span> `Cameră`  

- [ ] `Cameră` și `Grădină` sunt decorurile din listă  
- [ ] Scripturile sunt pe **Scenă**  
- [ ] Personajele au sunetele lor  

### Pasul 2 — Animalul *(Minim)*
Alegi personajul tău, cu cel puțin 2 costume. Are **3 scripturi**. Ordinea e un **model**: poți schimba textele, numerele și mesajele.

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">setează x la</span> `-150`  
<span style="color:#4C97FF;font-weight:700">setează y la</span> `-80`  
<span style="color:#9966FF;font-weight:700">spune</span> `Bună dimineața!` pentru `2` secunde  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `2` secunde  
<span style="color:#E6A800;font-weight:700">difuzează</span> `plimbare`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `plimbare`  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span> *(un lătrat)*  
<span style="color:#FFAB19;font-weight:700">repetă</span> `6` → <span style="color:#4C97FF;font-weight:700">modifică x cu</span> `30` → <span style="color:#9966FF;font-weight:700">costumul următor</span> → <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,3`  
<span style="color:#4C97FF;font-weight:700">glisează în</span> `2` <span style="color:#4C97FF;font-weight:700">secunde la x:</span> `40` <span style="color:#4C97FF;font-weight:700">y:</span> `-60`  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">tasta [săgeată dreapta] apăsată?</span> <span style="color:#FFAB19;font-weight:700">atunci</span> → <span style="color:#4C97FF;font-weight:700">modifică x cu</span> `10`  
↳ <span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#5CB1D1;font-weight:700">tasta [săgeată stânga] apăsată?</span> <span style="color:#FFAB19;font-weight:700">atunci</span> → <span style="color:#4C97FF;font-weight:700">modifică x cu</span> `-10`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `acasă`  
<span style="color:#4C97FF;font-weight:700">setează x la</span> `-150`  
<span style="color:#4C97FF;font-weight:700">setează y la</span> `-80`  
<span style="color:#9966FF;font-weight:700">spune</span> `Zzz…` pentru `3` secunde  

- [ ] Fără Stăpân, Animalul pleacă singur la plimbare și îl poți mișca cu săgețile  
- [ ] Steag din nou → începe curat, în cameră  
- [ ] Salvat: `Prenume_Nume_L9`  

**→ Minim când:** Animalul salută, pleacă la plimbare cu decorul schimbat, aleargă, se oprește în grădină și îl poți mișca cu săgețile.

### Pasul 3 — Stăpânul *(Complet)*
Alegi un personaj care seamănă cu un stăpân. Are **3 scripturi**:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">setează x la</span> `150`  
<span style="color:#4C97FF;font-weight:700">setează y la</span> `-60`  
<span style="color:#4C97FF;font-weight:700">orientează-te spre</span> `Animalul`  
<span style="color:#CF63CF;font-weight:700">setează volumul la</span> `80` %  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span> *(un fluier)*  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `2` secunde  
<span style="color:#9966FF;font-weight:700">spune</span> `Hai la plimbare!` pentru `2` secunde  

<span style="color:#E6A800;font-weight:700">când primesc</span> `plimbare`  
<span style="color:#FFAB19;font-weight:700">repetă</span> `2` → <span style="color:#4C97FF;font-weight:700">modifică y cu</span> `10` → <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,3` → <span style="color:#4C97FF;font-weight:700">modifică y cu</span> `-10` → <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,3`  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `20` secunde  
<span style="color:#9966FF;font-weight:700">spune</span> `Gata, acasă!` pentru `2` secunde  
<span style="color:#E6A800;font-weight:700">difuzează</span> `acasă`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `acasă`  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `4` secunde  
<span style="color:#FFAB19;font-weight:700">stop [totul]</span>  

- [ ] Stăpânul fluieră primul, apoi spune „Hai la plimbare!” când Animalul așteaptă  
- [ ] În grădină se joacă 20 de secunde, apoi cheamă acasă  
- [ ] Decorul revine la `Cameră`, iar Animalul spune `Zzz…`  
- [ ] La final proiectul se oprește singur  
- [ ] Salvat din nou: `Prenume_Nume_L9`  

**Gata Complet când:** un coleg vede tot clipul de aproximativ 30 de secunde, de la fluier până la `Zzz…`, fără explicație cu vocea.

---

## Bonus (dacă ai terminat Complet)
- [ ] **Al 3-lea personaj** (Balonul), cu care te joci în grădină:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">setează x la</span> `100`  
<span style="color:#4C97FF;font-weight:700">setează y la</span> `-60`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `40` %  

<span style="color:#E6A800;font-weight:700">când se dă click pe acest personaj</span>  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span> *(un sunet de sărit)*  
<span style="color:#FFAB19;font-weight:700">repetă</span> `4` → <span style="color:#4C97FF;font-weight:700">modifică y cu</span> `20` → <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,1` → <span style="color:#4C97FF;font-weight:700">modifică y cu</span> `-20` → <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,1`  
<span style="color:#9966FF;font-weight:700">modifică efectul [culoare] cu</span> `25`  

<span style="color:#E6A800;font-weight:700">când tasta</span> `spațiu` <span style="color:#E6A800;font-weight:700">este apăsată</span>  
<span style="color:#4C97FF;font-weight:700">glisează în</span> `1` <span style="color:#4C97FF;font-weight:700">secundă la [poziție aleatoare]</span>  

- [ ] ★★★ **Provocare:** o tastă (de exemplu `m`) face Animalul mai mare sau mai mic, cu `dacă … altfel`, iar la `acasă` revine la normal cu `setează mărimea la` `100` %

## Recapitulare rapidă
1. Fiecare personaj are scriptul lui pe steag, ca să pornească mereu din același loc  
2. Mesajele (`difuzează` și `când primesc`) leagă personajele într-o poveste  
3. `așteaptă` și mesajele le fac să vorbească pe rând  
4. `la infinit` cu `dacă` face personajul să răspundă la tastă  
5. `stop [totul]` vine ultimul, după ce au terminat toți  
6. Nume: **`Prenume_Nume_L9`**  

## Schema pe scurt *(pe foaie)*

**Pe Scenă**  
la steag → `schimbă decorul la` Cameră  
când primesc plimbare → `schimbă decorul la` Grădină  
când primesc acasă → `schimbă decorul la` Cameră

**Pe Animal**  
la steag → `setează x` → `setează y` → `spune` → `așteaptă` → `difuzează plimbare`  
când primesc plimbare → `pornește sunetul` → `repetă` (`modifică x` + `costumul următor` + `așteaptă`) → `glisează` → `la infinit` (`dacă` `tasta` `atunci` `modifică x`)  
când primesc acasă → `setează x` → `setează y` → `spune`

**Pe Stăpân**  
la steag → `setează x` → `setează y` → `orientează-te spre` → `setează volumul` → `pornește sunetul` → `așteaptă` → `spune`  
când primesc plimbare → `repetă` (`modifică y` + `așteaptă`) → `așteaptă` → `spune` → `difuzează acasă`  
când primesc acasă → `așteaptă` → `stop`

**Quiz scurt (cu profesorul):**  
- Cum pornește Animalul după ce Stăpânul îl cheamă?  
- Cum faci ca două personaje să nu vorbească deodată?  
- De ce stă `stop [totul]` la final?  
- Ce trebuie să fie în `la infinit`, ca Animalul să răspundă la săgeți?

## Temă (opțional)
- Dacă ai doar Minim: adaugi acasă Stăpânul, în același `Prenume_Nume_L9`.  
- Dacă ai Complet: adaugi acasă al 3-lea personaj, în același `Prenume_Nume_L9`.  
- Dacă ai terminat și Bonusul: faci o copie și schimbi povestea (alt personaj, alt loc, alt final).
