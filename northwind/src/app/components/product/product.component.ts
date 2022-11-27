import { Component, importProvidersFrom, OnInit } from '@angular/core';
import { Product } from "src/app/models/Product.1";
// HttpClient ile API ye bağlanabiliyoruz, bağlanmak için aşağıdakini kullanıyoruz(Artık bir backend e istekte bulunabiliyoruz. )
import { HttpClient } from '@angular/common/http';


import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
// any:Her veri türü olabilir demek, {}:object demek
// component: data nın html doyasındaki datası demek

export class ProductComponent implements OnInit {

  // bu method componen ilk açıldığında çalışan fonksiyondur


  products: Product[] = [];
  dataLoaded = false; //Şu an false fakat aşağı da yüklendiği anda true  yapıyoruz.
  filterText = "";

  //  :(iki nokta üst üste) tür demektir
  // constructor'un içi (Ben HttpClient türünde bir nesne istiyorum demiş oluyoruz)
  // private diyerek dışardan erişilmesin sadece bu classta kullanılabilsin diye yazdık
  // constructor'ın amacı burada ProductComponent'i bellekte oluşturmaktır(yani bir instance ını yaratmaktır - new'lemektir)


  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) { }
  //ActivatedRoute = Aktifleştilmiş rota=mevcut rota ( url kısmından bahsediyoruz)

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      if (params["categoryId"]) {
        this.getProductsByCategory(params["categoryId"])
      }
      else {
        this.getProducts()
      }
    })
  }
  getProducts() {
    this.productService.getProducts().subscribe(response => { // bu satırdaki işlem Async'dir)
      this.products = response.data
      this.dataLoaded = true; //Yukarı da ki false method da direkt true oluyor(SPINNER İÇİN YAPTIK)

      //Bu satır yukarıdaki Async olan satırı Senkron yapmaya yarıyor.(Method senkron bir şekilde çalışsın diye)
      // this.productService.getProducts a subscribe ol demek
    });

  }
  getProductsByCategory(categoryId: number) {
    this.productService.getProductsByCategory(categoryId).subscribe(response => {
      this.products = response.data
      this.dataLoaded = true;
    });
  }
}