import '../css/imgCatgory.css'




function ImageCargory(props) {

    return (
        < div className="div-imgcatgory" >
            <h2>{props.title}</h2>
            <div className="card2">

                {props.king.map(e => <div className="cardcat" key={e.id}>
                    <img src={e.imageUrl} alt="" />
                    <p>{e.name}</p></div>)}

            </div>
        </div >
    )

}

export default ImageCargory