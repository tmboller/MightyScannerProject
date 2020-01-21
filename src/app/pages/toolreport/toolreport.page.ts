import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-toolreport',
  templateUrl: './toolreport.page.html',
  styleUrls: ['./toolreport.page.scss'],
})
export class ToolreportPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToTools(){
    this.router.navigate(['/home/tools']);
  }


}
