import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Routes from './Routes';
import ReactGA from 'react-ga';

class App extends Component {
  static displayName = App.name;

  constructor(props) {
    super(props);

    this.state = {
      permissions: [
        {
          name: "Área Administrativa",
          location: "/Admin",
          roles: [
            "Admin",
            "Diretor",
            "Professor"
          ]
        },
        {
          name: "Home",
          location: "/",
          roles: [
            "Admin",
            "Diretor",
            "Professor"
          ]
        },
        {
          name: "Registro de Classe",
          location: "/Planejamento",
          roles: [
            "Admin",
            "Diretor",
            "Professor"
          ]
        },
      ],
      isAuthenticated: false,
      user: {
        name: "",
        username: "",
        token: "",
        refreshToken: "",
        lastAuthentication: null
      },
      messageWindow: {
        status: "",
        message: ""
      }
    };

    this.userHasAuthenticated = this.userHasAuthenticated.bind(this);
    this.loggoutUser = this.loggoutUser.bind(this);
    this.logginUser = this.logginUser.bind(this);
    this.setUser = this.setUser.bind(this);
    this.validateUser = this.validateUser.bind(this);

    this.showMessage = this.showMessage.bind(this);

    this.apiGet = this.apiGet.bind(this);
    this.apiPost = this.apiPost.bind(this);

    // Configuração do Google Analytics
    ReactGA.initialize('UA-85250794-12');
    ReactGA.pageview('/Planejamento');
  }

  componentDidMount() {
    // Pega as permissões de acesso
    //this.apiPost("/api/Auth/GetAccessPermissions")
    //    .then(data => {
    //        if (data.status === 200)
    //            data.json().then(result => {
    //                this.setState({ permissions: result });
    //            });
    //    });
  }

  userHasAuthenticated(authenticated) {
    this.setState({ isAuthenticated: authenticated });
  }

  loggoutUser(event) {
    sessionStorage.setItem("user", null);
    this.setState({
      isAuthenticated: false,
      user: {
        name: "",
        username: "",
        token: "",
        refreshToken: "",
        lastAuthentication: null
      }
    });
  }

  logginUser(user) {
    sessionStorage.setItem("user", JSON.stringify(user));
    this.setState({
      isAuthenticated: true,
      user: user
    });
  }

  setUser(user) {
    this.setState({ user: user });
  }

  validateUser() {
    // Verifica se o usuário já está autenticado
    var user = JSON.parse(sessionStorage.getItem("user"));

    if (user !== null) {
      user.lastAuthentication = new Date(user.lastAuthentication);
      var currentTime = new Date();

      var diff = currentTime - user.lastAuthentication;
      //var diffDays = Math.floor(diff / 86400000); // days
      //var diffHrs = Math.floor((diff % 86400000) / 3600000); // hours
      var diffMins = Math.round(((diff % 86400000) % 3600000) / 60000); // minutes

      if (diffMins <= 10) { // Faz verificação se o token ainda é válido
        this.setState({
          user: user,
          isAuthenticated: true
        });
      }
      else if (diffMins <= 30) { // Faz verificação se o refreshToken ainda é válido, caso seja atualiza o token
        var credential = {
          username: user.username,
          refreshToken: user.refreshToken
        };

        this.apiPost("/api/Auth/RefreshLogin", credential)
          .then(response => response.json())
          .then(data => {
            if (data.status !== 401) {
              var user = {
                name: "",
                username: credential.username,
                token: data.token,
                refreshToken: data.refreshToken,
                lastAuthentication: new Date(),
                //TODO: Pegar valores do perfil do usuário
                roles: [
                  "Admin",
                  "Supervisor"
                ]
              }

              this.logginUser(user);
            }
          });
      }
    }
  }

  showMessage(message, status, title = "Aviso") {
    this.setState({
      messageWindow: {
        status: status,
        title: title,
        message: message
      }
    });

    var modal = document.getElementById("messageWindowButton");
    modal.click();
  }

  apiPost(url, data = null) {
    if (data !== null)
      return (fetch(url, {
        method: "post",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }));
    else
      return (fetch(url, {
        method: "post",
        headers: { 'Content-Type': 'application/json' }
      }));
  }

  apiGet(url) {
    return (fetch(url));
  }

  render() {
    const childProps = {
      permissions: this.state.permissions,
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated,
      loggoutUser: this.loggoutUser,
      logginUser: this.logginUser,
      setUser: this.setUser,
      validateUser: this.validateUser,
      user: this.state.user,
      showMessage: this.showMessage,
      apiGet: this.apiGet,
      apiPost: this.apiPost
    };

    return (
      <div>
        <Routes childProps={childProps} />

        <div>
          <button id="messageWindowButton" type="button" className="btn btn-primary d-none" data-toggle="modal" data-target="#messageWindowModal"></button>

          <div className="modal fade" id="messageWindowModal" tabIndex="-1" role="dialog" aria-labelledby="messageWindowModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  {this.state.messageWindow.status === 'sucesso' && <h5 className="modal-title" id="messageWindowModalLabel">Sucesso!</h5>}
                  {this.state.messageWindow.status === 'erro' && <h5 className="modal-title" id="messageWindowModalLabel">Erro!</h5>}
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body d-flex align-items-stretch">
                  {this.state.messageWindow.status === 'erro' && <i className="fa fa-window-close fa-2x pr-2" aria-hidden="true"></i>}
                  {this.state.messageWindow.status === 'sucesso' && <i className="fa fa-check-circle fa-2x pr-2" aria-hidden="true"></i>}
                  <h4> {this.state.messageWindow.message} </h4>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-primary" data-dismiss="modal">Ok</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
