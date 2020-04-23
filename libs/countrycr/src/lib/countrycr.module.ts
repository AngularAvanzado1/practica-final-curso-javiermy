import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountrycrTemplateComponent } from './countrycr-template/countrycr-template.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CountrycrTemplateComponent],
  exports: [CountrycrTemplateComponent]
})
export class CountrycrModule {}
