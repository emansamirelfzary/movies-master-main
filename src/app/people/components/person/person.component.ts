import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit{
  personId:number=0

  constructor(private _activatedRoute:ActivatedRoute, private _peopleService:PeopleService){}

  ngOnInit(): void {

     this._activatedRoute.paramMap.subscribe({
    next:(response:any)=>{
      this.personId=response.params.id
    }
  })

  this._peopleService.getPeron(this.personId).subscribe({
    next:(response)=>{
      console.log(response)
    }
  })
  }

}
