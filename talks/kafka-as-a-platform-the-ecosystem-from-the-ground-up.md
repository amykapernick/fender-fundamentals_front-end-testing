---
tags: talks
layout: layouts/talk.html
title: 'Kafka as a Platform: the Ecosystem from the Ground Up'
talkUrl: 'https://ndcoslo.com/talk/kafka-as-a-platform-the-ecosystem-from-the-ground-up/'
speakers: [robin-moffatt]
day: Thursday
time: 11:40 - 12:40
venue: Room 7
---
Kafka has become a key data infrastructure technology, and we all have at least a vague sense that it is a messaging system, but what else is it? How can an overgrown message bus be getting this much buzz? Well, because Kafka is merely the center of a rich streaming data platform that invites detailed exploration.

In this talk, we’ll look at the entire streaming platform provided by Apache Kafka and the Confluent community components. Starting with a lonely key-value pair, we’ll build up topics, partitioning, replication, and low-level Producer and Consumer APIs. We’ll group consumers into elastically scalable, fault-tolerant application clusters, then layer on more sophisticated stream processing APIs like Kafka Streams and ksqlDB. We’ll help teams collaborate around data formats with schema management. We’ll integrate with legacy systems without writing custom code. By the time we’re done, the open-source project we thought was Big Data’s answer to message queues will have become an enterprise-grade streaming platform, all in 60 minutes.