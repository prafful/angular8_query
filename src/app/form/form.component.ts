import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  reactiveScoreForm: any

  temperature = [25,30,44,15]
  temp2 = [44,88,99, ...this.temperature, 71, 17]

  addData(sf){
    console.log(sf.value);
  }

  addReactiveData(rsf){
    console.log(rsf);
    console.log(this.temp2);
    //this.callMe(...this.temperature)

  }

  callMe(a, b, c, d,){
    console.log(a + " "+ b +" " + c+" " +d);
  }

  constructor() { }

  ngOnInit() {
    this.reactiveScoreForm = new FormGroup({
      fname: new FormControl("", Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('^[a-zA-Z]+$')
      ])),
      score: new FormControl(4 , this.customValidator )
    })
  }

  customValidator(controlInstance){
    console.log(controlInstance);
    if(controlInstance.value < 10){
      return {score:true}
    }

  }

}
