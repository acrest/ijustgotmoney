import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent
{
	public showThankYou: boolean;
	public isMobile: boolean;

	public constructor()
	{
		this.checkWidth();
	}

	public checkWidth(): void
	{
		const width: number = window.innerWidth;
		if (width <= 768)
		{
			this.isMobile = true;
		}
		else
		{
			this.isMobile = false;
		}
	}
}
