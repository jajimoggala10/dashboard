import { Component,OnInit,EventEmitter,Output } from '@angular/core';
import { navbarData } from './nav-data';

interface SideNavToggle{
screenWidth:number;
collapsed:boolean;
  
  }

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

@Output() onToggleSideNav:EventEmitter<SideNavToggle>=new EventEmitter();
collapsed=false;
screenWidth=0;
navData=navbarData;
  classList: any;
constructor() { }
  ngOnInit(): void {
 }
 toggleCollapse():void{
  
  this.collapsed=!this.collapsed;
  
  this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth});
  }

  
  

}
