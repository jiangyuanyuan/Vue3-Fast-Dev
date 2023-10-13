import Http from "../http/index";

// 登录
export const login = async (data={}) => {
    return Http.post('/tallyman/userLogin', data)
}

//首页数据
export const pointList = async (data={}) => {
    return Http.post('/tallyman/pointList', data)
}
