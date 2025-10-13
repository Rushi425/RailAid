from flask import Flask, request, jsonify
from flask_cors import CORS
from chatbot_logic import chatbot_response

app = Flask(__name__)
CORS(app)  # allows React frontend to talk to Flask backend

@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    user_message = data.get("message", "")
    bot_reply = chatbot_response(user_message)
    return jsonify({"reply": bot_reply})

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
