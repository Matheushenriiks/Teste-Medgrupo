import { Component } from '@angular/core';
import home from '../../../assets/data/home.json';
import { ModalProductsComponent } from '../modal-products/modal-products.component';
import { ModalLightModeComponent } from '../modal-light-mode/modal-light-mode.component';
import { ModalService } from '../../../assets/services/modal.service';

@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [ModalProductsComponent, ModalLightModeComponent],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.scss',
})
export class HeaderMobileComponent {
  user = home.user;

  constructor(public modalService: ModalService) {}

  openModal() {
    this.modalService.openProductsModal();
  }

  openModalLightDarkMode() {
    this.modalService.openLightModeModal();
  }
}
