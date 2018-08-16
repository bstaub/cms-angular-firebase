import {Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Menu, MenuService} from '../../service/menu.service';


@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

  menuDetails: Menu = {
    title: '',
    url: ''
  };



  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'title', 'url'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private menus: MenuService) {
  }

  ngOnInit() {
    this.menus.getMenus().subscribe((data: any) => {
      this.dataSource.data = data;
    });

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

  addMenu() {
    this.menus.addMenus(this.menuDetails);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;
  }

}
