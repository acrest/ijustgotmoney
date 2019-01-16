import { Component, OnInit } from "@angular/core";

@Component({
	selector: "landing-page",
	templateUrl: "./landing-page.html",
	styleUrls: ["./landing-page.scss"]
})

//  GFORM URL: https://script.google.com/macros/s/AKfycbzJPKXe4uPwmP5No1k32urIvI_fehi9ZfVCloYz7Q/exec
export class LandingPage implements OnInit
{
	public showThankYou: boolean;
	private constructor()
	{

	}
	public ngOnInit(): void
	{
		this.showThankYou = false;
	}
	public submit(): void
	{
		this.showThankYou = true;
	}
}
