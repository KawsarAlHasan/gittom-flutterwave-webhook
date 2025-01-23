const axios = require("axios");

// curl --request GET \
//      --url 'https://api.flutterwave.com/v3/top-bill-categories?country=NG' \
//      --header 'Authorization: Bearer FLWSECK_TEST-SANDBOXDEMOKEY-X' \
//      --header 'Content-Type: application/json' \
//      --header 'accept: application/json'

exports.getData = async (req, res) => {
  const { url, bearer_token } = req.query;
  console.log("url", url);
  console.log("bearer_token", bearer_token);
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${bearer_token}`,
      },
    });

    res.json({
      status: "success",
      message: response?.data?.message,
      data: response?.data?.data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch data from Flutterwave API",
      error: error.message,
    });
  }
};

exports.postData = async (req, res) => {
  const { url, bearer_token, body } = req.body;
  try {
    const response = await axios.post(url, body, {
      headers: {
        Authorization: `Bearer ${bearer_token}`,
      },
    });

    res.json({
      status: "success",
      message: response?.data?.message,
      data: response?.data?.data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch data from Flutterwave API",
      error: error.message,
    });
  }
};

exports.updateData = async (req, res) => {
  const { url, bearer_token, body } = req.body;
  try {
    const response = await axios.put(url, body, {
      headers: {
        Authorization: `Bearer ${bearer_token}`,
      },
    });

    res.json({
      status: "success",
      message: response?.data?.message,
      data: response?.data?.data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch data from Flutterwave API",
      error: error.message,
    });
  }
};

exports.deleteData = async (req, res) => {
  const { url, bearer_token } = req.query;
  try {
    const response = await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${bearer_token}`,
      },
    });

    res.json({
      status: "success",
      message: response?.data?.message,
      data: response?.data?.data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch data from Flutterwave API",
      error: error.message,
    });
  }
};
