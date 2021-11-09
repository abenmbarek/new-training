export const clientServices =  ()=>{

  // GET request using fetch with async/await

  return fetch('http://localhost:8080/portal/rest/demo/listClients', {
    method: 'GET',
  }).then(resp => {
    if (!resp || !resp.ok) {
      throw new Error('Response code indicates a server error', resp);
    } else {
      return resp.json();
    }
  });
};

