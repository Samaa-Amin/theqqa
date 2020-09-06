import { Component, OnInit , HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
    
  MenuStatus=false;
  showSearch=false;
  isScrolled=false;
  collapsOpen=false;

  @HostListener("document:scroll")
  scrollFun(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
     this.isScrolled=true
    }else{
     this.isScrolled=false
    }
   }

// remove side menu on blur
   removeSideMenu(){
    if(this.MenuStatus){
      this.MenuStatus=false;
        }
   }

  toggleSideMenu(){
  this.MenuStatus=!this.MenuStatus
  }

  showSearchBar(){
    this.showSearch=! this.showSearch
  }

  // collapse in side menu
  collapseStatus(){
    this.collapsOpen=!this.collapsOpen
  }






}
