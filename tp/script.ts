interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    }
}

interface Post {
    userId: number,
    id: number,
    title: string,
    body: string,
}


let data : any ;

document.addEventListener("DOMContentLoaded", async () => {
    const reponse = await fetch("https://jsonplaceholder.typicode.com/users") 
    data = (await reponse.json()) as Array<Partial<User>>;

    //render(data)
})

document.addEventListener("DOMContentLoaded", async () => {
    const reponse = await fetch("https://jsonplaceholder.typicode.com/posts") 
    data = (await reponse.json()) as Array<Partial<Post>>;
    
    //render(data)
})



