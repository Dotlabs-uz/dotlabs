
import {Portfolios} from "@/types"
// import qs from "query-string";


const URL = `${process.env.NEXT_PUBLIC_API_URL}/portfolios`

const getPortfolios = async () => {

    const res = await fetch(URL);

    return res.json();
}

export default getPortfolios;