-- SECURITATE: utilizatorii logati nu mai pot scrie in `profile` (rol, cursant_id, permisiuni)
-- prin cheia publica. Toate scrierile in `profile` se fac din server cu cheia service_role
-- (care ocoleste RLS), deci aplicatia nu este afectata.
DROP POLICY IF EXISTS profile_update_own ON public.profile;
REVOKE INSERT, UPDATE, DELETE ON public.profile FROM authenticated;
REVOKE INSERT, UPDATE, DELETE ON public.profile FROM anon;

-- Legaturile parinte-elev le gestioneaza doar adminul (din server). Inainte, orice profesor
-- putea insera (propriul id, orice elev) si deveni „parinte” al oricarui elev.
DROP POLICY IF EXISTS parinte_cursanti_write_staff ON public.parinte_cursanti;
DROP POLICY IF EXISTS parinte_cursanti_write_admin ON public.parinte_cursanti;
CREATE POLICY parinte_cursanti_write_admin ON public.parinte_cursanti
  FOR ALL TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());
