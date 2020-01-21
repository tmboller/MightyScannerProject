import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-teamreport',
  templateUrl: './teamreport.page.html',
  styleUrls: ['./teamreport.page.scss'],
})
export class TeamreportPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToTeams(){
    this.router.navigate(['/home/teams']);
  }

}
