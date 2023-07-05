const fs = require('fs/promises');
const path = require('path');
const { nanoid } = require('nanoid');

const contactsPath = path.join(__dirname, 'db', 'contacts.json');

const getListContacts = async () => {
  const data = await fs.readFile(contactsPath);

  // Повертає масив контактів.
  return JSON.parse(data);
};

const getContactById = async id => {
  const contacts = await getListContacts();

  // Повертає об'єкт контакту з вказаним id. Повертає null, якщо контакт з таким id не знайдений.
  return contacts.find(contact => contact.id === id) || null;
};

const addContact = async data => {
  const contacts = await getListContacts();
  const newContact = {
    id: nanoid(),
    ...data,
  };

  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

  // Повертає об'єкт доданого контакту.
  return newContact;
};

const updateContactById = async (id, data) => {
  const contacts = await getListContacts();
  const index = contacts.findIndex(contact => contact.id === id);

  if (index === -1) {
    return null;
  }

  contacts[index] = { id, ...data };
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

  // Повертає об'єкт оновленного контакту.
  return contacts[index];
};

const removeContact = async id => {
  const contacts = await getListContacts();
  const index = contacts.findIndex(contact => contact.id === id);

  if (index === -1) {
    return null;
  }

  const [result] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

  // Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
  return result;
};

module.exports = {
  getListContacts,
  getContactById,
  addContact,
  updateContactById,
  removeContact,
};
