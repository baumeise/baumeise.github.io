---
title: Amsel
sidebarDepth: 0
prev: /docs/methods
next: /api/
lang: en-US
---

# Amsel

## Parameter

### local_ip
  - Type: `String`
  - Default: `192.168.0.100`

### speed
  - Type: `Integer`
  - Default: `100`

## Creating an instance
  ```python
  # inits the amsel object and sets the request address and default speed
  amsel = Amsel("192.168.4.1", 120)
  ```

## Reference
```python
class Amsel(Connection, Lights, Utils):
  
  # Constructor
  def __init__(self, local_ip="192.168.0.100", speed=100):
    Connection.__init__(self, local_ip)
    Skills.__init__(self, speed)

  # Standard return method
  def __str__(self):
    return "A warm 'Griaß di!' from Amsel!"
```
<br><br>

**See also:**
- [Connection](/docs/classes/connection)
- [Skills](/docs/classes/skills)
- [Utils](/docs/classes/utils)