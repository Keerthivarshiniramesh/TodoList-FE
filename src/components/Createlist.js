import React, { useEffect, useState } from 'react'
import cal from '../images/calender.png'

export default function Createlist(props) {
    const [profileData, setProfile] = useState(null)
    const beurl = process.env.REACT_APP_URL

    console.log("profile data", profileData)

    useEffect(() => {
        fetch(`${beurl}getdata`, {
            method: "GET",
            credentials: "include",

        })
            .then(res => res.json())
            .then(data => {
                if (data.success === true) {
                    alert(data.message)
                    setProfile(data.profile)

                }
                else {
                    alert(data.message)
                }
            })
            .catch(err => {
                console.log("Error", err)
                alert("Trouble in connecting to the Server !!")
            })

    }, [])

    return (
        <div>

            <table className="table caption-top position-relative">
                <caption>List of Products</caption>
                <thead className='table-light'>

                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col" className="d-none d-md-table-cell"> Pro.Id</th>
                        <th scope="col">Name</th>
                        <th scope="col" className="d-none d-md-table-cell">Age</th>
                        <th scope="col" className="d-none d-md-table-cell">ProfilePhoto</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        profileData && profileData.map((pro, index) =>
                        (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td className="d-none d-md-table-cell">{pro.id}</td>
                                <td>{pro.name}</td>
                                <td>{pro.age}</td>
                                {/* <td><img src={`${beurl}${pro.image.filepath}`} style={{ width: "50px", height: "50px" }} alt="Uploaded Image" />
                                </td> */}
                                <td><iframe src={`${beurl}${pro.image.filepath}`} width="100%" height="600px"></iframe>
                                </td>
                                {console.log(`Image is : ${beurl}${pro.image.filepath}`)}
                            </tr>

                        ))
                    }

                </tbody>
            </table>

        </div>
    )
}


