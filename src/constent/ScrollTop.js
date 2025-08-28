'use client'

const ScrollTop = () => {


  return (
    <>
      <button
        onClick={() => { window.scrollTo(0, 0) }}
        style={{ display: 'block' }}
        className="scroltop icon-up"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  )
}

export default ScrollTop;
