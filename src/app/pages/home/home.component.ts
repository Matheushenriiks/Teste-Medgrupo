import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsideBarComponent } from '../../components/aside-bar/aside-bar.component';
import { CardMainComponent } from '../../components/card-main/card-main.component';
import { CardProgressComponent } from '../../components/card-progress/card-progress.component';
import { HeaderMobileComponent } from '../../components/header-mobile/header-mobile.component';
import { ModalLightModeComponent } from '../../components/modal-light-mode/modal-light-mode.component';
import { ModalProductsComponent } from '../../components/modal-products/modal-products.component';
import { TodoListComponent } from '../../components/todo-list/todo-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    AsideBarComponent,
    CardMainComponent,
    CardProgressComponent,
    ModalProductsComponent,
    HeaderMobileComponent,
    ModalLightModeComponent,
    TodoListComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
