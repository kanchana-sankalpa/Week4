import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  public Students: Student[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    console.log(baseUrl);
    http.get<Student[]>(baseUrl + 'api/students').subscribe(result => {
      console.log(result);
      this.Students = result;
    }, error => console.error(error));
  }

}


interface Student {
  id: number;
  name: string;
  roll: number;

}
