#!/usr/bin/env node
/**
 * Checks whether the admin has requested a regeneration since the last
 * time this workflow actually ran one — compares the timestamp in
 * Supabase (set by the "Regenerate SEO Pages" button in admin) against a
 * marker file committed to the repo after each successful run.
 *
 * Writes "true"/"false" to GITHUB_OUTPUT so the workflow can conditionally
 * skip the (more expensive) generation step when there's nothing new to do.
 */
const fs = require('fs');

const SB_URL = 'https://gvvzcudpcotoicnrhapz.supabase.co';
const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2dnpjdWRwY290b2ljbnJoYXB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODcxODQ0MjgsImV4cCI6MjEwMjc2MDQyOH0.BCh__U3fedTDvh0S8UAiPs7o1SnsqqKwuf_56bywWUw';
const MARKER_PATH = '.github/last-regenerated.txt';

async function main() {
  const res = await fetch(`${SB_URL}/rest/v1/kv_store?key=eq.obv_settings&select=value`, {
    headers: { apikey: SB_KEY, Authorization: `Bearer ${SB_KEY}` }
  });
  if (!res.ok) throw new Error(`Supabase fetch failed: ${res.status}`);
  const rows = await res.json();
  let requestedAt = null;
  if (rows.length) {
    try { requestedAt = (JSON.parse(rows[0].value) || {}).seoRegenRequestedAt || null; } catch (e) {}
  }

  const lastRun = fs.existsSync(MARKER_PATH) ? fs.readFileSync(MARKER_PATH, 'utf8').trim() : '';

  const shouldRun = requestedAt && requestedAt !== lastRun;
  const output = process.env.GITHUB_OUTPUT;
  if (output) {
    fs.appendFileSync(output, `should_run=${shouldRun}\n`);
    fs.appendFileSync(output, `requested_at=${requestedAt || ''}\n`);
  }
  console.log(shouldRun
    ? `New regeneration requested at ${requestedAt} (last run: ${lastRun || 'never'}) — proceeding.`
    : `No new request (requested: ${requestedAt || 'none'}, last run: ${lastRun || 'never'}) — skipping.`);
}

main().catch(err => { console.error(err); process.exit(1); });
