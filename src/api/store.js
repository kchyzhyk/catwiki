import $axios from "./index";

export const getAllBreeds = async () => {
    return await $axios
        .get("/breeds")
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

export const getImgs = async () => {
    return await $axios
        .get(`/images/search`)
        .then((res) => res.data)
        .catch(async (err) => {
            console.log(err)
        })
}
