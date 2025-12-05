function ArticlesCards ({url , h2 , b}) {
    return (
        <>
          <div className="artics-cards">
                <img src={url} alt="" />
                  <div className="texts">
                    <h2>{h2}</h2>
                    <p>Lorem ipsum dolor sit amet conse ctetur adip <br/> iscing elit justo quis odio sit <br/> sit ac port titor sit males.</p>
                    <b>{b}</b>
                  </div>
             </div>
        </>
    )
}

export default ArticlesCards;