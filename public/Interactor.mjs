const Interactor = async () => {
  const response = await fetch('https://5dc588200bbd050014fb8ae1.mockapi.io/assessment');
  const extracted = await response.json();
  console.log(extracted);

  const requestedData = new CustomEvent('data-request', {
    detail: {
      payload: extracted
    },
    bubbles: true
  });

  window.dispatchEvent(requestedData);
}

export { Interactor };

