import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {foe
MyForm: FormGroup;
submitted:boolean=false;
  constructor(private fb:FormBuilder,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.createForm();
    this.navigate();
  }
  createForm(){
    this.MyForm=this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required, Validators.minLength(6)]]
    });
  }
  submit(){
    this.submitted = true;
    if(this.MyForm.invalid){
      return ;
      console.log(this.MyForm.value);
    }
  }
  
  get f() { return this.MyForm.controls; }
  navigate(){
    if(this.router.url==''){
    this.router.navigate(['/login'],{relativeTo:this.route})
    console.log("hello");
    }
  } 
}
