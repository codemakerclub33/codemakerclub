# LECȚIA 10 — Expoziția Python Pro + badge
### Prezentăm, citim cod, primim insigna
**Modulul 2 · Python pe micro:bit · 2 ore**  
**Code Maker Club · micro:bit Python Pro**

> Azi e **ziua expoziției finale**! Îți prezinți proiectul, explici o **parte din cod**, citești codul unui coleg, primești păreri și primești insigna **micro:bit Python Pro**.  
> Proiect: **„Standul meu Python Pro”** · `Prenume_Nume_MP2_L10`

---

## Ce facem azi
La finalul orei îți prezinți proiectul clar, explici **trei rânduri de cod**, citești codul unui coleg și completezi **Verificarea Modulului 2**. Un proiect devine real abia când îl arăți altora. Cei mai buni programatori **explică** ce au făcut, **ascultă** păreri și **îmbunătățesc**. Azi exersezi toate trei.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap Modul 2: ce am construit? |
| 10–35 | Pregătim standul: test final, cod curat, fișă |
| 35–45 | Repetăm prezentarea în perechi |
| 45–85 | **Expoziția**: prezentări + citit cod |
| 85–95 | Îmbunătățim după păreri |
| 95–120 | **Verificarea Modulului 2** + autoevaluare + badge |

Provocarea este pentru cine termină mai repede, sau pentru acasă.

**Ce ai nevoie:** [python.microbit.org](https://python.microbit.org) · placa micro:bit · cablu USB de date · proiectul tău din Modul 2 (de preferat **L9: Cutia Exploratorului**) · cartonașe de păreri

---

## Instrucțiuni noi azi
Azi nu învățăm instrucțiuni noi, ci cum să scrii cod **ușor de citit** și bine organizat:

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `# text` | Comentariu: o notiță pentru oameni, placa o ignoră | `# daca e cald, afisam o fata mirata` |
| `NUME_MARE` | Constantă: o valoare care nu se schimbă, cu litere mari | `PRAG_CALD = 26` |
| nume clare | Variabile și funcții cu nume care spun ce sunt | `record`, `jurnal`, nu `x`, `y2` |
| funcții mici | Fiecare funcție are **un singur rol** | `e_cald()` |

---

## Pas cu pas

### 1) Alegem proiectul de expus
Alege **un** proiect: **Cutia Exploratorului** (L9), **Recordul păstrat** (L8), **Mesaje secrete** (L7), **Labirintul înclinat** (L6), **Busola digitală** (L5), **Pianul de buzunar** (L4), **Artistul cu bucle** (L3), **Cartea de glume** (L2) sau **Panoul de misiuni** (L1). Verifică că rulează pe placă.

### 2) Testul final (10 minute)
- [ ] Programul e încărcat pe placă  
- [ ] Ai testat fiecare buton, senzor și meniu  
- [ ] Ai testat cazurile ciudate (ce se întâmplă dacă apeși de 10 ori, sau dacă fișierul lipsește?)  
- [ ] Ai o copie a programului și un plan B (cablu, altă placă)

### 3) Codul curat
Ca să poți explica ușor, codul trebuie să fie **frumos**:
- **comentarii** la părțile importante;  
- **nume clare** (`record`, `jurnal`, nu `x`, `y2`);  
- **funcții** mici, cu un singur rol;  
- **constante** cu litere mari (`PRAG`, `DURATA`).

```python
from microbit import *

PRAG_CALD = 26      # grade Celsius

def e_cald():
    return temperature() > PRAG_CALD      # True sau False

while True:
    if e_cald():
        display.show(Image.SURPRISED)
    else:
        display.show(Image.HAPPY)
    sleep(500)
```

### 4) Fișa proiectului
Pe o foaie A4 scrii:
- **Titlul** proiectului  
- **Ce face?** (într-o propoziție)  
- **Cum se folosește?** (2–3 pași)  
- **Ce am folosit?** (liste, funcții, fișiere, busolă, sunet …)  
- **Cine l-a făcut** (prenumele tău)

### 5) Prezentarea de 2 minute
1. **Salut:** „Mă numesc … și vă prezint …”  
2. **Ce face:** arată proiectul în funcțiune.  
3. **Cum funcționează:** alege **3 rânduri de cod** și explică-le.  
4. **Ce a fost greu:** o greutate și cum ai rezolvat-o.  
5. **Ce ai adăuga:** o idee pentru versiunea 2.  
6. **Întrebări:** „Aveți întrebări?”

**Exersează în perechi:** unul prezintă, celălalt cronometrează și spune **un lucru bun** și **o sugestie**.

### 6) Expoziția și „Citește codul”
- Jumătate din clasă **prezintă**, jumătate **vizitează**; apoi schimbați rolurile.  
- Vizitatorii **încearcă** proiectul, **citesc** o parte din cod și lasă un cartonaș:

| Rubrica | Ce scrii |
|---------|----------|
| Un lucru bun | Ce mi-a plăcut |
| O parte din cod pe care am înțeles-o | Care și de ce |
| O idee | Ce ar putea fi îmbunătățit |

### 7) Îmbunătățirea
Citește cartonașele. Alege **o idee** și fă-o în 10 minute (de exemplu un comentariu mai clar, un nume mai bun, o funcție în plus). Notează pe fișă ce ai schimbat.

---

## Verificarea Modulului 2
Răspunde pe foaie, fără să te uiți în lecții. Răspunsurile sunt la final.

1. Ce dă `10 % 4`? La ce îți folosește `%` într-un meniu?  
2. Ce valori are `range(2, 10, 3)`?  
3. Ce dă `len(["a", "b", "c"])` și care e indexul ultimului element?  
4. Ce înseamnă nota `"c4:4"`?  
5. De ce trebuie calibrată busola?  
6. Cum citești al treilea caracter din rândul al doilea al unei hărți `harta`?  
7. Ce face `"A:7".split(":")`?  
8. La ce folosește `try / except`?  
9. Cum scrii într-un fișier numărul `7`?  
10. Ce face `break` într-o buclă?

**Autoevaluare** (bifează sincer):

Bifează ce poți face **singur**:

- [ ] organizez un program în funcții și meniu
- [ ] folosesc liste
- [ ] folosesc bucle `for` și `while`
- [ ] cânt note și melodii
- [ ] folosesc busola
- [ ] citesc înclinarea și o hartă ca text
- [ ] lucrez cu text și fac un cifru
- [ ] salvez și citesc din fișier
- [ ] îmi prezint proiectul

---

## Greșeli frecvente
1. **„Proiectul nu pornește la expoziție”** — reîncarcă-l înainte, ai copie și plan B.  
2. **„Recordul s-a șters”** — ai reîncărcat programul; folosește RESET.  
3. **„Prezint prea repede”** — respiră și spune câte o idee pe rând.  
4. **„Nu știu să explic codul”** — alege **3 rânduri** importante și explică-le pe rând.  
5. **„Nu știu răspunsul la o întrebare”** — „Nu știu încă, dar aș încerca…” e un răspuns bun.  
6. **„Am uitat să salvez îmbunătățirea”** — salvează versiunea nouă cu același nume.

---

## De făcut azi — „Standul meu Python Pro”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Proiect funcțional pe placă · fișă completă · cod cu comentarii |
| **Complet** | Minim + prezentare de 2 minute + o îmbunătățire după păreri + Verificarea Modulului 2 |

### Pasul 1 — Minim
- [ ] Testul final de 10 minute făcut  
- [ ] Comentarii și nume clare în cod  
- [ ] Fișa completată  
- [ ] Proiectul rulează la stand  

**→ Minim când:** un vizitator folosește proiectul tău fără ajutor.

### Pasul 2 — Complet
- [ ] Prezentarea de 2 minute ținută  
- [ ] Ai primit cel puțin 3 cartonașe de păreri  
- [ ] O îmbunătățire făcută și notată  
- [ ] Verificarea Modulului 2 completată  
- [ ] Numele fișierului e `MP2_L10`  

**Badge:** Completezi **Complet + Verificarea** și primești insigna **micro:bit Python Pro**.

---

## Bonus ★★★ — Provocare: Găsește comoara
*Doar dacă ai terminat Complet.*

Placa ascunde o comoară **într-o direcție** și măsoară cât timp ai nevoie să o găsești. Folosești busola, funcții și un record păstrat în fișier, cu **o singură placă**.

**Ajutor:** direcția secretă e un număr de la `0` la `7`, ca la săgețile din L5: `tinta = random.randint(0, 7)`. Numele direcțiilor stau într-o listă: `["N", "NE", "E", "SE", "S", "SV", "V", "NV"]`. Sectorul tău e `((h + 22) // 45) % 8`, iar recordul îl salvezi ca în L8, cu `try / except`. Timpul în secunde: `(running_time() - start) // 1000`.

- [ ] Placa calibrează busola la pornire. **B** pornește o rundă: derulează numele direcției-țintă (de exemplu `SE`) și pornește cronometrul
- [ ] În timpul rundei, pe ecran se vede săgeata direcției în care ești întors
- [ ] **A** înseamnă „aici e comoara”: dacă sectorul tău e chiar ținta, runda se termină; altfel apare `Image.SAD` și poți încerca din nou
- [ ] După o rundă câștigată se derulează timpul în secunde
- [ ] Cel mai bun timp (cel mai mic) se păstrează într-un fișier, iar la timp nou apare `Record!`
- [ ] Salvează proiectul ca `Prenume_Nume_MP2_L10_Comoara`

## Recapitulare pe scurt
1. Modulul 2: meniuri, liste, bucle, sunet, busolă, hărți, text și cifru, fișiere.  
2. Un program mare = funcții mici, testate pe rând.  
3. Un protocol simplu: `tip:valoare`.  
4. Datele importante se salvează în fișier.  
5. Prezentare: ce face, cum merge, ce a fost greu, ce adaug.

**Schema pe scurt (pe foaie):** stand → test → cod curat → fișă → prezentare → păreri → îmbunătățire → badge **Python Pro**

## Quiz scurt
- Ce pui pe fișa proiectului?  
- Câte rânduri de cod explici la prezentare?  
- Ce faci cu o părere primită?  
- Unde se păstrează recordul?

## Temă
Scrie trei rânduri: ce ai învățat în cele **două module Python**, ce ți-a plăcut cel mai mult și ce ai vrea să construiești mai departe.

## Ce urmează — După curs
Ai terminat **micro:bit Python Pro**. De acum poți alege singur un proiect nou, de la jocuri la senzori și sunet, și să-l construiești pas cu pas, cum ai făcut aici: întâi **Minim**, apoi **Complet**.

---

## Răspunsuri

**Verificarea Modulului 2:**
1. `2`. Ține indexul meniului în cerc (`(mod + 1) % NR`). 2. `2, 5, 8`. 3. `3`; ultimul index este `2` (sau `-1`). 4. Nota **do**, octava 4, durata 4. 5. Ca să „învețe” câmpul magnetic din locul în care ești și să arate corect. 6. `harta[1][2]` (rândul 1, coloana 2; se numără de la 0). 7. Taie textul la `:` și dă lista `["A", "7"]`. 8. Prinde o eroare (de exemplu `OSError` sau `ValueError`) ca programul să continue. 9. `with open("nume.txt", "w") as f:` și `f.write(str(7))`. 10. Iese imediat din buclă.

**Bonus ★★★ — Găsește comoara:**

*Schema logicii:*
1. Ai o listă `NUME` cu cele 8 direcții și funcția `sector(h)`. La pornire calibrezi și citești recordul din fișier (`9999` dacă nu există).  
2. **B** pornește `runda()`: alege `tinta` la întâmplare, derulează numele ei și notează `start = running_time()`.  
3. În buclă arăți săgeata sectorului în care ești întors. Dacă apeși **A** și `s == tinta`, funcția întoarce timpul în secunde. Altfel arăți `Image.SAD` și continui.  
4. După rundă derulezi timpul. Dacă e mai mic decât `record`, îl salvezi și derulezi `Record!`.

```python
from microbit import *
import random

FISIER = "comoara.txt"
NIMIC = 9999
NUME = ["N", "NE", "E", "SE", "S", "SV", "V", "NV"]

def citeste_record():
    try:
        with open(FISIER) as f:
            return int(f.read())
    except OSError:
        return NIMIC
    except ValueError:
        return NIMIC

def salveaza_record(n):
    with open(FISIER, "w") as f:
        f.write(str(n))

def sector(h):
    return ((h + 22) // 45) % 8

def runda():
    tinta = random.randint(0, 7)
    display.scroll(NUME[tinta])
    start = running_time()
    while True:
        s = sector(compass.heading())
        display.show(Image.ALL_ARROWS[s])
        if button_a.was_pressed():
            if s == tinta:
                return (running_time() - start) // 1000
            display.show(Image.SAD)
            sleep(700)
        sleep(100)

compass.calibrate()
record = citeste_record()
display.show(Image.HAPPY)

while True:
    if button_b.was_pressed():
        timp = runda()
        display.show(Image.YES)
        sleep(800)
        display.scroll(str(timp) + "s")
        if timp < record:
            record = timp
            salveaza_record(record)
            display.scroll("Record!")
        display.show(Image.HAPPY)
    sleep(100)
```
- `tinta` și `s` sunt numere între `0` și `7`, deci se compară direct cu `==`.  
- `return` din mijlocul buclei `while True` încheie runda și dă timpul înapoi.  
- Aceleași funcții `citeste_record` și `salveaza_record` ca în L8: recordul rămâne și după RESET.  
- `NUME[tinta]` arată cum o listă de nume se potrivește cu sectoarele busolei.
