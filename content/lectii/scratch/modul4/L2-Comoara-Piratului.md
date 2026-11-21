# Lecția 2 — Comoara Piratului
### Poveste cu alegeri și finaluri diferite
**Modulul 4 · Proiecte & autonomie**  
**Code Maker Club · Scratch Creator**

> Azi faci un joc-poveste în care **tu alegi drumul**: Piratul și Papagalul caută o comoară pe o insulă. Ei merg în peșteră sau în junglă, apoi aleg un tunel. Fără o Torță în rucsac, comoara rămâne în întuneric, iar fiecare alegere duce la alt final.  
> Proiect: **„Comoara Piratului”** · fișier: `Prenume_Nume_M4_L2` (ex. `Ana_Pop_M4_L2`)  
> **Joc de sine stătător**, într-un fișier nou, cu start, final și restart.

---

## Obiectiv
La finalul orei cineva poate juca povestea de la început până la un final, fără să-i explici nimic. Cu steagul verde, povestea pornește mereu de la început.  
**Minim:** Papagalul, Piratul, două butoane și Scenă, cu povestea de bază: **2 alegeri** și **3 finaluri**. Butonul A are cel puțin **10 blocuri diferite**.  
**Ținta orei (Complet):** personajul 5 (Torța), cu cel puțin **12 blocuri diferite**, scris **după o schemă**. Piratul o ia în **rucsac** (o listă), iar fără ea comoara rămâne în întuneric.

## De ce contează
În jocurile și filmele interactive, **alegerea** schimbă ce urmează. În Scratch, o alegere înseamnă un click pe un buton, care **difuzează** un mesaj. Fiecare personaj care primește mesajul face ce are de făcut în acea poveste. Pentru butoane faci un **bloc propriu cu intrare**, iar pentru ce ai strâns pe drum folosești o **listă**: rucsacul. Cu o variabilă care ține minte unde ești în poveste, poți folosi aceleași două butoane la fiecare alegere.

**În clasă:** variabila de azi se numește `etapa` și e **pentru toate personajele**.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–5 | Obiectiv + poveste liniară vs poveste cu alegeri |
| 5–35 | Pas cu pas: **4** mini-verificări (**Încearcă tu**) |
| 35–105 | Proiectul „Comoara Piratului” (vezi **Minim vs Complet**) |
| 105–120 | Recap, bonus, salvare |

**Capitole azi (8):**  
<span style="color:#E6A800;font-weight:700">Evenimente</span> · <span style="color:#FFAB19;font-weight:700">Control</span> · <span style="color:#9966FF;font-weight:700">Aspect</span> · <span style="color:#CF63CF;font-weight:700">Sunet</span> · <span style="color:#FF8C1A;font-weight:700">Variabile</span> · <span style="color:#59C059;font-weight:700">Operatori</span> · <span style="color:#4C97FF;font-weight:700">Mișcare</span> · <span style="color:#FF6680;font-weight:700">Blocurile mele</span>

**Blocuri noi azi:** niciunul. Folosim ce știi, ca să construim o poveste cu mai multe drumuri și mai multe personaje.

---

## Pas cu pas

| Capitol | Ce reluăm azi |
|---------|---------------|
| <span style="color:#E6A800;font-weight:700">Evenimente</span> | `când se dă click pe` steagul verde, `când se dă click pe acest personaj`, `difuzează`, `când primesc` |
| <span style="color:#FFAB19;font-weight:700">Control</span> | `dacă … atunci`, `așteaptă` |
| <span style="color:#9966FF;font-weight:700">Aspect</span> | `spune … pentru … secunde`, `spune`, `schimbă decorul la`, `arată`, `ascunde`, `setează mărimea la`, `anulează efectele grafice` |
| <span style="color:#CF63CF;font-weight:700">Sunet</span> | `pornește sunetul`, `oprește toate sunetele` |
| <span style="color:#FF8C1A;font-weight:700">Variabile</span> | `setează … la` |
| <span style="color:#59C059;font-weight:700">Operatori</span> | `( ) = ( )` |
| <span style="color:#4C97FF;font-weight:700">Mișcare</span> | `mergi la x: y:` |
| <span style="color:#FF6680;font-weight:700">Blocurile mele</span> | `creează un bloc` cu o intrare, `definește` |
| <span style="color:#FF8C1A;font-weight:700">Variabile</span> (liste) | `adaugă ( ) la [listă]`, `șterge tot din [listă]`, `<[listă] conține ( )?>` *(la Complet)* |

### 1) Un buton care alege
1. Un buton e un personaj pe care dai click. La steag îl pui pe <span style="color:#9966FF;font-weight:700">ascunde</span>, pentru că un personaj ascuns nu poate fi apăsat
2. Butonul își arată textul cu un **bloc propriu**: <span style="color:#FF6680;font-weight:700">oferă (text)</span>. Definiția: <span style="color:#FF6680;font-weight:700">definește oferă (text)</span> → <span style="color:#9966FF;font-weight:700">spune</span> `(text)` și <span style="color:#9966FF;font-weight:700">arată</span>. Îl folosești pentru fiecare alegere, cu alt text
3. Când vine momentul alegerii, mesajul `alegere_1` îl face să apară: <span style="color:#E6A800;font-weight:700">când primesc</span> `alegere_1` → <span style="color:#FF6680;font-weight:700">oferă</span> `Peștera`
4. La click, butonul face două lucruri: <span style="color:#9966FF;font-weight:700">ascunde</span> butoanele și <span style="color:#E6A800;font-weight:700">difuzează</span> un mesaj nou, care spune povestea mai departe. Textul de pe buton îl scrii cu <span style="color:#9966FF;font-weight:700">spune</span> **fără timp**: bula dispare singură când butonul se ascunde. Pentru restul poveștii, `spune` are mereu **timp**

**Încearcă tu — butonul (4–5 min)**  
- [ ] Un buton e ascuns la steag  
- [ ] Ai făcut blocul `oferă` cu intrarea `text`, iar parametrul e tras în `spune`  
- [ ] Butonul apare cu textul „Peștera”, iar la click dispare și difuzează un mesaj nou  

### 2) Replici cu timp
1. Fiecare replică are <span style="color:#9966FF;font-weight:700">spune</span> … <span style="color:#9966FF;font-weight:700">pentru</span> … <span style="color:#9966FF;font-weight:700">secunde</span>. Fără timp, textul rămâne pe scenă
2. Regula: `2 secunde + 1 secundă pentru fiecare 4 cuvinte`. „Salut!” are `2` secunde, iar o frază de 9 cuvinte are `2 + 2 = 4` secunde
3. Când doi vorbesc în aceeași scenă, al doilea așteaptă cu <span style="color:#FFAB19;font-weight:700">așteaptă</span>, ca să nu vorbească amândoi deodată
4. Un `spune` care ține mai puțin decât textul se citește greu

**Încearcă tu — replicile (3–4 min)**  
- [ ] Un personaj spune o frază de 9 cuvinte cu `4` secunde  
- [ ] Un al doilea personaj vorbește după el, cu `așteaptă`  
- [ ] Nicio replică nu rămâne pe ecran după ce a trecut timpul  

### 3) Aceleași butoane, alegeri diferite
1. Nu faci patru butoane pentru patru alegeri. Faci **două**, care își schimbă textul, după cum e povestea
2. Variabila `etapa` ține minte la ce alegere ești: `1` la prima alegere, `2` la a doua
3. La click, butonul A alege după `etapa`: <span style="color:#FFAB19;font-weight:700">dacă</span> `etapa = 1` <span style="color:#FFAB19;font-weight:700">atunci</span> difuzează `peștera`, apoi <span style="color:#FFAB19;font-weight:700">dacă</span> `etapa = 2` <span style="color:#FFAB19;font-weight:700">atunci</span> difuzează `roșu`
4. Cine crește `etapa`? Papagalul, când primește `peștera`, înainte de a doua alegere

**Încearcă tu — etapa (3–4 min)**  
- [ ] Variabila `etapa` se vede pe scenă și la steag e `1`  
- [ ] Butonul A difuzează un mesaj când `etapa` e `1` și altul când e `2`  
- [ ] Schimbi `etapa` de mână (click pe bloc) și vezi că butonul alege altfel  

### 4) Finaluri și restart
1. Un final e un mesaj după care **nu mai urmează nicio alegere**: Piratul spune ultima replică, iar decorul arată unde ai ajuns
2. Poveștile bune au finaluri **diferite**: unul bun, unul amuzant, unul care te trimite înapoi la început
3. Steagul verde reia povestea de la zero: decorul, `etapa`, butoanele ascunse, sunetele oprite, efectele șterse
4. Testezi **toate** finalurile, nu doar pe cel care merge din prima

**Încearcă tu — finalul (3–4 min)**  
- [ ] Un mesaj schimbă decorul și un personaj spune ultima replică  
- [ ] Apeși steagul și povestea începe din nou, cu butoanele ascunse  
- [ ] Ai jucat două finaluri diferite  

---

## Greșeli frecvente
1. **Butoanele nu apar** — lipsește `când primesc alegere_1` sau mesajul e scris altfel (`alegere1`).  
2. **Butoanele rămân pe scenă după click** — lipsește scriptul `când primesc ascunde_butoane` → `ascunde`, la **ambele** butoane.  
3. **Povestea sare la alt final** — `etapa` nu e `1` la steag, sau Papagalul nu o schimbă în `2`.  
4. **Se aud două voci deodată** — lipsește `așteaptă` între replici.  
5. **Text care nu mai pleacă** — `spune` fără timp pe un personaj care nu se ascunde (folosești `spune` fără timp doar pe butoane).  
6. **A doua rulare pornește din mijloc** — resetul de la steag e incomplet: decor, `etapa`, butoane, sunete.  
7. **Mesaje scrise diferit** — `roșu` și `rosu` sunt mesaje diferite.  
8. **Blocul `oferă` nu se vede** — l-ai făcut pe alt personaj. Fiecare buton are blocul lui.  
9. **Rucsacul nu se golește** — lipsește `șterge tot din rucsac` la steag, iar Torța rămâne luată de la jocul trecut.  
10. **Fișier greșit** — azi e `Prenume_Nume_M4_L2`, nu un fișier vechi.  

---

## De făcut azi — „Comoara Piratului”
Salvat: `Prenume_Nume_M4_L2`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1 + Pasul 2 + Pasul 3** — 4 decoruri · Papagalul, Piratul, Buton_A, Buton_B și Scenă · 2 alegeri · 3 finaluri · blocul `oferă` · cel puțin 6 replici pe calea Peștera → Tunelul roșu · jocul se joacă de la început până la final |
| **Complet (ținta orei)** | Minim + **Torța** cu ≥ 12 blocuri diferite și lista `rucsac`, scrise **după schemă** |

Dacă rămâi în urmă: salvează la **Minim**. Nu e eșec.  
Cei rapizi: Complet, apoi Bonus.

**Harta poveștii** *(o copiezi pe foaie, 3 minute)*  
Plajă → Peștera sau Jungla  
Peștera → Tunelul roșu (comoara) sau Tunelul albastru (înapoi pe plajă)  
Jungla → o banană (final)

### Pasul 1 — Lumea *(Minim)*
**Decorurile:** în tab-ul **Decoruri** alegi din bibliotecă, **în această ordine**: o plajă, redenumită `Plajă`, o peșteră, redenumită `Peșteră`, o junglă sau o pădure, redenumită `Junglă`, și un decor cu aur sau cu pietre prețioase, redenumit `Comoară`. Ștergi decorul gol.  
**Personajele:** alegi din bibliotecă și redenumești exact: `Papagalul` (în căutare scrii `parrot`), `Piratul` (în căutare scrii `pirate`), `Buton_A` și `Buton_B` (în căutare scrii `button`). `Torța` o adaugi la Complet, iar `Crabul` la Bonus.  
**Sunete:** alegi un sunet pentru Pirat (de exemplu unul de victorie).  
**Variabila:** `etapa`, **pentru toate personajele**. O bifezi, ca să se vadă pe scenă.

- [ ] Decorurile `Plajă`, `Peșteră`, `Junglă` și `Comoară`, în această ordine  
- [ ] Personajele se numesc `Papagalul`, `Piratul`, `Buton_A` și `Buton_B`  
- [ ] Piratul are un sunet  
- [ ] Variabila `etapa` e **pentru toate personajele**  

### Pasul 2 — Scenă și Papagalul *(Minim)*
Ordinea e un **model**: poți schimba textele, numerele și poziția personajelor. **Scenă** are **5 scripturi**. Primul e resetul:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">schimbă decorul la</span> `[Plajă]`  
<span style="color:#9966FF;font-weight:700">anulează efectele grafice</span>  
<span style="color:#CF63CF;font-weight:700">oprește toate sunetele</span>  

Celelalte patru schimbă decorul după mesaj:

<span style="color:#E6A800;font-weight:700">când primesc</span> `peștera`  
<span style="color:#9966FF;font-weight:700">schimbă decorul la</span> `[Peșteră]`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `jungla`  
<span style="color:#9966FF;font-weight:700">schimbă decorul la</span> `[Junglă]`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `roșu`  
<span style="color:#9966FF;font-weight:700">schimbă decorul la</span> `[Comoară]`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `albastru`  
<span style="color:#9966FF;font-weight:700">schimbă decorul la</span> `[Plajă]`  

**Papagalul** are **2 scripturi**. Primul pune întrebarea, al doilea duce povestea la a doua alegere:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#FF8C1A;font-weight:700">setează etapa la</span> `1`  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `40` %  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `-170` <span style="color:#4C97FF;font-weight:700">y:</span> `100`  
<span style="color:#9966FF;font-weight:700">arată</span>  
<span style="color:#9966FF;font-weight:700">spune</span> `Ahoi! Unde cauți comoara: în peșteră sau în junglă?` <span style="color:#9966FF;font-weight:700">pentru</span> `5` secunde  
<span style="color:#E6A800;font-weight:700">difuzează</span> `alegere_1`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `peștera`  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `2` secunde  
<span style="color:#9966FF;font-weight:700">spune</span> `Peștera e întunecată. Tunelul roșu sau tunelul albastru?` <span style="color:#9966FF;font-weight:700">pentru</span> `5` secunde  
<span style="color:#FF8C1A;font-weight:700">setează etapa la</span> `2`  
<span style="color:#E6A800;font-weight:700">difuzează</span> `alegere_2`  

- [ ] Steag de **două** ori → Plaja se vede, Papagalul pune aceeași întrebare  
- [ ] La mesajul `peștera`, Papagalul întreabă din nou și `etapa` devine `2`  
- [ ] Salvat: `Prenume_Nume_M4_L2`  

### Pasul 3 — Butoanele și Piratul *(Minim)*
**Buton_A** are **6 scripturi**. Primul e **blocul tău**, care arată textul:

<span style="color:#FF6680;font-weight:700">definește oferă (text)</span>  
<span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#FF6680;font-weight:700">(text)</span>  
<span style="color:#9966FF;font-weight:700">arată</span>  

Următoarele trei îl ascund și îl arată cu textul potrivit:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `-100` <span style="color:#4C97FF;font-weight:700">y:</span> `-20`  
<span style="color:#9966FF;font-weight:700">ascunde</span>  

<span style="color:#E6A800;font-weight:700">când primesc</span> `alegere_1`  
<span style="color:#FF6680;font-weight:700">oferă</span> `Peștera`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `alegere_2`  
<span style="color:#FF6680;font-weight:700">oferă</span> `Tunelul roșu`  

Al cincilea e **alegerea**. Al șaselea ascunde butonul:

<span style="color:#E6A800;font-weight:700">când se dă click pe acest personaj</span>  
<span style="color:#E6A800;font-weight:700">difuzează</span> `ascunde_butoane`  
<span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#FF8C1A;font-weight:700">(etapa)</span> <span style="color:#59C059;font-weight:700">=</span> `1` <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#E6A800;font-weight:700">difuzează</span> `peștera`  
<span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700">&lt;</span><span style="color:#FF8C1A;font-weight:700">(etapa)</span> <span style="color:#59C059;font-weight:700">=</span> `2` <span style="color:#59C059;font-weight:700">&gt;</span> <span style="color:#FFAB19;font-weight:700">atunci</span>  
&nbsp;&nbsp;&nbsp;&nbsp;→ <span style="color:#E6A800;font-weight:700">difuzează</span> `roșu`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `ascunde_butoane`  
<span style="color:#9966FF;font-weight:700">ascunde</span>  

**Buton_B** are aceleași 6 scripturi, dar mergi la `x: 100` `y: -20`, textele sunt `Jungla` și `Tunelul albastru`, iar la click alege `jungla` (la `etapa = 1`) și `albastru` (la `etapa = 2`). Blocul `oferă` îl faci și pe Buton_B.

**Piratul** are **6 scripturi**. Primul îl pune pe loc, apoi un script pentru fiecare moment din poveste:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `40` %  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `-100`  
<span style="color:#9966FF;font-weight:700">arată</span>  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `5` secunde  
<span style="color:#9966FF;font-weight:700">spune</span> `Vreau comoara!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  

<span style="color:#E6A800;font-weight:700">când primesc</span> `peștera`  
<span style="color:#9966FF;font-weight:700">spune</span> `Brr, ce întuneric!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  

<span style="color:#E6A800;font-weight:700">când primesc</span> `alegere_2`  
<span style="color:#9966FF;font-weight:700">spune</span> `Hmm, care tunel să fie?` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  

<span style="color:#E6A800;font-weight:700">când primesc</span> `roșu`  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span>  
<span style="color:#9966FF;font-weight:700">spune</span> `Comoara! Sunt bogat!` <span style="color:#9966FF;font-weight:700">pentru</span> `3` secunde  

<span style="color:#E6A800;font-weight:700">când primesc</span> `jungla`  
<span style="color:#9966FF;font-weight:700">spune</span> `Doar o banană? Mmm, bună!` <span style="color:#9966FF;font-weight:700">pentru</span> `3` secunde  

<span style="color:#E6A800;font-weight:700">când primesc</span> `albastru`  
<span style="color:#9966FF;font-weight:700">spune</span> `Iar pe plajă... Ce drum greșit!` <span style="color:#9966FF;font-weight:700">pentru</span> `3` secunde  

- [ ] Butoanele apar cu textul din blocul `oferă`  
- [ ] Click pe „Peștera” → butoanele dispar, decorul trece în peșteră, Papagalul întreabă, apar „Tunelul roșu” și „Tunelul albastru”  
- [ ] Tunelul roșu → decorul `Comoară`, se aude sunetul, Piratul spune „Comoara! Sunt bogat!”  
- [ ] Tunelul albastru → înapoi pe plajă  
- [ ] Jungla → o banană (finalul amuzant)  
- [ ] Pe calea Peștera → Tunelul roșu auzi **6 replici** (Papagal 2, Pirat 4)  
- [ ] Steag din nou → butoanele sunt ascunse până la întrebare  
- [ ] Salvat: `Prenume_Nume_M4_L2`  

**→ Minim când:** o altă persoană poate juca trei drumuri până la trei finaluri, fără ajutorul tău, iar steagul verde reia povestea de la început.

### Pasul 4 — Torța și rucsacul *(Complet, după schemă)*
Aici nu mai primești scripturile. Primești **ce trebuie să facă** personajele, iar blocurile le alegi tu. Adaugi din bibliotecă o torță sau o lanternă (în căutare scrii `torch`, sau alegi alt obiect), o redenumești `Torța` și îi adaugi un sunet. Faci lista `rucsac`, **pentru toate personajele**, și o bifezi, ca să se vadă pe scenă. Scripturile din Pașii 2 și 3 rămân, cu **două** schimbări, descrise mai jos.

**Torța** (≥ 12 blocuri diferite):

| Ce trebuie să facă | Indiciu |
|--------------------|---------|
| La steag stă ascunsă, mică, în peșteră, iar rucsacul e gol | `setează mărimea`, `mergi la x: y:`, `ascunde`, `șterge tot din rucsac` |
| Apare când ajungi în peșteră și **strălucește** tot timpul | `când primesc peștera`, `arată`, `la infinit`, `modifică efectul [culoare] cu` |
| La click intră în rucsac, se aude un sunet și dispare | `când se dă click pe acest personaj`, `adaugă torță la rucsac`, `pornește sunetul`, `ascunde` |
| La final dispare, ca să nu rămână pe scenă | `când primesc roșu`, `când primesc albastru`, `ascunde` |

**Scenă:** scriptul `când primesc roșu` îl **înlocuiești**. Dacă rucsacul conține torța, merge la `Comoară` și difuzează `comoară`. Altfel difuzează `întuneric`. Indiciu: `dacă … altfel`, `<rucsac conține torță?>`.

**Pirat:** scriptul `roșu` devine `comoară` (ca să se audă sunetul de victorie doar la comoară). Adaugi un script pentru `întuneric`: Piratul spune că nu vede nimic și că avea nevoie de o torță.

- [ ] La peșteră apare Torța și strălucește, iar click pe ea o pune în rucsac  
- [ ] Cu Torța luată, Tunelul roșu duce la comoară  
- [ ] Fără Torță, Tunelul roșu duce la întuneric  
- [ ] Steag din nou → Torța e ascunsă, iar rucsacul e gol  
- [ ] Salvat din nou: `Prenume_Nume_M4_L2`  

**Gata Complet când:** o persoană joacă povestea de două ori: o dată cu Torța, când ajunge la comoară, și o dată fără Torță, când rămâne în întuneric.

---

## Bonus ★★★ — Provocare
*Doar dacă ai terminat Complet.*

- [ ] **A treia alegere:** după comoară, Papagalul te întreabă ce faci cu aurul: **împarți** sau **păstrezi**. Folosești aceleași butoane, cu `etapa = 3`, și două reacții finale diferite.  
- [ ] ★★★ **Provocare:** povestea continuă pe plajă. La finalul Tunelului albastru apare **Crabul** (al 6-lea personaj) și îți pune o ghicitoare, cu `întreabă … și așteaptă`. Dacă răspunzi corect, `harta` intră în rucsac și Piratul spune că a găsit o hartă secretă. Dacă greșești, Crabul râde de tine. Scrii singur scripturile, cu mesajele din poveste. Nu schimbi niciun script de la Minim.

## Recapitulare rapidă
1. Alegere = click pe un buton → `difuzează` → alt drum  
2. Butonul stă ascuns, apare la mesaj cu blocul `oferă` și dispare la click  
3. `spune` cu **timp**, ca să nu rămână text pe scenă  
4. `etapa` ține minte unde ești, ca să folosești aceleași butoane  
5. Rucsacul (o listă) ține ce ai luat pe drum, iar finalul depinde de el  
6. Nume: **`Prenume_Nume_M4_L2`**  

## Schema pe scurt *(pe foaie)*

**Scenă** *(5 scripturi)*  
la steag → `schimbă decorul` → `anulează efectele` → `oprește sunetele`  
când primesc peștera / jungla / roșu / albastru → `schimbă decorul`  
*Complet:* roșu → `dacă rucsac conține torță` `atunci` `schimbă decorul` + `difuzează comoară` `altfel` `difuzează întuneric`

**Papagal** *(2 scripturi)*  
la steag → `setează etapa la 1` → `mărimea` → `mergi la` → `arată` → `spune` → `difuzează alegere_1`  
când primesc peștera → `așteaptă` → `spune` → `setează etapa la 2` → `difuzează alegere_2`

**Butoane A și B** *(6 scripturi fiecare)*  
definește oferă (text) → `spune (text)` → `arată`  
la steag → `mergi la` → `ascunde`  
când primesc alegere_1 / alegere_2 → `oferă`  
click → `difuzează ascunde_butoane` → `dacă etapa = 1 / 2` → `difuzează`  
când primesc ascunde_butoane → `ascunde`

**Pirat** *(6 scripturi, +2 la Complet)*  
la steag → `mărimea` → `mergi la` → `arată` → `așteaptă` → `spune`  
când primesc peștera → `spune`  
când primesc alegere_2 / roșu / jungla / albastru → `spune` (la roșu și `pornește sunetul`)

**Torță** *(Complet, după schemă)*: ascunsă la steag și rucsac gol; la peșteră `arată` și strălucește; click → `adaugă torță la rucsac` + `pornește sunetul` + `ascunde`

**Quiz scurt (cu profesorul):**  
- Cum faci ca un buton să apară doar la o alegere?  
- De ce blocul `oferă` are o intrare?  
- Ce ține minte variabila `etapa`?  
- Ce se întâmplă fără Torță în rucsac?

## Temă (opțional)
- Dacă ai doar Minim: adaugi acasă Torța și rucsacul, în același `Prenume_Nume_M4_L2`.  
- Dacă ai Complet: adaugi acasă a treia alegere (Bonus).  
- Dacă ai terminat Bonusul: schimbi povestea (alt erou, altă țintă) și păstrezi aceleași scripturi.
