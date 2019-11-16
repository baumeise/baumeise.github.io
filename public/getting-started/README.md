---
title: Getting started
sidebar: auto
sidebarDepth: 2
next: /docs/
lang: en-US
---

## Prerequisites

### Git CLI
Follow the [installation guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) on the git website.

### Arduino IDE
Go to [arduino.cc](https://www.arduino.cc/en/Main/Software) and download the latest version of the Arduino IDE.

### Libraries for Arduino IDE
- ESP32 Arduino tooling
- ESPmDNS
- ArduinoOTA

## Getting Started

### Clone the firmware

Execute the following in your terminal
``` sh
# go to your desired directory
cd /path/to/your/directory/

# clone into repository
git clone git@github.com:moritzgvt/amsel.git
```

### Upload data

1. Open the `amsel.ino` file with the arduino IDE
1. Setup tools
1. Upload the Amsel firmware

### Connect to device

Follow the instructions on the builtin display.

### Usage
Get [amselpy](https://github.com/moritzgvt/amselpy) library, then:
``` python
# import library
from amselpy import Amsel

# create an instance
amsel = Amsel()

# set request adress
amsel.use("192.168.0.100")

# control movements
amsel.forward()
amsel.sleep(5)
amsel.stop()
```

## Next steps

Start playin' around! You can find further information in the [documentation](/docs/).