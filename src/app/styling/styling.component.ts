import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-styling',
  templateUrl: './styling.component.html',
  styleUrls: ['./styling.component.scss']
})
export class StylingComponent implements OnInit{

  highlight = false
  underline = false
  primary = false
  styleClass={};


  highlight_ = true
  underline_ = false
  primary_ = false
  ngstyles={};

  constructor() {
  }

  ngOnInit(): void {
    this.setStyls()
    this.setStyleClasses()
  }

  setStyls():void{
    this.styleClass={
      hightlight:this.highlight,
      primary:this.primary,
      underline:this.underline
    }

    console.log(this.styleClass)
    console.log(this.highlight)
  }

  setStyleClasses():void{
    this.ngstyles={
      'background-color' : this.highlight_?'yellow':'white',
      'color':this.primary_?'blue':'black',
      'text-decoration':this.underline_?'underline':'none'
    }
  }

}
