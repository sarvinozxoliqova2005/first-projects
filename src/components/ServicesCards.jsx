function ServicesCards ({url , title , p}) {
    return (
        <>
          <div className="service-cards">
              <img src={url} alt="" />
              <h1>{title}</h1>
              <p>{p}</p>
            </div>
        </>
    )
}

export default ServicesCards;