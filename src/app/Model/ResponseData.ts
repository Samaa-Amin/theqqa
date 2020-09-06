export class responsedata
{
     code : string;
     message : string;
     data : any;
    
}
export interface data
{
    access_token:string;
    expires_in:Date;
    refresh_token:string;
}
export interface userdatainfo
{
    id:any;
    email:string;
    ruleId:number;
    updatedat:Date;
    userName:string;
}
export interface clientuserdata
{
     namear:string;
     nameen:string;
     address:string;
     nationalid:string;
     phone:string;
     fax:string;
     mobile:string;
}