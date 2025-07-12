from app import app
from flask import request

def define_register():
    @app.route("/api/register", methods=["POST"])
    def _():
        data = request.get_json()
        
        # Get user input and perform validation
        username = data.get("username")
        first_name = data.get("first_name")
        middle_name = data.get("middle_name")
        last_name = data.get("last_name")
        email = data.get("email")
        password = data.get("password")
        confirm_password = data.get("confirm_password")

        required_fields = [
            username,
            first_name,
            middle_name,
            last_name,
            email,
            password,
            confirm_password
        ]

        for item in required_fields:
            # Reject the requests any of the input are empty
            if str(item).strip() == "":
                return "[Request rejected]: Incomplete data"
            
        return "Registration success!"