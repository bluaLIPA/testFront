import {Component, HostListener} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgIf,
    NgClass
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuValue:boolean=false;
  menu_icon :string ='bi bi-list';
  searchClicked: boolean = false;

  openMenu(){
    this.menuValue =! this.menuValue ;
    this.menu_icon = this.menuValue ? 'bi bi-x' : 'bi bi-list';
  }
  closeMenu() {
    this.menuValue = false;
    this.menu_icon = 'bi bi-list';
  }

  clickLupa() {
    this.searchClicked = !this.searchClicked;
  }

  // @HostListener('document:click', ['$event']) не работает
  // onDocumentClick(event: Event) {
  //   const target = event.target as HTMLElement;
  //   const searchElement = document.querySelector('.search-container') as HTMLElement;
  //   const searchIconElement = document.querySelector('.fa-magnifying-glass') as HTMLElement;
  //
  //   // Ensure elements exist before accessing them
  //   if (searchElement && searchIconElement) {
  //     const isSearchOrModal = searchElement.contains(target) || searchIconElement.contains(target);
  //     if (!isSearchOrModal) {
  //       this.searchClicked = false;
  //     }
  //   }
  // }
}
