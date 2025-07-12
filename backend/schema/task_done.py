from app import db

class Tasks_Done(db.Model):

    __tablename__ = "tbl_tasks" # Table name

    task_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    task_name = db.Column(db.String(200), nullable=False)
    task_description = db.Column(db.Text, nullable=False, default="Enter description...")
    task_points = db.Column(db.Integer(), nullable=False, default=0)
    task_by_group = db.Column(db.Boolean(), nullable=False, default=False)