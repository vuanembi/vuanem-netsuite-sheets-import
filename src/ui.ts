const ui = SpreadsheetApp.getUi();

const onOpen = () => {
    ui.createMenu('VNBI - NetSuite')
        .addItem('Import CSV', 'importCSVService')
        .addToUi();
};

const importCSVService = () => {
    const html = HtmlService.createTemplateFromFile('import-csv')
        .evaluate()
        .setTitle('Import CSV');
    ui.showSidebar(html);
};
