import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
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
  }

  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'title', 'url'];

  constructor(private menus: MenuService) {
  }

  ngOnInit() {
    this.menus.getMenus().subscribe((data: any) => {
      this.dataSource.data = data;
    });
  }

  addMenu() {
    this.menus.addMenus(this.menuDetails);
  }

}
