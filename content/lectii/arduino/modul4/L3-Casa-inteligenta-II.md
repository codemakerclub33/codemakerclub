# LECȚIA 3 — Casa inteligentă: securitate și acces
### Extinzi un proiect existent: alarmă, ușă și jurnal
**Modulul 4 · Proiecte complete**  
**Code Maker Club · Arduino Creator**

> Azi adaugi casei **securitate**: o alarmă cu PIR și o ușă cu servo. Continui circuitul din lecția anterioară.  
> Proiect: **„Casa inteligentă: securitate și acces”** · `Prenume_Nume_A4_L03`

---

## Ce facem azi
La finalul orei ai **două proiecte**: **Casa inteligentă, partea a II-a** (alarmă PIR armabilă cu buton, sirenă, ușă cu servo și mesaje pe LCD, în același circuit cu lumini și climat) și o **alarmă cu întârziere de ieșire și jurnal de intruziuni**, care îți dă 5 secunde să pleci și numără alarmele. Aici înveți să **extinzi un proiect existent** fără să-l strici: copiezi circuitul, adaugi funcții noi și le chemi din `loop()`.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L2 · tabelul de pini |
| 10–30 | Copiem circuitul și adăugăm piesele |
| 30–55 | **Proiectul 1** · alarma armabilă cu sirenă |
| 55–80 | **Proiectul 1** · ușa, LCD și integrarea cu partea I |
| 80–110 | **Proiectul 2** · întârziere de ieșire și jurnal |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme |

**Componente azi:** Arduino Uno · Breadboard · tot circuitul din lecția 2 · **PIR Sensor** · 3 × Pushbutton · **Micro Servo** · Piezo · LED roșu + Resistor 220 Ω · LED galben + Resistor 220 Ω (doar la Bonus) · fire

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `bool intrus` | Ține minte că alarma s-a declanșat, chiar dacă omul pleacă | `if (armat && digitalRead(PIR) == HIGH) intrus = true;` |
| `900 + (millis() / 5) % 600` | Un ton care urcă și coboară, pentru sirenă | `tone(BUZZER, 900 + (millis() / 5) % 600);` |
| `bool usaDeschisa` | Starea ușii; închiderea după 3 secunde se face cu `millis()` | `if (usaDeschisa && millis() - deschisaLa >= 3000) { ... }` |
| `bool activ()` | Funcție care răspunde: alarma e armată și a trecut întârzierea? | `return armat && (millis() - armatLa > 5000);` |
| `intruziuni++` | Crește jurnalul cu 1, o singură dată pe alarmă | `if (activ() && !intrus && ...) { intrus = true; intruziuni++; }` |

---

## Pas cu pas

### 1) Circuit nou, din copia lecției 2
Deschide `Prenume_Nume_A4_L02`, apoi **Duplică** și redenumește `Prenume_Nume_A4_L03`. Astfel păstrezi partea I intactă.

**Gata când:**  
- [ ] Proiectul nou are numele `Prenume_Nume_A4_L03`  
- [ ] Partea I (`Prenume_Nume_A4_L02`) a rămas neschimbată  

### 2) Piese noi

| Piesă | Se conectează |
|-------|---------------|
| **PIR** | semnal **A2** · 5V · GND |
| **Buton armare** | pin **A3** și **GND** |
| **Buton ușă** | pin **9** și **GND** |
| **Servo ușă** | roșu 5V · negru GND · semnal **10** |
| **Piezo** | pin **13** și **GND** |
| **LED alarmă (roșu)** | pin **A4** → 220 Ω → anod · catod → GND |

Pinii sunt cei din tabelul din L2. **Nu mai atingi** pinii deja folosiți.

**Gata când:**  
- [ ] Toate firele sunt conectate exact ca în tabel  
- [ ] Am verificat de două ori GND și 5V înainte să pornesc simularea  

### 3) Minim — alarma armabilă

```cpp
const int PIR = A2;
const int BUTON_ARMARE = A3;
const int LED_ALARMA = A4;
const int BUZZER = 13;

bool armat = false;
bool intrus = false;
bool armAnterior = false;

void setup() {
  pinMode(PIR, INPUT);
  pinMode(BUTON_ARMARE, INPUT_PULLUP);
  pinMode(LED_ALARMA, OUTPUT);
}

void loop() {
  bool apasat = (digitalRead(BUTON_ARMARE) == LOW);
  if (apasat && !armAnterior) {
    armat = !armat;
    intrus = false;
    noTone(BUZZER);
  }
  armAnterior = apasat;

  if (armat && digitalRead(PIR) == HIGH) {
    intrus = true;
  }

  digitalWrite(LED_ALARMA, armat);

  if (intrus) {
    tone(BUZZER, 900 + (millis() / 5) % 600);
  }
  delay(30);
}
```

- Butonul **armează** și **dezarmează** (tehnica frontului).  
- `intrus` rămâne adevărat până dezarmezi, chiar dacă mișcarea a trecut.  
- Sirena schimbă tonul după `millis()`: urcă între 900 și 1500 Hz.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Simularea pornește și montajul face ce scrie în „Minim”  

### 4) Ce adăugăm la program

| Funcție nouă | Ce face |
|--------------|---------|
| `alarma()` | citește butonul de armare, PIR, pornește sirena |
| `usa()` | la buton deschide ușa 3 secunde, apoi o închide (cu `millis()`) |
| `pagini()` | schimbă pagina de pe LCD |
| `mesajAlarma()` | afișează pe LCD „ARMAT” sau „INTRUS!” (rândul 2) |

### 5) Complet — codul (I + II)

```cpp
#include <LiquidCrystal.h>
#include <Servo.h>

const int LUMINA = A0;
const int TEMP = A1;
const int PIR = A2;
const int BUTON_ARMARE = A3;
const int LED_ALARMA = A4;
const int LED_LAMPA = 7;
const int MOTOR = 6;
const int BUTON_PAGINA = 8;
const int BUZZER = 13;
const int PIN_USA = 10;
const int BUTON_USA = 9;

const int PRAG_APRINDE = 250;
const int PRAG_STINGE = 350;
const float T_MIN = 24.0;
const float T_MAX = 34.0;

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);
Servo usaServo;

bool lampaAprinsa = false;
bool armat = false;
bool intrus = false;
bool usaDeschisa = false;
int pagina = 0;
bool pagAnterior = false;
bool armAnterior = false;
unsigned long ultimaAfisare = 0;
unsigned long deschisaLa = 0;

float temperatura() {
  float volti = analogRead(TEMP) * 5.0 / 1023.0;
  return (volti - 0.5) * 100.0;
}

void lampa() {
  int lumina = analogRead(LUMINA);
  if (!lampaAprinsa && lumina < PRAG_APRINDE) lampaAprinsa = true;
  if (lampaAprinsa && lumina > PRAG_STINGE) lampaAprinsa = false;
  digitalWrite(LED_LAMPA, lampaAprinsa);
}

void ventilator() {
  float t = temperatura();
  int viteza = map((int)t, (int)T_MIN, (int)T_MAX, 0, 255);
  analogWrite(MOTOR, constrain(viteza, 0, 255));
}

void alarma() {
  bool apasat = (digitalRead(BUTON_ARMARE) == LOW);
  if (apasat && !armAnterior) {
    armat = !armat;
    intrus = false;
    noTone(BUZZER);
  }
  armAnterior = apasat;

  if (armat && digitalRead(PIR) == HIGH) {
    intrus = true;
  }

  digitalWrite(LED_ALARMA, armat);

  if (intrus) {
    tone(BUZZER, 900 + (millis() / 5) % 600);
  }
}

void pagini() {
  bool apasat = (digitalRead(BUTON_PAGINA) == LOW);
  if (apasat && !pagAnterior) {
    pagina = (pagina + 1) % 2;
    lcd.clear();
  }
  pagAnterior = apasat;
}

void usa() {
  if (!usaDeschisa && digitalRead(BUTON_USA) == LOW) {
    usaDeschisa = true;
    deschisaLa = millis();
    usaServo.write(90);
  }
  if (usaDeschisa && millis() - deschisaLa >= 3000) {
    usaDeschisa = false;
    usaServo.write(0);
  }
}

void afiseaza() {
  if (millis() - ultimaAfisare < 400) return;
  ultimaAfisare = millis();

  lcd.setCursor(0, 0);
  if (pagina == 0) {
    lcd.print("Temp: ");
    lcd.print(temperatura(), 1);
    lcd.print(" C   ");
  } else {
    lcd.print("Lampa: ");
    lcd.print(lampaAprinsa ? "ON " : "OFF");
    lcd.print("       ");
  }

  lcd.setCursor(0, 1);
  if (intrus) {
    lcd.print("!!! INTRUS !!!  ");
  } else if (armat) {
    lcd.print("Alarma: ARMAT   ");
  } else {
    lcd.print("Alarma: oprita  ");
  }
}

void setup() {
  pinMode(LED_LAMPA, OUTPUT);
  pinMode(MOTOR, OUTPUT);
  pinMode(LED_ALARMA, OUTPUT);
  pinMode(PIR, INPUT);
  pinMode(BUTON_ARMARE, INPUT_PULLUP);
  pinMode(BUTON_PAGINA, INPUT_PULLUP);
  pinMode(BUTON_USA, INPUT_PULLUP);
  usaServo.attach(PIN_USA);
  usaServo.write(0);
  lcd.begin(16, 2);
  lcd.print("Casa inteligenta");
  delay(1000);
  lcd.clear();
}

void loop() {
  pagini();
  usa();
  lampa();
  ventilator();
  alarma();
  afiseaza();
  delay(30);
}
```

**Idei importante**

- `loop()` apelează toate funcțiile, **fără `delay` lung**, deci toate sistemele „merg în paralel”.  
- `intrus` ține minte că s-a declanșat alarma, chiar dacă omul pleacă; se oprește doar la **dezarmare**.  
- Sirena schimbă tonul după `millis()`: `900 + (millis() / 5) % 600` urcă între 900 și 1500 Hz.

- Ușa folosește aceeași idee ca bariera din Modulul 3: o stare (`usaDeschisa`) și `millis()` pentru cele 3 secunde, fără `delay`.

**Gata când:**  
- [ ] Codul complet se compilează fără erori  
- [ ] Simularea face tot ce scrie în „Complet”  

### 6) Test integrat

| Scenariu | Ce vezi |
|----------|---------|
| Noapte + cald | lampa ON și ventilator pornit |
| Armezi, miști obiectul | sirenă + „!!! INTRUS !!!” |
| Dezarmezi | liniște, LED alarmă stins |
| Buton pagină | LCD arată altă informație pe rândul 1 |
| Buton ușă | servo la 90°, după 3 s revine |

**Gata când:**  
- [ ] Am încercat fiecare situație din listă  
- [ ] Am notat ce nu a mers și am corectat  

### 7) Proiectul 2 — Întârziere de ieșire și jurnal
O alarmă adevărată îți dă timp să pleci din cameră și ține un **jurnal** cu alarmele declanșate. Alarma devine **activă** abia la 5 secunde după armare, iar LCD-ul arată „Armare in curs” cât timp așteaptă și numărul de intruziuni după aceea. Circuitul rămâne cel de la proiectul 1.

În afara funcțiilor adaugă:

```cpp
unsigned long armatLa = 0;
int intruziuni = 0;
```

Înainte de `alarma()` adaugă funcția `activ()` și apoi înlocuiește `alarma()`:

```cpp
bool activ() {
  return armat && (millis() - armatLa > 5000);
}

void alarma() {
  bool apasat = (digitalRead(BUTON_ARMARE) == LOW);
  if (apasat && !armAnterior) {
    armat = !armat;
    armatLa = millis();
    intrus = false;
    noTone(BUZZER);
  }
  armAnterior = apasat;

  if (activ() && !intrus && digitalRead(PIR) == HIGH) {
    intrus = true;
    intruziuni++;
  }

  digitalWrite(LED_ALARMA, armat);

  if (intrus) {
    tone(BUZZER, 900 + (millis() / 5) % 600);
  }
}
```

În `afiseaza()`, înlocuiește scrierea rândului 2 (de la `lcd.setCursor(0, 1);`) cu:

```cpp
  lcd.setCursor(0, 1);
  if (intrus) {
    lcd.print("!!! INTRUS !!!  ");
  } else if (armat && !activ()) {
    lcd.print("Armare in curs  ");
  } else if (armat) {
    lcd.print("ARMAT Intr: ");
    lcd.print(intruziuni);
    lcd.print("  ");
  } else {
    lcd.print("Alarma: oprita  ");
  }
```

- `activ()` e adevărată doar la 5 secunde după armare: până atunci mișcarea nu declanșează nimic.  
- `!intrus` face ca `intruziuni++` să se întâmple **o singură dată** pe alarmă, nu la fiecare rundă.  
- Jurnalul se zerează la repornirea plăcii.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] După armare, mișcarea nu sună timp de 5 secunde  
- [ ] După alarmă, LCD-ul arată `ARMAT Intr: 1` (numărul crește la fiecare alarmă nouă)  

### 8) Testul jurnalului

| Pas | Ce faci | Ce vezi |
|-----|---------|---------|
| 1 | Armezi și miști imediat obiectul | „Armare in curs”, fără sirenă |
| 2 | Aștepți 5 secunde, apoi miști obiectul | sirenă + „!!! INTRUS !!!” |
| 3 | Dezarmezi, armezi din nou, aștepți 5 secunde | `ARMAT Intr: 1` |
| 4 | Miști obiectul a doua oară | sirenă; după rearmare, `Intr: 2` |

**Gata când:**  
- [ ] Am încercat fiecare pas din listă  
- [ ] Am notat ce nu a mers și am corectat  

---

## Greșeli frecvente
1. **Merge partea I, dar nu partea II** — ai redenumit circuitul fără să-l duplici.  
2. **Conflict de pini** — două piese pe același pin (verifică tabelul).  
3. **Sirena se aude mereu** — `intrus` nu se resetează la dezarmare.  
4. **Alarmă fără armare** — lipsește `armat &&` în condiție.  
5. **Programul se „blochează”** — un `delay` lung într-o funcție.
6. **Alarma sună imediat după armare** — lipsește `armatLa = millis();` la armare.    
7. **Jurnalul crește de zeci de ori la o alarmă** — lipsește `!intrus` din condiție.    

---

## De făcut azi — „Casa inteligentă: securitate și acces”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Alarmă PIR cu armare și sirenă |
| **Complet** | Minim + ușa servo + LED alarmă + mesaje pe LCD, împreună cu partea I |
| **Proiectul 2** | Întârziere de ieșire de 5 secunde + jurnal de intruziuni pe LCD |

### Pasul 1 — Minim
- [ ] PIR, buton armare, sirenă  

### Pasul 2 — Complet
- [ ] Mesaje „ARMAT” / „INTRUS”  
- [ ] Ușa se deschide 3 secunde cu `millis()` (buton pe pin 9)  
- [ ] Numele `A4_L03` e corect

### Pasul 3 — Proiectul 2
- [ ] `activ()` cu întârziere de 5 secunde  
- [ ] `intruziuni` crește o singură dată pe alarmă  
- [ ] LCD-ul arată „Armare in curs” și apoi `ARMAT Intr: n`  

---

## Bonus ★★★ — Indicator de ușă și lampă la mișcare
*Doar dacă ai terminat Proiectul 2.*

Casa arată când e deschisă ușa și își folosește senzorul de mișcare și pentru lumină. **Piesă nouă:** un LED galben pe pin **A5** (prin 220 Ω).

- [ ] LED-ul galben e aprins cât timp ușa e deschisă (cele 3 secunde)  
- [ ] Când e întuneric și PIR vede mișcare, lampa se aprinde și rămâne aprinsă încă 10 secunde după ultima mișcare  
- [ ] Partea de securitate (alarma, ușa, jurnalul) merge la fel ca înainte  

## Recapitulare pe scurt
1. Extinde un proiect existent în pași mici  
2. Funcții separate = cod ușor de schimbat  
3. Starea sistemului = variabile globale  
4. Întârzierea de ieșire = `armatLa` + `millis()`  

## Pe placa reală *(opțional)*
Pentru o casă reală, alarma ar trimite și o notificare (SMS, Wi-Fi). Pe Arduino Uno nu avem Wi-Fi; se folosesc plăci ca ESP32.

## Quiz scurt
- De ce nu folosim `delay` lung în funcții?  
- Ce reține variabila `intrus`?  
- Ce se întâmplă dacă armezi când PIR e deja `HIGH`?
- De ce `intruziuni++` stă sub condiția `!intrus`?  

## Temă
Fă o listă cu 5 lucruri pe care le-ai mai adăuga casei tale (ex. senzor de fum).

---

## Ce urmează — Lecția 4
În **lecția 4** construiești un joc de reflexe: un LED aleator, butoane, runde și un scor pe LCD.
