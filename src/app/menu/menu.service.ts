import { Menu } from "./menu.model";

export class MenuService {
    private menu: Menu [] = [
        {id: '1', name: 'Beef burger', price: '2$', weight: '150g', size: 'Small'},
        {id: '2', name: 'Beef burger', price: '5$', weight: '200g', size: 'Medium'},
        {id: '3', name: 'Beef burger', price: '8$', weight: '250g', size: 'Large'},
        {id: '4', name: 'Chicken burger', price: '3$', weight: '130g', size: 'Small'},
        {id: '5', name: 'Chicken burger', price: '6$', weight: '180g', size: 'Medium'},
        {id: '6', name: 'Chicken burger', price: '9$', weight: '240g', size: 'Large'},
        {id: '7', name: 'Veggie burger', price: '5$', weight: '120g', size: 'Small'},
        {id: '8', name: 'Veggie burger', price: '8$', weight: '170g', size: 'Medium'},
        {id: '9', name: 'Veggie burger', price: '12$', weight: '210g', size: 'Large'},
        {id: '10', name: 'Pizza', price: '3$', weight: '400g', size: 'Small'},
        {id: '11', name: 'Pizza', price: '7$', weight: '600g', size: 'Medium'},
        {id: '12', name: 'Pizza', price: '11$', weight: '850g', size: 'Large'}
    ]

    getMenu() {
        return this.menu;
    }
}