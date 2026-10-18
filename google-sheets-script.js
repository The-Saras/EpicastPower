/**
 * Google Apps Script for Epicast Power Equipment Contact Enquiries
 * 
 * INSTRUCTIONS:
 * 1. Open Google Sheets (https://sheets.new) and name it e.g. "Epicast Power Enquiries".
 * 2. In the top menu, go to: Extensions > Apps Script.
 * 3. Delete any code in the editor, and paste this entire file content.
 * 4. Click "Save" (disk icon or Ctrl+S).
 * 5. Click the blue "Deploy" button at the top right > select "New deployment".
 * 6. Click the gear icon next to "Select type" > select "Web app".
 * 7. Fill in the fields:
 *    - Description: "Epicast Contact Form Webhook"
 *    - Execute as: "Me" (your email)
 *    - Who has access: "Anyone" (crucial so the website can post enquiries)
 * 8. Click "Deploy". Authorize permissions if prompted by Google.
 * 9. Copy the "Web app URL" (it ends with /exec).
 * 10. Open .env.local in your project and paste the URL:
 *     GOOGLE_SHEETS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
 * 11. Restart your dev server (or redeploy on Vercel with that environment variable).
 */

const SHEET_NAME = "Sheet1";

function doPost(e) {
  try {
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.getActiveSheet();
    
    // Auto-create headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Name", "Email", "Phone", "Message"]);
      const headerRange = sheet.getRange(1, 1, 1, 5);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#052653"); // Epicast primary blue
      headerRange.setFontColor("#ffffff");  // White text
      sheet.setFrozenRows(1);
    }
    
    let data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    const timestamp = data.timestamp || new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    const name = data.name || "N/A";
    const email = data.email || "N/A";
    const phone = data.phone || "N/A";
    const message = data.message || "N/A";

    sheet.appendRow([timestamp, name, email, phone, message]);

    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Enquiry successfully recorded into Google Sheet."
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional GET handler to verify deployment in browser
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "active",
    service: "Epicast Power Equipment Contact Form Webhook",
    message: "POST requests with contact details will be recorded to this sheet."
  })).setMimeType(ContentService.MimeType.JSON);
}
