from app import db
from datetime import datetime

class Team_Achievements(db.Model):

    __tablename__ = "tbl_team_achivements" # Table name

    team_achivement_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    role = db.Column(db.Integer, db.ForeignKey("tbl_roles.role_id"), nullable=False)
    badge_id = db.Column(db.Integer, db.ForeignKey("tbl_badge.badge_id"), nullable=False)
    day = db.Column(db.DateTime, default=datetime.now())