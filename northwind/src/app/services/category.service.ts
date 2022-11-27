import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Category } from "../models/category";
import { ListResponseModel } from "../models/ListResponseModel";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  //Bir service den API isteği yapmak için yapılması gereken çalışma bunlardır.

  apiUrl = "https://localhost:44314/api/categories/getall";

  constructor(private httpClient: HttpClient) { } //(injection dur) //Bir API ye bağlanmak için burada ki HttpClient a ihtiyacımız var.

  getCategories(): Observable<ListResponseModel<Category>>   /*Bu subscrabe olunabilir demek*/
  //ürünleri getirmek istiyoruz(get isteğini apiUrl e gönderiyoruz)
  {
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl); /*Bu bir observable olduğu için yukarda belirttik ve dönüş tipini yazdık)*/
  }
  
}
