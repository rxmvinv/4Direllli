describe("Fetching data", function() {

  var response;

  beforeEach(function() {
    response = getData();
  });
  
  it("check only success", async function() {

    // Assurance to be resolved at first
    await expectAsync(response).toBeResolved();

    response.then(async res => {

      const fetchedData = await res.json();

      // Check is fetched data is array
      expect(Array.isArray(fetchedData)).toBe(true);
      // Check if array length is 37 in our particular case
      expect(fetchedData.length).toBe(37);
    
    });

  });
  
  // Emitting get request
  async function getData() {
    const response = await fetch('https://5dc588200bbd050014fb8ae1.mockapi.io/assessment');

    return response;
  };
  
});