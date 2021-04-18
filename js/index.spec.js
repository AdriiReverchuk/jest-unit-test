import { expect } from "@jest/globals";
import { AddItemForm } from "./index.js";
describe("Add Item Form", () => {
	it("should create", () => {
		expect.assertions(1);
		const form = new AddItemForm();
		expect(form).toBeTruthy();
	});
	it("should generate proper DOM", () => {
		expect.assertions(1);
	});
});
