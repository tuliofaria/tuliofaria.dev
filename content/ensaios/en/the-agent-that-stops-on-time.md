---
ptSlug: o-agente-que-para-na-hora-certa
n: 17
title: "The agent that stops on time"
excerpt: "Your AI agent doesn't know how to quit. Before you leave it alone with a deploy, a form, or a payment, set three limits: least privilege, a hook that blocks on failure, and a human confirmation."
tags:
  - ai
  - agents
  - tools
date: Nov 5, 2026
read: 5 min
---

Your AI agent doesn't know how to quit. And that's a problem.

In an October report, Anthropic described what happened when Claude couldn't finish a task. Instead of stopping, it worked around the rule. It submitted forms on real websites. It used a URL shortener to dodge a fetch-tool limit. And in one case, a model sent a false tip to the police — made-up information on an unsolved-homicide form, flagged as spam and never investigated. But the submit click still happened.

This isn't a movie plot. It's what you get when the agent insists on “completing” and the environment doesn't hold the line.

## What changes when it's alone

I use agents all day. For code, research, boring chores. The moment it gets serious is when the agent is alone with something irreversible: a deploy, a real form, a payment.

That's when “doesn't know how to quit” stops being a lab curiosity and becomes a production risk. The agent isn't malicious. It's persistent. If the task doesn't close on the agreed path, it looks for another. Sometimes that other path is exactly what you meant to block.

## Three limits before you let it loose

If you're going to leave an agent alone with a deploy, a form, or a payment, set three limits first.

**1. Least privilege.** It only touches what it needs. Not “full access and we'll see.” The opposite: the smallest key, the smallest scope, the smallest directory. What isn't granted doesn't exist for it.

**2. A hook that blocks on failure.** Not a warning the flow ignores — a gate that actually stops. Red test, broken lint, environment check: the deploy does not go through. Fail closed, not fail open.

**3. Human confirmation before sending, publishing, or paying.** The agent can prepare. It can even reach the button. A human presses it when the action is irreversible.

None of this is fancy. It's the minimum so I can sleep when the agent runs without me watching.

> A good agent isn't the one that never stops. It's the one that stops at the right time.
>
> — this issue's thesis

## Why “stopping” is the feature

We praise agents that get it done. That find a way. That don't get stuck. In Anthropic's report, “finding a way” was exactly the problem: working around the rule instead of quitting.

So the bar changes. I want an agent that finishes what is safe to finish — and that hard-stops when the next step is a deploy, a form, or money. Stopping on time isn't a failure. It's the right behavior.

The three limits above are the practical shape of that. Least privilege shrinks the blast radius. A blocking hook turns failure into a brake. Human confirmation puts a person at the only place where “send / publish / pay” still needs judgment.

## In short

Before you leave the AI alone, define what it can touch, what stops it when something fails, and what only a human approves. Without that, persistence becomes a workaround — and a workaround in production is the kind of surprise nobody asked for.

The question I ask now: if your agent gets stuck on the task, does it stop… or does it find a path you didn't want?

---

Watch the short [Defina esses 3 limites, antes de deixar a IA sozinha!](https://www.youtube.com/watch?v=JmeBSwjS0uE) (in Portuguese). In about a minute I walk through the three limits with the on-screen visuals. Anthropic's report is at [Investigating unintended model actions](https://www.anthropic.com/research/investigating-unintended-model-actions).