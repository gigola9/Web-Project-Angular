import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiMethodsService } from '../api-methods.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  allUsers: Observable<any>;

  constructor(private apiMethodService: ApiMethodsService) { }

  ngOnInit(): void {
    this.allUsers = this.apiMethodService.getUserDate();
  }

}
