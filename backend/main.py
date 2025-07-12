from flask import Flask

from backend import database

app = Flask(__name__)
db = database.db(app)


@app.route("/", methods=["POST", "GET"])
def index():
    return "Hello World"


if __name__ == "__main__":
    app.run(debug=True)
