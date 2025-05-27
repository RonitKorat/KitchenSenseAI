from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo
from dotenv import load_dotenv
import os
from models.user import create_user,serialize_user

load_dotenv()

app = Flask(__name__)
CORS(app)

MONGO_URI = os.getenv("MONGO_URI")
print("MONGO_URI:", MONGO_URI)

app.config["MONGO_URI"] = MONGO_URI
mongo = PyMongo(app)

# Add user route
@app.route('/user', methods=['POST'])
def add_user():
    data = request.get_json()

    if not data or not data.get("email"):
        return jsonify({"error": "Email is required"}), 400

    user = create_user(data)
    try:
        result=mongo.db.users.insert_one(user)
        inserted_user=mongo.db.users.find_one({"_id":result.inserted_id})
        return jsonify({"message": "User added successfully", "user": serialize_user(inserted_user)}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    


if __name__ == '__main__':
    app.run(debug=True)
