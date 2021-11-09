export const getClients =  ()=>{

  // GET request using fetch with async/await

  return fetch('http://localhost:8080/portal/rest/client/listClients', {
    method: 'GET',
  }).then(resp => {
    if (!resp || !resp.ok) {
      throw new Error('Response code indicates a server error', resp);
    } else {
      return resp.json();
    }
  });
};
/* 
export const addClient =  (adresse,name,prenom,email)=>{

  // GET request using fetch with async/await

  return fetch(`http://localhost:8080/portal/rest/client/addClient?adresse=${adresse}&name=${name}&prenom=${prenom}&email=${email}`, {
    method: 'POST',
  }).then(resp => {
    if (!resp || !resp.ok) {
      throw new Error('Response code indicates a server error', resp);
    } else {
      return resp.json();
    }
  });
}; */
export const addClientBody = (objectTosend) =>{
  return fetch('http://localhost:8080/portal/rest/client/addClient', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(objectTosend)
  }).then(resp => {
    if (!resp || !resp.ok) {
      throw new Error('Response code indicates a server error', resp);
    } else {
      return resp.json();
    }
  });  
};

export const deleteClient = (id) =>{
  return fetch(`http://localhost:8080/portal/rest/client/deleteClient/${id}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    credentials: 'include',
    //body: JSON.stringify(objectTosend)
  }).then(resp => {
    if (!resp || !resp.ok) {
      throw new Error('Response code indicates a server error', resp);
    } else {
      return resp;
    }
  });  
};

export const updateClient = (objectTosend,id) =>{
  return fetch(`http://localhost:8080/portal/rest/client/updateClient/${id}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(objectTosend)
  }).then(resp => {
    if (!resp || !resp.ok) {
      throw new Error('Response code indicates a server error', resp);
    } else {
      return resp.json();
    }
  });  
};
 
export const addArticle = (objectTosend,id_client) =>{
  return fetch(`http://localhost:8080/portal/rest/article/addArticle/${id_client}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    credentials: 'include',
    body: JSON.stringify(objectTosend)
  }).then(resp => {
    if (!resp || !resp.ok) {
      throw new Error('Response code indicates a server error', resp);
    } else {
      return resp.json();
    }
  });  
};

export const getArticles =  ()=>{

  // GET request using fetch with async/await

  return fetch('http://localhost:8080/portal/rest/article/listArticles', {
    method: 'GET',
  }).then(resp => {
    if (!resp || !resp.ok) {
      throw new Error('Response code indicates a server error', resp);
    } else {
      return resp.json();
    }
  });
};
 


