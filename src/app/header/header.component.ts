import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSelect(feature: string){
    if(feature == 'education') this.router.navigate(['/education']);
    if(feature == 'work') this.router.navigate(['/work-experience']);
    if(feature == 'lan') this.router.navigate(['/languages']);
    if(feature == 'skills') this.router.navigate(['/skills'])
  }

  about(about:string){
    if(about == 'me') 
      this.router.navigate([], {queryParams:{about:'me'}});

    if(about == 'contact') 
      this.router.navigate([], {queryParams:{about:'contact'}});

    if(about == 'hobby') 
      this.router.navigate([], {queryParams:{about:'hobby'}});
  }

}
