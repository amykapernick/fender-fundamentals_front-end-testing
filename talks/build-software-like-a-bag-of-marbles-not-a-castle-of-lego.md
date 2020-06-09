---
tags: talks
layout: layouts/talk.html
title: Build software like a bag of marbles, not a castle of LEGO
talkUrl: 'https://ndcoslo.com/talk/build-software-like-a-bag-of-marbles-not-a-castle-of-lego/'
speakers: [hannes-lowette]
day: Thursday
time: 13:40 - 14:40
venue: Room 10
---
If you have ever played with LEGO®, you will know that adding, removing or changing features of a completed castle isn’t as easy as it seems. You will have to deconstruct large parts to get to where you want to be, to build it all up again afterwards. Unfortunately, our software is often built the same way. Wouldn’t it be better if our software behaved like a bag of marbles? So you can just add, remove or replace them at will?


Most of us have taken different approaches to building software: a big monolith, a collection of services, a bus architecture, etc. But whatever your large scale architecture is, at the granular level (a single service or host), you will probably still end up with tightly coupled code. Adding functionality means making changes to every layer, service or component involved. It gets even harder if you want to enable or disable features for certain deployments: you’ll need to wrap code in feature flags, write custom DB migration scripts, etc. There has to be a better way!

So what if you think of functionality as loose feature assemblies? We can construct our code in such a way that adding a feature is as simple as adding the assembly to your deployment, and removing it is done by just deleting the file. We would open the door for so many scenarios!

In this talk, I will explain how to tackle the following parts of your application to achieve this goal: WebAPI, Entity Framework, Onion Architecture, IoC and database migrations. And most of all, when you would want to do this. Because… ‘it depends’.
