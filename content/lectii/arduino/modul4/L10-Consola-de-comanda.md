# LECȚIA 10 — Consola de comandă
### Proiectul modulului · meniu cu moduri, somn și verificare finală
**Modulul 4 · Proiecte complete**  
**Code Maker Club · Arduino Creator**

> Ultima oră din cursul de Arduino! Îți **prezinți proiectul**, vezi proiectele colegilor și faci **verificarea finală** a tot ce ai învățat.  
> Proiect: **„Consola de comandă”** · `Prenume_Nume_A4_L10`

---

## Ce facem azi
La finalul orei ai **două proiecte**: **Consola de comandă** (o consolă cu 4 moduri, schimbate cu un buton: termometru, zar, reflexe și cronometru) și o **consolă cu somn**, care adoarme după 20 de secunde fără apăsări și se trezește la orice buton. Pui laolaltă piesele din tot modulul: **funcții**, **`millis()`**, **`random`**, **senzor** și **LCD**. Apoi îți prezinți proiectul și faci **verificarea finală** a cursului.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap modul · parcurgem proiectele |
| 10–20 | Conexiuni |
| 20–45 | **Proiectul 1** · moduri: termometru și zar |
| 45–65 | **Proiectul 1** · reflexe și cronometru |
| 65–85 | **Proiectul 2** · somn |
| 85–100 | Prezentarea de 2 minute și feedback |
| 100–120 | Verificare finală, diplome · **Bonus ★★★** pentru cine termină devreme |

**Componente azi:** Arduino Uno · Breadboard · LCD 16 x 2 · TMP36 · 2 × Pushbutton · LED · Resistor 220 Ω · Piezo · Potențiometru (doar la Bonus) · fire

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `const char* TITLURI[4]` | Un tablou cu numele modurilor | `lcd.print(TITLURI[mod]);` |
| `mod = (mod + 1) % NR_MODURI` | Treci la modul următor și, după ultimul, revii la primul | `mod = (mod + 1) % 4;` |
| `switch (mod) { case 1: ... }` | Alege ce faci după valoarea lui `mod` | `case 2: reflex(); break;` |
| `void titlu()` | Funcție care desenează titlul modului curent | `titlu();` |
| `bool somn` | Ține minte dacă consola doarme | `if (somn) { ... return; }` |
| `return;` într-un `void` | Iese din funcție, ca restul codului să nu se mai execute | `if (somn) { ...; return; }` |

---

## Pas cu pas

### 1) Circuit nou
`Prenume_Nume_A4_L10`

**Gata când:**  
- [ ] Proiectul nou are numele `Prenume_Nume_A4_L10`  

### 2) Conexiuni

| Piesă | Se conectează |
|-------|---------------|
| **LCD** | RS 12, E 11, D4 5, D5 4, D6 3, D7 2; VSS/RW/V0/K la GND; VDD și A (cu 220 Ω) la 5V |
| **TMP36** | 5V · semnal **A1** · GND |
| **Buton MOD** | pin **8** și **GND** |
| **Buton ACT** | pin **9** și **GND** |
| **LED** | pin **7** → 220 Ω → anod · catod → GND |
| **Piezo** | pin **13** și **GND** |

**Gata când:**  
- [ ] Toate firele sunt conectate exact ca în tabel  
- [ ] Am verificat de două ori GND și 5V înainte să pornesc simularea  

### 3) Cum merge consola
- Butonul **MOD** trece la modul următor: **Termometru → Zar → Reflexe → Cronometru → Termometru**.  
- Butonul **ACT** face acțiunea modului curent: aruncă zarul, pornește o rundă de reflexe sau pornește / oprește cronometrul.  
- În modul Termometru, LED-ul se aprinde peste 30 °C.

### 4) Minim — două moduri

```cpp
#include <LiquidCrystal.h>

const int BTN_MOD = 8;
const int BTN_ACT = 9;
const int LED = 7;
const int BUZZER = 13;
const int TMP = A1;
const int NR_MODURI = 2;
const float T_ALERTA = 30.0;

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

const char* TITLURI[2] = {"Termometru", "Zar"};

int mod = 0;
bool modAnterior = false;
bool actAnterior = false;
unsigned long ultimaAfisare = 0;

float temperatura() {
  float volti = analogRead(TMP) * 5.0 / 1023.0;
  return (volti - 0.5) * 100.0;
}

void titlu() {
  lcd.clear();
  lcd.print(TITLURI[mod]);
  if (mod == 1) {
    lcd.setCursor(0, 1);
    lcd.print("Apasa ACT");
  }
}

void zar() {
  int n = random(1, 7);
  tone(BUZZER, 800, 100);
  lcd.setCursor(0, 1);
  lcd.print("Zar: ");
  lcd.print(n);
  lcd.print("        ");
}

void actualizeaza() {
  if (millis() - ultimaAfisare < 200) return;
  ultimaAfisare = millis();

  if (mod == 0) {
    float t = temperatura();
    lcd.setCursor(0, 1);
    lcd.print(t, 1);
    lcd.print(" C     ");
    digitalWrite(LED, t > T_ALERTA);
  }
}

void setup() {
  pinMode(BTN_MOD, INPUT_PULLUP);
  pinMode(BTN_ACT, INPUT_PULLUP);
  pinMode(LED, OUTPUT);
  lcd.begin(16, 2);
  randomSeed(analogRead(A5));
  titlu();
}

void loop() {
  bool m = (digitalRead(BTN_MOD) == LOW);
  bool a = (digitalRead(BTN_ACT) == LOW);

  if (m && !modAnterior) {
    mod = (mod + 1) % NR_MODURI;
    digitalWrite(LED, LOW);
    titlu();
  }
  if (a && !actAnterior && mod == 1) {
    zar();
  }
  modAnterior = m;
  actAnterior = a;

  actualizeaza();
  delay(10);
}
```

- `TITLURI[mod]` alege numele modului din tablou.  
- `(mod + 1) % NR_MODURI` trece la modul următor și revine la 0 după ultimul.  
- `titlu()` desenează titlul **doar** când se schimbă modul; restul ecranului se actualizează în `actualizeaza()`, fără `clear()` continuu.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Simularea pornește și montajul face ce scrie în „Minim”  

### 5) Complet — patru moduri

```cpp
#include <LiquidCrystal.h>

const int BTN_MOD = 8;
const int BTN_ACT = 9;
const int LED = 7;
const int BUZZER = 13;
const int TMP = A1;
const int NR_MODURI = 4;
const float T_ALERTA = 30.0;

LiquidCrystal lcd(12, 11, 5, 4, 3, 2);

const char* TITLURI[4] = {"Termometru", "Zar", "Reflexe", "Cronometru"};

int mod = 0;
bool modAnterior = false;
bool actAnterior = false;
unsigned long ultimaAfisare = 0;

long recordReflex = 9999;
bool ruleaza = false;
unsigned long startCrono = 0;
unsigned long acumulat = 0;

float temperatura() {
  float volti = analogRead(TMP) * 5.0 / 1023.0;
  return (volti - 0.5) * 100.0;
}

void asteaptaEliberare() {
  while (digitalRead(BTN_ACT) == LOW) {
  }
  delay(50);
}

void afiseazaTimp(unsigned long ms) {
  unsigned long totalSecunde = ms / 1000;
  unsigned int minute = totalSecunde / 60;
  unsigned int secunde = totalSecunde % 60;
  unsigned int zecimi = (ms % 1000) / 100;

  if (minute < 10) lcd.print('0');
  lcd.print(minute);
  lcd.print(':');
  if (secunde < 10) lcd.print('0');
  lcd.print(secunde);
  lcd.print('.');
  lcd.print(zecimi);
}

void titlu() {
  lcd.clear();
  lcd.print(TITLURI[mod]);
  if (mod == 1 || mod == 2) {
    lcd.setCursor(0, 1);
    lcd.print("Apasa ACT");
  }
}

void zar() {
  int n = random(1, 7);
  tone(BUZZER, 800, 100);
  lcd.setCursor(0, 1);
  lcd.print("Zar: ");
  lcd.print(n);
  lcd.print("        ");
}

void reflex() {
  asteaptaEliberare();
  lcd.clear();
  lcd.print("Pregateste-te...");

  unsigned long pauza = random(1000, 4000);
  unsigned long incepe = millis();

  while (millis() - incepe < pauza) {
    if (digitalRead(BTN_ACT) == LOW) {
      tone(BUZZER, 200, 400);
      lcd.clear();
      lcd.print("Start gresit!");
      delay(1500);
      asteaptaEliberare();
      titlu();
      return;
    }
  }

  digitalWrite(LED, HIGH);
  unsigned long start = millis();
  while (digitalRead(BTN_ACT) == HIGH) {
  }
  long timp = millis() - start;
  digitalWrite(LED, LOW);

  if (timp < recordReflex) recordReflex = timp;

  lcd.clear();
  lcd.print(timp);
  lcd.print(" ms");
  lcd.setCursor(0, 1);
  lcd.print("Record: ");
  lcd.print(recordReflex);
  lcd.print(" ms");
  asteaptaEliberare();
}

void crono() {
  if (ruleaza) {
    acumulat += millis() - startCrono;
    ruleaza = false;
  } else {
    startCrono = millis();
    ruleaza = true;
  }
}

void actiune() {
  switch (mod) {
    case 1: zar(); break;
    case 2: reflex(); break;
    case 3: crono(); break;
  }
}

void actualizeaza() {
  if (millis() - ultimaAfisare < 100) return;
  ultimaAfisare = millis();

  if (mod == 0) {
    float t = temperatura();
    lcd.setCursor(0, 1);
    lcd.print(t, 1);
    lcd.print(" C     ");
    digitalWrite(LED, t > T_ALERTA);
  } else if (mod == 3) {
    unsigned long timp = acumulat;
    if (ruleaza) timp += millis() - startCrono;
    lcd.setCursor(0, 1);
    afiseazaTimp(timp);
    lcd.print("        ");
  }
}

void setup() {
  pinMode(BTN_MOD, INPUT_PULLUP);
  pinMode(BTN_ACT, INPUT_PULLUP);
  pinMode(LED, OUTPUT);
  lcd.begin(16, 2);
  randomSeed(analogRead(A5));
  titlu();
}

void loop() {
  bool m = (digitalRead(BTN_MOD) == LOW);
  bool a = (digitalRead(BTN_ACT) == LOW);

  if (m && !modAnterior) {
    mod = (mod + 1) % NR_MODURI;
    digitalWrite(LED, LOW);
    titlu();
  }
  if (a && !actAnterior) {
    actiune();
  }
  modAnterior = m;
  actAnterior = a;

  actualizeaza();
  delay(10);
}
```

| Mod | ACT face | Pe ecran |
|-----|----------|----------|
| Termometru | nimic | temperatura; LED aprins peste 30 °C |
| Zar | aruncă zarul | `Zar: n` |
| Reflexe | o rundă | timpul tău și recordul |
| Cronometru | pornește / oprește | `MM:SS.d` |

Cronometrul **continuă să meargă** și când treci la alt mod, pentru că folosește `millis()`.

**Gata când:**  
- [ ] Codul complet se compilează fără erori  
- [ ] Simularea face tot ce scrie în „Complet”  

### 6) Testul consolei

| Pas | Ce faci | Ce vezi |
|-----|---------|---------|
| 1 | Apeși MOD de 4 ori | Treci prin toate modurile și revii la Termometru |
| 2 | La Zar apeși ACT de câteva ori | Numere de la 1 la 6 |
| 3 | La Reflexe apeși ACT înainte de LED | „Start gresit!” |
| 4 | La Reflexe apeși ACT când se aprinde LED-ul | Timpul și recordul |
| 5 | La Cronometru pornești, treci la alt mod și te întorci | Cronometrul a mers în tot acest timp |

**Gata când:**  
- [ ] Am încercat fiecare pas din listă  
- [ ] Am notat ce nu a mers și am corectat  

### 7) Proiectul 2 — Consola cu somn
Consola **adoarme** după **20 de secunde** fără apăsări: ecranul arată „Somn...”, iar LED-ul clipește lent. **Orice buton** o trezește, iar apăsarea de trezire nu face nimic altceva. Cronometrul continuă să meargă în somn. Circuitul rămâne cel de la proiectul 1; modifici programul **Complet**.

**a) Variabile noi** (după `acumulat`):

```cpp
unsigned long ultimaActiune = 0;
bool somn = false;
```

**b) `loop()` nou** (înlocuiește tot `loop()` de la Complet):

```cpp
void loop() {
  bool m = (digitalRead(BTN_MOD) == LOW);
  bool a = (digitalRead(BTN_ACT) == LOW);

  if (somn) {
    digitalWrite(LED, (millis() / 1000) % 2 == 0);
    if (m || a) {
      somn = false;
      ultimaActiune = millis();
      digitalWrite(LED, LOW);
      titlu();
      modAnterior = m;
      actAnterior = a;
    }
    return;
  }

  if (m && !modAnterior) {
    mod = (mod + 1) % NR_MODURI;
    digitalWrite(LED, LOW);
    titlu();
    ultimaActiune = millis();
  }
  if (a && !actAnterior) {
    actiune();
    ultimaActiune = millis();
  }
  modAnterior = m;
  actAnterior = a;

  if (millis() - ultimaActiune > 20000) {
    somn = true;
    lcd.clear();
    lcd.print("Somn...");
    lcd.setCursor(0, 1);
    lcd.print("Apasa un buton");
    return;
  }

  actualizeaza();
  delay(10);
}
```

- Cât timp `somn` e adevărat, `loop()` face doar clipirea și așteaptă un buton, apoi iese cu `return;`.  
- `modAnterior = m; actAnterior = a;` la trezire face ca apăsarea de trezire să nu fie socotită apăsare nouă.  
- `ultimaActiune` se reînnoiește la **fiecare** apăsare, așa că somnul vine doar după 20 de secunde de liniște.

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] După 20 de secunde fără apăsări consola doarme și orice buton o trezește  

### 8) Testul somnului

| Pas | Ce faci | Ce vezi |
|-----|---------|---------|
| 1 | Nu atingi nimic 20 de secunde | „Somn...” și LED-ul clipește |
| 2 | Apeși MOD | Consola se trezește, modul rămâne același |
| 3 | Pornești cronometrul, aștepți somnul, te trezești | Cronometrul a continuat |
| 4 | Apeși des butoanele | Consola nu adoarme niciodată |

**Gata când:**  
- [ ] Am încercat fiecare pas din listă  
- [ ] Am notat ce nu a mers și am corectat  

### 9) Prezentarea de 2 minute

| Secundă | Ce spui |
|---------|---------|
| 0–15 | **Cum se numește** proiectul și **ce problemă** rezolvă |
| 15–45 | **Ce piese** are (intrări și ieșiri) și **de ce** le-ai ales |
| 45–90 | **Demonstrația**: arăți cum merge, în direct |
| 90–110 | Cea mai grea **problemă** întâlnită și cum ai rezolvat-o |
| 110–120 | Ce ai **îmbunătăți** dacă ai mai avea timp |

Prezinți **Proiectul final** din lecția 9 (sau Consola de comandă, dacă nu ai terminat proiectul final). Exersează o dată cu un cronometru. Dacă ceva nu merge, spune calm ce ar fi trebuit să se întâmple și ce crezi că e problema: asta arată că **înțelegi**.

### 10) Foaia de feedback
Pentru **2 proiecte** ale colegilor, completează:

| Întrebare | Răspuns |
|-----------|---------|
| Numele proiectului | |
| Ce mi-a plăcut cel mai mult | |
| Ce idee mi-a dat mie | |
| O sugestie prietenoasă | |

**Regulă:** feedback **politicos**, **concret** și **util**. Nu „e urât”, ci „aș încerca un LED de altă culoare ca să se vadă mai bine”.

### 11) Verificarea finală a cursului
Răspunde în caiet sau în aplicație. Fiecare întrebare are **un singur răspuns corect**.

**Partea A — Circuite**

1. De ce folosim un rezistor de 220 Ω la un LED?  
   a) să lumineze mai tare  b) ca să nu se ardă  c) să economisească baterie
2. Cum conectăm un buton cu `INPUT_PULLUP`?  
   a) la 5V  b) la GND  c) la A0
3. De ce un motor nu se leagă direct la un pin?  
   a) pinul dă prea puțin curent  b) pinul e prea scump  c) motorul e prea ușor

**Partea B — Cod**

4. Ce face `analogRead(A0)`?  
   a) trimite curent  b) citește o valoare 0–1023  c) pornește un LED
5. Ce valori poate avea `random(1, 7)`?  
   a) 1–7  b) 1–6  c) 0–6
6. Pentru ce folosim `millis()`?  
   a) ca să măsurăm timp fără să blocăm programul  b) ca să oprim placa  c) ca să schimbăm un pin
7. Ce face `map(500, 0, 1000, 0, 100)`?  
   a) 5  b) 50  c) 500

**Partea C — Senzori și afișaje**

8. Ce măsoară HC-SR04?  
   a) lumina  b) distanța  c) temperatura
9. Câte rânduri are LCD-ul 16×2?  
   a) 1  b) 2  c) 16
10. Cum aflăm ce valoare dă un senzor?  
    a) cu Serial Monitor  b) cu un LED  c) nu se poate

**Răspunsuri** (verifică după ce termini): 1-b · 2-b · 3-a · 4-b · 5-b · 6-a · 7-b · 8-b · 9-b · 10-a

**Gata când:**  
- [ ] Am încercat fiecare întrebare  
- [ ] Am verificat răspunsurile și am notat ce nu a mers

---

## Greșeli frecvente
1. **Cronometrul nu merge în alt mod** — l-ai pus în `loop()` cu `delay`; folosește `millis()`.  
2. **Reflexele dau „Start gresit!” imediat** — lipsește `asteaptaEliberare()` la începutul funcției.  
3. **Ecranul clipește** — `lcd.clear()` în `actualizeaza()`; folosește `clear` doar în `titlu()`.  
4. **Modul sare de două ori** — lipsește detecția apăsării (`m && !modAnterior`).  
5. **Consola nu se mai trezește** — ai uitat `return;` sau `somn = false;` la apăsare.  
6. **Consola adoarme prea repede** — `ultimaActiune` nu se reînnoiește la apăsări.  

---

## De făcut azi — „Consola de comandă”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | 2 moduri: termometru și zar, schimbate cu un buton |
| **Complet** | Minim + reflexe cu record + cronometru |
| **Proiectul 2** | Consola cu somn: adoarme după 20 s și se trezește la un buton |

### Pasul 1 — Minim
- [ ] MOD schimbă modurile  
- [ ] Termometrul și zarul merg  

### Pasul 2 — Complet
- [ ] Reflexe cu record  
- [ ] Cronometru care merge și în alt mod  
- [ ] Numele `A4_L10` e corect

### Pasul 3 — Proiectul 2
- [ ] `somn` și `ultimaActiune` funcționează  
- [ ] După 20 s consola doarme, LED-ul clipește  
- [ ] Orice buton o trezește, fără altă acțiune  

### Verificare finală Modul 4
- [ ] Aprind un LED și îl controlez cu un buton  
- [ ] Citesc un potențiometru și un senzor analogic  
- [ ] Folosesc praguri și `if / else`  
- [ ] Afișez date în Serial Monitor sau pe un LCD  
- [ ] Comand un servo și un motor  
- [ ] Scriu funcții proprii și folosesc `millis()`  
- [ ] Planific, construiesc, testez și prezint un proiect  

---

## Bonus ★★★ — Pragul reglabil
*Doar dacă ai terminat Proiectul 2.*

Termometrul își schimbă singur pragul de alertă. **Piesă nouă:** un potențiometru pe **A0** (capetele la 5V și GND, cursorul la A0).

- [ ] Citești `analogRead(A0)` și îl transformi cu `map` într-un prag între 20 și 40 de grade  
- [ ] LED-ul se aprinde când temperatura depășește pragul, în loc de 30 de grade  
- [ ] În modul Termometru, pe rândul de sus apare pragul curent  

## Recapitulare pe scurt
1. **Modul 1:** circuite de bază, LED-uri, butoane, sunete  
2. **Modul 2:** senzori, praguri, Serial Monitor  
3. **Modul 3:** LCD, servo, motoare, tastatură, NeoPixel, IR  
4. **Modul 4:** proiecte complete, planificare, prezentare  

## Pe placa reală *(opțional)*
Dacă ai un kit Arduino, reia proiectul tău pe placa reală. Atenție la alimentare și polaritate, iar un adult te ajută la lipituri.

## Quiz scurt
- Care a fost cea mai grea problemă din proiectul tău?  
- Ce senzor nou ai vrea să încerci?  
- Cum ai explica Arduino unui prieten, într-o frază?
- De ce are consola o variabilă `somn`?  

## Temă
**Felicitări, ești Arduino Creator!** Scrie 3 idei de proiecte pe care vrei să le faci după curs și păstrează lista.

---

## Ce urmează — Sfârșitul cursului
**Felicitări!** Ai terminat cursul de Arduino. Dacă ți-a plăcut robotul, încearcă un robot pe șasiu; dacă ți-a plăcut casa inteligentă, încearcă module fără fir; dacă ți-au plăcut senzorii, fă proiecte cu date. Și, bineînțeles, **placa reală**: tot ce ai făcut în simulator merge și pe un Arduino adevărat, cu mici adaptări.
