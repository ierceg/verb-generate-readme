---
layout: nil
---

{%= section("header") %}
{%= ifExists(["docs/demo.gif", "demo.gif"], section("demo.md")) %}
{%= ifExists("example.gif", section("example.md")) %}

## Table of Contents
<!-- toc -->

{% body %}

## About
### Related projects
{%= section("related", related(verb.related.list)) %}

{%= section("community") %}

### Contributing
{%= include("contributing") %}

### Running tests
{%= maybeInclude("coverage") %}
{%= include("tests") %}

### Author
{%= includeEither("authors", "author") %}

### License
{%= copyright({linkify: true, prefix: "Copyright", symbol: "©"}) %}
{%= license %}

***

{%= include("footer") %}

{%= reflinks(verb.reflinks) %}
