import { Component, OnInit } from '@angular/core';
import {progradStmt} from '../../progradStmt';
import {progradStmts} from '../../progradStmts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  prograds: progradStmt[];
  progradStmts: any = {};
  constructor() { }

  ngOnInit(): void {
    this.prograds = progradStmts;
  }

}
