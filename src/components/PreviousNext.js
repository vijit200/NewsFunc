import React from 'react'

export default function previousNext(props) {
  return (
    <div className='container d-flex justify-content-between mb-2'>
      <button onClick={props.prevHandler} disabled = {props.disPrev} type="button" class="btn btn-dark">&larr; {props.prev}</button>
      <button onClick={props.nextHandler} disabled = {props.disNext} type="button" class="btn btn-dark">{props.next} &rarr;</button>
    </div>
  )
}
