import  SummaryApi from '../common/index'

const fetchCategoryWiseProduct = async (category) => {

    const response = await fetch(SummaryApi.getWiseProduct.url,{
        method : SummaryApi.getWiseProduct.method,
        headers : {
            "content-type" : "application/json"
        },
        body : JSON.stringify({
            category : category
        })
    })

    const data = await response.json()

    return data

}

export default fetchCategoryWiseProduct