import { Injectable } from '@angular/core';
import { FormControl , FormGroup , Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  
constructor(private firebase: AngularFireDatabase) { }
	travelList: AngularFireList<any>;

 form = new FormGroup({
     $key: new FormControl(null),
     cityName: new FormControl('', Validators.required),
     duration: new FormControl('', Validators.required),
     description: new FormControl('', [Validators.required, Validators.minLength(30)]),
     type: new FormControl('', Validators.required),
     price: new FormControl('', [Validators.required, Validators.minLength(3)]),
     image: new FormControl('', Validators.required)
         });

 getTravels(){
                 this.travelList = this.firebase.list('travels');
                 return this.travelList.snapshotChanges();
         }

  insertTravel(travel){
                 this.travelList.push({
                         cityName: travel.cityName,
                         type: travel.type,
                         price: travel.price,
                         duration: travel.duration,
                         description: travel.description,
                         image: travel.image
                  });
         }

    populateForm(travel){
                this.form.setValue(travel);
  }

  updateTravel(travel){
                this.travelList.update(travel.$key,{
                         cityName: travel.cityName,
                         type: travel.type,
                         price: travel.price,
                         duration: travel.duration,
                         description: travel.description,
                         image: travel.image
    });
  }

  deleteTravel($key: string){
                this.travelList.remove($key);
  }
}
