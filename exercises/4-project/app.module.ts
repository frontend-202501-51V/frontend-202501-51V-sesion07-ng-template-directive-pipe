import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HabitListComponent } from './habit-list.component';
import { HabitComponent } from './habit.component';
import { HabitFilterPipe } from './habitFilter.pipe';
import { CapitalizePipe } from './capitalize.pipe';
import { LengthPipe } from './length.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    HabitListComponent,
    HabitComponent,
    HabitFilterPipe,
    CapitalizePipe,
    LengthPipe,
    HighlightDirective
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
