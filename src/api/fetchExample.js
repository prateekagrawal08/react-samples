/*
fetch('coffee.jpg')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            return response.blob();
        }
    })
    .then(myBlob => {
        let objectURL = URL.createObjectURL(myBlob);
        let image = document.createElement('img');
        image.src = objectURL;
        document.body.appendChild(image);
    })
    .catch(e => {
        console.log('There has been a problem with your fetch operation: ' + e.message);
    });
*/


 async function myFetchRes(){

     const response = await fetch('coffee.jpg');
     if(!response.ok){
      throw new Error('Failed to get API response')
     }
     else{
         let myBlob = await response.blob();
         let objectURL = URL.createObjectURL(myBlob);
         let image = document.createElement('img');
         image.src = objectURL;
         document.body.appendChild(image);
     }

}

myFetchRes().catch(error => {
    console.log(error.message());
})
