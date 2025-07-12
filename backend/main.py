import database
from flask import Flask, request
from web.top_contrib import top_contributor

app = Flask(__name__)
db = database.db(app)


@app.route("/", methods=["POST", "GET"])
def index():
    return "Hello World"


@app.router("/top-contributors")
def top_contribs():
    return top_contributor(request)


if __name__ == "__main__":
    app.run(debug=True)
