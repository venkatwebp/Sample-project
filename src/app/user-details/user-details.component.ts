import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  users: any;
  p: string|number|undefined;

  constructor(private auth: AuthService){}

  ngOnInit(){
    this.auth.getUnivercityData().subscribe((res:any) =>{
      this.users = res;
    })
  }

}
