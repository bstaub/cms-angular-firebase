import { Injectable } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {map} from 'rxjs/operators';
import {Menu} from './menu.service';

export interface Post {
  title: '';
  menu_id: '';
  content: '';
}

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private afs: AngularFirestore) { }

  getPosts() {
    return this.afs.collection('posts').snapshotChanges().pipe(
      map( Post => {
        return Post.map( a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );

  }

  getConditionalsPosts(field: string, condition: any, value: string) {
    return this.afs.collection('posts', ref => ref.where(field, condition, value)).snapshotChanges().pipe(
      map( Post => {
        return Post.map( a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      })
    );

  }

  addPosts(post: Post) {
    return this.afs.collection('posts').add(post);
  }
  deletePost(postId) {
    this.afs.doc('posts/' + postId).delete();
  }
  updatePost(postId, post: Post) {
    this.afs.doc('posts/' + postId).update(post);
  }


}
