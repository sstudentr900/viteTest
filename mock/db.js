function userDate(){
  return [
    {
      "name": "mary",
      "email": "mary@gmail.com",
      "password": "a123",
      "id": 1
    },
    {
      "name": "4156",
      "email": "4564@df.fdh",
      "password": "Aa123",
      "id": 4
    },
    {
      "name": "jhkg",
      "email": "1231@fghsfh.fd",
      "password": "4564qA",
      "id": 5
    }
  ]
}
export default [
  {
    url: '/api/get',
    method: 'get',
    response: ({ query }) => {
      return {
        code: 200,
        data: {
          name: 'vben',
        },
      }
    },
  },
  {
    url: '/api/user/post',
    method: 'post',
    response: ({body})=>{
      const {user,password} = body
      const checkuser = userDate().find(
        (item)=>item.name==user && item.password==password
      )
      if(!checkuser){
        return { code:201,data:{message:'帳密錯誤'}};
      }else{
        const token = '132456'
        return { code:200,data:{ checkuser }};
      }
    },
  },
]