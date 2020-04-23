import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WellcomeComponent } from './wellcome/wellcome.component';

@NgModule({
  imports: [CommonModule],
  declarations: [WellcomeComponent],
  exports: [WellcomeComponent]
})
export class UiModule {}
