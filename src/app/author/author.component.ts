import { Component, OnInit } from '@angular/core';
import { AuthorService } from 'src/services/author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors;
  title = 'Listing Authors';
  constructor(service: AuthorService) {
    this.authors = service.getAuthors();
  }

  ngOnInit(): void {
  }

}
