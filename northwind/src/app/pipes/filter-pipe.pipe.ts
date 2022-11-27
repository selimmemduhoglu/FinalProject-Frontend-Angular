import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/Product.1';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Product[], filterText: string): Product[] {
    filterText = filterText?filterText.toLocaleLowerCase():"" //filterText varsa onu mküçük harfe çek yoksa elleme demek
    return filterText?value.filter((p:Product)=>p.productName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
    //Her bir ürün için ürünleri filtrele, her bir ürünün öncelikle ismini küçük harfe çevir ve filtreleme ifadesi varsa ona göre filtreliyecek yoksa direkt value yi verecek
    //javaScriptteki filter, foreach gibi tek tek dolaşmaya yarıyor
    //!==-1 bu ifade -1 den faklı demek yani varsa demek
  }
  //value: Product[] sayesinde, Total bir ürün listesi vericez. 
  //filterText: string) sayesinde, ürünleri listelicez 
  //Product[], ama yinr bize tabloda gösterebilmek için Array verecek yapımızı bopzmamamız gerekiyor

}
