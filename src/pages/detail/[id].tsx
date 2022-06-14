import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import axios from "axios";

import AppItemCard from "@/src/components/AppItemCard";
import { useEffect, useState } from "react";
import useWeb3 from "@/src/hooks/useWeb3";

const Web3Layout = dynamic(() => import("@/src/Layout/Web3Layout"), {
  ssr: false,
});

const Detail = () => {
  const [data, setData] = useState();
  const web3 = useWeb3();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const id = router.query.id;
      if (!id || !web3.web3) return;

      const itemURI = await web3.tokenURI(id);
      const data = await axios.get(itemURI);
      // use mock data
      setData(data.data as any);
    })();
  }, [router.query.id, web3.web3]);

  return <>{data && <AppItemCard data={data} />}</>;
};

export default () => {
  return (
    <Web3Layout>
      <Detail />
    </Web3Layout>
  );
};
