from datetime import datetime

from app import app, db

# from database import db


def setApp(myapp):
    global app
    app = myapp


class Users(db.Model):
    # Table for Users
    __tablename__ = "users"
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(200), nullable=False)
    first_name = db.Column(db.String(200), nullable=False)
    middle_name = db.Column(db.String(200), nullable=False)
    last_name = db.Column(db.String(200), nullable=False)
    role = db.Column(db.String(50), nullable=False)
    badges = db.Column(db.String(), default="")
    created_at = db.Column(db.DateTime, default=datetime.now())
