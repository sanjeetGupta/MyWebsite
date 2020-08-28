import requests
from flask import request,Flask,render_template
import json
# from flask_cors import CORS,cross_origin ## debug
from url_details import url , doc_app_endpoint
app= Flask(__name__)
# cors =CORS(app) ## debug

@app.route('/')
def hello():
    return render_template('index.html')


@app.route('/doc_app/',methods=['POST'])
# @cross_origin() ## debug
def doc_app():
    if request.method == 'POST':
        data = request.get_json()
        print('Received doc_app request: {}'.format(data),flush=True)
        out = requests.post(url+doc_app_endpoint,json=data)
        print(out.json())
        print('tf serving finished processing')
        return json.dumps(out.json())


if __name__ == "__main__":
    app.run('localhost', port= 9236)

