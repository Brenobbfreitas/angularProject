import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {

  public title: string;
  public text: string;

  constructor() { }

  ngOnInit(): void {
    this.title = 'Components angular:';
    this.text = 'parte logica da aplicação, funcionamento das views. Componets podem ser formados por html,css,ts';
    
  }

}
