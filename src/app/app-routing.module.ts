import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent} from './home-page/home-page.component';
import { TravelPageComponent} from './travel-page/travel-page.component';
import { BlogPageComponent} from  './blog-page/blog-page.component';

const routes: Routes = [

{

        path: "",component: HomePageComponent

},

{

        path:"blog",component: BlogPageComponent

} 
,

{

        path:"travel",component: TravelPageComponent

}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
