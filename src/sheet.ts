const ss = SpreadsheetApp.getActiveSpreadsheet();
const configSheet = ss.getSheetByName('cfg');

type Config = {
    importId: number;
    sheetName: string;
};

const getConfig = (): Config[] =>
    configSheet
        .getRange('A:B')
        .getValues()
        .slice(1)
        .filter(([importId, sheetName]) => !!importId && !!sheetName)
        .map(([importId, sheetName]) => ({
            importId,
            sheetName,
        }));

const handleForm = (formObject) => {
    console.log(formObject);
};

const getData = (): GoogleAppsScript.Base.Blob => {
    const ssId = ss.getId();
    const importSheet = ss.getSheetByName(IMPORT_SHEET);
    const importSheetId = importSheet.getSheetId().toString();

    const res = UrlFetchApp.fetch(
        `https://docs.google.com/spreadsheets/d/${ssId}/export?gid=${importSheetId}&format=csv`,
        {
            method: 'get',
            headers: { Authorization: `Bearer ${ScriptApp.getOAuthToken()}` },
        },
    );
    console.log(res.getContentText());
    return res.getBlob();
};
