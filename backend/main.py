from app import app, db
from flask import request
from flask_cors import CORS
from web.login import login
from web.register import register
from web.top_contrib import top_contributor
from db_tester.sample_write import sample_write

CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route("/", methods=["POST", "GET"])
def index():
    return sample_write()


@app.route("/api/login", methods=["POST"])
def api_login():
    return login(request)

@app.route("/api/register", methods=["POST"])
def api_register():
    return register(request)

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
