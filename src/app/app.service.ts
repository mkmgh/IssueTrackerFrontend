import { Injectable } from '@angular/core';

//for using cookies
import { Cookie } from 'ng2-cookies/ng2-cookies';

//Importing the required files for http services.
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
//import { Observable } from 'rxjs';
import { HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url =  'http://api-issuetracker.emayurm.in.net';

  private baseURL = `${this.url}/api/v1`;



  constructor(
    public http: HttpClient
  ) { }


  public getUserInfoFromLocalstorage = () => {

    return JSON.parse(localStorage.getItem('userInfo'));

  } // end getUserInfoFromLocalstorage


  public setUserInfoInLocalStorage = (data) =>{

    localStorage.setItem('userInfo', JSON.stringify(data))


  }

  public signinFunction(data): Observable<any> {
    
    const params = new HttpParams()
      .set('email', data.email)
      .set('password', data.password);
      
    return this.http.post(`${this.url}/api/v1/users/login`, params);
  } // end of signinFunction function.



  //Method to get country list
  public getCountryList=()=>{
    let response=this.http.get('../assets/countries.json');
    return response;
  }//end

  //method to get country code
  public getCountryCode=()=>{
    let response=this.http.get('../assets/country-code-list.json');
    return response;
  }//end


  public signupFunction(data): Observable<any> {

    const params = new HttpParams()
      .set('firstName', data.firstName)
      .set('lastName', data.lastName)
      .set('mobileNumber', data.mobileNumber)
      .set('email', data.email)
      .set('password', data.password)
      .set('country',data.country)

    return this.http.post(`${this.url}/api/v1/users/signup`, params);

  } // end of signupFunction function.


    //Method to verify email
    public verifyEmail = (data): Observable<any> => {
      return this.http.get(`${this.url}/api/v1/users/${data}/verifyUser`);
    }
    //end method
  
    public sendResetLink(email): Observable<any> {
        // console.log(this.url+"/api/v1/users/forgotPassword");
          const params = new HttpParams()
          .set('email', email)
          return this.http.post(`${this.url}/api/v1/users/forgotPassword`,params);
    } // end of sendResetLink function.
   
  
    public resetPassword(data: any): Observable<any> {
      const params = new HttpParams()
        .set('userId', data.userId)
        .set('password', data.password);
      return this.http.post(`${this.url}/api/v1/users/resetPassword`, params);
  
    }//end resetPassword Function


    //Get All Users:
    public getAllpeople = (token): Observable<any> => {
      return this.http.get(`${this.baseURL}/users/view/allUsers?authToken=${token}`)
    }




    //Method to get All issues
    public getIssues = (token): Observable<any> => {
      return this.http.get(`${this.url}/api/v1/issues/allIssues?authToken=${token}`);
    }
    //end method


    //Creating a new Issue:
    public createIssue = (data,token): Observable<any> => {
      const params = new HttpParams()
        .set("issueTitle", data.issueTitle)
        .set("reporterId", data.reporterId)
        .set("reporterName",data.reporterName)
        .set("status",data.status)
        .set("description",data.description)
        .set("attachments",data.attachments)
        .set("assignee",data.assignee)

        return this.http.post(`${this.baseURL}/issues/registerIssue?authToken=${token}`, params)
    }

    //Method to get single issue details
    public getIssue = (issueId,token): Observable<any> => {
      return this.http.get(`${this.url}/api/v1/issues/${issueId}/getIssue?authToken=${token}`);
    }
    //end method

    //Method to edit issue title
    public editIssue = (data,token) : Observable<any> => {
      const params = new HttpParams()
      .set('issueTitle', data.issueTitle)
      .set('status', data.status)
      .set('description', data.description)
      .set('assignee', data.assignee);
      return this.http.put(`${this.baseURL}/issues/${data.issueId}/editIssue?authToken=${token}`,params);

    }


    //add a new comment to issue:
    public addComment = (data,token) : Observable<any> => {
      const params = new HttpParams()
        .set("issueId", data.issueId)
        .set("userId", data.userId)
        .set("userName",data.userName)
        .set("comment",data.comment)
        return this.http.post(`${this.baseURL}/comments/addComment?authToken=${token}`, params)
    }


    //Method to get all comments on Issue
    public getAllCommentOnIssue = (issueId,token): Observable<any> => {
      return this.http.get(`${this.baseURL}/comments/${issueId}/getCommentsOnIssue?authToken=${token}`);
    }
    //end method





    public logout(): Observable<any> {
      const params = new HttpParams()
      .set('authToken', Cookie.get('authToken'));

      return this.http.post(`${this.baseURL}/users/logout`,params);
  
    } // end logout function
  


}
