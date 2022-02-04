interface Administrateur {    
    nom : string,    
    email : string ,    
    ip : string ,    
    dt_connexion : Date ,    
    login : string,    
    password : string
}

type UtilisateurAnonyme = Pick<Administrateur, "nom" | "ip">;

const anonymousUser : UtilisateurAnonyme = {    
    nom : "Robert",    
    ip : "03269326829" 
};