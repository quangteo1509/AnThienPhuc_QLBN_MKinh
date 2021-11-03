import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.scss']
})
export class TrangchuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  array = [
    'assets/images/logo_trang.png',
    'assets/images/logo.png'
  ];
  effect = 'scrollx';
}
