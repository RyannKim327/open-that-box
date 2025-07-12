import database
from flask import Flask, request
from web.top_contrib import top_contributor
from schema import Users

app = Flask(__name__)
db = database.db(app)

@app.route("/", methods=["POST", "GET"])
def index():
    Users(db=db, first_name="Khian Victory", middle_name="Dela Pena", last_name="Calderon", role="Admin")
    return "Hello World"

@app.route("/top-contributors")
def top_contribs():
    return top_contributor(request)

if __name__ == "__main__":
    app.run(debug=True)
