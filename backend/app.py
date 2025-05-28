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
# print("MONGO_URI:", MONGO_URI)

app.config["MONGO_URI"] = MONGO_URI
mongo = PyMongo(app)

# Add user route
@app.route('/user/signup', methods=['POST'])
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
    
@app.route('/user/login',methods=['POST'])
def login_user():
    data=request.get_json()
    email=data.get("email")
    password=data.get("password")
    print(email,password)
    
    if not email or not password:
        return jsonify({"error":"email and password is required.."}),400

    user=mongo.db.users.find_one({"email":email,"password":password})
    
    if not user:
        return jsonify({"message":"user not found","success":False}),404

    return jsonify({"message":"Login Successful","email":email,"password":password}),201 
    
if __name__ == '__main__':
    app.run(debug=True,port=8000)
