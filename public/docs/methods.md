---
title: Methods
displayHeaders: true
prev: /getting-started/
next: /docs/classes/
lang: en-US
---

# Methods




## [Connection](/docs/classes/connection)

Enables network functionality and setup.


## [Skills](/docs/classes/skills)

Enables movement and other skills.



### forward
<hr>

Move one step forward with specific `speed`.

#### Arguments:
  - **speed** <br>
    Type: `Integer`<br>
    Default: `speed`

#### Example
  ```python
  amsel.forward(80)
  # <amsel-moves-forward-with-speed-80>
  ```

#### Class Reference

- [Skills](/docs/classes/skills)


### backward
<hr>

Move one step backward with specific `speed`.

#### Arguments:
  - **speed** <br>
    Type: `Integer`<br>
    Default: `speed`

#### Example
  ```python
  amsel.backward(80)
  # <amsel-moves-backward-with-speed-80>
  ```

#### Class Reference

- [Skills](/docs/classes/skills)


### left
<hr>

Move one step left with specific `speed`.

#### Arguments:
  - **speed** <br>
    Type: `Integer`<br>
    Default: `speed`

#### Example
  ```python
  amsel.left(80)
  # <amsel-moves-left-with-speed-80>
  ```

#### Class Reference

- [Skills](/docs/classes/skills)


### right
<hr>

Move one step right with specific `speed`.

#### Arguments:
  - **speed** <br>
    Type: `Integer`<br>
    Default: `speed`

#### Example
  ```python
  amsel.right(80)
  # <amsel-moves-right-with-speed-80>
  ```

#### Class Reference

- [Skills](/docs/classes/skills)


### stop
<hr>

Stop all movement.

#### Example
  ```python
  amsel.stop()
  # <amsel-stops>
  ```

#### Class Reference

- [Skills](/docs/classes/skills)


### go
<hr>

Start an automatic run. To end it hit `ctrl-C`.

#### Example
  ```python
  amsel.go()
  # <amsel-drives-infinitely>
  ```

#### Class Reference

- [Skills](/docs/classes/skills)


### print
<hr>

Use to print something on the display

#### Arguments:
  - **message** <br>
    Type: `String`

#### Example
  ```python
  amsel.print('Hello World!')
  # <"Hello World!"-is-rendered-on-the-display>
  ```

#### Class Reference

- [Skills](/docs/classes/skills)


### clear
<hr>

Clear the display

#### Example
  ```python
  amsel.clear()
  # <display-is-cleared>
  ```

#### Class Reference

- [Skills](/docs/classes/skills)



## Utilities

Methods used by other methods.


### use
<hr>

Specify this to set a `newIP`.

#### Arguments:
  - **newIP** <br>
    Type: `String`

#### Example
  ```python
  amsel.use('192.168.4.1')
  # Amsel CLI uses now 192.168.4.1 as IP
  ```

#### Class Reference

- [Utils](/docs/classes/utils)


### setSpeed
<hr>

Sets new default `speed`.

#### Arguments:
  - **newSpeed** <br>
    Type: `Integer`

#### Example
  ```python
  amsel.setSpeed(80)
  # Amsel CLI used 100 as default speed now it uses 80
  ```

#### Class Reference

- [Utils](/docs/classes/utils)


### getSpeed
<hr>

Returns the current default `speed` value.

#### Example
  ```python
  amsel.getSpeed()
  # 100
  ```

#### Class Reference

- [Utils](/docs/classes/utils)


### getDistance
<hr>

Returns the current distance.

#### Example
  ```python
  amsel.getDistance()
  # 18
  ```

#### Class Reference

- [Utils](/docs/classes/utils)


### get
<hr>

Performs a get request and returns the response. This can be used to call specific functions. Use their API `endpoint` as path to trigger it.

#### Arguments:
  - **endpoint** <br>
    Type: `String`

#### Example
  ```python
  amsel.get('/forward?speed=100')
  # <amsel-moves-forward>
  ```

#### Class Reference

- [Utlils](/docs/classes/utlils)


### IP
<hr>

Returns the current IP.

#### Example
  ```python
  amsel.IP()
  # Amsel CLI uses 192.168.4.1 as IP
  ```

#### Class Reference

- [Utlils](/docs/classes/utlils)


### address
<hr>

Returns the current address.

#### Example
  ```python
  amsel.address()
  # Amsel CLI uses amsel.local as network address
  ```

#### Class Reference

- [Utlils](/docs/classes/utlils)


### sleep
<hr>

When called the robot doesn't care about anything for the passed `duration`. It will just continue the running command. Also it does not take new commands.

::: warning
  This method can't be aborted. Cut power supply when necessary.
:::

#### Arguments:
  - **duration** <br>
    Type: `Integer`

#### Example
  ```python
  amsel.sleep(10)
  # <amsel-waits-10s>
  ```

#### Class Reference

- [Utils](/docs/classes/utils)