import { API_URL } from "../app/(home)/page";

async function getMovie(id : string) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    throw new Error('something broken...');
    // const response = await fetch(`${API_URL}/${id}`);
    // return response.json();
}

export default async function MovieInfo({id} : {id : string}) {
    const movie = await getMovie(id);
    return (
        <div>{JSON.stringify(movie)}</div>
    )
}
