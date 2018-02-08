import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Shop } from './shop';
import { Observable } from 'rxjs/Observable';
import { Form } from './form';
import { Router } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable()
export class UserService {
  

  constructor(private http : HttpClient,private router : Router) { }
  uri ="http://localhost:8080/authentification/";
  regitUri ="http://localhost:8080/register/";
  url :any;
  authenticatedUser : User;
  message : String;
  resForm : any;
  isAuthenticated : boolean = false;

  getUPreferredShops(): Shop[] {
     if (this.authenticatedUser != null) {
      console.log(this.authenticatedUser.preferredShops)
      return this.authenticatedUser.preferredShops;
     }
  }

  registerService(form : Form) : void {
    console.log("register service called");
    console.log(form);
      this.http.post<User>("http://localhost:8080/register", form, httpOptions)
      .map(data => data).subscribe(data => {
        if(data){
          console.log("added User",data);
          this.router.navigate(['welcome']);
        }
      });
    
  }

  postForm(form : any){
    console.log("postForm called");
    console.log(form);
    return this.http.post("http://localhost:8080/form",form).map(data =>data)
    .subscribe(data  =>  {
      this.resForm = data;
      console.log(this.resForm );
    });
  }

  login(form : any) : any {
    console.log("postFormLogin called");
    console.log(form);
    return this.http.post<User>("http://localhost:8080/authentification",form).map(data =>data)
    .subscribe(data  =>  {
      console.log("data : ",data);
      if(data==null){
        this.isAuthenticated=false;
        this.message="uncorrect email or password";
        console.log("from service", this.message);
      }else{
        this.isAuthenticated=true;
        this.authenticatedUser = data;
        this.router.navigate(['dashboard']);
      }
      
    });
  }


  

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}

