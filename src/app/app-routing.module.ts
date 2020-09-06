import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { LogInComponent } from './log-in/log-in.component';

const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"signUp" , component:SignUpComponent},
  {path:"logIn" , component:LogInComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

//     // navbar
// const navOptions = {
//   rootMargin: "-50px 0px 0px 0px"
// };
// const homeSectionObserver = new IntersectionObserver(function(enteries , homeSectionObserver){
//   enteries.forEach(entery=>{
//       if(!entery.isIntersecting){
//           navbar.classList.add("nav-scroll")
//       }else{
//           navbar.classList.remove("nav-scroll")
//       }
//   })
// },navOptions)

// homeSectionObserver.observe(homeSection)
 }
