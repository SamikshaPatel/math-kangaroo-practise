-- Fix RLS for past_paper_attempts
-- kid_id references kids(id), which is NOT the same as auth.uid()
-- auth.uid() matches kids.auth_id — so we join through kids table

drop policy if exists "past_paper_attempts_kid_select" on past_paper_attempts;
drop policy if exists "past_paper_attempts_kid_insert" on past_paper_attempts;

create policy "past_paper_attempts_kid_select" on past_paper_attempts
  for select using (
    kid_id = auth.uid()
    or kid_id = (select id from kids where auth_id = auth.uid() limit 1)
  );

create policy "past_paper_attempts_kid_insert" on past_paper_attempts
  for insert with check (
    kid_id = auth.uid()
    or kid_id = (select id from kids where auth_id = auth.uid() limit 1)
  );
