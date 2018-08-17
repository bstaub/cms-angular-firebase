import { Component, OnInit } from '@angular/core';
import {AfService} from '../../providers/af.service';
import {User} from '../../providers/user';
import {MenuService} from '../../service/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User;
  menuList: any;

  constructor(public afService: AfService, private menus: MenuService) { }

  ngOnInit() {
    this.afService.user$.subscribe(user =>  this.user = user);
    this.menus.getMenus().subscribe(menus => {
      this.menuList = menus;
    });
  }
}
