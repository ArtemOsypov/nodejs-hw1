import yargs from "yargs";
import contactService from "./contacts.js";

console.log("Hello NODE.JS");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactService.getAllContacts();
      console.log(allContacts);
      break;
    case "getById":
      const oneContact = await contactService.getContactbyId(id);
      console.log(oneContact);
      break;
    case "add":
      const newContact = await contactService.addContact({
        name,
        email,
        phone,
      });
      console.log(newContact);
      break;
    case "updateById":
      const updateContact = await contactService.updateContactById(id, {
        name,
        email,
        phone,
      });
      console.log(updateContact);
      break;
    case "deleteById":
      const deleteContact = await contactService.deleteContactById(id);
      console.log(deleteContact);
      break;

    default:
      console.log("Unknown action");
  }
};

console.log(process.argv);
const { argv } = yargs(process.argv);
console.log(argv);
invokeAction(argv);

// const { agrv } = yargs(process.agrv);
// console.log(agrv);
// invokeAction(argv);

// console.log(process.argv);
// const actionIndex = process.argv.indexOf("--action");
// if (actionIndex !== -1) {
//   const action = process.argv[actionIndex + 1];
//   console.log(action);
//   invokeAction({ action });
// }

// invokeAction({ action: "list" });
// invokeAction({ action: "getById", id: "drsAJ4SHPYqZeG-83QTVW" });
// invokeAction({
//   action: "add",
//   name: "Artem Osypov",
//   email: "a.osypov@vestibul.co.uk",
//   phone: "(050) 444-6388",
// });

// invokeAction({
//   action: "updateById",
//   id: "-CEWlmSjpcDnysGWRF8iB",
//   name: "Artem Osypov",
//   email: "artem.osypov@gmail.com",
//   phone: "(067) 784-6225",
// });

// invokeAction({
//   action: "deleteById",
//   id: "YskkS4isRvcrukqe8buIl",
// });
