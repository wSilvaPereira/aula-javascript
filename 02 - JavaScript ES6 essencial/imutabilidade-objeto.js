const user = {
  name: 'William',
  lastName: 'Pereira',
};

function getUserWithFullName(user) {
  const { name, lastName } = user;
  return {
    ...user,
    fullname: `${name} ${lastName}`,
  };
}
const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName);
