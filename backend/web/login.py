import re

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

        print(user)
        if user:
            return "Meron ata"
        else:
            return "Wala prii"
    except Exception as e:
        return str(e)
