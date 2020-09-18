import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  progress = 0;
  timer : any;
  public text: boolean = false;

  public show: boolean = true;

  constructor(private router : Router) { }

  ngOnInit() {
    this.timer = setInterval(() => { 
      this.progress += 15;
      if(this.progress >= 100) {
        clearInterval(this.timer);
        this.router.navigate(['/']);
      } 

    }, 1000);

  }

  onStop() {
    clearInterval(this.timer);
  }

  izbaciText() {
    this.text = true;
  }

  toggle() {
    this.show = !this.show;
  }

}
