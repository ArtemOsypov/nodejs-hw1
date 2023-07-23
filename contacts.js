import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";
import { json } from "express";

const contactsPath = path.resolve("db", "contacts.json");
console.log(contactsPath);

const updateContactStorage = (contacts) =>
  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

export const getAllContacts = async () => {
  const data = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(data);
};

export const getContactbyId = async (id) => {
  const contacts = await getAllContacts();
  const result = contacts.find((item) => item.id === id);
  return result || null;
};

export const addContact = async ({ name, email, phone }) => {
  const contacts = await getAllContacts();
  const newContact = { id: nanoid(), name, email, phone };
  contacts.push(newContact);
  await updateContactStorage(contacts);
  return newContact;
};

export const updateContactById = async (id, { name, email, phone }) => {
  const contacts = await getAllContacts();
  const index = contacts.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  console.log(index);
  contacts[index] = { id, name, email, phone };
  await updateContactStorage(contacts);
  return contacts[index];
};

export const deleteContactById = async (id) => {
  const contacts = await getAllContacts();
  const index = contacts.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await updateContactStorage(contacts);
  return result;
};

export default {
  getAllContacts,
  getContactbyId,
  addContact,
  updateContactById,
  deleteContactById,
};
