import {Component, ViewChild, OnInit, Inject} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Menu, MenuService} from '../../service/menu.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ConfirmationDialogComponent} from '../shared/confirmation-dialog/confirmation-dialog.component';
import {EditMenuComponent} from '../edit-menu/edit-menu/edit-menu.component';

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
  displayedColumns = ['id', 'title', 'url', 'actions'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private menus: MenuService, public dialog: MatDialog) {
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

  editMenu(menuId, menu: Menu) {
    this.menus.updateMenu(menuId, menu)
  }

  deleteMenu(id) {
    this.menus.deleteMenu(id);
  }

  openDialog(menuId): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'true') {
        console.log('The dialog was closed, ja mit ID: '+menuId);
        this.deleteMenu(menuId);
        // this.animal = result;
      }
      if (result === 'false') {
        console.log('Nein angewählt, mit ID: '+menuId);
      }

    });
  }

  openEditDialog(menuId: string, title: string, url: string): void {
    const dialogRef = this.dialog.open(EditMenuComponent, {
      width: '250px',
      data: {title, url}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result ) {
        console.log('Ja Edit angewählt');
        console.log(result);
        this.editMenu(menuId, result);
        // this.animal = result;
      }
      if (result === 'false') {
        console.log('Nein Edit angewählt');
      }

    });
  }

}
