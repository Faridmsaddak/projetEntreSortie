
import {fromEvent as observableFromEvent,  Observable } from 'rxjs';

import {distinctUntilChanged, debounceTime} from 'rxjs/operators';
import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { TABLE_HELPERS, ExampleDatabase, ExampleDataSource } from './helpers.data';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { Entree } from '../../model/entree';
import { EntreeService } from '../../services/entree.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'cdk-feature-table',
  templateUrl: './feature-table.component.html',
  styleUrls: ['./feature-table.component.scss']
})
export class FeatureTableComponent implements OnInit {
	LisData;
	showNavListCode;
	displayedColumns: string[] = ['select', 'id', 'nomEntree', 'quantiteEntree','actions'];
	exampleDatabase = new ExampleDatabase();
	selection = new SelectionModel<string>(true, []);
	dataSource: ExampleDataSource | null;
	allfeatures = TABLE_HELPERS;
	entrees:Entree[] | undefined;
	constructor(private entreeService:EntreeService) { }
	@ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
	@ViewChild(MatSort, { static: true }) sort: MatSort;
	@ViewChild('filter', { static: true }) filter: ElementRef;

	async ngOnInit() {
	  this.entrees =  await this.entreeService.getAllEntree();
	  this.LisData = new MatTableDataSource(this.entrees);
	  this.LisData.sort = this.sort;
      this.LisData.paginator = this.paginator;
     
}

	isAllSelected(): boolean {
	    if (!this.dataSource) { return false; }
	    if (this.selection.isEmpty()) { return false; }

	    if (this.filter.nativeElement.value) {
	      return this.selection.selected.length == this.dataSource.renderedData.length;
	    } else {
	      return this.selection.selected.length == this.exampleDatabase.data.length;
	    }
	}

	masterToggle() {
	    if (!this.dataSource) { return; }

	    if (this.isAllSelected()) {
	      this.selection.clear();
	    } else if (this.filter.nativeElement.value) {
	      this.dataSource.renderedData.forEach(data => this.selection.select(data.id));
	    } else {
	      this.exampleDatabase.data.forEach(data => this.selection.select(data.id));
	    }
	}
/*	onDelet(element) {
		let index = this.LisData.data.indexOf(element);
		const dialogRef = this.deletDialog.open(DeleteConfirmationComponent,
	
		  { data: { message: "Are you want to delete  " + element.companyName + "?" } });
		dialogRef.afterClosed().subscribe(result => {
		  if (result == true) {
			this.entreeService.deleteentre(element.id).subscribe(async (data) => {
			this.entrees = await this.entreeService.getAllEntree();
			this.LisData = new MatTableDataSource(this.entrees);
			this.LisData.sort = this.sort;
			this.LisData.paginator = this.paginator;
			});
			
		  }
		});
	
	  }*/
	  
}
