import { AddItemForm } from "./index.js";
describe("Add Item Form", () => {
	it("should create", () => {
		expect.assertions(1);
		const form = new AddItemForm();
		expect(form).toBeTruthy();
	});
});
describe("Layout", () => {
	it("should generate proper DOM", () => {
		expect.assertions(1);
		const container = document.getElementById("container");
		expect(container).toBeTruthy();
	});
});
