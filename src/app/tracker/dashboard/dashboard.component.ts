import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';

import { Cookie } from 'ng2-cookies';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


import { AppService } from '../../app.service';
import { SocketService } from './../../socket.service'

//file upload by browse

import *as AWS from 'aws-sdk'



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [SocketService]
})
export class DashboardComponent implements OnInit, OnDestroy {


  otherUsersRealatedIssue: any=[];
  reportedIssue: any=[];
  assignedIssue: any=[];
  public data: any;
  public image1: any;
  public image: any;
  public issueDetails: any;
  public users: any;
  public users1: any;
  public users2:any=[];


  p: number = 1;

  q: number = 1;


  public userId: any;
  public fullName: any;
  public token: any;

  public issueTitle: any;
  public status: any;
  public description: any;
  public attachments: any;
  public assignee: any;

  public newIssueStatus: any

  public newIssueId: any;

  public AllIssues: any;

  //for sorting
  public sortOrder: boolean = false;
  public field: String;


  //for filter
  public filterName: any = { issueTitle: '' };



  //for selecting files
  public selectedFiles: any = []

  constructor(public socketService: SocketService, public appService: AppService, public toastr: ToastrService, public router: Router) { }

  ngOnInit() {


    this.userId = Cookie.get("receiverId");
    this.fullName = Cookie.get("receiverName");
    this.token = Cookie.get('authToken')

    this.verifyUserConfirmation();
    this.getOnlineUserList();
    this.getAllUsers();

    this.getAllIssues()



    this.newIssueAddedResponse()
    this.issueUpdatedResponse()
    this.commentAddedResponse()

  }

  ngOnDestroy() {
    this.socketService.exitSocket()
  }

  //for getting all users
  public getAllUsers = () => {
    this.appService.getAllpeople(this.token).subscribe((apiResponse: any) => {
      this.users1 = apiResponse.data;    
      this.users2=[];
      for(let user of this.users1){
        if(`${user.firstName} ${user.lastName}`!=this.fullName){
          this.users2.push(user)
        }
      }
    })
  }




  //user confirmation

  public verifyUserConfirmation = () => {
    this.socketService.verifyUser().subscribe((response) => {
      this.socketService.setUser(this.token);
      console.log("User is verified")
    })
  }



  public getOnlineUserList: any = () => {

    this.socketService.onlineUserList()
      .subscribe((userListfromdb) => {

        this.users = '';

        for (let x in userListfromdb) {

          let temp = { 'userId': x, 'fullName': userListfromdb[x] };

          this.users = temp;
        }

      });//end subscribe

  }//end getOnlineUserList




  fileEvent(fileInput: any) {
    const AWSService = AWS;
    const region = 'us-east-1';
    const bucketName = 'issue-bucket';
    const IdentityPoolId = 'us-east-1:52d98cae-8b34-4d73-b9be-4fc95204002d';
    const file = fileInput.target.files[0];
    //Configures the AWS service and initial authorization
    AWSService.config.update({
      region: region,
      credentials: new AWSService.CognitoIdentityCredentials({
        IdentityPoolId: IdentityPoolId
      })
    });

    const aws = function () {
      return new Promise((resolve, reject) => {

        //adds the S3 service, make sure the api version and bucket are correct
        const s3 = new AWSService.S3({
          apiVersion: '2006-03-01',
          params: { Bucket: bucketName }
        });
        //I store this in a variable for retrieval later
        console.log(file);

        s3.upload({ Key: file.name, Bucket: bucketName, Body: file, ACL: 'public-read' }, function (err, data) {
          if (err) {
            console.log(err, 'there was an error uploading your file');
            reject(err)
          } else {
            console.log(data, 'File Uploaded');
            this.image = data.Location;
            resolve(data)
          }
        });

      });
    }

    aws()
    .then(response => {
        this.data=response['Location'];
        console.log(this.data);
    })
    .catch(console.error);

  }





  //Getting All Items:
  public getAllIssues = () => {
    this.appService.getIssues(this.token).subscribe((apiResponse: any) => {

      this.AllIssues = apiResponse.data
      
      //sorting issue which are assigned to me
      this.assignedIssue=[];
      this.reportedIssue=[];
      this.otherUsersRealatedIssue=[];


      if(this.AllIssues!=null){

        for(let iss of this.AllIssues){
          if(this.fullName==iss.assignee){
            this.assignedIssue.push(iss);
          }
        }
  
        for(let iss of this.AllIssues){
          if(this.fullName==iss.reporterName){
            this.reportedIssue.push(iss);
          }
        }
  
        for(let iss of this.AllIssues){
          if(this.fullName!=iss.reporterName && this.fullName!=iss.assignee ){
            this.otherUsersRealatedIssue.push(iss);
          }
        }

      }


    }, (err) => {
      console.log(err);
    })
  }


  //for creating OR registering new issue
  public newIssue = () => {
    this.getAllUsers()
    if (!this.issueTitle) {
      this.toastr.warning("Issue title is required");
    } else if (!this.status) {
      this.toastr.warning("Please select status option");
    }
    else {
      let values = {
        issueTitle: this.issueTitle,
        reporterId: this.userId,
        reporterName: this.fullName,
        status: this.status,
        description: this.description,
        attachments: this.data,
        assignee: this.assignee

      }

      this.appService.createIssue(values,this.token).subscribe((apiResponse: any) => {

        if (apiResponse.status == 200) {
          this.toastr.success(apiResponse.message);
          this.issueDetails = apiResponse.data;
          this.newIssueId = apiResponse.data.issueId;
          this.newIssueStatus = apiResponse.status;

          this.issueTitle = ""
          this.status = ""
          this.description = ""

          this.getAllIssues();

          this.socketService.createIssue(this.fullName);

          setTimeout(() => {
            this.router.navigate([`/issueDetails/${this.newIssueId}`]);
          }, 1000);

          this.getAllIssues();

        }
      }, (error) => {
        console.log("Error Occured")
      })
    }
  }


  public newIssueAddedResponse = () => {
    this.socketService.issueAddedResponse().subscribe((response) => {
      this.getAllIssues();
      this.toastr.success(response);
    })
  }



  //listening event for edit title

  public issueUpdatedResponse = () => {
    this.socketService.issueUpdatedResponse().subscribe((response) => {
      this.getAllIssues();
      this.toastr.success(response)
    })
  }



  //listening event for comment on issue
  public commentAddedResponse = () => {
    this.socketService.commentAddedResponse().subscribe((response) => {
      this.getAllIssues();
      this.toastr.success(response)
    })
  }



  //for sorting
  public changeOrder(field) {
    this.sortOrder = !this.sortOrder;
    this.field = field
  }




  //Logout:
  public logout = () => {

    this.appService.logout().subscribe((apiResponse) => {

      if (apiResponse.status === 200) {
        console.log("logout called")
        Cookie.delete('authToken');

        Cookie.delete('receiverId');

        Cookie.delete('receiverName');

        this.socketService.disconnectedSocket();//calling the method which emits the disconnect event.

        this.socketService.exitSocket()

        this.router.navigate(['/']);

      } else {
        this.toastr.error(apiResponse.message)
      } // end condition

    }, (err) => {
      this.toastr.error('Internal Server Error occured')

    });

  }


}
