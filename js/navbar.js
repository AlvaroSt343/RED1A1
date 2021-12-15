const whitebar = document.querySelector("#whitebar");
whitebar.innerHTML = 
`
    <div class="container">
        <a class="navbar-brand" href="index.html"><img src="./images/logos/red1a1-color.png" alt=""></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <div class="d-flex">
                <a class="nav-enlace" data-bs-toggle="modal" href="#exampleModalToggle2"
                    role="button">Regístrate
                </a>
                <a class="sesion-btn mb-2 mb-lg-0" data-bs-toggle="modal" href="#exampleModalToggle"
                    role="button">Inicia Sesión
                </a>
                <a class="nav-perfil ms-3" data-bs-toggle="modal" href="#"
                    role="button"><img src="./images/icons/perfil.png" alt=".." width="100%">
                </a>
            </div>
        </div>
    </div>
`