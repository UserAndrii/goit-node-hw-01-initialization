const contacts = require('./contacts');

// const { program } = require('commander');
// program
//   .option('-a, --action, <type>')
//   .option('-i, --id, <type>')
//   .option('-n, --name, <type>')
//   .option('-e, --email, <type>')
//   .option('-p, --phone, <type>');

// program.parse();
// const argv = program.opts();

const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);
const argv = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  const {
    getListContacts,
    getContactById,
    addContact,
    updateContactById,
    removeContact,
  } = contacts;

  switch (action) {
    case 'list':
      const allContactsList = await getListContacts();
      return console.table(allContactsList);

    case 'get':
      const contactById = await getContactById(id);
      return console.log(contactById);

    case 'add':
      const newContact = await addContact({ name, email, phone });
      return console.log(newContact);

    case 'update':
      const updateContact = await updateContactById(id, { name, email, phone });
      return console.log(updateContact);

    case 'remove':
      const deleteContact = await removeContact(id);
      return console.log(deleteContact);

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

invokeAction(argv);
// invokeAction({ action: 'list' });
// invokeAction({ action: 'get', id: 'AeHIrLTr6JkxGE6SN-0R' });
// invokeAction({
//   action: 'add',
//   name: 'Mangust',
//   email: 'mangust@gmail.com',
//   phone: '+38 093 123 45 67',
// });
// invokeAction({
//   action: 'update',
//   id: 'B4fI6kFsF_4kS7W1z1aTo',
//   name: 'Mangust Marco',
//   email: 'mangust@gmail.com',
//   phone: '+38 093 123 45 67',
// });
// invokeAction({ action: 'remove', id: 'B4fI6kFsF_4kS7W1z1aTo' });
