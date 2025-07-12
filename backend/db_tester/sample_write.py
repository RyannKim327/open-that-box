from schema.users import Users
from schema.achivements import Achivements
from schema.badge import Badge
from schema.roles import Roles
from app import db

def sample_write():
    def insert(content):
        try :
            db.session.add(content)
            db.session.commit()
        except Exception as error:
            return f"Unable to insert: {error}"
    
    insert(Users(
        user_username = "khianvictory", 
        user_first_name = "Khian Victory",
        user_middle_name = "Dela Pena",
        user_last_name = "Calderon",
        user_email = "asfmak@mgasmkfa.com",
        user_password = "123",
        user_role = 1,
        user_badges = "70"
    ))

    insert(Badge(
        badge_name = "Sa kaniya lang",
        badge_description = "Ako ay para sa kaniya lamang",
        badge_level_points = "[10, 10, 50, 20]",
        badge_category = "Single"
    ))

    insert(Achivements(
        user_id=1,
        badge_id=1
    ))

    insert(Roles(
        role_name = "Sample Role",
        role_description = "I have no description..."
    ))

    return "Insertion successful!"