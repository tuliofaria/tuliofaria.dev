---
n: 13
title: "The limit is how much you ask"
excerpt: "I set out to reverse engineer an Android app and ended up with Claude Code making my phone faster. The tool was already there. What was missing was the question."
tags:
  - ai
  - claude-code
  - productivity
date: Oct 18, 2026
read: 6 min
---

You know when you set out to do one thing and stumble onto another along the way? That's exactly what happened.

I was testing REA, Reverse Engineer Anything. The idea was simple: take the APK of an Android app and see what I could figure out from it. I connected the phone to the computer over ADB, started the test... and the phone was way too slow. Annoyingly slow.

Then came the question that changed the course of the day: what if Claude Code made this phone faster?

## The question I wouldn't have asked

Notice the detail. ADB was already connected. Claude Code was already open. None of it was new. I had just never thought of putting the two together to solve a problem that wasn't about code.

I have a few test phones here. None of them is my everyday phone. They're exactly the kind of device you leave lying around, slow, because "it's just for testing". And it was on that forgotten phone that the question made a difference.

I made it clear to Claude: the phone is mine, I want to optimize it. From there it led the way. It turned on developer mode over ADB, cut animations to 0.5x, disabled bloatware and limited heavy apps running in the background.

None of this is magic. Anyone who knows Android knows these tweaks exist. The difference is that I didn't need to know them by heart. I needed to ask.

## The 2017 phone that was never wiped

The most fun test was on a phone from 2017. Never wiped. Years of accumulated stuff.

Before deleting anything, a backup. The photos went to the Mac. Then a 5.6 GB Telegram folder showed up, and it went away. And 15 discontinued apps came off the device.

The result was the kind of thing you feel on the first tap: the phone got much faster.

And here's the point I think matters. The AI did the work, but the order of things matters. Backup before deleting. Knowing what each app is before removing it. You're still the one who decides whether that folder can go. AI speeds up the path; it doesn't take away your responsibility to look before you confirm.

## Universal Android Debloater with Claude alongside

There's a tool I like for this: Universal Android Debloater. It lists the packages installed on the device and lets you remove the ones you don't want.

The problem is that the list is full of package names nobody understands. That's where Claude comes in. You export the list of installed packages and send it over. It explains what can be removed and, more importantly, why.

That combination is what I liked most. The tool does the mechanical work. The AI translates. And you decide with information, instead of uninstalling in the dark and hoping nothing breaks.

## Not everything worked

I tried something similar on the iPad. It didn't work.

I think it's good to say that. Not every question will pan out, and that's fine. The cost of asking is low. Sometimes the answer is "you can't". You find that out in minutes, not after a whole afternoon reading forums.

> Today, with AI, the tool is almost never the bottleneck. The limit is how much you ask, and the care to look before you confirm.
>
> — this issue's thesis

## Why this matters for people who don't code

I set out to do reverse engineering and ended up optimizing a phone. That says a lot about how I've been working: AI has become a partner that's up for going places I hadn't even planned.

And that's why I believe in non-programmers building apps. What separates the people who do from the people who don't is less and less about knowing the right command by heart and more and more about having the nerve to ask "what if...?" and the patience to check what comes back.

## In short

I was testing REA to reverse engineer an Android app, the phone was slow, and I asked Claude Code if it could make it faster. It walked me through developer mode, animations at 0.5x, removing bloatware and limiting background apps.

On the 2017 phone: photos backed up to the Mac, 5.6 GB of Telegram deleted and 15 discontinued apps removed. With Universal Android Debloater: export the package list and ask Claude to explain each one. On the iPad, no luck.

The lesson isn't about Android. It's about the habit of asking outside your little box and keeping your judgment at the end.

---

Watch the full video at [I asked Claude Code to make my Android faster (and it worked)](https://www.youtube.com/watch?v=gxNip9hwzx0) (in Portuguese). There I show REA, developer mode over ADB, the before and after of the 2017 phone, Universal Android Debloater with Claude, and the attempt on the iPad.
