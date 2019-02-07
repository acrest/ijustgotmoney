import { Component } from "@angular/core";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"]
})
export class AppComponent
{
	public isSmall: boolean;
	public isMedium: boolean;
	public isLarge: boolean;

	public constructor()
	{
		this.checkWidth();
	}

	public checkWidth(): void
	{
		this.isSmall = false;
		this.isMedium = false;
		this.isLarge = false;
		const width: number = window.innerWidth;
		if (width <= 768)
		{
			this.isSmall = true;
		}
		else if (width <= 1100)
		{
			this.isMedium = true;
		}
		else
		{
			this.isLarge = true;
		}
	}
}
