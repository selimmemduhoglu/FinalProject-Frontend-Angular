import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  transform(value: number, rate:number): number { 
    //value ----------> ilk değerimizdir yani bizim pipe'ımızın değiştirmek istediği değerdir
    //rate ise bizim parametremizdir. 
    return value + (value * rate / 100 );
  }

}
//Pipe ( | ), elimizde ki veriyi görsel olarak daha farklı göstermek için kullanılır (Çok suistimal etme)
//52.12