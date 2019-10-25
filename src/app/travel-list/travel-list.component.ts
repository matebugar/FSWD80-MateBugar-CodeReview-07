import { Component, OnInit } from '@angular/core';
import { TravelService } from "../shared/travel.service";

@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.css']
})
export class TravelListComponent implements OnInit {
 travelArray =[];
 showDeletedMessage : boolean;
 searchText:string = "";

constructor(private travelService: TravelService) { }

 ngOnInit() {
         this.travelService.getTravels().subscribe(
                 (list) => {
                         this.travelArray = list.map( (item) => {
                                return {
                                        $key : item.key,
                                        ...item.payload.val()
                                }
                        })
                 });

}

onDelete($key){
     if(confirm("Are you sure you want to delete this record?")){
       this.travelService.deleteTravel($key);
       this.showDeletedMessage = true;
       setTimeout(()=> this.showDeletedMessage=false , 3000)
     }
   }

 filterCondition(travel){
   return travel.cityName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 || 
           travel.type.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ||
           travel.duration.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1
   ;
 }
}

