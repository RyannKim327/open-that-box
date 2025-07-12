from app import app, db
from flask import request
from flask_cors import CORS
from schema.achivements import Achivements
from schema.badge import Badge
from schema.roles import Roles
from schema.users import Users
from web.login import login
from web.top_contrib import top_contributor

CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route("/", methods=["POST", "GET"])
def index():
    def insert(content):
        try:
            db.session.add(content)
            db.session.commit()
        except Exception as error:
            return f"Unable to insert: {error}"

    insert(
        Users(
            user_username="khianvictory",
            user_first_name="Khian Victory",
            user_middle_name="Dela Pena",
            user_last_name="Calderon",
            user_email="asfmak@mgasmkfa.com",
            user_password="123",
            user_role=1,
            user_badges="70",
        )
    )

    insert(
        Badge(
            badge_name="Sa kaniya lang",
            badge_description="Ako ay para sa kaniya lamang",
            badge_level_points="[10, 10, 50, 20]",
            badge_category="Single",
        )
    )

    insert(Achivements(user_id=1, badge_id=1))

    insert(Roles(role_name="Sample Role", role_description="I have no description..."))

    return "No insertion error."


@app.route("/api/login", methods=["POST"])
def api_login():
    return login(request)


@app.route("/api/top-contributors")
def top_contribs():
    return top_contributor(request)


@app.route("/api/user", methods=["POST"])
def get_user():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    if username == "khian" and password == "123":
        return "Access granted"
    else:
        return "Invalid username or password"


with app.app_context():
    db.create_all()

if __name__ == "__main__":
    # Create initial table
    app.run(debug=True)
