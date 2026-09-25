-- Replace admin policy: use auth.email() directly to avoid kids table RLS subquery issue
drop policy if exists "past_paper_attempts_admin_select" on past_paper_attempts;

create policy "past_paper_attempts_admin_select" on past_paper_attempts
  for select using (
    auth.email() = 'admin@mathkangaroo.app'
  );
