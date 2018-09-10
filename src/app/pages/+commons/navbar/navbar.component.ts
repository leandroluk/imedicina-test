import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'commons-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  brand: string;

  constructor(private router: ActivatedRoute) {
    this.brand = this.router.snapshot.data['title'];
  }

}
