---
n: 14
title: "When code stops being the bottleneck"
excerpt: "In March I opened about 40 PRs across my side projects. In October, in about 15 days of work, it was 197. Code stopped holding me back, and the CI/CD bill arrived."
tags:
  - ai
  - claude-code
  - productivity
date: Oct 25, 2026
read: 7 min
---

In March 2026 I opened roughly 40 PRs across my side projects. In October, counting up to the 22nd and leaving out a week of vacation when I barely touched anything, it was 197. About 15 days of work.

That sounds like plain good news. But it had a consequence I wasn't expecting: the bill. I blew through my GitHub Actions and Vercel build minutes. The month before, I spent less on the Vercel plan than on its build minutes.

I want to write the process down here, as I promised in the video, along with what I learned when the bottleneck moved.

## Today's flow

Everything I do starts the same way. I write a spec, the agent implements it and opens a PR. Then the automatic review kicks in: CI running tests and lint, CodeRabbit, and Grok Bot, which is also one of my reviewers. They leave comments, the agent fixes them, it goes back to review, and the cycle repeats until it closes.

Until last month, that cycle was manual. The review came back, I went to the Claude Code session that had written the spec and asked it to look at the comments and reply. Again. And again.

And there was a detail that slowed me down a lot. When my PR volume went up, CodeRabbit started hitting rate limits. It would stall and wait for someone to comment `@coderabbitai review` on the PR to start over. That someone was me.

## I was the AI's proxy

Looking at my own usage is how I saw the problem. In that whole flow, the only moment I really need to look is right before the merge. The rest was me passing messages along: asking it to review, asking it to fix, asking it to try again. I was acting as a proxy between the AI and the tools.

So I wrote a few skills in Claude Code to play that role. When I run a spec, the skill already runs with subagents, opens the PR, keeps watching the review for a long time, and replies to the comments. When it's done, I can see in T3 Code that the session is waiting for me.

At the end, it also hands me a step-by-step for testing the change locally or on a preview URL. I only step in at the end. That lets Claude Code work for two, three, four hours and bring me a PR ready to merge while I'm at my day job.

A tip: you can ask Claude itself to create these skills. But they need to reflect your process, not mine.

## A local loop before spending build minutes

With more PRs, every new push triggered GitHub Actions and a Vercel preview. I needed a check before that.

That's where cross-review came in. Before opening the PR, the agent asks another agent to review everything it changed in that worktree. If the session is Claude Code, it calls Codex. If it's Codex, it calls Claude Code. That loop runs on my machine without burning anyone's minutes, and the result is recorded in the PR body. That way I know the PR has already passed that level of review.

The side effect was good for CodeRabbit too. Before, a lot of things that could have been caught earlier ended up with it. With cross-review up front, it started catching the really annoying bugs, the ones that slipped past the first review.

And since the spec also goes into the PR as markdown, the agent that implemented it knows what was decided. Often it replies to a comment saying that's not a bug, it's a spec decision.

## The bill arrives

Even with all that, CI/CD became the bottleneck. I couldn't just remove CI, because the whole process depends on it. Without CI, the risk goes up.

The first thing I did was try Blacksmith on one project. It's a bit faster and a bit cheaper than GitHub Actions. But I was still not satisfied.

Then I remembered I have good machines sitting idle at home. As the office turned into a home office, a bunch of machines with graphics cards came here, already running Ubuntu. I installed the GitHub Actions runner on them. It's a few lines of shell script, and GitHub's docs page walks you through it.

The next step is to have the Mac mini handle Mac CI/CD too, which is more expensive on GitHub Actions.

## Plan B

But I don't have a data center at home. The internet can go down, the power can go out, and sometimes I'm not here to fix it.

That's why every workflow has a selector. It asks the GitHub API whether my runner is online. If it is, the job runs on my machine. If not, it falls back to GitHub Actions. The selector is also an action, but it takes about 10 seconds to decide, instead of the minutes of testing it hands off.

And if something breaks while I'm away, I can open a session from my phone with T3 Code and Tailscale.

As for Vercel preview URLs, I'm turning them off little by little. The idea is to have them triggered by the local runner. That's still in progress.

> When you speed up one part of the process, the bottleneck doesn't disappear. It moves. The job is to look at where it went.
>
> — this issue's thesis

## What I take from this

This happens in any workflow. If your team starts producing more PRs, peer review is probably what will jam. In my case, the whole process is review and preview, so that's where the pressure landed.

The first lesson is to evaluate your process. I was only able to ship more once I stopped to look at what I was doing, and a lot of it was me being the AI's proxy.

The second is to put everything in the spec: how to check, what's allowed and what isn't, how to test. Ideally the AI asks as much as possible up front, in the spec, or makes a decision and tells me afterwards. In the middle, it shouldn't need me.

The third is to run the process with subagents, to save context.

I don't use auto-merge yet. That's the next step: write only the spec and have enough guardrails for the merge to happen on its own. I'm not there, but it's close.

And as annoyed as I was about the build minutes, it's a good problem. I'm shipping more.

## In short

From about 40 PRs in March to 197 in about 15 days of October. What changed was taking myself out of the middle of the review loop, with skills that run the spec, open the PR, follow CI, CodeRabbit and Grok Bot, and reply on their own.

A local cross-review between Claude Code and Codex before opening the PR saves build minutes and leaves CodeRabbit for the bugs that matter. For the CI bill: Blacksmith on one project, the GitHub Actions runner on my own machines, and a fallback to the cloud when they're offline.

And the question I'll leave you with: once code stopped being the bottleneck, where is yours?

---

Watch the full video at [From 40 to almost 200 PRs a month: CI/CD became my bottleneck](https://www.youtube.com/watch?v=IbsYa_7PvG0) (in Portuguese). There I show the 2026 PR chart, the spec, PR, review and fix flow, the cross-review between Claude Code and Codex, the Vercel and GitHub Actions build minutes, Blacksmith, and the runner selector with fallback.
