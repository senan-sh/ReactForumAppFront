import { useState, useEffect } from "react"

export default function TechStackList({ data }) {


    const [list, setList] = useState([]);

    useEffect(() => {
        if (data === null || data === undefined || data.length == 0) {
            return;
        } else {
            setList(data.map((e, i) => {
                return (
                    <li key={i}>
                        <img src={e.img} />
                        <span>{e.name}</span>
                    </li>
                )
            }))
        }
    }, [data])



    if (list) {
        return (
            <ul>
                {list}
            </ul>
        )
    }
}
