export const cursuri = [
  { id: 'c1', nume: 'C++', descriere: 'Programare în C++ de la zero', culoare: '#2563EB' },
  { id: 'c2', nume: 'Arduino', descriere: 'Electronică și programare cu Arduino', culoare: '#F59E0B' },
  { id: 'c3', nume: 'Blender', descriere: 'Modelare 3D cu Blender', culoare: '#7C3AED' },
  { id: 'c4', nume: 'Python', descriere: 'Programare Python - teorie și jocuri', culoare: '#3776AB' },
  { id: 'c5', nume: 'HTML CSS JavaScript', descriere: 'Site-uri de la zero: HTML, CSS și JavaScript', culoare: '#10B981' },
  { id: 'c6', nume: 'Robotică Lego WeDo 2.0', descriere: 'Robotică cu LEGO WeDo 2.0 — construcție + programare vizuală (2 module)', culoare: '#DC2626' },
  { id: 'c7', nume: 'Scratch', descriere: 'Programare vizuală cu Scratch — jocuri și povești', culoare: '#F97316' },
  { id: 'c8', nume: 'micro:bit', descriere: 'BBC micro:bit — programare cu blocuri MakeCode: LED, butoane, senzori, radio (2 module)', culoare: '#00A86B' },
  { id: 'c9', nume: 'Tinkercad 3D', descriere: 'Design 3D simplu cu Tinkercad — forme, print și creativitate', culoare: '#0EA5E9' },
  { id: 'c10', nume: 'micro:bit Python', descriere: 'Python pe micro:bit — senzori, LED și proiecte pe placă', culoare: '#8B5CF6' },
  { id: 'c11', nume: 'Unity', descriere: 'Jocuri 3D cu Unity — scene, scripturi și proiecte interactive', culoare: '#64748B' },
  { id: 'c12', nume: 'Roblox Studio', descriere: 'Jocuri pe Roblox cu Luau — pentru 12+: Studio, scripturi, scor și publicare', culoare: '#E11D48' },
  { id: 'c13', nume: 'AI pentru copii', descriere: 'Ce este inteligența artificială, cum învață și cum o folosim în siguranță — jocuri, discuții și mici experimente', culoare: '#0D9488' },
]

/** Iconuri pe cardurile de landing (opțional) */
export const cursIconLanding: Record<string, string> = {
  c1: '/icons/cpp.png',
  c2: '/icons/arduino.png',
  c3: '/icons/blender.png',
  c4: '/icons/python.png',
  c5: '/icons/html.png',
  c6: '/icons/lego.png',
  c7: '/icons/scratch.png',
  c8: '/icons/microbit.png',
  c9: '/icons/tinkercad.png',
  c10: '/icons/microbit-python.png',
  c11: '/icons/unity.png',
  c12: '/icons/roblox.png',
  c13: '/icons/ai.png',
}

/** Grupe vârstă pe landing — un curs poate apărea în mai multe benzi */
export const grupeVarsta = [
  {
    id: '8-10',
    label: 'Micii Exploratori (8–10 ani)',
    blurb: 'Primii pași în tehnologie prin joacă logică, gândire creativă și construcții\u00A0interactive.',
    curs_ids: ['c6', 'c7', 'c8', 'c9'],
  },
  {
    id: '10-14',
    label: 'Micii Creatori Digitali (10–12 ani)',
    blurb: 'De la joacă la proiecte reale: site-uri web, programe în Python, gadgeturi inteligente și modele\u00A03D.',
    curs_ids: ['c5', 'c4', 'c10', 'c3', 'c13'],
  },
  {
    id: '14plus',
    label: 'Micii Programatori (12+ ani)',
    blurb: 'Proiecte și autonomie: C++, Python, site-uri web, Arduino, Unity și Roblox Studio.',
    curs_ids: ['c1', 'c4', 'c5', 'c2', 'c11', 'c12', 'c13'],
  },
] as const

export const cursBlurbLanding: Record<string, string> = {
  c1: 'Logică, algoritmi și primul limbaj serios, de la „Hello World” la proiecte pe consolă.',
  c2: 'LED-uri, senzori și circuite: electronica prinde viață sub mâinile lor.',
  c3: 'Modele 3D, materiale și animații simple într-un studio creativ.',
  c4: 'Primele programe în Python: desenăm cu Turtle, creăm jocuri cu Pygame și învățăm să gândim ca un programator.',
  c5: 'De la pagină goală la site interactiv: HTML, CSS și JavaScript.',
  c6: 'Construim roboți interactivi cu motoare și senzori, apoi le dăm viață prin programare vizuală.',
  c7: 'Blocuri colorate, personaje animate și primele jocuri create de la zero.',
  c8: 'Matrice LED, senzori și radio: învățăm mai întâi cu blocuri vizuale, apoi trecem la Python pe placa fizică.',
  c9: 'Dezvoltăm gândirea spațială: învățăm să construim, să combinăm forme 3D și să proiectăm propriile modele pe calculator.',
  c10: 'Scriem Python direct pe micro:bit: LED, senzori și proiecte pe placa fizică.',
  c11: 'Jocuri și lumi 3D: învățăm crearea scenelor, fizica obiectelor și logica de joc în Unity (C#).',
  c13: 'Ce este inteligența artificială, cum învață din exemple și cum o folosim în siguranță: jocuri, discuții și mici experimente.',
  c12: 'Pentru 12+: Obby pas cu pas — construiești în Studio, apoi Luau, scor pe ecran și publici jocul.',
}

/** Texte diferite pentru același curs, pe categorie de vârstă (au prioritate față de cursBlurbLanding). */
export const cursBlurbLandingPeGrupa: Record<string, Record<string, string>> = {
  '14plus': {
    c4: 'Python, un limbaj folosit și în inteligența artificială: logică, algoritmi, desen cu Turtle și jocuri proprii cu Pygame, pe care le poți arăta prietenilor.',
    c5: 'Pentru cei care știu deja bazele: un site complet cu meniu, galerie și formular, apoi jocuri web: clicker, cuvântul zilei, dino și păsărica zburătoare.',
  },
}

export const module = [
  // C++ — curriculum 5 module × 10 lecții (12+ ani; M5 = proiect RPG)
  { id: 'm1', curs_id: 'c1', nume: 'Modul 1 — Bazele C++', ordine: 1, badge: 'Junior Coder', descriere: '10 lecții cu un mic proiect în fiecare: afișezi text, folosești variabile, citești date de la tastatură și faci programul să ia decizii cu if și switch. La final: un quiz sau un calculator al tău.' },
  { id: 'm2', curs_id: 'c1', nume: 'Modul 2 — Bucle și vectori', ordine: 2, badge: 'Loop Master', descriere: '10 lecții despre repetare și liste: bucle for, while și do-while, apoi vectori, cu care parcurgi, cauți și sortezi date. La final: un catalog de note.' },
  { id: 'm14', curs_id: 'c1', nume: 'Modul 3 — Funcții, string, algoritmi', ordine: 3, badge: 'Problem Solver', descriere: '10 lecții în care împarți programul în funcții, lucrezi cu texte (string) și rezolvi probleme cu cifre, numere prime și numere aleatoare. La final: un mini-proiect.' },
  { id: 'm15', curs_id: 'c1', nume: 'Modul 4 — Proiecte și autonomie', ordine: 4, badge: 'CodeMaker Graduate', descriere: '10 lecții în care construiești programe mai mari: fișiere, vector STL, structuri și meniuri. Faci trei proiecte pe consolă: un joc, un magazin și un quiz, apoi le prezinți.' },
  { id: 'm34', curs_id: 'c1', nume: 'Modul 5 — Proiect RPG în consolă', ordine: 5, badge: 'RPG Creator', descriere: '10 lecții, un singur proiect mare: un joc RPG în consolă, cu hartă, erou, inventar, monștri, magazin, misiuni și salvare. La final îl prezinți.' },
  // Arduino — 4 module × 10 lecții (10+ ani; Tinkercad Circuits)
  { id: 'm3', curs_id: 'c2', nume: 'Modul 1 — Primele circuite', ordine: 1, badge: 'Circuit Starter' },
  { id: 'm4', curs_id: 'c2', nume: 'Modul 2 — Senzori', ordine: 2, badge: 'Sensor Scout' },
  { id: 'm35', curs_id: 'c2', nume: 'Modul 3 — Afișaj și mișcare', ordine: 3, badge: 'Display Maker' },
  { id: 'm36', curs_id: 'c2', nume: 'Modul 4 — Proiecte complete', ordine: 4, badge: 'Arduino Creator' },
  // Blender
  { id: 'm5', curs_id: 'c3', nume: 'Modul 1 — Primii pași în Blender', ordine: 1, badge: 'Blender Starter', descriere: '10 lecții în care înveți să te miști în Blender și să construiești din forme simple: un omuleț de zăpadă, o rachetă, o căsuță. Apoi le dai culoare, lumină și faci prima imagine randată. La final: o mini-diorama, adică o scenă 3D în miniatură, în care aduni figurinele făcute în lecțiile trecute.' },
  { id: 'm37', curs_id: 'c3', nume: 'Modul 2 — Modelare în Edit Mode', ordine: 2, badge: 'Mesh Modeler', descriere: '10 lecții de modelare în Edit Mode: vârfuri, muchii și fețe, extrude, bevel, loop cut și simetrie. Faci un turn de castel, un robot, o cană, un fluture și o rachetă în stil low-poly.' },
  { id: 'm38', curs_id: 'c3', nume: 'Modul 3 — Modificatori și materiale', ordine: 3, badge: 'Modifier Maker', descriere: '10 lecții în care folosești modificatori și materiale: Subdivision, Solidify, Array, Bevel și Boolean. Faci fructe, un gard, un cufăr și brânza cu găuri, apoi texturi și lumini. La final: camera ta 3D.' },
  { id: 'm39', curs_id: 'c3', nume: 'Modul 4 — Proiecte 3D complete', ordine: 4, badge: 'Blender Creator', descriere: '10 lecții pentru proiecte 3D complete: pornești de la idee și schiță, modelezi un personaj și o insulă plutitoare, adaugi lumini și atmosferă și exporți scena. La final: o expoziție cu lucrările tale.' },
  // Python
  { id: 'm6', curs_id: 'c4', nume: 'Modul 1 — Primii pași în Python', ordine: 1, badge: 'Python Starter' },
  { id: 'm7', curs_id: 'c4', nume: 'Modul 2 — Repetăm, colecționăm, organizăm', ordine: 2, badge: 'Python Builder' },
  { id: 'm8', curs_id: 'c4', nume: 'Modul 3 — Desenăm cu Turtle', ordine: 3, badge: 'Turtle Artist' },
  { id: 'm40', curs_id: 'c4', nume: 'Modul 4 — Jocuri cu Pygame', ordine: 4, badge: 'Game Creator' },
  // HTML CSS JavaScript — 6 module, câte 10 lecții fiecare (10+ ani, lucru în VS Code)
  { id: 'm9', curs_id: 'c5', nume: 'Modul 1 — HTML I: Prima mea pagină', ordine: 1, badge: 'HTML Starter', descriere: 'Pagini cu titluri, text, linkuri și imagini. Proiect: „Pagina mea despre mine”.' },
  { id: 'm42', curs_id: 'c5', nume: 'Modul 2 — HTML II: Pagini mai bogate', ordine: 2, badge: 'HTML Builder', descriere: 'Tabele, formulare, audio, video și taguri cu înțeles. Proiect: fișa animalului preferat.' },
  { id: 'm10', curs_id: 'c5', nume: 'Modul 3 — CSS: Stil și culoare', ordine: 3, badge: 'CSS Stylist', descriere: 'Culori, fonturi, flexbox, grid, animații și pagini pe telefon. Proiect: „Pagina mea, dar frumoasă”.' },
  { id: 'm11', curs_id: 'c5', nume: 'Modul 4 — JavaScript pentru începători', ordine: 4, badge: 'JavaScript Starter', descriere: '10 lecții cu dificultate crescătoare, de la console.log la o pagină interactivă.' },
  { id: 'm43', curs_id: 'c5', nume: 'Modul 5 — Site complet: HTML + CSS + JavaScript', ordine: 5, badge: 'Web Designer', descriere: 'Un site de 3–4 pagini cu meniu, galerie și formular care funcționează, de la plan la publicare gratuită.' },
  { id: 'm44', curs_id: 'c5', nume: 'Modul 6 — Jocuri web', ordine: 6, badge: 'Web Game Maker', descriere: 'Jocuri moderne cu HTML, CSS și JavaScript: clicker, cuvântul zilei, dino și păsărica zburătoare.' },
  { id: 'm45', curs_id: 'c13', nume: 'Modul 1 — AI pentru copii', ordine: 1, badge: 'AI Explorer', descriere: 'Ce este inteligența artificială, cum învață din exemple, unde greșește și cum o folosim în siguranță.' },
  // Robotică WeDo 2.0
  { id: 'm12', curs_id: 'c6', nume: 'Modul 1 — Construcție și senzori (WeDo 2.0)', ordine: 1, badge: 'Robot Starter' },
  { id: 'm13', curs_id: 'c6', nume: 'Modul 2 — Proiecte avansate (WeDo 2.0)', ordine: 2, badge: 'Robot Inventor' },
  // Scratch — 6 module × 10 lecții (8–10 ani; M5 și M6 = 10+)
  {
    id: 'm16',
    curs_id: 'c7',
    nume: 'Modul 1 — Primii pași',
    ordine: 1,
    badge: 'Scratch Starter',
    nivel: 'Starter',
    descriere: '9 proiecte noi + prezentare. Fiecare oră se închide cu ceva jucabil sau privibil.',
  },
  {
    id: 'm17',
    curs_id: 'c7',
    nume: 'Modul 2 — Logică',
    ordine: 2,
    badge: 'Logic Explorer',
    nivel: 'Explorer',
    descriere: '10 lecții cu jocuri și proiecte: dacă, variabile, operatori, blocuri proprii și mesaje.',
  },
  {
    id: 'm18',
    curs_id: 'c7',
    nume: 'Modul 3 — Jocuri',
    ordine: 3,
    badge: 'Game Builder',
    nivel: 'Builder',
    descriere: '10 lecții cu jocuri și teme educative: straturi, clone, liste, sunet, timp. Capstone: „Zidul magic”.',
  },
  {
    id: 'm19',
    curs_id: 'c7',
    nume: 'Modul 4 — Proiecte și autonomie',
    ordine: 4,
    badge: 'Scratch Creator',
    nivel: 'Creator',
    descriere: '6 proiecte: 1 joc Creator al tău (L1→L6→L7) + 5 antrenamente.',
  },
  {
    id: 'm28',
    curs_id: 'c7',
    nume: 'Modul 5 — Mecanici de joc · 10+ ani',
    ordine: 5,
    badge: 'Maestru de jocuri',
    nivel: 'Master',
    descriere: '6 antrenamente (gravitație, scroll, inamici…) + 1 proiect mare.',
  },
  {
    id: 'm20',
    curs_id: 'c7',
    nume: 'Modul 6 — Lume de cuburi · 10+ ani',
    ordine: 6,
    badge: 'Cube Crafter',
    nivel: 'Crafter',
    descriere: '1 proiect pe toate 10 lecțiile: lumea de cuburi (sparge, pune, craft).',
  },
  // micro:bit — c8: 2 module blocuri (8+) · c10: 2 module Python (10+)
  { id: 'm21', curs_id: 'c8', nume: 'Modul 1 — MakeCode (blocuri)', ordine: 1, badge: 'micro:bit Starter' },
  { id: 'm22', curs_id: 'c8', nume: 'Modul 2 — Proiecte (blocuri + radio)', ordine: 2, badge: 'micro:bit Maker' },
  { id: 'm23', curs_id: 'c10', nume: 'Modul 1 — Python pe micro:bit', ordine: 1, badge: 'micro:bit Coder' },
  { id: 'm41', curs_id: 'c10', nume: 'Modul 2 — Proiecte Python', ordine: 2, badge: 'micro:bit Python Pro' },
  // Roblox Studio — 4 module × 10 lecții (12+ ani; Obby pe verticală)
  { id: 'm24', curs_id: 'c12', nume: 'Modul 1 — Place Builder', ordine: 1, badge: 'Place Builder' },
  { id: 'm25', curs_id: 'c12', nume: 'Modul 2 — Script Starter', ordine: 2, badge: 'Script Starter' },
  { id: 'm26', curs_id: 'c12', nume: 'Modul 3 — Game Logic', ordine: 3, badge: 'Game Logic' },
  { id: 'm27', curs_id: 'c12', nume: 'Modul 4 — Game Creator', ordine: 4, badge: 'Roblox Creator' },
  // Tinkercad 3D — 5 module × 10 lecții (8–10; M5 Design Pro = 10+)
  {
    id: 'm29',
    curs_id: 'c9',
    nume: 'Modul 1 — Bazele Tinkercad',
    ordine: 1,
    badge: 'Shape Starter',
    descriere: '10 proiecte: de la căsuță și forme la insula în miniatură.',
  },
  {
    id: 'm30',
    curs_id: 'c9',
    nume: 'Modul 2 — Obiecte utile',
    ordine: 2,
    badge: 'Object Maker',
    descriere: '10 obiecte practice pentru birou, baie și acasă + proiect la alegere.',
  },
  {
    id: 'm31',
    curs_id: 'c9',
    nume: 'Modul 3 — Creativ și mecanic',
    ordine: 3,
    badge: 'Motion Maker',
    descriere: '10 proiecte cu piese mobile, îmbinări și un mecanism la final.',
  },
  {
    id: 'm32',
    curs_id: 'c9',
    nume: 'Modul 4 — Orașul nostru',
    ordine: 4,
    badge: 'City Builder',
    descriere: '10 lecții pe plăci: construiești zona ta din orașul comun.',
  },
  {
    id: 'm33',
    curs_id: 'c9',
    nume: 'Modul 5 — Design Pro · 10+ ani',
    ordine: 5,
    badge: 'Design Pro',
    descriere: '10 lecții tehnice: toleranțe, Codeblocks, Circuits · recomandat 10+.',
  },
]

const genLectii = (modulId: string, titluri: string[]) =>
  titluri.map((titlu, i) => ({ id: `${modulId}-l${i + 1}`, modul_id: modulId, titlu, ordine: i + 1, continut: null }))

export const lectii = [
  // C++ Modul 1 — Bazele
  ...genLectii('m1', [
    'Cartea mea de vizită',
    'Programul meu comentat',
    'Fișa jucătorului',
    'Calculatorul meu',
    'Cartea mea de identitate',
    'Ești admis?',
    'Calificativul tău',
    'Poarta jocului',
    'Meniul cafenelei',
    'Quiz sau Calculator',
  ]),
  // C++ Modul 2 — Bucle și vectori
  ...genLectii('m2', [
    'Bucla for',
    'for — sumă, produs, numărare',
    'Bucla while',
    'do-while + alegerea buclei',
    'Nested loops',
    'Array 1D — introducere',
    'Parcurgere vector',
    'Căutare în vector',
    'Sortare simplă (intro)',
    'Recapitulare Modul 2 — catalog note',
  ]),
  // C++ Modul 3 — Funcții, string, algoritmi
  ...genLectii('m14', [
    'Funcții fără parametri',
    'Funcții cu parametri',
    'Funcții cu return',
    'String — bazele',
    'String — căutare și litere',
    'Algoritmi pe cifre',
    'Divizibilitate + numere prime',
    'Numere aleatoare (rand) + probleme combinate',
    'Debugging + stil de cod',
    'Recapitulare Modul 3 — mini-proiect',
  ]),
  // C++ Modul 4 — Proiecte
  ...genLectii('m15', [
    'Fișiere text — citire și scriere',
    'Vector din STL (std::vector)',
    'Structuri (struct)',
    'Vector de structuri',
    'Meniuri + stare program',
    'Proiect A — Joc pe consolă',
    'Proiect B — Magazin / inventar',
    'Proiect C — Quiz educațional',
    'Optimizare + prezentare',
    'Showcase final',
  ]),
  // C++ Modul 5 — Proiect RPG în consolă (un singur proiect, 10 lecții)
  ...genLectii('m34', [
    'Ideea jocului + harta',
    'Jucătorul (struct): nume, viață, scor',
    'Mișcarea între camere',
    'Obiecte și inventar (vector)',
    'Monștri și luptă (rand)',
    'Magazin și monede',
    'Misiuni și condiții de câștig',
    'Salvare și încărcare (fișiere)',
    'Curățare cod + depanare',
    'Prezentare + finalul jocului',
  ]),
  // Arduino Modul 1 — Primele circuite
  ...genLectii('m3', [
    'Hello, Arduino!',
    'Semnalizator de bicicletă',
    'Lumina de veghe',
    'Trecere de pietoni',
    'Lampa cu reglaj',
    'Lampa RGB a camerei',
    'Soneria de la ușă',
    'Pian cu 4 clape',
    'Cine apasă primul?',
    'Panoul camerei mele',
  ]),
  // Arduino Modul 2 — Senzori
  ...genLectii('m4', [
    'Ce simte placa?',
    'Veioza automată',
    'Termometrul camerei',
    'Avertizor de căldură',
    'Parcare cu senzor',
    'Alarma anti-intruși',
    'Ghiveciul care cere apă',
    'Nivela digitală',
    'Mini stație meteo',
    'Casa care ne protejează',
  ]),
  // Arduino Modul 3 — Afișaj și mișcare
  ...genLectii('m35', [
    'Ecranul LCD',
    'Panou de informații',
    'Numărătoare inversă',
    'Servo-ul care salută',
    'Bariera automată',
    'Radar de mână',
    'Ventilatorul meu',
    'Seiful cu cod',
    'Panglica de lumini',
    'Telecomanda magică',
  ]),
  // Arduino Modul 4 — Proiecte complete
  ...genLectii('m36', [
    'De la idee la schemă',
    'Casa inteligentă I',
    'Casa inteligentă II',
    'Jocul de reflexe',
    'Cronometru de joc',
    'Oracolul cu zar',
    'Stația meteo a școlii',
    'Robotul care ocolește',
    'Proiect final: construcția',
    'Expoziția + verificare finală',
  ]),
  // Blender Modul 1 — Primii pași
  ...genLectii('m5', [
    'Interfața Blender și primul cub',
    'Navigare în 3D',
    'Mutăm, rotim, scalăm',
    'Forme de bază',
    'Omulețul de zăpadă',
    'Căsuța din cuburi',
    'Culori și materiale',
    'Lumini și cameră',
    'Prima randare',
    'Proiect: mini-diorama',
  ]),
  // Blender Modul 2 — Edit Mode
  ...genLectii('m37', [
    'Vârfuri, muchii, fețe',
    'Selectare isteață',
    'Extrude: turnul de castel',
    'Inset și Bevel: robotul cutie',
    'Loop Cut: cana de ceai',
    'Editare proporțională: dealuri și nori',
    'Simetria: fluturele',
    'Stil low-poly',
    'Racheta low-poly I',
    'Racheta low-poly II',
  ]),
  // Blender Modul 3 — Modificatori și materiale
  ...genLectii('m38', [
    'Subdivision: fructe rotunde',
    'Solidify: coșul și fereastra',
    'Array: gardul și scara',
    'Bevel: cufărul cu comori',
    'Boolean: brânza cu găuri',
    'Curbe: țeava și șarpele',
    'Materiale: galeria de materiale',
    'Texturi simple: pământ și iarbă',
    'Studio foto: lumini și fundal',
    'Proiect: camera mea 3D',
  ]),
  // Blender Modul 4 — Proiecte complete
  ...genLectii('m39', [
    'De la idee la schiță',
    'Personajul I: corpul',
    'Personajul II: față și membre',
    'Personajul III: culori și poziție',
    'Insula plutitoare I: terenul',
    'Insula plutitoare II: detalii',
    'Lumini și atmosferă',
    'Scenă ordonată și export',
    'Proiect final: construcția',
    'Expoziția + verificare finală',
  ]),
  ...genLectii('m6', [
    'Thonny și primul program',
    'Variabile: cutii cu nume',
    'Numere și text',
    'input: programul vorbește cu tine',
    'Calcule și operatori',
    'Text: f-string și metode',
    'if: programul decide',
    'and, or, not',
    'random: zaruri și noroc',
    'Proiect: generatorul de povești',
  ]),
  ...genLectii('m7', [
    'for și range',
    'Tabla înmulțirii și modele',
    'while',
    'break și continue',
    'Liste I',
    'Liste II',
    'Dicționare: agenda mea',
    'Funcții I',
    'Funcții II',
    'Proiect: Ghicește numărul',
  ]),
  ...genLectii('m8', [
    'Broasca țestoasă merge',
    'Forme și culori',
    'Spirale și modele cu bucle',
    'Funcții de desen: casa și floarea',
    'Stele și mandale',
    'Tastatura: țestoasa pilot',
    'Mouse: click și desenezi',
    'Cursa țestoaselor',
    'Joc: Prinde steaua',
    'Proiect: galeria mea de artă',
  ]),
  ...genLectii('m40', [
    'Fereastra Pygame',
    'Forme, culori și imagini',
    'Mișcare: bucla jocului',
    'Tastatura: controlăm personajul',
    'Coliziuni: strângem monede',
    'Scor, vieți și text',
    'Clase: jucători și inamici',
    'Fișiere și try/except: salvăm recordul',
    'Proiect final: jocul meu',
    'Expoziția + verificare finală',
  ]),
  // HTML CSS JavaScript
  ...genLectii('m9', [
    'Ce e o pagină web? VS Code și Live Server',
    'Scheletul unei pagini',
    'Titluri și paragrafe',
    'Text frumos: bold, italic, liste',
    'Linkuri',
    'Imagini și foldere',
    'Culori și fundal',
    'Mai multe pagini legate între ele',
    'Ordine și greșeli: indentare, comentarii, DevTools',
    'Proiect: Pagina mea despre mine',
  ]),
  ...genLectii('m42', [
    'Tabele: orarul și clasamentul meu',
    'Tabele mai deștepte',
    'Formulare I: text, parolă, buton',
    'Formulare II: alegeri',
    'Formulare III: validare',
    'Audio și video',
    'iframe: hartă și video',
    'Taguri cu înțeles',
    'div, span, id și class',
    'Proiect: Fișa animalului meu preferat',
  ]),
  ...genLectii('m10', [
    'Primul stil: stil.css și selectorii',
    'Culori și fundaluri',
    'Text și fonturi',
    'Cutia fiecărui element',
    'Flexbox: elemente pe rând',
    'Grid și position',
    ':hover și tranziții',
    'Animații cu @keyframes',
    'Adaptare la telefon',
    'Proiect: Pagina mea, dar frumoasă',
  ]),
  ...genLectii('m43', [
    'Alegem subiectul și facem planul',
    'Scheletul site-ului',
    'Antet și meniu (inclusiv pe telefon)',
    'Secțiunea de intrare (hero)',
    'Carduri',
    'Galerie cu imagine mărită',
    'Pagina de contact cu verificare',
    'Detalii care fac diferența: mod întunecat și buton „sus”',
    'Versiunea pe telefon și teste',
    'Publicare și prezentare',
  ]),
  ...genLectii('m11', [
    'Primul script: console.log',
    'Variabile: let și const',
    'Numere, text și calcule',
    'Decizii: if, else și mai multe condiții',
    'Repetări: for',
    'Repetări: while',
    'Funcții',
    'Liste și obiecte',
    'Pagina reacționează: DOM și evenimente',
    'Proiect: Pagina interactivă',
  ]),
  ...genLectii('m44', [
    'Vânătoare de monștri: ținte, scor și cronometru',
    'Clicker: monede, upgrade-uri și salvare automată',
    'Simon spune: culori, secvențe și memorie',
    'Cuvântul zilei I: tabla de joc',
    'Cuvântul zilei II: verificarea literelor',
    'Canvas: desenăm și mișcăm o minge',
    'Dino în deșert I: personaj și salt',
    'Dino în deșert II: obstacole, scor și game over',
    'Păsărica zburătoare',
    'Proiect: Colecția mea de jocuri',
  ]),
  ...genLectii('m45', [
    'Ce este inteligența artificială',
    'Cum învață un calculator: din exemple, nu din reguli',
    'Date: hrana pentru AI',
    'Clasificare: pisică sau câine?',
    'Predicții și probabilități: de ce mai greșește AI',
    'Greșeli și prejudecăți',
    'AI în viața de zi cu zi',
    'Cum vorbim cu un asistent AI',
    'Siguranță și date personale',
    'Proiect: Ghidul meu despre AI',
  ]),
  ...genLectii('m12', [
    'Ce este WeDo 2.0? Hub + primul motor',
    'Motor: viteză, timp, direcție',
    'Senzor de înclinare',
    'Senzor de mișcare (distanță)',
    'Programe cu „dacă”',
    'Proiect: Vehiculul meu',
    'Proiect: Ventilator / elice',
    'Proiect: Creatura care reacționează',
    'Proiect combinat (motor + 2 senzori)',
    'Showcase + badge Robot Starter',
  ]),
  ...genLectii('m13', [
    'Recap M1 + misiunea Modulului 2',
    'Proiect: Braț / ridicător',
    'Proiect: Bariera / poarta automată',
    'Proiect: Alarmă / paznic',
    'Proiect: Împingător / sortare',
    'Doi senzori, un robot',
    'Provocare pe echipe (pistă)',
    'Debugging + optimizare',
    'Proiect final WeDo',
    'Showcase + badge Robot Inventor',
  ]),
  // Scratch Modul 1
  ...genLectii('m16', [
    'Cardul meu animat',
    'Lumea mea',
    'Plimbarea mea',
    'Butonul magic',
    'Interviul',
    'Concertul',
    'Comoara',
    'Dansul meu',
    'Personajul meu',
    'Completare + prezentare: Galeria Scratch Starter',
  ]),
  // Scratch Modul 2
  ...genLectii('m17', [
    'Meciul de fotbal',
    'Acvariul',
    'Robotul prieten',
    'Magazinul de dulciuri',
    'Zaruri și calcule',
    'Poarta secretă',
    'Atelierul de desen',
    'Blocurile mele',
    'Vânătoarea de bile',
    'Completare + prezentare: Galeria Logic Explorer',
  ]),
  // Scratch Modul 3
  ...genLectii('m18', [
    'Pădurea fermecată',
    'Sistemul solar în cursă',
    'Invazia clonelor',
    'Trusa de prim ajutor',
    'Formula 1',
    'Capsula timpului',
    'Cald și rece',
    'Salvează planeta',
    'Zidul magic',
    'Completare + prezentare: Galeria Game Builder',
  ]),
  // Scratch Modul 4 — proiecte concrete (fără „greu” în fiecare titlu)
  ...genLectii('m19', [
    'Pornești proiectul tău (motorul)',
    'Proiect: Poveste interactivă cu alegeri',
    'Proiect: Quiz pe runde',
    'Proiect: Clip pe acte',
    'Proiect: Labirint pe 2 nivele',
    'Proiectul tău — versiunea finală',
    'Depanare: găsești și repari greșelile',
    'Proiect: Felicitare pe scene',
    'Prezentare + insignă Scratch Creator',
    'Portofoliu Creator',
  ]),
  // Scratch Modul 5 — Mecanici de joc
  ...genLectii('m28', [
    'Gravitație și săritură',
    'Scroll / hărți extinse',
    'Inamici: patrulare și detecție',
    'Liste și inventar',
    'Blocuri proprii (My Blocks)',
    'Magazin cu monede',
    'Proiect mare — arhitectură și design',
    'Proiect mare — inamici, clone, coliziuni',
    'Proiect mare — joc complet',
    'Polish + prezentare + insignă Maestru de jocuri',
  ]),
  // Scratch Modul 6 — Lume de cuburi (începe cu punte de recap)
  ...genLectii('m20', [
    'Punte M5 + mișcare pe grilă',
    'Sparge blocuri (minat)',
    'Pune blocuri (construcție)',
    'Inventar (resurse pe scenă)',
    'Două zone / biomi',
    'Creatură / pericol + HP',
    'Crafting simplu (2→1)',
    'Misiune / obiectiv de victorie',
    'Meniu Start + instrucțiuni',
    'Polish + prezentare + insignă Cube Crafter',
  ]),
  // micro:bit Modul 1 — blocuri
  ...genLectii('m21', [
    'Salut, micro:bit!',
    'Pixeli luminoși',
    'Butoanele A și B',
    'Cutia cu număr',
    'Dacă… atunci',
    'Repetări: inima care bate',
    'Mișcare: bila magică',
    'Lumină și temperatură',
    'Seiful secret',
    'Insigna inteligentă + badge micro:bit Starter',
  ]),
  // micro:bit Modul 2 — proiecte blocuri
  ...genLectii('m22', [
    'Panoul de comandă',
    'Poșta radio',
    'Vânătoarea de comori: cald–rece',
    'Semaforul de pe masă',
    'Paznicul rucsacului',
    'Jurnalul de măsurători',
    'Stația meteo la distanță',
    'Doctorul de cod',
    'Cheia și seiful radio',
    'Expoziția Maker + badge micro:bit Maker',
  ]),
  // micro:bit Modul 3 — Python
  ...genLectii('m23', [
    'De la blocuri la Python',
    'Galeria de imagini',
    'Semnalizatorul',
    'Cufărul cu monede',
    'Detectivul de cameră',
    'Mesagerul radio',
    'Biblioteca de desene',
    'Traducător de blocuri',
    'Prietenul de pe placă',
    'Expoziția Coder + badge',
  ]),
  // micro:bit Python Modul 2 — proiecte
  ...genLectii('m41', [
    'Panoul de misiuni',
    'Cartea de mesaje',
    'Ploaia de pixeli',
    'Pianul de buzunar',
    'Busola digitală',
    'Labirintul înclinat',
    'Mesaje cu cod',
    'Recordul păstrat',
    'Cutia Exploratorului',
    'Expoziția Python Pro + badge',
  ]),
  // Roblox Modul 1 — Place Builder
  ...genLectii('m24', [
    'Studio + primul Place',
    'Explorer, Properties, Workspace',
    'Parts: forme, mutare, scalare',
    'Ancorare, materiale, culori',
    'Camera + Playtest',
    'Start (Spawn) + Finish',
    'Traseu Obby: platforme',
    'Checkpoint vizual (fără script)',
    'Mini-proiect: Lumea Obby',
    'Completare + prezentare + insignă Place Builder',
  ]),
  // Roblox Modul 2 — Script Starter
  ...genLectii('m25', [
    'Script vs LocalScript + print',
    'Client vs Server',
    'Variabile',
    'if / then / else',
    'Funcții simple',
    'Eveniment Touched',
    'ClickDetector',
    'for / while (simplu)',
    'Mini-proiect: ușă sau monedă',
    'Completare + prezentare + insignă Script Starter',
  ]),
  // Roblox Modul 3 — Game Logic
  ...genLectii('m26', [
    'leaderstats (scor pe jucător)',
    'GUI: scor pe ecran',
    'RemoteEvent (client → server)',
    'Serverul decide (securitate Minim)',
    'Checkpoint cu script',
    'Cădere / respawn',
    'Timer sau vieți',
    'Bucla de joc curată',
    'Mini-proiect: Obby + scor',
    'Completare + prezentare + insignă Game Logic',
  ]),
  // Roblox Modul 4 — Game Creator
  ...genLectii('m27', [
    'ModuleScript',
    'DataStore Minim',
    'NPC / inamic simplu',
    'Inventar sau shop (Minim) + securitate ca M3',
    'Polish: lumini, sunete, UI',
    'Playtest cu colegii',
    'Depanare + listă de bug-uri',
    'Pregătire publish',
    'Proiect final jucabil (Obby-ul tău)',
    'Publish + prezentare + insignă Roblox Creator',
  ]),
  // Tinkercad Modul 1 — Shape Starter
  ...genLectii('m29', [
    'Căsuța din forme simple',
    'Omul de zăpadă',
    'Fluturele simetric',
    'Bucata de brânză',
    'Ștampila cu text',
    'Barca cu pânze',
    'Racheta spațială',
    'Castelul cu creneluri',
    'Cana cu toartă',
    'Insula în miniatură — mini-proiect + feedback',
  ]),
  // Tinkercad Modul 2 — Object Maker
  ...genLectii('m30', [
    'Cuier de perete',
    'Suport pentru căști',
    'Cutie cu capac',
    'Rama foto',
    'Săpunieră cu scurgere',
    'Suport pentru periuțe',
    'Abajur cu decupaje',
    'Ghiveci cu farfurie',
    'Clemă pentru cabluri',
    'Obiect util la alegere — proiect de modul',
  ]),
  // Tinkercad Modul 3 — Motion Maker
  ...genLectii('m31', [
    'Roți dințate simple',
    'Mașinuță cu roți și axe',
    'Morișca de vânt',
    'Labirint cu bilă',
    'Puzzle 3D',
    'Set de piese de șah',
    'Zaruri personalizate',
    'Fortăreață cu pod mobil',
    'O atracție — carusel sau roată',
    'Proiect final de modul — mecanism la alegere',
  ]),
  // Tinkercad Modul 4 — City Builder
  ...genLectii('m32', [
    'Planul orașului',
    'Casa modulară',
    'Clădiri înalte',
    'Clădiri publice',
    'Străzi și intersecții',
    'Râul și podul',
    'Parcul',
    'Transport în oraș',
    'Detalii urbane',
    'Asamblare și prezentare — orașul comun',
  ]),
  // Tinkercad Modul 5 — Design Pro
  ...genLectii('m33', [
    'Precizie în modelare',
    'Import SVG',
    'Toleranțe pentru printare 3D',
    'Piese care se îmbină',
    'Cutie cu balama (print-in-place)',
    'Angrenaj funcțional',
    'Codeblocks I — forme prin cod',
    'Codeblocks II — obiect parametric',
    'Tinkercad Circuits — LED și Arduino simulat',
    'Produs complet — proiect final al cursului',
  ]),
]

export const cursanti: Array<{
  id: string
  nume: string
  prenume: string
  email_parinte: string
  telefon_parinte: string | null
  data_inscriere: string
  activ: boolean
}> = []

export const inscrieri: Array<{
  id: string
  cursant_id: string
  curs_id: string
  data_inscriere: string
}> = []

// Tipuri abonament
export type TipAbonament = 'lunar' | 'pachet'

export const abonamente: Array<{
  id: string
  cursant_id: string
  tip: TipAbonament
  sedinte_incluse: number   // total de predat (inclus bonus pachet)
  pret: number              // lei — Code Maker Club Focsani
  data_start: string
  data_sfarsit: string | null  // null = activ continuu (lunar)
  activ: boolean
}> = []

export const plati: Array<{
  id: string
  cursant_id: string
  abonament_id: string
  suma: number
  data_plata: string
  metoda: 'cash' | 'transfer' | 'card'
  nota: string | null
}> = []

// Ședințe (prezență)
export const sedinte: Array<{
  id: string
  cursant_id: string
  abonament_id: string
  data: string
  prezent: boolean
  nota: string | null
}> = []

export const progres: Array<{
  id: string
  cursant_id: string
  lectie_id: string
  bifat: boolean
  data_bifat: string | null
}> = []
