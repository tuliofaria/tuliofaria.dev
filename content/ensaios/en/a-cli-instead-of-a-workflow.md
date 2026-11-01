---
ptSlug: uma-cli-em-vez-de-um-workflow
n: 15
title: "A CLI instead of a workflow"
excerpt: "I had invoices stuck in Asaas across more than one company. Instead of going back to the workflow I never remember how I built, I asked my agent to write a CLI. It did it in a single run."
tags:
  - ai
  - agents
  - tools
date: Nov 1, 2026
read: 5 min
---

Everyone is saying code got cheap. I decided to test that on a very annoying, very real problem: a pile of invoices stuck in Asaas, across more than one company.

I already had an n8n workflow for this. The problem is that every time I need it, I've forgotten how I built it. I open it, look at the nodes, try to remember what each one did. This time I did it differently: I decided to build an Asaas CLI. Except I didn't write it. My agent did.

## Why not use an existing one

The obvious first question is whether an Asaas CLI already exists. It does, from the community. But Asaas is a bank. It's where money comes in and goes out of my companies.

I didn't want to put that account's credentials into a third-party tool I don't know from the inside. I wanted something built by my own agents, where I control what has access to the account and can read the code if I need to.

When writing costs little, that trade-off changes. Before, "build it yourself" was too expensive for a problem this size. Now it's an afternoon, sometimes less.

## From search to goal

I started where a lot of people start, on Google itself, in AI mode. The question was simple: Go or TypeScript for a CLI? I went with Go, because it's easy to install. One binary and you're done.

Then came the part I find most interesting. Instead of chatting with the agent step by step, I asked for a goal: an objective prompt for it to run everything in a single pass, without me interacting in the middle.

And I refined that goal right there, before handing it to the agent:

- multi-account in the kubectl style, because I have more than one company;
- credentials stored in the home directory;
- `auth add` and `auth list` commands to manage the accounts;
- and `gh`, the GitHub CLI, as the reference for what a good CLI looks like.

That last point is worth a lot. Instead of describing in detail how I wanted the subcommands, the help and the messages, I pointed to a tool I already use every day that does this well. The agent knows `gh`. The reference carries the whole pattern.

## One run

The agent ran everything in one execution. I compiled the binary and, from there, I could do what I needed. Later I also asked for invoice management, which was the reason for all of this.

I made the repository and the goal prompt public. But with a warning I repeat in the video: this isn't production-ready. It's a tool for me, built for my problem.

> When code gets cheap, the custom-made tool stops being a luxury. The expensive part becomes knowing how to ask.
>
> — this issue's thesis

## A CLI other agents can use

There's an effect I hadn't planned and that I think matters most. A well-made CLI describes itself. You run `--help` and it tells you what it does, which commands exist, which parameters each one takes.

That's useful for me, but it's even more useful for agents. Any other agent I have can figure out how to use this CLI on its own, just by reading `--help`. I don't need to write an integration or explain the API again. The Asaas API docs went into building it. After that, whoever uses it only needs the tool itself.

An n8n workflow doesn't have that. It's great for whoever built it, as long as they remember how. A loose script doesn't either: it works, but nobody knows it exists or how to call it.

## When I'd choose a CLI

Not always. But I've started looking at some problems differently.

If it's something I do every now and then, in more than one context, and it touches a service with an API, I think of a CLI first. It lives on my machine, I control the access, and any agent can use it.

The other change is a habit. The search I was going to do anyway, on Google, ChatGPT or Claude, can end in a goal. And the goal ends in code running on my machine.

## In short

Invoices stuck in Asaas, an n8n workflow I never remember how it works, and community CLIs I didn't want to plug into a bank. I asked Google's AI mode to help me pick the language and put together a goal: Go, kubectl-style multi-account, credentials in home, `auth add` and `auth list`, and `gh` as the reference.

The agent did it in one run. I compiled it and used it. And the CLI also became a tool other agents discover through `--help`.

The question I'll leave you with: what everyday problem would you solve with a custom-made CLI?

---

Watch the full video at [I built an Asaas CLI with AI without writing a line of code](https://www.youtube.com/watch?v=TOytDOC432w) (in Portuguese). There I show the conversation in Google's AI mode, the original and updated goal, the CLI running with multiple accounts, and invoice management. The repository and the goal prompt are at [tuliofaria/asaas-cli](https://github.com/tuliofaria/asaas-cli).
