---
layout: page
title: Common Operations
permalink: /pages/operations.html
---

# Lathe Machine Operations

A lathe machine is incredibly versatile and can perform many different operations. Each operation transforms the workpiece into the desired shape, demonstrating the lathe's capability to perform multiple tasks with precision.

## Available Operations

{% assign sorted_ops = site.operations | sort: "order" %}
{% for op in sorted_ops %}
### [{{ op.title }}]({{ op.url | relative_url }})
**Difficulty:** {{ op.difficulty | capitalize }}

{% endfor %}

## Quick Overview

### Cutting Operations
- **Turning**: Removing outer material to create cylindrical shapes
- **Facing**: Cutting the end of workpiece for flat surfaces
- **Boring**: Enlarging existing holes with precision
- **Parting**: Cutting pieces off from the main workpiece

### Threading & Texture
- **Threading**: Creating precise screw threads
- **Knurling**: Creating textured grip surfaces
- **Grooving**: Creating channels and grooves

### Specialized Operations
- **Drilling**: Creating holes in the workpiece
- **Taper Turning**: Creating conical shapes
- **Chamfering**: Cutting beveled edges
- **Forming**: Creating complex profiles
- **Polishing**: Enhancing surface finish
- **Reaming**: Finishing holes to precise size

## Operation Selection Guide

The operation you choose depends on:
- **Workpiece Material**: Metal, wood, or plastic
- **Desired Shape**: Cylindrical, conical, or complex profile
- **Accuracy Required**: General or precision
- **Surface Finish**: Rough or polished
- **Production Volume**: Single part or batch