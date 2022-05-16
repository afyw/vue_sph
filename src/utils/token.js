// 对外暴露一个函数
export const setToken=(token) =>{
    localStorage.setItem('Token',token);
}

export const getToken = ()=>{
    return localStorage.getItem('Token')
}

export const removeToken =()=>{
    return localStorage.removeItem('Token')
}