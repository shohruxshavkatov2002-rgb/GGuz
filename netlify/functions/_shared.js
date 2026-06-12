const fs = require("fs");
const path = require("path");

function json(statusCode, data) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type, x-admin-password",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS"
    },
    body: JSON.stringify(data)
  };
}

function getPassword() {
  return process.env.ADMIN_PASSWORD || "12345678";
}

function isAuthed(event) {
  const headerPassword =
    event.headers["x-admin-password"] ||
    event.headers["X-Admin-Password"] ||
    event.headers["X-ADMIN-PASSWORD"] ||
    "";
  return String(headerPassword) === String(getPassword());
}

function loadDefaultData() {
  try {
    const file = path.join(__dirname, "../../data/site-default.json");
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (error) {
    return { common: {}, i18n: { uz: {}, ru: {}, en: {} } };
  }
}

function parseBody(event) {
  try {
    return JSON.parse(event.body || "{}");
  } catch (error) {
    return {};
  }
}

module.exports = { json, isAuthed, loadDefaultData, parseBody };
