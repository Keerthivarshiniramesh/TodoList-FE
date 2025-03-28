import React, { useState } from 'react';

export default function UploadFile() {
    const beurl = process.env.REACT_APP_URL

    // console.log("id is", id)
    let [store, setStore] = useState({
        name: '',
        age: '',
        docu: null,
    })

    // console.log(products)
    function Create(e, keys) {
        let values = e.target.value
        let types = e.target.type
        let file = e.target.files

        if (types === 'file' && file.length > 0) {
            setStore(prev => (
                {
                    ...prev,
                    [keys]: file[0]
                }))
        }
        else {
            setStore(prev => ({
                ...prev,
                [keys]: values
            }))
        }
    }

    let form = new FormData()
    let Order = (e) => {
        e.preventDefault()

        if (store.name !== '' || store.age !== '') {

            form.append("Name", store.name)
            form.append("Age", store.age)
            form.append("filess", store.docu)

            console.log(form)
            for (let pair of form.entries()) {
                console.log("Forms :", pair[0] + ': ' + pair[1]);
            }
            console.log(beurl)
            fetch(`${beurl}add_data`, {
                method: "POST",
                credentials: "include",
                body: form
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success === true) {
                        alert(data.message)
                        window.location.reload()
                    }
                    else {
                        alert(data.message)
                    }
                })
                .catch(err => {
                    console.log("Error", err)
                    alert("Trouble in connecting to the Server !!")
                })
        }
    }

    return (
        <div className="user_bg">

            <h3 className="p-3 text-primary">Personal Details</h3>
            <form>
                <label className='mb-3'>Name : </label>
                <input type="text" placeholder="UserName" className="form-control p-3 mb-3" value={store.name} onChange={(e) => Create(e, "name")} />

                <label className='mb-3'>Age : </label>
                <input type="text" placeholder="Age" className="form-control p-3 mb-3" value={store.age} onChange={(e) => Create(e, "age")} />

                <label className='mb-3'> Upload File: </label>
                <input type='file' className='sm ' accept="image/*" onChange={(e) => Create(e, 'docu')}></input>

                <button className="btn btn-primary mt-4 w-50 " style={{ marginLeft: '80px' }} onClick={(e) => Order(e)}> Order Now </button>
            </form>
        </div >
    )
}
