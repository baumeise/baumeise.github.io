---
title: Skills
sidebarDepth: 0
prev: /docs/methods
next: /api/
lang: en-US
---

# Skills

## Reference
```python
class Skills():

  def __init__(self, speed):
    self.speed = speed

  # Define movement functions.for
  def forward(self, speed=0):
    if not speed: speed = self.speed
    endpoint = "/forward?speed=%s" % speed
    response = self.get(endpoint)
    return response.status_code

  def backward(self, speed=0):
    if not speed: speed = self.speed
    endpoint = "/reverse?speed=%s" % speed
    response = self.get(endpoint)
    return response.status_code

  def left(self, speed=0):
    if not speed: speed = self.speed
    endpoint = "/left?speed=%s" % speed
    response = self.get(endpoint)
    return response.status_code

  def right(self, speed=0):
    if not speed: speed = self.speed
    endpoint = "/right?speed=%s" % speed
    response = self.get(endpoint)
    return response.status_code

  # Stop movement
  def stop(self):
    endpoint = "/stop"
    response = self.get(endpoint)
    return response.status_code

  # Infinite run with obsticle avoidance
  def go(self, speed=100, duration=-1, proximity=30):
    start = time.time()
    now = time.time()

    try:
      while (now - start) < duration or duration == -1:
        self.forward(speed)
        distance = self.getDistance()
        if distance:
          if int(distance) < int(proximity):
            obsticle = True
          else:
            obsticle = False

          if obsticle:
            self.stop()
            randomDirection = random.randint(0, 1)
            randomDuration = random.random()*1
            if randomDirection:
              self.right()
            else:
              self.left()
            self.sleep(randomDuration)
            self.stop()
        else:
          print("Miss")
        self.sleep(0.1)
        now = time.time()
    except KeyboardInterrupt:
      self.stop()
      print("Wow what a run!")

  # Print a message to the display
  def print(self, text):
    endpoint = "/left?string=%s" % text
    response = self.get(endpoint)
    return response.status_code

  # Clear the display
  def clear(self):
    endpoint = "/print?string="
    response = self.get(endpoint)
    return response.status_code
```

## Method Reference

- [forward](/docs/methods.html#forward)
- [backward](/docs/methods.html#backward)
- [left](/docs/methods.html#left)
- [right](/docs/methods.html#right)
- [stop](/docs/methods.html#stop)
- [go](/docs/methods.html#go)
- [print](/docs/methods.html#print)
- [clear](/docs/methods.html#clear)

**See also:**
- [Amsel](/docs/classes/amsel)
- [Connection](/docs/classes/connection)
- [Utils](/docs/classes/utils)