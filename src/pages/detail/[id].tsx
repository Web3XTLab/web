import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import AppItemCard from "@/src/components/AppItemCard";
import { useEffect, useState } from "react";
import useWeb3 from "@/src/hooks/useWeb3";

const Web3Layout = dynamic(() => import("@/src/Layout/Web3Layout"), {
  ssr: false,
});

const data = {
  description: "GameItems - Thor's Hammer",
  external_url: "https://forum.openzeppelin.com",
  image: "https://openmoji.org/data/color/svg/1F528.svg",
  name: "Thor's Hammer",
};

const Detail = () => {
  const [data, setData] = useState();
  const web3 = useWeb3();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const id = router.query.id;
      if (!id || !web3.web3) return;

      const itemURI = await web3.tokenURI(id);
      console.log(itemURI);
      // use mock data
      setData(data);
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
