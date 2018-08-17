import {Component, ViewChild, OnInit, Inject} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {PostsService, Post} from '../../service/posts.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ConfirmationDialogComponent} from '../shared/confirmation-dialog/confirmation-dialog.component';
import {EditPostComponent} from './edit-post/edit-post.component';
import {MenuService} from '../../service/menu.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  postDetails: Post = {
    title: '',
    menu_id: '',
    content: ''
  };

  menuList: any;



  dataSource = new MatTableDataSource();
  displayedColumns = ['id', 'title', 'menu_id', 'content', 'actions'];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private posts: PostsService, private menus: MenuService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.posts.getPosts().subscribe((data: any) => {
      this.dataSource.data = data;
    });

    this.menus.getMenus().subscribe( (data: any) => {
      this.menuList = data;
    });

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

  }

  addPost() {
    this.posts.addPosts(this.postDetails);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLocaleLowerCase();
    this.dataSource.filter = filterValue;
  }

  editPost(postId, post: Post) {
    this.posts.updatePost(postId, post)
  }

  deletePost(id) {
    this.posts.deletePost(id);
  }

  openDialog(postId): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 'true') {
        console.log('The dialog was closed, ja mit ID: '+postId);
        this.deletePost(postId);
        // this.animal = result;
      }
      if (result === 'false') {
        console.log('Nein angewählt, mit ID: '+postId);
      }

    });
  }

  openEditDialog(postId: string, title: string, menu_id: string, content: string): void {
    const dialogRef = this.dialog.open(EditPostComponent, {
      width: '250px',
      data: {title, menu_id, content, "menus": this.menuList }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result ) {
        console.log('Ja Edit Post angewählt');
        console.log(result);
        this.editPost(postId, result);
        // this.animal = result;
      }
      if (result === 'false') {
        console.log('Nein Edit Post angewählt');
      }

    });
  }

}
