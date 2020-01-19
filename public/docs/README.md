---
title: Documentation
prev: /getting-started/
next: /docs/methods
lang: en-US
---

## About

This is the official Python library for the Amsel robot.

## Usage

Clone this repository into your projects directory:
```sh
git clone git@github.com:baumeise/AmselPy.git
```

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