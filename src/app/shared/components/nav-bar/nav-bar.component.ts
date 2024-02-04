import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
isScrolled:boolean=false

@HostListener('window:scroll',[])
onWindowScroll(){
  this.isScrolled=window.pageYOffset !== 0 }
}


