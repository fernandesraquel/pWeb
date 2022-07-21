export default function Movies({data}) {

    return (
        <div>
            {data.Search.map(s =>{
                <h1>{s.Title}</h1>
            })}
        </div>
    )
}


export async function getServerSideProps(context) {
    const { title } = context.query;

    const res = await fetch(`http://www.omdbapi.com/?apikey=de6a32db&s=${title}`)
    const data = await res.json()
  
    return { props: { data } }
}