import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.scss']
})
export class StructuralComponent implements OnInit {

  showPara = true;
  students: Array<{ id: number, name: string , rating : number }> = [];

  enablePara() {
    this.showPara = !this.showPara
  }

  constructor() {
  }

  ngOnInit(): void {
    this.students.push({id: 1, name: 'Manoj' , rating : 5})
    this.students.push({id: 2, name: 'Saman' , rating : 4})
    this.students.push({id: 3, name: 'Kumara' , rating : 3})
    this.students.push({id: 4, name: 'Aruna' , rating : 5})
  }

  reloadStudents() {
    this.students = []
    this.students.push({id: 1, name: 'Manoj' , rating : 3})
    this.students.push({id: 2, name: 'Kasun' , rating : 5})
    this.students.push({id: 3, name: 'Sunil' , rating : 3})
    this.students.push({id: 4, name: 'Chethana' , rating : 4})
  }


  byId(index: number, s: { id: number, name: string }) {
   return s.id
  }
}
