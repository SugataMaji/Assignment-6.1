import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RootComponentComponent } from './root-component/root-component.component';
import { LoginComponentComponent } from './login/login-component/login-component.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponentComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
