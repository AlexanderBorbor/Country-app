import { Component } from '@angular/core';
import { RouterLinkActive, RouterLinkWithHref } from "@angular/router";

@Component({
  selector: 'app-top-menu',
  imports: [RouterLinkActive, RouterLinkWithHref],
  templateUrl: './top-menu.html',
})
export class TopMenuComponent {}
