import { Component, Input, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-person-img',
  templateUrl: './person-img.component.html',
  styleUrls: ['./person-img.component.css']
})
export class PersonImgComponent implements OnInit {

  constructor(private _peopleService:PeopleService){}

  @Input() personId:number=0
  ngOnInit(): void {
    this._peopleService.getPersonImg(this.personId).subscribe({
      next:(response)=>{
        console.log(response)
      }
    })
  }

}
