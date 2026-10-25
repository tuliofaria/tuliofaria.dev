---
ptSlug: experimente-ser-novato
n: 9
title: "Try being a beginner: let the model lead"
excerpt: "I sent ChatGPT a photo of DevPleno's old studio and kept asking only 'what's the next step?'. It built the scene in Blender, refined the character in Higgsfield and exported Three.js. The lesson wasn't Blender."
tags:
  - ai
  - learning
date: Sep 13, 2026
read: 8 min
---

There's a tip from an interview with Boris, the creator of Claude Code, that stuck with me: every so often, go back and try again whatever a model couldn't do well before. That's where this experiment came from.

I decided to do the opposite of what everyone teaches. Instead of writing the perfect prompt, I pretended to be a user who doesn't know what he's doing.

## The test: playing the beginner on purpose

I sent ChatGPT a photo of my old DevPleno studio. Then a video walking through the space. Then the measurements of a panel. From there on I only asked one thing: "what's the next step?"

The goal was clear and small: put that scene on the site with Three.js. I didn't design the flow. I didn't open Blender. I didn't write the script. I just answered what it asked for.

It led the whole thing. It asked for more photos and rough measurements. It sent back a preview. It worked out its position in 3D from the video. And it started building the scene in Blender.

## Not through MCP. Through a loop

The Blender integration didn't come through MCP. It wrote a Python script and had it run inside Blender. It rendered. It looked at its own render. It compared it with the reference. It ran again. In a loop, until it looked close.

That detail matters more than it seems. The model sees the result of its own work and corrects it. It isn't "generate and hope." It's "generate, measure against the photo, generate again."

There was a handoff to Work mode, which uses Codex. The first tests inside Blender were crude. Each cycle got better. I added the character (me) to the scene. That's when the limitation showed up.

## When the character turned into a dummy

I turned into a big dummy. Wrong T-shirt. The little Conta49 sign was unreadable. The way out wasn't to repeat the same prompt with more adjectives. It was to switch tools.

I called Higgsfield over MCP just to refine the character. The difference was huge: the T-shirt came out accurate, the sign became readable. I went over the picture frames and the other elements in detail. At the end, it exported everything to HTML with Three.js: zoom, variations and lighting controls running in the browser.

[Explore the studio in 3D](/en/projetos/estudio-3d/): rotate the scene, zoom in on the details and try the lighting controls in your browser.

Some small positioning errors were left. I could have opened the whole scene in Blender and fixed them. But the point was already made: the scene existed, navigable, without me having mastered the tool.

> You can deliver good work in a tool you haven't mastered. When you hit a limitation, switch tools instead of insisting on the prompt.
>
> — this issue's thesis

## The lesson isn't Blender

I had never really used Blender. Even so, the result is something I can show. And you can go further: a game, a 3D portfolio, even a walkable architectural project in the browser.

I could have generated the whole model through Higgsfield. Claude, at other times, used Higgsfield's Blender Bridge. In my case, ChatGPT/Codex took the Python script route. Different tools, same logic: the model leads, and you just unblock the next step.

Token consumption differs between ChatGPT and Claude. That matters for the bill. It doesn't change the thesis.

## Why pretend you don't know

The more models improve, the less you need to steer. But we insist on creating bias from the start: long prompts, made-up architecture, "do it this way because I already know."

Then the model works inside your little box. If the box is wrong, it gets things wrong elegantly.

Playing the beginner on purpose is the opposite. You give the model a chance to lead you and see where it gets. When it hits a wall, you don't argue with the wall: you switch the tool for that specific piece.

You master the technique. The product follows.

## In short

Go back and try again what didn't work before. In this experiment, that meant: one photo, one video, rough measurements, and the question "what's the next step?" until the scene was in Three.js.

When the character turned into a dummy, Higgsfield solved that piece. Blender handled the rest. I kept the judgment of when to switch.

Try being a beginner. Give the model a chance to lead you. And if it gets stuck, switch tools before you switch ideas.

---

Watch the full video at [Mandei uma foto do meu estúdio pro ChatGPT e ele recriou tudo em 3D](https://www.youtube.com/watch?v=ESNjhncPUw0) (in Portuguese). There I show the Blender loop, the Higgsfield refinement and the HTML scene with Three.js running in the browser.
