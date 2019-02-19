import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule }   from "@angular/forms";

import { AppComponent } from "./app.component";

import { LandingPage } from "../components/landing-page/landing-page";


@NgModule({
	declarations: [
		AppComponent,
		LandingPage
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
