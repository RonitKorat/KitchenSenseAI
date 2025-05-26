from flask import Flask
from flask_cors import CORS
from flask_pymongo import PyMongo
from dotenv import load_dotenv
import os
from models.user import create_user

load_dotenv()

app = Flask(__name__)
CORS(app) 

app.config["MONGO_URI"]=os.getenv("MONGO_URI")
mongo=PyMongo(app)

from routes import main as main_routes
app.register_blueprint(main_routes)

if __name__ == '__main__':
    app.run(debug=True)
