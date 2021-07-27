import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'routing-app';
  constructor(private route: ActivatedRoute,
    name: any){}

  ngOnInit():void {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  }


}
