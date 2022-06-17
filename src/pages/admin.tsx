import dynamic from "next/dynamic";
import Head from "next/head";

const Web3Layout = dynamic(() => import("@/src/Layout/Web3Layout"), {
  ssr: false,
});

const Admin = dynamic(() => import("@/src/components/Admin"), {
  ssr: false,
});

export default function Page() {
  return (
    <Web3Layout>
      <Head>
        <title>Admin Page</title>
      </Head>
      <Admin />
    </Web3Layout>
  );
}
