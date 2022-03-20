type Data = {
    id: number;
    data: string;
};

const importCsvService = ({ option }) => {
    const [importId, sheetName] = option.split('-');
    const payload = {
        id: importId,
        data: getData(sheetName),
    };
    return post(payload);
};
