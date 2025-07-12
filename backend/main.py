from app import app, db
from flask import request
from schema.users import Users
from schema.achivements import Achivements
from schema.badge import Badge
from schema.roles import Roles
from web.top_contrib import top_contributor

@app.route("/", methods=["POST", "GET"])
def index():

    def insert(content):
        try :
            db.session.add(content)
            db.session.commit()
        except Exception as error:
            return f"Unable to insert: {error}"
    
    insert(Users(
        user_username = "khianvictory", 
        user_first_name = "Khian Victory",
        user_middle_name = "Dela Pena",
        user_last_name = "Calderon",
        user_role = 1,
        user_badges = "70"
    ))

    insert(Badge(
        badge_name = "Sa kaniya lang",
        badge_description = "Ako ay para sa kaniya lamang",
        badge_level_points = "[10, 10, 50, 20]",
        badge_category = "Single"
    ))

    insert(Achivements(
        user_id=1,
        badge_id=1
    ))

    insert(Roles(
        role_name = "Sample Role",
        role_description = "I have no description..."
    ))

    return "No insertion error."    


@app.route("/top-contributors")
def top_contribs():
    return top_contributor(request)

@app.route("/user", methods=["POST"])
def get_user():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")

    if username == "khian" and password == "123":
        print("Access Granted")
    else:
        print("Invalid username or password")

    return ""

if __name__ == "__main__":
    with app.app_context():
        db.create_all()  # Create initial table
    app.run(debug=True)
