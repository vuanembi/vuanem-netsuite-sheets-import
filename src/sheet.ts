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

const getData = (sheetName: string) => {
    const ssId = ss.getId();
    const importSheet = ss.getSheetByName(sheetName);
    const importSheetId = importSheet.getSheetId().toString();

    const res = UrlFetchApp.fetch(
        `https://docs.google.com/spreadsheets/d/${ssId}/export?gid=${importSheetId}&format=csv`,
        {
            method: 'get',
            headers: { Authorization: `Bearer ${ScriptApp.getOAuthToken()}` },
        },
    );
    return res.getContentText();
};
