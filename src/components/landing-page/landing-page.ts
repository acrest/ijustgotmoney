import { Component, OnInit, Input, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
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

	@ViewChild("contactForm") public contactForm: NgForm;
	@ViewChild("firstName") public firstNameElement: any;
	@ViewChild("lastName") public lastNameElement: any;
	@ViewChild("phone") public phoneElement: any;
	@ViewChild("email") public emailElement: any;

	public showThankYou: boolean;

	public firstNameInput: string = "";
	public lastNameInput: string = "";
	public mobilePhone: string = "";
	public emailAddress: string = "";

	public validFirstName: boolean = false;
	public validLastName: boolean = false;
	public validMobilePhone: boolean = false;
	public validEmailAddress: boolean = false;

	public firstNameChanged: boolean = false;
	public lastNameChanged: boolean = false;
	public mobilePhoneChanged: boolean = false;
	public emailAddressChanged: boolean = false;

	public canSubmit: boolean;
	public showIncompleteMessage: boolean = false;

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

	public onFirstNameChange(): void
	{
		if (this.firstNameInput !== "")
		{
			this.validFirstName = !this.firstNameElement.invalid;
		}
		else
		{
			this.validFirstName = false;
		}
		this.firstNameChanged = true;
		this.updateCanSubmit();
	}

	public onLastNameChange(): void
	{
		if (this.lastNameInput !== "")
		{
			this.validLastName = !this.lastNameElement.invalid;
		}
		else
		{
			this.validLastName = false;
		}
		this.lastNameChanged = true;
		this.updateCanSubmit();
	}

	public onMobileChange(): void
	{
		if (this.mobilePhone !== "")
		{
			this.validMobilePhone = !this.phoneElement.invalid;
		}
		else
		{
			this.validMobilePhone = false;
		}
		this.mobilePhoneChanged = true;
		this.updateCanSubmit();
	}

	public onEmailChange(): void
	{
		if (this.emailAddress !== "")
		{
			this.validEmailAddress = !this.emailElement.invalid;
		}
		else
		{
			this.validEmailAddress = false;
		}
		this.emailAddressChanged = true;
		this.updateCanSubmit();
	}

	public updateCanSubmit(): void
	{
		this.canSubmit = this.validFirstName && this.validLastName && this.validMobilePhone && this.validEmailAddress;
		this.showIncompleteMessage = false;
		if (this.firstNameChanged && this.lastNameChanged && this.mobilePhoneChanged && this.emailAddressChanged && !this.canSubmit)
		{
			this.showIncompleteMessage = true;
		}
	}
}
