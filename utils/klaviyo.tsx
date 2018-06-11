// Add a email address to Klaviyo
// and responsd with a promise
export const AddToList = (listId: string, email: any) => {
  return new Promise((resolve, reject) => {
    fetch(`https://a.klaviyo.com/api/v1/list/${listId}/members`, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*'
      },
      body: `api_key=${
        process.env.KLAVIYO_API_KEY
      }&email=${email}&confirm_optin=true&$consent:web`
    })
      .then(response => {
        resolve(response);
      })
      .catch(error => {
        reject(`Uhhohhh. ${error}`);
      });
  });
};

export default { AddToList };
