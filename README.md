# MyWebsite

## Angular + Flask 

This is a Website, I use to host project demos and my CV.
Since, the backend apis dont have ssl or cors enabled all requests from the front-end are made to the flask server itself. Also, the website is hosted through the same flask server.

## Steps to deploy

### Build the angular app
since we are going to use flask server to deploy let's set the baseHref to /static/ 

```ng build --prod --build-optimizer --baseHref="/static/" ```
  
transfer all the files from dist/my-website/ (except  index.html)  to website_with_proxy/static

### Deploy to google app engine
```
cd website_with_proxy
gcloud init
gcloud app deploy
```

## Files Description

```website_with_proxy/main.py```  is the flask app.
```website_with_proxy/app.yaml``` is the deployment file for app engine.


