import { MatButtonModule, MatCheckboxModule } from '@angular/material';

@MaterialModule({
  imports: [MatButtonModule, MatCheckboxModule],
  exports: [MatButtonModule, MatCheckboxModule],
})
export class MyOwnCustomMaterialModule { }
