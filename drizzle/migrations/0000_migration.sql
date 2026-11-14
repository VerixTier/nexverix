CREATE TABLE public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL CHECK (char_length(full_name) BETWEEN 2 AND 100),
  email text NOT NULL CHECK (char_length(email) BETWEEN 5 AND 255),
  company text CHECK (company IS NULL OR char_length(company) <= 120),
  service text NOT NULL CHECK (char_length(service) <= 80),
  budget text CHECK (budget IS NULL OR char_length(budget) <= 60),
  message text NOT NULL CHECK (char_length(message) BETWEEN 20 AND 3000),
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT ALL ON public.contact_submissions TO service_role;

ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
-- No policies for anon/authenticated: submissions are written only by the server after validation
-- and can only be read by the project owner from the backend.