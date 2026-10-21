-- Grant-uri explicite pentru Data API (schimbare Supabase din 30 oct. 2026):
-- tabelele noi din `public` nu mai primesc automat acces pentru anon / authenticated / service_role.
-- Migrarea e idempotentă: pe proiectul existent doar confirmă grant-urile deja prezente,
-- iar pe un proiect/branch nou (db reset) le recreează.

-- 1) service_role (server actions + createAdminClient): acces complet la toate tabelele.
GRANT USAGE ON SCHEMA public TO service_role;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO service_role;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO service_role;

-- 2) authenticated: doar tabelele care au policy-uri RLS pentru utilizatori logați.
--    Tabelele „doar server” (feedback, cursanti_pin, cereri_contact) NU primesc grant aici:
--    rămân inaccesibile direct din client, chiar dacă cineva ar uita o policy.
GRANT USAGE ON SCHEMA public TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON
  public.cursanti,
  public.profile,
  public.parinte_cursanti,
  public.inscrieri,
  public.abonamente,
  public.sedinte,
  public.progres,
  public.notificari_email,
  public.profesor_cursanti,
  public.plati,
  public.acces_autodidact
TO authenticated;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO authenticated;

-- 3) Siguranță explicită pentru tabelele doar-server (în caz că un grant vechi a rămas).
REVOKE ALL ON public.feedback, public.cursanti_pin, public.cereri_contact FROM anon, authenticated;

-- 4) Tabele viitoare create de migrări: service_role primește automat acces.
--    `authenticated` se acordă explicit, per tabel, în migrarea care îl creează
--    (vezi .cursor/rules/supabase-grants.mdc).
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public
  GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO service_role;
ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA public
  GRANT USAGE, SELECT ON SEQUENCES TO service_role;
