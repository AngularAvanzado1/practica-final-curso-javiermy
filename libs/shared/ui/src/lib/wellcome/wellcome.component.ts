import { Wellcome } from '@pf/domain';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pb-ui-wellcome',
  template: `
    <p>
      wellcome to the World B!
    </p>
  `,
  styles: [
  ],
})
export class WellcomeComponent implements OnInit {
  public theGreeting: Wellcome = { message: 'Hello world' };
  constructor() { }

  ngOnInit(): void {
  }

}
