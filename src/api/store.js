import $axios from "./index";

export const getAllBreeds = async () => {
    return await $axios
        .get("/breeds")
        .then((res) => res.data)
        .catch(async (err) => {
            console.log(err)
        });
};
