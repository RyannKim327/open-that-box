from datetime import datetime

def Users(db):
    class Users(db.Model):
        __tablename__ = "users"

        id = db.Column(db.Integer, primary_key=True, autoincrement=True)
        username = db.Column(db.String(200), nullable=False, unqiue=True)
        first_name = db.Column(db.String(200), nullable=False)
        middle_name = db.Column(db.String(200), nullable=False)
        last_name = db.Column(db.String(200), nullable=False)
        role = db.Column(db.String(50), nullable=False)
        badges = db.Column(db.String(), default="")
        created_at = db.Column(db.DateTime, default=datetime.now())

    def __init__(self, id, username, first_name, middle_name, last_name, role, badges, created_at):
        self.id = id
        self.username = username
        self.first_name = first_name
        self.middle_name = middle_name
        self.last_name = last_name
        self.role = role
        self.badges = badges
        self.created_at = created_at

def Badges(db):
    class Badges(db.Model):
        id = db.Column(db.Integer, primary_key=True, autoincrement=True)