import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionTemplateComponent } from './region-template/region-template.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RegionTemplateComponent],
  exports: [RegionTemplateComponent]
})
export class RegionsModule {}
