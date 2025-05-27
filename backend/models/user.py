def create_user(data):
  return {
    "email":data.get("email"),
    "password":data.get("password"),
    "confirmPassword":data.get("confirmPassword")
  }
  
from bson import ObjectId

def serialize_user(user):
    if '_id' in user:
        user['_id'] = str(user['_id'])
    return user