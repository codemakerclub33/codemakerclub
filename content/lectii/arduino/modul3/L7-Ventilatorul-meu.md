# LECȚIA 7 — Ventilatorul inteligent
### Motor DC, tranzistor și PWM
**Modulul 3 · Afișaj și mișcare**  
**Code Maker Club · Display Maker**

> Azi comanzi un **motor de curent continuu** (DC) cu ajutorul unui **tranzistor** și faci un ventilator cu viteză reglabilă și pornire automată la căldură.  
> Proiect: **„Ventilatorul inteligent”** · `Prenume_Nume_A3_L07`

---

## Ce facem azi
La finalul orei ai **două proiecte**: **Ventilatorul inteligent** (pornit cu un buton, viteză reglată cu potențiometrul și un mod automat care ține cont de temperatură) și un ventilator cu **pornire moale**, care accelerează și încetinește treptat, ca un aparat adevărat. Un pin Arduino dă doar ~**20 mA**, iar un motor cere mult mai mult, de aceea folosim un **tranzistor**: un întrerupător electronic comandat de un curent mic.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L6 · limite de curent |
| 10–40 | Circuitul cu tranzistor, diodă și motor |
| 40–55 | **Proiectul 1** · pornit / oprit |
| 55–75 | **Proiectul 1** · PWM și mod automat |
| 75–110 | **Proiectul 2** · pornire moale |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme |

**Componente azi:** Arduino Uno · Breadboard · **DC Motor** · **Transistor NPN (ex. PN2222)** · **Diodă (1N4007)** · Resistor 1 kΩ · Potentiometer · Pushbutton · al doilea Pushbutton, pentru viteze (doar la Bonus) · TMP36 · LED · Resistor 220 Ω · fire

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `digitalWrite(MOTOR, pornit)` | Pornește sau oprește motorul, prin tranzistor | `digitalWrite(MOTOR, HIGH);` |
| `analogWrite(MOTOR, viteza)` | **PWM**: viteza între 0 (oprit) și 255 (maxim) | `analogWrite(MOTOR, 128);` |
| `map(analogRead(POT), 0, 1023, 0, 255)` | Transformă potențiometrul în viteză | `int viteza = map(analogRead(POT), 0, 1023, 0, 255);` |
| `(int)t` | Taie zecimalele, ca `map` să primească numere întregi | `map((int)t, 20, 40, 0, 255)` |
| `if (viteza < tinta) viteza++;` | Urcă **treptat** spre țintă, cu 1 la fiecare rundă | `else if (viteza > tinta) viteza--;` |
| `digitalWrite(LED, viteza > 0)` | LED aprins cât timp motorul se învârte | `digitalWrite(LED, viteza > 0);` |

---

## Pas cu pas

### 1) Circuit nou
`Prenume_Nume_A3_L07`

**Gata când:**  
- [ ] Proiectul nou are numele `Prenume_Nume_A3_L07`  

### 2) Cum funcționează tranzistorul
Un tranzistor NPN are 3 picioare: **Bază (B)**, **Colector (C)**, **Emitor (E)**. Un curent mic în bază lasă un curent mare să curgă de la colector la emitor.

| Picior | Se conectează |
|--------|---------------|
| **B (bază)** | pin **9** printr-un **rezistor de 1 kΩ** |
| **C (colector)** | **un fir al motorului** |
| **E (emitor)** | **GND** |

| Piesă | Se conectează |
|-------|---------------|
| **Motor, celălalt fir** | **5V** |
| **Diodă** | în paralel cu motorul, cu **banda** (catodul) spre 5V |
| **Potențiometru** | laterale 5V și GND, mijloc **A0** |
| **Buton** | pin **2** și **GND** |
| **TMP36** | 5V · semnal **A1** · GND |

**Schema pe scurt:** `5V → motor → colector (C), emitor (E) → GND`, iar baza primește semnalul din pin 9.

> **De ce dioda?** Când motorul se oprește, produce un „șoc” de tensiune care poate strica tranzistorul sau placa. Dioda îl ocolește. O pui mereu la motoare și relee.

Pe Tinkercad, treci cursorul peste picioarele tranzistorului ca să vezi B/C/E.

### 3) Minim — pornit / oprit

```cpp
const int MOTOR = 9;
const int BUTON = 2;

bool pornit = false;
bool butonAnterior = false;

void setup() {
  pinMode(MOTOR, OUTPUT);
  pinMode(BUTON, INPUT_PULLUP);
}

void loop() {
  bool apasat = (digitalRead(BUTON) == LOW);

  if (apasat && !butonAnterior) {
    pornit = !pornit;
  }
  butonAnterior = apasat;

  digitalWrite(MOTOR, pornit);
  delay(30);
}
```

Fiecare apăsare **schimbă starea** (pornit ↔ oprit), tot cu tehnica „frontului” din lecțiile trecute.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Simularea pornește și montajul face ce scrie în „Minim”  

### 4) Viteză cu PWM
Pin 9 poate face **PWM**. Un motor primește mai mult sau mai puțin curent în medie:

```cpp
const int MOTOR = 9;
const int POT = A0;

void setup() {
  pinMode(MOTOR, OUTPUT);
}

void loop() {
  int viteza = map(analogRead(POT), 0, 1023, 0, 255);
  analogWrite(MOTOR, viteza);
  delay(20);
}
```

Un motor mic poate să **nu pornească** la valori foarte mici (sub ~60): are nevoie de un „impuls” ca să învingă frecarea.

### 5) Complet — manual + automat

```cpp
const int MOTOR = 9;
const int BUTON = 2;
const int POT = A0;
const int TEMP = A1;

bool automat = false;
bool butonAnterior = false;

float temperatura() {
  float volti = analogRead(TEMP) * 5.0 / 1023.0;
  return (volti - 0.5) * 100.0;
}

void setup() {
  pinMode(MOTOR, OUTPUT);
  pinMode(BUTON, INPUT_PULLUP);
  Serial.begin(9600);
}

void loop() {
  bool apasat = (digitalRead(BUTON) == LOW);
  if (apasat && !butonAnterior) {
    automat = !automat;
  }
  butonAnterior = apasat;

  int viteza;

  if (automat) {
    float t = temperatura();
    viteza = map((int)t, 20, 40, 0, 255);
    viteza = constrain(viteza, 0, 255);
  } else {
    viteza = map(analogRead(POT), 0, 1023, 0, 255);
  }

  analogWrite(MOTOR, viteza);

  Serial.print(automat ? "AUTOMAT" : "MANUAL");
  Serial.print("  viteza: ");
  Serial.println(viteza);
  delay(100);
}
```

| Mod | Cine decide viteza |
|-----|--------------------|
| **Manual** | potențiometrul |
| **Automat** | temperatura: 20 °C = oprit, 40 °C = viteză maximă |

`(int)t` transformă `float` în întreg (taie zecimalele), ca `map` să primească numere întregi.

**Gata când:**  
- [ ] Codul complet se compilează fără erori  
- [ ] Simularea face tot ce scrie în „Complet”  

### 6) Proiectul 2 — Pornire moale
Un motor care pornește brusc la viteză maximă se uzează repede și face zgomot. Aparatele adevărate **accelerează treptat** și **încetinesc treptat**. În cod, separăm **ținta** (viteza dorită) de **viteza curentă**, care se apropie de țintă cu câte 1 la fiecare 10 ms. Butonul pornește sau oprește ventilatorul, potențiometrul alege viteza dorită, iar un LED pe pin 4 (prin 220 Ω) arată când motorul se învârte. Circuitul de la proiectul 1 rămâne, plus LED-ul.

```cpp
const int MOTOR = 9;
const int BUTON = 2;
const int POT = A0;
const int LED = 4;

bool pornit = false;
bool butonAnterior = false;
int viteza = 0;

void setup() {
  pinMode(MOTOR, OUTPUT);
  pinMode(LED, OUTPUT);
  pinMode(BUTON, INPUT_PULLUP);
}

void loop() {
  bool apasat = (digitalRead(BUTON) == LOW);
  if (apasat && !butonAnterior) {
    pornit = !pornit;
  }
  butonAnterior = apasat;

  int tinta = 0;
  if (pornit) {
    tinta = map(analogRead(POT), 0, 1023, 60, 255);
  }

  if (viteza < tinta) {
    viteza++;
  } else if (viteza > tinta) {
    viteza--;
  }

  analogWrite(MOTOR, viteza);
  digitalWrite(LED, viteza > 0);
  delay(10);
}
```

- `tinta` este viteza **dorită**: 0 dacă ventilatorul e oprit, altfel valoarea din potențiometru (între 60 și 255, ca motorul să pornească sigur).  
- `viteza` este viteza **reală**: urcă sau coboară cu 1 la fiecare 10 ms, deci de la 0 la 255 durează aproape 2,5 secunde.  
- LED-ul rămâne aprins până când motorul s-a oprit de tot, nu doar până apeși butonul.  
- Poți roti potențiometrul **în timp ce** motorul merge: viteza se apropie lin de noua țintă.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] La apăsare motorul accelerează treptat, iar la a doua apăsare încetinește treptat  

### 7) Testul ventilatorului

| Pas | Ce faci | Ce vezi |
|-----|---------|---------|
| 1 | Potențiometru la maxim, apeși butonul | Motorul accelerează în ~2,5 secunde, LED aprins |
| 2 | Rotești potențiometrul spre minim | Viteza scade lin, fără salt |
| 3 | Apeși din nou butonul | Motorul încetinește până la oprire, apoi LED-ul se stinge |
| 4 | Apeși de două ori repede | Viteza nu sare brusc: urcă sau coboară de unde a ajuns |

**Gata când:**  
- [ ] Am încercat fiecare pas din listă  
- [ ] Am notat ce nu a mers și am corectat

---

## Greșeli frecvente
1. **Motorul nu pornește** — emitorul nu e la GND sau baza nu primește semnal.  
2. **Tranzistorul se „arde”** (în simulator) — motorul e conectat direct la pin, nu prin tranzistor; sau lipsește rezistorul de bază.  
3. **Motorul merge mereu** — colectorul și emitorul sunt inversate.  
4. **Fără diodă** — merge în simulator, dar în realitate poate strica placa.  
5. **Viteză mică nu pornește** — are nevoie de un minim; folosește `map(..., 60, 255)` pentru o pornire sigură.
6. **Motorul pornește brusc** — `viteza` primește direct valoarea țintei, în loc să crească cu 1.  
7. **Motorul nu se oprește la a doua apăsare** — `tinta` nu devine 0 când `pornit` e fals.  
8. **Viteza nu mai răspunde la potențiometru** — `tinta` e calculată o singură dată, în `setup`, nu în `loop`.  

---

## De făcut azi — „Ventilatorul inteligent”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Buton → motor pornit / oprit |
| **Complet** | Minim + viteză cu potențiometru + mod automat |
| **Proiectul 2** | Pornire moale: motorul accelerează și încetinește treptat, cu LED de stare |

### Pasul 1 — Minim
- [ ] Tranzistor, rezistor 1 kΩ, diodă  
- [ ] Butonul pornește motorul  

### Pasul 2 — Complet
- [ ] Viteză cu PWM  
- [ ] Mod automat (TMP36)  
- [ ] Numele `A3_L07` e corect

### Pasul 3 — Proiectul 2
- [ ] `tinta` și `viteza` separate  
- [ ] Viteza se apropie de țintă cu 1 la fiecare 10 ms  
- [ ] LED-ul arată când motorul se învârte  

---

## Bonus ★★★ — Provocare: Trei viteze cu un buton
*Doar dacă ai terminat Proiectul 2.*

Alege viteza cu un **al doilea buton** (pin 3 și GND), ca la ventilatoarele de birou: oprit, lent, mediu, rapid.

- [ ] Treptele sunt 0, 100, 170 și 255, parcurse în cerc cu `%`  
- [ ] Trecerea între trepte e lină, ca în proiectul 2  
- [ ] Serial Monitor scrie numele treptei: OPRIT, LENT, MEDIU sau RAPID  

## Recapitulare pe scurt
1. Pinul dă puțin curent, deci motorul se comandă printr-un **tranzistor**  
2. Dioda protejează la oprirea motorului  
3. `analogWrite` = viteză prin PWM (0–255)  
4. `tinta` și `viteza` separate fac pornirea moale  
5. Modul automat leagă viteza de temperatură  

## Pe placa reală *(opțional)*
Motorul real are nevoie de **alimentare separată** (baterii) dacă e mai mare decât un motoraș de jucărie, cu GND comun. Pentru motoare mari se folosește un modul driver (L298N, L9110).

## Quiz scurt
- De ce nu legăm motorul direct la pin?  
- La ce folosește dioda?  
- Ce face `analogWrite(MOTOR, 128)`?
- De ce separăm `tinta` de `viteza`?  

## Temă
Gândește-te la 3 dispozitive cu motor DC din casă (ventilator, jucărie, aspirator) și notează cum se controlează viteza fiecăruia.

---

## Ce urmează — Lecția 8
În **lecția 8** legi o tastatură 4×4 și construiești un seif cu cod, cu LCD, servo și blocare după trei încercări greșite.
