import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit{

  stock = 6

  @Output()
  updateCart = new EventEmitter<number>()
  @Input()
  incart =2;

  AddToCart():void {

    if ((this.stock - this.incart)<= 0) {
      return
    }else {
      this.stock--;
      this.updateCart.emit(1)
      console.log(this.stock)
    }

  }

  ngOnInit(): void {
  }
}
