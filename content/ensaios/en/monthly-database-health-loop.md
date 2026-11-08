---
ptSlug: loop-mensal-de-saude-do-banco
n: 15
title: "A monthly loop for database health"
excerpt: "At the end of every month a GitHub Action looks at the production database and opens an issue. An agent reads it, proposes changes and opens the PRs. I only step in at the merge. On the first round, a 2.3 GB table landed in my lap."
tags:
  - databases
  - ai
  - automation
date: Oct 30, 2026
read: 6 min
cover: /images/ensaios/loop-saude-banco-capa-en.png
---

A database is one of those things nobody looks at until something breaks. A query gets slow, a table grows, an index nobody uses keeps taking up space. Nobody forgot on purpose. There's just no moment in the month when someone stops and looks.

In one of my SaaS products I decided to create that moment. And, like almost everything I've been doing lately, the idea was to get myself out of the middle and only step in where I need to decide.

## A GitHub Action that only collects

At the end of every month a GitHub Action runs. The cron fires on days 28 to 31, and a gate step only lets it continue when tomorrow is the 1st. It connects to the production database, collects the data and opens an issue titled `db-health` plus the month.

There are six sections: the optimizer's own index recommendations, the queries with the most total latency, the ones that read the most rows, usage for each index, table sizes, and when each cluster node started. That last one looks like a detail, but index usage counters reset when a node restarts. Without it, an index can look useless just because its counter started yesterday.

Two decisions here were deliberate. First, the session is read-only, and every query has a 60-second timeout. I know that's defense in depth, not a guarantee, but it's the layer I wanted before letting anything talk to production on its own. Second, there's no AI in CI. The Action doesn't analyze anything, doesn't suggest anything and never commits. It just gathers the numbers and hands them over.

If a section fails, it shows up as unavailable and the others still come through. I'd rather have an incomplete issue than no issue.

![The loop: GitHub Action, issue, agent, PRs, CI and reviewers, my merge](/images/ensaios/loop-saude-banco-diagrama-en.png)

## The agent does the thinking

The issue is the agent's input. Along with the workflow I left a playbook in the repository: how to read the data, how to give each suggestion a stable ID, when a new index becomes a migration, and why data cleanup never becomes a PR without my decision.

And there's `history.md`. Every suggestion the agent makes gets a line there, accepted or rejected. It sounds like bureaucracy, but it's what makes the loop work from one month to the next. Without a history, the same suggestion I already turned down comes back every month, and I'm once again the person repeating the same answer. Rejections go into the history too, with the reason.

Today the path is this: the Action opens the issue, the agent reads it, proposes and opens the PRs, CI and the reviewers go over them, and I review and merge. I triggered the first round by hand, to watch it. For the next ones, I'm still deciding how to schedule them. The options I'm considering are scheduling in T3 Code or a Claude Code scheduled task, formerly called routines, which also accepts an API trigger.

## The first audit

The first issue already brought something I didn't expect. The biggest table in the database was notifications: 2.3 GB and 5.2 million rows, three times the second largest.

And old notifications have no value at all. The apps show each user's 20 most recent, and the admin shows the latest 100. The rest was just taking up space.

The agent proposed, I decided: keep six months. Then came two PRs, because that's what the playbook says.

The first one is only the migration: an index on `createdAt` in the notifications table. The only existing index was per user, and it can't serve a lookup for everything older than a date. Without this index, every cleanup would scan the whole table. It ships alone, before any code that depends on it.

The second is a daily cron that deletes notifications older than six months, in batches of 1,000 rows, with a 10-minute budget per run. Whatever is left waits for the next night. The first nights will work through the backlog, and after that each run should pick up very little.

After the cleanup, the table is down to [placeholder].

> The problem was never knowing how to look at the database. It was not having a moment in the month when someone did.
>
> — this issue's thesis

## What I take from this

What I like most about this loop is how the roles split. CI does what is deterministic and cheap: collecting. The agent does what takes reading: interpreting and proposing. And I do what only I can do: decide how long to keep data, and press merge.

Shipping the index apart from the code that uses it, keeping the rejections, a read-only session. None of it is sophisticated. They're guardrails that let me trust a process that runs without me.

And the question I'll leave you with: which part of your system only gets attention when it breaks?

---

If you want to see how I took myself out of the PR review loop, read [When code stops being the bottleneck](/issues/when-code-stops-being-the-bottleneck).
