import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }
  about:string = 'me';
  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (queryParams:Params)=>{
        this.about = queryParams['about'];
      }
    )
  }

}
