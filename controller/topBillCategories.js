const axios = require("axios");

exports.test = async (req, res) => {
  const { url, bearer_token } = req.query;
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
