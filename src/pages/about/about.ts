import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {ItemDetailsPage} from "../item-details/item-details";
import {ListPage} from "../list/list";

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
  itemData:any;


  constructor(private camera: Camera,public httpClient: HttpClient,public aboutCtrl:NavController) {
  }
  moveToList(itemData){
    this.aboutCtrl.push(ListPage, {
      item: itemData
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
                "maxResults":10
              },

              {
                "type": "IMAGE_PROPERTIES",
                "maxResults": 10
              }
            ]
          }
        ]};

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
              this.bestMatchData = data.productList;
              this.moveToList(this.bestMatchData);

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
