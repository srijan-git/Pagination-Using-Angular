import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PaginationUsingAPI';
  data: any;
  page: number = 1;
  itemsPerPage = 50;
  totalItems: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllPassengerData()
  }

  getAllPassengerData() {
    this.http.get(`https://jsonplaceholder.typicode.com/photos?page=${1}&size=${this.itemsPerPage}`).subscribe((data: any) => {

      this.data = data
      this.page = 0;
      this.totalItems = data.length


    })
  }
}