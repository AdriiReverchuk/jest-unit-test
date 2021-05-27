import { AddItemForm } from "./index.js";
describe("Add Item Form", () => {
	it("should create", () => {
		expect.assertions(1);
		const form = new AddItemForm();
		expect(form).toBeTruthy();
	});
});
describe("Layout", () => {
	it("should generate container", () => {
		expect.assertions(1);
		const container = document.getElementById("container");
		expect(container).toBeTruthy();
	});
	it("should generate title", () => {
		expect.assertions(1);
		const title = document.getElementById("title");
		expect(title).toBeTruthy();
	});
	it("should generate  emailContainer", () => {
		expect.assertions(1);
		const emailContainer = document.getElementById("emailContainer");
		expect(emailContainer).toBeTruthy();
	});
});
