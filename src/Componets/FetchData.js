import React, { useEffect } from 'react'
import UserCard from "./UserCard"

const FetchData = () => {

    const [dear, setDear] = React.useState([]);

    const Fetch_User = async () => {
        const data = await fetch(`http://localhost:5000/users`,)
            .then((response) => {
                return response.json();
            }).then((actual_Data) => {

                return (actual_Data)
            })
        return setDear(data)
    }

    useEffect(() => {
        Fetch_User()
    }, [])

    return (
        <>
            <div class="container">
                <div class="row">
                    {
                        dear.map((dear, index) => {
                            return <div class="col">
                                <UserCard key={index}
                                    id={dear.Id}
                                    name={dear.Name}
                                    LastName={dear.LastName}
                                    phone={dear.Phone}
                                    email={dear.Email}
                                    address={dear.Address}
                                />
                            </div>
                        })
                    }
                </div>
            </div>

        </>



    )

}

export default FetchData