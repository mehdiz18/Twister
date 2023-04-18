**Services liés à l'utilisateur:**
  
Nom du Web service : createUser  
URL : POST /api/users  
Description : Permet de créer un nouvel utilisateur et l'insérer dans la base de données.  
Paramètres en entrée : email, password, lastname, firstname  
Format de sortie : ok/erreur  
Exemple de sortie : { message : "User created successfully", "user" : {"id" : "1", "login" : login, "firstname": firstname, "lastname": lastname }} ou {"status":500, "message" : "User already exists"}
ou { "status" : 400, "message" : "Please verify arguments"}  
Erreurs possibles : manque de paramètres, utilisateur existant déjà, erreur lors de connexion à la base de données.   
  
Nom du Web service : getUser  
URL : GET /api/users/:id  
Description : Retourne l'utilisateur portant l'id dans la base de données.  
Paramètres en entrée : rien  
Format de sortie : ok/erreur  
Exemple de sortie :  { "login" : "charlesaznavour@gmail.com", "password" : "huejkyehjde", "lastname" : "Aznavour", "firstname" : "Charles" }  
ou {"status" : "404", "message" : "User Not Found"}  
Erreurs possibles : utilisateur inexistant, erreur lors de connexion à la base de données.  
  
Nom du Web service : updateUser  
URL : PUT /api/users/:id  
Description : Modifie les paramètres de l'utilisateur portant l'id dans la base de données par les paramètres passés en req.body.  
Paramètres en entrée : lastname, firstname, password  
Format de sortie : ok/erreur  
Exemple de sortie :  { "message" : "User Info uptadated successfully" "user" : {"login" : "charlesaznavour@gmail.com", "password" : "huejkyehjde", "lastname" : "Aznavour", "firstname" : "Charles"}}   
ou {"status" : "404", "message" : "User Not Found"}  
Erreurs possibles : User Not found, manque de paramètres, erreur lors de connexion à la base de données.  
  
Nom du Web service : deleteUser  
URL : DELETE /api/users/:id  
Description : Supprime et Retire l'utilisateur portant l'id dans la base de données.  
Paramètres en entrée : rien  
Format de sortie : ok/erreur  
Exemple de sortie :  { "message" : "User deleted successfully"} ou {"status" : "404", "message" : "User Not Found"}  
Erreurs possibles : User Not found, erreur lors de connexion à la base de données.  
  
Nom du Web service : login  
URL : POST /api/users/login  
Description : Authentifie l'utilisateur  
Paramètres en entrée : email,password  
Format de sortie : ok/erreur  
Exemple de sortie :  { userId:1,sessionId:3232FFDSFDSFEZFZ},{"status" : "404", "message" : "User Not Found"},{"status" : "401", "message" : "Password incorrect"}  
Erreurs possibles : User Not found, erreur lors de connexion à la base de données, mot de passe incorrect.  

Nom du Web service : logout  
URL : DELETE /api/users/logout  
Description : Déconnecte un utilisateur  
Paramètres en entrée : rien
Format de sortie : ok/erreur  
Exemple de sortie :  { message:"Session closed"}, { message:"No session was opened"}.  
Erreurs possibles : Pas de session ouverte  
  
**Services Messages**  
  
Nom du Web service : getMessages  
URL : GET /api/messages/  
Description : Retourner les messages de l'utilisateur userId  
Paramètre(s) en entrée (dans le champs body) : userId  
Format de sortie : ok/erreur  
Exemple de sortie : [{id:1,content: Lorem Ipsum,userId:1,likesCount=0, postDate:},{id:2,content: Lorem Ipsum,userId:1,likesCount=4, postDate:}] 
ou { "status" : 400, "message" : "Please verify arguments"}
Erreurs possibles : bd injoignable, manque un parametre  
  
Nom du Web service : createMessage  
URL : POST /api/messages/  
Description : Créer un message  
Paramètre(s) en entrée (dans le champs body) : content,userId  
Format de sortie : ok/erreur  
Exemple de sortie : {id:1,content: Lorem Ipsum,user:{},likesCount=0, postDate:} ou { "status" : 400, "message" : "Please verify arguments"} 
Erreurs possibles : bd injoignable, manque un parametre  
  
Nom du Web service : deleteMessage  
URL : DELETE /api/messages/:id  
Description : Supprimer le message avec l'id  
Paramètre(s) en entrée (dans le champs body) : rien  
Format de sortie : ok/erreur  
Exemple de sortie : {id:1,deleted:true} ou { "status" : 400, "message" : "Please verify arguments"} 
Erreurs possibles : bd injoignable, manque un parametre, message non existant  
  
Nom du Web service : updateMessage  
URL : PUT /api/messages/:id  
Description : Modifier le contenu du message de l'id avec le contenu passé en arguments <br>
Paramètre(s) en entrée (dans le champs body) : content  
Format de sortie : ok/erreur  
Exemple de sortie : {id:1,content: Test,user:{},likesCount=0, postDate:} ou { "status" : 400, "message" : "Please verify arguments"} ou {"status" : "404", "message" : "Message Not Found"} <br>
Erreurs possibles : bd injoignable, manque un parametre, message non existant  

**Services Friends**

Nom du Web service : getFriends  
URL : GET /api/friends/  
Description : Retourne les amis de l'utilisateur userId passé en req.body 
Paramètre(s) en entrée (dans le champs body) : {userId}  
Format de sortie : ok/erreur  
Exemple de sortie : [{friends1:{},friends2:{}}] ou {"status" : "404", "message" : "User Not Found"}
Erreurs possibles : bd injoignable, user non existant  
  
Nom du Web service : createFriendship  
URL : POST /api/friends/  
Description : Crée un lien d'amitié entre lutilisateur friendId1 et l'utilisateur friendId2  
Paramètre(s) en entrée (dans le champs body) : friendId1,friendId2  
Format de sortie : ok/erreur  
Exemple de sortie : {friends1:{},friends2:{}}  ou {"status" : "404", "message" : "One of the users is not found (or both)"}
Erreurs possibles : bd injoignable, user non existant  
  
Nom du Web service : deleteFriendship  
URL : DELETE /api/friends/  
Description : Supprimer un lien d'amitié entre l'utilisateur id et l'utilisateur friendId  
Paramètre(s) en entrée (dans le champs body) : friendId1,friendId2  
Format de sortie : ok/erreur  
Exemple de sortie : {deleted:1}  ou {"status" : "404", "message" : "User Not Found"}
Erreurs possibles : bd injoignable, user non existant  
  
**Services a implementer**  
  
getUsersInfos: Retourner les statistiques des utilisateurs (Le nombre d'utilisateurs inscrits).  

getMessagesInfos: Retourner les statistiques des messages (Le nombre de messages postés par l'utilisateur id).  

updateMessageLikes: Mise à jour du nombre de likes du message avec l'id messageId.  

getMessageLikes: Retourne le nombre de likes du message avec l'id messageId.  

deleteMessageLike: Supprimer un like du message avec l'id messageId.  

getListLikesMessages: Retourne la liste des utilisateurs qui ont liké le message.  

getFriendsInfos: Retourner les statistiques des amis (le nombre d'amis d'un utilisateur).  

addComment: Ajouter un commentaire a un message.  

deleteComment: Supprimer un commentaire.  

updateComment: Modifier un commentaire.  

getComments: retourner les commentaires d'un message.  

**Remarques**:
- Le fichier Counter.js sert de modele pour les id de chaque collection: elle nous aide a generer des id qui s'incrementent à chaque insertion dans une collection et de ce fait on utilise pas les id generes par mongodb. Chaque collection (User, Message, Friends) a son propre counter.  

- Le dossier middleware contient des middlewares qui sont utilisés avant et apres une insertion ou une suppression de la base de données pour mettre a jour le compteur.  


