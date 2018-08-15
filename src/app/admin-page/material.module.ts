import {NgModule} from '@angular/core';
import {MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule , MatInputModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  imports: [
    MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatSidenavModule, MatListModule, MatTableModule, MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatSidenavModule, MatListModule, MatTableModule, MatFormFieldModule,
    MatInputModule
  ]
})

export class MaterialModule {
}
