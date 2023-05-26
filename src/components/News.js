import React,{useState , useEffect} from 'react'
import Newscard from './Newscard'
import PreviousNext from './PreviousNext'
import Spinner from './Spinner'

export default function News(props) {

    
    const [article,setAraticles] = useState(null)
    const [pageNum,setPageNum] = useState(1)
    const [count,setCount] = useState(1)
    const [load,setLoad] = useState(false)

    useEffect(()=>{
        const fetchData = async() =>{
            const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=3ead518802cb4a15b4deb0bbf61b9bcd&page=${count}`)
            setLoad(true)
            const newData = await res.json()
            setAraticles(newData.articles)
            setLoad(false)
            setPageNum(Math.ceil(newData.totalResults/20))
            
        }
        fetchData()
    },[count])

    const nextClickHandler =()=>{
        if (count >= pageNum) {
            
        }

        else{
            setLoad(true)
            setCount(count + 1)
        }
    }


    const prevClickHandler = ()=>{
        if (count < 2) {
            
        }

        else{
            setLoad(true)
            setCount(count - 1)
        }
    }

    
    
  return (
    <div className='container mt-4'>

        <h1 className={`container text-center mb-3 text-${props.modeChange}`} style={{fontFamily: "'Arvo', serif" }}>Top Indian News On Newsly</h1>
        {load && <Spinner/>}
        <div className="row">
            { !load && article?article.map((e)=>{
                return <div className="col-md-4 mb-4">
                     <Newscard title={(e.title).slice(0,40)} description = {e.description?(e.description).slice(0,150):""} imgUrl={e.urlToImage?e.urlToImage:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAANlBMVEX///+/v7+8vLzKysr8/Pzg4ODFxcXb29vT09Pj4+P4+PjBwcH6+vry8vLY2NjIyMjs7Ozo6Oia8u11AAAEdUlEQVR4nO2d65bqIAxGp/Smrb34/i971KqlEC7FGuJZ3/7dKewJBgK4/PsDAAAAAAAAAAAAAAAA4KUam5+i3m94UsUPoVoYwlA6MIShfGAIQ/nAEIbyOcBQSeNww9NZGOXBhuq8+w1fxugfDG1gmB0YBoFhdmAYBIbZgWEQGGYHhkFgmB0YBoFhdmAYBIbZyWB4qVI6mgyv4WUeH7u007lL7vFeWA3n8rUFrZqWK5KchnWvPapOTGFkNDQPOJrhk45Hw2d4Ns+oVPlRz2NhMxyawkTtv2OWAJvhSBwzfjBO2+g/5TLs7BDeSF4eDP0Y+yiX4UydFKtT4pRxa3SKTcVchtQgLYrobhq0Kj7+XIb0aX+fZtipHfH/ScPlZZG5Jq9hk2RYP96lTnFPcxnWpGF52d2eNrPGPc5lOJC5NDrl65Sv1fs16nEuw8v20sdCP+9uTh8NZVSuYVvTnKlBmjAdaqu/uH8Qm2FVWuNUJYSwOu3tLV9tcelNw5SF9yZjRaVixvpwbrZRTKnyuyKysRXOGn/QBqpK25QzptVm9598eyfqXDaPnah+GlNmwr/aGOcqYl3DvJtYzXU7jvU1bbVmVdExE+pP7Qjb6TiiOBFmOPuyD7XyC+djWYadGt2KxE5PzMpWluHtXc6KQZ/rNYK5RpThfWXnrGzp6iRcQ0ky7KbHK+iBup3rtQZD6wZJhq+9HDIsri89BBsUZPguIal0Y871K6ECRY6hXkFaimQeXQjVUHIMNwWkuVax5/q1xcC6Rozh0G+7vYmidaqzCaJ/whBjaEZJr608Y7QIHvBIMbR3/dfB55jr3/hrKCGGxMHN+vmi53rtSW+uEWLYUj1/dsY1169tetc1MgwHaw9HU3TN9Svec0huw4os6CZHcO7dcc/163O+XMNteC0JRfdk0Aby6BNfDcW9i1EquzedI4R36vAYLfy5htnwtnBRvaHo/SZxjN8Nz7UO5ltf97WnMgbqHCfhRbmHKa/hdXl2qxjzQQsaunMNr+FzUlD62W8bORD9TM4gshpe3xVg+Z7BonJlmN55mMhpWGkV4GughtacsbgvLnAa6hXga6B666I9OGsoRsPtMbCa7l2q6OVaAs6uMxpejXDdd+SPSTMP+vyGdri6+bAQui8u8BmaIbwxUdcXkg0dNRTjOf6BNiSOGirrXYxjcXQ+632ag6EPE7kMiU/h4dA1FJfhgUnTzZTRkCOEt8apYcpj+P1E6u4+j+H3E+kCdUmKxZAjkS4QrbMY8nwKC7qGYjFkSaQL9rqGw5AthORhIoMhUyJ9ksPwsDI+Brv97xtWY8mJNUwZYtixYu0qyjhd+yYwDALD7MAwCAyzA8MgMMwODIPAMDtHGxZ1JYvjDRvWajCC7SYRfhsBhvKBIQzlA0MYygeGMJQPDGEoHxjCUD4whKF8YAhD+cAQhvKBIQzlA0MYygeGMJQPDGEoHxjCUD4whKF8YAhD+cAQhvJJM/wpEgyv9U+R8iNaAAAAAAAAAAAAAAAAAP4r/gEYCYE2Xwz6DQAAAABJRU5ErkJggg=="} newsUrl ={e.url?e.url:""} author = {e.author?e.author:"Unknown"} date = {e.publishedAt?e.publishedAt.slice(0,10):"Time not given"}/>
                </div>
            }):""}
        </div>

        <PreviousNext next="Next" prev= "Previous" nextHandler= {nextClickHandler} prevHandler = {prevClickHandler} disNext = {count+1>pageNum} disPrev = {count <= 1}/>
        
      
    </div>
  )
}
