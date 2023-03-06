import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit{

  cartValue =2;

  constructor() {
  }

  changeCart(emitValue: number) {
    console.log("child is calling" , emitValue)

    this.cartValue+=emitValue;
    console.log(this.cartValue)
  }

  ngOnInit(): void {
  }

  removeFromCart() {
    if (this.cartValue === 0) {
      return
    }

    this.cartValue--;
  }
}
