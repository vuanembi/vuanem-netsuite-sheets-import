const ui = SpreadsheetApp.getUi();

const onOpen = () => {
    ui.createMenu('VNBI - NetSuite')
        .addItem('Import CSV', 'showSideBar')
        .addToUi();
};

const showSideBar = () => {
    const html = HtmlService.createTemplateFromFile('form')
        .evaluate()
        .setTitle('Import CSV');
    ui.showSidebar(html);
};
