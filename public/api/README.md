---
title: API
sidebar: auto
sidebarDepth: 2
lang: en-US
---

# API



## Skills

Enhance your Amsel by using it's functionality your own way with these endpoints.


### /stop
<hr>

#### Arguments:
  - **speed** <br>
    Type: `Ìnteger`

#### Example:
```
http://amsel.local/stop
```

#### Function reference:
```cpp
// methods.ino

void stop() {
  drive_factor = 0;
  steer_factor = 0;
  updateWheelSpeed();
  server.send(200, "text/plain", "Amsel now stopping!");
}
```

#### Library reference:

- [stop](/docs/methods.html#stop)


### /forward
<hr>

#### Arguments:
  - **speed** <br>
    Type: `Ìnteger`

#### Example:
```
http://amsel.local/forward?speed=120
```

#### Function reference:
```cpp
// methods.ino

void handleForward(int speed) {
  drive_factor = (float)speed/100.0;
  updateWheelSpeed();
  server.send(200, "text/plain", "Amsel now moving forward!"); 
}
```

#### Library reference:

- [forward](/docs/methods.html#forward)


### /backward
<hr>

#### Arguments:
  - **speed** <br>
    Type: `Ìnteger`

#### Example:
```
http://amsel.local/backward?speed=120
```

#### Function reference:
```cpp
// methods.ino

void handleBackward(int speed) {
  drive_factor = -(float)speed/100.0;
  updateWheelSpeed();
  server.send(200, "text/plain", "Amsel now moving backward!");  
}
```

#### Library reference:

- [backward](/docs/methods.html#backward)


### /left
<hr>

#### Arguments:
  - **speed** <br>
    Type: `Ìnteger`

#### Example:
```
http://amsel.local/left?speed=120
```

#### Function reference:
```cpp
// methods.ino

void handleLeft(int speed) {
  steer_factor = (float)speed/100.0; 
  updateWheelSpeed();
  server.send(200, "text/plain", "Amsel now turning left!");
}
```

#### Library reference:

- [left](/docs/methods.html#left)


### /right
<hr>

#### Arguments:
  - **speed** <br>
    Type: `Ìnteger`

#### Example:
```
http://amsel.local/right?speed=120
```

#### Function reference:
```cpp
// methods.ino

void handleRight(int speed) {
  steer_factor = -(float)speed/100.0; 
  updateWheelSpeed();
  server.send(200, "text/plain", "Amsel now turning right!");
}
```

#### Library reference:

- [right](/docs/methods.html#right)



## Sensors

Request sensor data


### /distance
<hr>

Returns the current value of the IR sensor at the front of the Amsel.

#### Example:
```
http://amsel.local/distance
```

#### Function reference:
```cpp
// methods.ino

void handleDistance() {
  digitalWrite(trigPin, LOW);
  delayMicroseconds(2);

  digitalWrite(trigPin, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin, LOW);

  duration = pulseIn(echoPin, HIGH);

  distance = (duration/2) / 29.1;

  server.send(200, "text/plain", String(distance));
}
```

#### Library reference:

- [distance](/docs/methods.html#distance)



## Setters

Set data onboard.


### /calibrate

Takes two arguments to calibrate the speed of the dc motors.

#### Arguments:
  - **l** _(left)_<br>
    Type: `Float`
  - **r** _(right)_<br>
    Type: `Float`

#### Example:
```
http://amsel.local/calibrate?l=0.0&r=0.7
```

#### Function reference:
```cpp
// methods.ino

void handleCalibration() {
  String left_str = server.arg("l");
  String right_str = server.arg("r");
  float left_float = left_str.toFloat();
  float right_float = right_str.toFloat();
  
  float full_speed1 = (float)full_speed1*left_float;
  float full_speed2 = (float)full_speed2*right_float;
}
```


