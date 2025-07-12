from flask_sqlalchemy import SQLAlchemy


def db(app):
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
    database = SQLAlchemy(app)

    with app.app_context():
        database.create_all()

    return database
