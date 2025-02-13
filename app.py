from flask import Flask, jsonify, request
from flask_cors import CORS  # Import CORS
from flask_socketio import SocketIO

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
socketio = SocketIO(app, cors_allowed_origins="*")  # Allow all origins for Socket.IO

# Store the current code (for simplicity, we'll use a global variable)
current_code = "print('Hello, World!')"

@app.route('/')
def home():
    return "Welcome to the Real-Time Code Editor!"

@app.route('/code', methods=['GET', 'POST'])
def code():
    global current_code
    if request.method == 'POST':
        current_code = request.json['code']
        socketio.emit('code_update', {'code': current_code})  # Broadcast the update
        return jsonify({'status': 'success'})
    return jsonify({'code': current_code})

if __name__ == '__main__':
    socketio.run(app, debug=True)