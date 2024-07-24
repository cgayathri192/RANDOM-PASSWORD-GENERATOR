import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 password = '';
  
 public generatePassword(){
   this.password = Math.random().toString(36).slice(-8);
 }
}
