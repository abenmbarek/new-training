
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

export const deleteArticle = (id) =>{
  return fetch(`http://localhost:8080/portal/rest/article/deleteArticle/${id}`, {
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

export const updateArticle = (objectTosend,id) =>{
  return fetch(`http://localhost:8080/portal/rest/article/updateArticle/${id}`, {
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
 


