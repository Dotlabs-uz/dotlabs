"use client"
import { MacbookScroll } from "@/components/ui/mackbook-scroll";
import Layout from "@/layouts/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
interface PageProjectProps {}


const PageProject: React.FC<PageProjectProps> = () => {
   const router = useRouter()
   const [data, setData] = useState<any>(null);

   useEffect(() => {
      axios.get(process.env.NEXT_PUBLIC_TOKEN + "/portfolios/" + router.query.id)
         .then(res => setData(res.data))
   }, []);

   console.log(data);
   
   return (
      <Layout>
         <div className="w-full relative overflow-hidden flex justify-between items-start gap-[100px] max-w-[90%] my-0 mx-auto" >
            <p className="mt-20" >
               {data?.description}
            </p>
            <MacbookScroll src={data?.imageUrl} showGradient={false} />
         </div>
      </Layout>
   );
};

export default PageProject;
