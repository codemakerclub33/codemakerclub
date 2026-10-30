# Lecția 2 — Sistemul solar în cursă
**Modulul 3 · Jocuri**  
**Code Maker Club · Game Builder**

> Azi faci o cursă a planetelor: pariezi pe una, iar fiecare planetă care ajunge la sosire se scrie singură într-o **listă**, ca într-un clasament. Dacă ai ghicit câștigătoarea, primești un punct.  
> Proiect: **„Sistemul solar în cursă”** · fișier: `Prenume_Nume_L2` (ex. `Ana_Pop_L2`)

---

## Obiectiv
La finalul orei ai un joc: Astronautul te întreabă pe ce planetă pariezi, opt planete aleargă prin spațiu, iar lista `clasament` arată ordinea sosirii. Dacă planeta ta ajunge prima, scorul crește. Planetele din joc sunt **toate cele opt** de la Soare: **Mercur, Venus, Terra, Marte, Jupiter, Saturn, Uranus și Neptun**.  
**Minim:** personajul 1 (Mercur), cu scriptul întreg, și personajul 2 (Astronautul), cu **2 scripturi**.  
**Ținta orei (Complet):** încă șapte planete (Venus, Terra, Marte, Jupiter, Saturn, Uranus și Neptun), fiecare cu scriptul ei întreg, care aleargă, se scriu în listă și dau scorul.

## De ce contează
Un joc ține minte lucruri: cine a ajuns primul, cine a câștigat, ce ai strâns. O **variabilă** ține minte **o singură** valoare, de exemplu `scor`. O **listă** ține minte **mai multe**, una după alta, ca un clasament sau un caiet. Cu blocurile din <span style="color:#FF8C1A;font-weight:700">Variabile</span> (EN: *Variables*) creezi o listă, adaugi în ea, o arăți, o ascunzi și o golești.

**În clasă:** fiecare planetă din cursă are scriptul ei. Variabilele `loc` și `scor` și lista `clasament` sunt **pentru toate personajele**, ca să le poată folosi toate.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–5 | Obiectiv + blocurile noi din Variabile |
| 5–35 | Pas cu pas: **4** mini-verificări (**Încearcă tu**) |
| 35–105 | Proiectul „Sistemul solar în cursă” (vezi **Minim vs Complet**) |
| 105–120 | Recap, bonus, salvare |

**Capitole azi (doar acestea 7):**  
<span style="color:#FF8C1A;font-weight:700">Variabile</span> · <span style="color:#E6A800;font-weight:700">Evenimente</span> · <span style="color:#4C97FF;font-weight:700">Mișcare</span> · <span style="color:#FFAB19;font-weight:700">Control</span> · <span style="color:#5CB1D1;font-weight:700">Detectare</span> · <span style="color:#59C059;font-weight:700">Operatori</span> · <span style="color:#9966FF;font-weight:700">Aspect</span>  
*(Restul din Variabile — mai târziu.)*

**Blocuri noi azi:**

| Bloc | Ce face |
|------|---------|
| `Creează o listă` | buton: creează o listă nouă, cu numele ales de tine |
| `[clasament]` | valoarea listei: tot ce e scris în ea; bifa de lângă ea o arată pe scenă |
| `adaugă (element) la [listă]` | scrie un element nou la sfârșitul listei |
| `arată lista [listă]` | afișează lista pe scenă |
| `ascunde lista [listă]` | ascunde lista de pe scenă |
| `șterge tot din [listă]` | golește lista |

---

## Pas cu pas

| Capitol | Ce iei azi |
|---------|------------|
| <span style="color:#FF8C1A;font-weight:700">Variabile</span> | **`Creează o listă`**, **`[clasament]`**, **`adaugă … la`**, **`arată lista`**, **`ascunde lista`**, **`șterge tot din`**, `Creează o variabilă`, `setează … la`, `modifică … cu` |
| <span style="color:#E6A800;font-weight:700">Evenimente</span> | `când se dă click pe` steagul verde, `când tasta [ ] este apăsată`, `când primesc`, `difuzează`, `când se dă click pe acest personaj` |
| <span style="color:#4C97FF;font-weight:700">Mișcare</span> | `mergi la x: y:`, `modifică x cu`, `poziția x`, `rotește ↻ ( ) grade` |
| <span style="color:#FFAB19;font-weight:700">Control</span> | `repetă până când`, `dacă … atunci`, `așteaptă`, `la infinit` |
| <span style="color:#5CB1D1;font-weight:700">Detectare</span> | `întreabă ( ) și așteaptă`, `răspuns` |
| <span style="color:#59C059;font-weight:700">Operatori</span> | `alege aleator între ( ) și ( )`, `( ) > ( )`, `( ) = ( )`, `<> și <>`, `alătură ( ) ( )` |
| <span style="color:#9966FF;font-weight:700">Aspect</span> | `spune … pentru … secunde`, `setează mărimea la`, `modifică efectul [culoare] cu` |

### 1) Lista: un caiet cu mai multe rânduri
1. În <span style="color:#FF8C1A;font-weight:700">Variabile</span> apeși **Creează o listă**, scrii numele `clasament` și alegi **pentru toate personajele**
2. Pe scenă apare o fereastră goală, cu numele listei. Dacă bifa de lângă `clasament` e pusă, lista se vede, iar dacă o scoți, dispare
3. <span style="color:#FF8C1A;font-weight:700">adaugă (element) la [clasament]</span> scrie un rând nou, la sfârșit. Scrii în loc de „element” orice text, de exemplu `Mercur`
4. Faci click pe bloc de mai multe ori: fiecare click adaugă încă un rând

**Încearcă tu — lista (3–4 min)**  
- [ ] Ai creat lista `clasament`, **pentru toate personajele**  
- [ ] Cu `adaugă (Mercur) la [clasament]` apare un rând în fereastra listei  
- [ ] Încă un click adaugă încă un rând, sub primul  

### 2) Golește, arată, ascunde
1. <span style="color:#FF8C1A;font-weight:700">șterge tot din [clasament]</span> golește lista. La începutul fiecărei curse o golești, ca să nu rămână rândurile din cursa trecută
2. **Atenție:** `șterge tot din [listă]` este alt bloc decât `șterge tot` din extensia **Stilou**: acela șterge desenul de pe scenă, nu lista
3. <span style="color:#FF8C1A;font-weight:700">arată lista [clasament]</span> o afișează pe scenă, iar <span style="color:#FF8C1A;font-weight:700">ascunde lista [clasament]</span> o ascunde. Seamănă cu `arată variabila` și `ascunde variabila`

**Încearcă tu — arată și golește (2–3 min)**  
- [ ] Cu `ascunde lista` fereastra dispare, cu `arată lista` apare la loc  
- [ ] Cu `șterge tot din [clasament]` lista rămâne goală  

### 3) Un loc după altul
1. Creezi o variabilă `loc`, **pentru toate personajele**. Ea numără câte planete au ajuns deja
2. Fiecare planetă care ajunge face `modifică loc cu 1` și apoi `adaugă`. Prima ajunge cu `loc = 1`, a doua cu `loc = 2` și tot așa
3. Ca în listă să apară „1. Mercur”, folosești `alătură ((loc)) (. Mercur)`: primul loc primește valoarea `loc`, al doilea text este punctul, spațiul și numele
4. Cele două blocuri `modifică loc cu 1` și `adaugă` stau **unul după altul**, fără pauză între ele: așa două planete nu primesc același loc

**Încearcă tu — locul (3 min)**  
- [ ] `loc` și `scor` sunt variabile pentru toate personajele  
- [ ] După `setează loc la 0` și `modifică loc cu 1`, `loc` arată `1`  
- [ ] `adaugă (alătură (loc) (. Mercur)) la [clasament]` scrie în listă `1. Mercur`  

### 4) Le punem împreună
1. **Cursa:** fiecare planetă pleacă din stânga și `repetă până când <(poziția x) > 200>`. În repetare face `modifică x cu (alege aleator între 1 și 4)`: la fiecare pas are alt pas, deci câștigătoarea se schimbă la fiecare cursă
2. **Pariul:** `întreabă (Pe ce planetă pariezi?) și așteaptă` salvează ce scrii în `răspuns`
3. **Scorul:** la sosire, planeta verifică `dacă <<(loc) = 1> și <(răspuns) = Mercur>>`: a ajuns prima **și** ai pariat pe ea. Atunci `modifică scor cu 1`
4. **Mesajul:** Astronautul difuzează `start` după pariu, iar planetele pornesc la `când primesc` `start`

**Încearcă tu — împreună (3 min)**  
- [ ] Planeta ajunge în dreapta într-un timp diferit la fiecare cursă  
- [ ] Când ajunge, apare în listă cu locul ei  
- [ ] Dacă `loc` este `1` și ai scris numele ei la pariu, scorul crește cu unu  

---

## Greșeli frecvente
1. **Nu se vede lista** — bifa de lângă `clasament` nu e pusă, sau lipsește `arată lista` de la Astronaut.  
2. **În listă rămân rândurile din cursa trecută** — lipsește `șterge tot din [clasament]` la începutul cursei.  
3. **Două planete au același loc** — `loc` e făcută numai pentru un personaj. Trebuie să fie **pentru toate personajele**. Verifică și ordinea: `modifică loc cu 1` vine **înainte** de `adaugă`.  
4. **Locul începe de la zero** — lipsește `setează loc la 0` la începutul cursei, sau ai uitat `modifică loc cu 1`.  
5. **Scorul nu crește** — numele din `răspuns = …` nu e același cu cel scris de tine la pariu. Spațiul în plus **contează**.  
6. **Scorul crește la toate planetele** — ai copiat scriptul, dar nu ai schimbat numele din `răspuns = …` pe fiecare planetă.  
7. **Planetele nu pornesc după pariu** — au rămas cu `când se dă click pe steagul verde` în loc de `când primesc` `start`, sau mesajul nu are același nume la Astronaut și la planete.  
8. **Planetele sunt una peste alta** — nu ai schimbat `y` din `mergi la x: y:` la fiecare copie.  
9. **Cursa se strică dacă apeși spațiu în timpul ei** — așteaptă să sosească toate planetele, apoi apeși spațiu pentru runda următoare.  
10. **Mesajul nu ajunge** — `start` și `startul` sunt mesaje diferite. Alegi același nume din listă.  
11. **Ai folosit `șterge tot` din Stilou** — acela șterge desenul. Pentru listă folosești `șterge tot din [clasament]`, din <span style="color:#FF8C1A;font-weight:700">Variabile</span>.  
12. **Nume fișier** — `Prenume_Nume_L2`, nu doar `Ana_L2`.  

---

## De făcut azi — „Sistemul solar în cursă”
Salvat: `Prenume_Nume_L2`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1 + Pasul 2 + Pasul 3**: spațiul, variabilele, lista, **Mercur** cu scriptul întreg și **Astronautul** cu cele **2 scripturi**: pariezi, pornești cursa, Mercur aleargă, se scrie în listă și dă scorul |
| **Complet (ținta orei)** | Minim + **Pasul 4**: **celelalte șapte planete**, fiecare cu scriptul lui întreg. Cursa are opt planete |
| **Bonus** | **Pasul 5**: **Soarele**, cu **3 scripturi**. Scripturile celorlalte personaje nu se mai schimbă |

Fiecare personaj are scripturile lui **întregi**, de la început. Nu se completează nimic după aceea.

Dacă rămâi în urmă: salvează ce ai. Nu e eșec.  
Cei rapizi: Complet, apoi Bonus.

### Pasul 1 — Spațiul, variabilele și lista *(Minim)*
**Decorul:** alegi din bibliotecă `Stars`.  
**Mercur:** în tab-ul **Costume** al unui personaj nou alegi **Desenează** și cu unealta **Cerc** faci un cerc mic, gri (cu **Umple**). Îl redenumești `Mercur`.  
**Variabilele și lista:** creezi `loc` și `scor`, apoi lista `clasament`, toate **pentru toate personajele**.

- [ ] Decorul `Stars`  
- [ ] Personajul se numește `Mercur` și e un cerc gri, mic  
- [ ] Variabilele `loc` și `scor` și lista `clasament` sunt **pentru toate personajele**

### Pasul 2 — Mercur, scriptul întreg *(Minim)*
Ordinea e un **model**: poți schimba numerele și locul de start. Mercur are **un singur script**. Pornește când Astronautul difuzează `start`, deci merge după ce faci și Pasul 3:

<span style="color:#E6A800;font-weight:700">când primesc</span> `start`  
<span style="color:#FF8C1A;font-weight:700">șterge tot din</span> `[clasament]`  
<span style="color:#FF8C1A;font-weight:700">setează loc la</span> `0`  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `-200` <span style="color:#4C97FF;font-weight:700">y:</span> `150`  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `1` secundă  
<span style="color:#FFAB19;font-weight:700">repetă până când</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#4C97FF;font-weight:700">(poziția x)</span> <span style="color:#59C059;font-weight:700">&gt;</span> `200` <span style="color:#59C059;font-weight:700">&gt;</span>  
↳ <span style="color:#4C97FF;font-weight:700">modifică x cu</span> <span style="color:#59C059;font-weight:700">(alege aleator între</span> `1` <span style="color:#59C059;font-weight:700">și</span> `4`<span style="color:#59C059;font-weight:700">)</span>  
<span style="color:#FF8C1A;font-weight:700">modifică loc cu</span> `1`  
<span style="color:#FF8C1A;font-weight:700">adaugă</span> <span style="color:#59C059;font-weight:700">(alătură</span> <span style="color:#FF8C1A;font-weight:700">(loc)</span> `. Mercur` <span style="color:#59C059;font-weight:700">)</span> <span style="color:#FF8C1A;font-weight:700">la</span> `[clasament]`  
<span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;&lt;</span><span style="color:#FF8C1A;font-weight:700">(loc)</span> <span style="color:#59C059;font-weight:700">=</span> `1` <span style="color:#59C059;font-weight:700">&gt; și &lt;</span><span style="color:#5CB1D1;font-weight:700">(răspuns)</span> <span style="color:#59C059;font-weight:700">=</span> `Mercur` <span style="color:#59C059;font-weight:700">&gt;&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">modifică scor cu</span> `1`  
<span style="color:#9966FF;font-weight:700">spune</span> `Am ajuns!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde

- [ ] Lista e goală când începe cursa  
- [ ] Mercur pleacă din stânga și aleargă spre dreapta, cu viteză diferită la fiecare cursă  
- [ ] La sosire apare în listă: `1. Mercur`  
- [ ] Dacă ai pariat pe Mercur și a ajuns primul, scorul crește cu unu  
- [ ] Spune „Am ajuns!”  
- [ ] Salvat: `Prenume_Nume_L2`  

### Pasul 3 — Astronautul *(Minim)*
**Astronautul:** adaugi din bibliotecă un personaj de om sau o rachetă (`Rocketship`) și îl redenumești `Astronautul`. Are **2 scripturi** complete:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `-180` <span style="color:#4C97FF;font-weight:700">y:</span> `-145`  
<span style="color:#FF8C1A;font-weight:700">setează scor la</span> `0`  
<span style="color:#FF8C1A;font-weight:700">arată lista</span> `[clasament]`  
<span style="color:#5CB1D1;font-weight:700">întreabă</span> `Pe ce planetă pariezi? De la Mercur la Neptun` <span style="color:#5CB1D1;font-weight:700">și așteaptă</span>  
<span style="color:#E6A800;font-weight:700">difuzează</span> `start`  
<span style="color:#9966FF;font-weight:700">spune</span> `Start!` <span style="color:#9966FF;font-weight:700">pentru</span> `1` secundă  

<span style="color:#E6A800;font-weight:700">când tasta</span> `[spațiu]` <span style="color:#E6A800;font-weight:700">este apăsată</span>  
<span style="color:#5CB1D1;font-weight:700">întreabă</span> `Runda nouă! Pe ce planetă pariezi?` <span style="color:#5CB1D1;font-weight:700">și așteaptă</span>  
<span style="color:#E6A800;font-weight:700">difuzează</span> `start`  
<span style="color:#9966FF;font-weight:700">spune</span> `Start!` <span style="color:#9966FF;font-weight:700">pentru</span> `1` secundă

- [ ] Astronautul întreabă pe ce planetă pariezi și pornește cursa  
- [ ] Mercur aleargă și apare în listă, la locul `1`  
- [ ] La spațiu începe o rundă nouă, iar scorul rămâne  
- [ ] Salvat din nou: `Prenume_Nume_L2`  

**→ Minim când:** apeși pe steag, pariezi pe Mercur, Mercur aleargă până în dreapta, apare scris în listă cu locul `1`, iar scorul crește dacă ai pariat pe el.

### Pasul 4 — Celelalte șapte planete *(Complet)*
Fiecare planetă e un personaj nou: **Desenează** un cerc mic, colorat cu **Umple** (Venus portocaliu, Terra albastru-verde, Marte roșu, Jupiter maro-portocaliu, Saturn galben, Uranus azuriu, Neptun albastru închis), apoi îl redenumești. Ca să scrii mai repede, poți trage scriptul lui Mercur peste personajul planetei, dar scriptul final trebuie să arate **exact** ca cel de mai jos, cu numele și `y`-ul planetei. Fiecare planetă are **un singur script**, complet. Mai jos e scriptul pentru **Venus**; la celelalte schimbi doar `y`, numele din `alătură` și numele din `răspuns = …`, cu valorile din tabel:

**Venus**

<span style="color:#E6A800;font-weight:700">când primesc</span> `start`  
<span style="color:#FF8C1A;font-weight:700">șterge tot din</span> `[clasament]`  
<span style="color:#FF8C1A;font-weight:700">setează loc la</span> `0`  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `-200` <span style="color:#4C97FF;font-weight:700">y:</span> `115`  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `1` secundă  
<span style="color:#FFAB19;font-weight:700">repetă până când</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#4C97FF;font-weight:700">(poziția x)</span> <span style="color:#59C059;font-weight:700">&gt;</span> `200` <span style="color:#59C059;font-weight:700">&gt;</span>  
↳ <span style="color:#4C97FF;font-weight:700">modifică x cu</span> <span style="color:#59C059;font-weight:700">(alege aleator între</span> `1` <span style="color:#59C059;font-weight:700">și</span> `4`<span style="color:#59C059;font-weight:700">)</span>  
<span style="color:#FF8C1A;font-weight:700">modifică loc cu</span> `1`  
<span style="color:#FF8C1A;font-weight:700">adaugă</span> <span style="color:#59C059;font-weight:700">(alătură</span> <span style="color:#FF8C1A;font-weight:700">(loc)</span> `. Venus` <span style="color:#59C059;font-weight:700">)</span> <span style="color:#FF8C1A;font-weight:700">la</span> `[clasament]`  
<span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;&lt;</span><span style="color:#FF8C1A;font-weight:700">(loc)</span> <span style="color:#59C059;font-weight:700">=</span> `1` <span style="color:#59C059;font-weight:700">&gt; și &lt;</span><span style="color:#5CB1D1;font-weight:700">(răspuns)</span> <span style="color:#59C059;font-weight:700">=</span> `Venus` <span style="color:#59C059;font-weight:700">&gt;&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#FF8C1A;font-weight:700">modifică scor cu</span> `1`  
<span style="color:#9966FF;font-weight:700">spune</span> `Am ajuns!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde

| Planeta | `y` din `mergi la x: y:` | `alătură` și `răspuns` |
|---------|-----------|-----------|
| Mercur | `150` | `Mercur` |
| Venus | `115` | `Venus` |
| Terra | `80` | `Terra` |
| Marte | `45` | `Marte` |
| Jupiter | `10` | `Jupiter` |
| Saturn | `-25` | `Saturn` |
| Uranus | `-60` | `Uranus` |
| Neptun | `-95` | `Neptun` |

- [ ] Cele opt planete pleacă toate odată, cu viteze diferite  
- [ ] Planetele nu stau una peste alta (`y` din tabel)  
- [ ] Planetele se scriu în listă în ordinea sosirii: `1. …`, până la `8. …`  
- [ ] Dacă ai pariat pe câștigătoare, scorul crește cu unu  
- [ ] La spațiu începe o rundă nouă, iar scorul rămâne  
- [ ] Salvat din nou: `Prenume_Nume_L2`  

**Gata Complet când:** apeși pe steag, pariezi pe o planetă, aleargă toate opt, lista arată ordinea sosirii, iar scorul crește doar când ai ghicit câștigătoarea, fără explicație cu vocea.

---

## Bonus (dacă ai terminat Complet)
### Pasul 5 — Soarele *(★★★)*
Al 3-lea personaj se rotește și arată sau ascunde lista cu două taste. Adaugi din bibliotecă un personaj rotund, galben (sau desenezi un cerc), îl redenumești `Soarele` și îi pui **3 scripturi** complete:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `-150`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `100` %  
<span style="color:#9966FF;font-weight:700">spune</span> `Eu sunt Soarele! Mercur e cea mai apropiată planetă de mine.` <span style="color:#9966FF;font-weight:700">pentru</span> `3` secunde  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#4C97FF;font-weight:700">rotește ↻</span> `1` <span style="color:#4C97FF;font-weight:700">grade</span>  
↳ <span style="color:#9966FF;font-weight:700">modifică efectul [culoare] cu</span> `1`  

<span style="color:#E6A800;font-weight:700">când tasta</span> `[a]` <span style="color:#E6A800;font-weight:700">este apăsată</span>  
<span style="color:#FF8C1A;font-weight:700">arată lista</span> `[clasament]`  

<span style="color:#E6A800;font-weight:700">când tasta</span> `[c]` <span style="color:#E6A800;font-weight:700">este apăsată</span>  
<span style="color:#FF8C1A;font-weight:700">ascunde lista</span> `[clasament]`

- [ ] ★★★ **Provocare:** adaugi o a noua planetă: **Pluto**, o planetă pitică. Faci o copie a lui Mercur, schimbi numele, culoarea, `y` (`-130`) și numele din `alătură` și din `răspuns = …`. Nu schimbi nimic la Astronaut, dar pariul îl poți scrie pe orice planetă din cursă

## Recapitulare rapidă
1. O **variabilă** ține minte o valoare, o **listă** ține minte mai multe, una după alta  
2. `Creează o listă`, apoi `adaugă (element) la [listă]` scrie un rând nou la sfârșit  
3. `șterge tot din [listă]` golește lista, `arată lista` o afișează, `ascunde lista` o ascunde  
4. `modifică loc cu 1` urmat imediat de `adaugă` dă fiecărei planete locul ei  
5. `alătură` lipește un număr și un nume ca să scrii „1. Mercur”  
6. Lista și variabilele folosite de mai multe personaje se fac **pentru toate personajele**  
7. Nume: **`Prenume_Nume_L2`**  

## Schema pe scurt *(pe foaie)*

**Pe Astronaut**  
la steag → `mergi la x: y:` → `setează scor la 0` → `arată lista [clasament]` → `întreabă` → `difuzează start` → `spune Start!`  
când tasta [spațiu] este apăsată → `întreabă` → `difuzează start` → `spune Start!`

**Pe fiecare planetă** *(Mercur, Venus, Terra, Marte, Jupiter, Saturn, Uranus și Neptun, cu alt nume, alt y)*  
când primesc start → `șterge tot din [clasament]` → `setează loc la 0` → `mergi la x: y:` → `așteaptă 1` → `repetă până când <(poziția x) > 200>` (`modifică x cu (alege aleator între 1 și 4)`) → `modifică loc cu 1` → `adaugă (alătură (loc) (. Mercur)) la [clasament]` → `dacă <<(loc) = 1> și <(răspuns) = Mercur>>` `atunci` `modifică scor cu 1` → `spune Am ajuns!`

**Pe Soare** *(Bonus)*  
la steag → `mergi la x: y:` → `setează mărimea la 100` → `spune` → `la infinit` (`rotește 1 grad` + `modifică efectul [culoare] cu 1`)  
când tasta [a] → `arată lista [clasament]`  
când tasta [c] → `ascunde lista [clasament]`

**Quiz scurt (cu profesorul):**  
- Care e diferența dintre o variabilă și o listă?  
- Ce face `adaugă (element) la [listă]`? Unde apare elementul nou?  
- De ce `modifică loc cu 1` și `adaugă` stau unul după altul, fără pauză între ele?  
- De ce `șterge tot din [clasament]` e la începutul fiecărei curse?

## Temă (opțional)
- Dacă ai doar Minim: adaugi acasă celelalte șapte planete (Pasul 4), în același `Prenume_Nume_L2`.  
- Dacă ai Complet: adaugi acasă Soarele (Pasul 5), în același `Prenume_Nume_L2`.  
- Dacă ai terminat și Bonusul: schimbi cursa într-o cursă de animale sau de mașini, cu altă listă și alt decor.
