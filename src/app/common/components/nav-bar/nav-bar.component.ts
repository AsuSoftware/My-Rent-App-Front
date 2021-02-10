import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        width: '60%',
      })),
      state('closed', style({
        width: '0%',
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class NavBarComponent implements OnInit {

  private isNavOpen = false;

  public constructor() { }

  public ngOnInit(): void {
  }

  public onNavOpen(): void {
    this.isNavOpen = true;
  }

  public onNavClose(): void {
    this.isNavOpen = false;
  }

  public get isNavOpened(): boolean {
    return this.isNavOpen;
  }

}
