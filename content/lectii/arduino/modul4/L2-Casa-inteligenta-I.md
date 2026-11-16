# LECȚIA 2 — Casa inteligentă: lumini și climat
### Funcții mici, starea casei și un panou pe LCD
**Modulul 4 · Proiecte complete**  
**Code Maker Club · Arduino Creator**

> Azi construiești prima parte a unei **case inteligente**: lumina se aprinde singură, ventilatorul pornește la căldură, iar LCD-ul arată starea casei.  
> Proiect: **„Casa inteligentă: lumini și climat”** · `Prenume_Nume_A4_L02`

---

## Ce facem azi
La finalul orei ai **două proiecte**: **Casa inteligentă, partea I** (lampa se aprinde singură la întuneric, ventilatorul pornește la căldură, iar LCD-ul arată starea casei, pe pagini) și o **alertă de căldură** care scrie „PREA CALD!” și bipăie la fiecare 2 secunde. Un proiect mare se construiește **în etape**: azi faci baza, iar în lecția următoare adaugi securitatea, **în același circuit**. De aceea alegem pinii cu grijă.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L1 · tabelul de pini |
| 10–40 | Circuitul pas cu pas |
| 40–65 | **Proiectul 1** · lampa și ventilatorul |
| 65–90 | **Proiectul 1** · LCD, pagini și mod manual |
| 90–110 | **Proiectul 2** · alerta de căldură |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme |

**Componente azi:** Arduino Uno · Breadboard · Photoresistor · Resistor 10 kΩ · TMP36 · LED · Resistor 220 Ω · DC Motor · NPN transistor · Diodă · Resistor 1 kΩ · LCD 16 x 2 · Pushbutton · Piezo · LED galben + Resistor 220 Ω (doar la Bonus) · fire

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `return;` | Oprește funcția pe loc, înainte de ultima linie | `if (millis() - ultimaAfisare < 400) return;` |
| `condiție ? text1 : text2` | Alege între două texte | `lampaAprinsa ? "ON " : "OFF"` |
| două praguri (histerezis) | Lampa se aprinde sub un prag și se stinge abia peste altul | `if (!lampaAprinsa && lumina < PRAG_APRINDE) ...` |
| `millis() - apasatDe >= 1000` | Deosebește apăsarea lungă de cea scurtă | `if (millis() - apasatDe >= 1000) { ... }` |
| `void alertaCaldura()` | O funcție nouă, adăugată fără să strici restul | `alertaCaldura();` în `loop()` |

---

## Pas cu pas

### 1) Circuit nou
`Prenume_Nume_A4_L02` — îl vei **dubla** (copia) în lecția următoare.

**Gata când:**  
- [ ] Proiectul nou are numele `Prenume_Nume_A4_L02`  

### 2) Tabelul de pini al casei (pentru lecțiile 2 și 3)

| Piesă | Pin | Lecția |
|-------|-----|--------|
| LCD (RS, E, D4–D7) | 12, 11, 5, 4, 3, 2 | I |
| Fotorezistor | A0 | I |
| TMP36 | A1 | I |
| LED lampă | 7 | I |
| Motor ventilator (tranzistor) | 6 | I |
| Buton pagini / mod | 8 | I |
| PIR | A2 | II |
| Buton armare | A3 | II |
| Buton ușă | 9 | II |
| Servo ușă | 10 | II |
| Buzzer | 13 | II |
| LED alarmă | A4 | II |

### 3) Conexiuni (partea I)

| Piesă | Se conectează |
|-------|---------------|
| **LCD** | ca în Modulul 3 L1 (RS 12, E 11, D4 5, D5 4, D6 3, D7 2; VSS/RW/V0/K la GND; VDD și A cu 220 Ω la 5V) |
| **Fotorezistor** | 5V → fotorezistor → **A0** → 10 kΩ → GND |
| **TMP36** | 5V · semnal **A1** · GND |
| **LED lampă** | pin **7** → 220 Ω → anod · catod → GND |
| **Motor** | un fir la 5V, celălalt la **colectorul** tranzistorului; **emitor** la GND; **bază** la pin **6** prin 1 kΩ; dioda în paralel cu motorul (banda spre 5V) |
| **Buton** | pin **8** și **GND** |

**Gata când:**  
- [ ] Toate firele sunt conectate exact ca în tabel  
- [ ] Am verificat de două ori GND și 5V înainte să pornesc simularea  

### 4) Minim — lampă și ventilator

```cpp
const int LUMINA = A0;
const int TEMP = A1;
const int LED_LAMPA = 7;
const int MOTOR = 6;

float temperatura() {
  float volti = analogRead(TEMP) * 5.0 / 1023.0;
  return (volti - 0.5) * 100.0;
}

void setup() {
  pinMode(LED_LAMPA, OUTPUT);
  pinMode(MOTOR, OUTPUT);
}

void loop() {
  digitalWrite(LED_LAMPA, analogRead(LUMINA) < 300);

  int viteza = map((int)temperatura(), 24, 34, 0, 255);
  analogWrite(MOTOR, constrain(viteza, 0, 255));
  delay(100);
}
```

Lampa se aprinde sub un prag de lumină, iar ventilatorul merge cu atât mai tare cu cât e mai cald: 24 °C = oprit, 34 °C = viteză maximă.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Simularea pornește și montajul face ce scrie în „Minim”  

### 5) Cum împărțim programul
Fiecare parte e o funcție, iar `loop()` doar le cheamă. Așa lecția II doar **adaugă** funcții:

| Funcție | Ce face |
|---------|---------|
| `temperatura()` | citește TMP36 în °C |
| `lampa()` | LED după lumină (cu histerezis) |
| `ventilator()` | motor după temperatură sau manual |
| `schimbaModul()` | citește butonul |
| `afiseaza()` | scrie pe LCD |

### 6) Complet — codul

```cpp
#include <LiquidCrystal.h>

const int LUMINA = A0;
const int TEMP = A1;
const int LED_LAMPA = 7;
const int MOTOR = 6;
const int BUTON = 8;

const int PRAG_APRINDE = 250;
const int PRAG_STINGE = 350;
const float T_MIN = 24.0;
const float T_MAX = 34.0;

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

bool lampaAprinsa = false;
bool ventilatorManual = false;
int viteza = 0;
int pagina = 0;
bool butonAnterior = false;
unsigned long ultimaAfisare = 0;
unsigned long apasatDe = 0;

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
  if (ventilatorManual) {
    viteza = 255;
  } else {
    float t = temperatura();
    viteza = map((int)t, (int)T_MIN, (int)T_MAX, 0, 255);
    viteza = constrain(viteza, 0, 255);
  }
  analogWrite(MOTOR, viteza);
}

void schimbaModul() {
  bool apasat = (digitalRead(BUTON) == LOW);

  if (apasat && !butonAnterior) {
    apasatDe = millis();
  }
  if (!apasat && butonAnterior) {
    if (millis() - apasatDe >= 1000) {
      ventilatorManual = !ventilatorManual;
    } else {
      pagina = (pagina + 1) % 3;
    }
    lcd.clear();
  }
  butonAnterior = apasat;
}

void afiseaza() {
  if (millis() - ultimaAfisare < 400) return;
  ultimaAfisare = millis();

  lcd.setCursor(0, 0);
  if (pagina == 0) {
    lcd.print("Temp: ");
    lcd.print(temperatura(), 1);
    lcd.print(" C   ");
    lcd.setCursor(0, 1);
    lcd.print("Lumina: ");
    lcd.print(map(analogRead(LUMINA), 0, 1023, 0, 100));
    lcd.print(" %   ");
  } else if (pagina == 1) {
    lcd.print("Lampa: ");
    lcd.print(lampaAprinsa ? "ON " : "OFF");
    lcd.setCursor(0, 1);
    lcd.print("Vent: ");
    lcd.print(map(viteza, 0, 255, 0, 100));
    lcd.print(" %   ");
  } else {
    lcd.print("Ventilator MANUAL");
    lcd.setCursor(0, 1);
    lcd.print(ventilatorManual ? "pornit (tine 1s)" : "oprit  (tine 1s)");
  }
}

void setup() {
  pinMode(LED_LAMPA, OUTPUT);
  pinMode(MOTOR, OUTPUT);
  pinMode(BUTON, INPUT_PULLUP);
  lcd.begin(16, 2);
  lcd.print("Casa inteligenta");
  delay(1000);
  lcd.clear();
}

void loop() {
  schimbaModul();
  lampa();
  ventilator();
  afiseaza();
  delay(30);
}
```

**Ce e nou față de lecțiile anterioare**

- `return;` într-o funcție `void` o **oprește** pe loc. Aici folosim `if (...) return;` ca să afișăm doar o dată la 400 ms.  
- `lampaAprinsa ? "ON " : "OFF"` alege între două texte.  
- Variabilele globale (`pagina`, `lampaAprinsa`, `viteza`) sunt **starea casei**.

**Cum folosești butonul:** o apăsare **scurtă** schimbă pagina; o apăsare **lungă** (peste 1 secundă) pornește / oprește ventilatorul manual. Cu `millis()` măsurăm cât timp a fost ținut apăsat.

**Gata când:**  
- [ ] Codul complet se compilează fără erori  
- [ ] Simularea face tot ce scrie în „Complet”  

### 7) Teste

| Scenariu | Ce faci | Rezultat |
|----------|---------|----------|
| Lumină mare | glisor LDR sus | lampă stinsă |
| Întuneric | glisor LDR jos | lampă aprinsă |
| Cald | TMP36 la 35 °C | motor la viteză maximă |
| Rece | TMP36 la 20 °C | motor oprit |
| Buton, apăsare scurtă | apasă | pagina se schimbă |
| Buton, apăsare lungă | ține 1 s | ventilator manual ON / OFF |

**Gata când:**  
- [ ] Am încercat fiecare situație din listă  
- [ ] Am notat ce nu a mers și am corectat  

### 8) Proiectul 2 — Alertă de căldură
Casa trebuie să te **avertizeze** când e prea cald. Peste 35 °C, pagina cu temperatura scrie „PREA CALD!”, iar buzzerul bipăie, dar nu mai des de o dată la 2 secunde (cu `millis()`, ca să nu blocheze restul casei). Circuitul rămâne cel de la proiectul 1, plus piezo pe pin **13** și GND.

În afara funcțiilor adaugă:

```cpp
const int BUZZER = 13;
const float T_ALERTA = 35.0;
unsigned long ultimBip = 0;
```

Apoi o funcție nouă:

```cpp
void alertaCaldura() {
  if (temperatura() > T_ALERTA && millis() - ultimBip >= 2000) {
    ultimBip = millis();
    tone(BUZZER, 1500, 200);
  }
}
```

În `loop()` apeleaz-o după `ventilator();`:

```cpp
  alertaCaldura();
```

În `afiseaza()`, la pagina 0, înlocuiește scrierea rândului 2 (cea cu „Lumina”) cu:

```cpp
    lcd.setCursor(0, 1);
    if (temperatura() > T_ALERTA) {
      lcd.print("PREA CALD!      ");
    } else {
      lcd.print("Lumina: ");
      lcd.print(map(analogRead(LUMINA), 0, 1023, 0, 100));
      lcd.print(" %   ");
    }
```

- `ultimBip` ține minte **când** a bipăit ultima dată, așa că bipul se repetă la 2 secunde, nu la fiecare rundă.  
- Alerta e o funcție separată: nu ai schimbat nimic din lampă sau ventilator.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] La 36 °C apare „PREA CALD!” și se aude un bip la fiecare 2 secunde  

### 9) Testul alertei

| Pas | Ce faci | Ce vezi |
|-----|---------|---------|
| 1 | TMP36 la 30 °C | fără alertă, rândul 2 arată lumina |
| 2 | TMP36 la 36 °C | „PREA CALD!”, bip la fiecare 2 secunde, ventilator la maxim |
| 3 | Revii la 30 °C | alerta dispare, bipurile se opresc |

**Gata când:**  
- [ ] Am încercat fiecare pas din listă  
- [ ] Am notat ce nu a mers și am corectat  

---

## Greșeli frecvente
1. **Lampa clipește** — lipsește histerezisul (două praguri).  
2. **Ventilator nu pornește** — verifică tranzistorul și dioda.  
3. **LCD cu cifre rămase** — spații la finalul textelor.  
4. **Ecran care clipește** — `lcd.clear()` prea des.  
5. **Mereu aceeași pagină** — butonul fără `INPUT_PULLUP`.
6. **Alerta bipăie continuu** — lipsește comparația cu `ultimBip` sau nu actualizezi `ultimBip = millis();`.    
7. **„PREA CALD!” rămâne pe ecran** — rândul 2 nu e rescris cu spații la sfârșit, ori nu ai ramura `else`.    

---

## De făcut azi — „Casa inteligentă: lumini și climat”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Lampa automată + ventilator pe temperatură |
| **Complet** | Minim + LCD cu pagini + buton + mod manual |
| **Proiectul 2** | Alertă de căldură: „PREA CALD!” pe LCD și bip la 2 secunde |

### Pasul 1 — Minim
- [ ] Lampa se aprinde la întuneric  
- [ ] Ventilatorul pornește la căldură  

### Pasul 2 — Complet
- [ ] LCD cu 3 pagini  
- [ ] Apăsarea lungă comută modul manual  
- [ ] Numele `A4_L02` e corect

### Pasul 3 — Proiectul 2
- [ ] Funcția `alertaCaldura()` cu `millis()`  
- [ ] „PREA CALD!” apare peste 35 °C  
- [ ] Bipul se repetă o dată la 2 secunde  

---

## Bonus ★★★ — LED de mod manual
*Doar dacă ai terminat Proiectul 2.*

Casa arată singură în ce mod e ventilatorul. **Piesă nouă:** un LED galben pe pin **A5** (prin 220 Ω).

- [ ] LED-ul galben e aprins doar cât timp ventilatorul e în mod manual  
- [ ] În mod manual, alerta de căldură rămâne activă  
- [ ] Testezi: apăsare scurtă schimbă pagina și lasă LED-ul neschimbat; apăsare lungă îl aprinde sau îl stinge  

## Recapitulare pe scurt
1. Proiect mare = **funcții mici**  
2. Tabel de pini comun pentru toate etapele  
3. Variabile globale = starea sistemului  
4. O funcție nouă (`alertaCaldura`) se adaugă fără să strici restul  

## Pe placa reală *(opțional)*
Ventilatorul real are nevoie de alimentare proprie. Folosește modul cu **releu** pentru dispozitive de la priză, doar cu un adult și componente certificate.

## Quiz scurt
- Ce face `if (...) return;`?  
- De ce avem două praguri la lampă?  
- Ce pagini are panoul tău?
- De ce alerta folosește `millis()` și nu `delay(2000)`?  

## Temă
Gândește-te ce alt aparat din casă ai putea automatiza (ex. perdeaua) și ce senzor ar folosi.

---

## Ce urmează — Lecția 3
În **lecția 3** adaugi casei securitate: o alarmă cu PIR, o ușă cu servo și un jurnal de intruziuni, în același circuit.
