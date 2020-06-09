---
tags: talks
layout: layouts/talk.html
title: Domain Driven UI
talkUrl: 'https://ndcoslo.com/talk/domain-driven-ui/'
speakers: [roman-sachse]
day: Thursday
time: 10:20 - 11:20
venue: Room 3
---
Domain Driven Design is a way of thinking about the needs of the customers first and putting an emphasis on their language, understandings and human interactions.

The outcome of this approach is mostly applied to the backend of applications because this is where most of the business logic resides, but a semantic domain model also benefits the UI design. Unfortunately these semantics are often lost in translation when transferred to the frontend because the impedance mismatch is to high. Therefore the users that are actually using the system will not profit as much as they could from your design. I will show you a functional approach that allows you to actually reuse your carefully crafted domain types and behaviour with ease by leveraging F# and the SAFE-Stack to combine CQRS/Event-Sourcing on the backend and the Elm architecture on the frontend with an overall messaging architecture.