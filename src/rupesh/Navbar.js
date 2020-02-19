import React from "react";

class Navbar extends React.Component {
    render() {
        console.log(this.props.client.id);
        return (
            <nav
                className="navbar navbar-expand-lg navbar-light"
                style={{ backgroundColor: "#1d23e7" }}
            >
                <a className="navbar-brand" href="#" style={{ color: "#fff" }}>
                    {this.props.title}
                    {/* {this.props.client.id}
          {this.props.client.name} */}
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a class="nav-link" href="#" style={{ color: "#fff" }}>
                                Home <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#" style={{ color: "#fff" }}>
                                Link
              </a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link disabled" href="#">
                                Disabled
              </a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input
                            class="form-control mr-sm-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                            Search
            </button>
                    </form>
                </div>
            </nav>
        );
    }
}
export default Navbar;
