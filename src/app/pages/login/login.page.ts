import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Login } from 'src/app/models/login';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private fb: FormBuilder,
    private service: AuthService,
    private router: Router,
    public toastController: ToastController
  ) { }

  ngOnInit() {
  }

  form = this.fb.group({
    login: ['', Validators.required],
    senha: ['', Validators.required]
  });

  logar() {
    if (this.form.invalid) {
      return;
    }

    const login: Login = this.form.value;
    this.service.logar(login).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/home/apontamentos');
      },
      err => {
        console.log(err);
        this.presentToast();
      }
    )
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Usuário ou Senha incorretos.',
      duration: 2000
    });
    toast.present();
  }
}
