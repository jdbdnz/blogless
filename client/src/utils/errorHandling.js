export const modelErrorsToString = error => {
  try {
    return Object.keys(error.response.data).reduce((string, attribute) => {
      return error.response.data[attribute]
        .map(issue => {
          return `${string} ${attribute} ${issue}. `;
        })
        .join();
    }, "");
  } catch (e) {
    return error.message;
  }
};
