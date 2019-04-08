import React, { Component } from 'react';
import { StudentPoll } from './StudentPoll';
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
                    </div>

                    <div>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="planning-tab nav-link active azul-ux" id="portugues-tab" data-toggle="tab" href="#portugues" role="tab" aria-controls="portuguesPoll" aria-selected="true">Portugu&ecirc;s</a>
                            </li>
                            <li className="nav-item">
                                <a className="planning-tab nav-link azul-ux" id="matematica-tab" data-toggle="tab" href="#matematica" role="tab" aria-controls="matematicaPoll" aria-selected="false">Matem&aacute;tica</a>
                            </li>
                        </ul>
                    </div>

                    <div className="tab-content border-azul rounded">
                        <div className="tab-pane fade show active border-left border-right border-bottom" id="portugues" role="tabpanel" aria-labelledby="portugues-tab">
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

                        <div className="tab-pane fade border-left border-right border-bottom" id="matematica" role="tabpanel" aria-labelledby="matematica-tab">
                            <div className="container-tabpanel">
                                <h4 className="display-4">Em construção...</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}