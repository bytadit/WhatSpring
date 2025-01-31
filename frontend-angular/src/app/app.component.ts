import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  NgbAccordionBody,
  NgbAccordionButton, NgbAccordionCollapse,
  NgbAccordionDirective,
  NgbAccordionHeader,
  NgbAccordionItem
} from "@ng-bootstrap/ng-bootstrap";
import {FaIconComponent, FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {fontAwesomeIcons} from "./shared/font-awesome-icons";

@Component({
  selector: 'wac-root',
  standalone: true,
  imports: [RouterOutlet, NgbAccordionDirective, NgbAccordionItem, NgbAccordionHeader, NgbAccordionButton, NgbAccordionCollapse, NgbAccordionBody, FaIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit  {
  title = 'whatspring-frontend';

  private faIconLibrary = inject(FaIconLibrary);

  ngOnInit() {
    this.initFontaAwesome();
  }

  private initFontaAwesome() {
    this.faIconLibrary.addIcons(...fontAwesomeIcons);
  }
}
