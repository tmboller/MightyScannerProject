import { Component, OnInit } from '@angular/core';
import {  Routes, Router} from "@angular/router";


@Component({
  selector: 'app-tools',
  templateUrl: './tools.page.html',
  styleUrls: ['./tools.page.scss'],
})
export class ToolsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  routerToReport(){
    this.router.navigate(['toolreport']);
  }
  routerToProfile(){
    this.router.navigate(['profile']);
  }
  routerToSettings(){
    this.router.navigate(['settings']);
  }


}
