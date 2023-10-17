import { HttpClient } from '@angular/common/http'
import { Injectable } from "@angular/core";
// import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';



@Injectable({providedIn: 'root'})
export class UserSolutionService{
    constructor(private http: HttpClient) {}


    getListSolution(){
        return this.http
          .get<any>('http://114.119.173.133:8080/insurtech/api/v1/solutionProducts',{
              
          })
          .pipe((res)=>{
            return res
          })
        
      }
}