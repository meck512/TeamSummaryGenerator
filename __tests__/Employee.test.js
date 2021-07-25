const Employee = require('../lib/Employee.js')

test('creates a empoyee object w/ name, id, & email', () => {

    const steve = new Employee('Steve', 12345, 'steve@gmail.com');

    expect(steve.name).toEqual(expect.any(String));
    expect(steve.id).toEqual(expect.any(Number));
    expect(steve.email).toContain('@'); 

  });