import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tesztelgetes';
  cim="Szia";
  userName="Alap";
  users:any=[];

  addUser(username:string){
    this.users.push(username);
  }
  deleteUsers(){
    this.users=[];
  }
}
