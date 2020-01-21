import { Component, OnInit } from '@angular/core';
import { Routes, Router } from "@angular/router";
@Component({
  selector: 'app-teammembers',
  templateUrl: './teammembers.page.html',
  styleUrls: ['./teammembers.page.scss'],
})
export class TeammembersPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  backToTeams(){
    this.router.navigate(['/home/teams']);
  }
  

}
