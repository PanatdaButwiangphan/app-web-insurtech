import { HttpClient } from '@angular/common/http'
import { Injectable } from "@angular/core";
// import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';



@Injectable({providedIn: 'root'})
export class UserSolutionService{
    constructor(private http: HttpClient) {}


    getListSolution(){
        return this.http
          .get<any>('http://94.74.114.51:7080/insurtech/api/v1/solutionProducts',{
              
          })
          .pipe((res)=>{
            return res
          })
        
      }
}