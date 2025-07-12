from app import db
from schema.users import Users
from sqlalchemy import and_, or_


def login(request):
    try:
        data = request.get_json()

        username = data.get("username")
        password = data.get("password")

        user = db.session.scalar(
            db.select(Users).where(
                or_(
                    and_(
                        Users.user_username == username, Users.user_password == password
                    ),
                    and_(Users.user_email == username, Users.user_password == password),
                )
            )
        )

        print(user.user_username)
        if user:
            return {"id": user.user_id, "usn": user.user_username}
        else:
            return {"error": "Invalid Credentials"}
    except Exception as e:
        return {"error": str(e)}
