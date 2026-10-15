/** Template + canale notificare părinte — Code Maker Club Focșani */

/** Folosit în email + WhatsApp (înscriere, oferte, ședințe epuizate) */
export function textPrezentaObligatorie(): string {
  return `Prezența la curs este obligatorie pe durata anului școlar.
În caz de absență, cursantul recuperează lecția pe platforma Code Maker Club Focșani.`
}

export function mesajSedinteEpuizate(prenumeCopil: string): string {
  return `Bună ziua!

Pentru ${prenumeCopil} a fost ultima ședință. Vă așteptăm în continuare cu următoarea ofertă:

Detalii abonamente Code Maker Club Focșani:
✅ 4 ședințe - 8 ore - 300 de lei / 37,5 lei ora de programare

✅ 9 ședințe - 18 ore - 600 de lei / 33,3 lei ora de programare

✅ 14 ședințe - 28 de ore - 900 de lei / 32,1 lei ora de programare

✅ 19 ședințe - 38 de ore - 1200 de lei / 31,5 lei ora de programare

🚀 Autodidact (acasă, pe platformă) - 1 modul - 10 lecții - 20 de ore de programare disponibile 30 de zile - 200 de lei / 10 lei ora de programare

🎁 Bonus: +1 ședință gratuită la recomandare, când copilul recomandat se înscrie la curs.
🎁 Bonus: +1 ședință cadou de ziua de naștere.
🎁 Bonus: un cadou surpriză la terminarea anumitor module.

⏱️ Ședința durează 2 ore.

${textPrezentaObligatorie()}

Mulțumim!
Code Maker Club Focșani`
}

/** Mesaj scurt politică / înscriere — email + WhatsApp */
export function mesajPoliticaPrezenta(): string {
  return `Bună ziua!

${textPrezentaObligatorie()}

Mulțumim!
Code Maker Club Focșani`
}

export function subiectEmailSedinteEpuizate(prenumeCopil: string): string {
  return `Code Maker Club Focșani — ședințe epuizate pentru ${prenumeCopil}`
}

export function subiectEmailPoliticaPrezenta(): string {
  return `Code Maker Club Focșani — prezența la curs`
}

export function subiectAutodidactExpira(prenumeCopil: string): string {
  return `Code Maker Club Focșani — accesul Autodidact al lui ${prenumeCopil} expiră curând`
}

/** Email către părinte cu puțin timp înainte ca accesul Autodidact să expire. */
export function mesajAutodidactExpira(opts: {
  prenume: string
  modul: string
  dataSfarsit: string
  zileRamase: number
  pret: number
  limitaReducere: string
}): string {
  const zile = opts.zileRamase === 1 ? 'a mai rămas 1 zi' : `au mai rămas ${opts.zileRamase} zile`
  const reducere =
    opts.pret < 200
      ? `\nPrețul este redus (${opts.pret} lei în loc de 200 lei) pentru că ${opts.prenume} continuă fără pauză. Reducerea se păstrează dacă reînnoirea se face cel târziu pe ${opts.limitaReducere}.`
      : ''
  return `Bună ziua!

Accesul Autodidact al lui ${opts.prenume} la modulul „${opts.modul}” expiră pe ${opts.dataSfarsit} (${zile}).

Dacă doriți ca ${opts.prenume} să continue cu următorul modul, prețul este ${opts.pret} lei pentru 30 de zile.${reducere}

Pentru reînnoire ne puteți răspunde la acest email sau ne scrieți la contact@codemakerclub.ro.

Mulțumim!
Code Maker Club Focșani`
}

/** Stub: în producție → Resend / Supabase Edge Function */
export async function trimiteEmailSedinteEpuizate(opts: {
  emailParinte: string
  prenumeCopil: string
  sedinteRamase: number
}): Promise<{ ok: true; canal: 'email-stub'; preview: string }> {
  const body = mesajSedinteEpuizate(opts.prenumeCopil)
  console.info('[email-stub]', {
    to: opts.emailParinte,
    subject: subiectEmailSedinteEpuizate(opts.prenumeCopil),
    sedinteRamase: opts.sedinteRamase,
    body,
  })
  return { ok: true, canal: 'email-stub', preview: body }
}
