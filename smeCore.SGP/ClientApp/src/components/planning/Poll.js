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
                                <button className="btn btn-warning text-white" disabled={this.props.year <= 0}>Salvar</button>
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
                                <small className="text-muted">Pr&eacute;-Sil&aacute;bico = <b>PS</b> <div className="dot color-bluescale-5"></div></small>
                                <small className="text-muted">Sil&aacute;bico sem Valor = <b>SSV</b> <div className="dot color-bluescale-4"></div></small>
                                <small className="text-muted">Sil&aacute;bico com Valor = <b>SCV</b> <div className="dot color-bluescale-3"></div></small>
                                <small className="text-muted">Sil&aacute;bico Alfab&eacute;tico = <b>SA</b> <div className="dot color-bluescale-2"></div></small>
                                <small className="text-muted">Sil&aacute;bico = <b>A</b> <div className="dot color-bluescale-1"></div></small>
                            </div>
                        </div>
                    </div>

                    <div>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active azul-ux" id="portugues-tab" data-toggle="tab" href="#portugues" role="tab" aria-controls="portuguesPoll" aria-selected="true">Portugu&ecirc;s</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link azul-ux" id="matematica-tab" data-toggle="tab" href="#matematica" role="tab" aria-controls="matematicaPoll" aria-selected="false">Matem&aacute;tica</a>
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
                                            <th colSpan="2" className="text-center border text-color-purple">1</th>
                                            <th colSpan="2" className="text-center border text-color-purple">2</th>
                                            <th colSpan="2" className="text-center border text-color-purple">3</th>
                                            <th colSpan="2" className="text-center border text-color-purple">4</th>
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