import requests
from flask import request, Flask
import json
from url_details import url , doc_app_endpoint
app= Flask(__name__)

# from flask_cors import CORS,cross_origin ## debug
# cors =CORS(app) ## debug
# from flask import send_from_directory ##not required as static files can be directly routed in the yaml file



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



####not required as static files can be directly routed in the yaml file###
# angular_default_path = "index.html"
# root = "static/"
# # Special trick to capture all remaining routes
# @app.route('/<path:path>')
# @app.route('/', defaults={'path': ''})
# def angular(path):
#   print(path,flush=True)
#   return send_from_directory(root, angular_default_path)
#

if __name__ == "__main__":
    app.run('localhost', port= 9236)

