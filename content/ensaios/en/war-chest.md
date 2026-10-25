---
ptSlug: verba-de-guerra
n: 2
title: "A war chest: how to stop getting stuck on cost and learn a new technology"
excerpt: "I spent two months going nowhere trying to learn AI content generation for free. What got me moving was setting three resources: money, time and consistency."
tags:
  - ai
  - learning
date: Aug 22, 2026
read: 9 min
---

There's a specific kind of stuck that almost everyone who works in tech has been through: you want to learn something new, you sit down to try it, you hit the cost of the tool, and you go back to looking for a way to do it for free. An open source version. The cheapest model. The provider's API directly, which seems to give you more control. For me, that lasted two months.

## The problem wasn't the money

I wanted to learn how to generate visual content with AI: video, images, characters. And every time I went to try it, the same thing happened. The tool cost R$ 50, R$ 100, and I backed off. I tried image generation and wanted to do everything straight through Google's API, because I thought I'd have more control. I tried audio and got stuck on Suno's R$ 50. I tried voice and got stuck on ElevenLabs. Always the same sentence in my head: "there must be a good way to do this for free." Two months without progress. Not for lack of time, not for lack of tools, but because of a constraint I made up myself.

## The three resources

What got me moving wasn't a better tool. It was stopping to define three things before going on.

The first is the financial resource: how much I can invest so that, if I lose that money, I won't be upset about it. In my case, R$ 500 a month. The amount itself doesn't matter; it could be R$ 100, it could be R$ 20. What matters is having a defined number. That's where the turn came: that money stopped being an expense and became a test budget, a learning budget. When a tool asked for 5 dollars in credits, I didn't think twice anymore, because it was already inside what I had agreed with myself.

The second is the time resource: when exactly I'm going to do this. Before, my tests were scattered, one day at one hour, another day at another. I started blocking an hour and a half every Saturday morning, from 10:00 to 11:30, which was when I was calmest.

The third is consistency: how often it repeats. In my case, every Saturday, no exceptions. When I didn't finish what I wanted to test, I moved it to the next Saturday, and that was fine. With all three defined, it gets much easier to decide what you consider "done" for that goal.

## Set the goal before the budget

This is what separates investing from burning money. My goal was to generate visual content with AI that didn't look like AI, to the point where I wouldn't be embarrassed to publish it as a real ad. It's a qualitative criterion, and I don't usually recommend goals like that, because you can't answer yes or no clearly. But it worked because it had a practical test built in: would I publish this?

## The math almost nobody does

If you work out what an hour of your work costs, you'll reach an uncomfortable conclusion. In my case, the R$ 500 cost a lot less than one of my hours. If you work for clients abroad, an hour is worth even more than that.

> I was spending the expensive resource to save the cheap one.
>
> — this issue's thesis

Ten hours researching a free option cost far more than the whole learning budget. Time is almost always the most expensive resource, but it doesn't show up on the bill, so it's easy to pretend it's free. Obviously this depends on each person's finances. But when in doubt, time wins.

## The thermometer: share every cycle

At the end of each Saturday session, I sent the result to a business partner or a friend. I didn't mention the experiment, or the budget, or how much I'd spent. I just wanted the raw reaction: what do you think of this? That's how I kept adjusting things until I could actually publish. Having someone who keeps you honest is worth more than any metric you invent on your own.

## What came out the other side

The first result was UGC-style ads. I generated a character from the profile of my product's typical customer, leaning heavily on Claude to design those traits: a pizzeria owner with bags under his eyes because he works until the early morning, for example. Light touches, nothing too striking. The person doesn't exist, but the creative became a real ad and converted well. The video was generated in Higgsfield, and the edit took care of the details, like an overlay to hide a continuity error.

Then came the voice. What gives away an AI video the most isn't the image; it's that all the voices sound the same. I cloned my voice in ElevenLabs. Since it's mine, I know exactly where it's being used, and I haven't shared it with anyone else. The flow became: I generate the video, take the audio, go back to ElevenLabs and run a voice changer that swaps it to my voice. The video stays in sync, which is the biggest challenge in any dubbing, but with my voice. It worked in English too, and it came out with a slight trace of my accent, which helps: it really sounds like me talking.

The assembly part became code. I asked Claude to generate the scripts that produce the images, the captions and the video with Remotion, so I could render later. With that, I can produce the horizontal version, the vertical one, shorts or the full video from the same base. It even balances still images with B-roll in the transitions between scenes.

A trick that saves hours: if you try to generate the audio all at once, the voice keeps degrading until it turns into noise. Stretching to a minute is already a lot. The fix was asking Claude to generate it file by file, one small piece of audio for each section of the video, and then the script stitches it all together.

## A programming lesson generator

This was the test that surprised me most. I wanted to know if the same structure would work for explaining code. I set up a project from scratch, with a Vite client, an Express API and a Postgres database. Everything that happens inside the video is generated; it isn't my screen. Claude also created the scripts and container setup.

The only thing I need to write to generate one of these lessons is a Markdown file: course, title, language, layout, the scenes in sequence, the code snippets and what will be said. That makes generation much more predictable. The workspace stores the key moments of the lesson and saves the exact state of the files at each one, so viewers can jump back to "the moment we create the database connection" and see what the code looked like at that point. And since everything starts from the Markdown, you can translate the file and generate the same lesson in other languages, with the same voice.

## Two tips so the character doesn't look like AI

Ask for an imperfect person in the prompt. Don't aim for 100%. Ask for small details, small imperfections. That's what makes viewers believe it isn't AI.

And avoid very distinctive features. A common mistake is asking for a tattoo on the arm, and keeping that stable across generations is much harder than keeping a beard. Pick traits the model can reproduce consistently.

## When this strategy doesn't make sense

When you don't have a clear goal. Without direction, you'll test anything and burn the budget for nothing. The next step has to take you toward that specific goal. Then it becomes obvious that the R$ 500, or R$ 100, or R$ 20, or R$ 5, is bringing you closer to the result you want. A budget without direction is just a more organized way to waste money.

## How the spending ended up

At first I tried Fal AI, which lets you call the API directly. In the end, what helped most was using Higgsfield over MCP. Later I found out Minimax isn't that expensive and, instead of ElevenLabs, I switched to using Minimax directly, and I even found the voice results more interesting.

One last thing that helps more than it seems: I have a separate card with a low limit just for this. It's called "AI Experiments." That way I run the tests without mixing them with everything else and without any risk of breaking the bank.

## In short

If you're spinning your wheels trying to learn something and something is snagging, whether it's cost or anything else, define your resources before you keep trying. How much time do you have? How much money can you put in? How consistently will you do it?

Set up a war chest and learn without holding back. Your time is more expensive than the subscription you don't want to pay for.

---

Watch the full video at [Verba de guerra](https://www.youtube.com/watch?v=tIr-pBTVsp8) (in Portuguese). There I show each of these results on screen: the ads, the English video, the lesson generator running and the same lesson in Spanish.
