import { Component } from '@angular/core';
import emailjs from 'emailjs-com';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  name: any;
  email: any;
  message: any;

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.sendEmail();
      alert('Message sent successfully!');
      this.contactForm.reset();
    } else {
      this.contactForm.markAllAsTouched();
    }
  }

  sendEmail() {
    const formValue = this.contactForm.value;
    emailjs.send(
      'service_boxjn6m',
      'template_oc6e5wu',
      {
        name: formValue.name,
        email: formValue.email,
        message: formValue.message
      },
      'our4eu9q2ZTP8GOjN'
    ).then(
      (result: any) => console.log('SUCCESS', result),
      (error:any) => console.log('FAILED', error)
    );
  }
}
