import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filhozero',
  templateUrl: './filhozero.component.html',
  styleUrls: ['./filhozero.component.css']
})
export class FilhozeroComponent implements OnInit {

  constructor() { }
  @Output() callParent = new EventEmitter<any>();
  selectedIndex: number = 0;

  @Input()  index: any

  ngOnInit(): void {
  }


  onClick(){
    this.callParent.emit(null);
  }

  nextStep() {}

}
