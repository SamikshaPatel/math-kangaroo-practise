-- Allow admin to read all past_paper_attempts rows
create policy "past_paper_attempts_admin_select" on past_paper_attempts
  for select using (
    exists (
      select 1 from kids
      where auth_id = auth.uid()
        and is_admin = true
    )
  );
