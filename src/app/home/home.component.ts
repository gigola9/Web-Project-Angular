import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiMethodsService } from '../api-methods.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private apiMethodsSevice: ApiMethodsService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  txt = "Enter some text";

  users: { name: string, username: string }[];

  getData() {
    this.apiMethodsSevice.getUserDate().subscribe((m: any[]) => {
      this.users = m.map(n => {
        return { name: n.name, username: n.username };
      });
    });
  }

  redirectToUsers() {
    this.router.navigateByUrl('list');
  }
}
