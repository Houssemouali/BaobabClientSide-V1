import {Component, OnInit, Renderer2, Inject, OnDestroy, ViewEncapsulation, AfterViewInit} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {SharedService} from '../../shared/shared.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit, OnDestroy ,  AfterViewInit {
  constructor(private sharedService: SharedService,
              private renderer: Renderer2,
              @Inject(DOCUMENT) private document: any) { }
  value = 0;

  ngAfterViewInit() {
    const loadingBar = setInterval(() => {
      this.value < 100 ? this.value++ : clearInterval(loadingBar);
    }, 50);
  }
  ngOnInit() {
    const nav = this.document.querySelector('app-nav');
    const footer = this.document.querySelector('app-footer');

    if (this.sharedService.navHideNavAndFooter()) {
      this.renderer.setStyle(nav, 'display', 'none');
      this.renderer.setStyle(footer, 'display', 'none');
    }
  }

  ngOnDestroy() {
    const nav = this.document.querySelector('app-nav');
    const footer = this.document.querySelector('app-footer');
    this.renderer.removeStyle(nav, 'display');
    this.renderer.removeStyle(footer, 'display');
  }



}
