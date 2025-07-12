from app import db

class Tasks_Done(db.Model):

    __tablename__ = "tbl_done_tasks" # Table name

    done_task_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    task_id = db.Column(db.Integer, db.ForeignKey("tbl_tasks.task_id"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("tbl_users.user_id"), nullable=False)