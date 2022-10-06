import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// save content to db
export const putDb = async (content) => {
  const jateDb = await openDB('jate', 1);
  const trxn = jateDb.transaction('jate', 'readwrite');
  const objStore = trxn.objectStore('jate');
  const request = objStore.add({ id: 1, value: content });
  const result = await request;
  console.log('content saved: ', result);
};

// get all content from db
export const getDb = async () => {
  const jateDb = await openDB('jate', 1);
  const trxn = jateDb.transaction('jate', 'readonly');
  const objStore = trxn.objectStore('jate');
  const request = objStore.get(1);
  const result = await request;
  console.log('get value: ', result);
  return result?.value;
};

// delete content from db
export const deleteDb = async () => {
  const jateDb = await openDB('jate', 1);
  const trxn = jateDb.transaction('jate', 'readwrite');
  const objStore = trxn.objectStore('jate');
  const request = objStore.delete(id);
  const result = await request;
  console.log('delete value: ', result);
  return result?.value;
}

initdb();
