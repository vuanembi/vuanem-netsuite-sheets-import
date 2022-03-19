type Data = {
    id: number;
    data: string;
};

const importCsvService = ({ config }) => {
    const [importId, sheetName] = config.split('-');
    const payload = {
        id: importId,
        data: getData(sheetName),
    };
    post(payload);
};
