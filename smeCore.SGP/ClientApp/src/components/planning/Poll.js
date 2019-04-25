import React, { Component } from 'react';
import { StudentPoll } from './StudentPoll';
import { StudentPollMathAlfabetizacao } from './StudentPollMathAlfabetizacao'
import { StudentPollMath1o } from './StudentPollMath1o'
import { StudentPollMathMult } from './StudentPollMathMult'
import { StudentPollMath4o } from './StudentPollMath4o'
import './Poll.css';

export class Poll extends Component {
  render() {
    return (
      <div className="tab-pane fade border-left border-right border-bottom" id="sondagem" role="tabpanel" aria-labelledby="poll-tab">
        <nav className="container-tabpanel navbar">
          <div className="form-inline">
            <button className="btn btn-outline-primary btn-sm">{this.props.todayDate}</button>
          </div>

          <ul className="nav navbar-nav ml-auto">
            <li className="nav-item">
              <div className="form-inline">
                <button className="btn btn-warning text-white" onClick={this.props.savePollStudent} disabled={this.props.year <= 0}>Salvar</button>
              </div>
            </li>
          </ul>
        </nav>

        <hr className="horizontal-rule bg-azul-ux" />

        <div id="poll-info" className="container-tabpanel-content">
          <div className="d-flex pb-3">
            <h5>{this.props.classroom}</h5>
          </div>

          <div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a className="btn btn-outline-primary btn-sm btn-planning active" id="portugues-tab" data-toggle="tab" href="#portugues" role="tab" aria-controls="portuguesPoll" aria-selected="true">Portugu&ecirc;s</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-outline-primary btn-sm btn-planning-tmp" id="matematica-tab" data-toggle="tab" href="#matematica" role="tab" aria-controls="matematicaPoll" aria-selected="false">Matem&aacute;tica Alfabetização</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-outline-primary btn-sm btn-planning-tmp" id="matematica-tab-1" data-toggle="tab" href="#matematica-1" role="tab" aria-controls="matematica-1Poll" aria-selected="false">Matem&aacute;tica 1°</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-outline-primary btn-sm btn-planning-tmp" id="matematica-tab-2" data-toggle="tab" href="#matematica-2" role="tab" aria-controls="matematica-2Poll" aria-selected="false">Matem&aacute;tica 2°</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-outline-primary btn-sm btn-planning-tmp" id="matematica-tab-3" data-toggle="tab" href="#matematica-3ca" role="tab" aria-controls="matematica-3caPoll" aria-selected="false">Matem&aacute;tica 3° CA</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-outline-primary btn-sm btn-planning-tmp" id="matematica-tab-4" data-toggle="tab" href="#matematica-3cm" role="tab" aria-controls="matematica-3cmPoll" aria-selected="false">Matem&aacute;tica 3° CM</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-outline-primary btn-sm btn-planning-tmp" id="matematica-tab-5" data-toggle="tab" href="#matematica-4ca" role="tab" aria-controls="matematica-4caPoll" aria-selected="false">Matem&aacute;tica 4° CA</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-outline-primary btn-sm btn-planning-tmp" id="matematica-tab-6" data-toggle="tab" href="#matematica-4cm" role="tab" aria-controls="matematica-4cmPoll" aria-selected="false">Matem&aacute;tica 4° CM</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-outline-primary btn-sm btn-planning-tmp" id="matematica-tab-7" data-toggle="tab" href="#matematica-5ca" role="tab" aria-controls="matematica-5caPoll" aria-selected="false">Matem&aacute;tica 5° CA</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-outline-primary btn-sm btn-planning-tmp" id="matematica-tab-8" data-toggle="tab" href="#matematica-5cm" role="tab" aria-controls="matematica-5cmPoll" aria-selected="false">Matem&aacute;tica 5° CM</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-outline-primary btn-sm btn-planning-tmp" id="matematica-tab-9" data-toggle="tab" href="#matematica-6ca" role="tab" aria-controls="matematica-6caPoll" aria-selected="false">Matem&aacute;tica 6° CA</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-outline-primary btn-sm btn-planning-tmp" id="matematica-tab-10" data-toggle="tab" href="#matematica-6cm" role="tab" aria-controls="matematica-6cmPoll" aria-selected="false">Matem&aacute;tica 6° CM</a>
              </li>
            </ul>
          </div>

          <div className="tab-content border-azul rounded">
            <div className="tab-pane fade show active border-left border-right border-bottom" id="portugues" role="tabpanel" aria-labelledby="portugues-tab">
              <div className="d-flex flex-fill flex-row-reverse">
                <div className="d-flex flex-column align-items-end">
                  <div className="card" id="accordionescrita">
                    <div className="card-header-sondagem" role="tab" id="headingescrita">
                      <div data-toggle="collapse" data-parent="#accordionescrita" href="#collapseescrita" aria-expanded="false"
                        aria-controls="collapseescrita">
                        <div className="d-flex line">
                          <div className="p-2 p-2sondagem"><small>Legendas das classificações de escrita</small></div>
                          <div className="ml-auto p-2"><i className="fas fa-angle-down rotate-icon"></i></div>
                        </div>
                      </div>
                    </div>
                    <div id="collapseescrita" className="collapse" role="tabpanel" aria-labelledby="headingescrita" data-parent="#accordionescrita">
                      <div className="card-body-sondagem pt-0">
                        <div className="d-flex flex-column">
                          <div className="d-flex line max-column-size" >
                            <div className="p-2 p-2sondagem"><small className="text-muted">Pré-Silábico</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">PS</small></div>
                          </div>
                          <div className="d-flex line max-column-size">
                            <div className="p-2 p-2sondagem"><small className="text-muted">Silábico sem Valor</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">SSV</small></div>
                          </div>
                          <div className="d-flex line max-column-size">
                            <div className="p-2 p-2sondagem"><small className="text-muted">Silábico com Valor</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">SCV</small></div>
                          </div>
                          <div className="d-flex line max-column-size">
                            <div className="p-2 p-2sondagem"><small className="text-muted">Silábico Alfabético</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">SA</small></div>
                          </div>
                          <div className="d-flex max-column-size">
                            <div className="p-2 p-2sondagem"><small className="text-muted">Alfabético</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">A</small></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column align-items-end pr-3">
                  <div className="card" id="accordionleitura">
                    <div className="card-header-sondagem" role="tab" id="headingescrita">
                      <div data-toggle="collapse" data-parent="#accordionleitura" href="#collapseleitura" aria-expanded="false"
                        aria-controls="collapseleitura">
                        <div className="d-flex line">
                          <div className="p-2 p-2sondagem"><small>Legendas das classificações de leitura</small></div>
                          <div className="ml-auto p-2"><i className="fas fa-angle-down rotate-icon"></i></div>
                        </div>
                      </div>
                    </div>
                    <div id="collapseleitura" className="collapse" role="tabpanel" aria-labelledby="headingescrita" data-parent="#accordionleitura">
                      <div className="card-body-sondagem pt-0">
                        <div className="d-flex flex-column">
                          <div className="d-flex line max-column-size">
                            <div className="p-2 p-2sondagem"><small className="text-muted">Não realizou a tarefa</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">Nível 1</small></div>
                          </div>
                          <div className="d-flex line max-column-size">
                            <div className="p-2 p-2sondagem"><small className="text-muted">Não associou nenhum(a) da(s) palavras ou títulos às imagens correspondentes</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">Nível 2</small></div>
                          </div>
                          <div className="d-flex line max-column-size">
                            <div className="p-2 p-2sondagem"><small className="text-muted">Não associou nenhum(a) da(s) palavras ou títulos às imagens correspondentes</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">Nível 3</small></div>
                          </div>
                          <div className="d-flex max-column-size">
                            <div className="p-2 p-2sondagem"><small className="text-muted">Associou 3 ou mais palavras ou títulos às imagens correspondentes</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">Nível 4</small></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container-tabpanel">
                <table className="table table-sm table-bordered table-hover">
                  <thead>
                    <tr>
                      <th rowSpan="2" className="align-middle border text-color-purple"><div className="ml-2">Sondagem</div></th>
                      <th colSpan="2" className="text-center border text-color-purple">1° Bimestre</th>
                      <th colSpan="2" className="text-center border text-color-purple">2° Bimestre</th>
                      <th colSpan="2" className="text-center border text-color-purple">3° Bimestre</th>
                      <th colSpan="2" className="text-center border text-color-purple">4° Bimestre</th>
                    </tr>
                    <tr>
                      <th className="text-center border poll-select-container"><small className="text-muted">Escrita</small></th>
                      <th className="text-center border poll-select-container"><small className="text-muted">Leitura</small></th>
                      <th className="text-center border poll-select-container"><small className="text-muted">Escrita</small></th>
                      <th className="text-center border poll-select-container"><small className="text-muted">Leitura</small></th>
                      <th className="text-center border poll-select-container"><small className="text-muted">Escrita</small></th>
                      <th className="text-center border poll-select-container"><small className="text-muted">Leitura</small></th>
                      <th className="text-center border poll-select-container"><small className="text-muted">Escrita</small></th>
                      <th className="text-center border poll-select-container"><small className="text-muted">Leitura</small></th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.props.students.map(student => (
                      <StudentPoll key={student.sequence} student={student} updatePollStudent={this.props.updatePollStudent} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="tab-pane fade border-left border-right border-bottom" id="matematica" role="tabpanel" aria-labelledby="matematica-tab" style={{ overflow: "hidden", overflowX: "auto" }}>
              {/* Sondagem Matemática Alfabetização */}
              <div className="d-flex flex-fill flex-row-reverse">
                <div className="d-flex flex-column align-items-end">
                  <div className="card" id="accordiongmatematicaalfabetizacao">
                    <div className="card-header-sondagem" role="tab" id="headingmatematicaalfabetizacao">
                      <div data-toggle="collapse" data-parent="#accordionescrita" href="#collapsegmatematicaalfabetizacao" aria-expanded="false"
                        aria-controls="collapsegmatematicaalfabetizacao">
                        <div className="d-flex line">
                          <div className="p-2 p-2sondagem"><small>Legendas das classificações</small></div>
                          <div className="ml-auto p-2"><i className="fas fa-angle-down rotate-icon"></i></div>
                        </div>
                      </div>
                    </div>
                    <div id="collapsegmatematicaalfabetizacao" className="collapse" role="tabpanel" aria-labelledby="headingmatematicaalfabetizacao" data-parent="#accordiongmatematicaalfabetizacao">
                      <div className="card-body-sondagem pt-0">
                        <div className="d-flex flex-column">
                          <div className="d-flex line max-column-size" >
                            <div className="p-2 p-2sondagem"><small className="text-muted">Escreve convencionalmente</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">S</small></div>
                          </div>
                          <div className="d-flex line max-column-size">
                            <div className="p-2 p-2sondagem"><small className="text-muted">Não escreve convencionalmente</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">N</small></div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="container-tabpanel">
                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="First group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-single active">Alfabetização</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="Second group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica  btn-single">1º ano</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="Third group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica  btn-single">2º ano</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="Fourth group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">3º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">3º ano - CM</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="fifth group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">4º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">4º ano - CM</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="sixth group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">5º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">5º ano - CM</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="seventh group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">6º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">6º ano - CM</button>
                  </div>
                  <table className="table table-sm table-bordered table-hover table-sondagem-matematica">
                    <thead>
                      <tr>
                        <th rowSpan="2" className="align-middle border text-color-purple "><div className="ml-2"><small>Sondagem - Alfabetização</small></div></th>
                        <th colSpan="2" className="text-center border text-color-purple "><small>Familiares ou frequentes</small></th>
                        <th colSpan="2" className="text-center border text-color-purple "><small>Opacos</small></th>
                        <th colSpan="2" className="text-center border text-color-purple "><small>Transparentes</small></th>
                        <th colSpan="2" className="text-center border text-color-purple "><small>Terminam em zero</small></th>
                        <th colSpan="2" className="text-center border text-color-purple "><small>Algarismos iguais</small></th>
                        <th colSpan="2" className="text-center border text-color-purple "><small>Processo de generalização</small></th>
                        <th colSpan="2" className="text-center border text-color-purple "><small>Zeros intercalados</small></th>
                      </tr>
                      <tr>
                        <th className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                        <th className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                        <th className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                        <th className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                        <th className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                        <th className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                        <th className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.students.map(student => (
                        <StudentPollMathAlfabetizacao key={student.sequence} student={student} updatePollStudent={this.props.updatePollStudent} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="tab-pane fade border-left border-right border-bottom" id="matematica-1" role="tabpanel" aria-labelledby="matematica-tab-1" style={{ overflow:"hidden", overflowX:"auto" }}>
              {/* Sondagem Matemática 1º Ano */}
              <div className="d-flex flex-fill flex-row-reverse">
                <div className="d-flex flex-column align-items-end">
                  <div className="card" id="accordiongmatematicaalfabetizacao">
                    <div className="card-header-sondagem" role="tab" id="headingmatematicaalfabetizacao">
                      <div data-toggle="collapse" data-parent="#accordionescrita" href="#collapsegmatematicaalfabetizacao" aria-expanded="false"
                        aria-controls="collapsegmatematicaalfabetizacao">
                        <div className="d-flex line">
                          <div className="p-2 p-2sondagem"><small>Legendas das classificações</small></div>
                          <div className="ml-auto p-2"><i className="fas fa-angle-down rotate-icon"></i></div>
                        </div>
                      </div>
                    </div>
                    <div id="collapsegmatematicaalfabetizacao" className="collapse" role="tabpanel" aria-labelledby="headingmatematicaalfabetizacao" data-parent="#accordiongmatematicaalfabetizacao">
                      <div className="card-body-sondagem pt-0">
                        <div className="d-flex flex-column">
                          <div className="d-flex line max-column-size" >
                            <div className="p-2 p-2sondagem"><small className="text-muted">Acertou</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">A</small></div>
                          </div>
                          <div className="d-flex line max-column-size">
                            <div className="p-2 p-2sondagem"><small className="text-muted">Errou</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">E</small></div>
                          </div>
                          <div className="d-flex line max-column-size">
                            <div className="p-2 p-2sondagem"><small className="text-muted">Não resolveu</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">NR</small></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="container-tabpanel">
                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="First group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-single">Alfabetização</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="Second group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica  btn-single active">1º ano</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="Third group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica  btn-single">2º ano</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="Fourth group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">3º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">3º ano - CM</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="fifth group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">4º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">4º ano - CM</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="sixth group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">5º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">5º ano - CM</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="seventh group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">6º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">6º ano - CM</button>
                  </div>
                  <table className="table table-sm table-bordered table-hover table-sondagem-matematica">
                    <thead>
                      <tr>
                        <th rowSpan="5" className="align-middle border text-color-purple "><div className="ml-2"><small>Sondagem - 1º ano</small></div></th>
                        <th colSpan="24" className="text-center border sondagem-matematica-title"><small>PROBLEMAS DE COMPOSIÇÃO</small></th>
                      </tr>
                      <tr>
                        <th colSpan="8" className="text-center border text-color-purple "><small>Ordem 1 - Problemas 2º e 4º Bimestre</small></th>
                        <th colSpan="8" className="text-center border text-color-purple "><small>Ordem 2 - Problemas 2º e 4º Bimestre</small></th>
                        <th colSpan="8" className="text-center border text-color-purple "><small>Ordem 3 - Problemas 2º e 4º Bimestre</small></th>
                      </tr>
                      <tr>
                        <th colSpan="8">
                          <div className="container">
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Todo</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Parte</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Parte</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Dado</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dada</small>                                
                              </div>
                            </div>
                          </div>
                        </th>
                        <th colSpan="8">
                          <div className="container">
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Todo</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Parte</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Parte</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Dado</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                            </div>
                          </div>
                        </th>
                        <th colSpan="8">
                          <div className="container">
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Todo</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Parte</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Parte</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Dado</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                            </div>
                          </div>
                        </th>
                      </tr>
                      <tr>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                      </tr>
                      <tr>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.students.map(student => (
                        <StudentPollMath1o key={student.sequence} student={student} updatePollStudent={this.props.updatePollStudent} />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="tab-pane fade border-left border-right border-bottom" id="matematica-2" role="tabpanel" aria-labelledby="matematica-tab-2" style={{ overflow: "hidden", overflowX: "auto" }}>
              {/* Sondagem Matemática 2º Ano */}
              <div className="d-flex flex-fill flex-row-reverse">
                <div className="d-flex flex-column align-items-end">
                  <div className="card" id="accordiongmatematicaalfabetizacao">
                    <div className="card-header-sondagem" role="tab" id="headingmatematicaalfabetizacao">
                      <div data-toggle="collapse" data-parent="#accordionescrita" href="#collapsegmatematicaalfabetizacao" aria-expanded="false"
                        aria-controls="collapsegmatematicaalfabetizacao">
                        <div className="d-flex line">
                          <div className="p-2 p-2sondagem"><small>Legendas das classificações</small></div>
                          <div className="ml-auto p-2"><i className="fas fa-angle-down rotate-icon"></i></div>
                        </div>
                      </div>
                    </div>
                    <div id="collapsegmatematicaalfabetizacao" className="collapse" role="tabpanel" aria-labelledby="headingmatematicaalfabetizacao" data-parent="#accordiongmatematicaalfabetizacao">
                      <div className="card-body-sondagem pt-0">
                        <div className="d-flex flex-column">
                          <div className="d-flex line max-column-size" >
                            <div className="p-2 p-2sondagem"><small className="text-muted">Acertou</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">A</small></div>
                          </div>
                          <div className="d-flex line max-column-size">
                            <div className="p-2 p-2sondagem"><small className="text-muted">Errou</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">E</small></div>
                          </div>
                          <div className="d-flex line max-column-size">
                            <div className="p-2 p-2sondagem"><small className="text-muted">Não resolveu</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">NR</small></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="container-tabpanel">
                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="First group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-single">Alfabetização</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="Second group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica  btn-single">1º ano</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="Third group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica  btn-single active">2º ano</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="Fourth group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">3º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">3º ano - CM</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="fifth group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">4º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">4º ano - CM</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="sixth group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">5º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">5º ano - CM</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="seventh group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">6º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">6º ano - CM</button>
                  </div>
                  <table className="table table-sm table-bordered table-hover table-sondagem-matematica">
                    <thead>
                      <tr>
                        <th rowSpan="5" className="align-middle border text-color-purple "><div className="ml-2"><small>Sondagem - 2º ano</small></div></th>
                        <th colSpan="8" className="text-center border sondagem-matematica-title"><small>Ordem 1 - ideia: COMPOSIÇÃO</small></th>
                        <th colSpan="8" className="text-center border sondagem-matematica-title"><small>Ordem 2 - ideia: TRANFORMAÇÃO</small></th>
                        <th colSpan="8" className="text-center border sondagem-matematica-title"><small>Ordem 3 - ideia: PROPORCIONALIDADE</small></th>
                      </tr>
                      <tr>
                        <th colSpan="4" className="text-center border text-color-purple "><small>Problemas 2º Bimestre</small></th>
                        <th colSpan="4" className="text-center border text-color-purple "><small>Problemas 4º Bimestre</small></th>
                        <th colSpan="8" className="text-center border text-color-purple "><small>Problemas 2º e 4º Bimestre</small></th>
                        <th colSpan="8" className="text-center border text-color-purple "><small>Problemas 2º e 4º Bimestre</small></th>
                      </tr>
                      <tr>
                        <th colSpan="4">
                          <div className="container">
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Todo</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Parte</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Parte</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Dado</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                            </div>
                          </div>
                        </th>
                        <th colSpan="4">
                          <div className="container">
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Todo</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Parte</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Parte</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Dado</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                            </div>
                          </div>
                        </th>
                        <th colSpan="8">
                          <div className="container">
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Estado inicial</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Transformação</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Estado final</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Dado</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                            </div>
                          </div>
                        </th>
                        <th colSpan="8">
                          <div className="container">
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Grandeza I</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Grandeza II</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                            </div>
                          </div>
                        </th>
                      </tr>
                      <tr>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                      </tr>
                      <tr>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.students.map(student => (
                        <StudentPollMath1o key={student.sequence} student={student} updatePollStudent={this.props.updatePollStudent} />
                      ))}
                     </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="tab-pane fade border-left border-right border-bottom" id="matematica-3ca" role="tabpanel" aria-labelledby="matematica-tab-3" style={{ overflow: "hidden", overflowX: "auto" }}>
              {/* Sondagem Matemática 3º Ano - CA */}
              <div className="d-flex flex-fill flex-row-reverse">
                <div className="d-flex flex-column align-items-end">
                  <div className="card" id="accordiongmatematicaalfabetizacao">
                    <div className="card-header-sondagem" role="tab" id="headingmatematicaalfabetizacao">
                      <div data-toggle="collapse" data-parent="#accordionescrita" href="#collapsegmatematicaalfabetizacao" aria-expanded="false"
                        aria-controls="collapsegmatematicaalfabetizacao">
                        <div className="d-flex line">
                          <div className="p-2 p-2sondagem"><small>Legendas das classificações</small></div>
                          <div className="ml-auto p-2"><i className="fas fa-angle-down rotate-icon"></i></div>
                        </div>
                      </div>
                    </div>
                    <div id="collapsegmatematicaalfabetizacao" className="collapse" role="tabpanel" aria-labelledby="headingmatematicaalfabetizacao" data-parent="#accordiongmatematicaalfabetizacao">
                      <div className="card-body-sondagem pt-0">
                        <div className="d-flex flex-column">
                          <div className="d-flex line max-column-size" >
                            <div className="p-2 p-2sondagem"><small className="text-muted">Acertou</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">A</small></div>
                          </div>
                          <div className="d-flex line max-column-size">
                            <div className="p-2 p-2sondagem"><small className="text-muted">Errou</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">E</small></div>
                          </div>
                          <div className="d-flex line max-column-size">
                            <div className="p-2 p-2sondagem"><small className="text-muted">Não resolveu</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">NR</small></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="container-tabpanel">
                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="First group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-single">Alfabetização</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="Second group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica  btn-single">1º ano</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="Third group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica  btn-single">2º ano</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="Fourth group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0 active">3º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">3º ano - CM</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="fifth group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">4º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">4º ano - CM</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="sixth group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">5º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">5º ano - CM</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="seventh group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">6º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">6º ano - CM</button>
                  </div>
                  <table className="table table-sm table-bordered table-hover table-sondagem-matematica">
                    <thead>
                      <tr>
                        <th rowSpan="5" className="align-middle border text-color-purple "><div className="ml-2"><small>Sondagem - 3º ano - <b>Campo Aditivo</b></small></div></th>
                        <th colSpan="8" className="text-center border sondagem-matematica-title"><small>Ordem 1 - ideia: COMPOSIÇÃO</small></th>
                        <th colSpan="8" className="text-center border sondagem-matematica-title"><small>Ordem 2 - ideia: TRANFORMAÇÃO</small></th>
                        <th colSpan="8" className="text-center border sondagem-matematica-title"><small>Ordem 3 - ideia: PROPORCIONALIDADE</small></th>
                      </tr>
                      <tr>
                        <th colSpan="8" className="text-center border text-color-purple "><small>Problemas 2º e 4º Bimestre</small></th>
                        <th colSpan="8" className="text-center border text-color-purple "><small>Problemas 2º e 4º Bimestre</small></th>
                        <th colSpan="8" className="text-center border text-color-purple "><small>Problemas 2º e 4º Bimestre</small></th>
                      </tr>
                      <tr>
                        <th colSpan="8">
                          <div className="container">
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Todo</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Parte</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Parte</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Dado</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                            </div>
                          </div>
                        </th>
                        <th colSpan="8">
                          <div className="container">
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Estado inicial</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Estado final</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Transformação</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Dado</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                            </div>
                          </div>
                        </th>
                        <th colSpan="8">
                          <div className="container">
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Valor maior</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Valor menor</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>&#8800; entre valores</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Dado</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                            </div>
                          </div>
                        </th>
                      </tr>
                      <tr>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                      </tr>
                      <tr>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                      </tr>
                    </thead>
                    <tbody>
                      
                      {this.props.students.map(student => (
                        <StudentPollMath1o key={student.sequence} student={student} updatePollStudent={this.props.updatePollStudent} />
                      ))}
                     
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="tab-pane fade border-left border-right border-bottom" id="matematica-3cm" role="tabpanel" aria-labelledby="matematica-tab-4" style={{ overflow: "hidden", overflowX: "auto" }}>
              {/* Sondagem Matemática 3º Ano - CM */}
              <div className="d-flex flex-fill flex-row-reverse">
                <div className="d-flex flex-column align-items-end">
                  <div className="card" id="accordiongmatematicaalfabetizacao">
                    <div className="card-header-sondagem" role="tab" id="headingmatematicaalfabetizacao">
                      <div data-toggle="collapse" data-parent="#accordionescrita" href="#collapsegmatematicaalfabetizacao" aria-expanded="false"
                        aria-controls="collapsegmatematicaalfabetizacao">
                        <div className="d-flex line">
                          <div className="p-2 p-2sondagem"><small>Legendas das classificações</small></div>
                          <div className="ml-auto p-2"><i className="fas fa-angle-down rotate-icon"></i></div>
                        </div>
                      </div>
                    </div>
                    <div id="collapsegmatematicaalfabetizacao" className="collapse" role="tabpanel" aria-labelledby="headingmatematicaalfabetizacao" data-parent="#accordiongmatematicaalfabetizacao">
                      <div className="card-body-sondagem pt-0">
                        <div className="d-flex flex-column">
                          <div className="d-flex line max-column-size" >
                            <div className="p-2 p-2sondagem"><small className="text-muted">Acertou</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">A</small></div>
                          </div>
                          <div className="d-flex line max-column-size">
                            <div className="p-2 p-2sondagem"><small className="text-muted">Errou</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">E</small></div>
                          </div>
                          <div className="d-flex line max-column-size">
                            <div className="p-2 p-2sondagem"><small className="text-muted">Não resolveu</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">NR</small></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="container-tabpanel">
                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="First group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-single">Alfabetização</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="Second group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica  btn-single">1º ano</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="Third group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica  btn-single">2º ano</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="Fourth group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">3º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0 active">3º ano - CM</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="fifth group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">4º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">4º ano - CM</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="sixth group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">5º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">5º ano - CM</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="seventh group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">6º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">6º ano - CM</button>
                  </div>
                  <table className="table table-sm table-bordered table-hover table-sondagem-matematica">
                    <thead>
                      <tr>
                        <th rowSpan="5" className="align-middle border text-color-purple "><div className="ml-2"><small>Sondagem - 3º ano - <b>Campo Multiplicativo</b></small></div></th>
                        <th colSpan="8" className="text-center border sondagem-matematica-title"><small>Ordem 4 - ideia: CONFIGURAÇÃO RETANGULAR</small></th>
                        <th colSpan="8" className="text-center border sondagem-matematica-title"><small>Ordem 5 - ideia: PROPORCIONALIDADE</small></th>
                      </tr>
                      <tr>
                        <th colSpan="8" className="text-center border text-color-purple "><small>Problemas 2º e 4º Bimestre</small></th>
                        <th colSpan="8" className="text-center border text-color-purple "><small>Problemas 2º e 4º Bimestre</small></th>
                      </tr>
                      <tr>
                        <th colSpan="8">
                          <div className="container">
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Linhas</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Colunas</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Total</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Dadas</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dadas</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                            </div>
                          </div>
                        </th>
                        <th colSpan="8">
                          <div className="container">
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Grandeza I</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Grandeza II</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                            </div>
                          </div>
                        </th>
                      </tr>
                      <tr>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                      </tr>
                      <tr>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.students.map(student => (
                        <StudentPollMathMult key={student.sequence} student={student} updatePollStudent={this.props.updatePollStudent} />
                      ))}                     
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="tab-pane fade border-left border-right border-bottom" id="matematica-4ca" role="tabpanel" aria-labelledby="matematica-tab-5" style={{ overflow: "hidden", overflowX: "auto" }}>
              {/* Sondagem Matemática 4º Ano - CA */}
              <div className="d-flex flex-fill flex-row-reverse">
                <div className="d-flex flex-column align-items-end">
                  <div className="card" id="accordiongmatematicaalfabetizacao">
                    <div className="card-header-sondagem" role="tab" id="headingmatematicaalfabetizacao">
                      <div data-toggle="collapse" data-parent="#accordionescrita" href="#collapsegmatematicaalfabetizacao" aria-expanded="false"
                        aria-controls="collapsegmatematicaalfabetizacao">
                        <div className="d-flex line">
                          <div className="p-2 p-2sondagem"><small>Legendas das classificações</small></div>
                          <div className="ml-auto p-2"><i className="fas fa-angle-down rotate-icon"></i></div>
                        </div>
                      </div>
                    </div>
                    <div id="collapsegmatematicaalfabetizacao" className="collapse" role="tabpanel" aria-labelledby="headingmatematicaalfabetizacao" data-parent="#accordiongmatematicaalfabetizacao">
                      <div className="card-body-sondagem pt-0">
                        <div className="d-flex flex-column">
                          <div className="d-flex line max-column-size" >
                            <div className="p-2 p-2sondagem"><small className="text-muted">Acertou</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">A</small></div>
                          </div>
                          <div className="d-flex line max-column-size">
                            <div className="p-2 p-2sondagem"><small className="text-muted">Errou</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">E</small></div>
                          </div>
                          <div className="d-flex line max-column-size">
                            <div className="p-2 p-2sondagem"><small className="text-muted">Não resolveu</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">NR</small></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="container-tabpanel">
                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="First group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-single">Alfabetização</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="Second group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica  btn-single">1º ano</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="Third group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica  btn-single">2º ano</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="Fourth group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">3º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">3º ano - CM</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="fifth group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0 active">4º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">4º ano - CM</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="sixth group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">5º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">5º ano - CM</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="seventh group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">6º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">6º ano - CM</button>
                  </div>
                  <table className="table table-sm table-bordered table-hover table-sondagem-matematica">
                    <thead>
                      <tr>
                        <th rowSpan="5" className="align-middle border text-color-purple "><div className="ml-2"><small>Sondagem - 4º ano - <b>Campo Aditivo</b></small></div></th>
                        <th colSpan="8" className="text-center border sondagem-matematica-title"><small>Ordem 1 - ideia: COMPOSIÇÃO</small></th>
                        <th colSpan="8" className="text-center border sondagem-matematica-title"><small>Ordem 2 - ideia: TRANFORMAÇÃO</small></th>
                        <th colSpan="8" className="text-center border sondagem-matematica-title"><small>Ordem 3 - ideia: COMPOSIÇÃO DE TRANSF.</small></th>
                        <th colSpan="8" className="text-center border sondagem-matematica-title"><small>Ordem 4 - ideia: COMPARAÇÃO</small></th>
                      </tr>
                      <tr>
                        <th colSpan="8" className="text-center border text-color-purple "><small>Problemas 2º e 4º Bimestre</small></th>
                        <th colSpan="8" className="text-center border text-color-purple "><small>Problemas 2º e 4º Bimestre</small></th>
                        <th colSpan="8" className="text-center border text-color-purple "><small>Problemas 2º e 4º Bimestre</small></th>
                        <th colSpan="8" className="text-center border text-color-purple "><small>Problemas 2º e 4º Bimestre</small></th>
                      </tr>
                      <tr>
                        <th colSpan="8">
                          <div className="container">
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Todo</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Parte</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Parte</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Dado</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                            </div>
                          </div>
                        </th>
                        <th colSpan="8">
                          <div className="container">
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Estado inicial</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Estado final</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Transformação</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dado</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                            </div>
                          </div>
                        </th>
                        <th colSpan="8">
                          <table class="table table-bordered table-sondagem" cellspacing="2">
                            <tr>
                              <th rowspan="2" class="align-middle"><small>Estado Inicial</small></th>
                              <th colspan="2"><small>Transformações</small></th>
                              <th rowspan="2" class="align-middle"><small>Estado Final</small></th>
                            </tr>
                            <tr>
                              <th><small>TI</small></th>
                              <th><small>T2</small></th>
                            </tr>
                            <tr>
                              <td><small>Dado</small></td>
                              <td><small>Dada</small></td>
                              <td><small>Dada</small></td>
                              <td><small>?</small></td>
                            </tr>
                          </table>
                        </th>
                        <th colSpan="8">
                          <div className="container">
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Valor maior</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Valor menor</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>&#8800; entre valores</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Dado</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                            </div>
                          </div>
                        </th>
                      </tr>
                      <tr>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                      </tr>
                      <tr>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                      </tr>
                    </thead>
                    <tbody>
                      
                      {this.props.students.map(student => (
                        <StudentPollMath4o key={student.sequence} student={student} updatePollStudent={this.props.updatePollStudent} />
                      ))}
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="tab-pane fade border-left border-right border-bottom" id="matematica-4cm" role="tabpanel" aria-labelledby="matematica-tab-6" style={{ overflow: "hidden", overflowX: "auto" }}>
              {/* Sondagem Matemática 4º Ano - CM */}
              <div className="d-flex flex-fill flex-row-reverse">
                <div className="d-flex flex-column align-items-end">
                  <div className="card" id="accordiongmatematicaalfabetizacao">
                    <div className="card-header-sondagem" role="tab" id="headingmatematicaalfabetizacao">
                      <div data-toggle="collapse" data-parent="#accordionescrita" href="#collapsegmatematicaalfabetizacao" aria-expanded="false"
                        aria-controls="collapsegmatematicaalfabetizacao">
                        <div className="d-flex line">
                          <div className="p-2 p-2sondagem"><small>Legendas das classificações</small></div>
                          <div className="ml-auto p-2"><i className="fas fa-angle-down rotate-icon"></i></div>
                        </div>
                      </div>
                    </div>
                    <div id="collapsegmatematicaalfabetizacao" className="collapse" role="tabpanel" aria-labelledby="headingmatematicaalfabetizacao" data-parent="#accordiongmatematicaalfabetizacao">
                      <div className="card-body-sondagem pt-0">
                        <div className="d-flex flex-column">
                          <div className="d-flex line max-column-size" >
                            <div className="p-2 p-2sondagem"><small className="text-muted">Acertou</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">A</small></div>
                          </div>
                          <div className="d-flex line max-column-size">
                            <div className="p-2 p-2sondagem"><small className="text-muted">Errou</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">E</small></div>
                          </div>
                          <div className="d-flex line max-column-size">
                            <div className="p-2 p-2sondagem"><small className="text-muted">Não resolveu</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">NR</small></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="container-tabpanel">
                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="First group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-single">Alfabetização</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="Second group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica  btn-single">1º ano</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="Third group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica  btn-single">2º ano</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="Fourth group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">3º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">3º ano - CM</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="fifth group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">4º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0 active">4º ano - CM</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="sixth group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">5º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">5º ano - CM</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="seventh group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">6º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">6º ano - CM</button>
                  </div>
                  <table className="table table-sm table-bordered table-hover table-sondagem-matematica">
                    <thead>
                      <tr>
                        <th rowSpan="5" className="align-middle border text-color-purple "><div className="ml-2"><small>Sondagem - 4º ano - <b>Campo Multiplicativo</b></small></div></th>
                        <th colSpan="8" className="text-center border sondagem-matematica-title"><small>Ordem 5 - ideia: CONFIGURAÇÃO RETANGULAR</small></th>
                        <th colSpan="8" className="text-center border sondagem-matematica-title"><small>Ordem 6 - ideia: PROPORCIONALIDADE</small></th>
                        <th colSpan="8" className="text-center border sondagem-matematica-title"><small>Ordem 7 - ideia: COMBINATÓRIA</small></th>
                      </tr>
                      <tr>
                        <th colSpan="8" className="text-center border text-color-purple "><small>Problemas 2º e 4º Bimestre</small></th>
                        <th colSpan="8" className="text-center border text-color-purple "><small>Problemas 2º e 4º Bimestre</small></th>
                        <th colSpan="8" className="text-center border text-color-purple "><small>Problemas 2º e 4º Bimestre</small></th>
                      </tr>
                      <tr>
                        <th colSpan="8">
                          <div className="container">
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Linhas</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Colunas</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Total</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Dadas</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dadas</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                            </div>
                          </div>
                        </th>
                        <th colSpan="8">
                          <div className="container">
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Grandeza I</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Grandeza II</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                            </div>
                          </div>
                        </th>
                        <th colSpan="8">
                          <div className="container">
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Atributo 1</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Atributo 2</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Total de combinações</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Dado</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dado</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                            </div>
                          </div>
                        </th>
                      </tr>
                      <tr>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                      </tr>
                      <tr>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                      </tr>
                    </thead>
                    <tbody>

                      {this.props.students.map(student => (
                        <StudentPollMath1o key={student.sequence} student={student} updatePollStudent={this.props.updatePollStudent} />
                      ))}

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="tab-pane fade border-left border-right border-bottom" id="matematica-5ca" role="tabpanel" aria-labelledby="matematica-tab-7" style={{ overflow: "hidden", overflowX: "auto" }}>
              {/* Sondagem Matemática 5º Ano - CA */}
              <div className="d-flex flex-fill flex-row-reverse">
                <div className="d-flex flex-column align-items-end">
                  <div className="card" id="accordiongmatematicaalfabetizacao">
                    <div className="card-header-sondagem" role="tab" id="headingmatematicaalfabetizacao">
                      <div data-toggle="collapse" data-parent="#accordionescrita" href="#collapsegmatematicaalfabetizacao" aria-expanded="false"
                        aria-controls="collapsegmatematicaalfabetizacao">
                        <div className="d-flex line">
                          <div className="p-2 p-2sondagem"><small>Legendas das classificações</small></div>
                          <div className="ml-auto p-2"><i className="fas fa-angle-down rotate-icon"></i></div>
                        </div>
                      </div>
                    </div>
                    <div id="collapsegmatematicaalfabetizacao" className="collapse" role="tabpanel" aria-labelledby="headingmatematicaalfabetizacao" data-parent="#accordiongmatematicaalfabetizacao">
                      <div className="card-body-sondagem pt-0">
                        <div className="d-flex flex-column">
                          <div className="d-flex line max-column-size" >
                            <div className="p-2 p-2sondagem"><small className="text-muted">Acertou</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">A</small></div>
                          </div>
                          <div className="d-flex line max-column-size">
                            <div className="p-2 p-2sondagem"><small className="text-muted">Errou</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">E</small></div>
                          </div>
                          <div className="d-flex line max-column-size">
                            <div className="p-2 p-2sondagem"><small className="text-muted">Não resolveu</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">NR</small></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="container-tabpanel">
                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="First group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-single">Alfabetização</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="Second group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica  btn-single">1º ano</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="Third group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica  btn-single">2º ano</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="Fourth group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">3º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">3º ano - CM</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="fifth group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">4º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">4º ano - CM</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="sixth group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0 active">5º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">5º ano - CM</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="seventh group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">6º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">6º ano - CM</button>
                  </div>
                  <table className="table table-sm table-bordered table-hover table-sondagem-matematica">
                    <thead>
                      <tr>
                        <th rowSpan="5" className="align-middle border text-color-purple "><div className="ml-2"><small>Sondagem - 4º ano - <b>Campo Aditivo</b></small></div></th>
                        <th colSpan="8" className="text-center border sondagem-matematica-title"><small>Ordem 1 - ideia: COMPOSIÇÃO</small></th>
                        <th colSpan="8" className="text-center border sondagem-matematica-title"><small>Ordem 2 - ideia: TRANFORMAÇÃO</small></th>
                        <th colSpan="8" className="text-center border sondagem-matematica-title"><small>Ordem 3 - ideia: COMPOSIÇÃO DE TRANSF.</small></th>
                        <th colSpan="8" className="text-center border sondagem-matematica-title"><small>Ordem 4 - ideia: COMPARAÇÃO</small></th>
                      </tr>
                      <tr>
                        <th colSpan="8" className="text-center border text-color-purple "><small>Problemas 2º e 4º Bimestre</small></th>
                        <th colSpan="8" className="text-center border text-color-purple "><small>Problemas 2º e 4º Bimestre</small></th>
                        <th colSpan="8" className="text-center border text-color-purple "><small>Problemas 2º e 4º Bimestre</small></th>
                        <th colSpan="8" className="text-center border text-color-purple "><small>Problemas 2º e 4º Bimestre</small></th>
                      </tr>
                      <tr>
                        <th colSpan="8">
                          <div className="container">
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Todo</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Parte</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Parte</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Dado</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                            </div>
                          </div>
                        </th>
                        <th colSpan="8">
                          <div className="container">
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Problema</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Estado inicial</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Transformação</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Estado final</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>2° Bl</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dado</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>4° Bl</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dado</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                            </div>
                          </div>
                        </th>
                        <th colSpan="8">
                          <table class="table table-bordered table-sondagem" cellspacing="2">
                            <tr>
                              <th rowspan="2" class="align-middle"><small>Estado Inicial</small></th>
                              <th colspan="2"><small>Transformações</small></th>
                              <th rowspan="2" class="align-middle"><small>Estado Final</small></th>
                            </tr>
                            <tr>
                              <th><small>TI</small></th>
                              <th><small>T2</small></th>
                            </tr>
                            <tr>
                              <td><small>Dado</small></td>
                              <td><small>Dada</small></td>
                              <td><small>Dada</small></td>
                              <td><small>?</small></td>
                            </tr>
                          </table>
                        </th>
                        <th colSpan="8">
                          <div className="container">
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Problema</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Valor maior</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Valor menor</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>&#8800; entre valores</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>2° Bl</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dado</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>4° Bl</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dado</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                            </div>
                          </div>
                        </th>
                      </tr>
                      <tr>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                      </tr>
                      <tr>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                      </tr>
                    </thead>
                    <tbody>

                      {this.props.students.map(student => (
                        <StudentPollMath4o key={student.sequence} student={student} updatePollStudent={this.props.updatePollStudent} />
                      ))}

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="tab-pane fade border-left border-right border-bottom" id="matematica-5cm" role="tabpanel" aria-labelledby="matematica-tab-8" style={{ overflow: "hidden", overflowX: "auto" }}>
              {/* Sondagem Matemática 5º Ano - CM */}
              <div className="d-flex flex-fill flex-row-reverse">
                <div className="d-flex flex-column align-items-end">
                  <div className="card" id="accordiongmatematicaalfabetizacao">
                    <div className="card-header-sondagem" role="tab" id="headingmatematicaalfabetizacao">
                      <div data-toggle="collapse" data-parent="#accordionescrita" href="#collapsegmatematicaalfabetizacao" aria-expanded="false"
                        aria-controls="collapsegmatematicaalfabetizacao">
                        <div className="d-flex line">
                          <div className="p-2 p-2sondagem"><small>Legendas das classificações</small></div>
                          <div className="ml-auto p-2"><i className="fas fa-angle-down rotate-icon"></i></div>
                        </div>
                      </div>
                    </div>
                    <div id="collapsegmatematicaalfabetizacao" className="collapse" role="tabpanel" aria-labelledby="headingmatematicaalfabetizacao" data-parent="#accordiongmatematicaalfabetizacao">
                      <div className="card-body-sondagem pt-0">
                        <div className="d-flex flex-column">
                          <div className="d-flex line max-column-size" >
                            <div className="p-2 p-2sondagem"><small className="text-muted">Acertou</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">A</small></div>
                          </div>
                          <div className="d-flex line max-column-size">
                            <div className="p-2 p-2sondagem"><small className="text-muted">Errou</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">E</small></div>
                          </div>
                          <div className="d-flex line max-column-size">
                            <div className="p-2 p-2sondagem"><small className="text-muted">Não resolveu</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">NR</small></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="container-tabpanel">
                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="First group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-single">Alfabetização</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="Second group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica  btn-single">1º ano</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="Third group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica  btn-single">2º ano</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="Fourth group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">3º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">3º ano - CM</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="fifth group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">4º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">4º ano - CM</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="sixth group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">5º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0 active">5º ano - CM</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="seventh group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">6º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">6º ano - CM</button>
                  </div>
                  <table className="table table-sm table-bordered table-hover table-sondagem-matematica">
                    <thead>
                      <tr>
                        <th rowSpan="5" className="align-middle border text-color-purple "><div className="ml-2"><small>Sondagem - 5º ano - <b>Campo Multiplicativo</b></small></div></th>
                        <th colSpan="8" className="text-center border sondagem-matematica-title"><small>Ordem 5 - ideia: COMBINATÓRIA</small></th>
                        <th colSpan="8" className="text-center border sondagem-matematica-title"><small>Ordem 6 - ideia: CONFIGURAÇÃO REGULAR</small></th>
                        <th colSpan="8" className="text-center border sondagem-matematica-title"><small>Ordem 7 - ideia: PROPORCIONALIDADE</small></th>
                        <th colSpan="8" className="text-center border sondagem-matematica-title"><small>Ordem 8 - ideia: MULTIPLICAÇÃO COMPARATIVA</small></th>
                      </tr>
                      <tr>
                        <th colSpan="8" className="text-center border text-color-purple "><small>Problemas 2º e 4º Bimestre</small></th>
                        <th colSpan="8" className="text-center border text-color-purple "><small>Problemas 2º e 4º Bimestre</small></th>
                        <th colSpan="8" className="text-center border text-color-purple "><small>Problemas 2º e 4º Bimestre</small></th>
                        <th colSpan="8" className="text-center border text-color-purple "><small>Problemas 2º e 4º Bimestre</small></th>
                      </tr>
                      <tr>
                        <th colSpan="8">
                          <div className="container">
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Atributo 1</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Atributo 2</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Total de combinações</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Dado</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dado</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                            </div>
                          </div>
                        </th>
                        <th colSpan="8">
                          <div className="container">
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Problema</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Linhas</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Colunas</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Total</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>2° Bl</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dadas</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dadas</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>4° Bl</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dadas</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Total</small>
                              </div>
                            </div>
                          </div>
                        </th>
                        <th colSpan="8">
                          <div className="container">
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Grandeza I</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Grandeza II</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                            </div>
                          </div>
                        </th>
                        <th colSpan="8">
                          <div className="container">
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Valor maior</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Valor menor</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>&#8800; entre valores</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Dado</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                            </div>
                          </div>
                        </th>
                      </tr>
                      <tr>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                      </tr>
                      <tr>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                      </tr>
                    </thead>
                    <tbody>

                      {this.props.students.map(student => (
                        <StudentPollMath4o key={student.sequence} student={student} updatePollStudent={this.props.updatePollStudent} />
                      ))}

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="tab-pane fade border-left border-right border-bottom" id="matematica-6ca" role="tabpanel" aria-labelledby="matematica-tab-9" style={{ overflow: "hidden", overflowX: "auto" }}>
              {/* Sondagem Matemática 6º Ano - CA */}
              <div className="d-flex flex-fill flex-row-reverse">
                <div className="d-flex flex-column align-items-end">
                  <div className="card" id="accordiongmatematicaalfabetizacao">
                    <div className="card-header-sondagem" role="tab" id="headingmatematicaalfabetizacao">
                      <div data-toggle="collapse" data-parent="#accordionescrita" href="#collapsegmatematicaalfabetizacao" aria-expanded="false"
                        aria-controls="collapsegmatematicaalfabetizacao">
                        <div className="d-flex line">
                          <div className="p-2 p-2sondagem"><small>Legendas das classificações</small></div>
                          <div className="ml-auto p-2"><i className="fas fa-angle-down rotate-icon"></i></div>
                        </div>
                      </div>
                    </div>
                    <div id="collapsegmatematicaalfabetizacao" className="collapse" role="tabpanel" aria-labelledby="headingmatematicaalfabetizacao" data-parent="#accordiongmatematicaalfabetizacao">
                      <div className="card-body-sondagem pt-0">
                        <div className="d-flex flex-column">
                          <div className="d-flex line max-column-size" >
                            <div className="p-2 p-2sondagem"><small className="text-muted">Acertou</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">A</small></div>
                          </div>
                          <div className="d-flex line max-column-size">
                            <div className="p-2 p-2sondagem"><small className="text-muted">Errou</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">E</small></div>
                          </div>
                          <div className="d-flex line max-column-size">
                            <div className="p-2 p-2sondagem"><small className="text-muted">Não resolveu</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">NR</small></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="container-tabpanel">
                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="First group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-single">Alfabetização</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="Second group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica  btn-single">1º ano</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="Third group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica  btn-single">2º ano</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="Fourth group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">3º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">3º ano - CM</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="fifth group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">4º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">4º ano - CM</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="sixth group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">5º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">5º ano - CM</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="seventh group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0 active">6º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">6º ano - CM</button>
                  </div>
                  <table className="table table-sm table-bordered table-hover table-sondagem-matematica">
                    <thead>
                      <tr>
                        <th rowSpan="5" className="align-middle border text-color-purple "><div className="ml-2"><small>Sondagem - 6º ano - <b>Campo Aditivo</b></small></div></th>
                        <th colSpan="8" className="text-center border sondagem-matematica-title"><small>Ordem 1 - ideia: COMPOSIÇÃO</small></th>
                        <th colSpan="8" className="text-center border sondagem-matematica-title"><small>Ordem 2 - ideia: TRANFORMAÇÃO</small></th>
                        <th colSpan="8" className="text-center border sondagem-matematica-title"><small>Ordem 3 - ideia: COMPOSIÇÃO DE TRANSF.</small></th>
                        <th colSpan="8" className="text-center border sondagem-matematica-title"><small>Ordem 4 - ideia: COMPARAÇÃO</small></th>
                      </tr>
                      <tr>
                        <th colSpan="8" className="text-center border text-color-purple "><small>Problemas 2º e 4º Bimestre</small></th>
                        <th colSpan="8" className="text-center border text-color-purple "><small>Problemas 2º e 4º Bimestre</small></th>
                        <th colSpan="8" className="text-center border text-color-purple "><small>Problemas 2º e 4º Bimestre</small></th>
                        <th colSpan="8" className="text-center border text-color-purple "><small>Problemas 2º e 4º Bimestre</small></th>
                      </tr>
                      <tr>
                        <th colSpan="8">
                          <div className="container">
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Todo</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Parte</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Parte</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Dado</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                            </div>
                          </div>
                        </th>
                        <th colSpan="8">
                          <div className="container">
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Problema</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Estado inicial</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Transformação</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Estado final</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>2° Bl</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dado</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>4° Bl</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dado</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                            </div>
                          </div>
                        </th>
                        <th colSpan="8">
                          <table class="table table-bordered table-sondagem" cellspacing="2">
                            <tr>
                              <th rowspan="2" class="align-middle"><small>Estado Inicial</small></th>
                              <th colspan="2"><small>Transformações</small></th>
                              <th rowspan="2" class="align-middle"><small>Estado Final</small></th>
                            </tr>
                            <tr>
                              <th><small>TI</small></th>
                              <th><small>T2</small></th>
                            </tr>
                            <tr>
                              <td><small>Dado</small></td>
                              <td><small>Dada</small></td>
                              <td><small>Dada</small></td>
                              <td><small>?</small></td>
                            </tr>
                          </table>
                        </th>
                        <th colSpan="8">
                          <div className="container">
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Problema</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Valor maior</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Valor menor</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>&#8800; entre valores</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>2° Bl</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dado</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>4° Bl</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dado</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                            </div>
                          </div>
                        </th>
                      </tr>
                      <tr>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                      </tr>
                      <tr>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                      </tr>
                    </thead>
                    <tbody>

                      {this.props.students.map(student => (
                        <StudentPollMath4o key={student.sequence} student={student} updatePollStudent={this.props.updatePollStudent} />
                      ))}

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="tab-pane fade border-left border-right border-bottom" id="matematica-6cm" role="tabpanel" aria-labelledby="matematica-tab-10" style={{ overflow: "hidden", overflowX: "auto" }}>
              {/* Sondagem Matemática 6º Ano - CM */}
              <div className="d-flex flex-fill flex-row-reverse">
                <div className="d-flex flex-column align-items-end">
                  <div className="card" id="accordiongmatematicaalfabetizacao">
                    <div className="card-header-sondagem" role="tab" id="headingmatematicaalfabetizacao">
                      <div data-toggle="collapse" data-parent="#accordionescrita" href="#collapsegmatematicaalfabetizacao" aria-expanded="false"
                        aria-controls="collapsegmatematicaalfabetizacao">
                        <div className="d-flex line">
                          <div className="p-2 p-2sondagem"><small>Legendas das classificações</small></div>
                          <div className="ml-auto p-2"><i className="fas fa-angle-down rotate-icon"></i></div>
                        </div>
                      </div>
                    </div>
                    <div id="collapsegmatematicaalfabetizacao" className="collapse" role="tabpanel" aria-labelledby="headingmatematicaalfabetizacao" data-parent="#accordiongmatematicaalfabetizacao">
                      <div className="card-body-sondagem pt-0">
                        <div className="d-flex flex-column">
                          <div className="d-flex line max-column-size" >
                            <div className="p-2 p-2sondagem"><small className="text-muted">Acertou</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">A</small></div>
                          </div>
                          <div className="d-flex line max-column-size">
                            <div className="p-2 p-2sondagem"><small className="text-muted">Errou</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">E</small></div>
                          </div>
                          <div className="d-flex line max-column-size">
                            <div className="p-2 p-2sondagem"><small className="text-muted">Não resolveu</small></div>
                            <div className="ml-auto p-2"><small className="text-muted">NR</small></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="container-tabpanel">
                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="First group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-single">Alfabetização</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="Second group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica  btn-single">1º ano</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="Third group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica  btn-single">2º ano</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="Fourth group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">3º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">3º ano - CM</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="fifth group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">4º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">4º ano - CM</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="sixth group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">5º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0">5º ano - CM</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="seventh group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-left border-right-0">6º ano - CA</button>
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica btn-double-right border-left-0 active">6º ano - CM</button>
                  </div>
                  <div class="btn-group mr-2 btn-group-sm" role="group" aria-label="Third group">
                    <button type="button" class="btn btn-outline-primary btn-sm btn-matematica  btn-single">...</button>
                  </div>
                  <table className="table table-sm table-bordered table-hover table-sondagem-matematica">
                    <thead>
                      <tr>
                        <th rowSpan="5" className="align-middle border text-color-purple "><div className="ml-2"><small>Sondagem - 6º ano - <b>Campo Multiplicativo</b></small></div></th>
                        <th colSpan="8" className="text-center border sondagem-matematica-title"><small>Ordem 5 - ideia: COMBINATÓRIA</small></th>
                        <th colSpan="8" className="text-center border sondagem-matematica-title"><small>Ordem 6 - ideia: CONFIGURAÇÃO REGULAR</small></th>
                        <th colSpan="8" className="text-center border sondagem-matematica-title"><small>Ordem 7 - ideia: PROPORCIONALIDADE</small></th>
                        <th colSpan="8" className="text-center border sondagem-matematica-title"><small>Ordem 8 - ideia: MULTIPLICAÇÃO COMPARATIVA</small></th>
                      </tr>
                      <tr>
                        <th colSpan="8" className="text-center border text-color-purple "><small>Problemas 2º e 4º Bimestre</small></th>
                        <th colSpan="8" className="text-center border text-color-purple "><small>Problemas 2º e 4º Bimestre</small></th>
                        <th colSpan="8" className="text-center border text-color-purple "><small>Problemas 2º e 4º Bimestre</small></th>
                        <th colSpan="8" className="text-center border text-color-purple "><small>Problemas 2º e 4º Bimestre</small></th>
                      </tr>
                      <tr>
                        <th colSpan="8">
                          <div className="container">
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Atributo 1</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Atributo 2</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Total de combinações</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Dado</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dado</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                            </div>
                          </div>
                        </th>
                        <th colSpan="8">
                          <div className="container">
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Problema</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Linhas</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Colunas</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Total</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>2° Bl</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dadas</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Total</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>4° Bl</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dadas</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Total</small>
                              </div>
                            </div>
                          </div>
                        </th>
                        <th colSpan="8">
                          <div className="container">
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Grandeza I</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Grandeza II</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                            </div>
                          </div>
                        </th>
                        <th colSpan="8">
                          <div className="container">
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Valor maior</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Valor menor</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>&#8800; entre valores</small>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col table-column-sondagem">
                                <small>Dado</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>?</small>
                              </div>
                              <div className="col table-column-sondagem">
                                <small>Dada</small>
                              </div>
                            </div>
                          </div>
                        </th>
                      </tr>
                      <tr>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">2ºB</small></th>
                        <th colSpan="4" className="text-center border poll-select-container"><small className="text-muted">4ºB</small></th>
                      </tr>
                      <tr>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Ideia</small></th>
                        <th colSpan="2" className="text-center border poll-select-container"><small className="text-muted">Resultado</small></th>
                      </tr>
                    </thead>
                    <tbody>

                      {this.props.students.map(student => (
                        <StudentPollMath4o key={student.sequence} student={student} updatePollStudent={this.props.updatePollStudent} />
                      ))}

                    </tbody>
                  </table>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
