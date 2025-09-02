// Simple handler functions for testing
exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from Part 1!' })
  };
};

exports.status = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ status: 'OK', part: '1' })
  };
};

exports.users = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ users: ['user1', 'user2'], part: '2' })
  };
};

exports.login = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ token: 'test-token', part: '2' })
  };
};

exports.data = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ data: 'sample data', part: '3' })
  };
};

exports.config = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ config: { setting: 'value' }, part: '3' })
  };
};