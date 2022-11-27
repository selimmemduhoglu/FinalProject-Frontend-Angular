import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //API ye istekte bulunabilmesi için bunu olması lazım(HttpClient için)
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

// Bir component kullanılacağı zaman buraya eklenilmesi gerekiyor(AngularCLI Otomatik ekleniyor zaten)
@NgModule({
  declarations: [ //Kendi modullerimizi buraya koyuyoruz
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipePipe
  ],
  imports: [ // Bizim yazmadığımız dışardan aldığımız module leri de buraya koyuyoruz
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //Yukarıda import etmek yetmez burada da gösterilmiş olması lazım.(HttpClient için)
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
