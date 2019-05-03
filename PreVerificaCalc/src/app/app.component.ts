import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myForm: FormGroup;
  risultato: Number;

  constructor(fb: FormBuilder){
    this.myForm = fb.group({'numero1' : ['1', Validators.required],'nuemero2' : ['2', Validators.required]
    });
  }
somma():void{
  this.risulto = Number(this.myForm.controls['numero1'].values) + Number(this.myForm.controls['numero1'].values);
}
moltiplicazione():void{
  this.risulto = Number(this.myForm.controls['numero1'].values) + Number(this.myForm.controls['numero1'].values);
}
moltiplicazione():void{
  this.risulto = Number(this.myForm.controls['numero1'].values) + Number(this.myForm.controls['numero1'].values);
}
divisione():void{
  this.risulto = Number(this.myForm.controls['numero1'].values) + Number(this.myForm.controls['numero1'].values);
}
}