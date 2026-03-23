const axios = require('axios');

exports.main = async () => {
  try {
    const response = await axios.get('https://api.hubapi.com/account-info/v3/details', {
      headers: {
        Authorization: `Bearer ${process.env.PRIVATE_APP_ACCESS_TOKEN}`
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    };
  } catch (error) {
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify(error.response?.data || error.message)
    };
  }
};
