import React, { useEffect, useState } from 'react'
import edit from '../images/edit.png'
import del from '../images/delete.png'

export default function (props) {

    let [remove, setRe] = useState([])
    let [stable, setStable] = useState(null)

    // let remove = props.send
    console.log("Display :", remove)

    useEffect(() => {
        setRe(props.send)
    }, [props.send])

    let deletes = (i) => {
        props.cancel(i)
    }

    let Edited = (index) => {
        setStable(index)
    }

    let save = () => {
        setStable(null)
    }

    let Check = (e, i, k) => {
        setRe(prev => {
            let temp = [...prev]
            temp[i][k] = e.target.value
            return (temp)
        })
    }

    return (
        <div className='m-5'>
            <div className=' bg-black hori'></div>

            <div className='tab'>
                {
                    remove.map((ele, index) =>
                    (
                        <div className='row m-5' key={index}>
                            <div className='col-sm-7 text-black'>
                                {
                                    stable === index ?
                                        <div>
                                            <input type='text' value={ele.event} className='inpu' onChange={(e) => Check(e, index, "event")} ></input>
                                            <button onClick={() => save()} className='bg-primary border rounded text-white ms-3 p-1 add1 '>Save</button>
                                        </div>
                                        :
                                        <h5 className='ps-5'>{ele.event}</h5>
                                }

                            </div>
                            <div className='col-sm-5 '>
                                <img src={edit} className='dis' onClick={() => Edited(index)}></img>
                                <img src={del} className='dis' onClick={() => deletes(index)}></img>
                                <div className='float-start set'>  {
                                    stable === index ?
                                        <div>
                                            <input type='date' value={ele.time} className='inpu' onChange={(e) => Check(e, index, "time")} ></input>
                                            <button onClick={() => save()} className='bg-primary border rounded text-white ms-3 p-1 add1'>Save</button>
                                        </div>
                                        :
                                        <h5 className='ps-5'>{ele.time}</h5>
                                }
                                </div>
                            </div>
                            <div className=' bg-white hori1'></div>

                        </div>
                    ))}
            </div>
        </div>
    )
}