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
      expect.assertions(3);
      const emailContainer = document.getElementById("emailContainer");
      const inpEmail = document.getElementById("email");
      const labelEmail = document.getElementById("labelForEmail");
      expect(emailContainer).toBeTruthy();
      expect(inpEmail).toBeTruthy();
      expect(labelEmail).toBeTruthy();
   });
   it("should generate  paswordContainer", () => {
      expect.assertions(3);
      const passwordContainer = document.getElementById("passwordContainer");
      const inpPassword = document.getElementById("password");
      const labelPassword = document.getElementById("labeForPassword");
      expect(passwordContainer).toBeTruthy();
      expect(inpPassword).toBeTruthy();
      expect(labelPassword).toBeTruthy();
   });
   it("should generate  paswordRepeatContainer", () => {
      expect.assertions(3);
      const repeatPasswordContainer = document.getElementById(
         "repeatPasswordContainer"
      );
      const inpRepPassword = document.getElementById("rep-password");
      const labelRepPassword = document.getElementById("labelForRepPassword");
      expect(repeatPasswordContainer).toBeTruthy();
      expect(inpRepPassword).toBeTruthy();
      expect(labelRepPassword).toBeTruthy();
   });
   it("should create Button", () => {
      expect.assertions(3);
      const btn = document.getElementById("btn");
      const atribute = btn.getAttribute("disabled");
      const labelRepPassword = document.getElementById("labelForRepPassword");
      expect(btn).toBeTruthy();
      expect(atribute).toBeTruthy();
      expect(labelRepPassword).toBeTruthy();
   });
});
