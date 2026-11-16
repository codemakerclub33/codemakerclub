# LECȚIA 3 — Lansarea rachetei
### Afișaj cu 7 segmente și tablouri
**Modulul 3 · Afișaj și mișcare**  
**Code Maker Club · Display Maker**

> Azi lucrezi cu **afișajul cu 7 segmente** și faci o numărătoare inversă de la 9 la 0, ca la lansarea unei rachete.  
> Proiect: **„Lansarea rachetei”** · `Prenume_Nume_A3_L03`

---

## Ce facem azi
La finalul orei ai **două proiecte**: **Lansarea rachetei** (o numărătoare inversă de la 9 la 0, pornită cu un buton, cu bip la fiecare cifră și LED la decolare) și un **zar electronic**, care se rotește tot mai încet și se oprește la un număr de la 1 la 6. Cifrele de pe cuptoare, ceasuri și aparate digitale sunt făcute din **segmente**: 7 LED-uri puse în forma lui 8.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L2 · pagini |
| 10–35 | Conexiunile (7 segmente + 7 rezistoare) |
| 35–55 | **Proiectul 1** · tabelul cifrelor și numărătoarea |
| 55–75 | **Proiectul 1** · buton, bip și LED la decolare |
| 75–110 | **Proiectul 2** · zarul electronic |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme |

**Componente azi:** Arduino Uno · Breadboard · **7 Segment Display** (catod comun) · 7 × Resistor 220 Ω · Pushbutton · Piezo · LED · Resistor 220 Ω · Potentiometer (doar la Bonus) · fire

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `const byte CIFRE[10][7]` | Tablou cu **două dimensiuni**: 10 cifre × 7 segmente | `CIFRE[3][0]` |
| `void afiseaza(int cifra)` | Funcție care aprinde segmentele unei cifre | `afiseaza(7);` |
| `for (int c = 9; c >= 0; c--)` | Numără **înapoi**; `c--` scade cu 1 | `for (int c = 9; c >= 0; c--) { ... }` |
| `random(1, 7)` | Un număr aleatoriu de la 1 la 6 (7 nu intră) | `int zar = random(1, 7);` |
| `randomSeed(analogRead(A0))` | Amestecă generatorul, ca să nu iasă aceleași numere | `randomSeed(analogRead(A0));` |
| `tone(BUZZER, 800, 100)` | Un bip de 100 ms | `tone(BUZZER, 800, 100);` |

---

## Pas cu pas

### 1) Circuit nou
`Prenume_Nume_A3_L03`

**Gata când:**  
- [ ] Proiectul nou are numele `Prenume_Nume_A3_L03`  

### 2) Segmentele
Segmentele sunt numite **a, b, c, d, e, f, g**:

```
 _a_
f|   |b
 |_g_|
e|   |c
 |_d_|
```

### 3) Conexiuni
Afișajul cu **catod comun** are un pin comun (GND), iar fiecare segment are propriul pin. Pune **un rezistor de 220 Ω pe fiecare segment**.

| Segment | Pin Arduino (prin 220 Ω) |
|---------|--------------------------|
| a | **2** |
| b | **3** |
| c | **4** |
| d | **5** |
| e | **6** |
| f | **7** |
| g | **8** |
| COM (catod comun) | **GND** |

| Piesă | Se conectează |
|-------|---------------|
| **Buton** | pin **10** și **GND** |
| **Piezo** | pin **11** și **GND** |
| **LED** | pin **12** → 220 Ω → anod · catod → GND |

> Pe afișajul din Tinkercad, treci cursorul peste pini ca să vezi literele a–g. Dacă ai un afișaj cu **anod comun**, îl legi la 5V și logica se inversează.

**Gata când:**  
- [ ] Toate firele sunt conectate exact ca în tabel  
- [ ] Am verificat de două ori GND și 5V înainte să pornesc simularea  

### 4) Tabelul cifrelor
Fiecare cifră înseamnă o combinație de segmente. `1` = aprins, `0` = stins. Ordinea: **a b c d e f g**.

| Cifra | a | b | c | d | e | f | g |
|-------|---|---|---|---|---|---|---|
| 0 | 1 | 1 | 1 | 1 | 1 | 1 | 0 |
| 1 | 0 | 1 | 1 | 0 | 0 | 0 | 0 |
| 2 | 1 | 1 | 0 | 1 | 1 | 0 | 1 |
| 3 | 1 | 1 | 1 | 1 | 0 | 0 | 1 |
| 4 | 0 | 1 | 1 | 0 | 0 | 1 | 1 |
| 5 | 1 | 0 | 1 | 1 | 0 | 1 | 1 |
| 6 | 1 | 0 | 1 | 1 | 1 | 1 | 1 |
| 7 | 1 | 1 | 1 | 0 | 0 | 0 | 0 |
| 8 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| 9 | 1 | 1 | 1 | 1 | 0 | 1 | 1 |

### 5) Minim — cifrele pe rând

```cpp
const int SEGMENTE[7] = {2, 3, 4, 5, 6, 7, 8};

const byte CIFRE[10][7] = {
  {1, 1, 1, 1, 1, 1, 0},
  {0, 1, 1, 0, 0, 0, 0},
  {1, 1, 0, 1, 1, 0, 1},
  {1, 1, 1, 1, 0, 0, 1},
  {0, 1, 1, 0, 0, 1, 1},
  {1, 0, 1, 1, 0, 1, 1},
  {1, 0, 1, 1, 1, 1, 1},
  {1, 1, 1, 0, 0, 0, 0},
  {1, 1, 1, 1, 1, 1, 1},
  {1, 1, 1, 1, 0, 1, 1}
};

void afiseaza(int cifra) {
  for (int i = 0; i < 7; i++) {
    digitalWrite(SEGMENTE[i], CIFRE[cifra][i]);
  }
}

void setup() {
  for (int i = 0; i < 7; i++) {
    pinMode(SEGMENTE[i], OUTPUT);
  }
}

void loop() {
  for (int c = 9; c >= 0; c--) {
    afiseaza(c);
    delay(1000);
  }
}
```

- `CIFRE[10][7]` e un **tablou cu două dimensiuni**: 10 rânduri (cifre), 7 coloane (segmente).  
- `afiseaza(c)` parcurge cele 7 segmente și le aprinde / stinge după tabel.  
- `for (int c = 9; c >= 0; c--)` numără **înapoi** (`c--` scade cu 1).

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Simularea pornește și montajul face ce scrie în „Minim”  

### 6) Complet — start, bip, decolare

```cpp
const int SEGMENTE[7] = {2, 3, 4, 5, 6, 7, 8};
const int BUTON = 10;
const int BUZZER = 11;
const int LED = 12;

const byte CIFRE[10][7] = {
  {1, 1, 1, 1, 1, 1, 0},
  {0, 1, 1, 0, 0, 0, 0},
  {1, 1, 0, 1, 1, 0, 1},
  {1, 1, 1, 1, 0, 0, 1},
  {0, 1, 1, 0, 0, 1, 1},
  {1, 0, 1, 1, 0, 1, 1},
  {1, 0, 1, 1, 1, 1, 1},
  {1, 1, 1, 0, 0, 0, 0},
  {1, 1, 1, 1, 1, 1, 1},
  {1, 1, 1, 1, 0, 1, 1}
};

void afiseaza(int cifra) {
  for (int i = 0; i < 7; i++) {
    digitalWrite(SEGMENTE[i], CIFRE[cifra][i]);
  }
}

void stinge() {
  for (int i = 0; i < 7; i++) {
    digitalWrite(SEGMENTE[i], LOW);
  }
}

void setup() {
  for (int i = 0; i < 7; i++) {
    pinMode(SEGMENTE[i], OUTPUT);
  }
  pinMode(BUTON, INPUT_PULLUP);
  pinMode(LED, OUTPUT);
  afiseaza(9);
}

void loop() {
  if (digitalRead(BUTON) == LOW) {
    digitalWrite(LED, LOW);

    for (int c = 9; c >= 0; c--) {
      afiseaza(c);
      tone(BUZZER, 800, 100);
      delay(1000);
    }

    digitalWrite(LED, HIGH);
    tone(BUZZER, 1500, 1500);
    delay(2000);
    digitalWrite(LED, LOW);
    afiseaza(9);
  }
}
```

**Cum merge:** apeși butonul → numără 9…0 cu un bip scurt la fiecare cifră → la 0 sună lung și se aprinde LED-ul („Decolare!”) → totul revine la 9.

**Gata când:**  
- [ ] Codul complet se compilează fără erori  
- [ ] Simularea face tot ce scrie în „Complet”  

### 7) Proiectul 2 — Zarul electronic
Un zar adevărat se rostogolește și **încetinește** până se oprește. Facem la fel: la apăsarea butonului afișajul schimbă cifre la întâmplare, iar pauza dintre ele **crește**, până când zarul se oprește pe rezultat. Circuitul rămâne cel de la proiectul 1 (segmentele pe 2–8, butonul pe 10, piezo pe 11).

```cpp
const int SEGMENTE[7] = {2, 3, 4, 5, 6, 7, 8};
const int BUTON = 10;
const int BUZZER = 11;

const byte CIFRE[10][7] = {
  {1, 1, 1, 1, 1, 1, 0},
  {0, 1, 1, 0, 0, 0, 0},
  {1, 1, 0, 1, 1, 0, 1},
  {1, 1, 1, 1, 0, 0, 1},
  {0, 1, 1, 0, 0, 1, 1},
  {1, 0, 1, 1, 0, 1, 1},
  {1, 0, 1, 1, 1, 1, 1},
  {1, 1, 1, 0, 0, 0, 0},
  {1, 1, 1, 1, 1, 1, 1},
  {1, 1, 1, 1, 0, 1, 1}
};

void afiseaza(int cifra) {
  for (int i = 0; i < 7; i++) {
    digitalWrite(SEGMENTE[i], CIFRE[cifra][i]);
  }
}

void setup() {
  for (int i = 0; i < 7; i++) {
    pinMode(SEGMENTE[i], OUTPUT);
  }
  pinMode(BUTON, INPUT_PULLUP);
  randomSeed(analogRead(A0));
  afiseaza(6);
}

void loop() {
  if (digitalRead(BUTON) == LOW) {
    for (int pauza = 40; pauza <= 400; pauza += 60) {
      afiseaza(random(1, 7));
      tone(BUZZER, 600, 20);
      delay(pauza);
    }

    int zar = random(1, 7);
    afiseaza(zar);
    tone(BUZZER, 1200, 300);
    delay(500);
  }
}
```

- `random(1, 7)` dă un număr de la **1 la 6**: limita de sus **nu** intră.  
- `randomSeed(analogRead(A0))` citește un pin neconectat, care „prinde” zgomot electric, deci de fiecare dată pornești dintr-un loc diferit.  
- `pauza` crește de la 40 la 400 ms: afișajul se rotește tot mai încet, ca un zar adevărat.  
- Rezultatul final rămâne afișat până la următoarea apăsare.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] La apăsare, cifrele se schimbă tot mai încet și zarul se oprește pe un număr de la 1 la 6  

### 8) Testul zarului
Aruncă zarul de **12 ori** și notează ce a ieșit:

| Cifra | Cât de des a ieșit |
|-------|--------------------|
| 1 | ____ |
| 2 | ____ |
| 3 | ____ |
| 4 | ____ |
| 5 | ____ |
| 6 | ____ |

Nu trebuie să iasă fiecare cifră de două ori: așa e hazardul. Dar **nu** are voie să apară 0, 7, 8 sau 9.

**Gata când:**  
- [ ] Am aruncat zarul de 12 ori și am completat tabelul  
- [ ] Au apărut doar cifre de la 1 la 6

---

## Greșeli frecvente
1. **Cifre ciudate** — un segment e conectat la alt pin față de `SEGMENTE[]`.  
2. **Toate segmentele aprinse** — COM la 5V (anod comun) în loc de GND.  
3. **Segmente slabe** — lipsesc rezistorii sau valorile sunt prea mari.  
4. **Eroare la compilare** — lipsește `;` după acolada tabloului.  
5. **Pornește singură** — butonul n-are `INPUT_PULLUP`.
6. **Zarul nu arată niciodată 6** — ai scris `random(1, 6)`; limita de sus nu intră, deci folosește `random(1, 7)`.  
7. **La fiecare pornire ies aceleași numere** — lipsește `randomSeed(analogRead(A0))`.  
8. **Zarul se învârte la fel de repede** — `pauza` nu crește în bucla `for`.  

---

## De făcut azi — „Lansarea rachetei”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Numără 9 → 0 |
| **Complet** | Minim + buton + bip + LED la final |
| **Proiectul 2** | Zar electronic: la buton, cifrele încetinesc și se opresc pe un număr de la 1 la 6 |

### Pasul 1 — Minim
- [ ] 7 segmente conectate corect  
- [ ] Numărătoarea merge  

### Pasul 2 — Complet
- [ ] Butonul pornește numărătoarea  
- [ ] Bip la fiecare cifră și bip lung la final  
- [ ] Numele `A3_L03` e corect

### Pasul 3 — Proiectul 2
- [ ] Cifre aleatorii cu `random(1, 7)`  
- [ ] Pauza crește și zarul încetinește  
- [ ] Rezultatul rămâne afișat, iar tabelul de 12 aruncări e completat  

---

## Bonus ★★★ — Provocare: Start reglabil și eroare
*Doar dacă ai terminat Proiectul 2.*

**Piesă nouă:** un potențiometru (mijloc la **A0**) care alege cifra de la care pornește numărătoarea din proiectul 1. Afișajul poate arăta și litere: folosește litera **E** (de la „eroare”), cu segmentele a, d, e, f și g aprinse.

- [ ] Potențiometrul alege cifra de start între 3 și 9, iar afișajul o arată înainte să apeși butonul  
- [ ] Numărătoarea pornește de la cifra aleasă  
- [ ] Dacă apeși butonul **în timpul** numărătorii, afișajul arată E o secundă (tablou nou), apoi numărătoarea continuă  

## Recapitulare pe scurt
1. 7 segmente = 7 LED-uri, câte un pin  
2. Tabelul cifrelor stă într-un **tablou 2D**  
3. `for` în jos cu `c--`  
4. O funcție `afiseaza()` ține codul curat  
5. `random(1, 7)` dă numere de la 1 la 6, iar `randomSeed` le amestecă  

## Pe placa reală *(opțional)*
Afișajele reale pot avea **anod comun** (logică inversată) și 2–4 cifre. Cu mai multe cifre se folosește multiplexarea sau un circuit dedicat (TM1637).

## Quiz scurt
- Câte segmente are o cifră?  
- Ce face `c--`?  
- Care segmente sunt aprinse la cifra 7?
- Ce numere poate da `random(1, 7)`?  
- De ce citim un pin neconectat în `randomSeed`?  

## Temă
Completează un tabel pentru literele **A, b, C, d, E, F** (cum le-ai afișa pe 7 segmente?).

---

## Ce urmează — Lecția 4
În **lecția 4** conectezi un servomotor și faci un braț de robot care salută, se mișcă lin și ascultă de un potențiometru.
