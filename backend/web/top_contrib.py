from app import db
from schema.tasks import Tasks

def top_contributor(request):
    # NOTE: Request parameter is used to transfer input into the file from the main one
    # TODO: Create a query here
    query = db.session.query(Tasks.task_name, Tasks.task_points).order_by(Tasks.task_points.desc()).all()

    data = []
    for item in query:
        data.append({
            "Task Name": item[0],
            "Points": item[1]
        })

    return str(data)
