from schema.tasks import Tasks
from app import db

def sample_write_task():
    def insert(content):
        try :
            db.session.add(content)
            db.session.commit()
        except Exception as error:
            return f"Unable to insert: {error}"

    insert(Tasks(
        task_name="My Task BB",
        task_description="Eh eh...",
        task_points=20,
        task_by_group=False
    ))

    insert(Tasks(
        task_name="My Task CA",
        task_description="Eh eh...",
        task_points=20,
        task_by_group=False
    ))

    insert(Tasks(
        task_name="My Task CB",
        task_description="Eh eh...",
        task_points=20,
        task_by_group=False
    ))

    insert(Tasks(
        task_name="My Task CC",
        task_description="Eh eh...",
        task_points=50,
        task_by_group=False
    ))

    insert(Tasks(
        task_name="My Task CD",
        task_description="Eh eh...",
        task_points=50,
        task_by_group=False
    ))

    insert(Tasks(
        task_name="My Task CE",
        task_description="Eh eh...",
        task_points=70,
        task_by_group=False
    ))

    return "Insertion of task successful!"