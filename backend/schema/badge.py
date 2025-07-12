from app import db


class Badge(db.Model):
    __tablename__ = "tbl_badge"

    badge_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    badge_name = db.Column(db.String(200), nullable=False)
    badge_description = db.Column(db.Text, nullable=False)
    badge_points = db.Column(db.Integer, default=0)
    badge_category = db.Column(db.String(50), nullable=False)
