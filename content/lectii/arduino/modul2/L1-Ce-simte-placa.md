# LECȚIA 1 — Jurnalul plăcii
### Serial Monitor și citirea valorilor
**Modulul 2 · Senzori**  
**Code Maker Club · Sensor Scout**

> Azi înveți să **asculți** ce „simte” Arduino: citești valori cu `analogRead` și `digitalRead` și le afișezi în **Serial Monitor**.  
> Proiect: **„Jurnalul plăcii”** · `Prenume_Nume_A2_L01`

---

## Ce facem azi
La finalul orei ai **două proiecte**: **Jurnalul plăcii** (valorile unui potențiometru și ale unui buton, afișate în Serial Monitor, într-un format ușor de citit) și **Voltmetrul cu bară** (aceeași valoare, desenată ca o bară care crește și scade). Un senzor nu face nimic singur: trimite **un număr**. Dacă știi să citești și să **vezi** numărul, poți face orice cu el. Serial Monitor e „fereastra” ta în mintea plăcii, pe care o vei folosi în tot modulul.

---

## Planul orei (120 minute)

| Minute | Ce facem |
|--------|----------|
| 0–10 | Recap Modul 1 · ce e un senzor |
| 10–25 | Circuitul cu potențiometru + buton |
| 25–50 | `Serial.print` / `Serial.println` |
| 50–75 | **Proiectul 1** · volți cu zecimale (`float`) + mesaje |
| 75–110 | **Proiectul 2** · voltmetrul cu bară |
| 110–120 | Recap, quiz, galerie · **Bonus ★★★** pentru cine termină devreme |

**Componente azi:** Arduino Uno · Breadboard · Potentiometer · Pushbutton · fire

---

## Instrucțiuni noi azi

| Ce scriem | Ce face | Exemplu |
|-----------|---------|---------|
| `Serial.begin(9600)` | Deschide comunicarea cu calculatorul, o dată, în `setup()` | `Serial.begin(9600);` |
| `Serial.print` / `Serial.println` | Scrie în Serial Monitor, fără / cu rând nou | `Serial.println(valoare);` |
| `analogRead(A0)` | Citește senzorul, valori de la 0 la 1023 | `int valoare = analogRead(A0);` |
| `float` | Număr cu zecimale | `float volti = valoare * 5.0 / 1023.0;` |
| `map(x, 0, 1023, 0, 20)` | Convertește un interval în altul *(din Modulul 1)* | `int bara = map(valoare, 0, 1023, 0, 20);` |
| `for` | Repetă de un număr de ori *(din Modulul 1)* | `for (int i = 0; i < 20; i++) { ... }` |

---

## Pas cu pas

### 1) Circuit nou
`Prenume_Nume_A2_L01`

**Gata când:**  
- [ ] Proiectul nou are numele `Prenume_Nume_A2_L01`  

### 2) Conexiuni

| Piesă | Se conectează |
|-------|---------------|
| **Potențiometru** | laterale la **5V** și **GND**, mijloc la **A0** |
| **Buton** | un picior la pin **2**, piciorul diagonal la **GND** |

**Gata când:**  
- [ ] Toate firele sunt conectate exact ca în tabel  
- [ ] Am verificat de două ori GND și 5V înainte să pornesc simularea  

### 3) Primul mesaj

```cpp
void setup() {
  Serial.begin(9600);
}

void loop() {
  Serial.println("Salut din Arduino!");
  delay(1000);
}
```

- `Serial.begin(9600)` deschide „linia telefonică” cu calculatorul, la viteza 9600.  
- `Serial.println` scrie textul și trece la rând nou. `Serial.print` scrie **fără** rând nou.

Pornești simularea și deschizi **Serial Monitor** (jos, sub cod).

### 4) Minim — potențiometru și buton

```cpp
const int POT = A0;
const int BUTON = 2;

void setup() {
  pinMode(BUTON, INPUT_PULLUP);
  Serial.begin(9600);
}

void loop() {
  int valoare = analogRead(POT);
  int apasat = !digitalRead(BUTON);

  Serial.print("Potentiometru: ");
  Serial.print(valoare);
  Serial.print("  Buton: ");
  Serial.println(apasat);

  delay(200);
}
```

Rotește potențiometrul și apasă butonul: numerele se schimbă. Butonul apare ca **1** când e apăsat (`!` răstoarnă `LOW` în 1).

**Gata când:**  
- [ ] Codul se compilează fără erori  
- [ ] Simularea pornește și montajul face ce scrie în „Minim”  

### 5) Volți și mesaje (Complet)
`analogRead` dă 0–1023, dar tensiunea e între **0 și 5 volți**. Ca să obții volții, înmulțești cu `5.0 / 1023.0`. Folosim `float` — număr **cu zecimale**:

```cpp
const int POT = A0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  int valoare = analogRead(POT);
  float volti = valoare * 5.0 / 1023.0;

  Serial.print("Valoare: ");
  Serial.print(valoare);
  Serial.print("  Tensiune: ");
  Serial.print(volti, 2);
  Serial.print(" V  -> ");

  if (valoare < 341) {
    Serial.println("mic");
  } else if (valoare < 682) {
    Serial.println("mediu");
  } else {
    Serial.println("mare");
  }

  delay(300);
}
```

`Serial.print(volti, 2)` afișează cu **2 zecimale**. `1023 / 3 ≈ 341`, iar `2 × 1023 / 3 ≈ 682` — am împărțit scala în **trei zone egale**.

**Gata când:**  
- [ ] Codul complet se compilează fără erori  
- [ ] Simularea face tot ce scrie în „Complet”  

### 6) Tipuri de date

| Tip | Ce ține | Exemplu |
|-----|---------|---------|
| `int` | număr întreg | `valoare = 512` |
| `float` | număr cu zecimale | `volti = 2.50` |
| `bool` | adevărat / fals | `apasat = true` |

Un `int` împărțit la un `int` dă tot întreg; de aceea scriem `5.0` (cu zecimală) ca să obținem rezultat cu zecimale.

### 7) Proiectul 2 — Voltmetrul cu bară
Aceeași valoare, dar desenată: cu cât rotești mai mult, cu atât bara are mai multe `#`. Folosim `map` ca să trecem de la 0–1023 la 0–20 și un `for` care scrie 20 de caractere: `#` pentru partea plină, `.` pentru rest.

```cpp
const int POT = A0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  int valoare = analogRead(POT);
  int bara = map(valoare, 0, 1023, 0, 20);
  int procent = map(valoare, 0, 1023, 0, 100);

  Serial.print("[");
  for (int i = 0; i < 20; i++) {
    if (i < bara) {
      Serial.print("#");
    } else {
      Serial.print(".");
    }
  }
  Serial.print("] ");
  Serial.print(procent);
  Serial.println(" %");
  delay(300);
}
```

La potențiometru la mijloc vezi aproximativ `[##########..........] 50 %`.

**Gata când:**  
- [ ] Bara are mereu **20** de caractere între paranteze  
- [ ] Bara crește când rotești potențiometrul, iar procentul se potrivește  

### 8) Pauza cu butonul
Cât ții butonul apăsat, bara **îngheață**: nu se mai scrie nimic. Butonul e `INPUT_PULLUP`, deci **neapăsat** înseamnă `HIGH`.

```cpp
const int POT = A0;
const int BUTON = 2;

void setup() {
  pinMode(BUTON, INPUT_PULLUP);
  Serial.begin(9600);
}

void loop() {
  if (digitalRead(BUTON) == HIGH) {
    int valoare = analogRead(POT);
    int bara = map(valoare, 0, 1023, 0, 20);
    int procent = map(valoare, 0, 1023, 0, 100);

    Serial.print("[");
    for (int i = 0; i < 20; i++) {
      if (i < bara) {
        Serial.print("#");
      } else {
        Serial.print(".");
      }
    }
    Serial.print("] ");
    Serial.print(procent);
    Serial.println(" %");
  }
  delay(300);
}
```

**Gata când:**  
- [ ] Cât ții butonul apăsat, nu apar rânduri noi  
- [ ] Când îl lași, bara pornește din nou  

---

## Greșeli frecvente
1. **Serial Monitor e gol** — n-ai pus `Serial.begin(9600)` sau n-ai pornit simularea.  
2. **Caractere ciudate** — viteza din cod (`9600`) trebuie să fie aceeași ca în monitor.  
3. **Volți = 0 sau 4** — ai scris `5 / 1023` (împărțire întreagă = 0). Scrie `5.0 / 1023.0`.  
4. **Se derulează prea repede** — lipsește `delay`.  
5. **Butonul arată mereu 0** — ai uitat `INPUT_PULLUP`.  
6. **Bara are altă lungime** — `for` trebuie să meargă de la `0` până la `i < 20`, iar `map` să dea valori între `0` și `20`.  
7. **Pauza merge invers** — cu `INPUT_PULLUP`, butonul neapăsat e `HIGH`.

---

## De făcut azi — „Jurnalul plăcii”

### Minim vs Complet

| | Ce trebuie |
|--|------------|
| **Minim** | Potențiometru + buton în Serial Monitor |
| **Complet** | Minim + volți cu 2 zecimale + mesaj mic / mediu / mare |
| **Proiectul 2** | Voltmetrul cu bară de 20 de caractere + procent, cu pauză pe buton |

### Pasul 1 — Minim
- [ ] Potențiometru pe A0, buton pe pin 2  
- [ ] Linia „Potentiometru: … Buton: …”  

### Pasul 2 — Complet
- [ ] Volți afișați corect (între 0.00 și 5.00)  
- [ ] Mesajul se schimbă după zonă  
- [ ] Numele `A2_L01` e corect

### Pasul 3 — Proiectul 2
- [ ] Bară de **20** de caractere, cu `map` și `for`  
- [ ] Procentul afișat lângă bară  
- [ ] Pauză cât ții butonul apăsat

---

## Bonus ★★★ — Provocare: Cinci zone
*Doar dacă ai terminat Proiectul 2.*

Voltmetrul spune și **în cuvinte** cât de sus e potențiometrul.

- [ ] **5 zone** în loc de 3, cu praguri la 205, 410, 614 și 819  
- [ ] Mesajele: foarte mic, mic, mediu, mare, foarte mare, afișate lângă bară  
- [ ] Testezi cu potențiometrul la 0 %, 25 %, 50 %, 75 % și 100 % și completezi un tabel: **poziția · bara · zona**. Toate cele 5 rânduri trebuie să se potrivească  

## Recapitulare pe scurt
1. `Serial.begin(9600)` o dată, în `setup()`  
2. `Serial.print` / `println` afișează texte și numere  
3. `float` e pentru zecimale  
4. Senzorul trimite un **număr**; tu decizi ce înseamnă  
5. `map` + `for` pot transforma un număr într-o **bară** pe care o vezi

## Pe placa reală *(opțional)*
Conectezi placa prin USB, deschizi **Serial Monitor** în Arduino IDE (`Ctrl+Shift+M`) la 9600 baud.

## Quiz scurt
- Ce face `Serial.println`?  
- De ce scriem `5.0` și nu `5`?  
- Ce valoare ar da `analogRead` dacă potențiometrul e la mijloc?  
- Câte `#` are bara când potențiometrul e la jumătate?

## Temă
Alege o valoare din casă pe care ai vrea s-o citești (temperatură, lumină, zgomot) și scrie ce senzor ți-ar trebui.

---

## Ce urmează — Lecția 2
În **lecția 2** folosești un fotorezistor ca să aprinzi singur un LED când se face întuneric.
