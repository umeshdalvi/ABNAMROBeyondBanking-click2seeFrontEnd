import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public base64Image: string;
  films: Observable<any>;
  public outputData:Object;
  public isData: string = 'a';
  bestMatch :Observable<any>;
  bestMatchData :Observable<any>;


  constructor(private camera: Camera,public httpClient: HttpClient) {
  }
  callService(){
    let inputObject ={
      "responses": [{
        "imagePropertiesAnnotation": {
          "dominantColors": {
            "colors": [{
              "color": {
                "red": 26,
                "green": 25,
                "blue": 22
              },
              "score": 0.31729937,
              "pixelFraction": 0.14504373
            },
              {
                "color": {
                  "red": 97,
                  "green": 77,
                  "blue": 58
                },
                "score": 0.15669495,
                "pixelFraction": 0.04373178
              },
              {
                "color": {
                  "red": 232,
                  "green": 233,
                  "blue": 236
                },
                "score": 0.06751348,
                "pixelFraction": 0.059475217
              },
              {
                "color": {
                  "red": 49,
                  "green": 47,
                  "blue": 45
                },
                "score": 0.2176696,
                "pixelFraction": 0.12842566
              },
              {
                "color": {
                  "red": 135,
                  "green": 109,
                  "blue": 82
                },
                "score": 0.04772116,
                "pixelFraction": 0.03950437
              },
              {
                "color": {
                  "red": 83,
                  "green": 84,
                  "blue": 85
                },
                "score": 0.044779345,
                "pixelFraction": 0.06763849
              },
              {
                "color": {
                  "red": 71,
                  "green": 56,
                  "blue": 42
                },
                "score": 0.0422844,
                "pixelFraction": 0.011516035
              },
              {
                "color": {
                  "red": 197,
                  "green": 197,
                  "blue": 201
                },
                "score": 0.03227507,
                "pixelFraction": 0.07755102
              },
              {
                "color": {
                  "red": 123,
                  "green": 125,
                  "blue": 128
                },
                "score": 0.02837415,
                "pixelFraction": 0.14446065
              },
              {
                "color": {
                  "red": 163,
                  "green": 163,
                  "blue": 167
                },
                "score": 0.017537361,
                "pixelFraction": 0.17565598
              }
            ]
          }
        },
        "cropHintsAnnotation": {
          "cropHints": [{
            "boundingPoly": {
              "vertices": [{},
                {
                  "x": 719
                },
                {
                  "x": 719,
                  "y": 249
                },
                {
                  "y": 249
                }
              ]
            },
            "confidence": 0.79999995,
            "importanceFraction": 1
          }]
        },
        "webDetection": {
          "webEntities": [{
            "entityId": "/g/1pznxdfs2",
            "score": 1.0757506,
            "description": "2014 Tesla Model S"
          },
            {
              "entityId": "/m/0dr90d",
              "score": 1.0503,
              "description": "Tesla Motors"
            },
            {
              "entityId": "/m/0j6n6s8",
              "score": 1.00125,
              "description": "Tesla"
            },
            {
              "entityId": "/g/11gfk11045",
              "score": 0.97755915,
              "description": "2018 Tesla Model S"
            },
            {
              "entityId": "/m/0k4j",
              "score": 0.95939994,
              "description": "Car"
            }
          ]


          ,
          "bestGuessLabels": [{
            "label": "tesla model s",
            "languageCode": "en"
          }]
        }
      }]
    }
    this.films = this.httpClient.post('https://axpncqlr97.execute-api.eu-west-1.amazonaws.com/Prod',JSON.stringify(inputObject));
    this.films
      .subscribe(data => {
        console.log('my data: ', data);
        this.outputData=data;

        if(this.outputData!==null){
          this.isData='true';
        }
        else{
          this.isData='na ho paaya';

        }
  }, (err) => {
  console.log(err);
  this.outputData = err;

});
  }

  takePicture() {
   /* let headers = new Headers();
    headers.append("Content-Type", "application/json");*/

    this.camera.getPicture({
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
      //      targetWidth: 1000,
      //      targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
      this.base64Image = "data:image/jpeg;base64," + imageData;
      this.isData='true';
      let cameraObject={"requests":[
          {
            "image":{
              "content":imageData
            },
            "features":[
              {
                "type":"WEB_DETECTION",
                "maxResults":5
              },

              {
                "type": "IMAGE_PROPERTIES",
                "maxResults": 5
              }
            ]
          }
        ]};
      let inputObject ={
        "responses": [{
          "imagePropertiesAnnotation": {
            "dominantColors": {
              "colors": [{
                "color": {
                  "red": 26,
                  "green": 25,
                  "blue": 22
                },
                "score": 0.31729937,
                "pixelFraction": 0.14504373
              },
                {
                  "color": {
                    "red": 97,
                    "green": 77,
                    "blue": 58
                  },
                  "score": 0.15669495,
                  "pixelFraction": 0.04373178
                },
                {
                  "color": {
                    "red": 232,
                    "green": 233,
                    "blue": 236
                  },
                  "score": 0.06751348,
                  "pixelFraction": 0.059475217
                },
                {
                  "color": {
                    "red": 49,
                    "green": 47,
                    "blue": 45
                  },
                  "score": 0.2176696,
                  "pixelFraction": 0.12842566
                },
                {
                  "color": {
                    "red": 135,
                    "green": 109,
                    "blue": 82
                  },
                  "score": 0.04772116,
                  "pixelFraction": 0.03950437
                },
                {
                  "color": {
                    "red": 83,
                    "green": 84,
                    "blue": 85
                  },
                  "score": 0.044779345,
                  "pixelFraction": 0.06763849
                },
                {
                  "color": {
                    "red": 71,
                    "green": 56,
                    "blue": 42
                  },
                  "score": 0.0422844,
                  "pixelFraction": 0.011516035
                },
                {
                  "color": {
                    "red": 197,
                    "green": 197,
                    "blue": 201
                  },
                  "score": 0.03227507,
                  "pixelFraction": 0.07755102
                },
                {
                  "color": {
                    "red": 123,
                    "green": 125,
                    "blue": 128
                  },
                  "score": 0.02837415,
                  "pixelFraction": 0.14446065
                },
                {
                  "color": {
                    "red": 163,
                    "green": 163,
                    "blue": 167
                  },
                  "score": 0.017537361,
                  "pixelFraction": 0.17565598
                }
              ]
            }
          },
          "cropHintsAnnotation": {
            "cropHints": [{
              "boundingPoly": {
                "vertices": [{},
                  {
                    "x": 719
                  },
                  {
                    "x": 719,
                    "y": 249
                  },
                  {
                    "y": 249
                  }
                ]
              },
              "confidence": 0.79999995,
              "importanceFraction": 1
            }]
          },
          "webDetection": {
            "webEntities": [{
              "entityId": "/g/1pznxdfs2",
              "score": 1.0757506,
              "description": "2014 Tesla Model S"
            },
              {
                "entityId": "/m/0dr90d",
                "score": 1.0503,
                "description": "Tesla Motors"
              },
              {
                "entityId": "/m/0j6n6s8",
                "score": 1.00125,
                "description": "Tesla"
              },
              {
                "entityId": "/g/11gfk11045",
                "score": 0.97755915,
                "description": "2018 Tesla Model S"
              },
              {
                "entityId": "/m/0k4j",
                "score": 0.95939994,
                "description": "Car"
              }
            ]


            ,
            "bestGuessLabels": [{
              "label": "tesla model s",
              "languageCode": "en"
            }]
          }
        }]
      }

      this.films = this.httpClient.post('https://vision.googleapis.com/v1/images:annotate?key=AIzaSyAsClBbOSeZ1WmVPKDQ5FsJQ_7p0pUnht8',JSON.stringify(cameraObject),{headers:{'Content-Type': 'application/json'}});
      //this.films = this.httpClient.post('https://axpncqlr97.execute-api.eu-west-1.amazonaws.com/Prod',JSON.stringify(inputObject));
      this.films
        .subscribe(data => {
          this.outputData=data;
            this.isData='true';
          this.bestMatch = this.httpClient.post('https://axpncqlr97.execute-api.eu-west-1.amazonaws.com/Prod',JSON.stringify(this.outputData));
          this.bestMatch
            .subscribe(data => {
              console.log('my data: ', data);
              this.bestMatchData = data;
            }, (err) => {
              console.log(err);
              this.bestMatchData = err;

            });

        },(err) => {
        console.log(err);
        this.outputData = err;

      })
    }, (err) => {
      console.log(err);
      this.outputData = err;

    });
  }

}
