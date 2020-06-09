---
tags: talks
layout: layouts/talk.html
title: Welcome to the (state) machine
talkUrl: 'https://ndcoslo.com/talk/welcome-to-the-state-machine/'
speakers: [mauro-servienti]
day: Wednesday
time: 15:00 - 16:00
venue: Room 3
---
Stateless all the thing, they say. In the last few years we’ve been brainwashed: design stateless systems, otherwise they cannot scale, they cannot be highly available, and they are hard to maintain and evolve. In a nutshell stateful is bad. 

However complex software systems need to do collaborative processing, that is stateful by definition. Stateless myth busted! Collaborative domains deal with long business transactions and need to interact with distributed resources. The traditional distributed transactions approach, even if tempting, is a time bomb. This is when Sagas come into play. Sagas allow to model complex collaborative domains without the need for distributed transactions and/or orchestration across multiple resources. Join Mauro on a journey that aims to disclose what sagas are, how they can be used to model a complex collaborative domain, and what role they play when it comes to designing systems with failure and eventual consistency in mind. (It’s all right, I know where you’ve been)