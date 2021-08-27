import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mat-tab';

  selectedIndex: number = 0;

  ngOnInit(): void {
  }

  // 
  quantVezesAlterado: number = 0;

  alterandoParagrafo(){
    console.log('chamei')
    this.quantVezesAlterado ++;
    this.nextStep()
  }

  onCallParent(a){
    this.alterandoParagrafo()
  }

  // 

  nextStep() {
    if (this.selectedIndex != 1) {
      this.selectedIndex = this.selectedIndex + 1;
    }
    console.log(this.selectedIndex);
  }

  previousStep() {
    if (this.selectedIndex != 0) {
      this.selectedIndex = this.selectedIndex - 1;
    }
    console.log(this.selectedIndex);
  }

}
