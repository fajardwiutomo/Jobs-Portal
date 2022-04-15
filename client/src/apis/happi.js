import axios from "axios";

// base Url
const API_HAPPI = "https://api.happi.dev/v1/qrcode";

// Instance axios

const instanceHappi = axios.create({
  baseURL: API_HAPPI,
});

export default instanceHappi;