import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from "@angular/forms";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";
import { TravelComponent } from './travel/travel.component';
import { TravelListComponent } from './travel-list/travel-list.component';
import { TravelService } from "./shared/travel.service";
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TravelPageComponent } from './travel-page/travel-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';

@NgModule({
 declarations: [
   AppComponent,
   TravelComponent,
   TravelListComponent,
   NavbarComponent,
   HeroComponent,
   FooterComponent,
   HomePageComponent,
   TravelPageComponent,
   BlogPageComponent
 ],
 imports: [
   BrowserModule,
   AppRoutingModule,
   ReactiveFormsModule,
   AngularFireModule.initializeApp(environment.firebaseConfig),// we called initializeApp function to provide connection details
   AngularFireDatabaseModule,// we will import the classes here too
   FormsModule
 ],
 providers: [TravelService],
 bootstrap: [AppComponent]
})
export class AppModule { }

