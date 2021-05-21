# Python file that uses the Raspberry Pi GPIO board to utilise a PIR sensor to turn the monitor on and off

import RPi.GPIO as GPIO
import time
from subprocess import call

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BOARD)

# specifies the GPIO pin that the PIR sensor is attached to on the raspberry pi 
GPIO.setup(11, GPIO.IN)

# Changes the user/bin/vcgenmd file on a raspberry pi to turn the screen on and off 
while True:
    i = GPIO.input(11)
    if i == 0:
        # print statement used for testing 
        print("Screen off", i)
        call(["/usr/bin/vcgencmd", "display_power", "0"])
        time.sleep(0.1)
    elif i == 1:
        print("Screen On", i)
        call(["/usr/bin/vcgencmd", "display_power", "1"])
        # stays on for a long time - user does not have to keep activating the sensor this way
        time.sleep(360)