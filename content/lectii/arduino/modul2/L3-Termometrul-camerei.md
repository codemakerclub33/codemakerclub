# LECȚIA 3 — Termometrul meu
### TMP36, formula în grade și un termostat de seră
**Modulul 2 · Senzori**  
**Code Maker Club · Sensor Scout**

> Azi citești **temperatura** cu senzorul **TMP36** și o transformi în **grade Celsius**.  
> Proiect: **„Termometrul meu”** · `Prenume_Nume_A2_L03`

---

## Ce facem azi
La finalul orei ai **două proiecte**: **Termometrul meu** (temperatura în Serial Monitor, în °C și °F) și **Termostatul de seră** (3 LED-uri care arată dacă e prea frig, bine sau prea cald). Temperatura e cea mai folosită măsurătoare: termostate, frigidere, sere, vreme. Azi vezi cum o **tensiune** devine **grade**, pas cu pas.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L2 · ce măsoară un termometru |
| 10–25 | Circuitul cu TMP36 |
| 25–50 | Formula tensiune → °C |
| 50–75 | **Proiectul 1** · media citirilor + Fahrenheit |
| 75–110 | **Proiectul 2** · termostat de seră |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme |

**Componente azi:** Arduino Uno · Breadboard · **Temperature Sensor [TMP36]** · 3 × LED (albastru, verde, roșu) · 3 × Resistor 220 Ω · fire

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `float grade = (volti - 0.5) * 100.0;` | Transformă tensiunea în grade Celsius | `float grade = (volti - 0.5) * 100.0;` |
| `float citesteTemperatura() { ... return ...; }` | O funcție care **dă înapoi** un rezultat | `float c = citesteTemperatura();` |
| `for (int i = 0; i < 10; i++)` | Repetă de 10 ori, ca să adunăm 10 citiri | `suma += analogRead(SENZOR);` |
| `if / else if / else` | Alege o singură ramură, după temperatură | `if (c < 18) { ... }` |

---

## Pas cu pas

### 1) Circuit nou
`Prenume_Nume_A2_L03`

**Gata când:**  
- [ ] Proiectul nou are numele `Prenume_Nume_A2_L03`  

### 2) Conexiuni
TMP36 are **3 picioare**; în Tinkercad treci cursorul peste ele ca să vezi numele. Dacă ții senzorul cu partea **plată** spre tine, ordinea e: **5V · semnal · GND**.

| Picior | Se conectează |
|--------|---------------|
| **5V** (stânga) | **5V** Arduino |
| **Semnal / Vout** (mijloc) | **A0** |
| **GND** (dreapta) | **GND** |

Atenție: dacă pui senzorul invers (5V și GND schimbate), citirile ies aiurea. Verifică numele picioarelor înainte să pornești simularea.

**Gata când:**  
- [ ] Toate firele sunt conectate exact ca în tabel  
- [ ] Am verificat de două ori GND și 5V înainte să pornesc simularea  

### 3) Formula
TMP36 dă o tensiune care crește cu **10 mV pe grad**, cu o decalare de **0,5 V** (ca să poată arăta și grade negative):

| Pas | Formula | Exemplu (25 °C) |
|-----|---------|-----------------|
| 1. Citire | `valoare = analogRead(A0)` | ≈ 153 |
| 2. Volți | `volti = valoare * 5.0 / 1023.0` | ≈ 0,75 V |
| 3. Grade | `grade = (volti - 0.5) * 100` | ≈ 25 °C |

### 4) Minim

```cpp
const int SENZOR = A0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  int valoare = analogRead(SENZOR);
  float volti = valoare * 5.0 / 1023.0;
  float grade = (volti - 0.5) * 100.0;

  Serial.print("Temperatura: ");
  Serial.print(grade, 1);
  Serial.println(" C");

  delay(1000);
}
```

În Tinkercad, dai click pe TMP36 și muți glisorul de temperatură: valoarea se schimbă.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Simularea pornește și montajul face ce scrie în „Minim”  

### 5) Complet — media a 10 citiri
Citirile „tremură” puțin. Media lor e mai stabilă:

```cpp
const int SENZOR = A0;

float citesteTemperatura() {
  long suma = 0;
  for (int i = 0; i < 10; i++) {
    suma += analogRead(SENZOR);
    delay(10);
  }
  float medie = suma / 10.0;
  float volti = medie * 5.0 / 1023.0;
  return (volti - 0.5) * 100.0;
}

void setup() {
  Serial.begin(9600);
}

void loop() {
  float c = citesteTemperatura();
  float f = c * 9.0 / 5.0 + 32.0;

  Serial.print(c, 1);
  Serial.print(" C  =  ");
  Serial.print(f, 1);
  Serial.println(" F");

  delay(1000);
}
```

**Ce e nou**

- `float citesteTemperatura()` e o funcție care **returnează** un rezultat (`return`).  
- `suma += analogRead(...)` înseamnă „adaugă la sumă”.  
- `long` e un întreg mai mare, ca să nu depășim limita la sumă.  
- Formula Fahrenheit: `F = C × 9/5 + 32`.

**Gata când:**  
- [ ] Codul complet se compilează fără erori  
- [ ] Simularea face tot ce scrie în „Complet”  

### 6) Cum verifici că merge
Într-un caiet, compară cu valori cunoscute:

| Situație | Temperatura așteptată |
|----------|----------------------|
| Cameră | ~ 20–25 °C |
| Apă cu gheață | ~ 0 °C |
| Corp uman | ~ 36–37 °C |

**Gata când:**  
- [ ] Am încercat fiecare situație din listă  
- [ ] Am notat ce nu a mers și am corectat  

### 7) Proiectul 2 — Termostatul de seră
Într-o seră, temperatura trebuie să rămână între două limite. Termometrul tău aprinde acum **un LED după zonă**: albastru (prea frig), verde (bine), roșu (prea cald).

| Piesă | Se conectează |
|-------|---------------|
| **TMP36** | ca la proiectul 1: 5V · semnal la **A0** · GND |
| **LED albastru** | pin **5** → 220 Ω → anod · catod → GND |
| **LED verde** | pin **6** → 220 Ω → anod · catod → GND |
| **LED roșu** | pin **7** → 220 Ω → anod · catod → GND |

```cpp
const int SENZOR = A0;
const int ALBASTRU = 5;
const int VERDE = 6;
const int ROSU = 7;

float citesteTemperatura() {
  long suma = 0;
  for (int i = 0; i < 10; i++) {
    suma += analogRead(SENZOR);
    delay(10);
  }
  float volti = (suma / 10.0) * 5.0 / 1023.0;
  return (volti - 0.5) * 100.0;
}

void setup() {
  pinMode(ALBASTRU, OUTPUT);
  pinMode(VERDE, OUTPUT);
  pinMode(ROSU, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  float c = citesteTemperatura();

  digitalWrite(ALBASTRU, LOW);
  digitalWrite(VERDE, LOW);
  digitalWrite(ROSU, LOW);

  if (c < 18) {
    digitalWrite(ALBASTRU, HIGH);
    Serial.print("Prea frig: ");
  } else if (c <= 28) {
    digitalWrite(VERDE, HIGH);
    Serial.print("Bine: ");
  } else {
    digitalWrite(ROSU, HIGH);
    Serial.print("Prea cald: ");
  }
  Serial.print(c, 1);
  Serial.println(" C");
  delay(500);
}
```

La început **stingem toate** LED-urile, apoi aprindem **doar unul**, ca la avertizorul de căldură din lecția următoare.

**Gata când:**  
- [ ] Sub 18 °C se aprinde albastrul, între 18 și 28 °C verdele, peste 28 °C roșul  
- [ ] În Serial Monitor vezi zona și temperatura  

### 8) Minima și maxima de la pornire
Un termostat bun ține minte cât de frig și cât de cald a fost. Adaugi două variabile **globale** (în afara funcțiilor), ca să-și păstreze valoarea de la o rundă la alta:

```cpp
float tMin = 100;
float tMax = -100;
```

Apoi, în `loop()`, după ce ai citit `c`:

```cpp
  if (c < tMin) tMin = c;
  if (c > tMax) tMax = c;

  Serial.print("Min / Max: ");
  Serial.print(tMin, 1);
  Serial.print(" / ");
  Serial.println(tMax, 1);
```

`tMin` pornește de la 100 și `tMax` de la −100, ca prima citire să le înlocuiască sigur.

**Gata când:**  
- [ ] Minima scade când muți glisorul spre frig, iar maxima crește când îl muți spre cald  
- [ ] Valorile nu se resetează la fiecare rundă  

---

## Greșeli frecvente
1. **Temperatură ciudată** (ex. 150 °C) — picioarele TMP36 sunt inversate.  
2. **Mereu 0 sau mereu 5 V** — firul de semnal nu merge la A0.  
3. **Împărțire întreagă** — ai scris `5 / 1023` fără `.0` și rezultatul e 0.  
4. **Eroare la `return`** — funcția `float` trebuie să returneze un `float`.  
5. **Valori care sar mult** — folosește media citirilor.  
6. **LED-urile se amestecă** — ai uitat să le stingi la începutul buclei.  
7. **Minima și maxima se resetează** — le-ai declarat în `loop()`, nu în afara funcțiilor.

---

## De făcut azi — „Termometrul meu”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Temperatura în °C, la fiecare secundă |
| **Complet** | Minim + medie din 10 citiri + Fahrenheit |
| **Proiectul 2** | Termostat de seră: 3 LED-uri după zonă + minima și maxima |

### Pasul 1 — Minim
- [ ] TMP36 conectat corect  
- [ ] Formula tensiune → °C  

### Pasul 2 — Complet
- [ ] Funcția `citesteTemperatura()` cu media  
- [ ] Afișare °C și °F  
- [ ] Numele `A2_L03` e corect

### Pasul 3 — Proiectul 2
- [ ] 3 LED-uri (albastru, verde, roșu) pe pinii 5, 6 și 7  
- [ ] Zonele: sub 18 °C, între 18 și 28 °C, peste 28 °C  
- [ ] Minima și maxima afișate în Serial Monitor

---

## Bonus ★★★ — Provocare: Trendul temperaturii
*Doar dacă ai terminat Proiectul 2.*

Termometrul spune și **încotro merge** temperatura.

- [ ] La fiecare secundă compari temperatura cu cea precedentă și scrii **urcă** (peste 0,5 °C mai mult), **scade** (peste 0,5 °C mai puțin) sau **stabil**  
- [ ] Testezi cu glisorul TMP36 la 0, 25 și 37 °C: temperatura afișată diferă de valoarea reală cu cel mult **1 °C**  
- [ ] Muți glisorul și verifici că trendul se schimbă: **urcă**, apoi **stabil**, apoi **scade**

## Recapitulare pe scurt
1. TMP36: 10 mV pe grad, decalare 0,5 V  
2. `°C = (volți − 0,5) × 100`  
3. O funcție poate **returna** o valoare  
4. Media citirilor liniștește senzorul  
5. Praguri plus LED-uri înseamnă un **termostat**

## Pe placa reală *(opțional)*
TMP36 fizic: partea plată spre tine, de la stânga: 5V, semnal, GND. Atenție la polaritate, se încălzește dacă e invers.

## Quiz scurt
- Ce citește Arduino de la TMP36: temperatura sau o tensiune?  
- De ce facem media a 10 citiri?  
- Ce temperatură e 77 °F?  *(Indiciu: invers formulei.)*  
- De ce `tMin` începe de la 100 și `tMax` de la −100?

## Temă
Măsoară temperatura din 3 locuri diferite din casă (simulat sau real) și notează-le într-un tabel.

---

## Ce urmează — Lecția 4
În **lecția 4** legi temperatura de lumini și sunet, cu praguri pe trepte.
