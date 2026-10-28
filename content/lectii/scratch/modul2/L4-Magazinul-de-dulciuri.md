# Lecția 4 — Magazinul de dulciuri
**Modulul 2 · Logică**  
**Code Maker Club · Logic Explorer**

> Azi personajele **țin minte numere**: banii pe care îi ai și dulciurile pe care le cumperi.  
> Proiect: **„Magazinul de dulciuri”** · fișier: `Prenume_Nume_L4` (ex. `Ana_Pop_L4`)

---

## Obiectiv
La finalul orei Vânzătorul te întreabă câți lei ai, tu cumperi dulciuri apăsând pe ele, iar banii scad și dulciurile cresc, pe ecran.  
**Minim:** personajul 1 (Vânzătorul) cu cel puțin **8 blocuri diferite**.  
**Ținta orei (Complet):** personajul 2 (Dulciurile), cu cel puțin **8 blocuri diferite**, care apar la semnalul Vânzătorului și schimbă banii și dulciurile la fiecare click.

## De ce contează
Scorul, viețile și banii unui joc sunt **variabile**: o cutie cu nume în care ții un număr și îl schimbi cât rulează proiectul. Cu blocurile din <span style="color:#FF8C1A;font-weight:700">Variabile</span> (EN: *Variables*) faci jocuri care numără, rețin și arată rezultatul.

**În clasă:** la proiect creezi variabilele **înainte** de a scrie scripturile.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–5 | Obiectiv + capitolul Variabile |
| 5–35 | Pas cu pas: **4** mini-verificări (**Încearcă tu**) |
| 35–105 | Proiectul „Magazinul de dulciuri” (vezi **Minim vs Complet**) |
| 105–120 | Recap, bonus, salvare |

**Capitole azi (doar acestea 8):**  
<span style="color:#FF8C1A;font-weight:700">Variabile</span> · <span style="color:#5CB1D1;font-weight:700">Detectare</span> · <span style="color:#59C059;font-weight:700">Operatori</span> · <span style="color:#E6A800;font-weight:700">Evenimente</span> · <span style="color:#9966FF;font-weight:700">Aspect</span> · <span style="color:#FFAB19;font-weight:700">Control</span> · <span style="color:#4C97FF;font-weight:700">Mișcare</span> · <span style="color:#CF63CF;font-weight:700">Sunet</span>  
*(Restul din Operatori — mai târziu.)*

**Blocuri noi azi:**

| Bloc | Ce face |
|------|---------|
| `Creează o variabilă` | buton: faci o variabilă nouă, cu numele tău (de exemplu `bani`) |
| `(variabila ta)` | valoare: numărul din variabilă acum; bifa de lângă ea o arată pe scenă |
| `setează [ ] la ( )` | pune în variabilă exact numărul scris, oricât avea înainte |
| `modifică [ ] cu ( )` | adaugă la variabilă numărul scris (cu minus scade) |
| `arată variabila [ ]` | afișează variabila pe scenă |
| `ascunde variabila [ ]` | scoate variabila de pe scenă |

---

## Pas cu pas

| Capitol | Ce iei azi |
|---------|------------|
| <span style="color:#FF8C1A;font-weight:700">Variabile</span> | **`Creează o variabilă`**, **`(variabila ta)`**, **`setează [ ] la ( )`**, **`modifică [ ] cu ( )`**, **`arată variabila`**, **`ascunde variabila`** |
| <span style="color:#5CB1D1;font-weight:700">Detectare</span> | `întreabă ( ) și așteaptă`, `răspuns` |
| <span style="color:#59C059;font-weight:700">Operatori</span> | `alătură ( ) ( )` |
| <span style="color:#E6A800;font-weight:700">Evenimente</span> | `când se dă click pe` steagul verde, `când se dă click pe acest personaj`, `când tasta [spațiu] este apăsată`, `când primesc`, `difuzează`, `difuzează … și așteaptă` |
| <span style="color:#9966FF;font-weight:700">Aspect</span> | `spune … pentru … secunde`, `costumul următor`, `arată`, `ascunde`, `modifică mărimea cu`, `setează mărimea la`, `setează efectul [culoare] la` |
| <span style="color:#FFAB19;font-weight:700">Control</span> | `la infinit`, `așteaptă`, `stop [totul]` |
| <span style="color:#4C97FF;font-weight:700">Mișcare</span> | `mergi la x: y:` |
| <span style="color:#CF63CF;font-weight:700">Sunet</span> | `pornește sunetul` |

### 1) Creează o variabilă
1. În <span style="color:#FF8C1A;font-weight:700">Variabile</span> apeși butonul **Creează o variabilă**
2. Scrii numele (de exemplu `bani`), alegi **pentru toate personajele** și apeși OK
3. Apare blocul rotund cu numele tău. Bifa de lângă el îl arată pe scenă
4. Variabila nu e pusă într-un script: o prinzi și o pui în locul unei valori, de exemplu în <span style="color:#9966FF;font-weight:700">spune</span>

**Încearcă tu — variabila (3–4 min)**  
- [ ] Ai creat `bani` și `dulciuri`, pentru toate personajele  
- [ ] Le vezi pe scenă (bifa e pusă)  
- [ ] Ai tras `bani` într-un `spune` și ai văzut numărul  

### 2) Setează și modifică
1. <span style="color:#FF8C1A;font-weight:700">setează [ ] la ( )</span> pune în variabilă **exact** numărul scris, oricât avea înainte. Îl folosești **la început**, ca să pornești de la același număr
2. <span style="color:#FF8C1A;font-weight:700">modifică [ ] cu ( )</span> **adaugă** numărul scris la ce era deja. Cu `1` crește cu unu, cu `-3` scade cu trei
3. Alegi variabila din lista blocului, iar numărul îl scrii în căsuță

**Încearcă tu — setează și modifică (3–4 min)**  
- [ ] Cu `setează` `bani` la `10` numărul devine 10, de câte ori ai apăsat  
- [ ] Cu `modifică` `bani` cu `-3` scade: 7, 4, 1  
- [ ] Cu `modifică` `dulciuri` cu `1` crește  

### 3) Arată și ascunde variabila
1. <span style="color:#FF8C1A;font-weight:700">arată variabila [ ]</span> afișează variabila pe scenă, într-o căsuță
2. <span style="color:#FF8C1A;font-weight:700">ascunde variabila [ ]</span> o scoate de pe scenă. Numărul rămâne în variabilă: nu se pierde
3. Le pui în script: la început arăți variabila, la final o ascunzi

**Încearcă tu — arată și ascunde (2 min)**  
- [ ] Variabila apare când rulează scriptul  
- [ ] Dispare la final, dar numărul rămâne  

### 4) Variabile împreună cu ce știi
1. Pui `răspuns` în `setează` (<span style="color:#FF8C1A;font-weight:700">setează [bani] la</span> <span style="color:#5CB1D1;font-weight:700">(răspuns)</span>): banii sunt ce scrii tu la întrebare
2. Pui variabila într-un <span style="color:#59C059;font-weight:700">alătură</span>, ca să o spui în propoziție: `spune (alătură („Mai ai ”) (bani))`
3. Pui variabila în `setează efectul [culoare] la ( )`: culoarea personajului se schimbă odată cu numărul

**Încearcă tu — împreună (2–3 min)**  
- [ ] Personajul întreabă un număr și îl pune în variabilă  
- [ ] Spune propoziția cu numărul din variabilă  

---

## Greșeli frecvente
1. **Ceilalți nu văd variabila** — ai creat variabila doar pentru un personaj. Șterge variabila și creează una nouă, **pentru toate personajele**.  
2. **Numărul crește peste cel de la rularea trecută** — lipsește `setează [dulciuri] la 0` la steag. Fără el pornești de unde ai rămas.  
3. **Banii cresc în loc să scadă** — la `modifică [bani] cu` ai scris `3`, nu `-3`.  
4. **Variabila nu se vede pe scenă** — bifa nu e pusă și nu ai `arată variabila`.  
5. **Banii pot ajunge sub zero** — nu verificăm încă dacă ai destui. E în regulă: la o lecție următoare învățăm cum.  
6. **Numele din bloc nu e cel creat** — alege din lista blocului variabila care există, nu una veche.  
7. **Dulciurile nu apar** — `ascunde` e la steag, dar lipsește `arată` după `când primesc` `magazin`.  
8. **Vânzătorul se oprește prea devreme** — nu apeși spațiu până nu ai terminat de cumpărat.  
9. **Mesajul nu ajunge** — numele din `difuzează` și din `când primesc` nu e același mesaj (`magazin` și `magazine` sunt mesaje diferite).  
10. **Nume fișier** — `Prenume_Nume_L4`, nu doar `Ana_L4`.  

---

## De făcut azi — „Magazinul de dulciuri”
Salvat: `Prenume_Nume_L4`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1 + Pasul 2** — decorul, personajele, variabilele + **Vânzătorul** cu ≥ 8 blocuri diferite |
| **Complet (ținta orei)** | Minim + **Dulciurile** cu ≥ 8 blocuri diferite, care apar la semnalul Vânzătorului și schimbă banii și dulciurile la fiecare click |

Dacă rămâi în urmă: salvează la **Minim**. Nu e eșec.  
Cei rapizi: Complet, apoi Bonus.

### Pasul 1 — Magazinul, personajele și variabilele *(Minim)*
Alegi din bibliotecă un decor de magazin sau de cofetărie, fără să desenezi. Adaugi trei personaje și le redenumești exact: `Vânzătorul` (un personaj de om), `Dulciurile` (o prăjitură, o înghețată sau o bomboană, cu 2 costume) și `Casa` (o monedă sau un portofel). Pe Dulciuri și pe Casă adaugi în tab-ul **Sunete** câte un sunet.  
Creezi variabilele `bani` și `dulciuri`, **pentru toate personajele**.

- [ ] Decor de magazin  
- [ ] Personajele se numesc `Vânzătorul`, `Dulciurile` și `Casa`  
- [ ] Variabilele `bani` și `dulciuri` există, pentru toate personajele  

### Pasul 2 — Vânzătorul *(Minim)*
Ordinea e un **model**: poți schimba textele, numerele și mesajele.

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `-120` <span style="color:#4C97FF;font-weight:700">y:</span> `-40`  
<span style="color:#9966FF;font-weight:700">spune</span> `Bun venit la dulciuri!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#5CB1D1;font-weight:700">întreabă</span> `Câți lei ai?` <span style="color:#5CB1D1;font-weight:700">și așteaptă</span>  
<span style="color:#FF8C1A;font-weight:700">setează [bani] la</span> <span style="color:#5CB1D1;font-weight:700">(răspuns)</span>  
<span style="color:#FF8C1A;font-weight:700">setează [dulciuri] la</span> `0`  
<span style="color:#FF8C1A;font-weight:700">arată variabila [bani]</span>  
<span style="color:#FF8C1A;font-weight:700">arată variabila [dulciuri]</span>  
<span style="color:#9966FF;font-weight:700">spune</span> `Un dulce costă 3 lei. Apasă pe el!` <span style="color:#9966FF;font-weight:700">pentru</span> `3` secunde  
<span style="color:#E6A800;font-weight:700">difuzează</span> `magazin`  

<span style="color:#E6A800;font-weight:700">când tasta</span> `[spațiu]` <span style="color:#E6A800;font-weight:700">este apăsată</span>  
<span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(alătură (alătură</span> `„Ai cumpărat ”` <span style="color:#FF8C1A;font-weight:700">(dulciuri)</span><span style="color:#59C059;font-weight:700">)</span> `„ dulciuri.”` <span style="color:#59C059;font-weight:700">)</span> <span style="color:#9966FF;font-weight:700">pentru</span> `3` secunde  
<span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(alătură (alătură</span> `„Mai ai ”` <span style="color:#FF8C1A;font-weight:700">(bani)</span><span style="color:#59C059;font-weight:700">)</span> `„ lei.”` <span style="color:#59C059;font-weight:700">)</span> <span style="color:#9966FF;font-weight:700">pentru</span> `3` secunde  
<span style="color:#FF8C1A;font-weight:700">ascunde variabila [bani]</span>  
<span style="color:#E6A800;font-weight:700">difuzează</span> `final` <span style="color:#E6A800;font-weight:700">și așteaptă</span>  
<span style="color:#FFAB19;font-weight:700">stop [totul]</span>  

- [ ] Vânzătorul te întreabă câți lei ai și așteaptă numărul  
- [ ] `bani` și `dulciuri` apar pe scenă, cu numerele corecte  
- [ ] La spațiu spune câte dulciuri ai cumpărat și câți lei îți mai rămân  
- [ ] Fără Dulciuri și Casă, Vânzătorul își termină povestea singur  
- [ ] Salvat: `Prenume_Nume_L4`  

**→ Minim când:** Vânzătorul întreabă câți lei ai, arată variabilele pe scenă, iar la spațiu spune ce ai cumpărat și câți lei îți mai rămân.

### Pasul 3 — Dulciurile *(Complet)*
Dulciurile au **4 scripturi**; al doilea pornește când Vânzătorul difuzează `magazin`:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">ascunde</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `120` <span style="color:#4C97FF;font-weight:700">y:</span> `-40`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `magazin`  
<span style="color:#9966FF;font-weight:700">arată</span>  

<span style="color:#E6A800;font-weight:700">când se dă click pe acest personaj</span>  
<span style="color:#FF8C1A;font-weight:700">modifică [bani] cu</span> `-3`  
<span style="color:#FF8C1A;font-weight:700">modifică [dulciuri] cu</span> `1`  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span>  
<span style="color:#9966FF;font-weight:700">spune</span> `Mmm!` <span style="color:#9966FF;font-weight:700">pentru</span> `1` secundă  
<span style="color:#9966FF;font-weight:700">costumul următor</span>  

<span style="color:#E6A800;font-weight:700">când primesc</span> `final`  
<span style="color:#9966FF;font-weight:700">ascunde</span>  

- [ ] Dulciurile sunt ascunse până vine `magazin`  
- [ ] La fiecare click banii scad cu 3 și dulciurile cresc cu 1  
- [ ] Se aud sunetul și „Mmm!”, iar dulceața își schimbă costumul  
- [ ] Salvat din nou: `Prenume_Nume_L4`  

**Gata Complet când:** introduci banii, Vânzătorul îți arată prețul, apeși pe dulciuri de câteva ori și vezi cum scad banii și cresc dulciurile, apoi spațiul încheie povestea, fără explicație cu vocea.

---

## Bonus (dacă ai terminat Complet)
- [ ] **Al 3-lea personaj** (Casa de bani), care îți dă lei înapoi când apeși pe ea:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">ascunde</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `110`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `magazin`  
<span style="color:#9966FF;font-weight:700">arată</span>  
<span style="color:#9966FF;font-weight:700">spune</span> `Apasă pe mine pentru lei!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#9966FF;font-weight:700">setează efectul [culoare] la</span> <span style="color:#FF8C1A;font-weight:700">(bani)</span>  

<span style="color:#E6A800;font-weight:700">când se dă click pe acest personaj</span>  
<span style="color:#FF8C1A;font-weight:700">modifică [bani] cu</span> `5`  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span>  
<span style="color:#9966FF;font-weight:700">modifică mărimea cu</span> `10`  
<span style="color:#FFAB19;font-weight:700">așteaptă</span> `0,2` secunde  
<span style="color:#9966FF;font-weight:700">setează mărimea la</span> `100` %  

<span style="color:#E6A800;font-weight:700">când primesc</span> `final`  
<span style="color:#9966FF;font-weight:700">ascunde</span>  

- [ ] ★★★ **Provocare:** creezi a treia variabilă, `cheltuit`, o arăți la steag și o modifici cu `3` la fiecare dulce cumpărat (în scriptul Dulciurilor), apoi o spui și la final

## Recapitulare rapidă
1. O variabilă e o cutie cu nume în care ții un număr; o creezi cu **Creează o variabilă**, pentru toate personajele  
2. `setează [ ] la ( )` pune exact numărul; `modifică [ ] cu ( )` adaugă la el, cu minus scade  
3. La început de proiect folosești `setează`, ca să pornești de la același număr  
4. `arată variabila` și `ascunde variabila` afișează sau scot variabila de pe scenă; numărul rămâne  
5. Variabila se poate pune în `spune`, în `alătură` și în `setează efectul`  
6. Nume: **`Prenume_Nume_L4`**  

## Schema pe scurt *(pe foaie)*

**Pe Vânzător**  
la steag → `mergi la x: y:` → `spune` → `întreabă` → `setează [bani] la (răspuns)` → `setează [dulciuri] la 0` → `arată variabila` ×2 → `spune` → `difuzează magazin`  
când tasta spațiu → `spune (alătură … (dulciuri) …)` → `spune (alătură … (bani) …)` → `ascunde variabila [bani]` → `difuzează final și așteaptă` → `stop`

**Pe Dulciuri**  
la steag → `ascunde` → `mergi la x: y:`  
când primesc magazin → `arată`  
click pe el → `modifică [bani] cu -3` → `modifică [dulciuri] cu 1` → `pornește sunetul` → `spune` → `costumul următor`  
când primesc final → `ascunde`

**Pe Casă**  
la steag → `ascunde` → `mergi la x: y:`  
când primesc magazin → `arată` → `spune` → `la infinit` (`setează efectul [culoare] la (bani)`)  
click pe el → `modifică [bani] cu 5` → `pornește sunetul` → `modifică mărimea cu` → `așteaptă` → `setează mărimea la`  
când primesc final → `ascunde`

**Quiz scurt (cu profesorul):**  
- Ce este o variabilă?  
- Care e diferența dintre `setează [bani] la 5` și `modifică [bani] cu 5`?  
- De ce folosești `setează` la steag?  
- Ce se întâmplă cu numărul când apeși `ascunde variabila`?

## Temă (opțional)
- Dacă ai doar Minim: adaugi acasă Dulciurile, în același `Prenume_Nume_L4`.  
- Dacă ai Complet: adaugi acasă Casa de bani, în același `Prenume_Nume_L4`.  
- Dacă ai terminat și Bonusul: faci o copie și schimbi povestea (alt magazin, alte prețuri, altă variabilă).
