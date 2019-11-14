---
title: Getting started
sidebar: auto
sidebarDepth: 2
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

### Upload data to Amsel

1. Open the `amsel.ino` file with the arduino IDE
1. Setup tools