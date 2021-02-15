import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        left: '0%',
      })),
      state('closed', style({
        left: '-100%',
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
  private isUserLogged = true;

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

  public get isTheUserLogged(): boolean {
    return this.isUserLogged;
  }

  public logout(): void {
    // delete from local storage the token
    // route to home
  }

}
