const backendDomain = "http://localhost:30001"

const SummaryApi = {
    
    signUp : {
        url : `${backendDomain}/api/signup`,
        method : 'post'
    },

    signIn : {
        url : `${backendDomain}/api/signin`,
        method : 'post'
    },

    current_user : {
        url : `${backendDomain}/api/user-details`,
        method : 'get'
    },

    logout : {
        url : `${backendDomain}/api/userlogout`,
        method : 'get'
    },

    allUsersData : {
        url : `${backendDomain}/api/all-users`,
        method : `get`
    },

    updateUserData : {
        url : `${backendDomain}/api/update-users`,
        method : 'post'
    },
    uploadProduct : {
        url : `${backendDomain}/api/upload-product`,
        method : 'post'
    },
    allProduct : {
        url : `${backendDomain}/api/all-products`,
        method : 'get'
    },
    updateProduct : {
        url : `${backendDomain}/api/update-product`,
        method :  'post'
    },
    getCategoryProduct : {
        url : `${backendDomain}/api/get-category-product`,
        method : 'get'
    },
    getWiseProduct : {
        url : `${backendDomain}/api/category-proudct`,
        method : 'post'
    },
    productDetails : {
        url : `${backendDomain}/api/product-details`,
        method : 'post'
    },
    addtocart : {
        url : `${backendDomain}/api/addtocard`,
        method : 'post'
    },
    countAddToCart : {
        url : `${backendDomain}/api/addtocartproduct`,
        method : 'get'
    },
    addToCartView : {
        url : `${backendDomain}/api/view-cart-product`,
        method : 'get'
    },
    updateQuntityOfCart : {
        url : `${backendDomain}/api/update-cart`,
        method : 'post'
    },
    deleteToCart : {
        url : `${backendDomain}/api/delete-cart`,
        method : 'post'
    },
    searchPage : {
        url : `${backendDomain}/api/search`,
        method : 'get'
    },
    filterProduct : {
        url : `${backendDomain}/api/filter-product`,
        method : 'post'
    }
}

export default SummaryApi