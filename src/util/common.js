const successStatuses = [200, 204];
const errorStatuses = [400, 404, 500];

function getAlertType(statusCode) {
  switch (true) {
    case successStatuses.includes(statusCode):
      return "success";
    case errorStatuses.includes(statusCode):
      return "error";
    default:
      return "success";
  }
}

module.exports = {
  getAlertType
};
