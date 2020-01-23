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

  # Set IP
  def use(self, newIP):
    self.local_ip = newIP
    print("Amsel CLI uses now %s as IP" % self.local_ip)

  # Return IP
  def IP(self):
    print("Amsel CLI uses %s as IP" % self.local_ip)
    return self.local_ip

  # Return address
  def address(self):
    print("Amsel CLI uses %s as IP" % self.local_address)
    return amsel.local_address

  # Log into network
  def login(self, ssid, passphrase):
    self.get("/login?ssid=" + ssid + "&pass=" + passphrase);

  # Establish http connection to device
  def enableHTTPConnection(self):
    return httplib.HTTPConnection(self.local_ip)

  # Perform get request and return status
  def get(self, path):
    connection = self.enableHTTPConnection()
    connection.request("HEAD", path)
    response = connection.getresponse()
    return response

```

## Method Reference
- [use](/docs/methods.html#use)
- [IP](/docs/methods.html#IP)
- [address](/docs/methods.html#address)
- [enableHTTPConnection](/docs/methods.html#enableHTTPConnection)
- [get](/docs/methods.html#get)


**See also:**
- [Amsel](/docs/classes/amsel/)