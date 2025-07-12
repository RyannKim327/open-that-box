from app import app, db
from flask import request
from schema.users import Users
from web.top_contrib import top_contributor

@app.route("/", methods=["POST", "GET"])
def index():
    try:
        content = Users(
            username="khianvictory",
            first_name="Khian Victory",
            middle_name="Dela Pena",
            last_name="Calderon",
            role="Admin",
            badges="",
        )
        db.session.add(content)
        db.session.commit()
    except Exception as error:
        return f"Unable to inser: {error}"

    return "Hello World"


@app.route("/top-contributors")
def top_contribs():
    return top_contributor(request)


if __name__ == "__main__":
    with app.app_context():
        db.create_all()  # Create initial table
    app.run(debug=True)
