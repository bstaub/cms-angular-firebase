import {NgModule} from '@angular/core';
import {MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatSortModule} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatSortModule
  ],
  exports: [
    MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatSortModule
  ]
})

export class MaterialModule {
}
