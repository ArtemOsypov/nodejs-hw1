import yargs from "yargs";
import contactService from "./contacts.js";

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

const { argv } = yargs(process.argv);
invokeAction(argv);
