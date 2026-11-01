# LECȚIA 6 — Santinela
### PIR, stare armat și sirenă
**Modulul 2 · Senzori**  
**Code Maker Club · Sensor Scout**

> Azi construiești o **alarmă** cu senzor de mișcare **PIR**, un buton de armare și o sirenă.  
> Proiect: **„Santinela”** · `Prenume_Nume_A2_L06`

---

## Ce facem azi
La finalul orei ai **două proiecte**: **Santinela** (o alarmă care se armează cu un buton și sună la mișcare) și o **Santinelă cu întârziere de ieșire**, care îți dă 5 secunde să pleci și numără alarmele. Alarmele din case și din magazine funcționează exact așa.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L5 · senzori și praguri |
| 10–25 | Cum merge senzorul PIR |
| 25–50 | Minim · mișcare = LED |
| 50–75 | **Proiectul 1** · alarmă armabilă cu sirenă |
| 75–110 | **Proiectul 2** · întârziere de ieșire și contor de alarme |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme |

**Componente azi:** Arduino Uno · Breadboard · **PIR Sensor** · Pushbutton · 2 × LED (verde, roșu) · 2 × Resistor 220 Ω · Piezo · fire

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `millis()` | Milisecundele de la pornire | `unsigned long acum = millis();` |
| `unsigned long` | Număr mare, fără minus, pentru timp | `unsigned long armatLa = 0;` |
| `(millis() / 250) % 2` | Dă pe rând 0 și 1, la fiecare 250 ms: clipire fără `delay` | `digitalWrite(ROSU, (millis() / 250) % 2);` |
| detectarea frontului | Numără **schimbarea** „fără mișcare → mișcare” | `if (miscare && !miscareAnterioara) { ... }` |

---

## Pas cu pas

### 1) Circuit nou
`Prenume_Nume_A2_L06`

**Gata când:**  
- [ ] Proiectul nou are numele `Prenume_Nume_A2_L06`  

### 2) Cum merge PIR
PIR („Passive InfraRed”) simte **căldura** corpurilor care se mișcă. Are 3 pini; în Tinkercad le citești trecând cursorul peste ei.

| Pin PIR | Se conectează |
|---------|---------------|
| **Semnal (OUT)** | pin **2** |
| **Alimentare (5V)** | **5V** |
| **GND** | **GND** |

| Piesă | Se conectează |
|-------|---------------|
| **Buton** | pin **3** și **GND** (diagonal) |
| **LED verde** (dezarmat) | pin **5** → 220 Ω → anod · catod → GND |
| **LED roșu** (armat) | pin **6** → 220 Ω → anod · catod → GND |
| **Piezo** | pin **8** și **GND** |

**Gata când:**  
- [ ] Am încercat fiecare situație din listă  
- [ ] Am notat ce nu a mers și am corectat  

### 3) Minim — mișcare = LED

```cpp
const int PIR = 2;
const int LED = 6;

void setup() {
  pinMode(PIR, INPUT);
  pinMode(LED, OUTPUT);
}

void loop() {
  digitalWrite(LED, digitalRead(PIR));
}
```

În Tinkercad, dai click pe PIR și apare un obiect pe care îl muți. Când se mișcă, `PIR` devine `HIGH`.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Simularea pornește și montajul face ce scrie în „Minim”  

### 4) Complet — alarmă armabilă
Folosim o **variabilă de stare** `armat`. Butonul o schimbă (`!armat` inversează valoarea).

```cpp
const int PIR = 2;
const int BUTON = 3;
const int VERDE = 5;
const int ROSU = 6;
const int BUZZER = 8;

bool armat = false;

void setup() {
  pinMode(PIR, INPUT);
  pinMode(BUTON, INPUT_PULLUP);
  pinMode(VERDE, OUTPUT);
  pinMode(ROSU, OUTPUT);
}

void sirena() {
  for (int f = 600; f <= 1200; f += 20) {
    tone(BUZZER, f);
    delay(5);
  }
  for (int f = 1200; f >= 600; f -= 20) {
    tone(BUZZER, f);
    delay(5);
  }
}

void loop() {
  if (digitalRead(BUTON) == LOW) {
    armat = !armat;
    noTone(BUZZER);
    delay(300);
  }

  digitalWrite(VERDE, !armat);
  digitalWrite(ROSU, armat);

  if (armat && digitalRead(PIR) == HIGH) {
    sirena();
  } else {
    noTone(BUZZER);
  }
}
```

**Cum citești codul**

- `armat = !armat;` — dacă era `false`, devine `true` și invers.  
- `delay(300)` după buton ca să nu schimbi starea de mai multe ori dintr-o apăsare.  
- `digitalWrite(VERDE, !armat)` — verde aprins când **nu** e armat.  
- Sirena e o funcție, care urcă și coboară frecvența.  
- `armat && digitalRead(PIR) == HIGH` — sună **doar** dacă ambele sunt adevărate.

**Gata când:**  
- [ ] Codul complet se compilează fără erori  
- [ ] Simularea face tot ce scrie în „Complet”  

### 5) Test

| Pas | Ce faci | Ce ar trebui să vezi |
|-----|---------|---------------------|
| 1 | Pornești simularea | LED verde, fără sunet |
| 2 | Muți obiectul | Nimic (dezarmat) |
| 3 | Apeși butonul | LED roșu |
| 4 | Muți obiectul | Sirena sună |
| 5 | Apeși butonul | Din nou verde, liniște |

**Gata când:**  
- [ ] Am încercat fiecare situație din listă  
- [ ] Am notat ce nu a mers și am corectat  

### 6) Proiectul 2 — Întârziere de ieșire
O alarmă adevărată nu sună imediat ce o armezi: îți dă timp să pleci din cameră. Notăm **momentul armării** și considerăm alarma **activă** abia după 5 secunde. Cât timp așteaptă, LED-ul roșu **clipește**. Circuitul e cel de la proiectul 1 (PIR pe 2, buton pe 3, verde pe 5, roșu pe 6, buzzer pe 8).

```cpp
const int PIR = 2;
const int BUTON = 3;
const int VERDE = 5;
const int ROSU = 6;
const int BUZZER = 8;

bool armat = false;
unsigned long armatLa = 0;

void setup() {
  pinMode(PIR, INPUT);
  pinMode(BUTON, INPUT_PULLUP);
  pinMode(VERDE, OUTPUT);
  pinMode(ROSU, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  if (digitalRead(BUTON) == LOW) {
    armat = !armat;
    armatLa = millis();
    noTone(BUZZER);
    delay(300);
  }

  bool activ = armat && (millis() - armatLa > 5000);

  digitalWrite(VERDE, !armat);

  if (armat && !activ) {
    digitalWrite(ROSU, (millis() / 250) % 2);
  } else {
    digitalWrite(ROSU, armat);
  }

  if (activ && digitalRead(PIR) == HIGH) {
    tone(BUZZER, 1000);
  } else {
    noTone(BUZZER);
  }
}
```

`millis() - armatLa > 5000` înseamnă „au trecut mai mult de 5 secunde de la armare”. `(millis() / 250) % 2` alternează între 0 și 1, deci LED-ul clipește de 2 ori pe secundă.

**Gata când:**  
- [ ] După armare, LED-ul roșu clipește timp de 5 secunde, iar mișcarea nu declanșează nimic  
- [ ] După 5 secunde roșul rămâne aprins, iar mișcarea pornește sunetul  

### 7) Contorul de alarme
Vrem să știm **de câte ori** a intrat cineva, nu cât timp a stat în fața senzorului. Numărăm doar **schimbarea** „fără mișcare → mișcare” (același truc de detectare a frontului ca la un buton):

```cpp
int alarme = 0;
bool miscareAnterioara = false;
```

Apoi, în `loop()`, după ce ai calculat `activ`:

```cpp
  bool miscare = (digitalRead(PIR) == HIGH);

  if (activ && miscare && !miscareAnterioara) {
    alarme++;
    Serial.print("Alarma #");
    Serial.println(alarme);
  }
  miscareAnterioara = miscare;
```

**Gata când:**  
- [ ] O singură trecere prin fața senzorului dă o singură alarmă în Serial Monitor  
- [ ] Contorul crește la fiecare intrare nouă: „Alarma #1”, „Alarma #2”  

---

## Greșeli frecvente
1. **PIR „sună” imediat la pornire** — la început senzorul real se calibrează ~30 s. Așteaptă.  
2. **Butonul schimbă starea de mai multe ori** — lipsește `delay` după apăsare.  
3. **Sună și dezarmat** — condiția nu conține `armat &&`.  
4. **Sirena nu se oprește** — lipsește `noTone`.  
5. **LED-urile inverse** — ai pus `armat` unde trebuia `!armat`.  
6. **LED-ul roșu nu clipește** — folosești `delay` în loc de `millis()`, sau ai uitat `armatLa = millis();` la armare.  
7. **Alarma se numără de zeci de ori** — numeri tot timpul cât e mișcare, nu doar schimbarea.

---

## De făcut azi — „Santinela”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | PIR aprinde un LED |
| **Complet** | Minim + armare cu buton + sirenă + 2 LED-uri de stare |
| **Proiectul 2** | Întârziere de ieșire de 5 secunde + contor de alarme |

### Pasul 1 — Minim
- [ ] PIR pe pin 2  
- [ ] LED reacționează la mișcare  

### Pasul 2 — Complet
- [ ] Variabila `armat` și butonul  
- [ ] Sirena din funcție  
- [ ] Numele `A2_L06` e corect

### Pasul 3 — Proiectul 2
- [ ] LED-ul roșu clipește 5 secunde după armare  
- [ ] Mișcarea nu sună în timpul întârzierii  
- [ ] „Alarma #n” apare o singură dată pentru fiecare intrare

---

## Bonus ★★★ — Provocare: Jurnalul alarmei
*Doar dacă ai terminat Proiectul 2.*

Alarma ține minte **când** a sunat.

- [ ] Fiecare alarmă se scrie în Serial Monitor cu momentul ei, de exemplu **„Alarma #2 la 41 s”** (`millis() / 1000`)  
- [ ] **Apăsare lungă:** dezarmezi doar dacă ții butonul **2 secunde**, nu la o atingere  
- [ ] Testezi **3 intruziuni** la momente diferite, la cel puțin 2 secunde una de alta, și verifici că jurnalul arată timpi crescători

## Recapitulare pe scurt
1. PIR dă `HIGH` când vede mișcare  
2. `bool armat` ține **starea** sistemului  
3. `!` inversează o valoare  
4. `&&` înseamnă „și”: ambele condiții trebuie să fie adevărate  
5. `millis()` măsoară timpul fără să oprească programul

## Pe placa reală *(opțional)*
PIR-ul fizic (HC-SR501) are 2 potențiometre mici: sensibilitate și durată. Alimentează-l la 5V.

## Quiz scurt
- Ce face `armat = !armat`?  
- De ce avem `delay(300)` după buton?  
- Ce ar face alarma dacă am scrie `||` în loc de `&&`?  
- De ce numărăm doar schimbarea „fără mișcare → mișcare”, nu tot timpul cât e mișcare?

## Temă
Desenează schema unei alarme pentru camera ta. Unde ai pune senzorul PIR și de ce?

---

## Ce urmează — Lecția 7
În **lecția 7** măsori umiditatea solului și construiești un ghiveci care cere apă.
