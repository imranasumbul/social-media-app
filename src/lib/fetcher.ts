import axios from "axios";

const fetcher = async (url : string) => {
    const response = (await axios.get(url)).data;
    return response;
}
export default fetcher;