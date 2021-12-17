import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LazyLoadModule } from './lazy-load/lazy-load.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { SortieComponent } from './sortie/sortie/sortie.component';
import { EntreeComponent } from './entree/entree/entree.component';
import { HttpClientModule } from '@angular/common/http';  



@NgModule({
  declarations: [
    AppComponent,
    EntreeComponent,
    SortieComponent,
   
    
  ],
  imports: [
    BrowserModule,
    LazyLoadModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
