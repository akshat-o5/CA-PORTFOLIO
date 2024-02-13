import Image from 'next/image'
import React from 'react'
Image

function Crousel() {
  return (
    <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
        <Image src="/crousel1.jpg" width='1280' height='720' className="d-block w-100" alt="..."></Image>
    </div>
    <div className="carousel-item">
    <Image src="/crousel2.jpg" width='1280' height='720' className="d-block w-100" alt="..."></Image>
    </div>
    <div className="carousel-item">
    <Image src="/crousel3.jpg" width='1280' height='720' className="d-block w-100" alt="..."></Image>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Crousel