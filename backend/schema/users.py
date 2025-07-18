from datetime import datetime
from app import db

class Users(db.Model):

    # Table for Users
    __tablename__ = "tbl_users" # Table name

    user_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_username = db.Column(db.String(200), nullable=False)
    user_first_name = db.Column(db.String(200), nullable=False)
    user_middle_name = db.Column(db.String(200), nullable=True)
    user_last_name = db.Column(db.String(200), nullable=False)
    user_email = db.Column(db.String(200), nullable=False, unique=True)
    user_password = db.Column(db.String(200), nullable=False)
    user_role = db.Column(db.String(50))
    user_badges = db.Column(db.Integer, nullable=False, default=0)
    user_created_at = db.Column(db.DateTime, default=datetime.now())
