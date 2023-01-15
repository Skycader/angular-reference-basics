import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostFormComponent } from './post-form/post-form.component';
import { PostComponent } from './post/post.component';
import { StyledFormComponent } from './styled-form/styled-form.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { InputFieldSimpleComponent } from './input-field-simple/input-field-simple.component';
import { CycleComponent } from './cycle/cycle.component';
import { MakeredDirective } from './directives/makered.directive';
import { MultBy } from './pipes/multBy.pipe';
import { FilterByPipe } from './pipes/filter-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostComponent,
    StyledFormComponent,
    TwoWayBindingComponent,
    InputFieldSimpleComponent,
    CycleComponent,
    MakeredDirective,
    MultBy,
    FilterByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
