import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, AfterViewInit {

  @Input() sendtochild

  @Output() broadcastNewFramework = new EventEmitter()

  @ViewChild('mypara1', {static: false}) para1:ElementRef;

  ngAfterViewInit(){
    console.log(this.para1)
    this.para1.nativeElement.innerText = "Prafful Daga"
  }
 
  updateFramework(){
    this.broadcastNewFramework.emit(this.sendtochild)
  }

  constructor() { }

  ngOnInit() {
  }

}
