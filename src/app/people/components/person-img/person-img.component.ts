import { Component, Input, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-person-img',
  templateUrl: './person-img.component.html',
  styleUrls: ['./person-img.component.css']
})
export class PersonImgComponent implements OnInit {
  personImg='http://image.tmdb.org/t/p/w500/'
  personImages:any[]=[]

  constructor(private _peopleService:PeopleService){}

  @Input() personId:number=0
  
  ngOnInit(): void {
    this._peopleService.getPersonImg(this.personId).subscribe({
      next:(response)=>{
        this.personImages=response.profiles
        console.log(this.personImages)

      }
    })
  }

  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 400,
    slideBy:6,
    margin:0,
    navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 3
      },
      740: {
        items: 4
      },
      940: {
        items: 6
      }
    },
    nav: true
  }
}
