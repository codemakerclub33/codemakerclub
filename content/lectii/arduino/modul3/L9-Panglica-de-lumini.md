# LECȚIA 9 — Panglica magică
### NeoPixel, culori și efecte
**Modulul 3 · Afișaj și mișcare**  
**Code Maker Club · Display Maker**

> Azi lucrezi cu **LED-uri NeoPixel**: LED-uri RGB pe care le comanzi **individual** cu un singur fir.  
> Proiect: **„Panglica magică”** · `Prenume_Nume_A3_L09`

---

## Ce facem azi
La finalul orei ai **două proiecte**: **Panglica magică** (o rază care aleargă, un curcubeu, o respirație de culori, schimbate cu un buton, cu luminozitatea din potențiometru) și un **indicator de nivel** care aprinde tot mai multe LED-uri, de la verde la roșu, ca la un VU-metru. Luminile inteligente, pantofii care se aprind și ecranele LED mari folosesc LED-uri adresabile: **orice culoare, pe orice LED**, cu un singur pin Arduino.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L8 · LED RGB (Modulul 1) |
| 10–25 | Conexiuni NeoPixel |
| 25–45 | **Proiectul 1** · culori și raza |
| 45–75 | **Proiectul 1** · curcubeu, buton și luminozitate |
| 75–110 | **Proiectul 2** · indicator de nivel |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme |

**Componente azi:** Arduino Uno · Breadboard · **NeoPixel Ring (12 × RGB LED)** · Potentiometer · Pushbutton · Piezo (doar la Bonus) · fire

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `Adafruit_NeoPixel banda(NR, PIN, NEO_GRB + NEO_KHZ800);` | Creează banda: câți pixeli și pe ce pin | `Adafruit_NeoPixel banda(12, 6, NEO_GRB + NEO_KHZ800);` |
| `banda.Color(r, g, b)` | O culoare, cu roșu, verde și albastru între 0 și 255 | `banda.Color(0, 150, 255)` |
| `banda.setPixelColor(i, culoare)` | Pune o culoare pe pixelul `i` (de la 0) | `banda.setPixelColor(0, banda.Color(255, 0, 0));` |
| `banda.show()` | Trimite culorile la LED-uri. **Fără el nu se vede nimic!** | `banda.show();` |
| `banda.clear()` · `setBrightness(50)` | Stinge toți pixelii · limitează luminozitatea (0–255) | `banda.setBrightness(50);` |
| `if (i < nivel)` | Aprinde doar primii `nivel` pixeli, ca la un indicator | `for (int i = 0; i < NR; i++) { ... }` |

---

## Pas cu pas

### 1) Circuit nou
`Prenume_Nume_A3_L09`

**Gata când:**  
- [ ] Proiectul nou are numele `Prenume_Nume_A3_L09`  

### 2) Conexiuni

| Piesă | Se conectează |
|-------|---------------|
| **NeoPixel · alimentare (+)** | **5V** |
| **NeoPixel · GND** | **GND** |
| **NeoPixel · DIN / semnal** | pin **6** |
| **Potențiometru** | laterale 5V și GND, mijloc **A0** |
| **Buton** | pin **2** și **GND** |

> Pe un inel/panglică reală, pune și un **rezistor de ~300–500 Ω** pe firul de semnal și un condensator mare pe alimentare. Pentru câteva LED-uri în simulator nu e nevoie.

**Gata când:**  
- [ ] Toate firele sunt conectate exact ca în tabel  
- [ ] Am verificat de două ori GND și 5V înainte să pornesc simularea  

### 3) Primele culori

```cpp
#include <Adafruit_NeoPixel.h>

const int PIN = 6;
const int NR = 12;

Adafruit_NeoPixel banda(NR, PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  banda.begin();
  banda.setBrightness(50);

  banda.setPixelColor(0, banda.Color(255, 0, 0));
  banda.setPixelColor(1, banda.Color(0, 255, 0));
  banda.setPixelColor(2, banda.Color(0, 0, 255));
  banda.show();
}

void loop() {
}
```

- `Adafruit_NeoPixel banda(NR, PIN, ...)` creează obiectul: câți pixeli și pe ce pin.  
- `banda.Color(r, g, b)` — culoare, cu valori **0–255** pentru roșu, verde, albastru.  
- `setPixelColor(index, culoare)` pune culoarea pe pixelul cu numărul `index` (**începe de la 0**).  
- `show()` trimite efectiv culorile la LED-uri. **Fără `show()` nu se vede nimic!**  
- `setBrightness(50)` limitează luminozitatea (0–255).

### 4) Minim — raza care aleargă

```cpp
#include <Adafruit_NeoPixel.h>

const int PIN = 6;
const int NR = 12;

Adafruit_NeoPixel banda(NR, PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  banda.begin();
  banda.setBrightness(50);
}

void loop() {
  for (int i = 0; i < NR; i++) {
    banda.clear();
    banda.setPixelColor(i, banda.Color(0, 150, 255));
    banda.show();
    delay(80);
  }
}
```

`banda.clear()` stinge toți pixelii, apoi aprindem doar unul, tot mai departe. Rezultatul e o „rază” care se învârte.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Simularea pornește și montajul face ce scrie în „Minim”  

### 5) Curcubeul
Culorile din curcubeu se obțin cu o funcție „roata culorilor”: primește un număr 0–255 și returnează o culoare, parcurgând spectrul.

```cpp
#include <Adafruit_NeoPixel.h>

const int PIN = 6;
const int NR = 12;

Adafruit_NeoPixel banda(NR, PIN, NEO_GRB + NEO_KHZ800);

uint32_t roata(byte pozitie) {
  pozitie = 255 - pozitie;
  if (pozitie < 85) {
    return banda.Color(255 - pozitie * 3, 0, pozitie * 3);
  }
  if (pozitie < 170) {
    pozitie -= 85;
    return banda.Color(0, pozitie * 3, 255 - pozitie * 3);
  }
  pozitie -= 170;
  return banda.Color(pozitie * 3, 255 - pozitie * 3, 0);
}

void setup() {
  banda.begin();
  banda.setBrightness(50);
}

void loop() {
  for (int j = 0; j < 256; j++) {
    for (int i = 0; i < NR; i++) {
      banda.setPixelColor(i, roata((i * 256 / NR + j) & 255));
    }
    banda.show();
    delay(20);
  }
}
```

Fiecare pixel ia o culoare puțin diferită, iar `j` o „rotește” — curcubeul pare să se miște.

### 6) Complet — efecte, buton, luminozitate

```cpp
#include <Adafruit_NeoPixel.h>

const int PIN = 6;
const int NR = 12;
const int BUTON = 2;
const int POT = A0;

Adafruit_NeoPixel banda(NR, PIN, NEO_GRB + NEO_KHZ800);

int efect = 0;
const int NR_EFECTE = 3;
bool butonAnterior = false;
int pas = 0;

uint32_t roata(byte pozitie) {
  pozitie = 255 - pozitie;
  if (pozitie < 85) {
    return banda.Color(255 - pozitie * 3, 0, pozitie * 3);
  }
  if (pozitie < 170) {
    pozitie -= 85;
    return banda.Color(0, pozitie * 3, 255 - pozitie * 3);
  }
  pozitie -= 170;
  return banda.Color(pozitie * 3, 255 - pozitie * 3, 0);
}

void efectRaza() {
  banda.clear();
  banda.setPixelColor(pas % NR, banda.Color(0, 150, 255));
}

void efectCurcubeu() {
  for (int i = 0; i < NR; i++) {
    banda.setPixelColor(i, roata((i * 256 / NR + pas * 4) & 255));
  }
}

void efectRespiratie() {
  int v = abs((pas * 8) % 510 - 255);
  for (int i = 0; i < NR; i++) {
    banda.setPixelColor(i, banda.Color(v, 0, 255 - v));
  }
}

void setup() {
  pinMode(BUTON, INPUT_PULLUP);
  banda.begin();
}

void loop() {
  bool apasat = (digitalRead(BUTON) == LOW);
  if (apasat && !butonAnterior) {
    efect = (efect + 1) % NR_EFECTE;
  }
  butonAnterior = apasat;

  banda.setBrightness(map(analogRead(POT), 0, 1023, 5, 120));

  if (efect == 0) efectRaza();
  else if (efect == 1) efectCurcubeu();
  else efectRespiratie();

  banda.show();
  pas++;
  delay(40);
}
```

| Efect | Ce vezi |
|-------|---------|
| 0 · Rază | un pixel care aleargă |
| 1 · Curcubeu | culori care se rotesc |
| 2 · Respirație | toate LED-urile pulsează între roșu și albastru |

- `pas % NR` ține pixelul în interval 0–11.  
- `abs(...)` face valoarea să **urce și să coboare** (formă de „triunghi”).  
- Potențiometrul reglează luminozitatea în timp real.

**Gata când:**  
- [ ] Codul complet se compilează fără erori  
- [ ] Simularea face tot ce scrie în „Complet”  

### 7) Proiectul 2 — Indicator de nivel
Boxele, microfoanele și încărcătoarele au un **indicator de nivel**: cu cât valoarea e mai mare, cu atât se aprind mai multe LED-uri, iar culoarea trece de la **verde** la **galben** și la **roșu**. Potențiometrul e „sursa de sunet”, iar `map` îl transformă într-un număr de pixeli aprinși (0–12). Circuitul rămâne cel de la proiectul 1 (potențiometrul pe A0; butonul nu e folosit).

```cpp
#include <Adafruit_NeoPixel.h>

const int PIN = 6;
const int NR = 12;
const int POT = A0;

Adafruit_NeoPixel banda(NR, PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  banda.begin();
  banda.setBrightness(50);
}

void loop() {
  int nivel = map(analogRead(POT), 0, 1023, 0, NR);

  for (int i = 0; i < NR; i++) {
    if (i >= nivel) {
      banda.setPixelColor(i, 0);
    } else if (i < NR / 3) {
      banda.setPixelColor(i, banda.Color(0, 255, 0));
    } else if (i < 2 * NR / 3) {
      banda.setPixelColor(i, banda.Color(255, 150, 0));
    } else {
      banda.setPixelColor(i, banda.Color(255, 0, 0));
    }
  }

  banda.show();
  delay(30);
}
```

- `nivel` spune câți pixeli sunt aprinși: 0 la potențiometrul pus la minim, 12 la maxim.  
- `if (i >= nivel)` **stinge** pixelii de deasupra nivelului (culoarea `0` înseamnă stins). Fără această ramură, pixelii aprinși ar rămâne aprinși când scazi nivelul.  
- Prima treime a benzii e verde (`i < NR / 3`), mijlocul galben (`i < 2 * NR / 3`), restul roșu.  
- `show()` apare **o singură dată**, după ce toți pixelii au primit culoarea.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Rotind potențiometrul, pixelii se aprind și se sting în ordine, verde → galben → roșu  

### 8) Testul indicatorului

| Potențiometru | Pixeli aprinși | Culori |
|---------------|----------------|--------|
| minim | 0 | — |
| aproximativ 1/4 | 3 | verzi |
| la mijloc | 6 | 4 verzi + 2 galbeni |
| aproape de maxim | 10–11 | 4 verzi + 4 galbeni + 2–3 roșii |
| maxim | 12 | 4 verzi + 4 galbeni + 4 roșii |

**Gata când:**  
- [ ] Am încercat fiecare poziție din tabel  
- [ ] Am notat ce nu a mers și am corectat

---

## Greșeli frecvente
1. **Nu se aprinde nimic** — lipsește `banda.show()`.  
2. **Culori greșite** — ordinea e `NEO_GRB` în cod; unele benzi sunt `NEO_RGB`.  
3. **Doar primul pixel merge** — numărul de pixeli `NR` e prea mic.  
4. **Prea luminos** — folosește `setBrightness` (și consumă mai puțin curent).  
5. **Eroare la compilare** — lipsește `#include <Adafruit_NeoPixel.h>`.
6. **Pixelii rămân aprinși când scazi nivelul** — lipsește ramura care îi stinge (`i >= nivel`).  
7. **Culorile nu urmează verde → galben → roșu** — pragurile `NR / 3` și `2 * NR / 3` sunt greșite sau inversate.  
8. **Ultimul pixel nu se aprinde niciodată** — la `map` ai pus `NR - 1` în loc de `NR`.  

---

## De făcut azi — „Panglica magică”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | O rază de culoare care aleargă |
| **Complet** | Minim + curcubeu + buton + luminozitate cu potențiometru |
| **Proiectul 2** | Indicator de nivel: pixeli aprinși proporțional cu potențiometrul, verde → galben → roșu |

### Pasul 1 — Minim
- [ ] NeoPixel conectat (5V, GND, pin 6)  
- [ ] Raza aleargă  

### Pasul 2 — Complet
- [ ] 3 efecte cu buton  
- [ ] Luminozitate din potențiometru  
- [ ] Numele `A3_L09` e corect

### Pasul 3 — Proiectul 2
- [ ] `nivel` calculat cu `map` din potențiometru  
- [ ] Pixelii de deasupra nivelului sunt stinși  
- [ ] Culorile trec de la verde la galben și la roșu  

---

## Bonus ★★★ — Provocare: Indicator cu alarmă
*Doar dacă ai terminat Proiectul 2.*

Dă indicatorului de nivel și un **sunet**. **Piesă nouă:** un buzzer pe pin 8 și GND.

- [ ] Buzzerul sună doar când toți cei 12 pixeli sunt aprinși și tace imediat ce nivelul scade  
- [ ] Când nivelul e 10 sau mai mult, pixelii roșii clipesc, cu `millis()`, nu cu `delay`  
- [ ] Testezi: la nivel mic liniște, la nivel maxim alarmă  

## Recapitulare pe scurt
1. `Adafruit_NeoPixel`, `begin()`, `setPixelColor`, `show()`  
2. `Color(r, g, b)` cu valori 0–255  
3. Fără `show()` nu se vede nimic  
4. Efectele se fac cu `for` și un contor de pași  
5. `map` + `if (i < nivel)` fac un indicator de nivel  

## Pe placa reală *(opțional)*
Fiecare NeoPixel poate consuma până la **60 mA** la alb maxim. Pentru mai mult de ~10 LED-uri, folosești alimentare externă de 5V și un rezistor de 330 Ω pe semnal.

## Quiz scurt
- De ce e nevoie de `show()`?  
- Ce valori are `Color(0, 255, 0)`?  
- Cum aflăm câți pixeli sunt pe inel?
- De ce stingem pixelii de deasupra nivelului?  

## Temă
Alege 3 culori pentru o lumină de seară, una de petrecere și una de lectură. Care sunt valorile RGB?

---

## Ce urmează — Lecția 10
În **lecția 10**, proiectul modulului: o telecomandă cu infraroșu care aprinde LED-uri și le reglează luminozitatea de la distanță.
