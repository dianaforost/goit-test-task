import axios from "axios";
axios.defaults.baseURL="https://6477b610362560649a2ce251.mockapi.io"
export const fetchUsers = async() => {
    const response = await axios.get("/users");
    return response.data;
}
export const fetchPaginationUsers = async(page,limit) => {
    const response = await axios.get("/users", {
        params: {
          page: page,
          limit: limit,
        },
      });
  return response.data;
}
export const followUser = async(id, isFollowed) =>{
    const response = await axios.get(`/users/${id}`);
    const user = response.data;
    const updatedData = {
        ...user,
        followers: user.followers + 1,
        isFollowed: true,
      };
      const updateResponse = await axios.put(`/users/${id}`, updatedData);

      return updateResponse.data;
}
