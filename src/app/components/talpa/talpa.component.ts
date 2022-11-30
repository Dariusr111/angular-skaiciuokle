import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talpa',
  templateUrl: './talpa.component.html',
  styleUrls: ['./talpa.component.css']
})
export class TalpaComponent implements OnInit {
  public turis:number|null=null;
  public greitis:number|null=null;
  public laikas:number|null=null;
  public pripilta:number|null=null;
  public proc:number=0;


  constructor() { }

  ngOnInit(): void {
  }

  public skaiciuoti() {
    if(this.turis!=null && this.greitis!=null && this.laikas!=null){
      this.pripilta= Number(( this.greitis * this.laikas).toFixed(2));
      this.proc=Math.round((this.pripilta/100)*100);
    }
  }

}
