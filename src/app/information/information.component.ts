import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {

  totalCases = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  updateTime = 0;
  constructor(private httpClint: HttpClient) { }

  ngOnInit(): void {
    this.httpClint.get('https://disease.sh/v3/covid-19/all').subscribe((data: any) => {
      this.totalCases = data.cases;
      this.totalDeaths = data.deaths;
      this.totalRecovered = data.recovered;
      this.updateTime = data.updated;
    });
  }

}
