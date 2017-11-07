import { Component } from '@angular/core';
import { ProductService } from './products/product.service';
import { Adal4Service } from 'adal-angular4';
// Adal Configuration
const config = {
  tenant: 'ashuadtest.onmicrosoft.com',
  clientId: '84eb9f30-24dc-4720-a1e9-843edfb1bfe6',
  redirectUri: window.location.origin + '/',
  postLogoutRedirectUri: window.location.origin + '/',
  resourceId:"https://ashuadtest.onmicrosoft.com/ECommerce.API"
};

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ProductService]
})
export class AppComponent {
  pageTitle = 'ECommerce Demo';
  constructor(private service: Adal4Service) {
    
        this.service.init(config);
    
  }
  logOut(){
    this.service.logOut();
  }

}
