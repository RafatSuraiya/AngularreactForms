import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit {

  constructor(private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    if(this.router.url==""){
      console.log("hiiiiii")
      this.router.navigate(['/login'],{relativeTo:this.route})
      console.log("hello");
      }
  }
}

