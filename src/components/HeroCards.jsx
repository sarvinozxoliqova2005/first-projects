function HeroCards ({url , title , title2}) {
    return (
        <>
          <div className="about-card">
          <img src={url} alt="" />
          <h1>{title}</h1>
          <p>{title2}</p>
        </div>
        </>
    )
}

export default HeroCards;