import RPi.GPIO as GPIO
from flask import Flask 
from flask_socketio import SocketIO, send
import simplejson
import time
import firebase
import datetime
GPIO.setmode(GPIO.BCM)
## LED
GPIO.setup(14, GPIO.OUT)
## RELAY
GPIO.setup(15, GPIO.OUT)
## SENSOR DE MOVIMIENTO
GPIO.setup(18, GPIO.IN)
def motionSensor(channel):
    evento = datetime.datetime.now()
    data = {"sensor_movimiento": "Activado", "momento": evento}
    firebase.post('/sensores/',data)

GPIO.add_event_detect(18, GPIO.RISING, callback=motionSensor, bouncetime=300)

app = Flask(__name__)
app.config['SECRET_KEY'] = 'mysecret'
socketio = SocketIO(app)

firebase = firebase.FirebaseApplication('https://sensores-6154e.firebaseio.com/', None)


@socketio.on('message')
def handle_message(message):
    evento = datetime.datetime.now()
    if message == 'led_on':
        GPIO.output(14, 1)
        data = {"led": "Encendido", "momento": evento}
        firebase.post('/sensores/',data)
    if message == 'led_off':
        GPIO.output(14, 0)
        data = {"led": "Apagado", "momento": evento}
        firebase.post('/sensores/',data)
    if message == 'relay_on':
        GPIO.output(15, 1)
        data = {"relay": "Encendido", "momento": evento}
        firebase.post('/sensores/',data)
    if message == 'relay_off':
        GPIO.output(15, 0)
        data = {"relay": "Apagado", "momento": evento}
        firebase.post('/sensores/',data)

if __name__ == '__main__':
    socketio.run(app, host = '0.0.0.0', port=8000)
