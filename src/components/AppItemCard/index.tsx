
export default ({ data }: any) => {
  return (<>
    <img src={data.image} />
    <h3>{data.title}</h3>
    <p>{data.description}</p>
  </>)
}