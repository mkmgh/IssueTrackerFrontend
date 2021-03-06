import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';

import { ToastrService } from 'ngx-toastr';




@Injectable({
  providedIn: 'root'
})
export class TrackerRouteGuardService implements CanActivate {

  constructor(private router: Router, public toastr: ToastrService) { }


  canActivate(route: ActivatedRouteSnapshot): boolean {

    console.log("in guard service");

    if (Cookie.get('authToken') === undefined || Cookie.get('authToken') === '' || Cookie.get('authToken') === null) {
      this.toastr.error("Token Expired, Please login again");
      this.router.navigate(['/']);

      return false;

    } else {

      return true;

    }

  }

}
