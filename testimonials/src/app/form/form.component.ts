import { Component, OnInit } from '@angular/core';
import {progradStmt} from '../../progradStmt';
import {progradStmts} from '../../progradStmts';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  prograds: progradStmt[];
  progradStmts: any = {};
  constructor() { }

  ngOnInit(): void {
    this.prograds = progradStmts;
  }
  adduser(progradStmts): any {
    console.log('Add new user');
    this.prograds.unshift(progradStmts);
  }
}
