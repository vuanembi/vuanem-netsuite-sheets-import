const SERVICE_URL =
    'https://us-central1-voltaic-country-280607.cloudfunctions.net/vuanem-ecommerce-service-dev/netsuite/task/csv_import';

const post = <T>(data: T) => {
    const url = SERVICE_URL;
    const res = UrlFetchApp.fetch(url, {
        contentType: 'application/json',
        payload: JSON.stringify({ data }),
        method: 'post',
    });
    return JSON.parse(res.getContentText());
};
