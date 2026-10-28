# Lecția 3 — Robotul prieten
**Modulul 2 · Logică**  
**Code Maker Club · Logic Explorer**

> Azi personajele **întreabă**, **țin minte ce scrii tu** și **lucrează cu litere și cuvinte**.  
> Proiect: **„Robotul prieten”** · fișier: `Prenume_Nume_L3` (ex. `Ana_Pop_L3`)

---

## Obiectiv
La finalul orei Robotul tău te întreabă cum te cheamă, apoi îți spune numele, câte litere are, cu ce literă începe și dacă are litera „a”.  
**Minim:** personajul 1 (Robotul) cu cel puțin **8 blocuri diferite**.  
**Ținta orei (Complet):** personajul 2 (Papagalul), cu cel puțin **8 blocuri diferite**, care apare la semnalul Robotului și repetă numele tău, literă cu literă.

## De ce contează
Jocurile și aplicațiile vorbesc cu cine le folosește: întreabă un nume, o vârstă, un cuvânt, apoi răspund. Pentru asta citești ce scrie copilul cu blocurile din <span style="color:#5CB1D1;font-weight:700">Detectare</span> (EN: *Sensing*) și lucrezi cu text cu blocurile din <span style="color:#59C059;font-weight:700">Operatori</span> (EN: *Operators*).

**În clasă:** la proiect scrii răspunsul în căsuța de jos a scenei și apeși **Enter**.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–5 | Obiectiv + capitolele Detectare și Operatori |
| 5–35 | Pas cu pas: **4** mini-verificări (**Încearcă tu**) |
| 35–105 | Proiectul „Robotul prieten” (vezi **Minim vs Complet**) |
| 105–120 | Recap, bonus, salvare |

**Capitole azi (doar acestea 7):**  
<span style="color:#5CB1D1;font-weight:700">Detectare</span> · <span style="color:#59C059;font-weight:700">Operatori</span> · <span style="color:#9966FF;font-weight:700">Aspect</span> · <span style="color:#FFAB19;font-weight:700">Control</span> · <span style="color:#E6A800;font-weight:700">Evenimente</span> · <span style="color:#4C97FF;font-weight:700">Mișcare</span> · <span style="color:#CF63CF;font-weight:700">Sunet</span>  
*(Restul din Operatori și Variabile — mai târziu.)*

**Blocuri noi azi:**

| Bloc | Ce face |
|------|---------|
| `întreabă ( ) și așteaptă` | personajul pune o întrebare, iar scriptul așteaptă până scrii răspunsul și apeși Enter |
| `răspuns` | valoare: ultimul lucru scris de tine la o întrebare |
| `alătură ( ) ( )` | lipește două texte sau numere într-un singur text |
| `litera ( ) din ( )` | valoare: litera de pe locul dorit al cuvântului (1 e prima) |
| `lungimea lui ( )` | valoare: câte litere are un cuvânt |
| `<( ) conține ( )?>` | condiție din Operatori: adevărată când textul din stânga conține ce scrii în dreapta |

---

## Pas cu pas

| Capitol | Ce iei azi |
|---------|------------|
| <span style="color:#5CB1D1;font-weight:700">Detectare</span> | **`întreabă ( ) și așteaptă`**, **`răspuns`**, `distanța până la`, `mouse x`, `mouse y` |
| <span style="color:#59C059;font-weight:700">Operatori</span> | **`alătură ( ) ( )`**, **`litera ( ) din ( )`**, **`lungimea lui ( )`**, **`<( ) conține ( )?>`** |
| <span style="color:#9966FF;font-weight:700">Aspect</span> | `spune … pentru … secunde`, `gândește … pentru … secunde`, `costumul următor`, `setează efectul [culoare] la`, `arată`, `ascunde` |
| <span style="color:#FFAB19;font-weight:700">Control</span> | `dacă … atunci … altfel`, `la infinit` |
| <span style="color:#E6A800;font-weight:700">Evenimente</span> | `când se dă click pe` steagul verde, `când primesc`, `difuzează`, `difuzează … și așteaptă` |
| <span style="color:#4C97FF;font-weight:700">Mișcare</span> | `mergi la x: y:`, `setează stilul de rotație` |
| <span style="color:#CF63CF;font-weight:700">Sunet</span> | `pornește sunetul` |

### 1) Întreabă și răspuns
1. Din <span style="color:#5CB1D1;font-weight:700">Detectare</span> iei <span style="color:#5CB1D1;font-weight:700">întreabă ( ) și așteaptă</span>. În locul gol scrii întrebarea
2. Personajul pune întrebarea, iar jos pe scenă apare o căsuță. Scrii răspunsul și apeși **Enter**: abia atunci scriptul merge mai departe
3. <span style="color:#5CB1D1;font-weight:700">răspuns</span> este o **valoare** (bloc rotunjit): ultimul lucru scris de tine. Faci click pe el și vezi ce ai răspuns
4. La o nouă întrebare, `răspuns` se **înlocuiește**: vechiul răspuns se pierde

**Încearcă tu — întreabă (2–3 min)**  
- [ ] Personajul pune o întrebare și așteaptă  
- [ ] Ai scris un răspuns și ai apăsat Enter  
- [ ] Ai făcut click pe `răspuns` și ai văzut ce scrie  

### 2) Alătură
1. Din <span style="color:#59C059;font-weight:700">Operatori</span> iei <span style="color:#59C059;font-weight:700">alătură ( ) ( )</span>: lipește două texte într-un singur text
2. Îl pui în <span style="color:#9966FF;font-weight:700">spune</span>, iar în `alătură` pui un text și `răspuns`: de exemplu `„Salut, ”` și `răspuns`
3. Textul nu primește spațiu singur: trebuie să **scrii** spațiul în el (`„Salut, ”` cu spațiu după virgulă)
4. Poți pune un `alătură` **în altul**, ca să lipești trei bucăți
5. Ghilimelele din lecție arată doar unde sunt spațiile: în Scratch **nu** le scrii

**Încearcă tu — alătură (3–4 min)**  
- [ ] Personajul spune „Salut, ” urmat de numele tău  
- [ ] Între cuvinte este spațiu  

### 3) Litera și lungimea
1. <span style="color:#59C059;font-weight:700">litera ( ) din ( )</span> dă litera de pe locul dorit: `1` e prima, `2` a doua. În al doilea loc pui `răspuns`
2. <span style="color:#59C059;font-weight:700">lungimea lui ( )</span> dă câte litere are cuvântul (de exemplu `Ana` are `3`)
3. Sunt valori: le pui în `spune`, direct sau într-un `alătură`

**Încearcă tu — litera și lungimea (3–4 min)**  
- [ ] Personajul spune prima literă din numele tău  
- [ ] Personajul spune câte litere are numele tău  

### 4) Conține și dacă … altfel
1. <span style="color:#59C059;font-weight:700"><( ) conține ( )?></span> este o condiție cu colțuri: în stânga pui `răspuns`, în dreapta scrii o literă (de exemplu `a`)
2. Nu ține cont dacă litera e mare sau mică: `A` și `a` sunt la fel
3. O pui în <span style="color:#FFAB19;font-weight:700">dacă … atunci … altfel</span>: la `atunci` scrie ce spune dacă litera există, la `altfel` ce spune dacă nu există

**Încearcă tu — conține (2–3 min)**  
- [ ] Cu un nume cu „a” personajul spune ce e la `atunci`  
- [ ] Cu un nume fără „a” spune ce e la `altfel`  

---

## Greșeli frecvente
1. **Personajul nu mai așteaptă** — ai pus `spune` în loc de `întreabă ( ) și așteaptă`. Doar `întreabă` așteaptă răspunsul.  
2. **Cuvintele sunt lipite** — în textul din `alătură` lipsește spațiul. Scrie `„Salut, ”` cu spațiu după virgulă.  
3. **Spune un nume vechi** — `răspuns` ține doar **ultimul** răspuns. A doua întrebare îl înlocuiește pe primul.  
4. **`conține` nu merge** — în stânga trebuie să fie `răspuns`, iar în dreapta litera scrisă în caseta mică.  
5. **Papagalul tace la a treia literă** — numele are mai puțin de 3 litere. E în regulă.  
6. **Papagalul nu apare** — `ascunde` e la steag, dar lipsește `arată` după `când primesc` `papagal`.  
7. **Copilul întreabă deodată cu Robotul** — Robotul trebuie să difuzeze `final` abia după `difuzează papagal și așteaptă`.  
8. **Mesajul nu ajunge** — numele din `difuzează` și din `când primesc` nu e același mesaj (`papagal` și `papagalul` sunt mesaje diferite).  
9. **Nume fișier** — `Prenume_Nume_L3`, nu doar `Ana_L3`.  

---

## De făcut azi — „Robotul prieten”
Salvat: `Prenume_Nume_L3`

### Minim vs Complet *(citește înainte să începi)*

| | Ce trebuie |
|--|------------|
| **Minim („am reușit”)** | **Pasul 1 + Pasul 2** — decorul, cele trei personaje redenumite + **Robotul** cu ≥ 8 blocuri diferite |
| **Complet (ținta orei)** | Minim + **Papagalul** cu ≥ 8 blocuri diferite, care apare la semnalul Robotului și repetă numele, literă cu literă |

Dacă rămâi în urmă: salvează la **Minim**. Nu e eșec.  
Cei rapizi: Complet, apoi Bonus.

### Pasul 1 — Laboratorul și personajele *(Minim)*
Alegi din bibliotecă un decor de laborator sau de atelier, fără să desenezi. Adaugi trei personaje și le redenumești exact: `Robotul` (un robot din bibliotecă), `Papagalul` (un papagal din bibliotecă) și `Copilul` (un personaj de copil). Pe Papagal adaugi în tab-ul **Sunete** un sunet.  
Papagalul și Copilul stau pe loc până le programezi la Pasul 3 și la Bonus.

- [ ] Decor de laborator sau de atelier  
- [ ] Personajele se numesc `Robotul`, `Papagalul` și `Copilul`  
- [ ] Papagalul are un sunet  

### Pasul 2 — Robotul *(Minim)*
Ordinea e un **model**: poți schimba textele, numerele și mesajele.

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `-120` <span style="color:#4C97FF;font-weight:700">y:</span> `-40`  
<span style="color:#9966FF;font-weight:700">spune</span> `Bună! Eu sunt Robi.` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#5CB1D1;font-weight:700">întreabă</span> `Cum te cheamă?` <span style="color:#5CB1D1;font-weight:700">și așteaptă</span>  
<span style="color:#9966FF;font-weight:700">gândește</span> `Hmm, să văd...` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(alătură</span> `„Salut, ”` <span style="color:#5CB1D1;font-weight:700">(răspuns)</span> <span style="color:#59C059;font-weight:700">)</span> <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(alătură (alătură</span> `„Numele tău are ”` <span style="color:#59C059;font-weight:700">(lungimea lui</span> <span style="color:#5CB1D1;font-weight:700">(răspuns)</span> <span style="color:#59C059;font-weight:700">)) </span>`„ litere.”` <span style="color:#59C059;font-weight:700">)</span> <span style="color:#9966FF;font-weight:700">pentru</span> `3` secunde  
<span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(alătură</span> `„Începe cu litera ”` <span style="color:#59C059;font-weight:700">(litera</span> `1` <span style="color:#59C059;font-weight:700">din</span> <span style="color:#5CB1D1;font-weight:700">(răspuns)</span> <span style="color:#59C059;font-weight:700">))</span> <span style="color:#9966FF;font-weight:700">pentru</span> `3` secunde  
<span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700"><(</span><span style="color:#5CB1D1;font-weight:700">răspuns</span><span style="color:#59C059;font-weight:700">) conține (a)?></span> <span style="color:#FFAB19;font-weight:700">atunci</span> → <span style="color:#9966FF;font-weight:700">spune</span> `Ai litera a în nume!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde **altfel** → <span style="color:#9966FF;font-weight:700">spune</span> `Nu ai litera a.` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#9966FF;font-weight:700">costumul următor</span>  
<span style="color:#E6A800;font-weight:700">difuzează</span> `papagal` <span style="color:#E6A800;font-weight:700">și așteaptă</span>  
<span style="color:#9966FF;font-weight:700">spune</span> `Bravo, Papagal!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#E6A800;font-weight:700">difuzează</span> `final`  

- [ ] Robotul te întreabă cum te cheamă și așteaptă numele  
- [ ] Spune „Salut, ” urmat de numele tău  
- [ ] Spune câte litere are numele și cu ce literă începe  
- [ ] Spune dacă ai litera „a”  
- [ ] Fără Papagal și Copil, Robotul își termină povestea singur  
- [ ] Salvat: `Prenume_Nume_L3`  

**→ Minim când:** Robotul întreabă numele, apoi îți spune salutul, lungimea, prima literă și dacă ai litera „a”.

### Pasul 3 — Papagalul *(Complet)*
Papagalul are **2 scripturi**, iar al doilea pornește când Robotul difuzează `papagal`:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">ascunde</span>  
<span style="color:#4C97FF;font-weight:700">setează stilul de rotație</span> `[stânga-dreapta]`  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `120` <span style="color:#4C97FF;font-weight:700">y:</span> `-40`  

<span style="color:#E6A800;font-weight:700">când primesc</span> `papagal`  
<span style="color:#9966FF;font-weight:700">arată</span>  
<span style="color:#CF63CF;font-weight:700">pornește sunetul</span>  
<span style="color:#9966FF;font-weight:700">spune</span> `Cra!` <span style="color:#9966FF;font-weight:700">pentru</span> `1` secundă  
<span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(alătură</span> `„Salut, ”` <span style="color:#5CB1D1;font-weight:700">(răspuns)</span> <span style="color:#59C059;font-weight:700">)</span> <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(litera</span> `1` <span style="color:#59C059;font-weight:700">din</span> <span style="color:#5CB1D1;font-weight:700">(răspuns)</span> <span style="color:#59C059;font-weight:700">)</span> <span style="color:#9966FF;font-weight:700">pentru</span> `1` secundă  
<span style="color:#9966FF;font-weight:700">costumul următor</span>  
<span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(litera</span> `2` <span style="color:#59C059;font-weight:700">din</span> <span style="color:#5CB1D1;font-weight:700">(răspuns)</span> <span style="color:#59C059;font-weight:700">)</span> <span style="color:#9966FF;font-weight:700">pentru</span> `1` secundă  
<span style="color:#9966FF;font-weight:700">costumul următor</span>  
<span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(litera</span> `3` <span style="color:#59C059;font-weight:700">din</span> <span style="color:#5CB1D1;font-weight:700">(răspuns)</span> <span style="color:#59C059;font-weight:700">)</span> <span style="color:#9966FF;font-weight:700">pentru</span> `1` secundă  

- [ ] Papagalul e ascuns până vine `papagal`  
- [ ] Apare, face „Cra!” și te salută cu numele tău  
- [ ] Spune pe rând primele trei litere din numele tău  
- [ ] Salvat din nou: `Prenume_Nume_L3`  

**Gata Complet când:** scrii numele, Robotul îți spune ce știe despre el, apoi Papagalul apare, te salută și îți spune literele, fără explicație cu vocea.

---

## Bonus (dacă ai terminat Complet)
- [ ] **Al 3-lea personaj** (Copilul detectiv) care, după Robot și Papagal, întreabă numele unui prieten și îl analizează:

<span style="color:#E6A800;font-weight:700">când se dă click pe</span> <span style="color:#3F8F2A;font-weight:700">steagul verde</span>  
<span style="color:#9966FF;font-weight:700">ascunde</span>  

<span style="color:#E6A800;font-weight:700">când primesc</span> `final`  
<span style="color:#4C97FF;font-weight:700">mergi la x:</span> `0` <span style="color:#4C97FF;font-weight:700">y:</span> `-40`  
<span style="color:#9966FF;font-weight:700">arată</span>  
<span style="color:#5CB1D1;font-weight:700">întreabă</span> `Cum se numește prietenul tău?` <span style="color:#5CB1D1;font-weight:700">și așteaptă</span>  
<span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(alătură</span> <span style="color:#5CB1D1;font-weight:700">(răspuns)</span> `„ este un nume frumos!”` <span style="color:#59C059;font-weight:700">)</span> <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#9966FF;font-weight:700">spune</span> <span style="color:#59C059;font-weight:700">(alătură</span> `„Are ”` <span style="color:#59C059;font-weight:700">(alătură (lungimea lui</span> <span style="color:#5CB1D1;font-weight:700">(răspuns)</span> <span style="color:#59C059;font-weight:700">)</span> `„ litere.”` <span style="color:#59C059;font-weight:700">))</span> <span style="color:#9966FF;font-weight:700">pentru</span> `3` secunde  
<span style="color:#FFAB19;font-weight:700">dacă</span> <span style="color:#59C059;font-weight:700"><(</span><span style="color:#5CB1D1;font-weight:700">răspuns</span><span style="color:#59C059;font-weight:700">) conține (a)?></span> <span style="color:#FFAB19;font-weight:700">atunci</span> → <span style="color:#9966FF;font-weight:700">spune</span> `Are litera a!` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde **altfel** → <span style="color:#9966FF;font-weight:700">spune</span> `Nu are litera a.` <span style="color:#9966FF;font-weight:700">pentru</span> `2` secunde  
<span style="color:#FFAB19;font-weight:700">la infinit</span>  
↳ <span style="color:#4C97FF;font-weight:700">mergi la x:</span> <span style="color:#5CB1D1;font-weight:700">(mouse x)</span> <span style="color:#4C97FF;font-weight:700">y:</span> <span style="color:#5CB1D1;font-weight:700">(mouse y)</span>  
↳ <span style="color:#9966FF;font-weight:700">setează efectul [culoare] la</span> <span style="color:#5CB1D1;font-weight:700">(distanța până la</span> `Robotul` <span style="color:#5CB1D1;font-weight:700">)</span>  

- [ ] ★★★ **Provocare:** pe Robot, înlocuiești litera `a` din `conține` cu o literă la alegere (de exemplu prima literă a numelui tău) și verifici că merge și pentru alte nume

## Recapitulare rapidă
1. `întreabă ( ) și așteaptă` pune întrebarea și așteaptă Enter; `răspuns` ține ultimul răspuns  
2. `alătură ( ) ( )` lipește texte; spațiul trebuie scris în text  
3. `litera ( ) din ( )` dă litera de pe locul dorit; `lungimea lui ( )` dă câte litere are cuvântul  
4. `<( ) conține ( )?>` este o condiție: o pui în `dacă … altfel`  
5. O a doua întrebare înlocuiește primul `răspuns`  
6. Nume: **`Prenume_Nume_L3`**  

## Schema pe scurt *(pe foaie)*

**Pe Robot**  
la steag → `mergi la x: y:` → `spune` → `întreabă` → `gândește` → `spune (alătură „Salut, ” (răspuns))` → `spune (alătură … (lungimea lui (răspuns)) …)` → `spune (alătură … (litera 1 din (răspuns)))` → `dacă` `(răspuns) conține (a)?` `atunci` `spune` `altfel` `spune` → `costumul următor` → `difuzează papagal și așteaptă` → `spune` → `difuzează final`

**Pe Papagal**  
la steag → `ascunde` → `setează stilul de rotație` → `mergi la x: y:`  
când primesc papagal → `arată` → `pornește sunetul` → `spune` → `spune (alătură „Salut, ” (răspuns))` → `spune (litera 1 din (răspuns))` → `costumul următor` → `spune (litera 2 din (răspuns))` → `costumul următor` → `spune (litera 3 din (răspuns))`

**Pe Copil**  
la steag → `ascunde`  
când primesc final → `mergi la x: y:` → `arată` → `întreabă` → `spune (alătură …)` → `spune (alătură … lungimea lui …)` → `dacă` `conține` `atunci` `altfel` → `la infinit` (`mergi la x: (mouse x) y: (mouse y)` + `setează efectul` `(distanța până la Robotul)`)

**Quiz scurt (cu profesorul):**  
- Ce face `întreabă ( ) și așteaptă` și prin ce diferă de `spune`?  
- De ce trebuie să scrii spațiul în textul din `alătură`?  
- Ce număr dă `lungimea lui` pentru cuvântul `Maria`?  
- Ce se întâmplă cu primul `răspuns` când pui a doua întrebare?

## Temă (opțional)
- Dacă ai doar Minim: adaugi acasă Papagalul, în același `Prenume_Nume_L3`.  
- Dacă ai Complet: adaugi acasă Copilul detectiv, în același `Prenume_Nume_L3`.  
- Dacă ai terminat și Bonusul: faci o copie și schimbi povestea (alte întrebări, altă literă, alt personaj care răspunde).
