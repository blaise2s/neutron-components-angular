import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input.component';
import { InputDirective } from './input.directive';

export { InputComponent, InputDirective };

@NgModule({
  declarations: [InputComponent, InputDirective],
  imports: [CommonModule],
  exports: [InputComponent, InputDirective]
})
export class InputModule {}
