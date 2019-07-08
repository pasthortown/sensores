from flask import Flask
from flask_socketio import SocketIO, send
import time
import datetime
app = Flask(__name__)
app.config['SECRET_KEY'] = 'mysecret'
socketio = SocketIO(app)

@socketio.on('message')
def handle_message(message):
    evento = datetime.datetime.now()
    if message == 'led_on':
        print(message)
    if message == 'led_off':
        print(message)
    if message == 'relay_on':
        print(message)
    if message == 'relay_off':
        print(message)

if __name__ == '__main__':
    socketio.run(app, host = '10.10.40.255', port=8000)
