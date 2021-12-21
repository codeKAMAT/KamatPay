import React, {useState} from 'react'

const Navbar = () => {
    const [show, setShow] = useState(false)
    return (
        <>
          <section className='navbar-bg'>
            <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand" href="#">KamatPAY</a>
                <button className="navbar-toggler" onClick={() => setShow(!show)} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${show ? "show": ""}`}>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Contact</a>
                    </li>                    
                </ul>
                <form className="d-flex">
                    <button className="btn  btn-style" type="submit">Sign Up</button>
                    <button className="btn  btn-style btn-style-border" type="submit">Log in</button>

                </form>
                </div>
            </div>
            </nav>
           </section>
        </>
    )
}

export default Navbar
