import { Component, OnInit } from '@angular/core';
import { Entree } from '../../model/entree';
import { EntreeService } from '../../services/entree.service';


@Component({
  selector: 'app-entree',
  templateUrl: './entree.component.html',
  styleUrls: ['./entree.component.css']
})
export class EntreeComponent implements OnInit {
  
  entrees:Entree[] | undefined;
  constructor(private entreeService:EntreeService) { }

  ngOnInit(): void {
   
    this.entreeService.getAll().subscribe(data =>{  
      this.entrees =data;  
      
  })

  }
}
