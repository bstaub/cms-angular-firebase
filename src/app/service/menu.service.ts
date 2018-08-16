import { Injectable } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {map} from 'rxjs/operators';

export interface Menu {
  title: '';
  url: '';
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private afs: AngularFirestore) { }

  getMenus() {
    return this.afs.collection('menus').snapshotChanges().pipe(
      map( menu => {
        return menu.map( a => {
          const data = a.payload.doc.data() as Menu;
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );

  }
  addMenus(menu: Menu) {
    return this.afs.collection('menus').add(menu);
  }
  deleteMenu(menuId) {
    this.afs.doc('menus/' + menuId).delete();
  }
  updateMenu(menuId, menu: Menu) {
    this.afs.doc('menus/' + menuId).update(menu);
  }


}
