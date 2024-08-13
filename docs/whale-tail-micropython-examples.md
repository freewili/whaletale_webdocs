---
sidebar_position: 6
---

# Whale Tail MicroPython Examples

## Examples

### Pin

A pin object is used to control I/O pins (also known as GPIO - general-purpose input/output). Pin objects are commonly associated with a physical pin that can drive an output voltage and read input voltages. The pin class has methods to set the mode of the pin (IN, OUT, etc) and methods to get and set the digital logic level. For analog control of a pin, see the ADC class.

A pin object is constructed by using an identifier which unambiguously specifies a certain I/O pin. The allowed forms of the identifier and the physical pin that the identifier maps to are port-specific. Possibilities for the identifier are an integer, a string or a tuple with port and pin number.

```python

from machine import Pin


# create an output pin on pin #0

p0 = Pin(0, Pin.OUT)


# set the value low then high

p0.value(0)

p0.value(1)


# create an input pin on pin #2, with a pull up resistor

p2 = Pin(2, Pin.IN, Pin.PULL_UP)


# read and print the pin value

print(p2.value())


# reconfigure pin #0 in input mode with a pull down resistor

p0.init(p0.IN, p0.PULL_DOWN)


# configure an irq callback

p0.irq(lambda p: print(p))


```

Pin values can be set; however, Signals are easier to control

### Signal (used for LEDs)

[https://docs.micropython.org/en/latest/library/machine.Signal.html](https://docs.micropython.org/en/latest/library/machine.Signal.html)

The Signal class is a simple extension of the Pin class. Unlike Pin, which can be only in “absolute” 0 and 1 states, a Signal can be in “asserted” (on) or “deasserted” (off) states, while being inverted (active-low) or not. In other words, it adds logical inversion support to Pin functionality. While this may seem a simple addition, it is exactly what is needed to support wide array of simple digital devices in a way portable across different boards, which is one of the major MicroPython goals. Regardless of whether different users have an active-high or active-low LED, a normally open or normally closed relay - you can develop a single, nicely looking application which works with each of them, and capture hardware configuration differences in few lines in the config file of your app.

The following example shows how to create signals to control the inner LED on both eyes of the Whale-Tail

```py

from machine import Signal
import utime

rightMiddlePin = Pin(10, Pin.OUT)

rightMiddleLED = Signal(rightMiddlePin)

# can combine constructor to one 

leftMiddleLED = Signal(Pin(26, Pin.OUT)

rightMiddleLED.on()

leftMiddleLED.off()

# .value() returns the status of the LED (On=1, Off=0)

print(rightMiddleLED.value()) # will print 1

print(leftMiddleLED.value()) # will print 0


# alternate flashing each green LED every second

while True:

 rightMiddleLED.on()

 leftMiddleLED.off()

 utime.sleep_ms(1000)

 rightMiddleLED.on()

 leftMiddleLED.off()

 utime.sleep_ms(1000)
 
```