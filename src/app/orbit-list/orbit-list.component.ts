
import { Component, OnInit, Input } from '@angular/core';
import { $ } from 'protractor';
import { Satellite } from '../satellite';
@Component({
  selector: 'app-orbit-list',
  templateUrl: './orbit-list.component.html',
  styleUrls: ['./orbit-list.component.css']
})
export class OrbitListComponent implements OnInit {
  @Input() satellites: Satellite[];

  constructor() { 
  }
  
    ngOnInit() {
      //console.log(JSON.stringify(this.satellites))
    }
  
  }
