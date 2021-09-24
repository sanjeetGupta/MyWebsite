import requests
from flask import request, Flask
import json
from url_details import url, doc_app_endpoint, skey, akey
import boto3
from botocore.config import Config
app= Flask(__name__)

# from flask_cors import CORS,cross_origin ## debug
# cors =CORS(app) ## debug
# from flask import send_from_directory ##not required as static files can be directly routed in the yaml file
LAMBDA = True


@app.route('/doc_app/',methods=['POST'])
# @cross_origin() ## debug
def doc_app():
    if request.method == 'POST':
        data = request.get_json()
        print('Received doc_app request: {}'.format(data), flush=True)
        if LAMBDA:
            out = invoke_lambda(data)
            print('lambda finished processing',flush=True)
        else:
            out = requests.post(url+doc_app_endpoint, json=data)
            print(out.json(),flush=True)
            print('tf serving finished processing',flush=True)
            out = out.json()
        return json.dumps(out)


def invoke_lambda(event):
    # event = {
    #   "inputs": [
    #     "a_t 24 g_t F q_t My aunt's 4 or 5 bone of spinal cord has increased. So how it will medicate or any surgery required please help with this?"]
    # }
    event = json.dumps(event)
    client = boto3.client('lambda',
                          aws_access_key_id=akey,
                          aws_secret_access_key=skey,
                          region_name='us-east-2',
                          config=Config(read_timeout=9000))
    response = client.invoke(
      FunctionName='aidoc',
      Payload=event
    )
    response = json.loads(response['Payload'].read())
    response = json.loads(response)
    return response



if __name__ == "__main__":

    app.run('localhost', port=9236)

