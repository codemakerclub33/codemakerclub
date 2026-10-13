-- Permisiuni per profesor (setate de admin). NULL = valorile implicite din aplicație:
--   adauga_elevi: da, plati: da, autodidact_platit: nu, vede_autodidact: nu.
ALTER TABLE public.profile
  ADD COLUMN IF NOT EXISTS permisiuni JSONB;
