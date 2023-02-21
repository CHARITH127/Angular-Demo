import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  price = 100;
  discount = 30;

  highlight =false;


  checkDiscount() : boolean {
    return (this.discount>20)
  }

  colorChanging(): String{
    const finalPrice = this.price - (this.price * this.discount/100);
    return finalPrice > 200 ? 'red' : 'blue'
  }
}
