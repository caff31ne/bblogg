import axios from 'axios';

const getPage = async (name: string) => {
    console.log("Getting page " + name);
    const response = await axios.get(`/pages/${name}.md`);
    return response.data;
}

const getPost = async (id: string) => {
    console.log("Getting post " + id    );
    const response = await axios.get(`/posts/${id}.md`);
    return response.data;
}

export default { getPage, getPost };