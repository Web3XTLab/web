import dynamic from 'next/dynamic'

const Demo = dynamic(
  () => import('@/src/components/Demo'),
  { ssr: false }
)

const HomePage = () => {
  return (
    <>
      <h1>Hello BitForest DAppStore</h1>
      <Demo />
    </>
  );
};

export default HomePage;
