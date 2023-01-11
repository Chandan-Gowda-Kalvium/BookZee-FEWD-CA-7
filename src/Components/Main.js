import {useState} from "react";
import Card from "./Card";
import axios from "axios";
import './style.css'

const Main=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const [error, setError] = useState(1)
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            // eslint-disable-next-line no-useless-concat
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU'+'&maxResults=40')
            .then(res => {
                if (res.data.totalItems != 0) {
                  setData(res.data.items)
                  setError("")
                }
                else {
                  setError(res.data.totalItems)
                }
      
              })
            .catch(err=>console.log(err))
        }
    }
    return(
        <>
            {/* <nav>
                <h1>BookZee</h1>
                <button className="btnn">Register</button>
            </nav> */}
            <div className="header">
                {/* <div className="row1">
                    <h1>A room without books is like<br/> a body without a soul.</h1>
                </div> */}
                <div className="row2">
                    <h2>Find the Book of your Choice</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}/>
                    </div>
                    <h4>credits: Google Books</h4>

                    <img src="./images/bg2.png" alt="" />
                </div>
            </div>

            {error === 0 ?

        <h1 className="error">
          No books found for the search !!
        </h1>

        :  <div className='containerr'>
          {
            <Card book={bookData} />
          }
        </div>}
        </>
    )
}
export default Main;