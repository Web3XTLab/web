import useWeb3 from "@/src/hooks/useWeb3";
import React, { useEffect, useState } from "react";
import { IURIListViewProps, URIListView } from "./View";

export function URIList() {
  const [list, setList] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const web3app = useWeb3();

  useEffect(() => {
    setLoading(true);
    web3app
      .tokenURIs()
      .then((result) => setList(result))
      .finally(() => setLoading(false));
  }, [web3app]);

  const onReloadButtonClick: IURIListViewProps["onReloadButtonClick"] =
    async () => {
      setLoading(true);
      const result = await web3app.tokenURIs();
      setList(result);
      setLoading(false);
    };

  return (
    <URIListView
      loading={loading}
      list={list}
      onReloadButtonClick={onReloadButtonClick}
    />
  );
}
