-- Feedback trimis de părinți și elevi. RLS activ, fără policy-uri: acces doar prin server actions (service role).
CREATE TABLE IF NOT EXISTS public.feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  rol TEXT NOT NULL CHECK (rol IN ('parinte', 'elev')),
  autor_nume TEXT NOT NULL DEFAULT '',
  cursant_id UUID REFERENCES public.cursanti (id) ON DELETE SET NULL,
  mesaj TEXT NOT NULL CHECK (char_length(mesaj) BETWEEN 3 AND 2000),
  citit BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS feedback_created_idx ON public.feedback (created_at DESC);
CREATE INDEX IF NOT EXISTS feedback_user_idx ON public.feedback (user_id, created_at DESC);

ALTER TABLE public.feedback ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.feedback FROM anon, authenticated;
