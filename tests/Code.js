function doGet() {
  return HtmlService.createHtmlOutputFromFile('form');
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function recordResponse(data) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow([new Date(), data.nickname, data.city, data.score]);
}