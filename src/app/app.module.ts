import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import  localeEs  from "@angular/common/locales/es";
import { PersonalizadoPipe } from './pipes/personalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { ContraseñaPipe } from './pipes/contraseña.pipe';

registerLocaleData(localeEs)

@NgModule({
  declarations: [
    AppComponent,
    PersonalizadoPipe,
    DomseguroPipe,
    ContraseñaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide:LOCALE_ID,
      useValue:'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
