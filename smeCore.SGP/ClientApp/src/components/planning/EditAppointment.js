import React, { Component } from 'react';
import './EditAppointment.css';
import { MyObjectiveItem } from './MyObjectiveItem';
import { DynamicDatePicker } from '../inputs/DynamicDatePicker';
import { RichTextBox } from '../inputs/RichTextBox';
import { Student } from './Student';
import Select from 'react-select';

export class EditAppointment extends Component {
  constructor(props) {
    super(props);

    this.isLoaded = false;

    this.state = {
      color: "dot color-" + props.color,
      copyContent: {
        selectedClass: null,
        selectedDates: [
          {
            id: "copyContentDatePicker0",
            value: undefined
          }
        ],
        sequence: 0,
        learningObjectivesCheckbox: false,
        classDevelopmentCheckbox: false,
        homeworkCheckbox: false
      }
    };

    this.selectedChange = this.selectedChange.bind(this);
    this.dateChange = this.dateChange.bind(this);
    this.addDate = this.addDate.bind(this);
    this.removeDate = this.removeDate.bind(this);
    this.checkboxChange = this.checkboxChange.bind(this);
    this.copyContentClick = this.copyContentClick.bind(this);

    this.changeClassDevelopment = this.changeClassDevelopment.bind(this);
    this.changeContinuousRecovery = this.changeContinuousRecovery.bind(this);
    this.changeHomework = this.changeHomework.bind(this);
    this.changeLearningObjective = this.changeLearningObjective.bind(this);

    this.orderByFrequency = this.orderByFrequency.bind(this);
    this.orderByName = this.orderByName.bind(this);
    this.clearModal = this.clearModal.bind(this);
  }

  clearModal() {
    this.setState({ copyContent: null });
  }

  selectedChange(selectedClass) {
    var copyContent = this.state.copyContent;
    copyContent.selectedClass = selectedClass;

    this.setState({ copyContent: copyContent });
  }

  dateChange(date) {
    var copyContent = this.state.copyContent;

    for (var i = 0; i < copyContent.selectedDates.length; i++)
      if (copyContent.selectedDates[i].id === date.id) {
        copyContent.selectedDates[i].value = date.value
        break;
      }

    this.setState({ copyContent: copyContent })
  }

  addDate() {
    var copyContent = this.state.copyContent;
    if (copyContent.selectedDates.length < 5)
      copyContent.selectedDates.push({
        id: "copyContentDatePicker" + (++copyContent.sequence),
        value: undefined
      });

    this.setState({ copyContent: copyContent });
  }

  removeDate(dateId) {
    var copyContent = this.state.copyContent;
    if (copyContent.selectedDates.length > 1) {
      var removeIndex = -1;

      for (var i = 0; i < copyContent.selectedDates.length; i++)
        if (copyContent.selectedDates[i].id === dateId) {
          removeIndex = i;
          break;
        }

      copyContent.selectedDates.splice(removeIndex, 1);

      this.setState({ copyContent: copyContent })
    }
  }

  checkboxChange(event) {
    var copyContent = this.state.copyContent;
    copyContent[event.target.id] = event.target.checked;

    this.setState({ copyContent: copyContent });
  }

  copyContentClick() {
    // Formata a data no padrão americano (yyyy-mm-dd)
    function formatDate(date) {
      var values = date.split("/");

      return (values[2] + "-" + values[1] + "-" + values[0]);
    };

    var dates = [];

    for (var i = 0; i < this.state.copyContent.selectedDates.length; i++)
      dates.push(this.state.copyContent.selectedDates[i].value + " " + this.props.time);

    var model = {
      username: this.props.user.username,
      year: this.props.year,
      classroom: this.props.classroom,
      school: this.props.school,
      date: formatDate(this.props.date) + " " + this.props.time,
      copyToClassroom: this.state.copyContent.selectedClass.description,
      copyToSchool: this.state.copyContent.selectedClass.school,
      copyDates: dates,
      learningObjectives: this.state.copyContent.learningObjectivesCheckbox,
      classDevelopment: this.state.copyContent.classDevelopmentCheckbox,
      homework: this.state.copyContent.homeworkCheckbox
    };
    fetch('/api/Planejamento/MigrarConteudo', {
      method: "post",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(model)
    })
      .then(data => {
        if (data.status === 200) {
          data.json().then(result => {
            this.props.showMessage(result, "sucesso");
          });
          if (data.status === 206) {
            data.json().then(result => {
              this.props.showMessage(result, "erro");
            });
          }
          else if (data.status === 500) {
            this.props.showMessage("Ocorreu um erro!", "erro");
          }
        }
      });
  }

    changeClassDevelopment(change) {
      var editClassSchedule = this.props.editClassSchedule;
      editClassSchedule.classDevelopment = change;

      this.props.updateEditClassSchedule(editClassSchedule);
    }

    changeContinuousRecovery(change) {
      var editClassSchedule = this.props.editClassSchedule;
      editClassSchedule.continuousRecovery = change;

      this.props.updateEditClassSchedule(editClassSchedule);
    }

    changeHomework(change) {
      var editClassSchedule = this.props.editClassSchedule;
      editClassSchedule.homework = change;

      this.props.updateEditClassSchedule(editClassSchedule);
    }

    changeLearningObjective(event) {
      var editClassSchedule = this.props.editClassSchedule;
      editClassSchedule.learningObjectives[event.target.id] = event.target.value;

      this.props.updateEditClassSchedule(editClassSchedule);
    }

    orderByFrequency() {
      this.props.frequencyOrderBySequence();
    }

    orderByName() {
      this.props.frequencyOrderByName();
    }

    render() {
      var copyContent = this.state.copyContent;

      return (
        <div className="editAppointment" >
          <hr className="horizontal-rule bg-azul-ux" />

          <div className="editAppointment-container form-inline">
            <div className="form-inline">
              <div className={this.state.color}></div>&nbsp;
                        <div className="font-weight-bold">{this.props.date}</div>&nbsp;
                        <div>{this.props.time}</div>&nbsp;
                        <div>-</div>&nbsp;
                        <div>{this.props.classroom}</div>&nbsp;
                        <div>-</div>&nbsp;
                        <div className="font-weight-bold">{this.props.school}</div>
            </div>

            <div className="ml-auto form-inline">
              <a className="btn btn-primary" href="http://sgp.sme.prefeitura.sp.gov.br/Academico/ControleTurma/Listao.aspx" role="button">Listão <i className="fas fa-list-alt"></i></a>
              <div className="spacing"></div>
              <button className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">Migrar Conteúdo <i className="fas fa-share-square"></i></button>

              <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h4 className="modal-title text-secondary" id="exampleModalLongTitle">Copiar conte&uacute;do</h4>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <div className="w-100">
                        <label className="float-left font-weight-light">Para a turma:</label>
                        <br />
                        <Select className="w-100" type="text" value={this.state.copyContent.selectedClass} onChange={this.selectedChange} options={this.props.relatedClasses} />
                      </div>

                      <div className="w-100 pt-4">
                        <label className="float-left font-weight-light">Aula do dia:</label>
                        <div>
                          {copyContent.selectedDates.map(item => (
                            <DynamicDatePicker key={item.id} id={item.id} value={item.value} dateChange={this.dateChange} removeDate={this.removeDate} />
                          ))}
                        </div>
                      </div>

                      <div className="w-100 pt-1">
                        <button className="btn btn-secondary btn-sm" onClick={this.addDate}><i className="fas fa-plus"></i> <small>Adicionar dia</small></button>
                      </div>

                      <div className="w-100 pt-4">
                        <label className="float-left font-weight-light">Selecione o conte&uacute;do:</label>

                        <div className="form-check w-100 d-flex justify-content-start pt-2">
                          <input type="checkbox" className="form-check-input" id="learningObjectivesCheckbox" onChange={this.checkboxChange} checked={this.state.copyContent.learningObjectivesCheckbox} />
                          <label className="form-check-label" htmlFor="learningObjectivesCheckbox"><small className="font-weight-bold">Objetivos de aprendizagem e meus objetivos (Curr&iacute;culo da Cidade)</small></label>
                        </div>

                        <div className="form-check w-100 d-flex justify-content-start pt-2">
                          <input type="checkbox" className="form-check-input" id="classDevelopmentCheckbox" onChange={this.checkboxChange} checked={this.state.copyContent.classDevelopmentCheckbox} />
                          <label className="form-check-label" htmlFor="classDevelopmentCheckbox"><small className="font-weight-bold">Desenvolvimento da aula</small></label>
                        </div>

                        <div className="form-check w-100 d-flex justify-content-start pt-2">
                          <input type="checkbox" className="form-check-input" id="homeworkCheckbox" onChange={this.checkboxChange} checked={this.state.copyContent.homeworkCheckbox} />
                          <label className="form-check-label" htmlFor="homeworkCheckbox"><small className="font-weight-bold">Li&ccedil;&atilde;o de casa</small></label>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-danger" data-dismiss="modal">Cancelar</button>
                      <button type="button" className="btn btn-primary" data-dismiss="modal" disabled={this.state.copyContent.selectedClass === null || this.state.copyContent.selectedDates[0].value == undefined} onClick={this.copyContentClick}>Confirmar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="vertical-spacing"></div>

          <div className="editAppointment-container w-auto row">
            <div className="col">
              <div className="d-flex">
                <h5 className="font-weight-light text-color-purple">Objetivos de aprendizagem e meus objetivos (Currículo da cidade)</h5>
              </div>

              <hr className="header-rule" />

              <ul className="list-unstyled">
                {
                 this.props.editClassSchedule.learningObjectives != null &&  Object.entries(this.props.editClassSchedule.learningObjectives).map(([key, value]) => (
                  <MyObjectiveItem key={key} id={key} name={key} value={value} parent="EditAppointment" changeLearningObjective={this.changeLearningObjective} />
                ))}
              </ul>
            </div>

            <div className="col">
              <div>
                <div className="d-flex btn align-items-center" data-toggle="collapse" href="#multiCollapseExample0" role="button" aria-expanded="false" aria-controls="multiCollapseExample0">
                  <h5 className="font-weight-light text-color-purple">Frequência (preenchimento obrigatório)</h5>

                  <div className="d-flex flex-fill flex-row-reverse">
                    <i className="fas fa-chevron-circle-down text-secondary"></i>
                  </div>
                </div>

                <hr className="header-rule" />

                <div id="multiCollapseExample0" className="collapse">
                  <table className="table table-sm table-hover">
                    <thead>
                      <tr>
                        <th scope="col" className="clickable" onClick={this.orderByFrequency}><i className="fas fa-sort-numeric-down font-weight-light text-color-purple"></i></th>
                        <th scope="col" className="clickable" onClick={this.orderByName}><i className="fas fa-sort-alpha-down font-weight-light text-color-purple"></i></th>
                        <th scope="col"><span className="font-weight-light text-color-purple">Faltas</span></th>
                        <th scope="col"><span className="font-weight-light text-color-purple">% Aula</span></th>
                        <th scope="col"><span className="font-weight-light text-color-purple">Alertas</span></th>
                      </tr>
                    </thead>

                    <tbody>
                      {this.props.students.map(student => (
                        <Student key={student.sequence} sequence={student.sequence} name={student.name} attendance={student.attendance} />
                      ))}
                    </tbody>
                  </table>

                </div>
              </div>

              <div className="vertical-spacing"></div>

              <div>
                <div className="d-flex btn align-items-center" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">
                  <h5 className="font-weight-light text-color-purple">Desenvolvimento da aula</h5>

                  <div className="d-flex flex-fill flex-row-reverse">
                    <i className="fas fa-chevron-circle-down text-secondary"></i>
                  </div>
                </div>

                <hr className="header-rule" />

                <div id="multiCollapseExample1" className="collapse">
                  <RichTextBox name="desenvolvimentoAula" changeText={this.changeClassDevelopment} value={this.props.editClassSchedule.classDevelopment} />
                </div>
              </div>

              <div className="vertical-spacing"></div>

              <div>
                <div className="d-flex btn align-items-center" data-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample2">
                  <h5 className="font-weight-light text-color-purple">Recuperação contínua</h5>

                  <div className="d-flex flex-fill flex-row-reverse">
                    <i className="fas fa-chevron-circle-down text-secondary"></i>
                  </div>
                </div>

                <hr className="header-rule" />

                <div id="multiCollapseExample2" className="collapse">
                  <RichTextBox name="recuperacaoContinua" changeText={this.changeContinuousRecovery} value={this.props.editClassSchedule.continuousRecovery} />
                </div>
              </div>

              <div className="vertical-spacing"></div>

              <div>
                <div className="d-flex btn align-items-center" data-toggle="collapse" href="#multiCollapseExample3" role="button" aria-expanded="false" aria-controls="multiCollapseExample3">
                  <h5 className="font-weight-light text-color-purple">Lição de casa</h5>

                  <div className="d-flex flex-fill flex-row-reverse">
                    <i className="fas fa-chevron-circle-down text-secondary"></i>
                  </div>
                </div>

                <hr className="header-rule" />

                <div id="multiCollapseExample3" className="collapse">
                  <RichTextBox name="licaoCasa" changeText={this.changeHomework} value={this.props.editClassSchedule.homework} />
                </div>
              </div>
            </div>
          </div>

          <div className="vertical-spacing"></div>
        </div>
      );
    }
  }
