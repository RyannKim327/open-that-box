from app import app, db
from flask import request
from web.top_contrib import top_contributor
from web.register import register
from db_tester.sample_write import sample_write

@app.route("/", methods=["POST", "GET"])
def index():
    return ""

@app.route("/api/top-contributors")
def top_contribs():
    return top_contributor(request)

@app.route("/api/register", methods=["POST"])
def register_page():
    return register()

if __name__ == "__main__":
    with app.app_context():
        db.create_all()  # Create initial table
    app.run(debug=True)
