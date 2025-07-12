from datetime import datetime

def Users(db, first_name, middle_name, last_name, role, badges, created_at):
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

    return Users(first_name=first_name, middle_name=middle_name, last_name=last_name, role=role, badges=badges, created_at=created_at)