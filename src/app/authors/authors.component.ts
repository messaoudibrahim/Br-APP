import { Component, OnInit } from '@angular/core';
import {AuthorserviceService} from '../authorservice.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title  = 'list Authors';
  leng ;
  listAuthors ;
  constructor(service: AuthorserviceService) {
    this.listAuthors = service.getlistAuthrs();
    this.leng  = this.listAuthors.length;
  }

  ngOnInit() {
  }

}
