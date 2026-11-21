# LECȚIA 7 — Stația meteo de exterior
### Date în timp: istoric, statistici, grafic și tendință
**Modulul 4 · Proiecte complete**  
**Code Maker Club · Arduino Creator**

> Azi construiești o **stație meteo** completă, care **înregistrează** valorile și le arată pe LCD ca pe un tablou de bord.  
> Proiect: **„Stația meteo de exterior”** · `Prenume_Nume_A4_L07`

---

## Ce facem azi
La finalul orei ai **două proiecte**: o **stație meteo de exterior** (temperatură, lumină, umiditatea solului, istoric, minim, maxim, medie, grafic cu bare și LED de alertă) și o **funcție de tendință**, care îți spune dacă temperatura **se încălzește**, **se răcește** sau e **stabilă**. Datele valoroase sunt cele **adunate în timp**: așa lucrează meteorologii, fermierii și cercetătorii.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap L6 · senzorii folosiți |
| 10–25 | Conexiuni |
| 25–50 | **Proiectul 1** · pagini cu valori |
| 50–80 | **Proiectul 1** · istoric, statistici, grafic |
| 80–110 | **Proiectul 2** · tendința |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme |

**Componente azi:** Arduino Uno · Breadboard · TMP36 · Photoresistor · Resistor 10 kΩ · Soil Moisture Sensor · LCD 16 x 2 · Pushbutton · LED · Resistor 220 Ω · LED albastru + Resistor 220 Ω (doar la Bonus) · fire

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `float istoric[N]` | Un tablou care ține ultimele N măsurători | `istoric[idx] = valoare;` |
| `idx = (idx + 1) % N` | După ultimul loc revine la 0 (tablou circular) | `idx = (idx + 1) % N;` |
| `for (int i = 0; i < numar; i++)` | Parcurge toate valorile din istoric | `suma += istoric[i];` |
| `lcd.createChar(0, bara1)` | Creează un caracter propriu pe LCD | `lcd.createChar(0, bara1);` |
| `lcd.write(byte(nivel))` | Desenează caracterul propriu cu numărul dat | `lcd.write(byte(2));` |
| `float tendinta()` | Funcție care compară cea mai nouă valoare cu cea mai veche | `return nou - vechi;` |

---

## Pas cu pas

### 1) Circuit nou
`Prenume_Nume_A4_L07`

**Gata când:**  
- [ ] Proiectul nou are numele `Prenume_Nume_A4_L07`  

### 2) Conexiuni

| Piesă | Se conectează |
|-------|---------------|
| **LCD** | RS 12, E 11, D4 5, D5 4, D6 3, D7 2 |
| **TMP36** | 5V · semnal **A1** · GND |
| **Fotorezistor** | 5V → fotorezistor → **A0** → 10 kΩ → GND |
| **Senzor sol** | semnal **A2** · 5V · GND |
| **Buton pagină** | pin **8** și **GND** |
| **LED alertă** | pin **7** → 220 Ω → anod · catod → GND |

**Gata când:**  
- [ ] Toate firele sunt conectate exact ca în tabel  
- [ ] Am verificat de două ori GND și 5V înainte să pornesc simularea  

### 3) Minim — 3 pagini

```cpp
#include <LiquidCrystal.h>

const int BUTON = 8;
const int NR_PAGINI = 3;

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

int pagina = 0;
bool butonAnterior = false;
unsigned long ultima = 0;

float temperatura() {
  float volti = analogRead(A1) * 5.0 / 1023.0;
  return (volti - 0.5) * 100.0;
}

int lumina() {
  return map(analogRead(A0), 0, 1023, 0, 100);
}

int umiditate() {
  return constrain(map(analogRead(A2), 0, 700, 0, 100), 0, 100);
}

void setup() {
  pinMode(BUTON, INPUT_PULLUP);
  lcd.begin(16, 2);
}

void loop() {
  bool apasat = (digitalRead(BUTON) == LOW);
  if (apasat && !butonAnterior) {
    pagina = (pagina + 1) % NR_PAGINI;
    lcd.clear();
  }
  butonAnterior = apasat;

  if (millis() - ultima >= 500) {
    ultima = millis();
    lcd.setCursor(0, 0);

    if (pagina == 0) {
      lcd.print("Temperatura");
      lcd.setCursor(0, 1);
      lcd.print(temperatura(), 1);
      lcd.print(" C    ");
    } else if (pagina == 1) {
      lcd.print("Lumina");
      lcd.setCursor(0, 1);
      lcd.print(lumina());
      lcd.print(" %    ");
    } else {
      lcd.print("Umiditate sol");
      lcd.setCursor(0, 1);
      lcd.print(umiditate());
      lcd.print(" %    ");
    }
  }
  delay(20);
}
```

Calibrarea umidității (`700`) se ia din măsurătorile tale (Modulul 2 L7).

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Simularea pornește și montajul face ce scrie în „Minim”  

### 4) Istoric — tablou circular
Vrem să ținem **ultimele 10** temperaturi. Când s-au umplut, următoarea o înlocuiește pe cea mai veche (**buffer circular**):

```cpp
const int N = 10;
float istoric[N];
int idx = 0;
int numar = 0;

void adauga(float valoare) {
  istoric[idx] = valoare;
  idx = (idx + 1) % N;
  if (numar < N) numar++;
}
```

- `idx = (idx + 1) % N` — după poziția 9 revine la 0.  
- `numar` ține minte câte valori valide avem (important în primele 10 măsurători).

### 5) Statistici

```cpp
float minim() {
  float m = istoric[0];
  for (int i = 1; i < numar; i++) {
    if (istoric[i] < m) m = istoric[i];
  }
  return m;
}

float maxim() {
  float m = istoric[0];
  for (int i = 1; i < numar; i++) {
    if (istoric[i] > m) m = istoric[i];
  }
  return m;
}

float medie() {
  float suma = 0;
  for (int i = 0; i < numar; i++) {
    suma += istoric[i];
  }
  return suma / numar;
}
```

Aceste trei funcții **parcurg** tabloul cu `for` și calculează rezultatul.

### 6) Grafic cu bare pe LCD
LCD-ul poate afișa **bare** de înălțimi diferite dacă definim 8 caractere speciale (de la 1 la 8 linii pline). Pentru simplitate folosim doar 4 trepte:

```cpp
byte bara1[8] = {0, 0, 0, 0, 0, 0, 0, 31};
byte bara2[8] = {0, 0, 0, 0, 0, 0, 31, 31};
byte bara3[8] = {0, 0, 0, 0, 31, 31, 31, 31};
byte bara4[8] = {31, 31, 31, 31, 31, 31, 31, 31};
```

`31` = `B11111` (toate cele 5 puncte aprinse). Fiecare caracter e mai „înalt” decât precedentul.

### 7) Complet — codul întreg

```cpp
#include <LiquidCrystal.h>

const int BUTON = 8;
const int LED = 7;
const int NR_PAGINI = 4;
const int N = 10;
const float T_ALERTA = 30.0;

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

byte bara1[8] = {0, 0, 0, 0, 0, 0, 0, 31};
byte bara2[8] = {0, 0, 0, 0, 0, 0, 31, 31};
byte bara3[8] = {0, 0, 0, 0, 31, 31, 31, 31};
byte bara4[8] = {31, 31, 31, 31, 31, 31, 31, 31};

float istoric[N];
int idx = 0;
int numar = 0;

int pagina = 0;
bool butonAnterior = false;
unsigned long ultimaAfisare = 0;
unsigned long ultimaMasurare = 0;

float temperatura() {
  float volti = analogRead(A1) * 5.0 / 1023.0;
  return (volti - 0.5) * 100.0;
}

int lumina() {
  return map(analogRead(A0), 0, 1023, 0, 100);
}

int umiditate() {
  return constrain(map(analogRead(A2), 0, 700, 0, 100), 0, 100);
}

void adauga(float valoare) {
  istoric[idx] = valoare;
  idx = (idx + 1) % N;
  if (numar < N) numar++;
}

float minim() {
  float m = istoric[0];
  for (int i = 1; i < numar; i++) {
    if (istoric[i] < m) m = istoric[i];
  }
  return m;
}

float maxim() {
  float m = istoric[0];
  for (int i = 1; i < numar; i++) {
    if (istoric[i] > m) m = istoric[i];
  }
  return m;
}

float medie() {
  float suma = 0;
  for (int i = 0; i < numar; i++) {
    suma += istoric[i];
  }
  return suma / numar;
}

void deseneazaGrafic() {
  float mn = minim();
  float mx = maxim();
  if (mx - mn < 1.0) mx = mn + 1.0;

  lcd.setCursor(0, 1);
  for (int i = 0; i < N; i++) {
    if (i < numar) {
      int pozitie = (idx - numar + i + N) % N;
      int nivel = map((int)(istoric[pozitie] * 10), (int)(mn * 10), (int)(mx * 10), 0, 3);
      lcd.write(byte(constrain(nivel, 0, 3)));
    } else {
      lcd.print(' ');
    }
  }
  lcd.print("      ");
}

void afiseaza() {
  lcd.setCursor(0, 0);
  if (pagina == 0) {
    lcd.print("Temp: ");
    lcd.print(temperatura(), 1);
    lcd.print(" C   ");
    lcd.setCursor(0, 1);
    lcd.print("Lumina: ");
    lcd.print(lumina());
    lcd.print(" %   ");
  } else if (pagina == 1) {
    lcd.print("Sol: ");
    lcd.print(umiditate());
    lcd.print(" %      ");
    lcd.setCursor(0, 1);
    lcd.print("                ");
  } else if (pagina == 2) {
    lcd.print("Mn ");
    lcd.print(minim(), 1);
    lcd.print(" Mx ");
    lcd.print(maxim(), 1);
    lcd.print(" ");
    lcd.setCursor(0, 1);
    lcd.print("Medie: ");
    lcd.print(medie(), 1);
    lcd.print("    ");
  } else {
    lcd.print("Grafic temp.    ");
    deseneazaGrafic();
  }
}

void setup() {
  pinMode(BUTON, INPUT_PULLUP);
  pinMode(LED, OUTPUT);
  lcd.begin(16, 2);
  lcd.createChar(0, bara1);
  lcd.createChar(1, bara2);
  lcd.createChar(2, bara3);
  lcd.createChar(3, bara4);
  adauga(temperatura());
}

void loop() {
  bool apasat = (digitalRead(BUTON) == LOW);
  if (apasat && !butonAnterior) {
    pagina = (pagina + 1) % NR_PAGINI;
    lcd.clear();
  }
  butonAnterior = apasat;

  if (millis() - ultimaMasurare >= 2000) {
    ultimaMasurare = millis();
    adauga(temperatura());
  }

  digitalWrite(LED, temperatura() > T_ALERTA);

  if (millis() - ultimaAfisare >= 500) {
    ultimaAfisare = millis();
    afiseaza();
  }
  delay(20);
}
```

| Pagina | Ce arată |
|--------|----------|
| 0 | temperatură + lumină |
| 1 | umiditate sol |
| 2 | `Mn` (minim), `Mx` (maxim) și medie |
| 3 | grafic cu bare |

Măsurătorile intră în istoric **la 2 secunde**, iar ecranul se actualizează **la 0,5 secunde**. LED-ul de alertă se aprinde peste 30 °C.

> Pentru test rapid în simulator, reduce intervalul de la `2000` la `500` și mută glisorul TMP36 între măsurători: graficul se schimbă.

**Gata când:**  
- [ ] Codul complet se compilează fără erori  
- [ ] Simularea face tot ce scrie în „Complet”  

### 8) Proiectul 2 — Tendința
Din istoric putem afla **încotro merge** temperatura: scădem cea mai **veche** valoare din cea mai **nouă**. Dacă diferența e peste **0,5 °C** spunem „se incalzeste”, sub **-0,5 °C** „se raceste”, altfel „stabil”. Programul **Complet** primește o pagină nouă. Circuitul rămâne cel de la proiectul 1.

**a) Funcția nouă** (o pui după `medie()`):

```cpp
float tendinta() {
  if (numar < 2) return 0;

  float nou = istoric[(idx - 1 + N) % N];
  float vechi = istoric[(idx - numar + N) % N];
  return nou - vechi;
}
```

**b) Schimbări în programul Complet:**

```cpp
const int NR_PAGINI = 5;     // era 4
```

În `afiseaza()`, ultima ramură `else { ... grafic ... }` devine `else if (pagina == 3)`, urmată de pagina nouă:

```cpp
  } else if (pagina == 3) {
    lcd.print("Grafic temp.    ");
    deseneazaGrafic();
  } else {
    lcd.print("Tendinta        ");
    lcd.setCursor(0, 1);
    float t = tendinta();
    if (t > 0.5) lcd.print("se incalzeste   ");
    else if (t < -0.5) lcd.print("se raceste      ");
    else lcd.print("stabil          ");
  }
```

- `istoric[(idx - 1 + N) % N]` este **ultima** valoare scrisă; `+ N` evită un număr negativ.  
- `istoric[(idx - numar + N) % N]` este cea mai veche valoare din tablou.  
- Tendința are sens abia după câteva măsurători, de aceea `numar < 2` returnează 0.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Pagina 5 arată una dintre cele trei tendințe  

### 9) Testul tendinței

| Pas | Ce faci | Ce vezi |
|-----|---------|---------|
| 1 | Aștepți 20 de secunde cu temperatura neschimbată | „stabil” |
| 2 | Mărești temperatura TMP36 cu 5 grade | după câteva măsurători „se incalzeste” |
| 3 | O scazi la loc cu 10 grade | după câteva măsurători „se raceste” |

**Gata când:**  
- [ ] Am încercat fiecare pas din listă  
- [ ] Am notat ce nu a mers și am corectat  

---

## Greșeli frecvente
1. **Medie ciudată la început** — împarți la `N`, nu la `numar`.  
2. **Grafic gol** — nu ai apelat `createChar` în `setup`.  
3. **Index în afara tabloului** — `idx` nu e limitat cu `%`.  
4. **Ecran clipește** — `clear` doar la schimbarea paginii.  
5. **Valori nerealiste** — lipsește calibrarea senzorilor.
6. **Tendința arată mereu „stabil”** — compari două valori consecutive, nu cea mai nouă cu cea mai veche.    
7. **Tendința sare la valori uriașe** — ai scris `idx - numar` fără `+ N` și indexul a ieșit negativ.    
8. **Pagina nouă nu apare** — ai uitat să schimbi `NR_PAGINI` la 5.    

---

## De făcut azi — „Stația meteo de exterior”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | 3 senzori, pagini pe LCD |
| **Complet** | Minim + istoric + min/max/medie + grafic + alertă |
| **Proiectul 2** | Pagină nouă cu tendința: se încălzește / se răcește / stabil |

### Pasul 1 — Minim
- [ ] 3 senzori calibrați  
- [ ] Pagini cu buton  

### Pasul 2 — Complet
- [ ] Tablou circular de 10  
- [ ] Statistici corecte  
- [ ] Grafic cu bare  
- [ ] Numele `A4_L07` e corect

### Pasul 3 — Proiectul 2
- [ ] `tendinta()` compară cea mai nouă valoare cu cea mai veche  
- [ ] `NR_PAGINI` este 5  
- [ ] Pagina nouă arată una dintre cele trei tendințe  

---

## Bonus ★★★ — Lumina de noapte
*Doar dacă ai terminat Proiectul 2.*

Stația știe când se întunecă. **Piesă nouă:** un LED albastru pe pin **9** (prin 220 Ω).

- [ ] LED-ul albastru se aprinde când lumina e sub 30 %  
- [ ] Se stinge abia când lumina trece peste 40 % (două praguri, ca să nu clipească)  
- [ ] Acoperi fotorezistorul cu mâna și verifici cele două praguri  

## Recapitulare pe scurt
1. Datalogger = valori **în timp**  
2. Buffer circular cu `%`  
3. Funcții de statistică: `minim`, `maxim`, `medie`  
4. Tendința = valoarea nouă minus valoarea veche  

## Pe placa reală *(opțional)*
Un datalogger adevărat salvează pe **card SD** sau în memoria **EEPROM**, ca să nu piardă datele la oprire.

## Quiz scurt
- De ce împărțim la `numar`, nu la `N`?  
- Ce face `(idx + 1) % N`?  
- La ce folosește un buffer circular?
- Cum afli cea mai veche valoare dintr-un tablou circular?  

## Temă
Alege un loc din grădină sau de pe balcon și scrie ce ai măsura acolo într-o săptămână și de ce.

---

## Ce urmează — Lecția 8
În **lecția 8** construiești un robot care ocolește obstacolele, cu viteză adaptată distanței.
