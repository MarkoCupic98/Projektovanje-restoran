import { Menu } from "./menu.model";

export class MenuService {
    private menu: Menu [] = [
        {id: '1', name: 'Beef burger', price: '2$', picture: 'https://w.wallhaven.cc/full/01/wallhaven-01x3eg.jpg', weight: '150g', size: 'Small'},
        {id: '2', name: 'Beef burger', price: '5$', picture: 'https://w.wallhaven.cc/full/45/wallhaven-45kwq9.jpg', weight: '200g', size: 'Medium'},
        {id: '3', name: 'Beef burger', price: '8$', picture: 'https://w.wallhaven.cc/full/42/wallhaven-429exx.jpg', weight: '250g', size: 'Large'},
        {id: '4', name: 'Chicken burger', price: '3$', picture: 'https://w.wallhaven.cc/full/49/wallhaven-4986wk.jpg', weight: '130g', size: 'Small'},
        {id: '5', name: 'Chicken burger', price: '6$', picture: 'https://w.wallhaven.cc/full/0w/wallhaven-0wlykr.jpg', weight: '180g', size: 'Medium'},
        {id: '6', name: 'Chicken burger', price: '9$', picture: 'https://images.unsplash.com/photo-1592422152375-f5165d20e1a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80', weight: '240g', size: 'Large'},
        {id: '7', name: 'Veggie burger', price: '5$', picture: 'https://w.wallhaven.cc/full/nz/wallhaven-nzomjo.jpg', weight: '120g', size: 'Small'},
        {id: '8', name: 'Veggie burger', price: '8$', picture: 'https://w.wallhaven.cc/full/nz/wallhaven-nzomjo.jpg', weight: '170g', size: 'Medium'},
        {id: '9', name: 'Veggie burger', price: '12$', picture: 'https://w.wallhaven.cc/full/nz/wallhaven-nzomjo.jpg', weight: '210g', size: 'Large'},
        {id: '10', name: 'Pizza', price: '3$', picture: 'https://w.wallhaven.cc/full/nz/wallhaven-nzomjo.jpg', weight: '400g', size: 'Small'},
        {id: '11', name: 'Pizza', price: '7$', picture: 'https://w.wallhaven.cc/full/nz/wallhaven-nzomjo.jpg', weight: '600g', size: 'Medium'},
        {id: '12', name: 'Pizza', price: '11$', picture: 'https://w.wallhaven.cc/full/nz/wallhaven-nzomjo.jpg', weight: '850g', size: 'Large'}
    ]

    getMenu() {
        return this.menu;
    }
}