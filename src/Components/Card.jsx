function Card(props){
    function trigger(){
        props.func(props.oid);
    }
    
    return(
        <>
            <article className="card text-capitalize">
            
                    <h2 className="title my-heading purple">{props.title}  💯</h2>
                    <p className='fw-300 extra-small-font'>{props.desc}</p>
                    <i className="fa-solid fa-trash my-heading purple" onClick={trigger}></i>
            </article>
        </>
    );
}
export default Card;