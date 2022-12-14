import * as rolesObjects from './roles.enum';

// Flatten roles objects into one array containing all the roles as strings
let rolesArray: string[] = [];

for (let [, value] of Object.entries(rolesObjects)) {
  if (value instanceof Object)
    for (let [, role] of Object.entries(value)) if (typeof role === 'string') rolesArray.push(role);
}

export const roles = rolesArray;
