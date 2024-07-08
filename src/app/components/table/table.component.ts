import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild, inject } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { IColumns } from '../../interfaces/table.interface';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    RouterLink,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent implements OnInit, AfterViewInit{

  @Input() columns: IColumns[] = [];
  @Input() dataTable: any[] = [];

  @Output() addNew = new EventEmitter<boolean>();
  @Output() edit = new EventEmitter<any>();

  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  router = inject(Router)

  ngOnInit(): void {
    this.displayedColumns = this.columns.map(col => col.name);
    this.dataSource = new MatTableDataSource(this.dataTable);

    
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if(changes['dataTable']){
    //   this.dataSource = new MatTableDataSource(this.dataTable);
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // }
  }

  ngAfterViewInit() {
    this.paginator._intl.itemsPerPageLabel = 'Elementos por pagina';
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  redirectLink(rowLink: any): void {
    console.log(rowLink.link);

    this.router.navigate([rowLink.link]);
  }

  openDialog(): void {
    this.addNew.emit(true)
  }

  editDataDialog(data: any): void {
    this.edit.emit(data)
  }
}