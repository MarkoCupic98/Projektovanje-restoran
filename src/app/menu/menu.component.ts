import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Menu } from './menu.model';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  displayedColumns = ["name", "size", "price", "weight"];
  menuSource = new MatTableDataSource<Menu>();

  constructor(private menuService : MenuService) { }

  ngOnInit() {
    this.menuSource.data = this.menuService.getMenu();
  }

}
