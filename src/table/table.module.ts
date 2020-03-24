import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';

export { TableComponent };

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule],
  exports: [TableComponent]
})
export class TableModule {}
