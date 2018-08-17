import {NgModule} from '@angular/core';
import {MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatInputModule, MatSortModule, MatPaginatorModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  imports: [
    MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatSidenavModule, MatListModule, MatTableModule, MatFormFieldModule,
    MatInputModule, MatSortModule, MatPaginatorModule, MatDialogModule, MatSelectModule
  ],
  exports: [
    MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatSidenavModule, MatListModule, MatTableModule, MatFormFieldModule,
    MatInputModule, MatSortModule, MatPaginatorModule, MatDialogModule, MatSelectModule
  ]
})

export class MaterialModule {
}
