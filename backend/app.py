from flask import Flask
import database

app = Flask(__name__)
db = database.db(app)