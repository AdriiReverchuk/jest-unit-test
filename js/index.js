export class AddItemForm {
	constructor() {
		this.createDOM();
	}
	createDOM() {
		const form = this.createElement("form", "container");
		form.style.padding = "50px";
		form.style.margin = "0 auto";
		form.style.width = "20%";
		const title = this.createElement("h2", "title", "Registration");
		const emailContainer = this.createElement("div", "emailContainer");
		const labelEmail = this.createElement("label", "", "Email");
		labelEmail.setAttribute("for", "email");
		const inpEmail = this.createElement("input", "email");
		emailContainer.append(labelEmail, inpEmail);
		const passwordContainer = this.createElement("div");
		const labelPassword = this.createElement("label", "", "Password");
		labelPassword.setAttribute("for", "password");
		const inpPassword = this.createElement("input", "password");
		inpPassword.setAttribute("type", "password");
		passwordContainer.append(labelPassword, inpPassword);
		const repeatContainer = this.createElement("div");
		const labelRepPassword = this.createElement("label", "", "Repeat Password");
		labelRepPassword.setAttribute("for", "rep-password");
		const inpRepPassword = this.createElement("input", "rep-password");
		inpRepPassword.setAttribute("type", "password");
		repeatContainer.append(labelRepPassword, inpRepPassword);
		const btn = this.createElement("button", "btn", "Create Account");
		btn.setAttribute("disabled", "disabled");
		form.append(title, emailContainer, passwordContainer, repeatContainer, btn);
		document.body.prepend(form);
	}
	createElement(tag, id, text) {
		const elem = document.createElement(tag);
		if (id) elem.id = id;
		if (text) elem.textContent = text;
		return elem;
	}
	getElement(selector) {
		const elem = document.querySelector(selector);
		return elem;
	}
}
const form = new AddItemForm();
