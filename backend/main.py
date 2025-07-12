from flask import request
from web.top_contrib import top_contributor
from datetime import datetime
from app import app, db

# ------------------------------------------------------------------------------------------
# Database Schema

class Users(db.Model):
    # Table for Users
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(200), nullable=False)
    first_name = db.Column(db.String(200), nullable=False)
    middle_name = db.Column(db.String(200), nullable=False)
    last_name = db.Column(db.String(200), nullable=False)
    role = db.Column(db.String(50), nullable=False)
    badges = db.Column(db.String(50))
    created_at = db.Column(db.DateTime, default=datetime.now())

# ------------------------------------------------------------------------------------------

@app.route("/", methods=["POST", "GET"])
def index():
    
    try:
        content = Users(username="khianvictory", first_name="Khian Victory", middle_name="Dela Pena", last_name="Calderon", role="Admin", badges="")
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
        db.create_all() # Create initial table
    app.run(debug=True)
