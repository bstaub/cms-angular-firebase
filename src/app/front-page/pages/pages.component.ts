import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Menu, MenuService} from '../../service/menu.service';
import {PostsService} from '../../service/posts.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {

  // menu: Menu;
  menu: any;
  postsList: any;
  constructor(private route: ActivatedRoute, private menus: MenuService, private posts: PostsService) {
    this.route.params.subscribe( params => {
      console.log(params);
      // this.menu.getMenus().subscribe( menus => {
      this.menus.getConditionalsMenus('url', '==', params.url).subscribe( menus => {
        console.log(menus);
        if (menus.length > 0) { // check, menu need at least 1 element
          this.menu = menus[0];

          // nur wenn wir einen Menupunkt haben, haben wir auch posts
          this.posts.getConditionalsPosts('menu_id', '==', this.menu.id).subscribe( posts => {
            console.log(posts);
              this.postsList = posts;
          });

        }
        // this.posts.getPosts().subscribe( posts => {
        //   console.log(posts);
        // });


      });
    });
  }

  ngOnInit() {
  }

}
