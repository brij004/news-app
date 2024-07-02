

const Newsitem =(props)=> {
 
  
   let {description,imageurl,newsurl,author,date,source}=props;
    return (

      <div className='my-3'>
      <div className="card" style={{width: "18rem"}}>
  <img src={!imageurl? "https://www.shutterstock.com/image-vector/breaking-news-background-world-global-260nw-719766118.jpg":imageurl}className="card-img-top" alt="..."/>
  <div className="card-body">

    <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">{source}  </span>

    <p className="card-text">{description}</p>
        <p className="card-text"><small className="text-body-secondary">By{!author ?"Unknown":author} on {new Date (date).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsurl} target='_blank' className="btn btn-sm btn-dark">Read Mor</a>
  </div>
</div>
      </div>
    )
  
}

export default Newsitem