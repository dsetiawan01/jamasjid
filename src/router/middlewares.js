/**
 * Auth middleware example.
 */ 
 export default function auth (/* { to, from, next, store } */ { next, store }) {
    let isLoggedIn = store.getters['auth/getLoggedIn']  
    
    if(!isLoggedIn) {
      return next('/login')
    }   
    return next()
  } 