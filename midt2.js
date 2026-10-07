//OL
const userProfile = { 
  id: 67, 
  details: { 
    address: { 
      city: "Catbalogan" 
    } 
  } 
}; 

//OL
const settings = { 
  theme: "Masirom", 
  notifications: null 
}; 

//DO
const { id, details } = userProfile; 
const { theme } = settings; 

//OC
const city = details?.address?.city; 
const emailAlerts = settings.notifications?.email; 

console.log(id, theme, city, emailAlerts);

