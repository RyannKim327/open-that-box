from app import db
import re
from sqlalchemy import or_
from schema.users import Users

def register(request):
    def insert(content):
        try :
            db.session.add(content)
            db.session.commit()
            return "Done"
        except Exception as error:
            return f"Unable to insert: {error}"

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
        last_name,
        email,
        password,
        confirm_password
    ]

    # Validate for empty input
    for item in required_fields:
        # Reject the requests any of the input are empty
        if str(item).strip() == "":
            return {"error": "[Request rejected]: Incomplete data"}
        
    # Email validation
    if not re.match(r"[^@]+@[^@]+\.[^@]+", email):
        return {"error": "[Request rejected]: Invalid email"}

    # Password match validation
    if not password == confirm_password:
        return {"error": "[Request rejected]: Password does not match"}

    # Existing username and email validation
    existing_email = db.session.scalar(db.select(Users).where(or_(Users.user_username==username, Users.user_email==email)))
    if existing_email:
        return {"error": "[Request rejected]: Username or email already exists"}

    # Insert into database
    ins = insert(
        Users(
            user_username=username,
            user_first_name=first_name,
            user_middle_name=middle_name,
            user_last_name=last_name,
            user_email=email,
            user_password=password,
            user_role=role,
            user_badges="",
        )
    )

    print(ins)

    return {"message": "You may now login your account"}