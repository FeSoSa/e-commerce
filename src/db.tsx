const API_KEY = "cb080aa0835146f1bd29ffc766ea9367"
const API_BASE = "https://api.spoonacular.com"

export default {

    getAllProducts: async () => {
        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                Authorization: API_KEY,
                'content-type': 'application/json'
            },
            body: JSON.stringify({ from: '2022-01-30' })
        };
        try {
            const result = await fetch('https://api.techspecs.io/v4/all/products?page=0',options)
            const json = await result.json()
            console.log(json)
            return(json.data.items)
        } catch (error) {
            console.error(error);
        }
    }
}
