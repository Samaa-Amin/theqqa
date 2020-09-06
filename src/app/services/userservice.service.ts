import { Injectable,Inject ,Component} from "@angular/core";
import { HttpClient,HttpHeaders, HttpParams } from "@angular/common/http";
import { authparameters } from "../Model/authparameters";
import {responsedata} from "../Model/ResponseData";
import { userviewmodel } from "../Model/userviewmodel";
import { environment } from "../../environments/environment";
import { User } from "../Model/user";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class userservice {
  public token:String;
  public wepapiurl: string;
 reqHeader = new HttpHeaders({'No-Auth':'True'});
  private headers: HttpHeaders;
  @Inject('BASE_URL') baseUrl: string;
  constructor(private http:HttpClient)
  {
     //this.wepapiurl = "http://gmtccco-001-site1.etempurl.com/api/";
     //this.wepapiurl = "http://gmtccco-001-site3.etempurl.com/api/"; //mahmouddb
       //  this.wepapiurl = "http://gmtccco-001-site4.etempurl.com/api/";
   // this.wepapiurl = "http://gmtccco-001-site5.etempurl.com/api/";
   // this.wepapiurl = "http://gmtccco-001-site8.etempurl.com/api/";   //abosoliman
          //   this.wepapiurl ="https://localhost:5001/api/";
   //this.wepapiurl ="https://127.0.0.1:5001/api/";
          //this.wepapiurl = "http://94.237.92.140/api/";
         // this.wepapiurl = "http://pro-sa.gmtcc.co/api/";
    //this.wepapiurl = "http://alhawili.gmtcc.co/api/";

    // this.wepapiurl = "http://testakarat.gmtcc.co/api/";
    //this.wepapiurl = "http://abdakarat.gmtcc.co/api/";
  // this.wepapiurl = "http://mobilecar.gmtcc.co/api/";
  //this.wepapiurl ="http://gmtccco-001-site10.etempurl.com/api/";
  this.wepapiurl=environment.pathUrl;
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
    let token2 = localStorage.getItem('userToken');
    this.token=token2;
  }


 
  getuserinfo() {
    return this.http.get<responsedata>(this.wepapiurl+'Account/GetUserInfo',  { headers:new HttpHeaders().append('Authorization', `Bearer ${this.token}`)});
} 
 datainfo(userid:any) { 
  let params = new HttpParams();
  params = params.append('userid', userid);
  return this.http.get<userviewmodel>(this.wepapiurl+'Account/datainfo',  { headers:new HttpHeaders().append('Authorization', `Bearer ${this.token}`),params:params});
}

getuserbyid(userid:any) { 
  let params = new HttpParams();
  params = params.append('userid', userid);
  return this.http.get<userviewmodel>(this.wepapiurl+'Account/getuserbyid',  { headers:new HttpHeaders().append('Authorization', `Bearer ${this.token}`),params:params});
}

                        




login(user:User)
 {
  const body: authparameters =
  {
   password: user.password,
   email: user.email,
   grant_type:"password",
   client_id:"AndroidApp",
   client_secret:"321456",
   }
   return this.http.post<responsedata>(this.wepapiurl+'Account/auth',body);
 }

 Register(user:userviewmodel)
 {
   return this.http.post<responsedata>(this.wepapiurl+'Front/Register',user);
 }

 
registerUser(user: User) {
  const body: User =
   {
    password: user.password,
    email: user.email,
    name:user.name,
   }
  return this.http.post<boolean>(this.wepapiurl+'Account/Register', body,{headers :this.reqHeader});
}





    
  Logout() {
    localStorage.removeItem('userToken');
    window.location.replace('/login')

  }



  
ngOnInit() {
}

}
