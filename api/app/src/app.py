from flask import Flask, jsonify
from calculate_warmup import calculate

application = Flask(__name__)

@application.route('/calculate-warmup/<int:target>', methods=['GET'])
def calculate_warmups(target):
    return jsonify(calculate(target))

if __name__ == "__main__":
    application.run(host="0.0.0.0")

