import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "landing-page",
	templateUrl: "./landing-page.html",
	styleUrls: ["./landing-page.scss"]
})

//  GFORM URL: https://script.google.com/macros/s/AKfycbzJPKXe4uPwmP5No1k32urIvI_fehi9ZfVCloYz7Q/exec
export class LandingPage implements OnInit
{
	@Input() public isSmall: boolean;
	@Input() public isMedium: boolean;
	@Input() public isLarge: boolean;

	public showThankYou: boolean;
	public constructor()
	{
	}

	public ngOnInit(): void
	{
		this.showThankYou = false;
	}
	public submit(): void
	{
		this.showThankYou = true;
		if ( this.isSmall || this.isMedium)
		{
			window.scroll(0, 0);
		}
	}
}
