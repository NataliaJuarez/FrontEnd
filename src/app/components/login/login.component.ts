import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { loginUser } from 'src/app/modelo/login-user';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  faRightToBracket = faRightToBracket;
  isLogged = false;
  isLogginFail = false;
  loginUsuario! : loginUser;
  nombreUsuario! : string;
  password! : string;
  roles: string[] = [];
  errorMsj!: string;

  constructor(private router:Router, private tokenService: TokenService, private authService: AuthService) { }
  

  ngOnInit():void{
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void{
    this.loginUsuario = new loginUser(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe(data => {
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate([''])
      }, err => {
        this.isLogged = false;
        this.isLogginFail = true;
        this.errorMsj = err.error.mensaje;
        console.log(this.errorMsj);
      })
  }

  goBack(){
    this.router.navigate(['/portfolio']);
  }
}
