const axios = require("axios");

exports.getData = async (req, res) => {
  const { url, bearer_token } = req.query;
  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer FLWSECK-197107a548bdc1855903840dd6988aa1-193c5f5fc58vt-X`,
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
        Authorization: `Bearer FLWSECK-197107a548bdc1855903840dd6988aa1-193c5f5fc58vt-X`,
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
        Authorization: `Bearer FLWSECK-197107a548bdc1855903840dd6988aa1-193c5f5fc58vt-X`,
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
        Authorization: `Bearer FLWSECK-197107a548bdc1855903840dd6988aa1-193c5f5fc58vt-X`,
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
