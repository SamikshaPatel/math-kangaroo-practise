-- Use the existing is_admin() function, consistent with attempts table
drop policy if exists "past_paper_attempts_admin_select" on past_paper_attempts;
drop policy if exists "past_paper_attempts_kid_select" on past_paper_attempts;
drop policy if exists "past_paper_attempts_kid_insert" on past_paper_attempts;

create policy "past_paper_attempts_select" on past_paper_attempts
  for select using (
    is_admin()
    or kid_id = (select id from kids where auth_id = auth.uid() limit 1)
  );

create policy "past_paper_attempts_insert" on past_paper_attempts
  for insert with check (
    kid_id = (select id from kids where auth_id = auth.uid() limit 1)
  );
