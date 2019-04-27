import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/services/bike.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {

  constructor(private bikeService: BikeService, private route: ActivatedRoute) { }

  public bikeReg: any;

  ngOnInit() {
    this.getBikeReg(this.route.snapshot.params.id);
  }

  getBikeReg(id:number){
    this.bikeService.getBike(id).subscribe(
      data => {
        this.bikeReg = data;
      },
      err => {
        console.log(err)
      },
      () => console.log('bikes loaded')
    );
  }

}
