import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SendBirthdayWishesService } from '../send-birthday-wishes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-birthday-wish',
  templateUrl: './birthday-wish.component.html',
  styleUrls: ['./birthday-wish.component.css']
})
export class BirthdayWishComponent implements OnInit{
  show = false
  thanks = false
  from: string = "sirpiyamahi97@gmail.com";
  sub:string = "Happy Birthday!";
  message: string = "Wishing you a very happy birthday!";
  private apiUrl = 'http://localhost:8080/api';
  email: string="";

  constructor(private route: ActivatedRoute,private http: HttpClient, private sendBirthdayWishesService: SendBirthdayWishesService) {}
  ngOnInit(): void {
    this.http.get<string>(`${this.apiUrl}/birthday-today`).subscribe((email) => {
      this.email = email;
     });
  }
 
  sendWishes() {
    this.sendBirthdayWishesService.sendBirthdayWishes()
      .subscribe(response => {
        console.log(response.body);
      }, error => {
        console.log(error);
      });
  }

  openpopup(){
    this.show =true
  }

  closepopup(){
    this.show = false
  }

  sendpopup(){
    this.show = true

  }
  alertConfirmation() {
    Swal.fire({
      /*title: 'Hello GoodMorning!?',*/
      text: 'Your Birthday wish has been sent successfully',
      iconHtml: '<img src="data:image/png;base64,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">',
      showCancelButton: false,
      confirmButtonText: 'Thankyou',
      /*cancelButtonText: 'discard',*/
    })/*.then((result) => {
      if (result.value) {
        Swal.fire('sent!', 'Send Successfully,Thank you.', 'success');
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'close.)', 'error');
      }
    });*/
  }

 

}
