import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [ //Rotasını vermiş oldukm 
 { path: "",pathMatch:"full", component: ProductComponent }, //pathmacth:full =Ana sayfamızla eşit olacak sonrasında başka birşeyler gelirse hesaba katma demek.
 { path: "products", component: ProductComponent }, //böyle yazarsa da ProductComponent'i aç demek
 { path: "products/category/:categoryId", component: ProductComponent } 

]; //Bu satır router-outlet 'te ne göstereceğimizi verdiğimiz yerdir.

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
