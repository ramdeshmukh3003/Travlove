import "./MainStyle.css";

function Main(props){
    return (
        <>
       <div className={props.cName}>
        <img alt="MainImg" className="main-bg" src={props.MainImg}/>
       </div>
       <div className="main-text"> 
       <h1>{props.title}</h1>
       <p>{props.tagline} </p></div>
       <a href={props.url} className={props.btnClass}>
        {props.btnName}
       </a>
        </>
    )

}
export default Main