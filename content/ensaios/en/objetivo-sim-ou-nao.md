---
n: 4
title: "If the answer isn't yes or no, you don't have a goal"
excerpt: "I gave Claude Code a goal and walked away. 53 minutes later it had hit 100 on PageSpeed across four pages. The interesting part wasn't the result. It was what the harness forced me to define first."
tags:
  - productivity
  - ai
date: Sep 5, 2026
read: 8 min
---

I ran a `/goal` in Claude Code asking for one thing only: iterate until every PageSpeed score was 100, on the home page, the blog, a guide and a blog post on one of my SaaS products. I left it running and went to do something else.

Fifty-three minutes later it had hit 100 in performance, accessibility, best practices and SEO, on mobile and desktop, across all four pages.

The result is nice. It's not the point of this essay. The point is what I noticed while it was running: a goal inside a harness works exactly like a goal in life. And the harness forces me to do something almost nobody does outside of it.

## The loop is always the same

When you give Claude Code a goal, this is what happens. It does something. It checks whether that was achieved. If not, it goes back and tries again. It stays in that loop until it gets there.

Now swap "it" for "you" and tell me how that's different from losing weight, learning to code or improving your English. It's the same loop. Do, measure, repeat.

The difference is in the measuring step. Claude Code can't run without it. You can. And that's exactly why you can spend six months "improving your English" without knowing whether you improved.

## The question has to answer yes or no

For the loop to work, the question in the middle has to allow a single answer: yes or no. "I'm at 80%" doesn't count. "Almost there" doesn't count. "I think I'm making progress" doesn't count.

Look at what happens when you apply this to the goals we usually write down. "I want to build a SaaS": what does it mean for your SaaS to be done? What does ready mean? What does launching mean? "I want to lose weight": down to what? What's the weight that answers yes? "I want to earn more": what's the number? What exactly will it let you do? "I want to change jobs": for what reason? If it's salary, how far will you go in the negotiation? If it's the environment, what makes an environment healthy for you?

In every case, what you had before was an intention, not a goal. There was no measuring step. And without that step you don't run a loop. You move around and hope.

> Without a question that answers yes or no, you don't have a goal. You have an intention.
>
> — this issue's thesis

## The real example, start to finish

The prompt I sent was basically this: use browser-harness to run the performance tests at web.dev/measure on my site and iterate until every score is 100. Do it for the home page, the blog, and at least one guide and one blog post.

The stopping criterion is explicit and binary. All scores at 100? No: iterate again. All scores at 100? No: iterate again.

It went through six versions to get there. And it did something I thought was great: it ran the same page several times. Not because it was lost. Because it knows PageSpeed measurements vary between runs. So it waited for the numbers to settle before considering the criterion met.

That detail separates a good criterion from a naive one. "Hit 100 once" isn't the same as "hits 100 consistently". A model that knows the domain knows that. A poorly defined metric doesn't.

In the end: 100 in all four categories, on all four pages, on mobile and desktop. Something that used to take a lot of work.

## The tools I used

I was in the T3 Code interface, but underneath it's Claude Code. `/goal` comes from Claude Code. Browser Harness is what gives it access to a real browser: you copy the prompt from their site, paste it into the harness and it installs itself. The measurement came from web.dev/measure, the short URL for PageSpeed.

What sells me on Browser Harness is that it uses the tabs already open in your browser. It can tell which tabs and profiles are open and manage them. I don't need to create a specific tab group like with the Claude extension for Chrome. Underneath, it talks to Chrome over the same protocol Playwright uses. In practice, Claude writes shell and Python and tells the harness to run it.

It's not perfect. Sometimes it doesn't notice the tab is already open and keeps opening new ones. And there's a real annoyance: it steals the browser's focus all the time. If you're working in another profile, it pulls the focus back. That's why I run this kind of test on another machine. I leave the work going there and keep using mine normally.

## The part almost nobody defines

This is the most important part of the essay, and the one that has the least to do with AI.

You defined the goal. You defined the stopping criterion. One thing is missing: how many times will you repeat the loop before giving up?

If you're trying to sell your SaaS, you're in a loop. Prospect, pitch, don't close, go back. How many times will you run that before changing strategy or stopping?

If you don't decide that ahead of time, the difficulty decides for you. And then you stop at the worst possible moment: out of exhaustion, on a bad day, and not because of a decision you made with a clear head.

This is an important conversation to have with yourself and, above all, with your business partner if you have one. How long are we going to test this? What's the number where we stop? What's the number that says we made it?

Defining this upfront isn't pessimism. It's the only way the decision to stop, or to keep going, is yours and not your exhaustion's.

## A general goal isn't enough

The problem is almost never not having a goal. It's having only the general goal.

"Improve my English" is great as a direction and useless as a criterion, because there's no yes-or-no question on top of it. What's missing is the definition. What does improving your English mean? Passing a specific test? Getting through a 30-minute meeting without freezing up? Watching a talk without subtitles?

Pick any one of those and you get the measuring step. Without picking any, you keep looping forever without knowing whether you're making progress. That's much worse than never starting, because it burns energy and gives you the feeling of movement.

## In short

Whether it's Claude Code, Codex or life: define the goal, the general direction. Define the stopping criterion, the question that answers yes or no. Define how many iterations you'll accept before giving up.

Without the criterion, you don't have a goal, you have an intention. Without the iteration limit, the difficulty decides when you stop.

And if you think this is too much rigor for real life, remember: it's exactly what we demand of a machine before letting it work alone for 53 minutes.

---

Watch the full video at [Definindo objetivos](https://www.youtube.com/watch?v=s9InqgabNzg) (in Portuguese). There I show the goal running end to end, the measurements page by page and the final result on screen.
