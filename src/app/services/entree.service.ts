import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entree } from '../model/entree';

@Injectable({
  providedIn: 'root'
})
export class EntreeService {
 baseUrl = 'http://localhost:8080/api/';
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
  public async  getAllEntree() {
    
    let list =[] ;
    await this.http.get<Entree[]>(this.baseUrl+'entrees').toPromise().then((data)=>
     {
       if(data!=null){
         for (let i = 0 ; i< data.length; i++){
           list.push(data[i]);  
        }
  }
   });
  
    return list;
   
  }
  /*deleteEntree(id: String): Observable<any> {  
		return this.http.delete(this.baseUrl+'deletCompany/'+${id}, { responseType: 'text' });  
	  } */
 
}
