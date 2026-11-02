---
ptSlug: observar-antes-de-automatizar
n: 16
title: "Watch before you automate"
excerpt: "Everyone wants to put a bot on WhatsApp. I think the first step is a different one: see how your team already replies today, how long it takes, and whether they follow the way you agreed on."
tags:
  - business
  - ai
  - tools
date: Nov 2, 2026
read: 5 min
---

Almost every conversation I have about WhatsApp and customer support starts in the same place: how do we get an AI to reply. It's a fair question. But I've noticed it usually skips a step.

Before you automate support, do you know how your team replies today? How long does a customer wait for the first reply? How many messages never get an answer? Is the person on the other end following the way of handling customers you agreed on?

In most small companies I know, nobody knows. Support happens on someone's phone, in the WhatsApp Business app, and whatever happens there disappears.

## You can't improve what you can't see

The problem with automating without looking is that you automate a process you don't understand. If the bottleneck is time to first reply, a bot fixes it. If the problem is that nobody asks what the customer needs before sending the price, a bot just repeats the mistake faster.

And there's a cost few people count: changing how you do support affects the team. Taking people off their phones, switching tools, putting a robot up front. Sometimes it's worth it. But it's a big decision to make in the dark.

## An app that only watches

That's what led me to build the Conversation Analyzer, an open source example app on top of PipesBot. The idea is simple: it connects a WhatsApp Business number and only observes. It never sends a message.

The team keeps replying from the app on their phone, the way they always have. Thanks to coexistence, replies sent from the phone also arrive as a webhook (`smb_message_echoes`), so the app sees both sides of the conversation: what the customer sent and what the team answered.

From that you get, per conversation, time to first reply, average reply time, and how many times the customer was left talking alone. And with an OpenRouter key, an AI score that says whether the conversation followed the methodology you defined.

Nobody had to switch tools for any of this.

> Before you put an AI on replying, put one on watching. You can only automate well what you can already see.
>
> — this issue's thesis

## What changes when you can see it

Once the number shows up, the conversation with the team changes. It stops being "I think we're slow" and becomes "first reply is taking this long at this time of day". It stops being an opinion about how people handle customers and becomes a score, conversation by conversation, against a standard everyone knows.

And the decision to automate gets better. Maybe you find out the team replies fast and well, and all that's missing is covering the night shift. Maybe you find out the problem is one specific step of the methodology nobody follows. Then you know what the bot needs to do, and you can measure whether it does better than the person.

Watching has another advantage I like a lot: it's reversible. Nothing changes for the customer, nothing changes for the team. If it doesn't help, you turn it off.

## Summing up

The urge to automate WhatsApp is strong, and it makes sense. But the first step I recommend is more modest: measure how support happens today. Time to first reply, average reply time, unanswered messages, and whether the team follows the agreed way.

With that in hand, automating stops being a bet and becomes a decision based on what you saw.

So here's the question: do you know how long your customers wait for a first reply today?

---

Watch the video at [Monitor Your Team's WhatsApp Replies (Response Time + AI Score) | PipesBot](https://www.youtube.com/watch?v=Taw8-UpMCwk). There I show the app connecting a number, a reply sent from WhatsApp Business on the phone, and the metrics showing up. The code is at [pipes-bot-examples/conversation-analyzer](https://github.com/pipes-bot/pipes-bot-examples/tree/main/conversation-analyzer).
