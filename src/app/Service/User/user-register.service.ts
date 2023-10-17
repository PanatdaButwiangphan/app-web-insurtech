import { HttpClient } from '@angular/common/http'
import { Injectable } from "@angular/core";
// import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';



@Injectable({providedIn: 'root'})
export class UserRegisterService{
  private username: string = '';
  constructor(private http: HttpClient) {}


  userRegister(
    firsname: string,
    email:string,
    phoneNo:string,
    company:string,
    solution : string[]
      ){
    return this.http
    .post<any>('http://114.119.173.133:8080/insurtech/api/v1/userRegister',{
      username: firsname,
        email: email,
        phoneNo: phoneNo,
        company: company,
        solutionProducts: solution,
    })
    .pipe((res) =>{
      return res
    })
  }

  getSolutionProductTitles(){
    return this.http
      .get<any>('http://114.119.173.133:8080/insurtech/api/v1/solutionProducts',{

      })
      .pipe((res)=>{
        return res
      })

  }
  getUsernames(email:string,password:string){
    return this.http
    .get<any>('http://114.119.173.133:8080/insurtech/api/v1/user?email= '+email+' &password= '+password+' ',{


    })
    .pipe((res)=>{
      return res
    })
  }
  // สร้างฟังก์ชันเพื่อกำหนดค่า username
  setUsername(username: string) {
    this.username = username;
  }

  // สร้างฟังก์ชันเพื่อดึงค่า username
  getUsername() {
    return this.username;
  }

  userSignIn(email: string, password: string) {
    const params = new HttpParams()
      .set('email', email)
      .set('password', password);

    return this.http.get<any>(
      'http://114.119.173.133:8080/insurtech/api/v1/user',
      { params }
    );
  }

  
  }






