import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-pages-list',
  templateUrl: './pages-list.component.html',
  styleUrls: ['./pages-list.component.css']
})
export class PagesListComponent implements OnInit {

  pagesObservable: Observable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.pagesObservable = this.getPages('/pages');
  }

  getPages(listPath): Observable<any> {
    return this.db.list(listPath).valueChanges();
  }

}
