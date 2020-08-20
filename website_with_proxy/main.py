import requests
from flask import request,Flask,jsonify,render_template
import json

app= Flask(__name__)

url =  ## url here
doc_app_endpoint = '' # end point here

@app.route('/')
def hello():
    return render_template('index.html')


@app.route('/doc_app/',methods=['POST'])
def doc_app():
    if request.method == 'POST':
        data = request.get_json()
        print('Received doc_app request: {}'.format(data),flush=True)
        out = requests.post(url+doc_app_endpoint,json=data)
        print(out.text)
        print('tf serving finished processing')
        outputs = out.json()['outputs']['outputs']
        out_str = 'Opinion 1 :'+'\n' +outputs[0] +'\n\n' +'Opinion 2:'+'\n'+outputs[1]
        return json.dumps({'output':out_str})


if __name__ == "__main__":
    app.run('localhost', port= 9236)

