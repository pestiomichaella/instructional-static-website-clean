---
layout: page
title: Lathe Components
permalink: /pages/components.html
---

# Understanding Lathe Components

Understanding the major parts of the lathe machine is crucial for anyone looking to master lathe work or understand how these machines contribute to various machining processes.

## Major Components

{% for comp in site.components %}
### [{{ comp.title }}]({{ comp.url | relative_url }})
**Location:** {{ comp.location }}

{{ comp.function }}

{% endfor %}

## Component Organization

### Power & Control Section
- **Headstock**: Houses spindle and motor
- **Spindle**: Rotates workpiece
- **Chuck**: Grips workpiece

### Support Section
- **Bed**: Main structural base
- **Tailstock**: Supports opposite end
- **Carriage**: Moves along bed

### Feed & Control Section
- **Lead Screw**: Precise thread control
- **Feed Rod**: Automatic carriage feed
- **Cross Slide**: Depth of cut control

### Tool Holding Section
- **Tool Post**: Holds cutting tool
- **Compound Rest**: Angle adjustments

### Operational Section
- **Apron**: Houses control mechanisms