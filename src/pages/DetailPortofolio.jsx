import { useParams } from "react-router-dom"

function DetailPortofolio() {

    const {id} = useParams()

    return (
        <div>DetailPortofolio {id} </div>
    )
}

export default DetailPortofolio