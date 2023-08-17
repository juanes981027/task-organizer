import { Link } from "react-router-dom"

export let NotFoundPage = () => {



    return <>
       <h1>Page not found</h1>
       <h4>Go back to home by clicking <Link to={'/all-tasks'}>here</Link></h4>
    </>

}
