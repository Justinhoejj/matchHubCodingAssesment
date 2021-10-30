import React from "react";

const Header = () => {

  return (
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Questionnaire System</a>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="/">All responses</a>
            <a class="nav-link" href="/create">New Response</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header