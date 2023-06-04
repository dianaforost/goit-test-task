import axios from "axios";
axios.defaults.baseURL="https://6477b610362560649a2ce251.mockapi.io"
export const fetchUsers = async(page,limit, filterOption) => {
    const response = await axios.get("/users", {
        params: {
            page: page,
            limit: limit,
            filter: filterOption,
        },
      });
  return response.data;
}
export const followUser = async(id) =>{
    const response = await axios.get(`/users/${id}`);
    const user = response.data;
    const updatedData = {
        ...user,
        followers: user.followers + (user.isFollowed ? -1 : 1),
        isFollowed: user.isFollowed ? false : true,
      };
      const updateResponse = await axios.put(`/users/${id}`, updatedData);

      return updateResponse.data;
}
export const fetchSortBy = async(filterOption) =>{
    const response = await axios.get("/users", {
        params: {
            filter: filterOption,
        },
      });
     
      return response.data;
}