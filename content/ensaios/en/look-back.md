---
ptSlug: olhe-pra-tras
n: 3
title: "Look back: the problem isn't productivity"
excerpt: "A thousand tabs, several terminals running Claude and Codex, and that feeling of being exhausted without getting anything done. What got me unstuck was to stop looking only forward."
tags:
  - productivity
  - ai
date: Aug 31, 2026
read: 8 min
---

A thousand tabs open. A bunch of terminals with Claude, ChatGPT and Codex running. And at the end of the day that familiar feeling: I'm exhausted and I didn't get anything done. If that sounds like your week, the problem is almost never a lack of productivity tools. It's the size of what you tried to push through, and the habit of only looking forward.

## Goals that are too big

The first cause is easy to recognize and hard to admit. The project sits in ClickUp as a single block: "build the product", "ship the landing page", "organize the SaaS". That isn't a task. It's a semester disguised as a checkbox.

What works for me is breaking it down until each piece fits in one or two pull requests. If the task doesn't close in a PR, it's still too big. A PR has a beginning, an end and a diff someone can actually read. Your head is grateful for it, because the brain understands "done" when it has a small package to push, not when it has a horizon.

That alone already cuts down the fatigue. But it doesn't solve the other half.

## We only look forward

Even with small tasks, our eyes stay on the next item. Whatever already shipped disappears. The week goes by, you forget what you merged, what you published, what the team is already using. Then comes the lie: "I didn't get anywhere." You did. You just didn't look.

> The fatigue goes away when we count what already shipped, not when we plan the next step.
>
> — this issue's thesis

I don't build a second brain for this. The history is already on GitHub. Every PR is a point on the timeline, by organization, by repository, with a date. If I delivered it, it's there. I don't need to retell it from memory.

## GitHub CLI, from any session

The practical way: in the terminal, in a Claude session, I ask it to use the GitHub CLI and give me back what I moved. Which PRs went out in the last 7 days. The last 14. The last 30. Without opening the repository in the editor. Without hunting for branches. From any machine where `gh` is logged in.

The structure of what comes back is what matters. It's not a raw list of titles. It's: what changed, in which project, in which organization, what it unblocked. You can filter by org when you have several. You can filter by that project you left on the side and swear you abandoned. Often it wasn't abandoned. There was a PR three weeks ago and you forgot.

When a stalled project needs to come back, that slice is the context. You don't start from zero. You take what was already delivered and keep going.

## The same slice becomes copy

This isn't only useful for feeling less guilty.

If I need to describe a feature for a landing page, the material is already in the PRs. Claude reads what went in and writes the paragraph without me having to remember every commit. If the team asks what shipped this week, the same slice turns into a summary formatted to paste into WhatsApp. It's not status theater. It's what actually shipped, in the language of whoever is going to use it.

## Why I do it by hand, and not with an agent

You could automate it. An agent running every Monday, a digest in Slack, a card in ClickUp. I didn't do that on purpose.

There's a specific pleasure in crossing a task off on paper, in asking for the slice and reading what comes back. When you set up the agent, that small win goes away. The report arrives, you don't even open it, and the feeling of "I checked what I did" never happens. For this use, a session at the moment the fatigue hits is worth more than the robot you ignore.

Automate what you already do every week without thinking. This one I want to keep asking for.

## It works for your career too

The same logic fits outside of code. You can open a session and ask Claude to interview you: what changed in the last 90 days, what you deliver today that you didn't at the start of the year, where you're just busy. It's not a test. It's a mirror. Most of the time the stagnation we feel is a lack of perspective, not a lack of progress.

## Why GitHub, and not a separate notebook

I run several fronts at the same time. Eight projects don't fit in a Notion page I promise to keep updated. GitHub is already up to date because the work goes through it. If the source of truth is the PR, I don't depend on extra discipline to have a history.

A separate notebook only works if you write in it every day. I don't write. I merge. So the merge is the journal.

## In short

If the week left you tired and with the impression that nothing moved, don't start by buying another habit app. Break down what's in front of you until it fits in a PR. Then look back at the last 7, 14, 30 days and read what already shipped.

The productivity you think you're missing has usually already happened. You just didn't have a cheap way to see it.

---

Watch the full video at [Cansado e com a sensação de que não fez nada?](https://www.youtube.com/watch?v=TjDmm97qDRg) (in Portuguese). There I show the GitHub CLI requests, the filter by organization and by project, and the slice turning into landing page and WhatsApp copy.
