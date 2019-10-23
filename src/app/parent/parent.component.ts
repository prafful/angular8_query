import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  framework = "Angular 8"

  frameworkUpdated(e){
    this.framework = e
  }

  constructor() { }

  ngOnInit() {
  }

}
