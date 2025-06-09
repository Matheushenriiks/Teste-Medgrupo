import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalProductsComponent } from '../modal-products/modal-products.component';
import { ModalLightModeComponent } from '../modal-light-mode/modal-light-mode.component';
import home from '../../../assets/data/home.json';
import { ModalService } from '../../../assets/services/modal.service';

@Component({
  selector: 'app-aside-bar',
  standalone: true,
  imports: [CommonModule, ModalProductsComponent, ModalLightModeComponent],
  templateUrl: './aside-bar.component.html',
  styleUrl: './aside-bar.component.scss',
})
export class AsideBarComponent {
  user = home.user;
  navigation = home.navigation;

  constructor(public modalService: ModalService) {}

  openModal() {
    this.modalService.openProductsModal();
  }

  openModalLightDarkMode() {
    this.modalService.openLightModeModal();
  }
}
