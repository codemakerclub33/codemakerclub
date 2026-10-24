# Lecția 7 — Comoara (coordonate X și Y)
**Modulul 1 · Primii pași**  
**Code Maker Club · Scratch Starter**

> Azi scena e o **hartă**: citești **x** și **y**, apoi îți duci personajul pe ele, ca să găsești comoara.  
> Proiect: **„Comoara”** · fișier: `Prenume_Nume_L7` (ex. `Ana_Pop_L7`)

---

## Obiectiv
La finalul orei personajele tale se mută exact unde vrei, pe orizontală și pe verticală, cu blocuri din <span style="color:#4C97FF;font-weight:700">Mișcare</span>.  
**Minim:** personajul 1 (Piratul) cu cel puțin **8 blocuri diferite**.  
**Ținta orei (Complet):** personajul 2 (Papagalul), cu cel puțin **8 blocuri diferite**, care îl îndrumă pe Pirat.

## De ce contează
Ca pe o hartă sau în jocuri: știi unde e eroul (stânga sau dreapta, sus sau jos), ca să ajungă la țintă.  
În Scratch, poziția se numește **coordonate** (EN: *x position* și *y position*).

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–5 | Obiectiv + harta scenei (x, y, mijlocul) |
| 5–35 | Pas cu pas: **3** mini-verificări (**Încearcă tu**) |
| 35–105 | Proiectul „Comoara” (vezi **Minim vs Complet**) |
| 105–120 | Recap, bonus, salvare |

**Capitole azi (doar acestea 5):**  
<span style="color:#4C97FF;font-weight:700">Mișcare</span> · <span style="color:#E6A800;font-weight:700">Evenimente</span> · <span style="color:#FFAB19;font-weight:700">Control</span> · <span style="color:#9966FF;font-weight:700">Aspect</span> · <span style="color:#CF63CF;font-weight:700">Sunet</span>  
*(Detectare, Operatori, Variabile — mai târziu.)*

**Blocuri noi azi:**

| Bloc | Ce face |
|------|---------|
| `setează x la` | mută personajul exact pe poziția x aleasă (0 = mijlocul; pozitiv spre dreapta, negativ spre stânga) |
| `setează y la` | la fel, pe verticală (pozitiv în sus, negativ în jos) |
| `modifică x cu` | mută personajul spre dreapta (număr pozitiv) sau spre stânga (număr negativ), pornind de unde e acum |
| `modifică y cu` | la fel, în sus (număr pozitiv) sau în jos (număr negativ) |

---

## Pas cu pas

| Capitol | Ce iei azi |
|---------|------------|
| <span style="color:#4C97FF;font-weight:700">Mișcare</span> | **`setează x la`**, **`setează y la`**, **`modifică x cu`**, **`modifică y cu`**, `orientează-te spre` |
| <span style="color:#E6A800;font-weight:700">Evenimente</span> | `când se dă click pe` steagul verde, `când primesc`, `difuzează … și așteaptă`, `difuzează` |
| <span style="color:#FFAB19;font-weight:700">Control</span> | `repetă`, `așteaptă` |
| <span style="color:#9966FF;font-weight:700">Aspect</span> | `spune … pentru … secunde`, `gândește … pentru … secunde`, `setează mărimea la`, `modifică efectul [culoare] cu`, `costumul următor` |
| <span style="color:#CF63CF;font-weight:700">Sunet</span> | `pornește sunetul`, `setează volumul la` |

### 1) Citești x și y
1. Scena e o hartă: mijlocul are **x** `0` și **y** `0`
2. **x** merge pe orizontală: spre dreapta numerele sunt pozitive, spre stânga sunt negative
3. **y** merge pe verticală: în sus numerele sunt pozitive, în jos sunt negative
4. Selectezi personajul și îl tragi cu mouse-ul pe scenă. Sub scenă, în panoul personajului, vezi cum se schimbă **x** și **y**
5. Limitele hărții: **x** între `-240` și `240`, **y** între `-180` și `180`

**Încearcă tu — harta (2–3 min)**  
- [ ] Ai tras personajul în colțul din stânga jos și ai citit `x` și `y` negative  
- [ ] Ai tras personajul în colțul din dreapta sus și ai citit `x` și `y` pozitive  

### 2) Setează x și y
1. Din <span style="color:#E6A800;font-weight:700">Evenimente</span>: <span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>
2. Din <span style="color:#4C97FF;font-weight:700">Mișcare</span>: <span style="color:#4C97FF;font-weight:700">setează x la</span> `-200`, apoi <span style="color:#4C97FF;font-weight:700">setează y la</span> `-100`
3. Apeși steagul: personajul sare **exact** în colțul din stânga jos, de oriunde ar fi fost
4. Așa îl pui la **start**, mereu în același loc

**Încearcă tu — setează (2–3 min)**  
- [ ] Personajul sare în același loc la fiecare steag  
- [ ] Schimbi numerele și el sare în alt loc  

### 3) Modifică x și y
1. <span style="color:#4C97FF;font-weight:700">modifică x cu</span> `40` — personajul se mută cu `40` spre dreapta, de unde e acum. Cu `-40` se mută spre stânga
2. <span style="color:#4C97FF;font-weight:700">modifică y cu</span> `30` — se mută cu `30` în sus. Cu `-30` se mută în jos
3. Ca să se vadă drumul, le pui în <span style="color:#FFAB19;font-weight:700">repetă</span> `5` cu <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,3`
4. Diferența: `modifică` **adaugă** la poziția de acum, `setează` **pune** poziția exactă

**Încearcă tu — modifică (2–3 min)**  
- [ ] Personajul merge spre dreapta, în pași mici, cu `repetă`  
- [ ] Apoi urcă cu `modifică y cu`  
- [ ] Cu numere negative merge înapoi  

---

## Greșeli frecvente
1. **Personajul pornește din alt loc** — nu ai pus la start `setează x la` și `setează y la`. Fără ele continuă de unde a rămas.  
2. **`modifică` și `setează` se încurcă** — `modifică` adaugă la poziția de acum, `setează` pune poziția exactă.  
3. **Merge în direcția greșită** — pe verticală, sus e pozitiv și jos e negativ. Pe orizontală, dreapta e pozitiv și stânga e negativ.  
4. **Personajul iese din scenă** — x rămâne între `-240` și `240`, iar y între `-180` și `180`.  
5. **Se mută deodată** — fără `așteaptă` între mutări nu se vede drumul. Pune `așteaptă` `0,3` în `repetă`.  
6. **Mesajul nu ajunge** — numele din `difuzează` și din `când primesc` nu e același mesaj (`ajutor` și `ajutoare` sunt mesaje diferite).  
7. **Nume fișier** — `Prenume_Nume_L7`, nu doar `Ana_L7`.  

---

## De făcut azi — „Comoara”
Salvat: `Prenume_Nume_L7`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1 + Pasul 2** — harta cu sunete + **Piratul** cu ≥ 8 blocuri diferite |
| **Complet (ținta orei)** | Minim + **Papagalul** cu ≥ 8 blocuri diferite, care îl îndrumă pe Pirat |

Dacă rămâi în urmă: salvează la **Minim**. Nu e eșec.  
Cei rapizi: Complet, apoi Bonus.

### Pasul 1 — Harta *(Minim)*
Alegi un decor de insulă. Redenumești personajele: `Piratul`, `Papagalul`, `Comoara`. Papagalul și Comoara primesc în tab-ul **Sunete** câte un sunet potrivit (de exemplu un strigăt pentru papagal și un clinchet pentru comoară).

- [ ] Decor de insulă ales  
- [ ] Personajele sunt redenumite  
- [ ] Papagalul și Comoara au sunetul lor în tab-ul **Sunete**  

### Pasul 2 — Piratul *(Minim)*
Alegi un personaj din bibliotecă care seamănă cu un pirat sau cu un explorator. Ordinea e un **model**: poți schimba textele, numerele și mesajele.

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">setează x la</span> `-200`  
<span style="color:#4C97FF;font-weight:700">setează y la</span> `-100`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `100` %  
<span style="color:#9966FF;font-weight:700">spune</span> `Unde e comoara?` pentru `2` secunde  
<span style="color:#E6A800;font-weight:700">difuzează … și așteaptă</span> `ajutor`  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span> *(pași pe nisip)*  
<span style="color:#FFAB19;font-weight:700">repetă</span> `5` → <span style="color:#4C97FF;font-weight:700">modifică x cu</span> `40` → <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,3`  
<span style="color:#FFAB19;font-weight:700">repetă</span> `4` → <span style="color:#4C97FF;font-weight:700">modifică y cu</span> `30` → <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,3`  
<span style="color:#9966FF;font-weight:700">gândește</span> `Aici trebuie să fie!` pentru `2` secunde  
<span style="color:#E6A800;font-weight:700">difuzează</span> `găsit`  

- [ ] Fără Papagal, Piratul își termină scriptul singur  
- [ ] Steag din nou → pleacă din același loc  
- [ ] Salvat: `Prenume_Nume_L7`  

**→ Minim când:** Piratul întreabă unde e comoara, merge întâi spre dreapta, apoi în sus, se oprește la `x` `0` și `y` `20` și gândește că a ajuns.

### Pasul 3 — Papagalul *(Complet)*
Alegi un papagal sau altă pasăre. Are **2 scripturi**, iar al doilea răspunde când Piratul cere ajutor:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">setează x la</span> `180`  
<span style="color:#4C97FF;font-weight:700">setează y la</span> `100`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `80` %  
<span style="color:#CF63CF;font-weight:700">setează volumul la</span> `60` %  

<span style="color:#E6A800;font-weight:700">când primesc</span> `ajutor`  
<span style="color:#4C97FF;font-weight:700">orientează-te spre</span> `Piratul`  
<span style="color:#9966FF;font-weight:700">spune</span> `Mergi la dreapta, apoi în sus!` pentru `3` secunde  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span> *(un strigăt de papagal)*  
<span style="color:#FFAB19;font-weight:700">repetă</span> `3` → <span style="color:#4C97FF;font-weight:700">modifică y cu</span> `-10` → <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,3`  
<span style="color:#9966FF;font-weight:700">modifică efectul [culoare] cu</span> `25`  

- [ ] Papagalul stă sus în dreapta până cere ajutor Piratul  
- [ ] Răspunde în timp ce Piratul stă pe loc  
- [ ] După răspuns, Piratul pornește spre comoară  
- [ ] Salvat din nou: `Prenume_Nume_L7`  

**Gata Complet când:** Piratul întreabă, Papagalul îl îndrumă, apoi Piratul merge spre dreapta și în sus, fără explicație cu vocea.

---

## Bonus (dacă ai terminat Complet)
- [ ] **Al 3-lea personaj** (Comoara), care se deschide când e găsită:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">setează x la</span> `0`  
<span style="color:#4C97FF;font-weight:700">setează y la</span> `20`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `60` %  
<span style="color:#9966FF;font-weight:700">setează efectul [culoare] la</span> `0`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `găsit`  
<span style="color:#FFAB19;font-weight:700">repetă</span> `4` → <span style="color:#9966FF;font-weight:700">costumul următor</span> → <span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,3`  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span> *(un clinchet)*  
<span style="color:#9966FF;font-weight:700">modifică efectul [culoare] cu</span> `30`  
<span style="color:#4C97FF;font-weight:700">modifică y cu</span> `20`  
<span style="color:#9966FF;font-weight:700">spune</span> `Comoara e a ta!`  

- [ ] ★★★ **Provocare:** Piratul pornește din celălalt colț (`setează x la` `200`, `setează y la` `100`) și ajunge tot la comoară, folosind numere **negative** în `modifică`

## Recapitulare rapidă
1. **x** merge pe orizontală, **y** pe verticală, iar mijlocul e `0` și `0`  
2. `setează` **pune** poziția exactă, `modifică` **adaugă** la poziția de acum  
3. Numerele negative duc personajul spre stânga sau în jos  
4. La start pui `setează x la` și `setează y la`, ca să pornești mereu din același loc  
5. Nume: **`Prenume_Nume_L7`**  

## Schema pe scurt *(pe foaie)*

**Pe Pirat**  
la steag → `setează x la` → `setează y la` → `setează mărimea` → `spune` → `difuzează … și așteaptă ajutor` → `pornește sunetul` → `repetă` (`modifică x` + `așteaptă`) → `repetă` (`modifică y` + `așteaptă`) → `gândește` → `difuzează găsit`

**Pe Papagal**  
la steag → `setează x la` → `setează y la` → `setează mărimea` → `setează volumul`  
când primesc ajutor → `orientează-te spre` → `spune` → `pornește sunetul` → `repetă` (`modifică y` + `așteaptă`) → `modifică efectul`

**Quiz scurt (cu profesorul):**  
- Ce diferență e între `setează x la` și `modifică x cu`?  
- Încotro merge personajul la `modifică y cu` `-20`?  
- Cât sunt x și y în mijlocul scenei?  
- De ce pui `setează x la` și `setează y la` la start?

## Temă (opțional)
- Dacă ai doar Minim: adaugi acasă Papagalul, în același `Prenume_Nume_L7`.  
- Dacă ai Complet: adaugi acasă al 3-lea personaj, în același `Prenume_Nume_L7`.  
- Dacă ai terminat și Bonusul: faci o copie și schimbi povestea (alte personaje, alt traseu, altă comoară).
