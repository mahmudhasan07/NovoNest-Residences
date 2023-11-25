import axios from "axios";



const useimagehost = async ({ image }) => {
    console.log(image);

    const res = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_API}`, image, {
        headers: {
            'content-type': 'multipart/form-data'
        }
    })
    console.log(res);
};

export default useimagehost;