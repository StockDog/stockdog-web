export function authenticated(userId, token) {
  console.log('Checking authentication.');
  console.log(userId);
  console.log(token);
  if (userId === null || token === null) {
    return false;
  }
  return true;
}
