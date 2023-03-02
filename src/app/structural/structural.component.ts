import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.scss']
})
export class StructuralComponent implements OnInit {

  showPara =true;
  students : Array<{id: number, name: string}> =[];

  enablePara() {
    this.showPara = !this.showPara
  }

  constructor() {
  }

  ngOnInit(): void {
    this.students.push({ id: 1, name: 'Manoj' })
    this.students.push({ id: 2, name: 'Saman' })
    this.students.push({ id: 3, name: 'Kumara' })
    this.students.push({ id: 4, name: 'Aruna' })
  }
}
