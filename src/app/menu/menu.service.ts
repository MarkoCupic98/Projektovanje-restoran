import { Menu } from "./menu.model";

export class MenuService {
    private menu: Menu [] = [
        {id: '1', name: 'beef burger', price: '2$', weight: '150g', size: 'small'},
        {id: '2', name: 'beef burger', price: '5$', weight: '200g', size: 'medium'},
        {id: '3', name: 'beef burger', price: '8$', weight: '250g', size: 'big'}
    ]

    getMenu() {
        return this.menu;
    }
}