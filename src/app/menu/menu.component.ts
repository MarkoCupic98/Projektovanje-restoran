import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { UserService } from '../auth/user.service';
import { PaymentComponent } from '../payment/payment.component';
import { Menu } from './menu.model';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, AfterViewInit {

  displayedColumns = ["name", "size", "price", "picture", "weight", "order"];
  menuSource = new MatTableDataSource<Menu>();

  @ViewChild(MatSort, {static: false}) sort : MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator : MatPaginator;

  constructor(private menuService : MenuService, private dialog: MatDialog) { }

  ngOnInit() {
    this.menuSource.data = this.menuService.getMenu();
  }

  ngAfterViewInit() {
    this.menuSource.sort = this.sort;
    this.menuSource.paginator = this.paginator;
  }

  justFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.menuSource.filter = filterValue.trim().toLowerCase();
  }

  onPay() {
    const dialogRef = this.dialog.open(PaymentComponent);
  }

}
