import { Component,OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';

import { Adal4Service, Adal4HTTPService } from 'adal-angular4';

@Component({
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent implements OnInit {
    public pageTitle: string = 'Welcome';
    constructor(private service: Adal4Service, private http: Adal4HTTPService) { }
    ngOnInit() {
        
            // Handle callback if this is a redirect from Azure
            this.service.handleWindowCallback();
        
            // Check if the user is authenticated. If not, call the login() method
            if (!this.service.userInfo.authenticated) {
              this.service.login();
            }
            
            // Log the user information to the console
            console.log('username ' + this.service.userInfo.username);
        
            console.log('authenticated: ' + this.service.userInfo.authenticated);
        
            console.log('name: ' + this.service.userInfo.profile.name);
        
            console.log('token: ' + this.service.userInfo.token);
            localStorage.setItem('token',this.service.userInfo.token);
            console.log(this.service.userInfo.profile);
          }
          public logout() {
            this.service.logOut();
          }
}
