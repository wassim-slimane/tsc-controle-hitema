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

interface UserPost {
    user : User
    posts : Post[]
}


const get = async () => {
    
    let dataUser : any ;
    const reponseUser = await fetch("https://jsonplaceholder.typicode.com/users") 
    dataUser = (await reponseUser.json()) as Array<Partial<User>>;

    let dataPost : any ;
    const reponsePost = await fetch("https://jsonplaceholder.typicode.com/posts") 
    dataPost = (await reponsePost.json()) as Array<Partial<Post>>;

    dataPost.array.forEach( post => {
        
    });
}

function render(data: any){
    let html = ""
    data.forEach( item => {é
        const devise = ( pays.currencies ) ? pays.currencies[Object.keys(pays.currencies)[0]].name : "" ;
        html += `
        <article>
            <img src="${pays.flags.png}" alt="">
            <h2>${pays.name.common}</h2>
            <p>${devise}</p>
        </article>
        `
    } )
    document.querySelector("content").innerHTML = html
}

