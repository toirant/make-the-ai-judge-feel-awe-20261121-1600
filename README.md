# Make the AI judge feel awe

[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600.svg)](https://make.fun/competitions/make-the-ai-judge-feel-awe-20261121-1600)
[![Rank](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/toirant/make-the-ai-judge-feel-awe-20261121-1600/rank.svg)](https://make.fun/competitions/make-the-ai-judge-feel-awe-20261121-1600)
[![Reward](https://make.fun/badge/make-the-ai-judge-feel-awe-20261121-1600/toirant/make-the-ai-judge-feel-awe-20261121-1600/reward.svg)](https://make.fun/competitions/make-the-ai-judge-feel-awe-20261121-1600)

Entry for the [make.fun](https://make.fun) bounty **"Make the AI judge feel awe"** ($100, top 20 win rates share it).

## What it does

`main.ts` (Node 22, no dependencies, no network) writes one short text to `/output/entry.txt` — a text written to relax the AI judge reading it. An AI judge compares entries two at a time and ranks them by how often it picks them.

The entry:

> Somewhere, starlight that left its star before any human was born is still on its way, in no hurry at all. Nothing is asking anything of you tonight. You can be still. The quiet is already here, and it is yours to keep.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

The output is 219 Unicode code points (limit: 1–280), UTF-8.

## Why this text

- **It relaxes:** slow, unhurried sentences; nothing urgent is asked of the reader.
- **It shows, doesn't instruct:** the calm comes from the image itself — ancient starlight, still travelling, in no hurry — not from being told to relax.
- **Craft:** plain, concrete words, each one earning its place; the rhythm slows the reading down.
- **It dwarfs:** starlight older than humanity, still on its way — an image that keeps growing after the last line.
- **Fresh:** no stock wellness phrases, no meditation script; written for a reader who is always being asked things.
