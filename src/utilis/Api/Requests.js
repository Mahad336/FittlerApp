import Link from "./instance";
import { get_data } from '../AsyncStorage/Controller'
import axios from "axios";

const post_request = async ({ target, body }) => {
    try {
        // let token = await get_data("USER_TOKEN")
        const inst = axios.create(
            {
                baseURL: Link,
                // timeout: 1000,
                headers: {
                    // Authorization: "Bearer  " + token,
                }
            });
        const response = await inst.post(target, body)
        console.log("post response", response.data);
        return response

    } catch (error) {
        console.log("post error", error);
        return "Error"
    }

}

const get_request = async (target,link) => {
    try {
        let token = await get_data("USER_TOKEN")
        console.log(token);
        const inst = axios.create(
            {
                baseURL: Link,
                // timeout: 1000,
                headers: {
                    Authorization: "Bearer  " + token
                }
            });
        const response = await inst.get(target,link)
        var res = response.data
        return res

    } catch (error) {
        console.log("get error", error);
        return "Error"
    }
}

export { post_request, get_request }
