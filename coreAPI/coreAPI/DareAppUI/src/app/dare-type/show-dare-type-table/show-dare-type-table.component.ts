import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

export interface DareType{ //object model - like sql
  dareTypeId: number;
  dareTypeName: string;
}

@Component({
  selector: 'app-show-dare-type-table',
  templateUrl: './show-dare-type-table.component.html',
  styleUrls: ['./show-dare-type-table.component.css']
})
export class ShowDareTypeTableComponent implements OnInit {

  constructor(private service:SharedService) { }

  DareTypeList: DareType[] = [];
  displayedColumns: string[] = [];
  columnsToDisplay: string[] = [];
  
  ngOnInit(): void {
    this.refreshDareTypeList();
  }

  refreshDareTypeList(){
    this.service.getDareTypeList().subscribe(data =>{
      this.DareTypeList = data;
      this.displayedColumns = this.DareTypeList.map(val => val.dareTypeName);
      this.columnsToDisplay = this.displayedColumns.slice();
    })
  }
}
