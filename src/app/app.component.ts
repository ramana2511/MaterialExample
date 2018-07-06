import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    employeeForm = new FormGroup({
      name : new FormControl(),
      address : new FormControl(),
      gender : new FormControl()
    });
    submitForm() {
      console.log(this.employeeForm.value);
      // Reading individual control Value
      // this.form.controls['your form control name'].value
      console.log(this.employeeForm.controls['name'].value);
      }
}
