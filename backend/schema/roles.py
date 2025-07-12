from app import db

class Roles(db.Model):

    # Table for Teams
    __tablename__ = "tbl_roles" # Table name

    role_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    role_name = db.Column(db.String(200), nullable=False)
    role_description = db.Column(db.Text, nullable=False, default="Enter role description...")