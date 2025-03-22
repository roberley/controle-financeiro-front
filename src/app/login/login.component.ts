import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
   lstTeste!: any[];

   username: string = '';
   password: string = '';

    constructor(){
      console.log("teste construtor");

      this.lstTeste = [1, 2, 3 , 4 ,5];

      this.lstTeste.forEach(element => {
        console.log(element);
      });
    }

    onLogin() {
      // Handle login logic here
      console.log(`Logging in with username: ${this.username} and password: ${this.password}`);
    }
}
