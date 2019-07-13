import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ris : Number;

  addizione(n1:HTMLInputElement, n2:HTMLInputElement): boolean{
    this.ris = Number(n1.value) + Number(n2.value);
    console.log(Number(this.ris));
    return false;
  }

  sottrazione(n1:HTMLInputElement, n2:HTMLInputElement): boolean{
    this.ris = Number(n1.value) - Number(n2.value);
    console.log(this.ris);
    return false;
  }

  moltiplicazione(n1:HTMLInputElement, n2:HTMLInputElement): boolean{
    this.ris = Number(n1.value) * Number(n2.value);
    console.log(this.ris);
    return false;
  }

  divisione(n1:HTMLInputElement, n2:HTMLInputElement): boolean{
    this.ris = Number(n1.value) / Number(n2.value);
    console.log(this.ris);
    return false;
  }
}
