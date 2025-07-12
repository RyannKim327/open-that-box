from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
db = SQLAlchemy(app)

@app.route("/", methods=["POST", "GET"])
def index():
    return "Hello World"

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
    app.run(debug=True)