const encode = (data: GoogleAppsScript.Base.Blob) => {
    const encoded = Utilities.base64Encode(data.getBytes())
    console.log(encoded)
    const decoded = Utilities.base64Decode(encoded);
    console.log(Utilities.newBlob(decoded).getDataAsString());
    return data
}

const post = (payload: GoogleAppsScript.Base.Blob) => {
    const url = 'https://webhook.site/5dda66a0-6a21-4e27-8b55-abbc0f9dddac';
    const res = UrlFetchApp.fetch(url, {
        payload: {
            file: payload,
        },
        method: 'post',
    });
    console.log(res.getContentText);
    return res.getBlob()
};
