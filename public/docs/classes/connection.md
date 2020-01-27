---
title: Connection
sidebarDepth: 0
prev: /docs/methods
next: /api/
lang: en-US
---

# Connection

## Parameter

### local_ip
  - Type: `String`
  
  Passed by Amsel class

## Reference

```python
class Connection(object):

  def __init__(self, local_ip):
    self.local_ip = local_ip
    self.local_address = "amsel.local"

  # Log into network
  async def login(self, ssid, passphrase):
    try:
        return await self.get("/login?ssid=" + ssid + "&pass=" + passphrase)
    except IOError:
        print("Something went wrong we could not connect you to the network!")

```

## Method Reference
- [login](/docs/methods.html#login)


**See also:**
- [Amsel](/docs/classes/amsel/)
- [Skills](/docs/classes/skills/)
- [Utils](/docs/classes/utils/)