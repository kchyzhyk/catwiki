import $axios from "./index";

export const getAllBreeds = async () => {
    return await $axios
        .get("/breeds")
        .then((res) => res.data)
        .catch(async (err) => {
            console.log(err)
        });
};
export const getTop10Breeds = async (limit) => {
    return await $axios
        .get("/breeds", {params: { limit: limit}})
        .then((res) => res.data)
        .catch(async (err) => {
            console.log(err)
        });
};


export const getCurrBreed = async (param) => {
    return await $axios
        .get('/breeds/search', {params: {q: param}})
        .then((res) => res.data)
        .catch(async (err) => {
            console.log(err)
        })
}

export const getCurrBreedImg = async (id) => {
    return await $axios
        .get(`/images/${id}`)
        .then((res) => res.data)
        .catch(async (err) => {
            console.log(err)
        })
}

export const getImgs = async (count, breedId) => {
    return await $axios
        .get(`/images/search`, {params: {limit: count, breed_id: breedId}})
        .then((res) => res.data)
        .catch(async (err) => {
            console.log(err)
        })
}
