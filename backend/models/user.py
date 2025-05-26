def create_user(data):
  return {
    "email":data.get("email"),
    "password":data.get("password"),
    "confirm-password":data.get("confirm-password")
  }