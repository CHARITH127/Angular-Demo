import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.scss']
})
export class StructuralComponent implements OnInit {

  showPara =true;

  enablePara() {
    this.showPara = !this.showPara
  }

  ngOnInit(): void {
  }
}
