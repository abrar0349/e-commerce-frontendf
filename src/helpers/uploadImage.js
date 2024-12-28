
// const url = `https://api.cloudinary.com/v1_1/dmzxtflxl/image`
const url = `https://api.cloudinary.com/v1_1/dmzxtflxl/image/upload`;


const  uploadImage =  async (image) => {

    const formData = new FormData()
    formData.append('file',image)
    formData.append('upload_preset','mern_product') ; // jb is mern_product ko string ma nhi diya tha to error undefine face kiya tha 

    const data = await fetch(url,{
        method : 'post',
        body : formData
    })

    return data.json()
}

export default uploadImage