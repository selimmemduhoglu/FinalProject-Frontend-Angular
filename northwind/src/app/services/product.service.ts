import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; /*Observable rxjs den gelir*/
import { ListResponseModel } from "../models/ListResponseModel";
import { Product } from '../models/Product.1';

@Injectable({
  providedIn: 'root'
})
export class ProductService {   //Bir service den API isteği yapmak için yapılması gereken çalışma bunlardır.
  
  apiUrl = 'https://localhost:44314/api/';

  constructor(private httpClient: HttpClient) { } //(injection dur) //Bir API ye bağlanmak için burada ki HttpClient a ihtiyacımız var.
  getProducts(): Observable<ListResponseModel<Product>>   /*Bu subscrabe olunabilir demek*/ //ürünleri getirmek istiyoruz(get isteğini apiUrl e gönderiyoruz)
  {
    let newPath = this.apiUrl + "products/getall"
    return this.httpClient.get<ListResponseModel<Product>>(newPath); /*Bu bir observable olduğu için yukarda belirttik ve dönüş tipini yazdık)*/
  }

  getProductsByCategory(categoryId: number): Observable<ListResponseModel<Product>> 
  {
    let newPath = this.apiUrl + "products/getbycategory?categoryId=" + categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
}
