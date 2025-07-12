from datetime import datetime
from app import db

class Achievements(db.Model):

    # Table for Achievements
    __tablename__ = "tbl_achievements" # Table name

    achivement_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey("tbl_users.user_id"), nullable=False)
    badge_id = db.Column(db.Integer, db.ForeignKey("tbl_badge.badge_id"), nullable=False)
    achievement_day = db.Column(db.DateTime, default=datetime.now())