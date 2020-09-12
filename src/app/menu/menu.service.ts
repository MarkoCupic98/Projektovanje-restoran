import { Menu } from "./menu.model";

export class MenuService {
    private menu: Menu [] = [
        {id: '1', name: 'Beef burger', price: '2$', weight: '150g', size: 'Small'},
        {id: '2', name: 'Beef burger', price: '5$', weight: '200g', size: 'Medium'},
        {id: '3', name: 'Beef burger', price: '8$', weight: '250g', size: 'Large'}
    ]

    getMenu() {
        return this.menu;
    }
}