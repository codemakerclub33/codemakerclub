# LECȚIA 4 — Avertizor de căldură
### Praguri pe trepte, buzzer și histerezis
**Modulul 2 · Senzori**  
**Code Maker Club · Sensor Scout**

> Azi legi temperatura de **lumini și sunet**: verde = OK, galben = cald, roșu = pericol (și buzzer).  
> Proiect: **„Avertizor de căldură”** · `Prenume_Nume_A2_L04`

---

## Ce facem azi
La finalul orei ai **două proiecte**: **Avertizorul de căldură** (verde, galben, roșu și buzzer după temperatură) și un **Termostat cu histerezis**, care pornește și oprește un ventilator fără să clipească la limită. Așa funcționează aerul condiționat, frigiderul și ventilatorul din calculator.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L3 · TMP36 și formula în °C |
| 10–25 | Circuit: 3 LED-uri + buzzer |
| 25–50 | Trepte de temperatură cu `if / else if` |
| 50–75 | **Proiectul 1** · avertizor cu buzzer intermitent |
| 75–110 | **Proiectul 2** · termostat cu histerezis |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme |

**Componente azi:** Arduino Uno · Breadboard · TMP36 · 3 × LED (verde, galben, roșu) · **LED albastru** · 4 × Resistor 220 Ω · Piezo · fire

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `if / else if / else` | Alege o singură treaptă de temperatură | `if (c > 30) { ... } else if (c > 25) { ... }` |
| `tone(pin, frecvență)` | Pornește sunetul pe buzzer | `tone(BUZZER, 1000);` |
| `noTone(pin)` | Oprește sunetul | `noTone(BUZZER);` |
| `bool ventilator` | Ține minte dacă ventilatorul merge | `bool ventilator = false;` |
| două praguri | **Histerezis**: pornește la un prag, oprește la altul | `if (c > 28) ... else if (c < 25) ...` |

---

## Pas cu pas

### 1) Circuit nou
`Prenume_Nume_A2_L04`

**Gata când:**  
- [ ] Proiectul nou are numele `Prenume_Nume_A2_L04`  

### 2) Conexiuni

| Piesă | Se conectează |
|-------|---------------|
| **TMP36** | 5V · semnal la **A0** · GND |
| **LED verde** | pin **4** → 220 Ω → anod · catod → GND |
| **LED galben** | pin **5** → 220 Ω → anod · catod → GND |
| **LED roșu** | pin **6** → 220 Ω → anod · catod → GND |
| **Piezo** | un picior la pin **8**, celălalt la **GND** |

**Gata când:**  
- [ ] Toate firele sunt conectate exact ca în tabel  
- [ ] Am verificat de două ori GND și 5V înainte să pornesc simularea  

### 3) Minim — trei trepte

```cpp
const int SENZOR = A0;
const int VERDE = 4;
const int GALBEN = 5;
const int ROSU = 6;

void setup() {
  pinMode(VERDE, OUTPUT);
  pinMode(GALBEN, OUTPUT);
  pinMode(ROSU, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  float volti = analogRead(SENZOR) * 5.0 / 1023.0;
  float grade = (volti - 0.5) * 100.0;

  digitalWrite(VERDE, LOW);
  digitalWrite(GALBEN, LOW);
  digitalWrite(ROSU, LOW);

  if (grade < 30) {
    digitalWrite(VERDE, HIGH);
  } else if (grade < 45) {
    digitalWrite(GALBEN, HIGH);
  } else {
    digitalWrite(ROSU, HIGH);
  }

  Serial.println(grade, 1);
  delay(300);
}
```

- La început **stingem toate** LED-urile, apoi aprindem **doar unul**. E o tehnică simplă și sigură.  
- Ordinea `if / else if / else` contează: se oprește la prima condiție adevărată.  
- Pragurile `30` și `45` sunt ale tale, le poți schimba.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Simularea pornește și montajul face ce scrie în „Minim”  

### 4) Complet — buzzer intermitent
La roșu, buzzerul face „bip bip”. Folosim `tone` și `noTone`:

```cpp
const int SENZOR = A0;
const int VERDE = 4;
const int GALBEN = 5;
const int ROSU = 6;
const int BUZZER = 8;

void setup() {
  pinMode(VERDE, OUTPUT);
  pinMode(GALBEN, OUTPUT);
  pinMode(ROSU, OUTPUT);
  Serial.begin(9600);
}

void alarma() {
  tone(BUZZER, 1000);
  delay(150);
  noTone(BUZZER);
  delay(150);
}

void loop() {
  float volti = analogRead(SENZOR) * 5.0 / 1023.0;
  float grade = (volti - 0.5) * 100.0;

  digitalWrite(VERDE, LOW);
  digitalWrite(GALBEN, LOW);
  digitalWrite(ROSU, LOW);

  if (grade < 30) {
    digitalWrite(VERDE, HIGH);
    delay(300);
  } else if (grade < 45) {
    digitalWrite(GALBEN, HIGH);
    delay(300);
  } else {
    digitalWrite(ROSU, HIGH);
    alarma();
  }

  Serial.print("Temperatura: ");
  Serial.println(grade, 1);
}
```

În Tinkercad, mută glisorul TMP36 peste 45 °C: LED-ul roșu se aprinde și buzzerul sună în „bip-uri”.

**Gata când:**  
- [ ] Codul complet se compilează fără erori  
- [ ] Simularea face tot ce scrie în „Complet”  

### 5) Test pe trepte

| Temperatură | Ce vezi |
|-------------|---------|
| sub 30 °C | verde |
| 30–44 °C | galben |
| 45 °C sau mai mult | roșu + bip |

**Gata când:**  
- [ ] Am încercat fiecare situație din listă  
- [ ] Am notat ce nu a mers și am corectat  

### 6) Proiectul 2 — Termostat cu histerezis
Un termostat care pornește și oprește la **aceeași** temperatură ar clipi la limită. De aceea folosește **două praguri**: pornește la 28 °C și se oprește abia la 25 °C. LED-ul **albastru** de pe pin **3** este ventilatorul (pin 3 → 220 Ω → anod · catod → GND). TMP36 rămâne la A0.

```cpp
const int SENZOR = A0;
const int VENTILATOR = 3;

bool ventilator = false;

void setup() {
  pinMode(VENTILATOR, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  float volti = analogRead(SENZOR) * 5.0 / 1023.0;
  float c = (volti - 0.5) * 100.0;

  if (c > 28) {
    ventilator = true;
  } else if (c < 25) {
    ventilator = false;
  }

  digitalWrite(VENTILATOR, ventilator);

  Serial.print(c, 1);
  Serial.print(" C  Ventilator: ");
  Serial.println(ventilator ? "PORNIT" : "oprit");
  delay(300);
}
```

Între 25 și 28 °C **nu se schimbă nimic**: ventilatorul rămâne cum era. Asta e histerezisul.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Ventilatorul pornește la peste 28 °C și se oprește abia sub 25 °C  

### 7) Testul histerezisului
Mută glisorul TMP36 în ordinea din tabel și completează coloana „Ce vezi”:

| Temperatura | Ventilator înainte | Ventilator după |
|-------------|--------------------|-----------------|
| 20 °C | oprit | oprit |
| 27 °C | oprit | oprit (încă sub 28) |
| 29 °C | oprit | **pornit** |
| 26 °C | pornit | pornit (încă peste 25) |
| 24 °C | pornit | **oprit** |

**Gata când:**  
- [ ] Toate cele 5 rânduri se potrivesc cu ce vezi  
- [ ] Poți explica de ce la 26 °C ventilatorul e uneori pornit, alteori oprit  

---

## Greșeli frecvente
1. **Două LED-uri aprinse** — ai uitat să le stingi la începutul `loop`.  
2. **Mereu roșu** — pragul e prea mic sau formula °C e greșită.  
3. **Fără sunet** — piezo nu e pe pin 8 sau n-ai `tone`.  
4. **LED nu se aprinde** — lipsește rezistorul sau catodul nu e la GND.  
5. **Treptele nu merg** — condițiile sunt în ordine inversă (`else if` după `else`).  
6. **Ventilatorul clipește la limită** — folosești un singur prag; îți trebuie două.  
7. **Ventilatorul nu pornește deloc** — variabila `ventilator` e declarată în `loop()`, nu în afara funcțiilor.

---

## De făcut azi — „Avertizor de căldură”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | 3 LED-uri pe trepte |
| **Complet** | Minim + buzzer la roșu + afișare în Serial Monitor |
| **Proiectul 2** | Termostat cu histerezis: pornește la 28 °C, oprește la 25 °C |

### Pasul 1 — Minim
- [ ] 3 LED-uri, fiecare cu rezistor  
- [ ] Treptele funcționează  

### Pasul 2 — Complet
- [ ] Funcția `alarma()`  
- [ ] Serial Monitor arată temperatura  
- [ ] Numele `A2_L04` e corect

### Pasul 3 — Proiectul 2
- [ ] LED albastru pe pin 3 ca ventilator  
- [ ] Pornește peste 28 °C, se oprește sub 25 °C  
- [ ] Tabelul de test completat (5 rânduri)

---

## Bonus ★★★ — Provocare: Patru trepte
*Doar dacă ai terminat Proiectul 2.*

Un avertizor cu **patru nivele**, nu trei.

- [ ] **Îngheț** (sub 5 °C): LED albastru · **normal** (5–29 °C): verde · **atenție** (30–44 °C): galben care **clipește** la 500 ms, cu `millis()`, nu cu `delay` · **pericol** (45 °C sau mai mult): roșu și buzzer  
- [ ] Testezi la **0, 4, 20, 35, 44 și 50 °C** și notezi LED-ul aprins  
- [ ] Un singur LED este aprins la un moment dat

## Recapitulare pe scurt
1. `if / else if / else` alege **o singură** ramură  
2. Stingem toate, apoi aprindem unul  
3. Funcția `alarma()` face codul mai curat  
4. `tone` / `noTone` pentru sunet  
5. Două praguri (histerezis) opresc clipirea la limită

## Pe placa reală *(opțional)*
Ca să testezi roșul, ține senzorul TMP36 între degete (se încălzește la ~30 °C) sau schimbă pragurile.

## Quiz scurt
- De ce stingem toate LED-urile la începutul buclei?  
- Ce se întâmplă dacă pragul roșu e mai mic decât cel galben?  
- Ce face `noTone`?  
- De ce termostatul pornește la 28 °C și se oprește la 25 °C?

## Temă
Alege temperaturile potrivite pentru un **frigider** (verde / galben / roșu) și scrie-le într-un tabel.

---

## Ce urmează — Lecția 5
În **lecția 5** măsori distanța cu un senzor cu ultrasunete și faci o parcare inteligentă.
