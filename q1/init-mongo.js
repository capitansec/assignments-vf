db = db.getSiblingDB('testdb');

db.createUser({
  user: 'burak.bozaci',
  pwd: 'SuperPassword',
  roles: [{ role: 'readWrite', db: 'testdb' }]
});

db.records.insertMany([
  {
    gsm: "5300622000",
    password: "burakburak",
    insert_date: new Date("2022-03-11T14:16:30.228Z")
  },
  {
    gsm: null,
    password: "burakbsadsad",
    insert_date: new Date("2022-04-02T10:20:30.228Z")
  },
  {
    gsm: "0987654321",
    password: "unhashedburak",
    insert_date: new Date("2022-05-15T08:00:00.000Z")
  }
]);
