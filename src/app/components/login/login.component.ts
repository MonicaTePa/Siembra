import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup

  validacionEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      // usuario: ['', [Validators.required, Validators.email]],
      user: ['', [Validators.required, Validators.pattern(this.validacionEmail)]],
      pass: ['', Validators.required]
    })
  }
  ngOnInit(): void {


  }
  userAccess(){
    console.log(this.loginForm);
    console.log(this.loginForm.get('user')?.value);
    // const data_user: User = {
        //     email: this.loginForm.get('user')?.value,
        //     password: this.loginForm.get('pass')?.value
        // }
    this.router.navigate(['/flowers']);

    Swal.fire({
      icon: 'success',
      title: 'Bienvenido',
      text: 'Tienes 0 notificaciones',
  })

}

}
