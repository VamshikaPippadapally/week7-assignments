import { Component, OnInit } from '@angular/core';
import { AirService } from '../air.service';
@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.css']
})
export class LatestComponent implements OnInit {
  latestDetails;
  public latest;
  constructor(private readonly airApi: AirService) { }

  ngOnInit() {
    this.latest=this.airApi.getParameter('https://api.openaq.org/v1/latest').subscribe((res:any)=>{
      this.latestDetails=res.results;
      console.log(this.latestDetails);
    });
  }

}

  
  