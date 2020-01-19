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

  ```python
  # inits the amsel object and sets the request address
  amsel = Amsel("192.168.4.1")
  ```

## Reference
```python
class Amsel(Connection, Lights):
  
  # Constructor
  def __init__(self, local_ip="192.168.0.100"):
    Connection.__init__(self, local_ip)
    Lights.__init__(self)

  # Standard return method
  def __str__(self):
    return "A warm 'Griaß di!' from Amsel!"
```

**See also:**
- [Connection](/docs/classes/connection)