# MyWebsite

## Angular + Flask 

This is a Web Application , I use to host project demos and my CV.
Since, the backend apis don't have ssl or cors enabled all requests from the front-end are made through a proxy flask server.

## Steps to deploy

### Build the angular app

```ng build --prod --build-optimizer ```
  
transfer all the files from dist/my-website/ to website_with_proxy/static

### Deploy to google app engine

Before this step, it is required to setup a billing account on Google Cloud Platform and create a project. 
Also, it is required to download the gcloud sdk from here: https://cloud.google.com/sdk/docs/quickstarts

Now we need to write .yaml file which basically defines the routing.

As seen below I am routing /doc_app/ to the python script (app engine automatically finds the flask app in the root directory i.e. website_with_proxy) . 

Rest of the routes point to static files created by angular.

Also, the instance is booted up only when /doc_app/ is called and shut off when there are not requests. 
Rest of the routes point to static files that don't require a VM instance.
Therefore, there is a bit of lag when the doc_app is called for the first time. 
min_instances can be set to 1 to avoid this, i.e. google app engine keeps 1 instance always running.   

from website_with_proxy/app.yaml
```yaml
runtime: python38  
instance_class: F1 ## defines the kind of instance to use
automatic_scaling:
  max_instances: 1 
  min_instances: 0
handlers:
- url:  /doc_app/
  script: auto
- url: /static/
  static_files: static/index.html
  upload: static/index.html
- url: /static/
  static_dir: static
```
Final steps to deploy the web app to google app engine 
```
cd website_with_proxy
gcloud init
gcloud app deploy
```

Thanks to Google Cloud free tier the cost of deploying this is next to nothing. 
But make sure to use F1 instance and limit the number of instances as done above. 
Check Google cloud free tier for more details: https://cloud.google.com/free/

Note:


## Files Description

```website_with_proxy/main.py```  is the flask app.

```website_with_proxy/app.yaml``` is the deployment file for app engine.


