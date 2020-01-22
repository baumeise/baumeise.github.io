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
- **ESP8266 Arduino tooling** <br>
  Insert this URL at "Additional Borad Manager URLs:" ```http://arduino.esp8266.com/stable/package_esp8266com_index.json``` in the preferences window.

- **Libraries** <br>
  Open `Tools > Library Manager` and install the following libraries:
  - ArduinoOTA
  - Adafruit SSD1306
  - Adafruit Feather OLED

- **Tools** <br>
  - **ESP8266 File System:** Follow these [installation guide](https://github.com/esp8266/arduino-esp8266fs-plugin).

## Getting Started

### Clone the firmware

Execute the following in your terminal
``` sh
# go to your desired directory
cd /path/to/your/directory/

# clone into repository
git clone git@github.com:moritzgvt/amsel.git && cd amsel
```

### Upload data

1. **Open the `amsel.ino` file with the arduino IDE**

2. **Set board preferences in** `Tools`

```
Board: NodeMCU (1.0 ESP-12E Module)
Builtin LED: 2
Upload speed: 115200
CPU Frequency: 80 MHz
Flash Size: 4MB (1MB SPIFFS)
Debug Port: Disabled
Debug Level: None
IwIP Variant: v2 Lower Memory
VTables: Flash
Exceptions: Legacy
Erase Flash: All Flash Contents
SSL Support: All SSL Ciphers
Port: <USB Port where the Borad is connected>
```

3. **Upload the Amsel firmware by pressing the upload button in the top left corner**

4. **Upload SPIFFS data: `Tools > ESP8266 SPIFFS Data Upload`**
   ::: warning
    Close serial monitor before uploading the data.
   :::

### Connect to device

Follow Amsels instructions on the display.

### Usage

Now get started with the [amselpy](https://github.com/baumeise/amselpy) library. <br>

```sh
pip install amselpy
```

::: tip
You will find more information on how to use the [amselpy](https://github.com/baumeise/amselpy) library in the [documentation](/docs/).
:::


``` python
# import library
from amselpy import Amsel

# create an instance
amsel = Amsel()

# set adress
amsel.use("<YOUR-AMSELS-IP>")

# control movements
amsel.forward(120)
amsel.sleep(5)
amsel.stop()
```

## Next steps

Start playin' around! You can find further information in the [documentation](/docs/).