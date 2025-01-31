import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    policy: false
  }

  mailTest = false;

  post = {
    endPoint: 'https://eduard-fray.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  isFormDisabled = false; 
  showPopup = false; 

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid) {
      this.isFormDisabled = true; 
      this.showPopup = true; 

      
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: () => {
            console.log('Server Response: Success');
            this.resetFormAfterDelay(ngForm); 
          },
          error: (error) => {
            console.error('Error:', error);
            this.resetFormAfterDelay(ngForm);
          },
        });
    }
  }

  resetFormAfterDelay(ngForm: NgForm) {
    setTimeout(() => {
      this.isFormDisabled = false; 
      this.showPopup = false; 
      ngForm.resetForm(); 
    }, 2000); 
  }

}
