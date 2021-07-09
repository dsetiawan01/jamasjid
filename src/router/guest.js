export default function guest (/* { to, from, next, store } */ { next, store }) {
     let isLoggedIn = store.getters['auth/getDataAnggota']
     if(Object.keys(isLoggedIn).length === 0) {
       return next('login')
       //window.location.href = '/#/login'
     }
    return next()
  }
