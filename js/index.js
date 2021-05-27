export class AddItemForm {
   constructor() {
      this.createDOM();
      this.regExpEm = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/;
      this.regExPass =
         /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
   }
   createDOM() {
      const form = this.createElement("form", "container");
      form.style.padding = "50px";
      form.style.margin = "0 auto";
      form.style.width = "20%";
      const title = this.createElement("h2", "title", "Registration");
      const emailContainer = this.createElement("div", "emailContainer");
      const labelEmail = this.createElement("label", "labelForEmail", "Email");
      labelEmail.setAttribute("for", "email");
      const inpEmail = this.createElement("input", "email");
      inpEmail.setAttribute("type", "email");
      emailContainer.append(labelEmail, inpEmail);
      const passwordContainer = this.createElement("div", "passwordContainer");
      const labelPassword = this.createElement(
         "label",
         "labeForPassword",
         "Password"
      );
      labelPassword.setAttribute("for", "password");
      const inpPassword = this.createElement("input", "password");
      inpPassword.setAttribute("type", "password");
      passwordContainer.append(labelPassword, inpPassword);
      const repeatContainer = this.createElement(
         "div",
         "repeatPasswordContainer"
      );
      const labelRepPassword = this.createElement(
         "label",
         "labelForRepPassword",
         "Repeat Password"
      );
      labelRepPassword.setAttribute("for", "rep-password");
      const inpRepPassword = this.createElement("input", "rep-password");
      inpRepPassword.setAttribute("type", "password");
      repeatContainer.append(labelRepPassword, inpRepPassword);
      const btn = this.createElement("button", "btn", "Create Account");
      btn.setAttribute("disabled", "disabled");
      form.append(
         title,
         emailContainer,
         passwordContainer,
         repeatContainer,
         btn
      );
      document.body.prepend(form);
      document.body.addEventListener("keydown", (event) => {
         if (
            this.regExpEm.test(inpEmail.value) &&
            this.regExPass.test(inpPassword.value) &&
            inpRepPassword.value === inpPassword.value
         ) {
            btn.removeAttribute("disabled");
            if (this.getElement(".message")) {
               this.getElement(".message").remove();
            }
            btn.addEventListener("click", () => {
               alert(`<p>Ваш eмаil - ${inpEmail.value}</p>
					<p>Ваш пароль - ${inpPassword.value}</p>`);
               inpEmail.value = "";
               inpPassword.value = "";
               inpRepPassword.value = "";
            });
         } else {
            const message = this.createElement(
               "p",
               "message",
               "пожалуйста проверьте ваш пароль"
            );
            message.style.color = "red";
         }
      });
      const regExpEm = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/;
      const regExPass =
         /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
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
