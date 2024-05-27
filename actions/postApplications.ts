import axios from "axios";


const URL = `${process.env.NEXT_PUBLIC_TOKEN}/applications`

const postApplication = async (data:any) => {
    const res = await axios.post(URL, {data});

    return res.status
}

export default postApplication;