from flask import (
    Flask,  render_template
)
from flask_cors import CORS
import string


app = Flask(__name__)
app.secret_key = "supersecret"

CORS(app, supports_credentials=True)

app.config.update(
    SESSION_COOKIE_HTTPONLY=True,
    SESSION_COOKIE_SAMESITE="Lax"
)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/payment/<float:price>")
def payment(price):
    return render_template("payment.html", price=price)

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=5502, debug=True)
