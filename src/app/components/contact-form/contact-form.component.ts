import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  formValue: any;
  constructor() { }

  ngOnInit() {
  }
  contactForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    message: new FormControl()
  })
 

   
  onSubmit() {
    localStorage.setItem('form-data', JSON.stringify(this.contactForm.value));
    this.formValue = JSON.parse(localStorage.getItem('form-data'));
    console.log(this.formValue,"formValue")
    console.log(this.contactForm.value);
  }

}
