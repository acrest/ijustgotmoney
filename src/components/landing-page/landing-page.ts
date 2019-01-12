import { Component, OnInit } from "@angular/core";

@Component({
	selector: "landing-page",
	templateUrl: "./landing-page.html",
	styleUrls: ["./landing-page.scss"]
})
export class LandingPage implements OnInit
{
	public showInfoInputModal: boolean;
	private constructor()
	{

	}
	public ngOnInit(): void
	{
		this.showInfoInputModal = false;
	}

	public showInputModal(): void
	{
		this.showInfoInputModal = true;
	}

	public closeInputModal(): void
	{
		this.showInfoInputModal = false;
	}
}
